import { loginTypes } from "../types/loginType";
import { updateItemActionAsync } from '../../Services/crudColection';


export const createShippingAddressActionsAsync = (shipping, user) => {
  return async (dispatch) => {
    try {
      const shippingDoc = await updateItemActionAsync('Users', shipping,user.id);
      const newData = {
        ...user,
        ...shippingDoc,
      }
      const error = { status: false, message: ''}
      dispatch(createShippingAddressAction(newData,error));
      return newData
    } catch (err) {
      console.log(err);
      const error = { status: true, message: 'Error al guardar datos de envío'}
      dispatch(createShippingAddressAction(user,error)
      );
    }
  };
};

const createShippingAddressAction = (user, error) => {
  return {
    type: loginTypes.UPDATE_USER,
    payload: {
      user,
      error
    },
  };
};