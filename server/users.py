from flask import Blueprint, request, jsonify
from redisworks import Root


root = Root
root.users_list = {
    "1": {"login": "admin", "pw": "1234"},
    "2": {"login": "cliente", "pw": "1234"}
}
users_api = Blueprint('users', 'users', url_prefix='/users')


@users_api.route('/', methods=['GET'])
def api_list():
    items = root.users_list
    return jsonify(items)
