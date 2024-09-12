from app import db
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime

class Voter(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    id_number = db.Column(db.String(20), unique=True, nullable=False)
    year_of_birth = db.Column(db.Integer, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)  # Store the hashed password
    votes = db.relationship('Vote', backref='voter', lazy=True)

    # Method to set the password hash
    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    # Method to verify the password
    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

# Candidate and Vote models remain the same as previously discussed
class Candidate(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    position = db.Column(db.String(100), nullable=False)
    votes = db.relationship('Vote', backref='candidate', lazy=True)

class Vote(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    voter_id = db.Column(db.Integer, db.ForeignKey('voter.id', name='fk_vote_voter'), nullable=False)
    candidate_id = db.Column(db.Integer, db.ForeignKey('candidate.id', name='fk_vote_candidate'), nullable=False)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)

    __table_args__ = (
        db.UniqueConstraint('voter_id', 'candidate_id', name='unique_voter_candidate'),
    )
