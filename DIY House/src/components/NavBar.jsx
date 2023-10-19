import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css';
import { useState } from 'react';
import  heart from "../assets/heart.svg?component";
import  redHeart from "../assets/heart_red.svg?component";
import  hamburgerMenu from "../assets/hamburger_menu.svg?component";



const NavBar = () => {
    const [showNavbar, setShowNavbar] = useState(false)
    const [heartIcon, setHeartIcon] = useState(heart)
  
    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    }

   
  
    return (
      <nav className="navbar">
        <div className="container">
          <div className="menu-icon" onClick={handleShowNavbar}>
            <img src={hamburgerMenu} alt='logo'/>
          </div>
          <div className="logo">
            <h1>DIY House</h1>
          </div>
          <div className={`nav-elements  ${showNavbar && 'active'}`}>
            <ul>
              <li>
                <NavLink to="/">Accueil</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard">Tableau de bord</NavLink>
              </li>
              <li>
                <NavLink to="/fablabs">Fab Labs</NavLink>
              </li>
              <li>
                <NavLink to="/stats">My Stats</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
  
  export default NavBar