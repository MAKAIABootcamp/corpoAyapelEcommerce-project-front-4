import { configureStore } from "@reduxjs/toolkit";
// import { useReducer } from "./userSlice";
import { loginReducer } from "./reducers/loginReducer";
import { productReducers } from "../redux/reducers/ProductReducers";
import { cartReducers } from "../redux/reducers/cartReducers";
import { shippingAddressReducer } from "../redux/reducers/shippingAddressReducer";
import { billingAddressReducer } from "../redux/reducers/billingAddressReducer";
// import productSlice from "./productSlice";

const  reducer = {
  // user: useReducer,
  login: loginReducer,
  // productStore: productSlice.reducer,
  productStore: productReducers,
  cartStore: cartReducers,
  shippingAddressStore: shippingAddressReducer,
  billingAddressStore: billingAddressReducer
}
const store = configureStore({
  reducer,
});

//crear todos los slice necesarios
export default store;





