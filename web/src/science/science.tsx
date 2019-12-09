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
import image from './images/Science.png';

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
        cheat: boolean;
    };
    cheatActive: any;

    constructor(){
        super();
        this.estado = {
            techs: [],
            techsFilter: {},
            currentArea: "",
            currentTech: "",
            searchbox: "",
            currentTechSpec: "",
            currentTechMoney: 0,
            cheat: false
        };
        this.effectEnabled = true;
        this.nuclear = [];
        this.bio = [];
        this.energy = [];
        this.industry = [];
        this.trans = [];
        this.isBuyable = false;
        this.purchased = false;
        this.cheatActive = [{
            title: 'Bomba de fusão a frio',
            type: 'is-cheat',
            spec: 'Desenvolvimento de uma bomba de fusão fria, extremamente perigosa',
            status: 'available',
            price: 2000,
            affects: ['ABATEMENT', 'PRODUCTION', 'EMISSIONS', 'CARBON_INTENSITY', 'CARBON_BACKSTOP_PRICE'],
            how: [1.5, 1.25, .7, .7, .5]
        },
        {
            title: 'Antrax',
            type: 'is-cheat',
            spec: 'Desenvolvimento de armas biológicas para controle populacional',
            status: 'available',
            price: 2000,
            affects: ['C_ATM', 'ABATEMENT', 'population', 'POPULATION_GROWTH'],
            how: [.7, 1.8, .8, .8]
        },
        {
            title: 'Reator de antimatéria',
            type: 'is-cheat',
            spec: 'Desenvolvimento de reatores de antimatéria através do mundo, para assim, diminuir o uso de combustíveis fósseis',
            status: 'available',
            price: 2500,
            affects: ['PRODUCTIVITY', 'ABATEMENT', 'PRODUCTION'],
            how: [2, 1.5, 2]
        },
        {
            title: 'Teletransporte',
            type: 'is-cheat',
            spec: 'Com o teletransporte, quem precisa de transporte?',
            status: 'available',
            price: 2500,
            affects: ['PRODUCTIVITY', 'ABATEMENT', 'PRODUCTION'],
            how: [2, 1.5, 2]
        },
        {
            title: 'Empresários do bem',
            type: 'is-cheat',
            spec: 'Imagina se os empresários não tentassem acabar com o mundo todo dia',
            status: 'available',
            price: 2000 }]
        
        this.request();
    }

    buy(id){
        let techs = this.estado.techs;
        let x;
        m.request({url: 'http://localhost:5000/value/state/', method: 'GET'}).then(r => { this.currentMoney = r.capital});
        m.request({url: 'http://localhost:5000/science/list-techs/', method: 'GET'}).then(r => x = r);
        m.request({url: `http://localhost:5000/science/buy-tech/${id}`});
        this.request();
        if(this.estado.cheat){
            this.crt();
        }
        this.estado.currentTechSpec = "";
        this.estado.currentTech = "";
        this.estado.currentTechMoney = 0;
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
                        <p style={'margin-bottom: 3rem'} class="title">{`Deseja comprar ${this.estado.currentTech} por ${this.estado.currentTechMoney}?`}</p>
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
            this.crt();
            this.estado.cheat = true;
            m.request({url: 'http://localhost:5000/value/state/', method: 'GET'}).then(x => { this.currentMoney = x.capital});
        }
        if(cheat === 'minus'){
            m.request({url: 'http://localhost:5000/cheat/minus', method: 'GET'});
            this.crt();
            this.estado.cheat = true;
            m.request({url: 'http://localhost:5000/value/state/', method: 'GET'}).then(x => { this.currentMoney = x.capital});
        }
        if(cheat === 'deactivate'){
            this.crt(false);
            this.estado.cheat = false;
            for(let i = 0; i < 5; i++){
                this.estado.techs.pop();
                this.request();
            }
        }
        if(cheat === 'activate'){
            this.crt();
            this.estado.cheat = true;
            for(let i = 0; i < 5; i++){
                this.estado.techs.push(this.cheatActive[i]);
            }
        }
    }

    oninit(){
        this.request();
        if(this.estado.cheat){
            this.crt();
        }
    }

    crt(bool = true){
        let element = document.querySelectorAll('.Window')[1];
        if(bool){
            element.classList.add('crt');
        }else{
            element.classList.remove('crt');
        }
    }

    view () {
        const { techs, searchbox, currentTech, techsFilter } = this.estado;
        const filteredtechs = techs.filter(tech => tech.title.toLowerCase().includes(searchbox.toLowerCase()));

        return <Window class="science">

            <Sidebar class="science__sidebar" src={image} title={
                <button class="nes-btn science__sidebar-btn" onclick={e=> model.menu()}>{"<"} Voltar</button>
            }/>

            <div class="scienceContent">
                <Tabs>
                    <Tab class="science__tabs" title={<button onclick={this.estado.currentArea = ""} class="nes-btn Science__btn">Visão Geral</button>}>
                        <TechList title="Tecnologias disponíveis">
                            <SearchBar placeholder="Buscar ciência" cheats={e=>this.cheats(searchbox)} changeHandler={e => {
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
