from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS

db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)

    app.config.from_object('instance.config.Config')

    db.init_app(app)
    migrate.init_app(app, db)

    CORS(app)

    from .routes import main
    app.register_blueprint(main)

    return app