import Papaimg from '../../assets/Papa.jpg';
import Religião from '../../assets/CreateReligion.jpg'

export class NegociosPapa {
    view() {
        return (
            <div class="nes-container is-rounded">
                <p><div class="nes-container is-rounded is-dark">
                    <h1>Papa Francisco</h1>
                    <p id="p">Gostaria de subornar o Papa?</p>
                    <div class="culture-comprar" id='div-dialog'>
                        <button type="button" id='botao' class="nes-btn is-primary" onclick={() => document.getElementById('NegociosPapa').showModal()}
                        >Info</button>
                    </div>
                </div></p>
                <dialog class="nes-dialog is-rounded" id="NegociosPapa">
                    <form method="dialog">
                        <h1>Papa Francisco</h1>
                        <img src={Papaimg} width="400" height="200" />
                        <p />
                        <p class="title">Papa Francisco é, atualmente, uma das pessoas mais influente do mundo. <br />
                            Poderiamos utiliza-lo para que ele pregue a nossa ideologia.
                        </p>
                        <p>Gostaria de suborna-lo?</p>
                        <menu class="dialog-menu">
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                            &nbsp;
                            <button class="nes-btn is-success">Confirmar</button>
                            &emsp;
                            <button class="nes-btn is-error">Cancelar</button>
                        </menu>
                    </form>
                </dialog>
            </div>
        );
    }
}

export class CreateReligion {
    view() {
        return (
            <div class="nes-container is-rounded">
                <p><div class="nes-container is-rounded is-dark">
                    <h1>Criar uma religião!</h1>
                    <p id="p">Gostaria de criar uma religião?</p>
                    <div class="culture-comprar">
                        <button type="button" id='botao' class="nes-btn is-primary" onclick={() => document.getElementById("CreateReligion").showModal()}
                        >Info</button>
                    </div>
                </div></p>
                <dialog class="nes-dialog is-rounded" id="CreateReligion">
                    <form method="dialog">
                        <h1>Criar uma religião</h1>
                        <img src={Religião} width="400" height="200" />
                        <p />
                        <p class="title">Desde os primordios, as crenças religiosas fizeram parte da cultura de uma sociedade. <br />
                            Poderiamos criar uma religião que nos beneficie fazendo os crentes acreditarem que existe uma grupo<br/>
                            maior e que nossas ações melhoram o mundo.
                        </p>
                        <p>Gostaria de criar uma religião?</p>
                        <menu class="dialog-menu">
                            <button class="nes-btn is-success">Confirmar</button>
                            <button class="nes-btn is-error">Cancelar</button>
                        </menu>
                    </form>
                </dialog>
            </div>
        );
    }
}
