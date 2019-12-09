export class ModalApagar  {
    view(vnode) {

        let btn_text = vnode.attrs.btn_text;
        let n = vnode.attrs.n;
        let link = vnode.attrs.link;
        let nome = vnode.attrs.nome;

            return [
                <a href ={link} class="nes-btn">{btn_text}</a>,
                <div class="modal" id={nome}>
                            <div class="modal-container">
                        <p>VOCE APAGOU {n} SEGUIDORES</p>
                        <a href="#">Close</a>
                    </div>
                </div>
            ]
    } 
}
export class ModalCooptar  {
    view(vnode) {

        let btn_text = vnode.attrs.btn_text;
        let n = vnode.attrs.n;
        let link = vnode.attrs.link;
        let nome = vnode.attrs.nome;

            return [
                <a href ={link} class="nes-btn">{btn_text}</a>,
                <div class="modal" id={nome}>
                            <div class="modal-container">
                        <p>VOCE COOPTOU {n} SEGUIDORES</p>
                        <a href="#">Close</a>
                    </div>
                </div>
            ]
    } 
}
export class ModalEvoluir  {
    view(vnode) {

        let btn_text = vnode.attrs.btn_text;
        let n = vnode.attrs.n;
        let link = vnode.attrs.link;
        let nome = vnode.attrs.nome;

            return [
                <a href ={link} class="nes-btn">{btn_text}</a>,
                <div class="modal" id={nome}>
                            <div class="modal-container">
                        <p>VOCE EVOLUIU {n} PONTOS</p>
                        <a href="#">Close</a>
                    </div>
                </div>
            ]
    } 
}
export class ModalPresentear  {
    view(vnode) {

        let btn_text = vnode.attrs.btn_text;
        let n = vnode.attrs.n;
        let link = vnode.attrs.link;
        let nome = vnode.attrs.nome;

            return [
                <a href ={link} class="nes-btn">{btn_text}</a>,
                <div class="modal" id={nome}>
                            <div class="modal-container">
                        <p>VOCE PRESENTEOU {n} PONTOS</p>
                        <a href="#">Close</a>
                    </div>
                </div>
            ]
    } 
}
export class ModalSubornar  {
    view(vnode) {

        let btn_text = vnode.attrs.btn_text;
        let n = vnode.attrs.n;
        let link = vnode.attrs.link;
        let nome = vnode.attrs.nome;

            return [
                <a href ={link} class="nes-btn">{btn_text}</a>,
                <div class="modal" id={nome}>
                            <div class="modal-container">
                        <p>VOCE SUBORNOU {n} SEGUIDORES</p>
                        <a href="#">Close</a>
                    </div>
                </div>
            ]
    } 
}