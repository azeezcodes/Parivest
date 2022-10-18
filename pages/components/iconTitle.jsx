import styles from "../../styles/comp.module.css"

const IconText = (props) => {
    return (
       <div className={styles.mainicon}>
          <div className={styles.sideicon}>{props.icon}</div>
          <div className={styles.nameicon}> {props.name}</div>
       </div>
    );
}
 
export default IconText;