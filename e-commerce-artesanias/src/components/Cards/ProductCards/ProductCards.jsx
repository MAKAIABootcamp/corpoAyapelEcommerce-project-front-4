import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionGetProductAsync } from '../../../redux/actions/ProductActions';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../ProductCards/ProductCards.scss";
import { useNavigate } from 'react-router-dom';
const ProductCards = () => {
  const products = useSelector(state => state.productStore.products);
  console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionGetProductAsync());
  }, [dispatch]);

  const navigate = useNavigate();

  return (
    <div className='container'>
      {products.map((product) => (
        <div key={product.id} onClick={() => {navigate(`/productDetails/${product.product_name}`)}}>
          <Card className="card" style={{ width: '18rem' }}>
            <Card.Img className="cardImage" variant="top" src={product.img["1"]} />
            <Button className="button"variant="primary">{product.price}</Button>
              <Card.Title className="productName">{product.product_name}</Card.Title>
              <div className='stars'>
                            <h4>★</h4>
                            <h4>★</h4>
                            <h4>★</h4>
                        </div>

              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;

