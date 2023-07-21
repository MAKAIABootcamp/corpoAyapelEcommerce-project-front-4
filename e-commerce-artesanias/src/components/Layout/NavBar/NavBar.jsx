import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import './NavBar.scss';
import logo from '../../../assets/Icons/LogoArt.png';

const NavBar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(store => store.login);
  const navigate = useNavigate();

  const handleLinkClick = path => {
    navigate(path);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className='nav-bar'>
        <div className='desktop'>
          <img className='logo' src={logo} alt='logo' />

          <ul className='left-list'>
            <li onClick={() => handleLinkClick('/')}>Artesanías</li>
            <li onClick={() => handleLinkClick('/AboutUs')}>¿Quiénes somos?</li>
            <li onClick={() => handleLinkClick('/Contact')}>Contacto</li>
          </ul>

          <div className='Search'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='30'
              height='30'
              fill='currentColor'
              className='bi bi-search'
              viewBox='0 0 16 16'
            >
              <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
            </svg>
            <p onClick={() => handleLinkClick('/Search')}>Buscar</p>
            {/* <ul> */}
              {/* NO FUNCIONAN AUN */}
              {/* {user.name !== '' ? (
                <li>{user.name}</li>
              ) : (
                <li onClick={() => handleLinkClick('/Login')}>
                  Iniciar sesion
                </li>
              )} */}
              {/* SI NO ESTA LOGUEADO APARECE EL MI CUENTA Y CUANDO ESTA LOGUEADO APARECE EL NOMBRE Y SE QUITA LA OPCION DE INICIAR SESION */}
              {/* <li onClick={() => handleLinkClick('/MyAccount')}>Mi cuenta</li>
            </ul> */}
          </div>

          {/* <div className='nav-bag'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='27'
              height='27'
              fill='currentColor'
              className='bi bi-cart'
              viewBox='0 0 16 16'
            >
              <path d='M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' />
            </svg>
            <ul className='cart-value'>
              <li>Mi carrito</li>
              <li>MIRAR COMENTARIO</li> */}
              {/* SE NECESITA VINCULACION CON EL TOTAL DEL CARRITO */}
            {/* </ul>
          </div> */}

          <div className='validation'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='33'
              height='33'
              fill='currentColor'
              className='bi bi-person'
              viewBox='0 0 16 16'
            >
              <path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z' />
            </svg>
            <ul>
              {/* NO FUNCIONAN AUN */}
              {user.name !== '' ? (
                <li>{user.name}</li>
              ) : (
                <li onClick={() => handleLinkClick('/Login')}>
                  Iniciar sesion
                </li>
              )}
              {/* SI NO ESTA LOGUEADO APARECE EL MI CUENTA Y CUANDO ESTA LOGUEADO APARECE EL NOMBRE Y SE QUITA LA OPCION DE INICIAR SESION */}
              <li onClick={() => handleLinkClick('/MyAccount')}>Mi cuenta</li>
            </ul>
          </div>

          <div className='nav-bag'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='27'
              height='27'
              fill='currentColor'
              className='bi bi-cart'
              viewBox='0 0 16 16'
            >
              <path d='M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z' />
            </svg>
            <ul className='cart-value'>
              <li onClick={() => handleLinkClick('/Cart')}>Mi carrito</li>
              <li>MIRAR COMENTARIO</li>
              {/* SE NECESITA VINCULACION CON EL TOTAL DEL CARRITO */}
            </ul>
          </div>
        </div>

        <div className='mobile'>
          <img className='logo' src={logo} alt='logo' />

          <button className='menu-icon' onClick={toggleMenu}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='45'
              height='45'
              fill='currentColor'
              className='bi bi-list'
              viewBox='0 0 16 16'
            >
              <path
                fillRule='evenodd'
                d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
              />
            </svg>
          </button>

          <div className={`menu-list ${isMenuOpen ? 'active' : ''}`}>
            <ul className='left-list-mobile'>
              <li onClick={() => handleLinkClick('/')}>Artesanías</li>
              <li onClick={() => handleLinkClick('/AboutUs')}>
                ¿Quiénes somos?
              </li>
              <li onClick={() => handleLinkClick('/Contact')}>Contacto</li>
            </ul>

            <div className='Search-mobile'>
              <p onClick={() => handleLinkClick('/Search')}>Buscar</p>
            </div>

            <div className='validation-mobile'>
              <ul>
                {/* NO FUNCIONAN AUN */}
                <li onClick={() => handleLinkClick('/Login')}>
                  Iniciar sesion
                </li>
                {/* SI ESTA LOGUEADO APARECE EL MY ACCOUNT */}
                <li onClick={() => handleLinkClick('/my-account')}>
                  Mi cuenta
                </li>
              </ul>
            </div>

            <div className='Search-mobile'>
              <p onClick={() => handleLinkClick('/Search')}>Buscar</p>
            </div>

            <div className='validation-mobile'>
              <ul>
                {/* NO FUNCIONAN AUN */}
                {user.name !== '' ? (
                  <li>{user.name}</li>
                ) : (
                  <li onClick={() => handleLinkClick('/Login')}>
                    Iniciar sesion
                  </li>
                )}

                {/* SI ESTA LOGUEADO APARECE EL MY ACCOUNT */}
                <li onClick={() => handleLinkClick('/my-account')}>
                  Mi cuenta
                </li>
              </ul>
            </div>

            <div className='nav-bag-mobile'>
              <ul className='cart-valu-mobilee'>
                <li onClick={() => handleLinkClick('/Cart')}>Mi carrito</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
