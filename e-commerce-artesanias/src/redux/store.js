import { configureStore } from "@reduxjs/toolkit";
// import { useReducer } from "./userSlice";
import { loginReducer } from "./reducers/loginReducer";
import { productReducers } from "../redux/reducers/ProductReducers";
// import { cartReducers } from "../redux/reducers/cartReducers";
// import productSlice from "./productSlice";

const  reducer = {
  //user: useReducer,
  login: loginReducer,
  // productStore: productSlice.reducer,
  productStore: productReducers,
  // cartStore: cartReducers,
}
const store = configureStore({
  reducer,
});

//crear todos los slice necesarios
export default store;





