import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: 'hu2nmken',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
});

// Function to create a builder for image URLs
const builder = imageUrlBuilder(client);

// Function to get the URL for a specific image asset
export const urlFor = (source) => builder.image(source);

console.log('Sanity client created.');

export default client;
