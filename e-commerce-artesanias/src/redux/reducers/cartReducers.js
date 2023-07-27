import { cartTypes } from "../types/cartTypes";

const cartState = {
    cart: []
}

export const cartReducers = (state = cartState, action) => {
    switch (action.type) {
      
        case cartTypes.CART_GET:
            return {
                ...state,
                // cart: action.payload.cart
            };
        case cartTypes.CART_ADD:
            return {
                ...state,
                cart: [...state.cart, action.payload.product]
            };
        case cartTypes.CART_DELET:
           
            return {
                ...state,
                cart: action.payload.product

            };

        case cartTypes.CART_UPDATE:
                return {
                  ...state,
                  cart: state.cart.map(product => product.id === action.payload.id ? {...action.payload}: product)
                };

        default:
            return state;
    };
};