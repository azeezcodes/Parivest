import Header from "../header";
import Sidebar from "../sidebar";
import styles from "../../styles/Home.module.css"

const Layout = ({children}) => {
    return (
       <div>
          <Header />
          <div className={styles.layout}>
             <div>
                <Sidebar />
             </div>
             <div> {children}</div>
          </div>
       </div>
    );
}
 
export default Layout;