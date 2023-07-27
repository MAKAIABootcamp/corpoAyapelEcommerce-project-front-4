import { productTypes } from "../types/ProductTypes";

const productState = {
  products: [],
  productsFiltered: []
}


// export const productReducers = (state = productState, action) => {
//     switch (action.type) {
//         case productTypes.PRODUCTS_GET:
//             return {
//                 ...state,
//                 products: action.payload.product
//             };
//         case productTypes.PRODUCTS_FILTERED:

//             return {
//                 ...state,
//                 productsFiltered: state.products.filter(item => {
//                     console.log (Object.values(item.category))
//                     return Object.values(item.category).includes(
//                         action.payload
//                     )
//                 })

//             };

//         default:
//             return state;
//     };
// };
export const productReducers = (state = productState, action) => {
  switch (action.type) {
    case productTypes.PRODUCTS_GET:
      return {
        ...state,
        products: [...action.payload]
      };
    case productTypes.PRODUCTS_FILTERED:
      const filteredProducts = state.products.filter((product) => {
        return (
          product.category === action.payload ||
          product.category2 === action.payload ||
          product.category3 === action.payload
        );
      });

      return {
        ...state,
        // productsFiltered: filteredProducts
        productsFiltered: [...filteredProducts]
      };
    case productTypes.PRODUCTS_FILTERED_BY_SEARCH:
      const filteredProductsSearch = state.products.filter((product) =>
      product.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        productsFiltered: [...filteredProductsSearch]
      };
    case productTypes.NEW_PRODUCTS:
      return {
        ...state,
        productsFiltered: [...action.payload]
      }
    default:
      return state;
  }
};
      // export const productReducers = (state = productState, action) => {
      //   switch (action.type) {
      //     case productTypes.PRODUCTS_GET:
      //       return {
      //         ...state,
      //         products: action.payload.product
      //       };
      //       case productTypes.PRODUCTS_FILTERED:
      //         return {
      //           ...state,
      //           filteredProducts: state.products.filter((product) => {
      //             return (
      //               product.category === action.payload ||
      //               product.category2 === action.payload ||
      //               product.category3 === action.payload
      //             );
      //           })
      //         };
      //         default:
      //           return state;
      //       }
      //     };