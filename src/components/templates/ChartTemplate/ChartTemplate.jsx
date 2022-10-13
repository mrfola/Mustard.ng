import { useEffect, useState } from "react";
import ChartFilterDropdown from "../../ui/molecules/ChartFilterDropdown/ChartFilterDropdown";
import Chart from "../../ui/organisms/Chart/Chart";
import styles from "./ChartTemplate.module.scss";

const ChartTemplate = ({data, options}) => 
{
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const [formattedData, setFormattedData] = useState({ labels: [],  datasets: [] });
    const [priceMonths, setPriceMonths] = useState([]);
    const [filteredMonth, setFilteredMonth] = useState( new Date().toLocaleString("default", {month: "short"}));

    const getDollarPrices = async (url) => 
    {
        const res = await fetch(url, {method: "GET"});
        
        if(res.ok)
        {
            const data = await res.json();
            const rawData = data.data;

            const monthMap = {}

            //Format data into a better format
            rawData.forEach( (data) => 
            {
                data[1] = new Date(data[1]).toString();
                let curMonth = new Date(data[1]).toLocaleString('default', { month: 'short' });
                monthMap[curMonth] = true;
                // console.log(data[1].toString());
            });

            //Filter price data by month
            const filteredData = rawData.filter((curData) => 
            {
                console.log(curData[1], filteredMonth);
                return curData[1].includes(filteredMonth);
            })

            console.log(filteredData);

            //Setting the data that displays on the map
            setFormattedData(
            {
                labels: filteredData.map(data =>  new Date(data[1]).getDate()),
                datasets: 
                [
                    {
                        "label": "Dollar rate", 
                        "data": filteredData.map(data => data[0])
                    }
                ]
            });

            //Setting the months that shows in the filter dropdown
            setPriceMonths(Object.keys(monthMap));

            setErrorMessage("");

        }else 
        {
            setIsLoading(false);
            setErrorMessage("Something went wrong. Please try again.");
            console.log("Something went wrong. Could not fetch data.")
        }
    }

    const handleOnFilterChange = (e) => 
    {
        e.preventDefault();
        setFilteredMonth(e.target.value);
    }

    useEffect(() => 
    {
        getDollarPrices("https://mustard-ng.herokuapp.com/api/dollar-prices");

    }, [filteredMonth]);

    return ( 
        <div className={styles.chartTemplate}>
            <div className={styles.titleAndChart}>
                <h2>Dollar Rate Chart</h2>
                <ChartFilterDropdown months={priceMonths} handleOnChange={(e) => handleOnFilterChange(e)} selected={filteredMonth}/>
            </div>
            {isLoading && "Loading..."}
            {errorMessage && <p>{errorMessage}</p>}
            {(!isLoading && !errorMessage) && <Chart data={formattedData} />}
        </div>
     );
}
 
export default ChartTemplate;