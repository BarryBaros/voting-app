from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy_serializer import SerializerMixin

metadata = MetaData()

db = SQLAlchemy(metadata=metadata)

class Voter(db.Model, SerializerMixin):
    __tablename__ = "voters"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    id_number = db.Column(db.Integer, unique=True, nullable=False)
    year_of_birth = db.Column(db.Integer, nullable=False)
    password = db.Column(db.String(100), nullable=False)

    votes = db.relationship('Vote', backref='voter')

class Candidate(db.Model, SerializerMixin):
    __tablename__ = "candidates"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    position = db.Column(db.String(100), nullable=False)
    party = db.Column(db.String(100), nullable=False)
    image = db.Column(db.String, nullable=False)

    votes = db.relationship('Vote', backref='candidate')

class Vote(db.Model, SerializerMixin):
    __tablename__ = "votes"

    id = db.Column(db.Integer, primary_key=True)
    voter_id = db.Column(db.Integer, db.ForeignKey('voters.id'))
    candidate_id = db.Column(db.Integer, db.ForeignKey('candidates.id'))

class Admin(db.Model, SerializerMixin):
    __tablename__ = "admins"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    id_number = db.Column(db.Integer, nullable=False)
    password = db.Column(db.String(100), nullable=False)

