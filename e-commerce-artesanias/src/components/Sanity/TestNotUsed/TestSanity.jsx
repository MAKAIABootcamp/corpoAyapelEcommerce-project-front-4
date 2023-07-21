import { useEffect, useState } from 'react';
import { getAllProducts } from '../../../Services/servicesSanity';
import { urlFor } from '../../../sanityClient';

const TestSanity = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch all products from Sanity when the component mounts
    const fetchProducts = async () => {
      try {
        const productsData = await getAllProducts();
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);


  return (
    <div>
      <h1>Products from Sanity</h1>
      {products.map((product) => (
        <div key={product._id}>
          <h2>{product.name}</h2>
          {/* Use the urlFor function to get the image URL for each image */}
          {Array.from({ length: 4 }, (_, index) => index + 1).map((imageIndex) => (
            product[`image${imageIndex}`]?.asset?._ref && (
              <div key={`image-${imageIndex}`}>
                {/* <h3>Imagen {imageIndex}</h3> */}
                <img
                  src={urlFor(product[`image${imageIndex}`].asset._ref).url()}
                  alt={`Image ${imageIndex} of ${product.name}`}
                  style={{ width: '100px', height: '100px' }}
                />
              </div>
            )
          ))}
          {/* Render other product properties here */}
          <div>
            <p>{product.Precio}</p>
            {/* ... Render other properties ... */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestSanity;