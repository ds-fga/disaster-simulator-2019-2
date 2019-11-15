import m = require('mithril');
import {model} from '../model'
import {Window, Tab, Tabs, Btn, Sidebar} from '../ui';
import frask from '../../img/icones_tela_inicial/frasco.png';
import politic from '../../img/icones_tela_inicial/politic.png';
import money from '../../img/icones_tela_inicial/money.png';
import earth from '../../img/icones_tela_inicial/earth.png';
import graphic from '../../img/icones_tela_inicial/graphic.png';
import people from '../../img/icones_tela_inicial/people.png';
import reptle from '../../img/icones_tela_inicial/reptle.png';
import settings from '../../img/icones_tela_inicial/settings.png';
import conspirancy from '../../img/icones_tela_inicial/conspirancy.png';
import big_earth from '../../img/icones_tela_inicial/big-earth.png';
import bg_earth_pixels from '../../img/icones_tela_inicial/bg-earth-pixels.jpeg';
import bg_earth_normal from '../../img/icones_tela_inicial/bg-earth-normal.jpg';

var React = {
    createElement: m
};

/** A parte a seguir do código server para documentar o nome de cada botão,
 * O redirecionamento feito após clica-lo
 * E o icone respectivo
 */

 let leftMenuItens = {
    "nome": ["Temperatura", "Política", "Conspiração","Economia"],
    "caminho": ["Graphics", "teste2.html", "teste2.html", "teste.html"],
    "icone": [frask, politic, conspirancy, money],
}

let barMenuItens = {
    "nome": ["teste 1", "teste 2", "teste 3"],
    "caminho": ["teste.html", "teste2.html", "teste3.html"],
    "icone": ["icon icon-link", "icon icon-link", "icon icon-link"],
}
let rightMenuItens = {
    "nome": ["Gráfico", "Terra", "Conspiração", "População", "Configuraçoẽs"],
    "caminho": ["teste.html", "teste2.html", "teste2.html", "teste.html", "teste2.html", "teste2.html"],
    "icone": [graphic, earth, reptle, people, settings],
}

/**A parte a seguir é para auxiliar
 * O listamento de cada botão
 * Para cada Dashboard
 * 
 * <a href="#" class="nes-badge">
  <span class="is-dark">NES.css</span>
</a>

 */
function popUp(caminho) {
return <Initial>{window.open(`?start=${caminho}`, 'popup', "width=1200px, height=500px, top=100%, left=100%")}</Initial>
}


function elementsColumn(itens, classli) {
    var list = [];  
    for(let i = 0; i < itens.nome.length; i++) {
        list.push(m('li', {class: classli}, [
            m('a', {href: '#', onclick: () => popUp(itens.caminho[i]), class: 'nes-badge is-icon'}, [
                m('span', {class: 'is-warning exception animation'}, 'Hi'),
                m('span', {class: 'is-primary extend-right'}, 'Teste'),
            ])
        ]))
    }
    return list;
}

/** A parte a seguir é sobre o cabeçalho do jogo
 * Será apresentado o título do jogo
*/

function header(){
    return m('div', {class: 'header'}, [
        m('div', {class: 'nes-container is-rounded is-dark'}, [
            m('p', {class: 'title'}, 'Disaster Simulation')
        ])
    ])
}

/**A parte a seguir é sobre o status
 * Deve apresentado aqui o status do jogo
 * Ano, Variação de Temperatura, Dinheiro e Quantidade de pessoas
*/

function status(){
    return m('div', {class: 'status nes-container is-rounded is-dark is-centered icon-list'},[
        m('div', {class: 'row columns margin-b'}, [
            m('div', {class: 'column col-6'}, [
                m('i', {class: 'nes-icon is-small heart down-left'})
            ]),
            m('div', {class: 'column col-6'}, [
                m('i', {class: 'nes-icon is-small like down-right'})
            ]),
        ]),
        m('div', {class: 'row columns'}, [
            m('div', {class: 'column col-6'}, [
                m('i', {class: 'nes-icon trophy is-small up-left'})
            ]),
            m('div', {class: 'column col-6'}, [
                m('i', {class: 'nes-icon coin is-small up-right'})
            ]),
        ]),
    ])
}

/**A parte a seguir é sobre a coluna da esquerda
 * E chama seus respectivos itens
*/

function leftDashboard() {
    return m('div', {class: 'leftDash '}, [
        m('ul', {class: 'menu nes-container is-rounded is-dark'}, [
            'Ações',
            m('li', {class: 'divider'}),
            elementsColumn(leftMenuItens, 'dashboard-menu')
        ])
    ])
}

/** A parte a seguir é a main do projeto
 * A parte onde ficará globo
 */

function main() {
    return m('div', {class: 'main'}, [
        m('div', {style: {'text-align': 'center','text-content': 'center'}}, [
            
        ]),
    ])
}

/** A parte a seguir é sobre a coluna da direita
 * E chama seus respectivos itens
*/

function rightDashboard() {
    return m('div', {class: 'rightDash'}, [
        m('ul', {class: 'menu nes-container is-rounded is-dark'}, [
            'Informações',
            m('li', {class: 'divider'}),
            elementsColumn(rightMenuItens, '')
        ])
    ])
}

/**A parte a seguir é sobre o rodapé do jogo
 * Nele, terá 3 barras, em uma delas conterá
 * O status pessoais do jogador
 * Outra apresentará Notícias
 * E na ultima apresentará os créditos do jogo
*/

function footer(){
    return m('div', {class: 'footer nes-container is-rounded is-dark is-centered'}, [
        m('p', 'asasas asasasas asasas sasasasa')
    ])
}

/** A parte a seguir inicia e ordena a tela */

function join() {
    var join = [
        header(),
        status(),
        leftDashboard(),
        main(),
        rightDashboard(),
        footer(),
    ]
    return m('section', {class: 'Initial', style: {background: 'URL('+bg_earth_pixels+') 80% 40%'}}, [
        join
    ]);
}



var app = document.querySelector('#app');


export class Initial {
    view () {
        return <Window>{join()}</Window>;
    }
}