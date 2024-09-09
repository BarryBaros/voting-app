import os

class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'your_secret_key_here')
    SQLALCHEMY_DATABASE_URI = 'sqlite:///voting_app.db'  # SQLite database
    SQLALCHEMY_TRACK_MODIFICATIONS = False