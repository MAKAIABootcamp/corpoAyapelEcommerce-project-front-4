import { useNavigate } from "react-router-dom";
import "./NavBar.scss";
import logo from "../../../assets/Icons/LogoArt.png";

const NavBar = () => {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
  };

  return (
    <div>
      <nav className="nav-bar">
        <img src={logo} alt="logo" />
        <ul className="left-row">
          <li onClick={() => handleLinkClick("/")}>Artesanías</li>
          <li onClick={() => handleLinkClick("/AboutUs")}>¿Quiénes somos?</li>
          <li onClick={() => handleLinkClick("/Contact")}>Contacto</li>
        </ul>

        <div className="right">
          <div className="Search">
            <svg xmlns="http://www.w3.org/2000/svg" width="30"
              height="30" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          <p onClick={() => handleLinkClick("/Search")}>Buscar</p>
          </div>

          <div className="validation">
          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
          </svg>
            <ul>
              {/* NO FUNCIONAN AUN */}
              <li onClick={() => handleLinkClick("/Validation")}>Sign in</li>
              {/* SI ESTA LOGUEADO APARECE EL MY ACCOUNT */}
              <li onClick={() => handleLinkClick("/my-account")}>My account</li>
            </ul>
          </div>

          <div className="nav-bag">
          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
          </svg>
            <ul className="cart-value">
              <li>My cart</li>
              <li>$177.000</li>
            </ul>
          </div>

        </div>
      </nav>
    </div>
  );
};

export default NavBar;
