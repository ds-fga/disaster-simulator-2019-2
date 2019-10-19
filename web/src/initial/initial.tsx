import m = require('mithril');
import {Window, Tab, Tabs, Btn, Sidebar} from '../ui';


var React = {
    createElement: m
};

let leftMenuItens = {
    "nome": ["teste 1", "teste 2"],
    "caminho": ["teste.html", "teste2.html"],
    "icone": ["icon icon-link", "icon icon-link"],
}


function elements() {
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
        elements()
    ])
}

function leftDashboard() {
    return m('div', {class: 'columns text-center'}, [
        m('div', {class: 'column col-1'}, [
            leftDashboardElements()
        ])
    ]);
}

var app = document.querySelector('#app');


m.mount(app, {
    view: () => leftDashboard()
});
    

export class Initial {
    view () {
        return <Window>Tela Inicial</Window>;
    }
}