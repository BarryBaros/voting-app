from flask import Blueprint, request, jsonify
from app.models import Voter, Candidate, Vote
from app import db

main = Blueprint('main', __name__)

@main.route('/')
def index():
    return jsonify({'message': 'Welcome to the Voting Platform.'})

@main.route('/voters', methods=['POST'])
def creat_voter():
    data = request.get_json()
    new_voter = Voter(
        name=data['name'],
        id_number=data['id_number'],
        year_of_birth=['year_of_birth'],
        password=data['password']
    )

    db.session.add(new_voter)
    db.session.commit()
    return jsonify({'message': 'Voter created successfully.'}), 201