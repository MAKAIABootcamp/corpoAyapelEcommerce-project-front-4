import { billingAddressTypes } from "../types/billingAddressTypes";
import { createItemActionAsync } from '../../Services/crudColection';


export const createBillingAddressActionsAsync = (billing) => {
  return async (dispatch) => {
    try {
      const billingDoc = await createItemActionAsync(billing,'Dirección de facturación');
      dispatch(createBillingAddressAction(billingDoc.item));
      return billingDoc
    } catch (error) {
      console.log(error);
      dispatch(
        createBillingAddressAction({
            billingAddress: {},
            status: "error",
        })
      );
    }
  };
};

const createBillingAddressAction = (billing) => {
  return {
    type: billingAddressTypes.BILLING_ADDRESS_CREATE,
    payload: { ...billing },
  };
};
