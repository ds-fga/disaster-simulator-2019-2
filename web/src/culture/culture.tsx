import m from 'mithril';
import {Window, Tab, Tabs, Btn, Sidebar} from '../ui';


/**
 * Componente que mostra janela de política
 */
let imagens = {
    naruto: 'https://scontent.fbsb9-1.fna.fbcdn.net/v/t1.0-9/67718150_865004160518655_3293319019209162752_n.png?_nc_cat=107&_nc_oc=AQkdx6JccuXAmaDyw0cRlesFGZ_FCUZlo0rHKYZB29iEd1mQVN6yR_xzn9vKb_dzaWjPGHJ_Kpol1aJu0llTka9F&_nc_ht=scontent.fbsb9-1.fna&oh=b19735787751f3d060e88e2e67b33d78&oe=5E603058',

}

export class Culture {
    view () {
        return (
            <Window>
                <Sidebar/>
                    <Tabs>
                        <Tab title = 'EAE'>
                            <ul class = 'Culture-naruto' style = 'width: 50%'>
                                <li>Oie</li> 
                                <li id = 'li'>OI</li>
                            </ul>
                        </Tab>
                        <Tab title = 'OI'>Sabanai V.I.A.D.O</Tab>
                        <Tab title = 'COE'>Danilo o COALHA</Tab>
                    </Tabs>
            </Window>
        );
    }
}
