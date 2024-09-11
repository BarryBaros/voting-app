from app import db

class Voter(db.Model):
    __tablename__ = "voters"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    id_number = db.Column(db.Integer, unique=True, nullable=False)
    year_of_birth = db.Column(db.Integer, nullable=False)
    password = db.Column(db.String(100), nullable=False)

class Candidate(db.Model):
    __tablename__ = "candidates"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    position = db.Column(db.String(100), nullable=False)
    party = db.Column(db.String(100), nullable=False)
    image = db.Column(db.File, nullable=False)

class Vote(db.Model):
    __tablename__ = "vote"

    id = db.Column(db.Integer, primary_key=True)
    Voter_id = db.Column(db.Integer, db.ForeignKey('voters.id'))
    candidate_id = db.Column(db.Integer, db.ForeignKey('candidates.id'))

class Admin(db.Model):
    __tablename__ = "admins"

    id  = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    id_numeber = db.Column(db.Integer, nullable=False)