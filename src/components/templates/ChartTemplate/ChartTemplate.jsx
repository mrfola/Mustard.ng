import { useState } from "react";
import ChartFilterDropdown from "../../ui/molecules/ChartFilterDropdown/ChartFilterDropdown";
import Chart from "../../ui/organisms/Chart/Chart";
import styles from "./ChartTemplate.module.scss";

const ChartTemplate = ({data, options}) => 
{
    const testData = 
    [
        {
            dollarRate: "605",
            date: "2022-06-03 21:09:34"
        },
        {
            dollarRate: "600",
            date: "2022-06-03 21:09:34"
        },
        {
            dollarRate: "605",
            date: "2022-06-11 21:09:34"
        },
        {
            dollarRate: "615",
            date: "2022-07-06 21:09:34"
        },
        {
            dollarRate: "620",
            date: "2022-07-20 21:09:34"
        },
        {
            dollarRate: "643",
            date: "2022-07-20 21:09:34"
        },
        {
            dollarRate: "645",
            date: "2022-07-22 21:09:34"
        },
        {
            dollarRate: "650",
            date: "2022-07-22 21:09:34"
        },
        {
            dollarRate: "670",
            date: "2022-07-22 21:09:34"
        },
        {
            dollarRate: "670",
            date: "2022-07-22 21:09:34"
        },
        {
            dollarRate: "700",
            date: "2022-07-22 21:09:34"
        },
        {
            dollarRate: "700",
            date: "2022-07-22 21:09:34"
        },
        {
            dollarRate: "625",
            date: "2022-07-22 21:09:34"
        },
        {
            dollarRate: "655",
            date: "2022-08-09 21:09:34"
        },
        {
            dollarRate: "685",
            date: "2022-08-09 21:09:34"
        },
        {
            dollarRate: "700",
            date: "2022-08-15 21:09:34"
        },
        {
            dollarRate: "700",
            date: "2022-08-15 21:09:34"
        },
        {
            dollarRate: "700",
            date: "2022-08-15 21:09:34"
        },
        {
            dollarRate: "700",
            date: "2022-09-06 21:09:34"
        },
        {
            dollarRate: "700",
            date: "2022-09-09 21:09:34"
        },
        {
            dollarRate: "715",
            date: "2022-09-20 21:09:34"
        },
        {
            dollarRate: "725",
            date: "2022-10-06 21:09:03"
        }
    ];


        const [formattedData, setFormattedData] = useState(
            {
                labels: testData.map(data => new Date(data.date).getDate()),
                datasets: [
                        {
                            "label": "Dollar rate", 
                            "data": testData.map(data => data.dollarRate)
                        }
                ]
            }
        );

    return ( 
        <div className={styles.chartTemplate}>
            <div className={styles.titleAndChart}>
                <h2>Dollar Rate Chart</h2>
                <ChartFilterDropdown/>
            </div>
            <Chart data={formattedData} />
        </div>
     );
}
 
export default ChartTemplate;