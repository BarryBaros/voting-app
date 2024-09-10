from app import db

class Voter(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    id_number = db.Column(db.Integer, unique=True, nullable=False)
    year_of_birth = db.Column(db.Integer, nullable=False)
    password = db.Column(db.String(100), nullable=False)

class Candidate(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    position = db.Column(db.String(100), nullable=False)
    party = db.Column(db.String(100), nullable=False)

class Vote(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    Voter_id = db.Column(db.Integer, db.ForeignKey('voter.id'))
    candidate_id = db.Column(db.Integer, db.ForeignKey('candidate.id'))

class Admin(db.Model):
    id  = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    id_numeber = db.Column(db.Integer, nullable=False)