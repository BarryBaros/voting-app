from flask import Flask, make_response, jsonify, request
from flask_migrate import Migrate
from flask_cors import CORS

from models import db, Candidate, Admin

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

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

if __name__ == '__main__':
    app.run(port=5555, debug=True)
