import ChartTemplate from "../../templates/ChartTemplate/ChartTemplate";
import Divider from "../../ui/atoms/Divider/Divider";
import Cards from "../../ui/organisms/Cards/Cards";
import Header from "../../ui/organisms/Header/Header";
import TitleHeading from "../../ui/organisms/TitleHeading/TitleHeading";
import styles from "./Home.module.scss";

const Home = () => 
{
    return ( 
        <div className={styles.home}>
            <Header/>
            <TitleHeading/>
            <div className={styles.content}>
                <Cards/>
                <Divider/>
                <ChartTemplate/>
            </div>
        </div>
     );
}
 
export default Home;