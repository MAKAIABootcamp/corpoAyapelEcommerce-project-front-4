import { shippingAddressTypes } from "../types/shippingAddressTypes";

const shippingAddressState = {
    shippingAddress: [],
    status: "loading",
}


export const shippingAddressReducer = (state = shippingAddressState, action) => {
    switch (action.type) {
        case shippingAddressTypes.SHIPPING_ADDRESS_GET:
            return {
                ...state,
                shippingAddress: action.payload.shippingAddress
            };
        case shippingAddressTypes.SHIPPING_ADDRESS_CREATE:
            return {
                ...state,
                shippingAddress: [...state.shippingAddress, action.payload],
            }
        

        default:
            return state;
    };
};