import Layout from "./components/Layout";
import Link from "next/link";
import Header from "./header";

const Errorpage = () => {
    return (
       <>
          <Header />
          <Link href="/" >
             <button className="btn err">You are in the wrong page, click to get back to the dashboard</button>
          </Link>
       </>
    );
}
 
export default Errorpage;