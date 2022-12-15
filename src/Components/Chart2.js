
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);
const Chart2 = ({intensity, likelihood, relevance}) => {
    const data = {
        labels: ['intensity', 'likelihood', 'relevance'],
        datasets: [
          {
            label: '# of Votes',
            data: [intensity, likelihood, relevance],
            backgroundColor: [
              '#009933',
              '#0033cc',
              '#ffff00',
            //   '#ff0000',
            //   '#6600cc',
            //   '#ff9900',
            ],
            borderColor: [
              '#ffffff',
              '#ffffff',
              '#ffffff',
            //   '#ffffff',
            //   '#ffffff',
            //   '#ffffff',
            ],
            borderWidth: 1,
          },
        ],
      };
    return (
        <div>
            <h5>OverAll Count</h5>
  <Doughnut data={data} />
        </div>
      
     )
}

export default Chart2


