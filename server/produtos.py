
from flask import Blueprint, request, jsonify
from redisworks import Root


root = Root
root.prod_list = [
    {"id": 0, "produto": "Caneca Atlética", "valor": 10},
    {"id": 1, "produto": "Chapéu Atlética", "valor": 25},
    {"id": 2, "produto": "Tirante Atlética", "valor": 2}
]
prod_api = Blueprint('produtos', 'produtos', url_prefix='/produtos')


@prod_api.route('/', methods=['GET', 'POST'])
def api_list():
    if request.method == 'GET':
        items = root.prod_list
        return jsonify(items)
    else:
        return post_item(request.form.get('produto'), request.form.get('valor'))


@prod_api.route('/<item_id>', methods=['GET'])
def api_item(item_id):
    return get_item(item_id)


def get_item(item_id):
    return jsonify(root.prod_list[int(item_id)])


def post_item(produto, valor):
    root.prod_list.append({
        "id": len(root.prod_list), "produto": produto, "valor": valor
    })
    return jsonify(root.prod_list)
