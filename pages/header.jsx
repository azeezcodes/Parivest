import Image from "next/image";
import { BsArrowRepeat } from "react-icons/bs";
import { BiBell } from "react-icons/bi";
import styles from "../styles/Home.module.css";

const Header = () => {
   return (
      <div className={styles.logonuser}>
         <div className={styles.logobox}>
            <div>
               <img src="./Logo.png" alt="logo" className={styles.logo} />
            </div>
            <div>
               <p className={styles.use}>Users</p>
            </div>
         </div>

         <div className={styles.icon}>
            <div className={styles.bell}>
               <BsArrowRepeat />
            </div>

               <div className={styles.bell}>
                   <div className={styles.red}></div>
               <BiBell />
            </div>

            <div className={styles.username}>
               <p className={styles.firstname}>Ole Gunner</p>
               <p className={styles.lastname}>Super admin</p>
            </div>

            <div>
               <img src="./him.png" alt="superadmin" className={styles.admin} />
            </div>
           </div>
           

      </div>
   );
};

export default Header;
