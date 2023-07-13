// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { Provider } from 'react-redux'

// se importa el provider cuando ya esta configurada la store NOTA

// import App from './App.jsx'
// import './index.css'
// import store from "./redux/store"

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//       <App />
//   </React.StrictMode>,
// )

import './main.scss';
import AppRouter from './Router/AppRouter.jsx';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
