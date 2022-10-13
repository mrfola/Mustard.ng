import Button from "../../atoms/Button/Button";
import ImageTitle from "../../molecules/ImageTitle/ImageTitle";
import styles from "./TitleHeading.module.scss";

const TitleHeading = () => 
{
    return ( 
        <div className={styles.titleHeadingContainer}>
            <div className={styles.titleHeading}>
                <ImageTitle/>
                <p>Monitor the rate of dollar over a duration of time</p>
            </div>
            <div className={styles.buttons}>
                <Button buttonDark={true}>Use default data</Button>
                <Button>Upload new data</Button>
            </div>
        </div>
     );
}
 
export default TitleHeading;