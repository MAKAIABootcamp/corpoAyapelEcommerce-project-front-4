import axios from 'axios';
import { cartTypes } from "../types/cartTypes";
// Esta es la función asincrona que hace la llamada al local host
export const actionPostCartAsync = (product) => {
    return async (dispatch) => {
      try {
        const response = await axios.post('http://localhost:3000/cart', product);
        const cart = response.data;
        console.log(cart)
        dispatch(actionPostCartSync(cart));
      } catch (error) {
        console.log(error);
      }
    };
  };

  const actionPostCartSync = (product) => {
    return {
        type: cartTypes.CART_ADD,
        payload: {
            cart: product
        }
    }
}