import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'hu2nmken',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
});

// Function to fetch all products
export const getAllProducts = async () => {
  const query = `*[_type == "products"]`;
  return await client.fetch(query);
};

// Function to fetch all banners
export const getAllBanners = async () => {
  const query = `*[_type == "banner"]`;
  return await client.fetch(query);
};


// Function to fetch all banners about us
export const getAllBannersAboutUs = async () => {
  const query = `*[_type == "banner-about-us"]`;
  return await client.fetch(query);
};

// Function to fetch all banners testimonios
export const getAllBannersTestimonies = async () => {
  const query = `*[_type == "banner-testimonies"]`;
  return await client.fetch(query);
};


// Function to fetch a product by its ID
export const getProductById = async (id) => {
  // const query = `*[ _type == "product" && _id == "${id}" ]`;
  const query = `*[ _type == "products" && _id == "${id}" ]`;
  const response = await client.fetch(query);
  // return await client.fetch(query);
  console.log('API Response:', response[0]);
  return response;
};

// Function to fetch a banner by its ID
export const getBannerById = async (id) => {
  const query = `*[ _type == "banner" && _id == "${id}" ]`;
  return await client.fetch(query);
};

//CREAR FUNCIONES DE ID DE SER NECESARIO