from flask import Flask, make_response, jsonify, request
from flask_migrate import Migrate
from flask_cors import CORS
from flask_bcrypt import Bcrypt

from models import db, Candidate, Admin, Voter, Vote

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

bcrypt = Bcrypt(app)
CORS(app)

migrate = Migrate(app, db)
db.init_app(app)

#  get all candidates
@app.route('/api/candidates', methods=['GET', 'POST'])
def get_candidates():
    if request.method == 'GET':
        # Fetch all candidates
        candidates = Candidate.query.all()
        response_data = [candidate.to_dict() for candidate in candidates]
        return make_response(jsonify(response_data), 200)

    if request.method == 'POST':
        # Create a new candidate
        data = request.get_json()

        new_candidate = Candidate(
            name=data['name'],
            position=data['position'],
            party=data['party'],
            image=data['image']  # Assuming the image is a URL or some valid value
        )

        db.session.add(new_candidate)
        db.session.commit()

        return make_response(jsonify(new_candidate.to_dict()), 201)


# Admin login route
@app.route('/api/admin-login', methods=['POST'])
def admin_login():
    data = request.json
    admin = Admin.query.filter_by(id_number=data['idNumber']).first()

    if admin and admin.password == data['password']:
        response = make_response(jsonify({'message': 'Login successful'}), 200)
    else:
        response = make_response(jsonify({'message': 'Invalid credentials'}), 401)

    return response

#Sigunp Route

@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.json

    
    if not all(key in data for key in ('idNumber', 'firstName', 'lastName', 'dob', 'password')):
        return jsonify({'message': 'Missing required fields'}), 400

   
    existing_voter = Voter.query.filter_by(id_number=data['idNumber']).first()
    if existing_voter:
        return jsonify({'message': 'Voter with this ID already exists'}), 400

    # Create a new voter
    new_voter = Voter(
        name=f"{data['firstName']} {data['lastName']}",
        id_number=data['idNumber'],
        year_of_birth=int(data['dob'].split('-')[0]),  # Extract year from dob
        password=data['password']  
    )

    db.session.add(new_voter)
    db.session.commit()

    return jsonify({'message': 'Signup successful'}), 201



#Login Route

@app.route('/api/voter-login', methods=['POST'])
def voter_login():
    data = request.json

    # Validate the presence of necessary fields
    if not all(key in data for key in ('idNumber', 'password')):
        return jsonify({'message': 'Missing required fields'}), 400

    # Find the voter by idNumber
    voter = Voter.query.filter_by(id_number=data['idNumber']).first()

    # Check if the voter exists and the password matches
    if voter and voter.password == data['password']:  # No password hashing here
        return jsonify({'message': 'Login successful'}), 200
    else:
        return jsonify({'message': 'Invalid ID number or password'}), 401





@app.errorhandler(Exception)
def handle_error(e):
    return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    app.run(port=5555, debug=True)
