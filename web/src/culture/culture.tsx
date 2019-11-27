import m from 'mithril';
import { Window, Tab, Tabs, Btn, Sidebar, Elem, VScroll } from '../ui';
import cultureIcon from "../../img/culture/cultureIcon.jpg";

import SearchBar from './components/searchbar';

import { ContainersVisãoGeral } from './pathCulture/visaoGeral/visaoGeral';

import { ContainerReligiao } from './pathCulture/religion/religion';
import { NegociosPapa, CreateReligion } from './pathCulture/religion/religionIdeas';

import { ContainerEducation } from './pathCulture/education/education';
import {} from './pathCulture/education/educationIdeas';

import { ContainerNews } from './pathCulture/news/news';
import {} from './pathCulture/news/newsIdeas';

import { ContainerEntertainment } from './pathCulture/entertainment/entertainment';
import {} from './pathCulture/entertainment/entertainmentIdeas';

/**
 * Objetos para interação: (se necessário, n esquecer de importar)
 */
let img = {
    icon: cultureIcon,
};

let paths = {
    intro: "/home/gabriel_sabanai/ds/web/src/intro/intro.tsx"

};

let itens = {
    religion: {

    }
    news: {

    },
    education: {

    },
    sports: {

    },
    art: {

    }
}

export class Culture {
    view() {
        return (
            <Window>
                <Sidebar src={img.icon} class="culture_sidebar" title={<a class="nes-btn culture_sidebar-btn" href={paths.intro} >&nbsp;&nbsp;Voltar &nbsp;
               </a>} />
                <Tabs>
                    <Tab title={<a class="nes-btn" href="#" >Visão Geral</a>}>
                        <VScroll>
                            <br />
                            <ContainersVisãoGeral />
                        </VScroll>
                    </Tab>
                    <Tab title={<button type="button" class="nes-btn is-warning ">Religião</button>}>
                        <VScroll>
                            <br />
                            <ContainerReligiao />
                        </VScroll>
                    </Tab>
                    <Tab title={<button type="button" class="nes-btn is-warning">Notícias</button>}>
                        <VScroll>
                            <br />
                            <ContainerNews />
                        </VScroll>
                    </Tab>
                    <Tab title={<button type="button" class="nes-btn is-warning">Educação</button>}>
                        <VScroll>
                            <br />
                            <ContainerEducation />
                        </VScroll>
                    </Tab>
                    <Tab title={<button type="button" class="nes-btn is-warning">Entretenimento</button>}>
                        <VScroll>
                            <br />
                            <ContainerEntertainment />
                        </VScroll>

                    </Tab>
                </Tabs>
            </Window >
        );
    }
}












