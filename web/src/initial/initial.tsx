import m = require('mithril');
import {Window, Tab, Tabs, Btn, Sidebar} from '../ui';


var React = {
    createElement: m
};
/** A parte a seguir do código server para documentar o nome de cada botão,
 * O redirecionamento feito após clica-lo
 * E o icone respectivo
 */
let leftMenuItens = {
    "nome": ["teste 1", "teste 2"],
    "caminho": ["teste.html", "teste2.html"],
    "icone": ["icon icon-link", "icon icon-link"],
}

let barMenuItens = {
    "nome": ["teste 1", "teste 2", "teste 3", "teste 4"],
    "caminho": ["teste.html", "teste2.html", "teste3.html", "teste4.html"],
    "icone": ["icon icon-link", "icon icon-link", "icon icon-link", "icon icon-link"],
}
let rightMenuItens = {
    "nome": ["teste 1", "teste 2"],
    "caminho": ["teste.html", "teste2.html"],
    "icone": ["icon icon-link", "icon icon-link"],
}

/** A parte a seguir é o listamento de cada botão
 * Para cada Dashboard
 */

function elementsColumn(itens) {
    var list = [];
    for(let i = 0; i < itens.nome.length; i++) {
        list.push(m('li', {class: 'menu-item'}, [
            m('a', {href: itens.caminho[i]}, [
                m('i', {class: itens.icone[i]})
            ], itens.nome[i])
        ]))
    }
    return list;
}

function elementsLine(itens){
    var list = [];
    for(let i = 0; itens.nome.length; i++){
        if(!i){
            list.push(m('a', {class: 'initial-active', href: itens.caminho[i]}, [
                m('i', {href: itens.icone[i]})
            ], itens.nome[i]))
        }
        else{

            list.push(m('a', {href: itens.caminho[i]}, [
                m('i', {href: itens.icone[i]})
            ], itens.nome[i]))
        }
    }
    return list;
}

/** A parte a seguir é sobre a coluna da esquerda
 * E chama seus respectivos itens
*/

function leftDashboard() {
    return m('div', {class: 'column col-2 text-center'}, [
        m('ul', {class: 'menu'}, [
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
        m('ul', {class: 'menu'}, [
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
        m('div', {class: 'card'}, [
            m('div', {class: 'card-image'}, [
                m('img', {class: '', src: ''})
            ]),
            m('div', {class: 'card-header'}, [
                m('div', {class: 'card-title h5'}, 'Título do Card'),
                m('div', {class: 'card-subtitle text-gray'}, 'Subtitulo')
            ]),
            m('div', {class: 'card-body'}, 'Corpo do card'),
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

    return <div class="columns">{join}</div>;
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