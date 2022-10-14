import ImageTitle from "../../molecules/ImageTitle/ImageTitle";
import styles from "./TitleHeading.module.scss";
import ChartFilterDropdown from "../../molecules/ChartFilterDropdown/ChartFilterDropdown";

const TitleHeading = ({months, handleOnFilterChange, filteredMonth}) => 
{
    return ( 
        <div className={styles.titleHeadingContainer}>
            <div className={styles.titleHeading}>
                <ImageTitle/>
                <p>Monitor the rate of dollar over a duration of time</p>
            </div>
            <div className={styles.buttons}>
                <ChartFilterDropdown months={months} handleOnChange={(e) => handleOnFilterChange(e)} selected={filteredMonth}/>

            </div>
        </div>
     );
}
 
export default TitleHeading;