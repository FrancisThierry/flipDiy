import NavBar from "../NavBar";
import "../../styles/Dashboard.css";
import Footer from '../Footer';

function Dashboard() {
    return ( 
    <>
        <NavBar/>
        <section>
        <h1>Votre tableau de bord UpCycling</h1>
        <ul className="listContainer">
            <li>
                <h3>Bouteilles economisées</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Consectetur repudiandae molestiae magni ullam ipsa dolor nemo explicabo in recusandae
                maxime dolores, est aspernatur, facere neque odio doloribus aliquid earum nostrum!
                </p>
            </li>
            <li>
                <h3>Euros économisées</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Consectetur repudiandae molestiae magni ullam ipsa dolor nemo explicabo in recusandae
                maxime dolores, est aspernatur, facere neque odio doloribus aliquid earum nostrum!
                </p>
            </li>
            <li>
                <h3>Co2 économisé</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Consectetur repudiandae molestiae magni ullam ipsa dolor nemo explicabo in recusandae
                maxime dolores, est aspernatur, facere neque odio doloribus aliquid earum nostrum!
                </p>
            </li>
        </ul>

        </section>
        <Footer/>
       
    </> );
}

export default Dashboard;