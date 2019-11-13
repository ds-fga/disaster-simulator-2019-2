import m from 'mithril';

import { Window, Tab, Tabs, Btn, Sidebar, Component } from '../ui';

import terminatorImg from '../../img/events/piramides.jpg';

let event = {

    img: terminatorImg,

}

let illuminatiList = [
    {
        name: "Al Gore",
        description: "J oisdoish foids hfos",
    },
    {
        name: "Rainha",
        description: "J oisdoish foids hfos",
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


function tmp() {
    return <Tab onclick={() => openCity(event, 'Rainha')} title="Al Gore">
                        <button class="tablinks" onclick="openCity(event, 'Gore')">Al Gore</button>
                        <button class="tablinks" onclick="openCity(event, 'Bill')">Bill Gates</button>
                        <button class="tablinks" onclick="openCity(event, 'Jeff')">Jeff Bezos</button>
                        <button class="tablinks" onclick="openCity(event, 'Putin')">Putin</button>
                        <button class="tablinks" onclick="openCity(event, 'Xi')">Xi Jinping</button>
                        <button class="tablinks" onclick="openCity(event, 'Michael')">Michael Jackson</button>
                        <button class="tablinks" onclick="openCity(event, 'Papa')">Papa Francisco</button>
                        <button class="tablinks" onclick="openCity(event, 'Silvio')">Silvio Santos</button>
                        <button class="tablinks" onclick="openCity(event, 'Obama')">Obama</button>
                        <button class="tablinks" onclick="openCity(event, 'Optimus')">Optimus Prime</button>
                        <button class="tablinks" onclick="openCity(event, 'Joesley')">Joesley</button>
                        
                        Lista de Illuminatis:
                        <ul>
                            <li>Política - Rainha Elizabeth II</li>
                            <li>Ambiente - Al Gore</li>
                            <li>Tecnologia - Bill Gates</li>
                            <li>Comércio - Jeff Bezos</li>
                            <li>Guerra - Putin</li>
                            <li>Indústria - Xi Jinping</li>
                            <li>Cultura - Michael Jackson</li>
                            <li>Religião - Papa Francisco</li>
                            <li>Mídia/Informação - Silvio Santos</li>
                            <li>Saúde - Obama</li>
                            <li>Transporte - Optimus Prime</li>
                            <li>Agropecuária - Joesley</li>
                        </ul>
                        </Tab>
}
