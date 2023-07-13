import { Link } from "react-router-dom";
import "./NavBar.scss";
import logo from "../../../assets/Icons/LogoArt.png";

const NavBar = () => {
  return <div> 
    <nav className="nav-bar">
      {/*  */}
        <img src={logo} alt="logo"/> 
        <ul>
          <li> Artesanías </li>
          <li>  ¿ Quiénes somos ? </li>
          <li>  Contacto </li>
          <li className="search-bar">
          Buscar
        </li>
        </ul>
        {/* cada div extra crea una seleccion adicional en el carrito */}

        <div className="validation">
          <svg xmlns="http://www.w3.org/2000/svg" width="15%" height="15%" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
          </svg>
          <ul>
            <p>Sign in</p>
            <p>My account</p>
          </ul>
        </div>

        <div className="nav-bag">
          <svg xmlns="http://www.w3.org/2000/svg" width="15%" height="15%" fill="currentColor" className="bi bi-basket-fill" viewBox="0 0 16 16">
            <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3z"/>
          </svg>
          <span className="bag-quantity">
            <span>3</span>
          </span>
        </div>

    </nav>

  </div>;
};

export default NavBar;
