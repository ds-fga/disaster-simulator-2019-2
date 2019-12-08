import m from 'mithril';
import { Window, Sidebar } from '../ui';
import { Tabs, Tab } from './components/ScienceTab.component';
import TechInfo from './components/TechInfo.component';
import Tech from './components/Tech.component';
import TechList from './components/TechList.component';
import SearchBar from './components/SearchBar.component';
import TechButton from './components/TechButton.component';
import '../model';
import { model } from '../model';
import {MithrilTsxComponent as Component} from 'mithril-tsx-component';

/**
 * Componente para janela com árvore tecnológica e de desenvolvimento científico.
 */

interface ScienceAttrs {
}

export class Science extends Component<ScienceAttrs>{

    isBuyable?: boolean;
    effectEnabled: boolean;
    nuclear: any;
    bio: any;
    trans: any;
    energy: any;
    industry: any;
    purchased?: boolean;
    currentMoney: number;
    estado: {
        techs: any;
        techsFilter: Object;
        currentArea: string;
        currentTech: string;
        searchbox: string;
        currentTechSpec: string;
        currentTechProg?: number;
        currentTechMoney: number;
    };

    constructor(){
        super();
        this.estado = {
            techs: [],
            techsFilter: {},
            currentArea: "",
            currentTech: "",
            searchbox: "",
            currentTechSpec: "",
            currentTechMoney: 0
        };
        this.effectEnabled = true;
        this.nuclear = [];
        this.bio = [];
        this.energy = [];
        this.industry = [];
        this.trans = [];
        this.isBuyable = false;
        this.purchased = false;
        this.currentArea = "";
        
        this.request();
        console.log(this.nuclear);
    }

    buy(id){
        let techs = this.estado.techs;
        m.request({url: `http://localhost:5000/science/buy-tech/${id}`});
        for(let i = 0; i < this.estado.techs.lenght; i++){
            if(techs[i].title === id){
                m.request({url: `http://localhost:5000/multiply/${techs[i].affect}/${techs[i].much}`, method: 'GET'})
            }
        }
    }

    request(){
        m.request({url: 'http://localhost:5000/science/nuclear', method: 'GET'}).then(x => {this.nuclear = x});
        m.request({url: 'http://localhost:5000/science/biológico', method: 'GET'}).then(x => {this.bio = x});
        m.request({url: 'http://localhost:5000/science/energético', method: 'GET'}).then(x => {this.energy = x});
        m.request({url: 'http://localhost:5000/science/transporte', method: 'GET'}).then(x => {this.trans = x});
        m.request({url: 'http://localhost:5000/science/industrial', method: 'GET'}).then(x => {this.industry = x});
        m.request({url: 'http://localhost:5000/science/list-techs/', method: 'GET'}).then(x => { this.estado.techs = x});
        m.request({url: 'http://localhost:5000/value/state/', method: 'GET'}).then(x => { this.currentMoney = x.capital});
    }

    techSet(tech){
        if(tech.status !== "blocked"){
            this.estado.currentTechSpec = tech.spec;
            this.estado.currentTech = tech.title;
            this.estado.currentTechMoney = tech.price;
        }
        if(tech.status === "available"){
            this.isBuyable = true;
        } else if(tech.status === "purchased"){
            this.purchased = true; 
            this.isBuyable = false;
        }
    }

    showButton(){
        if(this.estado.currentTechMoney === 0){
            return;
        }else if(this.estado.currentTechMoney > this.currentMoney ) {
            return(<button class="nes-btn is-error">${this.estado.currentTechMoney}</button>)
        }else if(this.isBuyable){
            return (
                <div style="float: right; margin-bottom: .3rem">
                    <TechButton onclick={() => document.getElementById('dialog-dark-rounded').showModal()}>{`Comprar $${this.estado.currentTechMoney}`}</TechButton>
                    <dialog class="nes-dialog is-dark is-rounded" id="dialog-dark-rounded">
                        <form method="dialog">
                        <p style={'margin-bottom: 3rem'} class="title">{`Deseja comprar ${this.estado.currentTech}?`}</p>
                        <p></p>
                        <menu class="dialog-menu">
                            <button class="nes-btn">Cancelar</button>
                            <button onclick={e=> {
                                this.buy(this.estado.currentTech);
                                this.request();
                            }} class="nes-btn is-primary">Confirmar</button>
                        </menu>
                        </form>
                    </dialog>
                </div>
            )
        }else if(this.purchased){
            return(<button class="nes-btn is-success">Já comprado</button>)
        }
    }

