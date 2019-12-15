import { game } from '../../../utils';

import UNB from '../../assets/UNB.jpg';
import MIT from '../../assets/MIT.jpg';
import TOKYO from '../../assets/Tokyo.JPG'

let currentMoney;

m.request({ url: 'http://localhost:5000/value/state/', method: 'GET' }).then(x => {currentMoney = x.capital });

export class Unb {
    enabled: boolean = true;

    view() {
        if (!this.enabled) {
            return null;
        }

        return (
            <div class="nes-container is-rounded">
                <p><div class="nes-container is-rounded is-dark">
                    <h1>UNB</h1>
                    <p id="p">Gostaria de colocar um infiltrado na universidade?</p>
                    <div class="culture-comprar" id='div-dialog'>
                        <button type="button" id='botao' class="nes-btn is-primary culture" onclick={() => document.getElementById('unb').showModal()}
                        >Info</button>
                    </div>
                </div></p>

                <dialog class="nes-dialog is-rounded" id="unb">
                    <form method="dialog">
                        <div>
                            <h1>Universidade de Brasília</h1>
                            <img class="cultureImg" src={UNB} width="500" height="300" />
                            <p />
                            <p class="title">Universidade de Brasília, Brasília, Brasil.</p>
                            <p>É a oitava melhor universidade do Brasil, com mais de 100 cursos de graduação disponiveis. <br /> Recentemente, os alunos começaram a fazer revoltas.</p>
                            <p>Gostaria de colocar um professor infiltrado para influenciar os alunos a pararem?</p>
                            <p class="preço_culture">Preço: 120$</p>
                            <menu class="dialog-menu">
                                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                            <button class="nes-btn culture is-success" onclick={() => { this.select() }} >Confirmar</button>
                                &emsp;
                            <button class="nes-btn culture is-error">Cancelar</button>
                            </menu>
                        </div>
                    </form>
                </dialog>
            </div>
        );
    }
    select() {
        if (currentMoney < 120) {
            window.alert('Dinheiro insuficiente!')
        }
        else {
            this.enabled = false;
            game.multiply("revolt", 1.2);
            game.multiply("satisfaction", 0.9);
            game.add("capital", -120);
        }
    }
}

export class Mit {

    enabled: boolean = true;

    view() {

        // m.request({ url: 'http://localhost:5000/value/state/', method: 'GET' }).then(x => { this.currentMoney = x.capital });

        if (!this.enabled) {
            return null;
        }

        return (
            <div class="nes-container is-rounded">
                <p><div class="nes-container is-rounded is-dark">
                    <h1>MIT</h1>
                    <p id="p">Gostaria de iniciar um movimento de apoio a nossas causas?</p>
                    <div class="culture-comprar" id='div-dialog'>
                        <button type="button" id='botao' class="nes-btn is-primary culture" onclick={() => document.getElementById('mit').showModal()}
                        >Info</button>
                    </div>
                </div></p>

                <dialog class="nes-dialog is-rounded" id="mit">
                    <form method="dialog">
                        <div>
                            <h1>Istituto de Tecnologia de Massachusetts</h1>
                            <img class="cultureImg" src={MIT} width="500" height="300" />
                            <p />
                            <p class="title">Istituto de Tecnologia de Massachusetts, Massachusetts, EUA.</p>
                            <p>Está entre as melhores universidades do mundo, com um total de 32 departamentos. <br /> É ,principalmente, conhecido por suas pesquisas nas areas científicas.</p>
                            <p>É uma boa ideia começar um movimento em uma universidade tão importante <br /> Gostaria de começar um movimento de apoio a nossas ideias?</p>
                            <p class="preço_culture">Preço: 150$</p>
                            <menu class="dialog-menu">
                                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                            <button class="nes-btn culture is-success" onclick={() => { this.select() }}>Confirmar</button>
                                &emsp;
                            <button class="nes-btn culture is-error">Cancelar</button>
                            </menu>
                        </div>
                    </form>
                </dialog>
            </div>
        );
    }
    select() {
        if (currentMoney < 0) {
            window.alert("Dinheiro insuficiente!");
        }
        else {
            this.enabled = false;
            game.multiply("revolt", 0.8);
            game.multiply("satisfaction", 0.9);
            game.add("capital", -150);
        }
    }
}

export class TokyoUni {
    enabled: boolean = true;

    view() {
        // m.request({ url: 'http://localhost:5000/value/state/', method: 'GET' }).then(x => { this.currentMoney = x.capital });

        if (!this.enabled) { return null; }
        return (
            <div class="nes-container is-rounded">
                <p><div class="nes-container is-rounded is-dark">
                    <h1>Universidade de Tokyo</h1>
                    <p id="p">Gostaria de comandar a instituição?</p>
                    <div class="culture-comprar" id='div-dialog'>
                        <button type="button" id='botao' class="nes-btn is-primary culture" onclick={() => document.getElementById('Tokyo').showModal()}
                        >Info</button>
                    </div>
                </div></p>

                <dialog class="nes-dialog is-rounded" id="Tokyo">
                    <form method="dialog">
                        <div>
                            <h1>Universidade de Tokyo</h1>
                            <img class="cultureImg" src={TOKYO} width="500" height="300" />
                            <p />
                            <p class="title">Universidade de Tokyo, Tokyo, Japão.</p>
                            <p>Considerada a melhor universidade da Asia. Com, atualmente, 5 campi e 10 faculdades.<br />Além de ter 11 institutos de pesquisa. É a 21 melhor universidade do mundo.</p>
                            <p>Seria uma boa ideia comandar a maior instituição de ensino da Asia! <br /> Gostaria de comprar a direção da universidade?</p>
                            <p class="preço_culture">Preço: 500$</p>
                            <menu class="dialog-menu">
                                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                            <button class="nes-btn culture is-success" onclick={() => { this.select() }}>Confirmar</button>
                                &emsp;
                            <button class="nes-btn culture is-error">Cancelar</button>
                            </menu>
                        </div>
                    </form>
                </dialog>
            </div>
        );
    }
    select() {
        if (currentMoney < 500) {
            window.alert("Dinheiro insuficiente!");
        } else {
            this.enabled = false;
            game.multiply("revolt", 0.8);
            game.multiply("satisfaction", 1.4);
            game.add("capital", -500);
        }
    }
}