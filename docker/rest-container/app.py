from flask import Flask
from redis import Redis, RedisError
import os
import socket

app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello {name}. Hostname: {hostname}. I modified a line again".format(
        name=os.getenv("NAME"),
        hostname=socket.gethostname())

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80)

