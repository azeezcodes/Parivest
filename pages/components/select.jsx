import styles from "../../styles/comp.module.css" 
    
const select = () => {
    return (
       <div>
          
             <select className={styles.selects}>
                <option value="">Denied</option>
                <option value="">Approved</option>
                <option value="">Pending</option>
                <option value="">In-review</option>
             </select>
          
       </div>
    );
}
 
export default select;