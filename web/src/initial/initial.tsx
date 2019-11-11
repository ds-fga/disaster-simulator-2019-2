import m = require('mithril');
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

var React = {
    createElement: m
};

/** A parte a seguir do código server para documentar o nome de cada botão,
 * O redirecionamento feito após clica-lo
 * E o icone respectivo
 */

 let leftMenuItens = {
    "nome": ["Temperatura", "Política", "Conspiração","Economia"],
    "caminho": ["teste.html", "teste2.html", "teste2.html", "teste.html"],
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
 */

function elementsColumn(itens, classli) {
    var list = [];  
    for(let i = 0; i < itens.nome.length; i++) {
        list.push(m('li', {class: classli}, [
            m('a', {href: itens.caminho[i], class: 'btn tooltip', 'data-tooltip':itens.nome[i]}, [
                m('img', {class: 'mr-5', src: itens.icone[i]})
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
        m('div', {class: 'nes-container is-rounded is-dark with-title'}, [
            m('p', {class: 'title'}, 'Disaster Simulation'),
            m('p', {class: 'text-gray'}, 'Projeto da disciplina de Desenvolvimento de Software')
        ])
    ])
}

/**A parte a seguir é sobre o status
 * Deve apresentado aqui o status do jogo
 * Ano, Variação de Temperatura, Dinheiro e Quantidade de pessoas
*/

function status(){
    return m('div', {class: 'status nes-container is-rounded is-dark with-title'},[
        m('p', {class: 'title'}, 'Aqui fica o Status!')
    ])
}

/**A parte a seguir é sobre a coluna da esquerda
 * E chama seus respectivos itens
*/

function leftDashboard() {
    return m('div', {class: 'leftDash'}, [
        m('ul', {class: 'menu align-left nes-container is-rounded is-dark with title'}, [
            'Ações',
            m('li', {class: 'divider'}),
            elementsColumn(leftMenuItens, 'menu nes-container is-dark')
        ])
    ])
}

/** A parte a seguir é a main do projeto
 * A parte onde ficará globo
 */

function main() {
    return m('div', {class: 'main'}, [
        'Corpo da Main',
        m('div', {style: {'text-align': 'center',
                            'text-content': 'center'}}, [
            m('img', {src: big_earth})
        ]),
    ])
}

/** A parte a seguir é sobre a coluna da direita
 * E chama seus respectivos itens
*/

function rightDashboard() {
    return m('div', {class: 'rightDash'}, [
        m('ul', {class: 'menu align-right nes-container is-rounded is-dark with title'}, [
            'Informações',
            m('li', {class: 'divider'}),
            elementsColumn(rightMenuItens, 'menu nes-container is-dark')
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
    return m('div', {class: 'footer nes-container is-rounded is-dark with title'}, [
        elementsColumn(barMenuItens, 'menu inline nes-container is-dark')
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
    return <section class="Initial nes-container is-dark">{join}</section>;
}

var app = document.querySelector('#menu-lateral');


m.mount(app, {
    view: () => join()
});
    
/*
export class Initial {
    view () {
        return <Window>{leftDashboard()}</Window>;
    }
}*/