//This component generates the stats page from the appliction.

import NavBar from "../NavBar";
import stats from "../../assets/StatsInfographic.png"
import '../../styles/Stats.css'
import Footer from '../Footer'


function Stats() {
    return ( 
    <>
        <NavBar/>
        <section className="myStats">
            <h1>My stats</h1>
            <img src={stats} alt="infographic_details" width={"85%"}/>
    
        </section>
        <Footer/>
        
    </> );
}

export default Stats;