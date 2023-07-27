import { loginTypes } from "../types/loginType";
import { updateItemActionAsync } from '../../Services/crudColection';


export const createBillingAddressActionsAsync = (billing, user) => {
  return async (dispatch) => {
    try {
      const billingDoc = await updateItemActionAsync('Users', billing,user.id);
      const newData = {
        ...user,
        ...billingDoc,
      }
      const error = { status: false, message: ''}
      dispatch(createBillingAddressAction(newData, error));
      return newData
    } catch (err) {
      console.log(err);
      const error = { status: true, message: 'Error al guardar datos de facturación'}
      dispatch(createBillingAddressAction(user,error));
    }
  };
};

const createBillingAddressAction = (user, error) => {
  return {
    type: loginTypes.UPDATE_USER,
    payload: {
      user,
      error
    }
  };
};