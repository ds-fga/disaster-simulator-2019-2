import m from 'mithril';

import { Window, Tab, Tabs, Btn, Sidebar, Component } from '../ui';

import terminatorImg from '../../img/events/unnamed.jpg';
import rainhaImg from '../../src/illuminati/imagens/rainha.jpg';
import alGoreImg from '../../src/illuminati/imagens/al gore.jpg';
import billImg from '../../src/illuminati/imagens/bill.jpg';
import jeffImg from '../../src/illuminati/imagens/jeff.jpg';
import joesleyImg from '../../src/illuminati/imagens/joesley.jpg';
import michaelImg from '../../src/illuminati/imagens/michael.jpg';
import obamaImg from '../../src/illuminati/imagens/obama.jpg';
import xiImg from '../../src/illuminati/imagens/xi.jpg';
import papaImg from '../../src/illuminati/imagens/papa.jpg';
import silvioImg from '../../src/illuminati/imagens/silvio.jpg';
import optimusImg from '../../src/illuminati/imagens/optimus.jpg';
import putinImg from '../../src/illuminati/imagens/putin.jpg';

let event = {

    img: terminatorImg,

}

var img = new Image();
var div = document.getElementById('x');
 
 
img.onload = function() {
 
  div.innerHTML += '<img src="'+img.src+'" />'; 
 
};
 
img.src = 'imagens/rainha.jpg';

let illuminatiList = [
    {
        name: "Al Gore",
        description: <img src={alGoreImg} width="250" height="290" alt= "Imagem Al Gore"/>,
        introduction: "Ambiente",
    },
    {
        name: "Rainha Elizabeth II",
        description: <img src={rainhaImg} width="250" height="290" alt= "Imagem Rainha"/>,
        introduction: "Politica",
    },
    {
        name: "Bill Gates",
        description: <img src={billImg} width="250" height="290" alt= "Imagem Bill Gates"/>,
        introduction: "Tecnologia",
    },
    {
        name: "Jeff Bezos",
        description: <img src={jeffImg} width="250" height="290" alt= "Imagem Jeff"/>,
        introduction: "Comércio",
    },
    {
        name: "Putin",
        description: <img src={putinImg} width="250" height="290" alt= "Imagem Putin"/>,
        introduction: "Guerra",
    },
    {
        name: "Xi Jinping",
        description: <img src={xiImg} width="250" height="290" alt= "Imagem Xi"/>,
        introduction: "Indústria",
    },
    {
        name: "Michael Jackson",
        description: <img src={michaelImg} width="250" height="290" alt= "Imagem Michael"/>,
        introduction: "Cultura",
    },
    {
        name: "Papa Francisco",
        description: <img src={papaImg} width="250" height="290" alt= "Imagem Papa"/>,
        introduction: "Religião",
    },
    {
        name: "Silvio Santos",
        description: <img src={silvioImg} width="250" height="290" alt= "Imagem Silvio"/>,
        introduction: "Mídia/Informação",
    },
    {
        name: "Obama",
        description: <img src={obamaImg} width="250" height="290" alt= "Imagem Obama"/>,
        introduction: "Saúde",
    },
    {
        name: "Optimus Prime",
        description: <img src={optimusImg} width="250" height="290" alt= "Imagem Optimus"/>,
        introduction: "Transporte",
    },
    {
        name: "Joesley",
        description: <img src={joesleyImg} width="250" height="290" alt= "Imagem Joesley"/>,
        introduction: "Agropecuária",
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
    return <Tab title={x.name}>{x.description}
    <ul>
        <li>{x.introduction}</li>
    </ul>
    </Tab>
    
}

