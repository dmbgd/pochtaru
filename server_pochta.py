from pymongo import MongoClient
import json
import pprint
#import pymorphy2
import re
from nltk.metrics.distance import edit_distance
import time
import pandas as pd

import numpy as np

from datetime import *
dt = datetime.now()

print(dt)


from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin


from sklearn.linear_model import LinearRegression



app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'application/json'
# app.config['SERVER_NAME'] = ''

@app.route("/")
@cross_origin()
def hello():
    return "<h3>Система сегментации пользователей портала pochta.ru</h3>"



def client_by_id(id):

    with open("/var/www/passwd_pochta_mongo.txt") as file:
        data = json.load(file)

    client = MongoClient(data['server'],
                         username=data['login'],
                         password=data['password'],
                         authSource='pochtaru')

    db = client.pochtaru

    col_users = db["clients3"]
    # finded_clients = col_users.find({}, {"hid": id})

    # Для примера достаточно 10
    finded_clients = col_users.find({'hid': id}, {'date_ts': 1}).sort('date_ts',-1).limit(10)

    data_x = []
    for x in finded_clients:
        data_x.append(x['date_ts'])
    #     print(x['date_ts'])
    data_y = list(range(0, len(data_x)))

    client.close()

    data_x.sort(reverse=True)

    data_x_num = []
    for dt in data_x:
        first_time = datetime.now()
        seconds = (dt - 25569) * 86400.0
        dt = datetime.utcfromtimestamp(dt)
        diff = abs(first_time - dt)
        data_x_num.append(diff.days)


    X = np.array(data_x_num).reshape(-1,1)
    y = np.array(data_y).reshape(-1,1)

    to_predict_x = [len(data_x_num)]
    to_predict_x = np.array(to_predict_x).reshape(-1,1)

    regsr = LinearRegression()
    regsr.fit(y, X)

    predicted_y = regsr.predict(to_predict_x)
    m= regsr.coef_
    c= regsr.intercept_

    return round(float(predicted_y - X[-1]))


@app.route('/api/predict_day', methods=['POST', "OPTIONS"])
@cross_origin()
def test():

    content = request.json
    days = client_by_id(content['hid'])
    return jsonify({"next_days": days})


@app.after_request
def apply_caching(response):
    #response.headers["X-Frame-Options"] = "SAMEORIGIN"
    response.headers["server"] = "forwhile"
    return response
	
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8099)

