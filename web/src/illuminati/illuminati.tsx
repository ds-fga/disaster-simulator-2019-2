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
        description: <img src={rainhaImg} width="250" height="290" alt= "Imagem Rainha"/>,
        introduction: "Politica",
        information: rainhaJson,
        taxa: "50% alinhamento",
    },
    {
        name: "Bill Gates",
        description: <img src={billImg} width="250" height="290" alt= "Imagem Bill Gates"/>,
        introduction: "Tecnologia",
        information: billJson,
        taxa: "50% alinhamento",
    },
    {
        name: "Jeff Bezos",
        description: <img src={jeffImg} width="250" height="290" alt= "Imagem Jeff"/>,
        introduction: "Comércio",
        information: jeffJson,
        taxa: "50% alinhamento",
    },
    {
        name: "Putin",
        description: <img src={putinImg} width="250" height="290" alt= "Imagem Putin"/>,
        introduction: "Guerra",
        information: putinJson,
        taxa: "50% alinhamento",
    },
    {
        name: "Xi Jinping",
        description: <img src={xiImg} width="250" height="290" alt= "Imagem Xi"/>,
        introduction: "Indústria",
        information: xiJson,
        taxa: "50% alinhamento",
    },
    {
        name: "Michael Jackson",
        description: <img src={michaelImg} width="250" height="290" alt= "Imagem Michael"/>,
        introduction: "Cultura",
        information: michaelJson,
        taxa: "50% alinhamento",
    },
    {
        name: "Papa Francisco",
        description: <img src={papaImg} width="250" height="290" alt= "Imagem Papa"/>,
        introduction: "Religião",
        information: papaJson,
        taxa: "50% alinhamento",
    },
    {
        name: "Silvio Santos",
        description: <img src={silvioImg} width="250" height="290" alt= "Imagem Silvio"/>,
        introduction: "Mídia/Informação",
        information: silvioJson,
        taxa: "50% alinhamento",
    },
    {
        name: "Obama",
        description: <img src={obamaImg} width="250" height="290" alt= "Imagem Obama"/>,
        introduction: "Saúde",
        information: obamaJson,
        taxa: "50% alinhamento",
    },
    {
        name: "Optimus Prime",
        description: <img src={optimusImg} width="250" height="290" alt= "Imagem Optimus"/>,
        introduction: "Transporte",
        information: optimusJson,
        taxa: "50% alinhamento",
    },
    {
        name: "Joesley",
        description: <img src={joesleyImg} width="250" height="290" alt= "Imagem Joesley"/>,
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
        <div classs="IlluminatiImage">
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
