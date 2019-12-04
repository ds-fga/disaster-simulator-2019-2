import os
import json
from flask import Flask, jsonify
from flask_cors import CORS
from . import simulation
from . import events

app = Flask(__name__)
CORS(app)


@app.route('/value/state/')
def get_state():
    return jsonify(simulation.get_vars())


@app.route('/value/<name>/')
def get_var(name):
    value = simulation.get_var(name.upper())
    return jsonify({'name': name.lower(), 'value': value})


@app.route('/series/<name>/')
def get_series(name):
    data = simulation.get_series(name)
    time = simulation.get_series('time')
    return jsonify({'name': name, 'time': time, 'data': data})


@app.route('/event/random/')
def get_event():
    return jsonify(events.get_event())


@app.route('/game/step/')
def step():
    data = simulation.step()
    return jsonify({'status': 'OK', 'data': data, 'year': data[0]})


@app.route('/game/step/<size>/')
def step_by(size):
    for _ in range(int(size) - 1):
        data = simulation.step()
    return step()


@app.route('/game/state/')
def params():
    return jsonify(simulation.get_game_state())


@app.route('/game/save/<name>')
def save_game(name):
    path = os.path.abspath(name)
    state = simulation.get_game_state()
    with open(path, 'w') as fd:
        json.dump(state, fd)
    return jsonify({'status': 'success', 'file': path, 'state': state})


@app.route('/game/load/<name>')
def load_game(name):
    path = os.path.abspath(name)
    with open(path, 'r') as fd:
        state = json.load(fd)
    simulation.set_game_state(state)
    return jsonify({'status': 'success', 'file': path, 'state': state})

@app.route('/science/list-techs/')
def list_techs():
    return jsonify(science.list_techs())

@app.route('/')
def root():
    dirname = os.path.dirname(__file__)
    path = os.path.join(dirname, 'index.html')
    with open(path, 'r') as fd:
        data = fd.read()
    return data
