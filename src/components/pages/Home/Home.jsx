import ChartTemplate from "../../templates/ChartTemplate/ChartTemplate";
import Divider from "../../ui/atoms/Divider/Divider";
import Cards from "../../ui/organisms/Cards/Cards";
import Header from "../../ui/organisms/Header/Header";
import TitleHeading from "../../ui/organisms/TitleHeading/TitleHeading";
import styles from "./Home.module.scss";
import { useEffect, useState } from "react";

const Home = () => 
{
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const [formattedData, setFormattedData] = useState({ labels: [],  datasets: [] });
    const [priceMonths, setPriceMonths] = useState([]);
    const [filteredMonth, setFilteredMonth] = useState( new Date().toLocaleString("default", {month: "short"}));
    const [cardStatistics, setCardStatistics] = useState(
        {
            "todays_rate": "--",
            "avg_rate": "--",
            "highest_rate": "--",
            "lowest_rate": "--",
        }
    )


    const getStatisticsFromFilteredData = (data) => 
    {
        let highestRate = -Infinity;
        let lowestRate = Infinity;
        let totalRate = 0;
        let count = 0;
        let todaysRate = "--"


        let curMonth = new Date().toLocaleString("default", {month: "short"});
        let curDay = new Date().getDate();
        
        data.forEach((curData) => 
        {
            
            let curDataMonth = new Date(curData[1]).toLocaleString("default", {month: "short"});
            let curDataDay = new Date(curData[1]).getDate();

            if(curDataMonth === curMonth && curDataDay === curDay) todaysRate = curData[0];

            highestRate = Math.max(highestRate, curData[0]);
            lowestRate = Math.min(lowestRate, curData[0]);
            totalRate += Number(curData[0]);
            count += 1;
        });

        let avg_rate = totalRate/count;

        const statistics = 
        {
            "todays_rate": todaysRate,
            "avg_rate": avg_rate.toFixed(2),
            "highest_rate": highestRate.toFixed(2),
            "lowest_rate": lowestRate.toFixed(2),
        }

        setCardStatistics(statistics);

    }

    const filterDataByMonth = (rawData) => 
    {
        const monthMap = {}

        //Format data into a better format
        rawData.forEach( (data) => 
        {
            data[1] = new Date(data[1]).toString();
            let curMonth = new Date(data[1]).toLocaleString('default', { month: 'short' });
            monthMap[curMonth] = true;
        });

        //Setting the months that shows in the filter dropdown
        setPriceMonths(Object.keys(monthMap));

        //Filter data by month
        const filteredData = rawData.filter((curData) => 
        {
            return (curData[1].includes(filteredMonth))
        });

        return filteredData;
    }

    const setChartData = (filteredData) => 
    {
        setFormattedData
        (
            {
                labels: filteredData.map(data =>  new Date(data[1]).getDate()),
                datasets: 
                [
                    {
                        "label": "Dollar rate", 
                        "data": filteredData.map(data => data[0]),
                        "backgroundColor": "#FFFFFF",
                        "borderColor": "#38BC7B"
                    }
                ]
            });
    }

    const getDollarPrices = async (url) => 
    {
        const res = await fetch(url, {method: "GET"});
        
        if(res.ok)
        {
            const data = await res.json();
            const rawData = data.data;

            //Filter data by current month
            const filteredData = filterDataByMonth(rawData);

            //Get Statistics
            getStatisticsFromFilteredData(filteredData);

            //Setting the data that displays on the chart
            setChartData(filteredData);

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
        <div className={styles.home}>
            <Header/>
            <TitleHeading
                months = {priceMonths}
                handleOnFilterChange = {handleOnFilterChange}
                filteredMonth = {filteredMonth}
                statistics = {cardStatistics}
            />
            <div className={styles.content}>
                {isLoading && "Loading..."}
                {errorMessage && <p>{errorMessage}</p>}
                {(!isLoading && !errorMessage) && 
                (
                    <>
                        <Cards
                            selectedMonth={filteredMonth}
                            statistics = {cardStatistics}
                        />
                        <Divider/>
                        <ChartTemplate data = {formattedData} />
                    </>
                )}
            </div>
        </div>
     );
}
 
export default Home;