from flask import Blueprint, request, jsonify
from app.models import Voter, Candidate, Vote
from app import db
from flask_jwt_extended import jwt_required, get_jwt_identity
from datetime import datetime

main = Blueprint('main', __name__)

# ------------------------
# Voting Route (Cast Vote)
# ------------------------
@main.route('/vote', methods=['POST'])
@jwt_required()  # Require JWT token for authenticated voting
def cast_vote():
    data = request.get_json()
    
    # Get the voter ID from the JWT token
    voter_id_number = get_jwt_identity()
    
    # Find the voter by ID number
    voter = Voter.query.filter_by(id_number=voter_id_number).first()

    # Ensure the voter exists
    if not voter:
        return jsonify({'error': 'Voter not found.'}), 404

    # Find the candidate by the provided candidate ID
    candidate = Candidate.query.get(data['candidate_id'])
    if not candidate:
        return jsonify({'error': 'Candidate not found.'}), 404

    # Ensure the voter hasn't already voted for this candidate
    existing_vote = Vote.query.filter_by(voter_id=voter.id, candidate_id=candidate.id).first()
    if existing_vote:
        return jsonify({'error': 'You have already voted for this candidate.'}), 400

    # Create a new vote
    new_vote = Vote(
        voter_id=voter.id,
        candidate_id=candidate.id,
        timestamp=datetime.utcnow()
    )

    # Save the new vote to the database
    db.session.add(new_vote)
    db.session.commit()

    # Return a success message
    return jsonify({'message': 'Vote cast successfully!'}), 201

# ------------------------
# Results Route (Get Candidate Votes)
# ------------------------
@main.route('/results', methods=['GET'])
def get_results():
    # Get the total vote count for each candidate
    results = db.session.query(Candidate.name, db.func.count(Vote.id).label('votes'))\
                        .join(Vote, Candidate.id == Vote.candidate_id)\
                        .group_by(Candidate.id)\
                        .all()

    # Prepare the response
    results_data = [{'candidate': result[0], 'votes': result[1]} for result in results]

    return jsonify(results_data)
