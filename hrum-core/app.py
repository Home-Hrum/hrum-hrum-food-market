from flask import Flask
from flask_sqlalchemy import SQLAlchemy

from config import DevelopmentConfig
from config import ProductionConfig


app = Flask(__name__)
app.config.from_object(DevelopmentConfig())

db = SQLAlchemy(app)
