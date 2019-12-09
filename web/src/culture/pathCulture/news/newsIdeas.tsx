import { game } from '../../../utils';

import Alimg from '../../assets/Aljazeera.jpg';
import NYimg from '../../assets/NYT.jpg';
import Anonymousimg from '../../assets/Anonymous.png';
import Googleimg from '../../assets/google.png';

export class AlJazeera {
    currentMoney: number;
    enabled: boolean = true;

    view() {
        m.request({ url: 'http://localhost:5000/value/state/', method: 'GET' }).then(x => { this.currentMoney = x.capital });

        if (!this.enabled) {
            return null;
        }

        return (
            <div class="nes-container is-rounded">
                <p><div class="nes-container is-rounded is-dark">
                    <h1>Al Jazeera</h1>
                    <p id="p">Deseja comprar o canal de notícia?</p>
                    <div class="culture-comprar" id='div-dialog'>
                        <button type="button" id='botao' class="nes-btn is-primary culture" onclick={() => document.getElementById('Al').showModal()}
                        >Info</button>
                    </div>
                </div></p>

                <dialog class="nes-dialog is-rounded" id="Al">
                    <form method="dialog">
                        <div>
                            <h1>Al Jazeera</h1>
                            <img class="cultureImg" src={Alimg} width="500" height="300" />
                            <p />
                            <p class="title">Os conflitos no Oriente Médio estão cada vez mais intensos...</p>
                            <p>É uma otima oportunidade de mostrar empatia com a situação!<br />
                                Porém, o canal de notícias Al Jazeera esta deturpando informações e influencianddo <br />
                                negativamente sua reputação...
                            </p>
                            <p>Deseja comprar a Al Jazeera para controla-la? </p>
                            <p class="preço_culture">Preço: 200$</p>
                            <menu class="dialog-menu">
                                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                <button class="nes-btn is-success culture" onclick={() => { this.select() }}>Confirmar</button>
                                &emsp;
                                <button class="nes-btn is-error culture">Cancelar</button>
                            </menu>
                        </div>
                    </form>
                </dialog>
            </div>
        );
    }
    select() {
        if (this.currentMoney < 200) {
            window.alert("Dinheiro insuficiente!");
        } else {
            this.enabled = false;
            game.multiply("revolt", 0.8);
            game.multiply("satisfaction", 1.2);
            game.add("capital", -200);
        }
    }

}

export class NewYork {
    currentMoney: number;
    enabled: boolean = true;
    view() {
        m.request({ url: 'http://localhost:5000/value/state/', method: 'GET' }).then(x => { this.currentMoney = x.capital });

        if (!this.enabled) {
            return null;
        }

        return (
            <div class="nes-container is-rounded">
                <p><div class="nes-container is-rounded is-dark">
                    <h1>The New York Times</h1>
                    <p id="p">Deseja comprar o New York Times?</p>
                    <div class="culture-comprar" id='div-dialog'>
                        <button type="button" id='botao' class="nes-btn is-primary culture" onclick={() => document.getElementById('NY').showModal()}
                        >Info</button>
                    </div>
                </div></p>

                <dialog class="nes-dialog is-rounded" id="NY">
                    <form method="dialog">
                        <div>
                            <h1>The New York Times</h1>
                            <img class="cultureImg" src={NYimg} width="500" height="300" />
                            <p />
                            <p class="title">The New York Times é um dos jornais mais famosos do mundo.</p>
                            <p>Além disso, o jornal possuí uma grande influência na midia internacional.<br />
                                Seria interessante comprar a The New York Times Company. Assim poderíamos controlar <br />
                                as notícias que vão para circulação.
                        </p>
                            <p>Deseja comprar o The New York Times?</p>
                            <p class="preço_culture">Preço: 250$</p>
                            <menu class="dialog-menu">
                                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                            <button class="nes-btn is-success culture" onclick={() => { this.select() }}>Confirmar</button>
                                &emsp;
                            <button class="nes-btn is-error culture">Cancelar</button>
                            </menu>
                        </div>
                    </form>
                </dialog>
            </div>
        );
    }
    select() {
        if (this.currentMoney < 250) {
            window.alert("Dinheiro insuficiente!");
        } else {
            this.enabled = false;
            game.multiply("revolt", 0.8);
            game.multiply("satisfaction", 1.2);
            game.add("capital", -250);
        }
    }
}

