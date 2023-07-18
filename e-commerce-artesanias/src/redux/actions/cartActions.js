import axios from 'axios';
import { cartTypes } from "../types/cartTypes";
import { createItemActionAsync, getFilterItemsActionAsync } from '../../Services/crudColection';

// Mostrar productos del carrito
export const actionGetCartAsync = (userUid) => {
  return async (dispatch) => {
    try {
      const cart = await getFilterItemsActionAsync('Carrito', ['user', "==", userUid])
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
export const actionPostCartAsync = (productId, user) => {
    return async (dispatch) => {
      try {
        const dataCarShopping= {
          productId: productId,
          user: user.uid,
        }

        const carShoppingDoc = await createItemActionAsync(dataCarShopping,'Carrito');
        console.log(carShoppingDoc.item)
        dispatch(actionPostCart(carShoppingDoc.item));
      } catch (error) {
        console.log(error);
      }
    };
  };

  const actionPostCart = (product) => {
    return {
        type: cartTypes.CART_ADD,
        payload: product
    }
}
