import Kinoimg from '../../assets/Kino.jpeg';
import Tateimg from '../../assets/Tate.jpg';
import Worldcupimg from '../../assets/Fifa.jpg';

export class Kino {
    view() {
        function clicar() {
            document.getElementById('dialog-rounded').showModal();
        }

        return (
            <div class="nes-container is-rounded">
                <p><div class="nes-container is-rounded is-dark">
                    <h1>Kino International</h1>
                    <p id="p">Gostaria de censurar os filmes?</p>
                    <div class="culture-comprar" id='div-dialog'>
                        <button type="button" id='botao' class="nes-btn is-primary" onclick={() => document.getElementById('kino').showModal()}
                        >Info</button>
                    </div>
                </div></p>

                <dialog class="nes-dialog is-rounded" id="kino">
                    <form method="dialog">
                        <div>
                            <h1>Kino International</h1>
                            <img src={Kinoimg} width="500" height="300" />
                            <p />
                            <p class="title">Kino International, em Berlim na Alemanha.</p>
                            <p>É um dos melhores cinemas do mundo, porém, recentemente <br /> começou a reproduzir filmes que engajam a sociedade.</p>
                            <p>Você deseja censurar esses filmes? </p>
                            <menu class="dialog-menu">
                                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                                <button class="nes-btn culture is-success">Confirmar</button>
                                &emsp;
                                <button class="nes-btn culture is-error">Cancelar</button>
                            </menu>
                        </div>
                    </form>
                </dialog>
            </div>
        );
    }
}

export class Tate {
    view() {
        return (
            <div class="nes-container is-rounded">
                <p><div class="nes-container is-rounded is-dark">
                    <h1>Tate Modern</h1>
                    <p id="p">Gostaria de adicionar obras ilusórias?</p>
                    <div class="culture-comprar" id='div-dialog'>
                        <button type="button" id='botao' class="nes-btn is-primary" onclick={() => document.getElementById('Tate').showModal()}
                        >Info</button>
                    </div>
                </div></p>

                <dialog class="nes-dialog is-rounded" id="Tate">
                    <form method="dialog">
                        <h1>Tate Modern</h1>
                        <img src={Tateimg} width="400" height="200" />
                        <p />
                        <p class="title">Tate modern, em Londres na Inglaterra</p>
                        <p>É o museu mais visitado do mundo, com aproximadamente 5,5 milhões de visitas por ano. <br />
                            Compreende 4 galerias físicas mais uma online, expondo quadros de diferentes movimentos artísticos.
                        </p>
                        <p>Gostaria de adicionar quadros que engane como o mundo atual não tem problemas?</p>
                        <menu class="dialog-menu">
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                            <button class="nes-btn culture is-success">Confirmar</button>
                            &emsp;
                            <button class="nes-btn culture is-error">Cancelar</button>
                        </menu>
                    </form>
                </dialog>
            </div>
        );
    }
}

export class Worldcup {
    view() {
        return (
            <div class="nes-container is-rounded">
                <p><div class="nes-container is-rounded is-dark">
                    <h1>Copa do Mundo</h1>
                    <p id="p">Gostaria de subornar o presidente da Fifa?</p>
                    <div class="culture-comprar" id='div-dialog'>
                        <button type="button" id='botao' class="nes-btn is-primary" onclick={() => document.getElementById('Worldcup').showModal()}
                        >Info</button>
                    </div>
                </div></p>

                <dialog class="nes-dialog is-rounded" id="Worldcup">
                    <form method="dialog">
                        <h1>Copa do Mundo</h1>
                        <img src={Worldcupimg} width="300" height="200" />
                        <p />
                        <p class="title">Copa do Mundo 2022!</p>
                        <p>A competição mundial de futebol já está chegando e só acontece de 4 em 4 anos! <br />
                            Além de ser uma grande festividade, tem grande impacto na economia mundial.
                        </p>
                        <p> Suborne Joseph Blatter, atual presidente da Fifa, para ganhar influências sobre a copa do mundo.</p>
                        <menu class="dialog-menu">
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                            <button class="nes-btn culture is-success">Confirmar</button>
                            &emsp;
                            <button class="nes-btn culture is-error">Cancelar</button>
                        </menu>
                    </form>
                </dialog>
            </div>

        );
    }

}