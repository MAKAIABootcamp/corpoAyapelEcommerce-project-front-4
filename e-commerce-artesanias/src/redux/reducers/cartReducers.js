import { cartTypes } from "../types/cartTypes";

const cartState = {
    cart: []
}

export const cartReducers = (state = cartState, action) => {
    switch (action.type) {
        case cartTypes.CART_ADD:
            return {
                ...state,
                cart: action.payload.product
            };
        case cartTypes.CART_DELET:
           
            return {
                ...state,
                cart: action.payload.product

            };

        default:
            return state;
    };
};