    cheats(cheat){
        if(cheat === 'add'){
            m.request({url: 'http://localhost:5000/cheat/add', method: 'GET'});
        }
        if(cheat === 'minus'){
            m.request({url: 'http://localhost:5000/cheat/minus', method: 'GET'});
        }
        if(cheat === 'reset'){
            m.request({url: 'http://localhost:5000/cheat/reset', method: 'GET'});
        }
    }

    oninit(){
        this.request();
    }

    view () {
        console.log(this.nuclear);
        window.setTimeout(this.request(), 3000);
        const { techs, searchbox, currentTech, techsFilter } = this.estado;
        const filteredtechs = techs.filter(tech => tech.title.toLowerCase().includes(searchbox.toLowerCase()));

        return <Window class="science">

            <Sidebar class="science__sidebar" title={
                <button class="nes-btn science__sidebar-btn" onclick={e=> model.menu()}>{"<"} Voltar</button>
            }/>

            <div class="scienceContent">
                <Tabs>
                    <Tab class="science__tabs" title={<button onclick={this.estado.currentArea = ""} class="nes-btn Science__btn">Visão Geral</button>}>
                        <TechList title="Tecnologias disponíveis">
                            <SearchBar placeholder="Buscar ciência" cheats={e=>this.cheats(this.estado.searchbox)} changeHandler={e => {
                                this.estado.searchbox = e.target.value}}/>
                            <div class="listcontent">{filteredtechs.map(tech => (
                                <Tech title={tech.title} status={tech.status} money={tech.price} dbclick={() => document.getElementById('dialog-dark-rounded').showModal()} type={tech.type || ""} changeHandler={e=>this.techSet(tech)}/>
                            ))}</div>
                        </TechList>    
                    </Tab>
                    <Tab class="science__tabs" title={<button onclick={this.estado.currentArea = 'Nuclear'} class="nes-btn is-warning Science__btn">Nuclear</button>}>
                        <TechList title="Nuclear">
                            {this.nuclear.map((tech) => (
                                <Tech title={tech.title} status={tech.status} money={tech.price} dbclick={() => document.getElementById('dialog-dark-rounded').showModal()} type={tech.type || ""} changeHandler={e=>this.techSet(tech)}/>
                            ))}
                        </TechList>
                    </Tab>
                    <Tab class="science__tabs" title={<button onclick={this.estado.currentArea = 'Bio'} class="nes-btn is-success Science__btn">Biológico</button>}>
                        <TechList title="Biológico">
                            {this.bio.map((tech) => (
                                <Tech title={tech.title} status={tech.status} money={tech.price} dbclick={() => document.getElementById('dialog-dark-rounded').showModal()} type={tech.type || ""} changeHandler={e=>this.techSet(tech)}/>
                            ))}
                        </TechList>
                    </Tab>
                    <Tab class="science__tabs" title={<button onclick={this.estado.currentArea = 'Energy'} class="nes-btn is-primary Science__btn">Energético</button>}>
                        
                        <TechList title="Energético">
                            {this.energy.map((tech) => (
                                    <Tech title={tech.title} status={tech.status} money={tech.price} dbclick={() => document.getElementById('dialog-dark-rounded').showModal()} type={tech.type || ""} changeHandler={e=>this.techSet(tech)}/>
                            ))}
                        </TechList>
                    </Tab>
                    <Tab class="science__tabs" title={<button onclick={this.estado.currentArea = 'Trans'} class="nes-btn is-error Science__btn">Transporte</button>}>
                        
                        <TechList title="Transporte">
                            {this.trans.map((tech) => (
                                <Tech title={tech.title} status={tech.status} money={tech.price} dbclick={() => document.getElementById('dialog-dark-rounded').showModal()} type={tech.type || ""} changeHandler={e=>this.techSet(tech)}/>
                            ))}
                        </TechList>
                    </Tab>
                    <Tab class="science__tabs" title={<button onclick={this.estado.currentArea = 'Industry'} class="nes-btn industry Science__btn">Indústria</button>}>
                        <TechList title="Indústria">
                            {this.industry.map((tech) => (
                                <Tech title={tech.title} status={tech.status} money={tech.price} dbclick={() => document.getElementById('dialog-dark-rounded').showModal()} type={tech.type || ""} changeHandler={e=>this.techSet(tech)}/>
                            ))}
                        </TechList>
                    </Tab>
                </Tabs>
                <TechInfo title={this.estado.currentTech} money={this.currentMoney} spec={this.estado.currentTechSpec}>
                    {this.showButton()}
                </TechInfo>  
            </div>
        </Window>
    }
}
