import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css';
import { useState } from 'react';
import  Logo from "./react.svg?component";
import  hamburgerMenu from "./hamburger_menu.svg?component";



const NavBar = () => {
    const [showNavbar, setShowNavbar] = useState(false)
  
    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    }
  
    return (
      <nav className="navbar">
        <div className="container">
          <div className="logo">
           <h1>DIY House</h1>
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <img src={hamburgerMenu} alt='logo'/>
          </div>
          <div className={`nav-elements  ${showNavbar && 'active'}`}>
            <ul>
              <li>
                <NavLink to="/">Accueil</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Tableau de bord</NavLink>
              </li>
              <li>
                <NavLink to="/projects">Fab Labs</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
  
  export default NavBar