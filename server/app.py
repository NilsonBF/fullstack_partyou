#!flask/bin/python
from flask import Flask
from users import users_api
from produtos import prod_api
from pedidos import pedidos_api
from flask_cors import CORS
 
app = Flask(__name__)
app.register_blueprint(users_api)
app.register_blueprint(prod_api)
app.register_blueprint(pedidos_api)
CORS(app)
 
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')