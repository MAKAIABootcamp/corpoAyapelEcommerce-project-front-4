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

import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import AppRouter from "./Router/AppRouter.jsx";
import { Provider } from "react-redux";
import {store} from "./redux/store";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <AppRouter />
    </Provider>
  </React.StrictMode>
);
