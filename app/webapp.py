import os
import json
from flask import Flask, jsonify
from flask_cors import CORS
from . import simulation
from . import events
from . import illuminati
from . import science
from . import economy
# from . import culture

app = Flask(__name__)
CORS(app)


@app.route('/value/state/')
def get_state():
    return jsonify(simulation.get_vars())


@app.route('/value/<name>/')
def get_var(name):
    value = simulation.get_var(name.upper())
    return jsonify({'name': name.lower(), 'value': value})


@app.route('/multiply/<name>/<value>/')
def multiply(name, value):
    value = simulation.multiply_var(name.upper(), float(value))
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
    return jsonify({'status': 'OK', 'data': data})


@app.route('/game/step/<size>/')
def step_by(size):
    for _ in range(int(size) - 1):
        data = simulation.step()
    return step()


@app.route('/game/restart/')
def restart_game():
    data = simulation.restart()
    return jsonify({'status': 'OK', 'data': data})


@app.route('/game/state/')
def params():
    return jsonify(simulation.get_game_state())


@app.route('/game/save/<name>')
def save_game(name):
    science.save_techs()
    path = os.path.abspath(name)
    state = simulation.get_game_state()
    with open(path, 'w') as fd:
        json.dump(state, fd)
    return jsonify({'status': 'success', 'file': path, 'state': state})


@app.route('/game/load/<name>')
def load_game(name):
    science.load_techs()
    path = os.path.abspath(name)
    with open(path, 'r') as fd:
        state = json.load(fd)
    simulation.set_game_state(state)
    return jsonify({'status': 'success', 'file': path, 'state': state})

@app.route('/science/list-techs/')
def list_techs():
    return jsonify(science.list_techs())

@app.route('/science/buy-tech/<id>')
def buy_tech(id):
    capital = simulation.get_var('capital')
    decrement = science.buy_tech(id)['price']
    simulation.set_var('capital', capital - decrement)
    i=0
    for effect in science.data[id]['affects']:
        simulation.multiply_var(effect, science.data[id]['how'][i])
        i-=-1
    return jsonify({'status': 'success', 'tech': id, 'money': capital, 'decrement': science.buy_tech(id)})

@app.route('/science/<techtype>')
def get_type(techtype):
    return jsonify(science.get_type(techtype))

@app.route('/cheat/add')
def cheat_add():
    capital = simulation.get_var('capital') + 50
    simulation.set_var('capital', capital)
    return jsonify({'status': 'success', 'capital': capital})

@app.route('/cheat/reset')
def reset():
    science.reset()
    return jsonify({'status': 'success', 'techs': science.list_techs()})

@app.route('/cheat/minus')
def cheat_minus():
    capital = simulation.get_var('capital') - 50
    simulation.set_var('capital', capital)
    return jsonify({'status': 'success', 'capital': capital})
    
@app.route('/economy/store-itens/')
def get_store():
    return jsonify(economy.get_store())

@app.route('/game/followers/')
def followers():
    to_dict = lambda x: dict(zip(x._fields, x))

    def clean(d):
        return [{'name': k, **to_dict(v['followers'])} for k, v in d.items()]
        return [{**v['followers'], 'name': k} for k, v in d.items()]

    data = {}
    response = {'status': 'success', 'data': data}
    data['followers'] = simulation.get_var('followers')
    data['illuminati'] = clean(simulation.get_var('illuminati'))
    return jsonify(response)

@app.route('/')
def root():
    dirname = os.path.dirname(__file__)
    path = os.path.join(dirname, 'index.html')
    with open(path, 'r') as fd:
        data = fd.read()
    return data

# @app.route('/culture/get_culture')
# def get_culture():
#     return jsonify(culture.get_culture())