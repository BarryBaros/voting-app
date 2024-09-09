from app import db

class Voter(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String,(100), nullable=False)
    id_number = db.Column(db.Integer(20), unique=True, nullable=False)
    year_of_birth = db.Column(db.Integer, nullable=False)
    password = db.Column(db.String(100), nullable=False)