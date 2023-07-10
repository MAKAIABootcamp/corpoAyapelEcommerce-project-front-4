import { productTypes } from "../types/ProductTypes";

 const productState = {
     products: []
 }


export const productReducers = (state = productState, action) => {
    switch (action.type) {
        case productTypes.PRODUCTS_GET:
            return{
                ...state,
                products: action.payload.product
            };
            case productTypes.PRODUCTS_FILTERED:
                return{
                    ...state,
                    products: action.payload.product
                };  
        default:
            return state;
    };
};