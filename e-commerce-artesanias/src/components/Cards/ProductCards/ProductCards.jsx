import  { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionGetProductAsync, actionFilterProductSync  } from '../../../redux/actions/ProductActions';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../ProductCards/ProductCards.scss";
import { useNavigate } from 'react-router-dom';
// import { filterProductsAsync, getProductsAsync } from '../../../redux/productSlice';
const ProductCards = ({isFiltered}) => {
  const {products, productsFiltered} = useSelector(state => state.productStore);
 const [productsToList, setProductsToList] = useState([])
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(actionGetProductAsync());
  }, [dispatch]);

  useEffect(() => {
    if (isFiltered) {
      setProductsToList(productsFiltered);
    } else {
      setProductsToList(products);
    }
  }, [isFiltered, products, productsFiltered]);
  // useEffect(() => {
  //   dispatch(getProductsAsync()); 
  // }, [dispatch]);

  // const handleFilter = (searchValue) => {
  //   dispatch(filterProductsAsync(searchValue));
  // };
  const combinedProducts = isFiltered ? productsFiltered : products;
  console.log(combinedProducts);

  return (
    <div className="container">
      { combinedProducts.length > 0 ? (
         combinedProducts.map((product) => (
            <Card className="card" key={product.id} onClick={() => navigate(`/Details/${product.product_name}`)}>
              <Card.Img className="cardImage" variant="top" src={product.img["1"]} />
              <Button className="button" variant="primary">
                {product.price}
              </Button>
              <Card.Title className="productName">{product.product_name}</Card.Title>
              <div className="stars">
                <h4>★</h4>
                <h4>★</h4>
                <h4>★</h4>
              </div>
              <Card.Text className="productDescription">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card>
        ))
      ) : (
        <div> <h3 className='errorMessage'> Lo sentimos, no hay productos disponibles. </h3></div>
      )}
    </div>
  );
};

export default ProductCards;