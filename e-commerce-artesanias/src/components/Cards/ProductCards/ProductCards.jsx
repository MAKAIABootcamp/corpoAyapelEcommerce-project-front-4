import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionGetProductAsync, actionFilterProductSync } from '../../../redux/actions/ProductActions';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../ProductCards/ProductCards.scss';
import { useNavigate } from 'react-router-dom';
import { numberToMoney } from '../../../Services/utilities';
import { getAllProducts } from '../../../Services/servicesSanity';
import { urlFor } from '../../../sanityClient';
// import { filterProductsAsync, getProductsAsync } from '../../../redux/productSlice';

const ProductCards = ({ isFiltered }) => {
  const { products, productsFiltered } = useSelector(state => state.productStore);
  const [productsToList, setProductsToList] = useState([]);
  
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

  const combinedProducts = isFiltered ? productsFiltered : products;
  console.log(combinedProducts);

  // Función para seleccionar 10 productos aleatorios
  const getRandomProducts = () => {
    const randomProducts = combinedProducts.sort(() => 0.5 - Math.random()).slice(0, 10);
    console.log(randomProducts)
    // setProductsToList(randomProducts);
    // return randomProducts.slice(0, 10);
    return randomProducts;
  };

  useEffect(() => {
    // getRandomProducts(); 
    // Llamar a la función para obtener productos aleatorios al cargar la página
  // }, [combinedProducts]);
  const randomProducts = getRandomProducts();
    setProductsToList(randomProducts);
  }, []);

  return (
//     <div className="containerCards">
//       {combinedProducts.length > 0 ? (
//         combinedProducts.map((product) => (
//           <Card className="card" key={product.id} onClick={() => navigate(`/Details/${product.id}`)}>
//             <Card.Img className="cardImage" variant="top" src={product.img["1"]} />
//             <Card.Text className="price" variant="primary" >
//               {numberToMoney(product.price)} 
//             </Card.Text>
//             <Card.Title className="productName">{product.product_name}</Card.Title>
//             <div className="stars">
//               <h4>★</h4>
//               <h4>★</h4>
//               <h4>★</h4>
//             </div>
//             <Card.Text className="productDescription">
//               Some quick example text to build on the card title and make up the bulk of the card's content.
//             </Card.Text>
//           </Card>
//         ))
//       ) : (
//         <div> <h3 className='errorMessage'> Lo sentimos, no hay productos disponibles. </h3></div>
//       )}
//     </div>
//   );
// };

<div className="containerCards">
      {combinedProducts.length > 0 ? (
        combinedProducts.map((product) => (
          <Card className="card" key={product._id} onClick={() => navigate(`/Details/${product._id}`)}>
           <Card.Img className="cardImage" variant="top" src={urlFor(product[`image${1}`].asset._ref).url()} alt={product.name} />
            <Card.Text className="price" variant="primary" >
              {numberToMoney(product.Precio)} 
            </Card.Text>
            <Card.Title className="productName">{product.name}</Card.Title>
            <div className="stars">
              <h4>★</h4>
              <h4>★</h4>
              <h4>★</h4>
            </div>
            <Card.Text className="productDescription">
              {product.description}
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
