import { configureStore } from "@reduxjs/toolkit";
// import { useReducer } from "./userSlice";
import { loginReducer } from "./reducers/loginReducer";
import { productReducers } from "../redux/reducers/ProductReducers";
// import productSlice from "./productSlice";

const  reducer = {
  // user: useReducer,
  login: loginReducer,
  // productStore: productSlice.reducer,
  productStore: productReducers
}
const store = configureStore({
  reducer,
});

//crear todos los slice necesarios
export default store;





