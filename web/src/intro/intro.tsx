import { Btn, Window, VScroll } from '../ui';
import { model } from '../model';
import logoImg from './logo.jpg';


const AUTHORS = [
    "Fábio Macêdo Mendes",
    "Brian Pina",
    "Oric",
    "Arthur Matos",
    "Abner Filipe",
    "Thiago Paiva",
    "Eduarda Servidio",
    "João Moura",
    "Victor Hugo",
    "Victor Lima",
    "Victor Buendia",
    "Samuel Avila",
    "Gabriel Sabanai",
    "Lucas Spinosa",
    "Danilo Rocha",
    "Tiago Lyra",
    "Rodrigo Carvalho",
    "Erick Levy",
    "Enzo Govas",
    "Alan Marques",
    "Eliás Yousef",
    "Rodrigo Balbino",
    "Rafael Leão",
    "Roberto Santana",
    "Roberto Nóbrega",
    "Caetano Lúcio",
    "greek",
    "Erick Melo",
    "Rodolfo Cabral Neves",
    "Ugor Brandão",
    "Matheus Raphael",
    "Pedro Abreu",
    "Eduardo Afonso",
];


/**
 * Introdução
 */
export class Intro {
    showCredits: boolean;
    status: "start" | "intro" | "fnord";
    authors: string[];

    constructor() {
        this.showCredits = false;
        this.status = "start";
        this.authors = AUTHORS.sort();
    }

    view() {
        let methods = {
            start: this.viewStart.bind(this),
            intro: this.viewIntroStory.bind(this),
            fnord: this.viewFnord.bind(this),
        }
        return <Window>{methods[this.status]()}</Window>
    }

    viewStart() {
        return [
            <div class="Intro">
                <div class="nes-container is-rounded" style="background: white; max-width: 50rem; margin: auto;">
                    <h1>Disaster Simulator</h1>
                    <h2>Escolha seu Illuminati</h2>
                    {this.viewRegistrationForm()}
                    <p>O que você deseja fazer?</p>
                    <p>
                        <Btn onclick={() => this.toggleCredits()}>Ver créditos</Btn>
                        <Btn btn="primary" onclick={() => this.continue()}>Avançar! ></Btn></p>
                </div>
            </div>,
            this.showCredits ? this.viewCredits() : null
        ]
    }

    viewCredits() {
        return <div class="Credits">
            <div class="Credits-overlay"> </div>
            <div class="Credits-modal">
                <h2>Créditos</h2>
                <h3>(Turma de Desenvolvimento de Software da FGA 2019/2)</h3>
                <ul>{this.authors.map(x => <li>{x}</li>)}</ul>
                <Btn btn="error" onclick={() => this.toggleCredits()}>Fechar</Btn>
            </div>
        </div>
    }

    viewRegistrationForm() {
        return <form id="register-form" style="margin: 2rem 4rem">
            <div class="nes-field">
                <label>Nome: <input class="nes-input" name="name" placeholder="Sílvio Santos, o Illuminati Brasileiro" /></label>
            </div>
            <div class="nes-field">
                <label>Espécie:
                        <select class="nes-input" name="species" value="calango">
                        <option value="tiranossauro">Tiranossauro</option>
                        <option value="velociraptor">Velociraptor</option>
                        <option value="calango">Calango do Cerrado</option>
                        <option value="komodo">Dragão de Komodo</option>
                    </select>
                </label>
            </div>
            <div class="nes-field">
                <label>Planeta:
                        <select class="nes-input" value="terra" name="planet">
                            <option value="terra" selected>Profundezas da Terra</option>
                            <option value="alpha">Alpha Centauri</option>
                            <option value="marte">Marte</option>
                            <option value="venus">Vênus</option>
                    </select>
                </label>
            </div>
            <div class="nes-field">
                <label>Idade real: <input class="nes-input" name="age" type="number" placeholder="900" /></label>
            </div>
        </form>
    }

    viewIntroStory() {
        let player = model.player;

        return <div class="Intro">
            <div class="nes-container is-rounded" style="background: white; max-width: 50rem; margin: auto;">
                <h2>Illuminatti: <span style="color: red">{player.name}</span></h2>
                <p>Bem vindo <strong>{player.name}</strong>! Depois de anos de dedicação,
                conspiração e controle mental, você finalmente conseguiu
                uma vaga no conselho Illuminati do planeta Terra.</p>

                <p>Não é um lugar tão bom como seu lar, <strong>{player.planetDescription}</strong>,
                mas trará incontáveis riquezas para sua conta na suiça e glória para sua espécie
                de <strong>{player.speciesDescription}</strong>.</p>
                <p>
                    <Btn btn="error" onclick={() => { this.status = "fnord" }}>FNORD?</Btn>
                    <Btn btn="primary" onclick={() => this.continue()}>Vamos conspirar :-)</Btn>
                </p>
            </div>
        </div>
    }

    viewFnord() {
        // https://tympanus.net/codrops/2017/12/21/css-glitch-effect/
        return <div class="Intro" style="padding: 0">
            <p style="position: absolute; margin: 1rem auto; right: 1rem; z-index: 1000">
                Fnord? <Btn btn="error" onclick={() => { this.status = "intro" }}>x</Btn>
            </p>
            <div class="glitch">
                <div class="glitch__img"></div>
                <div class="glitch__img"></div>
                <div class="glitch__img"></div>
                <div class="glitch__img"></div>
                <div class="glitch__img"></div>
            </div>
        </div>
    }

    toggleCredits() {
        this.showCredits = !this.showCredits;
    }

    continue() {
        if (this.status === "start") {
            let player = model.player;
            player.name = this.getValue('name', player.name);
            player.species = this.getValue('species', player.species);
            player.speciesDescription = this.getDescription('species', player.speciesDescription);
            player.planet = this.getValue('planet', player.planet);
            player.planetDescription = this.getDescription('planet', player.planetDescription);
            player.age = parseInt(this.getValue('age', player.age));
            this.status = "intro";
        }
        else {
            model.window = null;
        }
    }

    getValue(name, opt) {
        let form = document.getElementById('register-form');
        let field = form.querySelector(`[name=${name}]`);
        if (field && field['value']) {
            return field['value'];
        }
        return opt;
    }

    getDescription(name, opt) {
        let form = document.getElementById('register-form');
        let field: HTMLSelectElement = form.querySelector(`[name=${name}]`);
        if (field && field['value']) {
            let opt = field.options[field.options.selectedIndex];
            return opt.innerText;
        }
        return opt;
    }
}