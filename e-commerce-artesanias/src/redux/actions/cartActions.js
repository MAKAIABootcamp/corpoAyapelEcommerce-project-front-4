import axios from 'axios';
import { cartTypes } from "../types/cartTypes";
// Mostrar productos del carrito
export const actionGetCartAsync = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3000/cart');
      const cart = response.data;
      console.log(cart)
      dispatch(actionGetCartSync(cart));
    } catch (error) {
      console.log(error);
    }
  };
};

const actionGetCartSync = (cart) => {
  return {
      type: cartTypes.CART_GET,
      payload: {
        cart: cart
      }
  }
}
// Agregar al carrito
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
