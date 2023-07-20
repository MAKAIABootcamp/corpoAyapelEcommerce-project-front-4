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
        dispatch(actionPostCartSync(cart));
      } catch (error) {
        console.log(error);
      }
    };
  };

  export const actionPutCartAsync = (product) => {
    return async (dispatch) => {
      try {
        const response = await axios.put(`http://localhost:3000/cart/${product.id}`, product);
        const cart = response.data;
        dispatch(actionPutCartSync(cart));
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

const actionPutCartSync = (product) => {
  return {
      type: cartTypes.CART_UPDATE,
      payload: product
  }
}
// Eliminar carrito
export const actionDeletCartAsync = (product) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:3000/cart/${product.id}`);

      dispatch(actionDeletCartSync(product));

      //const updatedCart = await axios.get('http://localhost:3000/cart');
      //dispatch(actionUpdateCart(updatedCart.data)); 

    } catch (error) {
      console.log(error);
    }
  };
};

const actionDeletCartSync = (cart) => {
  return {
    type: cartTypes.CART_DELET,
    payload: {
      cart
    }
  }
}

export const actionUpdateCart = (cart) => {
  return {
    type: cartTypes.CART_UPDATE,
    payload: cart,
  };
};
