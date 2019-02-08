#!flask/bin/python
from flask import Flask
from todo import todo_api
from users import users_api
from flask_cors import CORS
 
app = Flask(__name__)
app.register_blueprint(todo_api)
app.register_blueprint(users_api)
CORS(app)
 
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')