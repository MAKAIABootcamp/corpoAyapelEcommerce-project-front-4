import { billingAddressTypes } from "../types/billingAddressTypes";

const billingAddressState = {
    billingAddress: [],
    status: "loading",
}


export const billingAddressReducer = (state = billingAddressState, action) => {
    switch (action.type) {
        case billingAddressTypes.BILLING_ADDRESS_GET:
            return {
                ...state,
                billingAddress: action.payload.billingAddress
            };
        case billingAddressTypes.BILLING_ADDRESS_CREATE:
            return {
                ...state,
                billingAddress: [...state.billingAddress, action.payload],
            }
        

        default:
            return state;
    };
};