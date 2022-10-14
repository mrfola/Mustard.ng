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
            scales: 
            {
                y: 
                {
                    ticks: 
                    {
                        // Include a dollar sign in the ticks
                        callback: function(value, index, ticks) 
                        {
                            return '$' + value;
                        }
                    }
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