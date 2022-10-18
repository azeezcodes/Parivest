import Head from "next/head";
import Link from "next/link";
import { FiHome } from "react-icons/fi";
import { TbUsers } from "react-icons/tb";
import { BiLineChart, BiUser, BiWallet } from "react-icons/bi";
import { MdOutlineSavings } from "react-icons/md";
import { HiOutlineKey, HiOutlineLogout } from "react-icons/hi";
import styles from "../styles/Sidebar.module.css";
import IconText from "./components/iconTitle";


const Sidebar = () => {
   return (
      <div className={styles.allsi}>
         <div className={styles.sidebar}>
            <Link href="/">
               <IconText icon={<FiHome />} name="Home" />
            </Link>

            <IconText icon={<TbUsers />} name="Users" />
            <IconText icon={<BiLineChart />} name="Investment" />
            <IconText icon={<MdOutlineSavings />} name="Savings" />
            <IconText icon={<BiWallet />} name="Wallet" />
            <IconText icon={<BiUser />} name="Admin" />
         </div>
         <div className={styles.bottom}>
            <IconText icon={<HiOutlineKey />} name="Change Password" />
            <IconText icon={<HiOutlineLogout />} name="Logout" />
         </div>
      </div>
   );
};

export default Sidebar;
