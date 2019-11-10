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

/** A parte a seguir é o listamento de cada botão
 * Para cada Dashboard
 */



function elementsColumn(itens) {
    var list = [];  
    for(let i = 0; i < itens.nome.length; i++) {
        list.push(m('li', {class: 'menu-item inline'}, [
            m('a', {href: itens.caminho[i]}, [
                m('img', {class: 'mr-5', src: itens.icone[i]})
            ], itens.nome[i])
        ]))
    }
    return list;
}

/** A parte a seguir é sobre a coluna da esquerda
 * E chama seus respectivos itens
*/

function leftDashboard() {
    return m('div', {class: 'column col-2 text-center'}, [
        m('ul', {class: 'menu align-left nes-container is-dark with-title'}, [
            m('li', {class: 'divider'}),
            elementsColumn(leftMenuItens)
        ])
    ])
}

/** A parte a seguir é sobre a coluna da direita
 * E chama seus respectivos itens
*/

function rightDashboard() {
    return m('div', {class: 'column col-2 text-center'}, [
        m('ul', {class: 'menu align-left nes-container is-dark with-title'}, [
            m('li', {class: 'divider'}),
            elementsColumn(rightMenuItens)
        ])
    ])
}

/** A parte a seguir é sobre a coluna da direita
 * E chama seus respectivos itens
*/

function barDashboard() {
    return m('div', {class: 'initial-icon-bar'}, [
        elementsColumn(barMenuItens)
    ])
}

/** A parte a seguir é a main do projeto
 * A parte onde ficará globo e a barra
 */

function main() {
    return m('div', {class: 'col-8'}, [
        m('div', {class: 'card nes-container is-dark with-title'}, [
            m('div', {class: 'card-header title'}, [
                m('div', {class: 'card-title h5'}, 'Disaster Simulation'),
                m('div', {class: 'card-subtitle text-gray'}, 'Projeto da disciplina de Desenvolvimento de Software')
            ]),
            m('div', {class: 'card-body'},[
                m('div', {style: {'text-align': 'center'}}, [
                    m('img', {src: big_earth})
                ]),
            ] ,'Corpo do card'),
            m('div', {class: 'card-footer'}, [
                barDashboard()
            ])
        ])
    ])
}

/** A parte a seguir inicia e ordena a tela */

function join() {
    var join = [
        leftDashboard(),
        main(),
        rightDashboard(),
    ]

    return <div class="columns nes-container is-dark with-title">{join}</div>;
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
