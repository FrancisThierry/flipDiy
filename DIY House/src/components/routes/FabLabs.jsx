import NavBar from "../NavBar";
import carteFabLabs from '../../assets/CarteFabLab.png'
import SearchBar from "../SearchBar";
import Footer from '../Footer'

function Fablabs() {
    return (
        <>
        <NavBar/>
        <section className="fabLabs">
          <h1>Les FabLabs près de chez moi</h1>
          <SearchBar/>
          <img src={carteFabLabs} alt="carte_fab_labs" width={'85%'}/>
        </section>
        <Footer/>
        </>
      );
}

export default Fablabs;