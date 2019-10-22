import m from 'mithril';
import {Window, Tab, Tabs, Btn, Sidebar, VScroll} from '../ui';

import TechInfo from './components/TechInfo.component';
import Tech from './components/Tech.component';
import TechList from './components/TechList.component';
import SearchBar from './components/SearchBar.component';

/**
 * Componente para janela com árvore tecnológica e de desenvolvimento científico.
 */
export class Science {

    estado: object;

    constructor(){
        this.estado = {
            techs: [
                {
                    title: "Nuclear 1",
                    price: "50",
                    type: "is-warning",
                    spec: "Permite pesquisa básica em energia nuclear"
                },
                {
                    title: "Nuclear 2",
                    price: "100",
                    type: "is-warning",
                    spec: "Permite pesquisa média em energia nuclear"
                },
                {
                    title: "Nuclear 3",
                    price: "150",
                    type: "is-warning",
                    spec: "Permite pesquisa avançada em energia nuclear"
                },
                {
                    title: "Biológico 1",
                    price: "50",
                    type: "is-success",
                    spec: "Permite pesquisa básica em biotecnologia"
                },
                {
                    title: "Biológico 2",
                    price: "100",
                    type: "is-success",
                    spec: "Permite pesquisa média em biotecnologia"
                },
                {
                    title: "Biológico 3",
                    price: "150",
                    type: "is-success",
                    spec: "Permite pesquisa avançada em biotecnologia"
                }
            ],

            currentArea: "",
            currentTech: "",
            searchbox: "",
            currentTechSpec: ""

        }
    }

    view () {

        const { techs, searchbox, currentTech } = this.estado;
        const filteredtechs = techs.filter(tech => tech.title.toLowerCase().includes(searchbox.toLowerCase()))

        return <Window class="science">

            <Sidebar class="science__sidebar" title={
                <button class="nes-btn science__sidebar-btn">Voltar</button>
            }/>

            <div class="scienceContent">
                <Tabs>
                    <Tab class="science__tabs" title={<button class="nes-btn Science__btn">Visão Geral</button>}>
                        <TechList>
                            <VScroll>
                                <SearchBar placeholder="Buscar ciência" changeHandler={e => {
                                    this.estado.searchbox = e.target.value}}/>
                                {filteredtechs.map(tech => (<Tech title={tech.title} spec={tech.spec} money={tech.price} changeHandler={e => {
                                    this.estado.currentTechSpec = tech.spec;
                                    this.estado.currentTech = tech.title;
                                }} type={tech.type || ""}/>))}
                            </VScroll>
                        </TechList>    
                    </Tab>
                    <Tab class="science__tabs" title={<button class="nes-btn is-warning Science__btn">Nuclear</button>}>
                    </Tab>
                    <Tab class="science__tabs" title={<button class="nes-btn is-success Science__btn">Biológico</button>}>
                    </Tab>
                    <Tab class="science__tabs" title={<button class="nes-btn is-primary Science__btn">Energético</button>}>
                    </Tab>
                    <Tab class="science__tabs" title={<button class="nes-btn is-error Science__btn">Transporte</button>}>
                    </Tab>
                </Tabs>

                <TechInfo title={this.estado.currentTech||"Escolha uma tecnologia"}>
                    {this.estado.currentTechSpec}
                </TechInfo>
                
            </div>
            
        </Window>
    }
}