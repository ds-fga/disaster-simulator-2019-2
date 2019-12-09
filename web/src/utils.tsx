import m from 'mithril';

const FLASK_HTTP = 'http://localhost:5000'


/**
 * Retorna uma lista de classes a partir dos argumentos.
 * 
 * @param args - String ou lista de classes para ser adicionada
 */
export function classes(...args) {
    let clsList = [];
    for (let cls of args) {
        if (typeof cls === 'string') {
            clsList.push(cls);
        }
        else if (cls instanceof Array) {
            console.log(cls);
            cls.map(x => clsList.push(x));  
        }
        else if (typeof cls === 'object' && cls.attrs) {
            cls.attrs.map(x => clsList.push(x));
        }
    }
    return clsList.join(" ");
}


function getUrl(args) {
    let url = ('/' + args.join('/')).replace('//', '/');
    return FLASK_HTTP + url;
}


/**
 * Realiza uma requisição ao servidor Flask e retorna o resultado imediatamente.
 */
export function get(...args) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', getUrl(args), false);
    xhr.send(null);
    let result = JSON.parse(xhr.response);
    try {
        return result['data']? result['data']: result;
    } 
    catch {
        return undefined;
    }
}


/**
 * Realiza uma requisição ao servidor Flask e retorna uma Promise (recomendado).
 */
export function request(...args) {
    return m.request({url: getUrl(args)});
}

/**
 * Funções para controlar a API do jogo
 */
export let game = {
    // Generico
    url: (...args) => get(...args),
    multiply: (name, value) => get('multiply', name, value),
    add: (name, value) => get('add', name, value),

    // Jogo
    step: n => get('game/step', (n === undefined)? 1: n),
    state: () => get('game/state'),
    save: (fname?) => get('game/save', fname || "game.json"),
    load: (fname?) => get('game/load', fname || "game.json"),
    
    // Dados da simulação
    get: (x?) => get('value', x || 'state'),
    series: (x?) => get('series', x || 'state'),
    followers: () => get('game/followers'),
}

window['game'] = game;