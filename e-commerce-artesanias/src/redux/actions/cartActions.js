import axios from 'axios';
import { cartTypes } from "../types/cartTypes";
import { loginTypes } from "../types/loginType";
import { updateItemActionAsync, getFilterItemsActionAsync } from '../../Services/crudColection';

// Mostrar productos del carrito
export const actionGetCartAsync = () => {
  return async (dispatch) => {
    try {
      const user = await getFilterItemsActionAsync('Users', ['uid', "==", userUid])
      const error = { status: false, message: ''}
      dispatch(actionAddCart(user,error));
    } catch (error) {
      console.log(error);
    }
  };
};



// Agregar al carrito
export const actionPostCartAsync = (product, user, deleteItem) => {
    return async (dispatch) => {
      try {
        
        const all_car = {
          car_products: [...user.car_products]
        }
        const IndexItem = all_car.car_products.findIndex(item => item.productId === product.productId)
        if(deleteItem && IndexItem > -1){
          all_car.car_products.splice(IndexItem, 1);
        } else if (IndexItem > -1){
          all_car.car_products.splice(IndexItem, 1, product);
          console.log(all_car)
        } else {
          all_car.car_products.push(product)
        }

        console.log(all_car)
       await updateItemActionAsync('Users', all_car ,user.id);
        const error = { status: false, message: ''}
        dispatch(actionAddCart({...user, ...all_car}, error));
      } catch (error) {
        console.log(error);
      }
    };
  };

  const actionAddCart = (user,error) => {
    return {
      type: loginTypes.UPDATE_USER,
      payload: {
        user,
        error
      }
    };
  }

  export const actionPutCartAsync = (product) => {
    return async (dispatch) => {
      try {
        console.log(product)
        const response = await axios.put(`http://localhost:3000/cart/${product.id}`, product);
        const cart = response.data;
        dispatch(actionPutCartSync(cart));
      } catch (error) {
        console.log(error);
      }
    };
  };



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
