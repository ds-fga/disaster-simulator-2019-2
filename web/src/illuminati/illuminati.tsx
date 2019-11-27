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

let illuminatiList = [
    {
        name: "Al Gore",
        description: <img src={alGoreImg} width="250" height="290" alt= "Imagem Al Gore"/>,
        introduction: "Ambiente",
        information: alGoreJson,
    },
    {
        name: "Rainha Elizabeth II",
        description: <img src={rainhaImg} width="250" height="290" alt= "Imagem Rainha"/>,
        introduction: "Politica",
        information: rainhaJson,
    },
    {
        name: "Bill Gates",
        description: <img src={billImg} width="250" height="290" alt= "Imagem Bill Gates"/>,
        introduction: "Tecnologia",
        information: billJson,
    },
    {
        name: "Jeff Bezos",
        description: <img src={jeffImg} width="250" height="290" alt= "Imagem Jeff"/>,
        introduction: "Comércio",
        information: jeffJson,
    },
    {
        name: "Putin",
        description: <img src={putinImg} width="250" height="290" alt= "Imagem Putin"/>,
        introduction: "Guerra",
        information: putinJson,
    },
    {
        name: "Xi Jinping",
        description: <img src={xiImg} width="250" height="290" alt= "Imagem Xi"/>,
        introduction: "Indústria",
        information: xiJson,
    },
    {
        name: "Michael Jackson",
        description: <img src={michaelImg} width="250" height="290" alt= "Imagem Michael"/>,
        introduction: "Cultura",
        information: michaelJson,
    },
    {
        name: "Papa Francisco",
        description: <img src={papaImg} width="250" height="290" alt= "Imagem Papa"/>,
        introduction: "Religião",
        information: papaJson,
    },
    {
        name: "Silvio Santos",
        description: <img src={silvioImg} width="250" height="290" alt= "Imagem Silvio"/>,
        introduction: "Mídia/Informação",
        information: silvioJson,
    },
    {
        name: "Obama",
        description: <img src={obamaImg} width="250" height="290" alt= "Imagem Obama"/>,
        introduction: "Saúde",
        information: obamaJson,
    },
    {
        name: "Optimus Prime",
        description: <img src={optimusImg} width="250" height="290" alt= "Imagem Optimus"/>,
        introduction: "Transporte",
        information: optimusJson,
    },
    {
        name: "Joesley",
        description: <img src={joesleyImg} width="250" height="290" alt= "Imagem Joesley"/>,
        introduction: "Agropecuária",
        information: joesleyJson,
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
                  <Tabs vertical={true}>{illuminatiList.map((e) => renderIlluminattiTab(e))}</Tabs>
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
        <ul class = "illiminati_side">
                
                <Sidebar title = {x.introduction}></Sidebar>
            </ul>
            <u1 class = "IlluminatiImage"> {x.description}</u1>

        </div>
        <div class = "IlluminatInformation">
            <h2>Informações</h2>
            <dl>
                <dt>Nome</dt><dd>{x.information.nome}</dd>
                <dt>Idade</dt><dd>{x.information.idade}</dd>
                <dt>Poder</dt><dd>{x.information.poder}</dd>
                <dt>Atributos</dt>
                    <dd>Força: {x.information.atributos.forca}</dd>
                    <dd>Inteligência: {x.information.atributos.inteligencia}</dd>
                <dt>Habilidades</dt>
                    <dd>Política: {x.information.habilidades.politica}</dd>
                    <dd>Mecanica: {x.information.habilidades.mecanica}</dd>
                    <dd>Direção: {x.information.habilidades.direcao}</dd>
            </dl>


        </div>
    </Tab>
    
}
