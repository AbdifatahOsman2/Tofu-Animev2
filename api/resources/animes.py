from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from peewee import DoesNotExist
from playhouse.shortcuts import model_to_dict

from anime import Anime

anime = Blueprint('animes', __name__, url_prefix='/animes')


@anime.route('/', methods=['GET'])
def get_all_animes():
    try:
        animes = [model_to_dict(anime) for anime in Anime.select()]
        return jsonify(animes), 200
    except DoesNotExist:
        return jsonify(message='Error getting the resources'), 500


@anime.route('/<int:id>', methods=["GET"])
def get_one_anime(id):
    anime = Anime.get_by_id(id)
    return jsonify(model_to_dict(anime)), 200

@anime.route('/', methods=['POST'])
@login_required
def create_anime():
    body = request.get_json()
    anime = Anime.create(**body, user=current_user.id)
    anime_dict = model_to_dict(anime)
    return jsonify(anime_dict), 201

@anime.route('/<int:id>', methods=["PUT"])
@login_required
def update_anime(id):
    body = request.get_json()
    if (Anime.user != current_user.id):
        return jsonify(message="Unauthorized!"), 401
    (Anime
        .update(**body)
        .where(Anime.id==id)
        .execute())
    return jsonify(model_to_dict(Anime.get_by_id(id))), 200

@anime.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_anime(id):
    if (Anime.user != current_user.id):
        return jsonify(message="Unauthorized!"), 401
    (Anime
        .delete()
        .where(Anime.id==id)
        .execute())
    return jsonify(message="anime successfully deleted!"), 204