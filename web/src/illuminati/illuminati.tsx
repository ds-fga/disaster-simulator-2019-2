import m from 'mithril';

import { Window, Tab, Tabs, Btn, Sidebar, Component } from '../ui';

import terminatorImg from './piramide.jpg';
import rainhaImg from './rainha.jpg';
import alGoreImg from './al gore.jpg';
import billImg from './bill.jpg';
import jeffImg from './jeff.jpg';
import joesleyImg from './joesley.jpg';
import michaelImg from './michael.jpg';
import obamaImg from './obama.jpg';
import xiImg from './xi.jpg';
import papaImg from './papa.jpg';
import silvioImg from './silvio.jpg';
import optimusImg from './optimus.jpg';
import putinImg from './putin.jpg';
import rainhaJson from './rainha.json'; 
import alGoreJson from './alGore.json';
import billJson from './bill.json';
import jeffJson from './jeff.json';
import putinJson from './putin.json';
import xiJson from './xi.json';
import joesleyJson from './joesley.json';
import michaelJson from './michael.json';
import obamaJson from './obama.json';
import papaJson from './papa.json';
import silvioJson from './silvio.json';
import optimusJson from './optimus.json';


let event = {

    img: terminatorImg,

}
function funcao

let illuminatiList = [
    {
        name: "Al Gore",
        imgUrl: alGoreImg,
        imgAlt: "Imagem Al Gore", 
        sauroUrl: billImg,
        introduction: "Ambiente",
        information: alGoreJson,
        taxa: "50% alinhamento",
    },
    {
        name: "Rainha Elizabeth II",
        imgUrl: rainhaImg,
        imgAlt: "Imagem Rainha",
        sauroUrl: billImg,
        introduction: "Politica",
        information: rainhaJson,
        taxa: "50% alinhamento",
    },
    {
        name: "Bill Gates",
        imgUrl: billImg,
        imgAlt: "Imagem Bill Gates",
        sauroUrl: alGoreImg,
        introduction: "Tecnologia",
        information: billJson,
        taxa: "50% alinhamento",
    },
    {
        name: "Jeff Bezos",
        imgUrl: jeffImg,
        imgAlt: "Imagem Jeff",
        sauroUrl: rainhaImg,
        introduction: "Comércio",
        information: jeffJson,
        taxa: "50% alinhamento",
    },
    {
        name: "Putin",
        imgUrl: putinImg,
        imgAlt: "Imagem Putin",
        sauroUrl: michaelImg,
        introduction: "Guerra",
        information: putinJson,
        taxa: "50% alinhamento",
    },
    {
        name: "Xi Jinping",
        imgUrl: xiImg,
        imgAlt: "Imagem Xi",
        sauroUrl: papaImg,
        introduction: "Indústria",
        information: xiJson,
        taxa: "50% alinhamento",
    },
    {
        name: "Michael Jackson",
        imgUrl: michaelImg,
        imgAlt: "Imagem Michael",
        sauroUrl: xiImg,
        introduction: "Cultura",
        information: michaelJson,
        taxa: "50% alinhamento",
    },
    {
        name: "Papa Francisco",
        imgUrl: papaImg,
        imgAlt: "Imagem Papa",
        sauroUrl: silvioImg,
        introduction: "Religião",
        information: papaJson,
        taxa: "50% alinhamento",
    },
    {
        name: "Silvio Santos",
        imgUrl: silvioImg,
        imgAlt: "Imagem Silvio",
        sauroUrl: obamaImg,
        introduction: "Mídia/Informação",
        information: silvioJson,
        taxa: "50% alinhamento",
    },
    {
        name: "Obama",
        imgUrl: obamaImg,
        imgAlt: "Imagem Obama",
        sauroUrl: joesleyImg,
        introduction: "Saúde",
        information: obamaJson,
        taxa: "50% alinhamento",
    },
    {
        name: "Optimus Prime",
        imgUrl: optimusImg,
        imgAlt: "Imagem Optimus",
        sauroUrl: obamaImg,
        introduction: "Transporte",
        information: optimusJson,
        taxa: "50% alinhamento",
    },
    {
        name: "Joesley",
        imgUrl: joesleyImg,
        imgAlt: "Imagem Joesley",
        sauroUrl: xiImg,
        introduction: "Agropecuária",
        information: joesleyJson,
        taxa: "50% alinhamento",
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
                  <Tabs vertical={true} reverse={true}>{illuminatiList.map((e) => renderIlluminattiTab(e))}</Tabs>
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
    return <Tab title={x.name}>
        <div class="IlluminatiSheet">
        <div class = "illuminati_side">
            <Sidebar class="description" title = {x.introduction}></Sidebar>
            <Sidebar class="taxa" title = {x.taxa}></Sidebar>
        </div>
        <div class="IlluminatiImage">
            <img src={x.sauroUrl} width="250" height="290" alt={x.imgAlt}/>
            <img class="topImg" src={x.imgUrl} width="250" height="290" alt={x.imgAlt}/>
        </div>
            
        </div>
        <div class = "IlluminatInformation">
            <h2>Informações</h2>
            <dl>
                <dt>Nome</dt><dd>{x.information.nome}</dd>
                <dt>Idade</dt><dd>{x.information.idade}</dd>
                <dt>Atributos</dt>
                    <dd>Força: {x.information.atributos.forca}</dd>
                    <dd>Inteligência: {x.information.atributos.inteligencia}</dd>
                <dt>Habilidades</dt>
                    <dd>{x.information.habilidades.a}</dd>
                    <dd>{x.information.habilidades.b}</dd>
                    <dd>{x.information.habilidades.c}</dd>
            </dl>

        </div>
    </Tab>
    
}
