import Layout from "../components/Layout";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import styles from "/styles/Sidebar.module.css";
import { useState, useEffect } from "react";

const Profile = () => {
   return (
      <Layout>
         <div className={styles.userbox}>
            <div className={styles.table}>
               <div className={styles.naming}>
                  <Link href="/">
                     <div className={styles.na}>
                        <div>
                           <BsArrowLeft />
                        </div>
                        <p>John Doe</p>
                     </div>
                  </Link>

                  <button className={styles.btn}>View profile status</button>
               </div>

               {/* -----below the border */}
               <div className={styles.bo}>
                  <div className={styles.per}>
                     <img src="/person.png" alt="" />
                  </div>

                  <div className={styles.account}>
                     <p className={styles.acc}>Account details</p>
                     <div className={styles.nb}>
                        <div className={styles.deta}>
                           <p className={styles.r}>User ID</p>
                           <p className={styles.w}>POOO34</p>
                        </div>
                        <div className={styles.deta}>
                           <p className={styles.r}>First name</p>
                           <p className={styles.w}>John</p>
                        </div>
                        <div className={styles.deta}>
                           <p className={styles.r}>Last name</p>
                           <p className={styles.w}>Doe</p>
                        </div>
                        <div className={styles.deta}>
                           <p className={styles.r}>Email address</p>
                           <p className={styles.w}>Johnna@gmail.com</p>
                        </div>
                     </div>
                  </div>

                  {/* ------- */}

                  <div className={styles.account}>
                     <p className={styles.acc}>Investment profile</p>
                     <div className={styles.nb}>
                        <div className={styles.deta}>
                           <p className={styles.r}>Annual income</p>
                           <p className={styles.w}>$470.64</p>
                        </div>
                        <div className={styles.deta}>
                           <p className={styles.r}>Investment goal</p>
                           <p className={styles.w}>$470.48</p>
                        </div>
                        <div className={styles.deta}>
                           <p className={styles.r}>Investment Experience</p>
                           <p className={styles.w}>None</p>
                        </div>
                        <div className={styles.deta}>
                           <p className={styles.r}>Martial status</p>
                           <p className={styles.w}>Single</p>
                        </div>
                        <div className={styles.deta}>
                           <p className={styles.r}>Next of Kin name</p>
                           <p className={styles.w}>Kathryn Murphy</p>
                        </div>
                        <div className={styles.deta}>
                           <p className={styles.r}>Next of Kin phone</p>
                           <p className={styles.w}>nil</p>
                        </div>
                        <div className={styles.deta}>
                           <p className={styles.r}>Next of Kin email</p>
                           <p className={styles.w}>nil</p>
                        </div>
                        <div className={styles.deta}>
                           <p className={styles.r}>Next of Kin relationship</p>
                           <p className={styles.w}>Sister</p>
                        </div>
                     </div>
                  </div>

                  {/* ------   */}
                  <div className={styles.file}>
                     <p className={styles.acc}>Document</p>
                     <div className={styles.blue}>
                        <p className={styles.dp}>Document.pdf</p>
                        <p className={styles.tap}>
                           Tap to view uploaded document
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Layout>
   );
};

export default Profile;

// export async function getStaticPaths() {
//    const res = await fetch(
//       "https://parivest-mock-api.herokuapp.com/api/v1/users",
//       {
//          method: "GET",
//          headers: {
//             "Content-Type": "application/json",
//          },
//       }
//    );
//     const posts = await res.json();

//     console.log(posts);

//    const paths = posts.data[0].data.map((post) => {
//       return { params: { id: post._id.toString() } };
//    });

//    return {
//       paths,
//       fallback: true,
//    };
// }

// export async function getStaticProps(context) {
//    const res = await fetch(
//       `https://parivest-mock-api.herokuapp.com/api/v1/users${context.params.id}`
//    );
//    const post = await res.json();

//    return {
//       props: { post },
//    };
// }
