import {Btn, Window} from '../ui';
import {model} from '../model';

const AUTHORS = [
    "Fábio Macêdo Mendes",
];


/**
 * Introdução
 */
export class Intro {
    showCredits: boolean;
    authors: string[];

    constructor() {
        this.showCredits = false;
        this.authors = AUTHORS.sort();
    }

    view() {
        return <Window>
            <div class="Intro">
                <div class="nes-container is-rounded" style="background: white;">
                    <h1>Bem vindos ao Disaster Simulator</h1>
                    <p>O que você deseja fazer?</p>
                    <p>
                        <Btn onclick={() => this.toggleCredits()}>Ver créditos</Btn>
                        <Btn btn="primary" onclick={() => this.start()}>Começar!</Btn></p>
                </div>
            </div>
            {this.showCredits ? this.viewCredits() : null}
        </Window>
    }

    viewCredits() {
        return <div class="Credits">
            <div class="Credits-overlay"> </div>
            <div class="Credits-modal">
                <h2>Créditos</h2>
                <ul>{this.authors.map(x => <li>{x}</li>)}</ul>
                <Btn btn="error" onclick={() => this.toggleCredits()}>Fechar</Btn>
            </div>
        </div>
    }

    toggleCredits() {
        console.log('yey!')
        this.showCredits = !this.showCredits;
    }

    start() {
        model.window = null;
    }
}