import Layout from "./components/Layout";
import Link from "next/link";
import styles from "../styles/Sidebar.module.css";
import { useEffect, useState } from "react";
import { GrDocumentMissing } from "react-icons/gr";

const Users = () => {
   const [info, setInfo] = useState([]);

   async function fetchText() {
      let response = await fetch(
         "https://parivest-mock-api.herokuapp.com/api/v1/users",
         {
            method: "GET",
            header: { "Content-Type": "application/json" },
         }
      );
      let data = await response.json();
      return data;
   }
   fetchText();

   useEffect(() => {
      fetchText()
         .then((data) => {
            let res = data.data[0].data;
            setInfo(res);
         })
         .catch((err) => {
            console.log(err, "Error fetching");
         });
   }, []);

   const Pending = {
      color: "#5CA37B",
      padding: "8px",
      backgroundColor: "#DEEDEG",
      borderRadius: "35px",
      height: "33px",
   };

   return (
      <Layout>
         <div className={styles.userbox}>
            <div className={styles.table}>
               <div>
                  <select className={styles.selectall}>
                     <option value="">All</option>
                     <option value="">Approved</option>
                     <option value="">Pending</option>
                     <option value="">In-review</option>
                  </select>
                  {/* ------date */}
                  <div className={styles.dates}>
                     <div className={styles.b}>
                        {" "}
                        <div className={styles.fromdate}>
                           <p>From</p>
                           <div className={styles.a}>
                              <input type="date" />
                           </div>
                        </div>
                        <div className={styles.fromdate}>
                           <p className={styles.c}>To</p>
                           <div className={styles.a}>
                              <input type="date" />
                           </div>
                        </div>
                     </div>

                     <div className={styles.searchTable}>
                        <div className={styles.g}>
                           <img src="/doc.png" alt="" />
                        </div>
                        <input type="text" placeholder="Search" />
                     </div>
                  </div>

                  {/* ------table begin */}
                  <div>
                     <table className={styles.tab}>
                        <thead>
                           <tr className={styles.tr}>
                              <th>Date joined</th>
                              <th>User ID</th>
                              <th>Name</th>
                              <th>Email address</th>
                              <th>Phone no.</th>
                              <th>Status</th>
                              <th>Action</th>
                           </tr>
                        </thead>

                        {info.map((user) => {
                           return (
                              <tbody>
                                 <tr key={user._id} className={styles.tr}>
                                    <td>
                                       {new Date(user.createdAt).toDateString()}
                                    </td>
                                    <td>{user.client_id}</td>
                                    <td>
                                       {user.first_name} {user.last_name}
                                    </td>
                                    <td>{user.email}</td>
                                    <td> {user.phone} </td>
                                    <td style={Pending}>
                                       {user.status.access}
                                    </td>
                                    <Link
                                       key={user._id}
                                       href={`/profile/${user?._id}`}
                                    >
                                       <td>View</td>
                                    </Link>
                                 </tr>
                              </tbody>
                           );
                        })}
                     </table>
                  </div>
               </div>

               <p></p>
            </div>
         </div>
      </Layout>
   );
};

export default Users;
