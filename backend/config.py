from os import environ 
from dotenv import load_dotenv 

load_dotenv()

class Config():
    SQLALCHEMY_DATABASE_URI = environ.get('URL_DATABASE_PROD') 
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = environ.get('SECRET_KEY')
    CORS_ORIGINS = environ.get('CORS_ORIGINS', '').split(',')