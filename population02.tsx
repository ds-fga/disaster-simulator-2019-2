import m from 'mithril';
import { Window, Tab, Tabs, Btn, Sidebar, Chart } from '../ui';
import populationIcon from './icon.jpg'

/**
 * Componente que mostra janela com informações demográficas.
 */
export class Population {
    view() {
        return <Window>
            <Sidebar src={populationIcon} title="Populacao" />
            <Tabs>
                <Tab title="Satisfação">
                    <div id="satisfacaoChart">Satisfação:
                        <Chart type="pie" data={dataSatisfacao} options={options}></Chart>
                    </div>
                </Tab>

               
                </Tab>
            </Tabs>
        </Window>
    }

    
}



let dataRiqueza = {
    labels: ['Super Ricos', 'Ricos', 'Classe média', 'Classe média-baixa', 'Pobres', 'Miseravéis'],
    datasets: [{
        label: '# of Votes',
        data: [1/100, 3/100, 20/100, 30/100, 40/100, 6/100],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
    }]
};

let dataSatisfacao = {
    labels: ['Contentes', 'Infelizes', 'Revoltados', 'Revolucionarios'],
    datasets: [{
        label: '# of Votes',
        data: [50/100, 35/100, 5/100, 10/100,],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
            
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
            
        ],
        borderWidth: 1
    }]
};

let dataSaude = {
    labels: ['saudáveis', 'doentes', 'moribundos'],
    datasets: [{
        label: '# of Votes',
        data: [50/100, 35/100, 15/100,],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
            
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
            
        ],
        borderWidth: 1
    }]
};


let options = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
};
