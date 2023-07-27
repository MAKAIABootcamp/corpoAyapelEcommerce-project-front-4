import axios from 'axios';
import { productTypes } from "../types/ProductTypes";
// import { getAllProducts } from '../../../Services/servicesSanity';
import { getAllProducts, obtenerProductosRecientes } from "../../Services/servicesSanity";

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

//----Obtener productos nuevos-----

export const getNewProductAsync = () => {
  return async (dispatch) => {
    try {
      const response = await obtenerProductosRecientes();
      dispatch(getNewProductSync(response))
    } catch (error) {
      console.log(error);
    }
  }
}

const getNewProductSync = (newProducts) => {
  return {
    type: productTypes.NEW_PRODUCTS,
    payload: newProducts
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


export const getSearchProductSync = (searchTerm) => {
  return {
    type: productTypes.PRODUCTS_FILTERED_BY_SEARCH,
    payload: searchTerm,
  }
}



// export const actionSearchProductAsync = (searchParam) => {
//   return (dispatch, getState) => {
//     try {
//       const { products } = getState(); // Obtener el estado actual de los productos desde Redux Store
//       const filteredProduct = products.filter((item) =>
//         item.name && item.name.toLowerCase().includes(searchParam.toLowerCase())
//       );
//       dispatch(actionSearchProductSync(filteredProduct));
//     } catch (error) {
//       console.error(error);
//       dispatch(actionSearchProductSync([]));
//     }
//   };
// };

// const actionSearchProductSync = (filteredProduct) => {
//   return {
//     type: productTypes.PRODUCTS_FILTERED,
//     payload: filteredProduct,
//   };
// };