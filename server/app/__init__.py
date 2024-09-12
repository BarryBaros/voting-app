from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from flask_jwt_extended import JWTManager  # Import JWTManager

db = SQLAlchemy()
migrate = Migrate()
jwt = JWTManager()  # Initialize JWTManager

def create_app():
    app = Flask(__name__)

    # Load configurations (e.g., database URI, JWT secret key)
    app.config.from_object('instance.config.Config')

    db.init_app(app)
    migrate.init_app(app, db)

    CORS(app)  # Enable Cross-Origin Resource Sharing

    # Configure JWT (Make sure to add 'JWT_SECRET_KEY' in your config)
    app.config['JWT_SECRET_KEY'] = 'your_jwt_secret_key_here'  # Change this to a secure key
    jwt.init_app(app)  # Initialize JWT with the app

    # Register the main blueprint (routes)
    from .routes import main
    app.register_blueprint(main)

    return app
