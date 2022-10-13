import styles from "./Button.module.scss";

const Button = ({children, buttonDark = false}) => 
{
    return ( 
        <button className={`${styles.button} ${buttonDark ? styles.buttonDark: styles.buttonLight}`}> {children}</button>
     );
}
 
export default Button;