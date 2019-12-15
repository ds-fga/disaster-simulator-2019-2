import { game } from '../../../utils';

import Papaimg from '../../assets/Papa.jpg';
import Religião from '../../assets/CreateReligion.jpg';
import ArautosImg from '../../assets/Arautos.jpg';

let currentMoney;
m.request({ url: 'http://localhost:5000/value/state/', method: 'GET' }).then(x => {currentMoney = x.capital });

export class NegociosPapa {
    enabled: boolean = true;
    view() {

        if (!this.enabled) {
            return null;
        }
        return (
            <div class="nes-container is-rounded">
                <p><div class="nes-container is-rounded is-dark">
                    <h1>Papa Francisco</h1>
                    <p id="p">Gostaria de subornar o Papa?</p>
                    <div class="culture-comprar" id='div-dialog'>
                        <button type="button" id='botao' class="nes-btn is-primary culture" onclick={() => document.getElementById('NegociosPapa').showModal()}
                        >Info</button>
                    </div>
                </div></p>
                <dialog class="nes-dialog is-rounded" id="NegociosPapa">
                    <form method="dialog">
                        <h1>Papa Francisco</h1>
                        <img class="cultureImg" src={Papaimg} width="400" height="200" />
                        <p />
                        <p class="title">Papa Francisco é, atualmente, uma das pessoas mais influente do mundo. <br />
                            Poderiamos utiliza-lo para que ele pregue a nossa ideologia.
                        </p>
                        <p>Gostaria de suborna-lo?</p>
                        <p class="preço_culture">Preço: 450$</p>
                        <menu class="dialog-menu">
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                            &nbsp;
                            <button class="nes-btn culture is-success" onclick={() => { this.select() }}>Confirmar</button>
                            &emsp;
                            <button class="nes-btn culture is-error">Cancelar</button>
                        </menu>
                    </form>
                </dialog>
            </div>
        );
    }
    select() {
        if (currentMoney < 450) {
            window.alert("Dinheiro insuficiente!");
        } else {
            this.enabled = false;
            game.multiply("revolt", 0.8);
            game.multiply("satisfaction", 1.3);
            game.add("capital", -450);
        }
    }
}

export class CreateReligion {
    enabled: boolean = true;

    view() {
        // m.request({ url: 'http://localhost:5000/value/state/', method: 'GET' }).then(x => { this.currentMoney = x.capital });

        if (!this.enabled) {
            return null;
        }
        return (
            <div class="nes-container is-rounded">
                <p><div class="nes-container is-rounded is-dark">
                    <h1>Criar uma religião!</h1>
                    <p id="p">Gostaria de criar uma religião?</p>
                    <div class="culture-comprar">
                        <button type="button" id='botao' class="nes-btn is-primary culture" onclick={() => document.getElementById("CreateReligion").showModal()}
                        >Info</button>
                    </div>
                </div></p>
                <dialog class="nes-dialog is-rounded" id="CreateReligion">
                    <form method="dialog">
                        <h1>Criar uma religião</h1>
                        <img class="cultureImg" src={Religião} width="400" height="200" />
                        <p />
                        <p class="title">Desde os primordios, as crenças religiosas fizeram parte da cultura de uma sociedade. <br />
                            Poderiamos criar uma religião que nos beneficie fazendo os crentes acreditarem que existe uma grupo<br />
                            maior e que nossas ações melhoram o mundo.
                        </p>
                        <p>Gostaria de criar uma religião?</p>
                        <p class="preço_culture">Preço: 300$</p>
                        <menu class="dialog-menu">
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                            &nbsp;
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                            <button class="nes-btn culture is-success" onclick={() => { this.select() }}>Confirmar</button>
                            &emsp;
                            <button class="nes-btn culture is-error">Cancelar</button>
                        </menu>
                    </form>
                </dialog>
            </div>
        );
    }
    select() {
        if (currentMoney < 300) {
            window.alert("Dinheiro insuficiente!");
        } else {
            this.enabled = false;
            game.multiply("revolt", 1.3);
            game.multiply("satisfaction", 1.4);
            game.add("capital", -300);
        }
    }

}

export class Arautos {
    enabled: boolean = true;

    view() {
        // m.request({ url: 'http://localhost:5000/value/state/', method: 'GET' }).then(x => { this.currentMoney = x.capital });

        if (!this.enabled) {
            return null;
        }

        return (
            <div class="nes-container is-rounded">
                <p><div class="nes-container is-rounded is-dark">
                    <h1>Arautos do Evangelho</h1>
                    <p id="p">Gostaria de comprar os Arautos?</p>
                    <div class="culture-comprar">
                        <button type="button" id='botao' class="nes-btn is-primary culture" onclick={() => document.getElementById("Arautos").showModal()}
                        >Info</button>
                    </div>
                </div></p>
                <dialog class="nes-dialog is-rounded" id="Arautos">
                    <form method="dialog">
                        <h1>Arautos do Evangelho</h1>
                        <img class="cultureImg" src={ArautosImg} width="400" height="200" />
                        <p />
                        <p class="title">Os Arautos do Evangelho (em latim Evangelii Præcones) são uma Associação Internacional de Fiéis de Direito Pontifício <br />
                            Poderiamos comprar a organização para que manipulem seus seguidores a gostarem do que fazemos.<br />
                        </p>
                        <p>Gostaria de comprar tal Associação?</p>
                        <p class="preço_culture">Preço: 150$</p>
                        <menu class="dialog-menu">
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                            &nbsp;
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                            <button class="nes-btn culture is-success" onclick={() => { this.select() }}>Confirmar</button>
                            &emsp;
                            <button class="nes-btn culture is-error">Cancelar</button>
                        </menu>
                    </form>
                </dialog>
            </div>
        );
    }
    select() {
        if (currentMoney < 150) {
            window.alert("Dinheiro insuficiente!");
        } else {
            this.enabled = false;
            game.multiply("revolt", 1.3);
            game.multiply("satisfaction", 1.1);
            game.add("capital", -150);
        }
    }
}