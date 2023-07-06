
import { productReducers } from "../redux/reducers/ProductReducers";
import { configureStore } from "@reduxjs/toolkit"
export const store = configureStore({
    reducer: {
         productStore: productReducers,
    },
});

//crear todos los slice necesarios ;




