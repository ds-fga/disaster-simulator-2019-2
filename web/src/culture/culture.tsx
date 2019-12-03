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

    voltar() {
        var element = document.getElementById("cultureWindow");
        var style = element.style;
        style.animation = "textShadow 1.6s infinite, turn-off 0.55s cubic-bezier(0.755, 0.050, 0.855, 0.060)";
        window.setTimeout(function () { element.parentNode.removeChild(element) }, 550);
    }

    view() {

        return (
            <Window id='cultureWindow'>
                <Sidebar src={img.icon} class="culture_sidebar" title={<button class="nes-btn culture_sidebar-btn" onclick={this.voltar} >
                    &nbsp;&nbsp;Voltar &nbsp;
               </button>} />
                <Tabs>
                    <Tab title={<button type="button" class='nes-btn is-warning TabCulture' >Visão Geral</button>} >
                        <VScroll>
                            <br />
                            <ContainersVisãoGeral />
                        </VScroll>
                    </Tab>
                    <Tab title={<button type="button" class='nes-btn is-warning TabCulture' >Religião</button>} >
                        <VScroll>
                            <br />
                            <ContainerReligiao />
                        </VScroll>
                    </Tab>
                    <Tab title={<button type="button" class='nes-btn is-warning TabCulture'>Notícias</button>}>
                        <VScroll>
                            <br />
                            <ContainerNews />
                        </VScroll>
                    </Tab>
                    <Tab title={<button type="button" class='nes-btn is-warning TabCulture'>Educação</button>}>
                        <VScroll>
                            <br />
                            <ContainerEducation />
                        </VScroll>
                    </Tab>
                    <Tab title={<button type="button" class='nes-btn is-warning TabCulture'>Entretenimento</button>}>
                        <VScroll>
                            <br />
                            <ContainerEntertainment />
                        </VScroll>
                    </Tab>
                    <Tab title={<button type="button" class='nes-btn is-warning TabCulture' >{'?'}</button>} >
                    </Tab>
                </Tabs>
            </Window >
        );
    }
}












