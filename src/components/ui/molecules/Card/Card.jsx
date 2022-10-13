import styles from "./Card.module.scss";

const Card = ({subtitle, dollarValue, cardColor = "#38BC7B"}) => 
{
    return ( 
        <div className={styles.card} style={{backgroundColor: cardColor}}>
            <p className={styles.subTitle}>{subtitle}</p>
            <p className={styles.text}>{"$" + dollarValue}</p>
        </div>
     );
}
 
export default Card;