// // import { createSlice } from "@reduxjs/toolkit";

// // const initialState = {
// //     name: "",
// //     username: "",
// //     email: "",

// // };

// //se continua creando el slice , recordar que se puede agilizar el proceso de creacion del slice usando otros slices


// import { createSlice } from "@reduxjs/toolkit";
// import axios from 'axios';

// export const productSlice = createSlice({
//   name: "products",
//   initialState: { products: [] },
//   reducers: {
//     getProductsAsync: async (state) => {
//       try {
//         const response = await axios.get('http://localhost:3000/products');
//         state.products = response.data;
//       } catch (error) {
//         console.log(error);
//       }
//     },
//     filterProductsAsync: async (state, action) => {
//       const searchParam = "category";
//       const searchValue = action.payload;

//       const url = "http://localhost:3000/products";
//       const products = [];

//       try {
//         const response = await axios.get(url, {
//           params: {
//             [searchParam]: searchValue
//           }
//         });

//         const data = response.data;
//         data.forEach((product) => {
//           products.push({
//             id: product.id,
//             ...product
//           });
//         });
//       } catch (error) {
//         console.log(error);
//       }

//       state.products = products;
//     },
//   },
// });

// export const { getProductsAsync, filterProductsAsync } = productSlice.actions;

// export default productSlice.reducer;
