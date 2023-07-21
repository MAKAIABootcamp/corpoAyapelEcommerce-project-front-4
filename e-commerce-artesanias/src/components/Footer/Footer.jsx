import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Facebook from '../../assets/Icons/facebook.png';
import Twitter from '../../assets/Icons/twitter.png';
import Pinterest from '../../assets/Icons/pinterest.png';
import Instagram from '../../assets/Icons/instagram.png';
import Whatsapp from '../../assets/Icons/whatsapp.png';
import Logo from '../../assets/Images/logo.png';
import Contacto from '../../assets/Icons/contacto.png';
import Terminos from '../../assets/Icons/terminos.png';
import Privacidad from '../../assets/Icons/privacidad.png';
import Reembolso from '../../assets/Icons/reembolso.png';
import '../../components/Footer/Footer.scss';
import { userLogoutAsync } from '../../redux/actions/loginActions';

const Footer = () => {
  const dispatch = useDispatch();
  const { user, isLogged } = useSelector(store => store.login);
  const logOut = () => {
    dispatch(userLogoutAsync());
  };

  return (
    <>
      <section className='body'>
        <>
          <div className='buttons'>
            <NavLink to='/Contact' activeClassname='active'>
              <img className='icons' src={Contacto} alt='contacto' />
              <span>CONTACTO</span>
            </NavLink>

            <NavLink to='/TermsAndConditions' activeClassname='active'>
              <img className='icons' src={Terminos} alt='terminos' />
              <span>TÉRMINOS Y CONDICIONES</span>
            </NavLink>

            <NavLink to='/PrivacyPolicy' activeClassname='active'>
              <img className='icons' src={Privacidad} alt='privacidad' />
              <span>POLÍTICA DE PRIVACIDAD</span>
            </NavLink>

            <NavLink to='/RefundPolicy' activeClassname='active'>
              <img className='icons' src={Reembolso} alt='reembolso' />
              <span>POLÍTICA DE REEMBOLSO</span>
            </NavLink>
          </div>
          <div className='footer-bg'>
            <div className='follow'>
              <p>SÍGUENOS</p>
              <div className='socials'>
                <NavLink
                  to='https://www.facebook.com/corpoayapelartesanias'
                  target='_blank'
                  activeClassname='active'
                >
                  <img className='icon' src={Facebook} alt='facebook' />
                </NavLink>

                <NavLink
                  to='https://twitter.com/i/flow/login?redirect_after_login=%2FCorpoAyapel'
                  target='_blank'
                  activeClassname='active'
                >
                  <img className='icon' src={Twitter} alt='twitter' />
                </NavLink>

                <NavLink
                  to='https://co.pinterest.com/corpoayapel/'
                  target='_blank'
                  activeClassname='active'
                >
                  <img className='icon' src={Pinterest} alt='pinterest' />
                </NavLink>

                <NavLink
                  to='https://www.instagram.com/corpoayapelartesanias/'
                  target='_blank'
                  activeClassname='active'
                >
                  <img className='icon' src={Instagram} alt='instagram' />
                </NavLink>

                <NavLink
                  to='https://api.whatsapp.com/send?phone=573213517529&text=Hola%20CorpoAyapel%20Artesanias!'
                  target='_blank'
                  activeClassname='active'
                >
                  <img className='icon' src={Whatsapp} alt='whatsapp' />
                </NavLink>
              </div>
            </div>
            <div className='information'>
              <div>
                <figure>
                  <img className='logo' src={Logo} alt='logo' />
                </figure>
                <div className='text'>
                  <p>
                    A través de las artesanías no solo
                    ayudas a un artesano/a a generar ingresos sino también a
                    mejorar su calidad de vida para el/ella y toda su familia.
                  </p>
                </div>
              </div>

              <div className='list'>
                <h4>Nosotros</h4>
                  {user.name && isLogged ?
                  <NavLink to='/Login' activeClassname='active'>
                  <p>Iniciar Sesión</p>
                  </NavLink>
                  :
                  <a onClick={()=>logOut()}>
                    <p>Cerrar Sesión</p>
                  </a>
                }
                <NavLink to='/AboutUs' activeClassname='active'>
                  <p>¿Quiénes Somos?</p>
                </NavLink>
                <NavLink to='/Testimonies' activeClassname='active'>
                  <p>Testimonios</p>
                </NavLink>
              </div>

              <div className='contact'>
                <h4>Contáctanos</h4>
                <p>
                  <b>Llámanos</b>
                </p>
                <p>+57 3213517529</p>

                <p>
                  <b>Dirección</b>
                </p>
                <p>El Cedro, Ayapel. Córdoba, Colombia</p>

                <p>
                  <b>Correo</b>
                </p>
                <p>comercial@corpoayapel.org</p>
              </div>
            </div>
            <hr />
            <div className='copyright'>
              <p>©CorpoAyapel Artesanías 2023.</p>
            </div>
          </div>
        </>
      </section>
    </>
  );
};

export default Footer;
