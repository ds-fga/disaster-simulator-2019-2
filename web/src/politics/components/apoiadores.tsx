import { IGenericAttrs, Component, VScroll } from '../../ui';
import { game } from '../../utils';


/**
 * Componente que mostra as leis aprovadas
 */
export class Apoiadores extends Component<IGenericAttrs> {
    followers: number;
    followersList: Followers[];

    constructor() {
        super();
        let data = game.followers();
        this.followers = data.followers.politicians;
        this.followersList = data.illuminati.map(x => {
            return {
                name: x.name, 
                followers: x.politicians,
            }
        });
    }

    view() {
        let total = game.get('population').value / 2;
        let available = (total | 0) - this.totalPoliticians();

        return <VScroll><div class="Apoiadores">
            <h3>Rede de políticos</h3>
            <p>O conselho Illuminati é uma <em>autocracia representativa</em>: cada Illuminati possui
               políticos na lista de seguidores e exerce o poder indiretamente.</p>
            <p>Convença mais políticos e pessoas importantes a se juntarem à sua causa.</p>

            <div class="nes-table-responsive">
                <table class="nes-table is-bordered is-centered">
                    <thead><tr><th>Illuminati</th><th>Apoiadores</th></tr></thead>
                    <tbody>
                        {this.followersList.map(viewFollowersRow)}
                        <tr style="font-weight: bold">
                            <td>Você</td>
                            <td>{this.followers}</td>
                        </tr>
                        <tr style="font-weight: bold; color: red">
                            <td>Disponíveis</td>
                            <td>{available}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div></VScroll>
    }

    totalPoliticians() {
        return this.followers
            + sum(this.followersList.map(x => x.followers));
    }
    
}

type Followers = {
    name: string;
    followers: number;
}


//
// FUNÇÕES AUXILIARES
//
function viewFollowersRow(obj: Followers) {
    return <tr>
        <td>{obj.name}</td>
        <td>{obj.followers}</td>
    </tr>
}

function sum(xs: number[]) {
    let S = 0.0;
    for (let i=0; i < xs.length; i++) { 
        S += xs[i]; 
    }
    return S;
}