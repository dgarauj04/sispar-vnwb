from flask import Flask
from src.controller.colaborador_controller import bp_colaborador
from src.controller.reembolso_controller import bp_reembolso
from src.model import db
from config import Config
from flask_cors import CORS
from flasgger import Swagger


swagger_config = {
        "headers": [],
        "specs": [
            {
                "endpoint": 'apispec',
                "route": '/apispec.json/',
                "rule_filter": lambda rule: True,
                "model_filter": lambda tag: True,
            }
        ],
        "static_url_path": "/flasgger_static",
        "swagger_ui": True,
        "specs_route": "/apidocs/"
    }

def create_app():
    app = Flask(__name__)
    
    app.config.from_object(Config)
    
    CORS(app, resources={r"/*": {"origins": app.config['CORS_ORIGINS']}}, supports_credentials=True)
    db.init_app(app)
    Swagger(app, config=swagger_config)
    
    app.register_blueprint(bp_colaborador)
    app.register_blueprint(bp_reembolso)
    
    with app.app_context():
        db.create_all() 
    
    return app