import styles from "./ChartFilterDropdown.module.scss";

const ChartFilterDropdown = () => 
{
    return ( 
        <div className={styles.chartFilterDropdown}>
            <p>Filter by</p>
            <select name="" id="">
                <option value="">Last 30 days</option>
            </select>
        </div>
     );
}
 
export default ChartFilterDropdown;