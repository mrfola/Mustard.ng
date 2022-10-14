import { useEffect, useState } from "react";
import ChartFilterDropdown from "../../ui/molecules/ChartFilterDropdown/ChartFilterDropdown";
import Chart from "../../ui/organisms/Chart/Chart";
import styles from "./ChartTemplate.module.scss";

const ChartTemplate = ({data}) => 
{
    return ( 
        <div className={styles.chartTemplate}>
            <div className={styles.titleAndChart}>
                <h2>Dollar Rate Chart</h2>
            </div>
            <Chart data={data} />
        </div>
     );
}
 
export default ChartTemplate;