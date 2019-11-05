import m = require('mithril');
import {Window, Tab, Tabs, Btn, Sidebar} from '../ui';


var React = {
    createElement: m
};

//menu esquerdo

let leftMenuItens = {
    "nome": ["teste 1", "teste 2"],
    "caminho": ["teste.html", "teste2.html"],
    "icone": ["icon icon-link", "icon icon-link"],
}

let rightMenuItens = {
    "nome": ["teste 3", "teste 4"],
    "caminho": ["teste.html", "teste2.html"],
    "icone": ["icon icon-link", "icon icon-link"],
}

function elementsLeft() {
    var list_left = [], cont, itens = leftMenuItens;

    for(cont=0; cont<itens.nome.length; cont ++) {
        list_left.push(m('li', {class: 'menu-item'}, [
            m('a', {href: itens.caminho[cont]}, [
                m('i', {class: itens.icone[cont]})
            ], itens.nome[cont])
        ])) 
    }
    return list_left;
}

function leftDashboardElements() {
    return m('ul', {class: 'menu'}, [
        m('li', {class: 'divider'}),
        elementsLeft()
    ])
}

function leftDashboard() {
    return m('div', {class: 'column col-2 text-center'}, [
            leftDashboardElements()
        ])
}

// fim do menu lateral esquerdo

//menu lateral direito
function elementsRight() {
    var list_right = [], cont, itens = rightMenuItens;

    for(cont=0; cont<itens.nome.length; cont ++) {
        list_right.push(m('li', {class: 'menu-item'}, [
            m('a', {href: itens.caminho[cont]}, [
                m('i', {class: itens.icone[cont]})
            ], itens.nome[cont])
        ])) 
    }
    return list_right;
}

function rightDashboardElements() {
    return m('ul', {class: 'menu'}, [
        m('li', {class: 'divider'}),
        elementsRight()
    ])
}
//fim

function rightDashboard() {
    return m('div', {class: 'column col-2 text-center'}, [
            rightDashboardElements()
        ])
}

//conteudo central

function main() {
    return m('div', {class: 'col-8'}, [
        m('div', {class: 'card'}, [
            m('div', {class: 'card-image'}, [
                m('img', {class: '', src: ''})
            ])
            m('div', {class: 'card-header'}, [
                m('div', {class: 'card-title h5'}, 'Título do Card')
                m('div', {class: 'card-subtitle text-gray'}, 'Subtitulo')
            ])
            m('div', {class: 'card-body'}, 'Corpo do card')
            m('div', {class: 'card-footer'}, [
                m('button', {class: 'btn btn-primary'}, 'Botão')
            ])
        ])
    ])
}

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
}*