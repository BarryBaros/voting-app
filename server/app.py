from flask import Flask, make_response, jsonify, request
from flask_migrate import Migrate

from models import db, Candidate, Admin

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app, db)
db.init_app(app)

#  get all candidates
@app.route('/api/candidates', methods=['GET'])
def get_candidates():
    candidates = Candidate.query.all()
    response_data = [candidate.to_dict() for candidate in candidates]
    
  
    response = make_response(jsonify(response_data), 200)
    response.headers['Content-Type'] = 'application/json'
    return response

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
