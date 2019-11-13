import m from 'mithril';

import { Window, Tab, Tabs, Btn, Sidebar, Component } from '../ui';

import terminatorImg from '../../img/events/piramide.jpg';

let event = {

    img: terminatorImg,

}

let illuminatiList = [
    {
        name: "Al Gore",
        description: "Al",
    },
    {
        name: "Rainha Elizabeth II",
        description: "Rainha",
    },
    {
        name: "Bill Gates",
        description: "Bill",
    },
    {
        name: "Jeff Bezos",
        description: "Jeff Bezos",
    },
    {
        name: "Putin",
        description: "Putin",
    },
    {
        name: "Xi Jinping",
        description: "Xi",
    },
    {
        name: "Michael Jackson",
        description: "Michael",
    },
    {
        name: "Papa Francisco",
        description: "Papa",
    },
    {
        name: "Silvio Santos",
        description: "Silvio",
    },
    {
        name: "Obama",
        description: "Obama",
    },
    {
        name: "Optimus Prime",
        description: "Optimus",
    },
    {
        name: "Joesley",
        description: "Joesley",
    },
]

/**

 * Componente que mostra janela do conselho Illuminati.

 */

export class Illuminati {

    view() {
        //     
        return <Window> 
            <Sidebar src={event.img} title="Conselho Illuminati"/>
            <Tabs>
                <Tab title="Ficha">
                  <Tabs>{illuminatiList.map((e) => renderIlluminattiTab(e))}</Tabs>
                </Tab>
                <Tab title="Seguidores">

                 Grafico de distribuicao dos seguidores
                 Ideia: graficos de "pizza" para idnicar a quantidade de seguidores para cada seguidor
                 
                
                </Tab>
            </Tabs>
        </Window>

    }
}

function renderIlluminattiTab(x) {
    return <Tab title={x.name}>{x.description}</Tab>
}

