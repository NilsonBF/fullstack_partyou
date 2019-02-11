
from flask import Blueprint, request, jsonify 
from redisworks import Root 
  
  
root = Root 
root.pedidos_list = [
    {"id":0, "valorTotal":90, "idCliente": 1, "status": "PAGO", "itens":[
        {"id":0, "qtd": 4}
    ]},
    {"id":1, "valorTotal":20, "idCliente": 1, "status": "ENTREGUE", "itens":[
        {"id":0, "qtd": 2},
        {"id":2, "qtd": 5}
    ]}
]
pedidos_api = Blueprint('pedidos', 'pedidos', url_prefix='/pedidos') 
  
  
@pedidos_api.route('/', methods=['GET','POST']) 
def api_list(): 
    if request.method == 'GET':
        items = root.pedidos_list 
        return jsonify(items)
    else:
        return post_item(request.form)
  
  
@pedidos_api.route('/<item_id>', methods=['GET', 'PUT', 'PATCH']) 
def api_item(item_id): 
    if request.method == 'GET': 
        return get_item(item_id) 
    else: 
        return put_item(item_id, request.form) 
  
  
def get_item(item_id): 
    return root.pedidos_list[int(item_id)] 
  
def post_item(body):
    root.pedidos_list.append(
        {"id":len(root.pedidos_list), "valorTotal": body.get('valor'), "idCliente": body.get('idCliente'), "status": "CRIADO", "itens": body.get('itens')}
    )
    return jsonify(root.pedidos_list)

def put_item(item_id, body): 
    item = root.pedidos_list[int(item_id)]
    root.pedidos_list[int(item_id)] = {"id": item["id"], "valorTotal": item['valorTotal'], "idCliente": item['idCliente'], "status": body.get('status'), "itens": item['itens']}
    return jsonify(root.pedidos_list[int(item_id)])
