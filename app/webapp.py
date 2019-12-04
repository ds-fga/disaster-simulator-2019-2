from flask import Flask, escape, request, jsonify
import science
import simulation
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route('/')
def root():
    return '''
<html>
<body>
    <script src="https://unpkg.com/mithril/mithril.js"></script>
    
    <div id="app"></div>
    
    <script>
    var root = document.getElementById('app')
    </script>
</body>
</html>
'''


@app.route('/api/simulation/step/')
def step():
    data = simulation.step()
    return jsonify({'status': 'OK', 'data': data, 'year': data[0]}) 


@app.route('/api/simulation/step/<size>/')
def step_by(size):
    for _ in range(int(size) - 1):
        data = simulation.step()
    return step() 



@app.route('/api/simulation/state/')
def params():
    return jsonify({
        'year': simulation.get_var('time'),
        'population': simulation.get_var('population'),
        'capital': simulation.get_var('capital'),
        'temperature_atm': simulation.get_var('t_atm'),
        'temperature_ocean': simulation.get_var('t_ocean'),
    }) 


@app.route('/api/vars/<name>/')
def get_var(name):
    value = simulation.get_var(name.upper())
    return jsonify({'name': name.lower(), 'value': value})


@app.route('/api/series/<name>/')
def get_series(name):
    data = simulation.get_series(name)
    return jsonify({'name': name, 'data': data})

@app.route('/science/list-techs/')
def list_techs():
    return jsonify(science.list_techs())


@app.route('/science/buy/<id>/')
def buy_tech(id):
    return jsonify(science.buy_tech(id))

if __name__ == '__main__':
    app.run(debug=True)