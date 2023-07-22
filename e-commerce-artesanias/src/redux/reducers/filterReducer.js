
import { filterTypes } from "../types/filterTypes";

const filterState = {
    categories: []
}

export const filterReducer = (state = cartState, action) => {
    switch (action.type) {
        case filterTypes.FILTER_GET:

            return {
                ...state,
                categories: state.products.filter(item => {
                    console.log(Object.values(item.category))
                    return Object.values(item.category).includes(
                        action.payload
                    )
                })

            };

        default:

            return state;
    }
}