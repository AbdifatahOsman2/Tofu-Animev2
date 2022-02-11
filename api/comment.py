from peewee import *
from db import DATABASE
from user import User
from anime import Anime

class Comment(Model):
    id = AutoField()
    post = ForeignKeyField(Anime, backref='anime')
    user = ForeignKeyField(User, backref='user')
    text = CharField()

    class Meta:
        database = DATABASE
