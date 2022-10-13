import styles from "./ImageTitle.module.scss";
import titleImage from "./../../../../assets/images/title-image.svg";

const ImageTitle = () => 
{
    return ( 
        <div className={styles.imageTitle}>
            <img src={titleImage} alt="" />
            <h1>Dollar Rate Dashboard</h1>
        </div>
     );
}
 
export default ImageTitle;