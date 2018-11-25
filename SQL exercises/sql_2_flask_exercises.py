import json
from sql_flask_exercises import *
from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello():
    return "Main page"

@app.route("/get_all_clients")
def get_all_clients2():
    out = get_all_clients()
    outstr = ''
    for k in out:
        outstr += str(out[k]) + '\n'
    print(outstr)    
    return outstr
@app.route("/test1")
def hello2():
    return "Entramos a test1"

@app.route("/test1/subtest")
def hello3():
    return "Nivel más interno"

    # clientS = "("({}){}".format(clientId, client.name))"
    #
    # print(clientS)
