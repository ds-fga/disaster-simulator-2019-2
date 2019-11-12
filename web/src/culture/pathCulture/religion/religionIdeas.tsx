import m from 'mithril';
import { Window, Tab, Tabs, Btn, Sidebar, Elem } from '../../../ui';


export class NegociosPapa {
    view() {
        let money = 1000;
        return (
            <div class="nes-container is-rounded">
                <p><div class="nes-container is-rounded is-dark">
                    <h1>Negócios com o papa</h1>
                    <p id="p">Gostária de subornar o papa para que ele ajude a nossa incrivel organização?</p>
                    <div class="culture-comprar">
                        {(money < 100) ?
                            <button type="button" id='botao' class="nes-btn is-success">Comprar</button>
                            : <button type="button" id='botao' class="nes-btn is-success">Outro</button>
                        }
                        &nbsp;
                    <button type="button" class="nes-btn is-error" onclick={function nClicar() {
                        }}>Não comprar!</button>
                    </div>
                </div></p>
            </div>
        );
    }
}

export class CreateReligion {
    view() {
        let money = 1000;
        return (
            <div class="nes-container is-rounded">
                <p><div class="nes-container is-rounded is-dark">
                    <h1>Criar uma religião!</h1>
                    <p id="p">Gostaria de criar uma religião?</p>
                    <div class="culture-comprar">
                        {(money < 100) ?
                            <button type="button" id='botao' class="nes-btn is-success">Comprar</button>
                            : <button type="button" id='botao' class="nes-btn is-success">Outro</button>
                        }
                        &nbsp;
                    <button type="button" class="nes-btn is-error" onclick={function nClicar() {

                        }}>Não comprar!</button>
                    </div>
                </div></p>
            </div>
        );
    }
}
