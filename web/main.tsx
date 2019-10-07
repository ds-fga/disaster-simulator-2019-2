import m = require('mithril');
var React = {createElement: m};


function app() {
    return <div>
        <h1 style="font-family: Pixel; backdrop-filter: blur(5px);">Hello World!</h1>
    </div>
}

/**
 * Inicia a aplicação.
 */
function init() {
    var elem = document.querySelector('#app');
    m.mount(elem, {view: app})
}

init();