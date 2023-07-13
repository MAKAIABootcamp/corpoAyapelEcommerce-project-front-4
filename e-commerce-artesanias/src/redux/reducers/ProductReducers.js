import { productTypes } from "../types/ProductTypes";

const productState = {
    products: [],
    productsFiltered: []
}


export const productReducers = (state = productState, action) => {
    switch (action.type) {
        case productTypes.PRODUCTS_GET:
            return {
                ...state,
                products: action.payload.product
            };
        case productTypes.PRODUCTS_FILTERED:
           
            return {
                ...state,
                productsFiltered: state.products.filter(item => {
                    console.log (Object.values(item.category))
                    return Object.values(item.category).includes(
                        action.payload
                    )
                })

            };

        default:
            return state;
    };
};