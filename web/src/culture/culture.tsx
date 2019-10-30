import m from 'mithril';
import { Window, Tab, Tabs, Btn, Sidebar, Elem } from '../ui';
import cultureIcon from "../../img/culture/cultureIcon.jpg";


/**
 * Códigos JS
 */


/**
 * Objetos para interação: (se necessário, n esquecer de importar)
 */
let img = {
    icon: cultureIcon,
};

let paths = {
    intro: "/home/gabriel_sabanai/ds/web/src/intro/intro.tsx"

};

let money = 10;

let itens = {
    religion: {

    }
    news: {

    },
    education: {

    },
    sports: {

    },
    art: {

    }
}

export class Culture {
    view() {

        return (
            <Window>
                <Sidebar src={img.icon} class="culture_sidebar" title={<a class="nes-btn culture_sidebar-btn" href={paths.intro} >&nbsp;&nbsp;Voltar &nbsp;
               </a>} />
                <Tabs>
                    <Tab title={<a class="nes-btn" href="#" >Visão Geral</a>}>
                        <div>Aqui vai ficar todas as interações</div>
                        <br />
                        <ContainersVisãoGeral />
                    </Tab>
                    <Tab title={<button type="button" class="nes-btn is-warning ">Religião</button>}>
                        <div>Aqui vai ficar as interações com a religião</div>
                    </Tab>
                    <Tab title={<button type="button" class="nes-btn is-warning">Notícias</button>}>
                        <div>Aqui vai ficar as interações sobre as notícias</div>
                    </Tab>
                    <Tab title={<button type="button" class="nes-btn is-warning">Educação</button>}>
                        <div>Aqui vai ficar as interações sobre a educação</div>
                    </Tab>
                    <Tab title={<button type="button" class="nes-btn is-warning">Esportes</button>}>
                        <div>Aqui vai ficar as interações sobre o esporte</div>
                    </Tab>
                    <Tab title={<button type="button" class="nes-btn is-warning">Arte</button>}>
                        <div>Aqui vai ficar as interações sobre as artes</div>
                    </Tab>
                </Tabs>
            </Window >
        );
    }
}

export class ContainersVisãoGeral {
    view() {
        return (
            <div>
                <div class="nes-container is-rounded">
                    <div class="nes-field">
                        <label htmlFor="name_field">PROCURAR ITEM PARA COMPRAR:</label>
                        <input type="text" id="name_field" class="nes-input" />
                        <button type="button" class="nes-btn is-primary">Procurar!</button>
                    </div>
                </div>
                <br />
                <div class="nes-container is-rounded">
                    <p><div class="nes-container is-rounded is-dark">
                        <h1>Negócios com o papa</h1>
                        <p id="p">Gostária de subornar o papa para que ele ajude a nossa incrivel organização?</p>
                        <div class="culture-comprar">
                            <button type="button" id='botao' class="nes-btn is-success" onclick={function clicar() {
                                let botao = document.getElementById('botao');
                                if (botao.value != "impossivel comprar mais"){
                                    if (money < 100) {
                                        money = money + 10;
                                    }
                                    else if (money >= 100) {

                                        botao.innerHTML = 'impossivel comprar mais'
                                    }
                                }
                            }
                            }
                            >Comprar! ${money}</button> &nbsp;
                            <button type="button" class="nes-btn is-error" onclick={function nClicar() {
                                
                            }}>Não comprar!</button>
                        </div>
                    </div></p>
                </div>
            </div>
        );
    }
}

/*export class CultureTbs {
                    view() {
        return(
            <span>
                    &emsp;<a class="nes-btn" href="#" >Visão Geral</a>&ensp;
                <button type="button" class="nes-btn is-primary ">Religião</button>&ensp;
                <button type="button" class="nes-btn is-success">Notícias</button>&ensp;
                <button type="button" class="nes-btn is-warning">Educação</button>&ensp;
                <button type="button" class="nes-btn is-error">Esportes</button>&ensp;
                <a class="nes-btn" href="#">Mídia Artistica</a>
                </span>
                );
            }
}*/