import {ModalApagar} from './Modal';
import {ModalCooptar} from './Modal';
import {ModalEvoluir} from './Modal';
import {ModalPresentear} from './Modal';
import {ModalSubornar} from './Modal';

export class SelectApagar {
    option: number;

    constructor(vnode) {
        this.option = vnode.attrs.option;
    }

    view(vnode) {

        let link = vnode.attrs.link;
        let nome = vnode.attrs.nome;

        return <div class="nes-container is-rounded">
            <ul>
                <li>Selecione a quantidade de seguidores a se apagar: {this.select()} </li><br></br>
                <li>Custa U$ {this.value()}</li><br></br>
                <li><ModalApagar n={this.nFollowers()} btn_text="Apagar seguidores" link={link} nome={nome}/></li>
            </ul>
        </div>
    }

    value() {

        return this.option * 25;
    }

    select() {
        
        return <select oninput={(ev) => this.setOption(ev) }>
            <option hidden>Escolha aqui</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
        </select>
    }

    setOption(ev) {
            this.option = parseInt(ev.target.value);
    }

    nFollowers() {
            return this.option;
} 
}
export class SelectCooptar {
    option: number;

    constructor(vnode) {
        this.option = vnode.attrs.option;
    }

    view(vnode) {

        let link = vnode.attrs.link;
        let nome = vnode.attrs.nome;

        return <div class="nes-container is-rounded">
            <ul>
                <li>Selecione a quantidade de seguidores a se cooptar: {this.select()} </li><br></br>
                <li>Custa U$ {this.value()}</li><br></br>
                <li><ModalCooptar n={this.nFollowers()} btn_text="Cooptar seguidores" link={link} nome={nome}/></li>
            </ul>
        </div>
    }

    value() {

        return this.option * 25;
    }

    select() {
        
        return <select oninput={(ev) => this.setOption(ev) }>
            <option hidden>Escolha aqui</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
        </select>
    }

    setOption(ev) {
            this.option = parseInt(ev.target.value);
    }

    nFollowers() {
            return this.option;
} 
}
export class SelectEvoluir {
    option: number;

    constructor(vnode) {
        this.option = vnode.attrs.option;
    }

    view(vnode) {

        let link = vnode.attrs.link;
        let nome = vnode.attrs.nome;

        return <div class="nes-container is-rounded">
            <ul>
                <li>Selecione a quantidade de habilidades a se evoluir: {this.select()} </li><br></br>
                <li>Custa U$ {this.value()}</li><br></br>
                <li><ModalEvoluir n={this.nFollowers()} btn_text="Evoluir habilidades" link={link} nome={nome}/></li>
            </ul>
        </div>
    }

    value() {

        return this.option * 25;
    }

    select() {
        
        return <select oninput={(ev) => this.setOption(ev) }>
            <option hidden>Escolha aqui</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
        </select>
    }

    setOption(ev) {
            this.option = parseInt(ev.target.value);
    }

    nFollowers() {
            return this.option;
} 
}
export class SelectPresentear {
    option: number;

    constructor(vnode) {
        this.option = vnode.attrs.option;
    }

    view(vnode) {

        let link = vnode.attrs.link;
        let nome = vnode.attrs.nome;

        return <div class="nes-container is-rounded">
            <ul>
                <li>Selecione a quantidade de seguidores a se presentear: {this.select()} </li><br></br>
                <li>Custa U$ {this.value()}</li><br></br>
                <li><ModalPresentear n={this.nFollowers()} btn_text="Presentear seguidores" link={link} nome={nome}/></li>
            </ul>
        </div>
    }

    value() {

        return this.option * 25;
    }

    select() {
        
        return <select oninput={(ev) => this.setOption(ev) }>
            <option hidden>Escolha aqui</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
        </select>
    }

    setOption(ev) {
            this.option = parseInt(ev.target.value);
    }

    nFollowers() {
            return this.option;
} 
}
export class SelectSubornar {
    option: number;

    constructor(vnode) {
        this.option = vnode.attrs.option;
    }

    view(vnode) {

        let link = vnode.attrs.link;
        let nome = vnode.attrs.nome;

        return <div class="nes-container is-rounded">
            <ul>
                <li>Selecione a quantidade de seguidores a se subornar: {this.select()} </li><br></br>
                <li>Custa U$ {this.value()}</li><br></br>
                <li><ModalSubornar n={this.nFollowers()} btn_text="Subornar seguidores" link={link} nome={nome}/></li>
            </ul>
        </div>
    }

    value() {

        return this.option * 25;
    }

    select() {
        
        return <select oninput={(ev) => this.setOption(ev) }>
            <option hidden>Escolha aqui</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
        </select>
    }

    setOption(ev) {
            this.option = parseInt(ev.target.value);
    }

    nFollowers() {
            return this.option;
} 
}