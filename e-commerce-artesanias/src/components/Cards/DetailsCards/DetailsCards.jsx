import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "../DetailsCards/DetailsCards.scss";
import { actionPostCartAsync } from "../../../redux/actions/cartActions";
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import 'bootstrap/dist/css/bootstrap.min.css';
const DetailsCards = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { name } = useParams();
  console.log(name);

  useEffect(() => {
    infoProduct();
  }, [name]);
// src de mainImage
const [selectedImage, setSelectedImage] = useState('');

 // encuentra el producto que se selección para mostrarlo 
  const [productInfo, setProductInfo] = useState();
  const product = useSelector((store) => store.productStore);
  const infoProduct = () => {
    const dataProduct = product.products.slice();
    console.log(dataProduct);
    const getProduct = dataProduct.find((product) => product.product_name === name);
    setProductInfo(getProduct);

    if (getProduct && getProduct.img && getProduct.img.length > 0) {
      setSelectedImage(getProduct.img[0]);
    }
  };
  
  // encuentra el producto que se esta mostrando para enviarlo al carrito 
  const cart = useSelector((store) => store.cartStore);
  const onAddingToCart = (productId) => {
    const selectedProduct = product.products.find((product) => product.id === productId);
    dispatch(actionPostCartAsync(selectedProduct))
  }

  const [showToast, setShowToast] = useState(true);

  const toggleToast = () => {
    console.log(showToast)
    setShowToast(!showToast);
  };
  return (
    <div>
      {productInfo ? (
        <div className="containerDetails">
          <div className="detailsImages">
            <img 
            className="mainImage"
            src={selectedImage || (productInfo.img && productInfo.img[0])}
            alt="Product main Image"/>
            {Object.values(productInfo.img).map((imageUrl, index) => (
              <img
                key={index}
                className={`otherimg ${imageUrl === selectedImage ? 'active' : ''}`}
                src={imageUrl}
                alt={`Image ${index + 1}`}
                onClick={() => setSelectedImage(imageUrl)}
              />
            ))}
          </div>
          <div className="detailsInfo">
            <h1>{productInfo.product_name} </h1>
            <h3> {productInfo.price} </h3>
            <h5>{productInfo.decription} </h5>
            <Button className="button" onClick={() => {
              onAddingToCart(productInfo.id);
              toggleToast();
            }}>
              Agregar al carrito
            </Button>
            <Toast className="toast"
              show={showToast}
              onClose={toggleToast}
            >
              <Toast.Header>
                <strong className="me-auto">Producto agregado</strong>
              </Toast.Header>
              <Toast.Body>¡El producto se ha agregado con éxito!</Toast.Body>
            </Toast>
          </div>
        </div>
      ) : (
        <div>Producto no encontrado</div>
      )}
    </div>
  );
};

export default DetailsCards;
