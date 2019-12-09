import {Card, CardTEXTO} from './card';
import {SelectApagar} from './Select';
import {SelectCooptar} from './Select';
import {SelectPresentear} from './Select';
import {SelectEvoluir} from './Select';
import {SelectSubornar} from './Select';

export class Illums {
    view(vnode){
        
        let btn_expnd = vnode.attrs.btn_expnd;
        let image = vnode.attrs.img;
        let title = vnode.attrs.title || "Sem Título";
        let link = vnode.attrs.link;
        let nome = vnode.attrs.nome;
	   


        return <div>
            <Card title={title} img={image} btn_expnd={btn_expnd}>
                <p class="consp_intro">Conspiração é uma ação de construir um plano que destrua alguém, neste caso outro illuminati. 
                    Aconselhamos tomar bastante cuidado com o que você fará, qualquer decisão errada irá afetar seriamente o seu destino.
                    Por aqui você poderá  escolher entre apagar,cooptar,evoluir,presentear e subornar outros illuminatis ou seus respectivos seguidores. Faça sua escolha !!</p>
                <CardTEXTO title="Apagar" btn_expnd="Saber mais...">
                    <ul>
                        <li><a>Aumenta a força.</a></li> <br></br><li><a>Diminui a inteligência.</a></li>
                        <li><a><SelectApagar link={link + "Apagar"} nome={nome + "Apagar"}></SelectApagar></a></li>
                    </ul>
                </CardTEXTO>

                <CardTEXTO title="Cooptar" btn_expnd="Saber mais...">
                    <ul>
                        <li><a>Aumenta a influência.</a></li> 
                        <li><a><SelectCooptar link={link + "Cooptar"} nome={nome + "Cooptar"}></SelectCooptar></a></li>
                    </ul>
                </CardTEXTO>

                <CardTEXTO title="Evoluir" btn_expnd="Saber mais...">
                    <ul>
                        <li><a>Aumenta a inteligência.</a></li> <br></br><li><a>Aumenta a força.</a></li>
                        <li><a><SelectEvoluir link={link + "Evoluir"} nome={nome + "Evoluir"}></SelectEvoluir></a></li>
                    </ul>
                </CardTEXTO>

                <CardTEXTO title="Presentear" btn_expnd="Saber mais...">
                    <ul>
                        <li><a>Aumenta a influência.</a></li> <br></br><li><a>Diminui a força.</a></li>
                        <li><a><SelectPresentear link={link + "Presentear"} nome={nome + "Presentear"}></SelectPresentear></a></li>
                    </ul>
                </CardTEXTO>

                <CardTEXTO title="Subornar" btn_expnd="Saber mais...">
                    <ul>
                        <li><a>Aumenta a influência.</a></li> <br></br><li><a>Diminui a inteligência.</a></li>
                        <li><a><SelectSubornar link={link + "Subornar"} nome={nome + "Subornar"}></SelectSubornar></a></li>
                    </ul>
                </CardTEXTO>
            </Card>
        </div>
    }
}