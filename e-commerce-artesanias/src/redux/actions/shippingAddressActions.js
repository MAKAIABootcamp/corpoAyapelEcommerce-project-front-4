import { shippingAddressTypes } from "../types/shippingAddressTypes";
import { createItemActionAsync } from '../../Services/crudColection';


export const createShippingAddressActionsAsync = (shipping) => {
  return async (dispatch) => {
    try {
      const shippingDoc = await createItemActionAsync(shipping,'Dirección de envío');
      dispatch(createShippingAddressAction(shippingDoc.item));
      return shippingDoc
    } catch (error) {
      console.log(error);
      dispatch(
        createShippingAddressAction({
            shippingAddress: {},
            status: "error",
        })
      );
    }
  };
};

const createShippingAddressAction = (shipping) => {
  return {
    type: shippingAddressTypes.SHIPPING_ADDRESS_CREATE,
    payload: { ...shipping },
  };
};
