import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PublicRouter from './PublicRouter';
import PrivateRouter from './PrivateRouter';
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
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase/FirebaseConfig';
import { loginUser } from '../redux/actions/loginActions';
import { getUserFromDatabase } from '../Services/userServices';

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user } = useSelector(store => store.login);
  console.log(user);

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(
      auth,
      userLogged => {
        console.log(userLogged?.uid)
        if (userLogged?.uid) {
          //console.log(userLogged);
          setIsLoggedIn(true);

          if (!user || !Object.entries(user).length) {
            console.log('No hay usuario en el store');
            
            getUserFromDatabase(userLogged.auth.currentUser.email).then((response) => {
              console.log(response);
              const logged = {
                email: userLogged.auth.currentUser.email,
                name: userLogged.auth.currentUser.displayName,
                avatar: userLogged.auth.currentUser.photoURL,
                accessToken: userLogged.auth.currentUser.accessToken,
              };
              dispatch(loginUser(logged));
            })
          }
        } else {
          setIsLoggedIn(false);
        }
      },
      [user, dispatch]
    );
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>

          <Route index element={<Home />} />
          <Route path='Details/:id' element={<Details />} />
          <Route path='AboutUs' element={<AboutUs />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='Search' element={<Search />} />
          <Route path='TermsAndConditions' element={<TermsAndConditions />} />
          <Route path='PrivacyPolicy' element={<PrivacyPolicy />} />
          <Route path='RefundPolicy' element={<RefundPolicy />} />
          <Route path='Testimonies' element={<Testimonies />} />
          <Route path='TopSell' element={<TopSell />} />
          <Route path='News' element={<News />} />
          <Route path='HandiCrafts' element={<HandiCrafts />} />
          <Route path='Cart' element={<Cart />} />
          {/* RUTAS PÚBLICAS */}
          <Route element={<PublicRouter isAutentication={isLoggedIn} />}>

            {/* <Route path='MyAccount' element={<MyAccount />} /> */}
            <Route path='Register' element={<Register />} />
            <Route path='SuccesfulPurchase' element={<SuccesfulPurchase />} />
            {/* <Route path='CreateAccount' element={<CreateAccount />} /> */}
            {/* <Route path='Cart' element={<Cart />} /> */}
            {/* Analizar si son necesarios */}
            {/* <Route path='ConfirmPayment' element={<ConfirmPayment />} /> */}
          </Route>
          {/* RUTAS PRIVADAS */}
          <Route element={<PrivateRouter isAutentication={isLoggedIn} />}>
            
            <Route path='ConfirmPayment' element={<ConfirmPayment />} />
            <Route path='MyAccount' element={<MyAccount />} />
            <Route path='SuccesfulPurchase' element={<SuccesfulPurchase />} />
            <Route
              path='Admin'
              element={<Admin type={user.isAdmin} />}
            />
          </Route>
          {/* {isLoggedIn && (
            <React.Fragment>
              <Route
                path='Admin'
                element={React.cloneElement(<Admin />, { isLoggedIn })}
              >
                <Route path='Cart' element={<Cart />} />
                <Route path='ConfirmPayment' element={<ConfirmPayment />} />
                <Route path='MyAccount' element={<MyAccount />} />
                <Route path='SuccesfulPurchase' element={<SuccesfulPurchase />} />
              </Route>
            </React.Fragment>
          )} */}
          <Route path='*' element={<NotFound />} />
        </Route>
        <Route path='Login' element={<Validation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;