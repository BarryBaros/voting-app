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

# Default home route
@app.route('/')
def home():
    return jsonify({"message": "Welcome My Vote-My Choice!"}), 200


# Get all candidates with vote counts
@app.route('/api/candidates', methods=['GET'])
def get_candidates():
    if request.method == 'GET':
        candidates = Candidate.query.all()
        response_data = []
        for candidate in candidates:
            votes_count = Vote.query.filter_by(candidate_id=candidate.id).count()
            candidate_data = candidate.to_dict()
            candidate_data['votes'] = votes_count  # Add votes count to candidate data
            response_data.append(candidate_data)
        return make_response(jsonify(response_data), 200)

# Create a new candidate
@app.route('/api/candidates', methods=['POST'])
def create_candidate():
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
        return make_response(jsonify({'message': 'Login successful'}), 200)
    else:
        return make_response(jsonify({'message': 'Invalid credentials'}), 401)

# Signup route
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
        password=data['password']  # Store password as plain text
    )

    db.session.add(new_voter)
    db.session.commit()

    return jsonify({'message': 'Signup successful'}), 201

# Login route
@app.route('/api/voter-login', methods=['POST'])
def voter_login():
    data = request.json

    if not all(key in data for key in ('idNumber', 'password')):
        return jsonify({'message': 'Missing required fields'}), 400

    voter = Voter.query.filter_by(id_number=data['idNumber']).first()

    if voter and voter.password == data['password']: 
        return jsonify({'message': 'Login successful',
                        'voterName': voter.name
                        }), 200
    else:
        return jsonify({'message': 'Invalid ID number or password'}), 401

# Cast vote route
@app.route('/api/cast-vote', methods=['POST'])
def cast_vote():
    data = request.json
    candidate_id = data.get('candidateId')
    voter_id = data.get('voterId')

    if not candidate_id or not voter_id:
        return jsonify({"error": "Candidate ID and Voter ID are required"}), 400

    # Check if the voter has already voted for this candidate
    existing_vote = Vote.query.filter_by(voter_id=voter_id, candidate_id=candidate_id).first()
    if existing_vote:
        return jsonify({"error": "Voter has already voted for this candidate"}), 400

    vote = Vote(voter_id=voter_id, candidate_id=candidate_id)
    db.session.add(vote)
    db.session.commit()

    return jsonify({"message": "Vote registered successfully"}), 200

@app.errorhandler(Exception)
def handle_error(e):
    return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(port=5555, debug=True)
