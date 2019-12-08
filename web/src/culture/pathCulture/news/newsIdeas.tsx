import { game } from '../../../ui';

import Alimg from '../../assets/Aljazeera.jpg';
import NYimg from '../../assets/NYT.jpg';

export class AlJazeera {
    enabled: boolean = true;

    view() {
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
                            <p class="preço_culture">Preço: 150$</p>
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
        this.enabled = false;
        game.multiply("revolt", 0.8);
        game.multiply("satisfaction", 1.2);
    }

}

export class NewYork {
    view() {
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
                            <img src={NYimg} width="500" height="300" />
                            <p />
                            <p class="title">The New York Times é um dos jornais mais famosos do mundo.</p>
                            <p>Além disso, o jornal possuí uma grande influência na midia internacional.<br />
                                Seria interessante comprar a The New York Times Company. Assim poderíamos controlar <br />
                                as notícias que vão para circulação.
                        </p>
                            <p>Deseja comprar o The New York Times?</p>
                            <p class="preço_culture">Preço: 150$</p>
                            <menu class="dialog-menu">
                                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
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
        this.enabled = false;
        game.multiply("revolt", 0.8);
        game.multiply("satisfaction", 1.2);
    }
}

