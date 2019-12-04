import UNB from '../../assets/UNB.jpg';
import MIT from '../../assets/MIT.jpg';

export class Unb {
    view() {
        return (
            <div class="nes-container is-rounded">
                <p><div class="nes-container is-rounded is-dark">
                    <h1>UNB</h1>
                    <p id="p">Gostaria de colocar um infiltrado na universidade?</p>
                    <div class="culture-comprar" id='div-dialog'>
                        <button type="button" id='botao' class="nes-btn is-primary" onclick={() => document.getElementById('unb').showModal()}
                        >Info</button>
                    </div>
                </div></p>

                <dialog class="nes-dialog is-rounded" id="unb">
                    <form method="dialog">
                        <div>
                            <h1>Universidade de Brasília</h1>
                            <img src={UNB} width="500" height="300" />
                            <p />
                            <p class="title">Universidade de Brasília, Brasília, Brasil.</p>
                            <p>É a oitava melhor universidade do Brasil, com mais de 100 cursos de graduação disponiveis. <br /> Recentemente, os alunos começaram a fazer revoltas.</p>
                            <p>Gostaria de colocar um professor infiltrado para influenciar os alunos a pararem?</p>
                            <menu class="dialog-menu">
                                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                            <button class="nes-btn is-success">Confirmar</button>
                                &emsp;
                            <button class="nes-btn is-error">Cancelar</button>
                            </menu>
                        </div>
                    </form>
                </dialog>
            </div>
        );
    }
}

export class Mit {
    view() {
        return (
            <div class="nes-container is-rounded">
                <p><div class="nes-container is-rounded is-dark">
                    <h1>MIT</h1>
                    <p id="p">Gostaria de iniciar um movimento de apoio a nossas causas?</p>
                    <div class="culture-comprar" id='div-dialog'>
                        <button type="button" id='botao' class="nes-btn is-primary" onclick={() => document.getElementById('mit').showModal()}
                        >Info</button>
                    </div>
                </div></p>

                <dialog class="nes-dialog is-rounded" id="mit">
                    <form method="dialog">
                        <div>
                            <h1>Istituto de Tecnologia de Massachusetts</h1>
                            <img src={MIT} width="500" height="300" />
                            <p />
                            <p class="title">Istituto de Tecnologia de Massachusetts, Massachusetts, EUA.</p>
                            <p>Está entre as melhores universidades do mundo, com um total de 32 departamentos. <br /> É ,principalmente, conhecido por suas pesquisas nas areas científicas.</p>
                            <p>É uma boa ideia começar um movimento em uma universidade tão importante <br /> Gostaria de começar um movimento de apoio a nossas ideias?</p>
                            <menu class="dialog-menu">
                                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                            <button class="nes-btn is-success">Confirmar</button>
                                &emsp;
                            <button class="nes-btn is-error">Cancelar</button>
                            </menu>
                        </div>
                    </form>
                </dialog>
            </div>
        );
    }
}