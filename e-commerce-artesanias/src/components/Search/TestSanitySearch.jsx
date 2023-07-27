import { useEffect, useState } from 'react';
import { getAllProducts } from '../../Services/servicesSanity';
import { urlFor } from '../../sanityClient';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import "./TestSanitySearch.scss"
import Swal from "sweetalert2";
import ProductCards from '../Cards/ProductCards/ProductCards';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchProductSync } from '../../redux/actions/ProductActions';
const TestSanitySearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showCards, setShowCards] = useState(false);
  const dispatch = useDispatch();
  const { products, productsFiltered } = useSelector(
    state => state.productStore
  );
  // useEffect(() => {
  //   updateTotal(); 
  // }, []); 
  // useEffect(() => {
  //   setShowCards(productsFiltered && productsFiltered.length > 0);
  // }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();

    if (searchTerm.trim() === "") {
      Swal.fire("Error", "Ingresa un término de búsqueda", "error");
      return;
    }

    try {
      // const productsData = await getAllProducts();
      // Filter products based on the search term
      // const filteredProducts = productsData.filter((product) =>
      //   product.name.toLowerCase().includes(searchTerm.toLowerCase())
      // );

      dispatch(getSearchProductSync(searchTerm));
      console.log(productsFiltered);
      setShowCards(true);
    } catch (error) {
      console.error('Error fetching products:', error);
    }

  };

  return (
    <div className="container-main">
      <div>
        <h1 className='searchTittle'>Busqueda de productos</h1>
        <form className="searchForm" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            className="searchInput"
            placeholder="Nombre del producto..."
          />
          <button type="submit" className="searchButton" >Buscar</button>
        </form>
      </div>
      {showCards && <ProductCards isFiltered={true} />}
      {/* <ProductCards isFiltered={true}/> */}
      {/* <div className='container'>
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
        </div> */}
    </div>
  );

};

export default TestSanitySearch;
