import axios from 'axios';
import { filterTypes } from "../types/filterTypes";
// Esta es la función asincrona que hace la llamada al local host
export const actionGetFilterAsync = (category) => {
    return async (dispatch) => {
      try {
        const response = await axios.get(`http://localhost:3000/products/${category}`, category);
        const products = response.data;
        console.log(products)
        dispatch(actionGetFilterSync(products));
      } catch (error) {
        console.log(error);
      }
    };
  };

  const actionGetFilterSync = (product) => {
    return {
        type: filterTypes.FILTER_GET,
        payload: {
            product: product
        }
    }
}