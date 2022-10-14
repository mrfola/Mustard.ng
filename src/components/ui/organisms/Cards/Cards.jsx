import Card from "../../molecules/Card/Card";
import styles from "./Cards.module.scss";

const Cards = ({selectedMonth, statistics}) => 
{
    return ( 
        <div className={styles.cards}>
            <Card subtitle={"Today's Rate"} dollarValue={statistics.todays_rate}/>
            <Card subtitle={"Avg Rate For " + selectedMonth} dollarValue={statistics.avg_rate} cardColor="#FFC107"/>
            <Card subtitle={"Highest Rate For " + selectedMonth} dollarValue={statistics.highest_rate}/>
            <Card subtitle={"Lowest Rate For " + selectedMonth} dollarValue={statistics.lowest_rate} cardColor="#FFC107"/>
        </div>
     );
}
 
export default Cards;