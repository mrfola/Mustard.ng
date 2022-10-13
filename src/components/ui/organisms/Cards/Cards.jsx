import Card from "../../molecules/Card/Card";
import styles from "./Cards.module.scss";

const Cards = () => 
{
    return ( 
        <div className={styles.cards}>
            <Card subtitle="Today's Dollar Rate" dollarValue="630"/>
            <Card subtitle="Today's Dollar Rate" dollarValue="630" cardColor="#FFC107"/>
            <Card subtitle="Today's Dollar Rate" dollarValue="630"/>
            <Card subtitle="Today's Dollar Rate" dollarValue="630" cardColor="#FFC107"/>
        </div>
     );
}
 
export default Cards;