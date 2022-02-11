from flask import Flask, g
from db import DATABASE, initialize
import os
from flask_cors import CORS
from flask_login import current_user, LoginManager, login_manager
from user import User
from anime import Anime
from comment import Comment
from resources.comments import comment
from resources.users import user
from resources.animes import anime

DEBUG = True
PORT = 8000

login_manager = LoginManager()
app = Flask(__name__)

app.secret_key = os.environ.get('SECRET') or "abdifatahssworld132"
login_manager.init_app(app)

@login_manager.user_loader
def load_user(user):
    try: 
        return User.get(User.id == user)
    except:
        return None

@app.before_request
def before_request():
    g.db = DATABASE
    g.db.connect()

@app.after_request
def after_request(response):
    g.db.close()
    return response


@app.route('/')
def index():
    return 'abdifatahs anime api'

app.register_blueprint(user)
app.register_blueprint(anime)
app.register_blueprint(comment)

origins=['http://localhost:3000']

if 'DATABASE_URL' in os.environ:
    initialize([Anime, User, Comment])
    app.config['SESSION_COOKIE_SECURE'] = True
    app.config['SESSION_COOKIE_HTTPONLY'] = False
    app.config['SESSION_COOKIE_SAMESITE'] = 'None'
    origins.append(os.environ.get('CLIENT_URL'))

CORS(app, origins=origins, supports_credentials=True)

if __name__ == '__main__':
    initialize([ Anime, User, Comment ])
    app.run(debug=DEBUG, port=PORT)