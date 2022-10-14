import {Chart as ChartJS} from 'chart.js/auto';
import { Line } from "react-chartjs-2";
import { defaults } from 'chart.js';

const Chart = ({data, options}) => 
{
    
    defaults.font.size = 14;
    defaults.font.weight = 600;
    defaults.font.family = "Roboto";

    return ( 
        <Line data={data} options = 
        {{
            plugins: 
            {
                legend: 
                {
                  display: false
                }
            },
            scales: 
            {
                y: 
                {
                    title: 
                    {
                        display: true,
                        text: 'Dollar rate'
                    },
                    ticks: 
                    {
                        // Include a dollar sign in the ticks
                        callback: function(value, index, ticks) 
                        {
                            return '$' + value;
                        }
                    }
                },
                x: 
                {
                    suggestedMin: 1,
                    suggestedMax: 30,
                    stacked: true,
                    title: 
                    {
                        display: true,
                        text: 'Day of the month'
                    },
                }
            },
            elements: 
            {
                point: 
                {
                    pointRadius: 4,
                    pointBorderWidth: 1.96,
                }   
            }
            
        }
            
        }/>
     );
}
 
export default Chart;