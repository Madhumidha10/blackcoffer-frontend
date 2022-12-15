import React from 'react'
import { Chart as ChartJS, Title,LineElement, Tooltip, Legend,CategoryScale,LinearScale,PointElement } from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(Title,LineElement, Tooltip, Legend,CategoryScale,LinearScale,PointElement );
const Chart1 = ({data}) => {

    const newData = {
        // labels: data.map((el)=>el.intensity),
        labels: data.map((el)=>new Date(el.added).toLocaleDateString("en-US")),
        datasets: [  {
          label: 'likelihood',
          // data: data.map((el)=>new Date(el.added)),
          data: data.map((el)=>el.likelihood),
          backgroundColor: '#0033cc',
          borderColor:'#ffffff',
          borderWidth: 1,
        },
          {
            label: 'Intensity',
            // data: data.map((el)=>new Date(el.added)),
            data: data.map((el)=>el.intensity),
            backgroundColor: '#009933',
            borderColor:'#ffffff',
            borderWidth: 1,
          },
        
          {
            label: 'relevance',
            // data: data.map((el)=>new Date(el.added)),
            data: data.map((el)=>el.relevance),
            backgroundColor: '#ffff00',
            borderColor:'#ffffff',
            borderWidth: 1,
          },
    
        ],
      };
  return (
    <Line data={newData} />
  )
}

export default Chart1