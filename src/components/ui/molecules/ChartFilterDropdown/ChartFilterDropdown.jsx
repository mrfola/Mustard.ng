import styles from "./ChartFilterDropdown.module.scss";

const ChartFilterDropdown = ({months, handleOnChange, selected}) => 
{

    const curMonth = new Date().toLocaleString("default", {month: "short"});

    return ( 
        <div className={styles.chartFilterDropdown}>
            <p>Filter by</p>
            <select name="" id="" value={selected} onChange = {(e) => handleOnChange(e)}>
                {
                    months.map((month) => 
                    {
                        return <option 
                            key = {month}
                            value = {month}
                            >
                                {month === curMonth ? "Last 30 days" : month}
                            </option>

                    })
                }
            </select>
        </div>
     );
}
 
export default ChartFilterDropdown;