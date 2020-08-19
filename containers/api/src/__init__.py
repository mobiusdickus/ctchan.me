import os

from flask import Flask

from src import main


def create_app():
    # Create and configure the app
    app = Flask(__name__)

    # Ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    # Register blueprints
    app.register_blueprint(main.bp)

    return app
