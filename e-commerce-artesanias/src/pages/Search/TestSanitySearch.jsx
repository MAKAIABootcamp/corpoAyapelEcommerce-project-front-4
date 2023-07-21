import { useState } from 'react';
import { getAllProducts } from '../../Services/servicesSanity';
import { urlFor } from '../../sanityClient';

const TestSanitySearch = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      const productsData = await getAllProducts();
      // Filter products based on the search term
      const filteredProducts = productsData.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setProducts(filteredProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div>
      <h1>Products Search</h1>
      <form onSubmit={handleSearchSubmit}>
        <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search products..." />
        <button type="submit">Search</button>
      </form>
      {products.length > 0 ? (
        <div>
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
                <h3>Descripción corta</h3>
                <p>{product.description}</p>
                <h3>Producto de test</h3>
                <p>{product.description}</p>
                {/* ... Render other properties ... */}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default TestSanitySearch;
