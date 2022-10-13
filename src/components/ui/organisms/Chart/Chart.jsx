import {Chart as ChartJS} from "chart.js/auto";
import { Line } from "react-chartjs-2";

const Chart = ({data, options}) => 
{
    return ( 
        <Line data={data} />
     );
}
 
export default Chart;