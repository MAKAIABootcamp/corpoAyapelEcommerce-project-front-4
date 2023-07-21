import { useState } from 'react';
import { getAllProducts } from '../../Services/servicesSanity';
import { urlFor } from '../../sanityClient';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

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
    <div className="container-main">
      <div>
        <h1>Busqueda de productos:</h1>
        <form className="searchForm" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            className="searchInput"
            placeholder="Search products..."
          />
          <button type="submit" className="searchButton">Search</button>
        </form>
      </div>
      <div className='container'>
          {products.length > 0 ? (
            <div className="productContainer">
              {products.map((product) => (
                <div className="card" key={product._id} onClick={() => navigate(`/Details/${product._id}`)}>
                  <img
                    className="cardImage"
                    src={urlFor(product.image1?.asset?._ref).url()}
                    alt={`Image of ${product.name}`}
                  />
                  <div className="price">${product.Precio}</div>
                  <div className="productName">{product.name}</div>
                  <div className="stars">
                    <h4>★</h4>
                    <h4>★</h4>
                    <h4>★</h4>
                  </div>
                  <div className="productDescription">{product.description}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="errorMessage">Lo sentimos, no hay productos disponibles.</div>
          )}
        </div>
    </div>
  );
  
};

export default TestSanitySearch;
