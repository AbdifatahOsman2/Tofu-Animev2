from peewee import *
import datetime

from pyparsing import Char

from db import DATABASE
from user import User


class Anime(Model):
    id = AutoField()
    name = CharField()
    author = CharField()
    type = CharField()
    rating = IntegerField()
    hot_take = CharField()
    image = CharField()
    user = ForeignKeyField(User, backref='animes')
    created_at = DateTimeField(default=datetime.datetime.now)

    class Meta:
        database = DATABASE