
import axios from 'axios';
import { productTypes } from "../types/ProductTypes";
// Esta es la función asincrona que hace la llamada al local host
export const actionGetProductAsync = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get('http://localhost:3000/products');
        const products = response.data;
        dispatch(actionGetProductSync(products));
      } catch (error) {
        console.log(error);
      }
    };
  };

  const actionGetProductSync = (product) => {
    return {
        type: productTypes.PRODUCTS_GET,
        payload: {
            product: product
        }
    }
}
//-----------------------FILTRO-----------------------------------

export const actionFilterProductAsync = (searchParam, searchValue) => {
  return async (dispatch) => {
    const url = "http://localhost:3000/products"; 
    const products = [];

    try {
      const response = await axios.get(url, {
        params: {
          [searchParam]: searchValue
        }
      });

      const data = response.data;
      data.forEach((product) => {
        products.push({
          id: product.id,
          ...product
        });
      });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(actionFilterProductSync(products));
    }
  };
};

const actionFilterProductSync = (product) => {
  return{
      type: productTypes.PRODUCTS_FILTERED,
      payload: {
          product: product,
      },
  };
};