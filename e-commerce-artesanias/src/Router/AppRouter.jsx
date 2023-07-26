import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PublicRouter from './PublicRouter';
import Home from '../pages/Home/Home';
import Details from '../pages/Details/Details';
import AboutUs from '../pages/AboutUs/AboutUs';
import Contact from '../pages/Contact/Contact';
import Search from '../pages/Search/Search';
import Validation from '../pages/Validation/Validation';
import Register from '../pages/Register/Register';
import TermsAndConditions from '../pages/TermsAndConditions/TermsAndContitions';
import PrivacyPolicy from '../pages/PrivacyPolicy/PrivacyPolicy';
import RefundPolicy from '../pages/RefundPolicy/RefundPolicy';
import Testimonies from '../pages/Testimonies/Testimonies';
import CreateAccount from '../pages/CreateAccount/CreateAccount';
import TopSell from '../pages/TopSell/TopSell';
import News from '../pages/News/News';
import HandiCrafts from '../pages/HandiCrafts/HandiCrafts';
import Cart from '../pages/Cart/Cart';
import Admin from '../pages/Admin/Admin';
import NotFound from '../pages/NotFound/NotFound';
import MyAccount from '../pages/MyAccount/MyAccount';
import SuccesfulPurchase from '../pages/SuccesfulPurchase/SuccesfulPurchase';
import Layout from '../components/Layout/Layout';
import ConfirmPayment from '../pages/ConfirmPayment/ConfirmPayment';
// import { HashRouter } from "react-router-dom"
/* import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase/firebaseConfig';
import { loginActionSync } from '../redux/actions/userAction'; */

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
/*const { user } = useSelector(store => store.user);
  const dispatch = useDispatch(); */

  /* useEffect(() => {
    onAuthStateChanged(
      auth,
      userLogged => {
        if (userLogged?.uid) {
          setIsLoggedIn(true);

          if (!user || !Object.entries(user).length) {
            console.log('No hay usuario en el store');
            const logged = {
              email: userLogged.auth.currentUser.email,
              name: userLogged.auth.currentUser.displayName,
              avatar: userLogged.auth.currentUser.photoURL,
              accessToken: userLogged.auth.currentUser.accessToken,
            };
            dispatch(loginActionSync(logged));
          }
        } else {
          setIsLoggedIn(false);
        }
      },
      [user, dispatch]
    );
  }); */

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          {/* RUTAS PÚBLICAS */}
          <Route element={<PublicRouter isAutentication={isLoggedIn} />}>
            <Route index element={<Home />} />
            <Route path='Details/:id' element={<Details />} />
            <Route path='AboutUs' element={<AboutUs />} />
            <Route path='Contact' element={<Contact />} />
            <Route path='Search' element={<Search />} />

            <Route path='MyAccount' element={<MyAccount />} />
            <Route path='Register' element={<Register />} />
            <Route path='TermsAndConditions' element={<TermsAndConditions />} />
            <Route path='PrivacyPolicy' element={<PrivacyPolicy />} />
            <Route path='RefundPolicy' element={<RefundPolicy />} />
            <Route path='Testimonies' element={<Testimonies />} />
            <Route path='CreateAccount' element={<CreateAccount />} />
            <Route path='Cart' element={<Cart />} />
            {/* Analizar si son necesarios */}
            <Route path='TopSell' element={<TopSell />} />
            <Route path='News' element={<News />} />
            <Route path='HandiCrafts' element={<HandiCrafts />} />
            <Route path='ConfirmPayment' element={<ConfirmPayment />} />
            <Route path='SuccesfulPurchase' element={<SuccesfulPurchase />} />
          </Route>
          {/* RUTAS PRIVADAS */}
          <Route
            path='Admin'
            element={<Admin />}
          >
            <Route path='Cart' element={<Cart />} />
            <Route path='ConfirmPayment' element={<ConfirmPayment />} />
          </Route>
        </Route>
        <Route path='Login' element={<Validation />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
