from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from peewee import DoesNotExist
from playhouse.shortcuts import model_to_dict

from comment import Comment

comment = Blueprint('comments', __name__, url_prefix='/comments')

@comment.route('/', methods=['GET'])
@login_required   
def get_all_comments():
    try:
        comments = [model_to_dict(comment) for comment in Comment.select()]
        return jsonify(comments), 200
    except DoesNotExist:
        return jsonify(message='Error getting the resources'), 500

@comment.route('/', methods=['POST'])
@login_required
def create_comment():
    body = request.get_json()
    comment = Comment.create(**body, user_id=current_user.id)
    comment_dict = model_to_dict(comment)
    return jsonify(comment_dict), 201

@comment.route('/<int:id>', methods=["PUT"])
@login_required
def update_comment(id):
    body = request.get_json()
    comment = Comment.get(id==Comment.id) 
    if (comment.user_id != current_user.id):
        return jsonify(message="Unauthorized!"), 401
    (Comment
        .update(**body)
        .where(Comment.id==id)
        .execute())
    return jsonify(model_to_dict(comment.get_by_id(id))), 200

@comment.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_comment(id):
    comment = Comment.get(id==Comment.id) 
    if (comment.user_id != current_user.id):
        return jsonify(message="Unauthorized!"), 401
    (Comment
        .delete()
        .where(Comment.id==id)
        .execute())
    return jsonify(message="comment successfully deleted!"), 204

