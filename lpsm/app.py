from flask import Flask, render_template
from flask import request
import logging as log
app = Flask(__name__)

@app.route("/")
def index():
    # return "Hello World!! This is SearchMaster Babayy.."
    return render_template("index.html")

@app.route("/helloserver")
def helloserver():
    log.warn(request.headers)
    return "Hello World!! This is SearchMaster Babayy.."

if __name__=="__main__":
    app.run("0.0.0.0", port=5000)