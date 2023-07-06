import { configureStore } from "@reduxjs/toolkit";
// import { useReducer } from "./userSlice";
import { loginReducer } from "./reducers/loginReducer";

const  reducer = {
  // user: useReducer,
  login: loginReducer,
}
const store = configureStore({
  reducer,
});

//crear todos los slice necesarios
export default store;