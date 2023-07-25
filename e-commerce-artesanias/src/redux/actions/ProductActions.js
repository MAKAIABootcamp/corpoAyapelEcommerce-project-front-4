
import axios from 'axios';
import { productTypes } from "../types/ProductTypes";
// import { getAllProducts } from '../../../Services/servicesSanity';
import {getAllProducts} from "../../Services/servicesSanity"

// Esta es la función asincrona que hace la llamada al local host
// export const actionGetProductAsync = () => {
//     return async (dispatch) => {
//       try {
//         const response = await axios.get('http://localhost:3000/products');
//         const products = response.data;
//         console.log(products)
//         dispatch(actionGetProductSync(products));
//       } catch (error) {
//         console.log(error);
//       }
//     };
//   };

  export const actionGetProductAsync = () => {
    return async (dispatch) => {
      try {
        const productsData = await getAllProducts();
        dispatch(actionGetProductSync(productsData));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  }

  const actionGetProductSync = (product) => {
    return {
        type: productTypes.PRODUCTS_GET,
        payload: product
    }
}
//-----------------------FILTRO-----------------------------------

export const actionFilterProductSync = (category) => {
  return{
      type: productTypes.PRODUCTS_FILTERED,
      payload: category,
  };
};
//---------------------SEARCH-------------------------------

export const actionSearchProductAsync = (searchParam) => {
  return (dispatch, getState) => {
    try {
      const { products } = getState(); // Obtener el estado actual de los productos desde Redux Store
      const filteredProduct = products.filter((item) =>
        item.name && item.name.toLowerCase().includes(searchParam.toLowerCase())
      );
      dispatch(actionSearchProductSync(filteredProduct));
    } catch (error) {
      console.error(error);
      dispatch(actionSearchProductSync([]));
    }
  };
};

const actionSearchProductSync = (filteredProduct) => {
  return {
    type: productTypes.PRODUCTS_FILTERED,
    payload: filteredProduct,
  };
};

