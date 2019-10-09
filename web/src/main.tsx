// Genérico
import m = require('mithril'); window['m'] = m;
import { model } from './model';

// Componentes
import { Initial } from './initial/initial';
import { Intro } from './intro/intro';
import { Event } from './event/event';
import { Style } from './style';

import { Science } from './science/science';
import { Politics } from './politics/politics';
import { Economy } from './economy/economy';
import { Conspiracy } from './conspiracy/conspiracy';

import { Graphics } from './graphics/graphics';
import { Illuminati } from './illuminati/illuminati';
import { Population } from './population/population';


let pages = {
    Initial: Initial,
    Intro: Intro,
    Event: Event,
    Style: Style,

    Science: Science,
    Politics: Politics,
    Economy: Economy,
    Conspiracy: Conspiracy,

    Graphics: Graphics,
    Illuminati: Illuminati,
    Population: Population,
};


/**
 * Componente que representa a aplicação principal.
 */
class App {
    constructor() {
        // Inicia o modelo inicial para a janela de introdução.
        let query = m.parseQueryString(window.location.search),
            page = (query.start || 'Intro').toString();
        model.window = pages[page] || {view: () => <div>Elemento inválido: <em>{query.start}</em></div>};
    }

    /**
     * Renderiza aplicação principal.
     */
    view() {
        return <div class="App">
            <Initial></Initial>
            {model.window ? m(model.window) : ""}
        </div>;
    }
}

/**
 * Inicia a aplicação.
 */
function init() {
    // Procura elemento que contêm a aplicação
    var elem = document.querySelector('#app');

    // Monta aplicação no elemento 
    m.mount(elem, App);
}

init();