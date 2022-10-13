import styles from "./Header.module.scss";
import logo from "./../../../../assets/images/logo.svg";

const Header = () => 
{
    return ( 
        <div className={styles.header}>
            <img src={logo} alt="" />
        </div>
     );
}
 
export default Header;