export class Anonymous {
    currentMoney: number;
    enabled1: boolean = true;
    enabled2: boolean;
    view() {
        m.request({ url: 'http://localhost:5000/value/state/', method: 'GET' }).then(x => { this.currentMoney = x.capital });

        if (!this.enabled1) {
            if (!this.enabled2) {
                return null;
            } else {
                return (
                    <div class="nes-container is-rounded">
                        <p><div class="nes-container is-rounded is-dark">
                            <h1>Google Hackeada!</h1>
                            <p id="p">Deseja que o Anonymous hackeei a Google?</p>
                            <div class="culture-comprar" id='div-dialog'>
                                <button type="button" id='botao' class="nes-btn is-primary culture" onclick={() => document.getElementById('Google').showModal()}
                                >Info</button>
                            </div>
                        </div></p>

                        <dialog class="nes-dialog is-rounded" id="Google">
                            <form method="dialog">
                                <div>
                                    <h1>Google</h1>
                                    <img class="cultureImg" src={Googleimg} width="500" height="300" />
                                    <p />
                                    <p class="title">A Google é uma das empresas mais poderosas do mundo.</p>
                                    <p>Ela é lider como plataforma de pesquisa, além, de ser influencia em vários setores da tecnologia.<br />
                                        Hakeia para ter o domínio de uma das gigantes coorporativas na palma de suas mãos! <br />
                                    </p>
                                    <p>Deseja Hackear a Google?</p>
                                    <p class="preço_culture">Preço: 100$</p>
                                    <menu class="dialog-menu">
                                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                            <button class="nes-btn is-success culture" onclick={() => { this.select2() }}>Confirmar</button>
                                        &emsp;
                            <button class="nes-btn is-error culture">Cancelar</button>
                                    </menu>
                                </div>
                            </form>
                        </dialog>
                    </div>
                );
            }
        }
        //////////////////////////////////
        else if (this.enabled1 = true) {
            return (
                <div class="nes-container is-rounded">
                    <p><div class="nes-container is-rounded is-dark">
                        <h1>Convite inesperado!</h1>
                        <p id="p">???</p>
                        <div class="culture-comprar" id='div-dialog'>
                            <button type="button" id='botao' class="nes-btn is-primary culture" onclick={() => document.getElementById('Anonymous').showModal()}
                            >Info</button>
                        </div>
                    </div></p>

                    <dialog class="nes-dialog is-rounded" id="Anonymous">
                        <form method="dialog">
                            <div>
                                <h1>Anonymous!!!</h1>
                                <img class="cultureImg" src={Anonymousimg} width="500" height="300" />
                                <p />
                                <p class="title">A Anonymous entrou em contato com você!!</p>
                                <p>Por meio de todos os canais de notícias possíveis, a Anonymous enviou<br />
                                    uma mensagem secreta para você. Entretanto, ela está codificada, tente decifra-la, talvez<br />
                                    algo muito bom aconteça!
                        </p>
                                <p>Mensagem: <br /> <br />
                                    <p class="hiddenCode"> "!ossin esneP ! aob otium amrof amu ed oãçautis a rlortnoc e ramlaca somedop ,otnatertnE. <br />
                                        !otarab ratsuc iav oãn ossi sam ,raduja et somedoP !aicnetsixe aus ed somebas sóN"
                              </p>
                                </p>
                                <p class="preço_culture">Preço: <strong>PNULL</strong></p>
                                <menu class="dialog-menu">
                                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                            <button class="nes-btn is-success culture" onclick={() => { this.select() }}>Confirmar</button>
                                    &emsp;
                            <button class="nes-btn is-error culture">Cancelar</button>
                                </menu>
                            </div>
                        </form>
                    </dialog>
                </div>
            );
        }
    }
    select() {
        if (this.currentMoney < 800) {
            window.alert("Dinheiro insuficiente!");
        } else {
            this.enabled1 = false;
            this.enabled2 = true;
            game.multiply("revolt", 0.5);
            game.multiply("satisfaction", 1.3);
            game.add("capital", -800);
        }
    }
    select2() {
        if (this.currentMoney < 100) {
            window.alert("Dinheiro insuficiente!");
        } else {
            this.enabled2 = false;
            game.multiply("revolt", 1.3);
            game.multiply("satisfaction", 1.2);
            game.add("capital", -800);
        }
    }
}

