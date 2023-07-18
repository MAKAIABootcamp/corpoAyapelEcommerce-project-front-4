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
  // src de mainImage
  const [selectedImage, setSelectedImage] = useState('');
  const [showToast, setShowToast] = useState(false);
 // encuentra el producto que se selección para mostrarlo 
  const [productInfo, setProductInfo] = useState();
  const [showToastLogin, setShowToastLogin] = useState(false);
  const product = useSelector((store) => store.productStore);
  const { user } = useSelector((store) => store.login);
  // encuentra el producto que se esta mostrando para enviarlo al carrito 
  const cart = useSelector((store) => store.cartStore);

  const onAddingToCart = (productId) => {
    dispatch(actionPostCartAsync(productId, user))
  }

  useEffect(() => {
    infoProduct();
  }, [name]);


  const toggleToast = () => {
    console.log(showToast)
    setShowToast(!showToast);
  };

  const infoProduct = () => {
    const dataProduct = product.products.slice();
    console.log(dataProduct);
    const getProduct = dataProduct.find((product) => product.product_name === name);
    setProductInfo(getProduct);

    if (getProduct && getProduct.img && getProduct.img.length > 0) {
      setSelectedImage(getProduct.img[0]);
    }
  };

  const toggleToastLogin = () => setShowToastLogin(!showToastLogin);

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
              if(user?.email){
                onAddingToCart(productInfo.id);
                toggleToast();
              } else {
                toggleToastLogin();
              }

            }}>
              Agregar al carrito
            </Button>
            <Toast className="toast"
              show={showToast}
              onClose={toggleToast}
              autohide 
              delay={5000} 
            >
              <Toast.Header>
                <strong className="me-auto">Producto agregado</strong>
              </Toast.Header>
              <Toast.Body>¡El producto se ha agregado con éxito!</Toast.Body>
            </Toast>
            <Toast className="toast"
              show={showToastLogin}
              onClose={toggleToastLogin}
              autohide 
              delay={1000} 
            >
              <Toast.Header>
                <strong className="me-auto">Inicia sesión</strong>
              </Toast.Header>
              <Toast.Body>¡Inicia sesión para agregar al carrito!</Toast.Body>
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
