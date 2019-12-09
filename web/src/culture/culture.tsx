import { Window, Tab, Tabs, Btn, Sidebar, Elem, VScroll } from '../ui';
import cultureIcon from "../../img/culture/cultureIcon.jpg";

import { model } from '../model';

import { ContainersVisãoGeral } from './pathCulture/visaoGeral/visaoGeral';

import { ContainerReligiao } from './pathCulture/religion/religion';

import { ContainerEducation } from './pathCulture/education/education';

import { ContainerNews } from './pathCulture/news/news';

import { ContainerEntertainment } from './pathCulture/entertainment/entertainment';

/**
 * Objetos para interação: (se necessário, n esquecer de importar)
 */
let img = {
    icon: cultureIcon,
};

export class Culture {
    currentMoney: number;
    view() {
        m.request({ url: 'http://localhost:5000/value/state/', method: 'GET' }).then(x => { this.currentMoney = x.capital });

        return (
            <Window id='cultureWindow'>
                <Sidebar src={img.icon} class="culture_sidebar" title={<button class="nes-btn culture_sidebar-btn" onclick={() => model.menu()} >
                    &nbsp;&nbsp;Voltar &nbsp;
               </button>} />
                <Tabs>
                    <Tab title={<button type="button" class='nes-btn culture is-warning TabCulture' >Visão Geral</button>} >
                        <VScroll>
                            <br />
                            <ContainersVisãoGeral />
                        </VScroll>
                    </Tab>
                    <Tab title={<button type="button" class='nes-btn culture is-warning TabCulture' >Religião</button>} >
                        <VScroll>
                            <br />
                            <ContainerReligiao />
                        </VScroll>
                    </Tab>
                    <Tab title={<button type="button" class='nes-btn culture is-warning TabCulture'>Notícias</button>}>
                        <VScroll>
                            <br />
                            <ContainerNews />
                        </VScroll>
                    </Tab>
                    <Tab title={<button type="button" class='nes-btn culture is-warning TabCulture'>Educação</button>}>
                        <VScroll>
                            <br />
                            <ContainerEducation />
                        </VScroll>
                    </Tab>
                    <Tab title={<button type="button" class='nes-btn culture is-warning TabCulture'>Entretenimento</button>}>
                        <VScroll>
                            <br />
                            <ContainerEntertainment />
                        </VScroll>
                    </Tab>
                    <Tab title={<button type="button" class='nes-btn culture is-warning TabCulture' >{'?'}</button>} >
                        <div>
                            <br />
                            <div class="nes-container is-rounded with-title">
                                <p class="title nes-text is-primary">Ajuda</p>
                                <p>
                                    O mundo é um lugar belo, um lugar diferente...Existem, ou já existiram, mais de milhares de civilizações na terra,
                                    cada uma mais diferente que a outra. Conhecimento, Crenças, Artes, Leis, Morais, Costumes...Tudo isso, e muito mais, faz parte
                                    da cultura de cada sociedade.  Cada uma com seu modo de pensar, agir, influenciar, ser influenciada e o mais belo de tudo, elas
                                    coexistindo e definindo o destino do mundo.
                                    <br />
                                    <br />
                                    Que tal brincar um pouco com isso e deixar o mundo um pouco mais caótico?
                                    <br />
                                    Seu objetivo é utilizar o seu maior poder, o dinheiro, para modificar e influenciar na cultura mundial. Compre a midia,
                                    afete na educação dos países, crie novas religiões. Domine tudo que puder! Mas não se esqueça interferir
                                    no modo de viver da sociedade pode lhe custar caro...
                                </p>
                            </div>
                            <br />
                            <br />
                            <div class="nes-container is-rounded with-title">
                                <p class="title nes-text is-error">Dinheiro</p>
                                <div class="nes-container is-rounded is-dark">
                                    <p class="dinheiroShow">Voce possui: {this.currentMoney} $</p>
                                </div>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </Window >
        );
    }
}












