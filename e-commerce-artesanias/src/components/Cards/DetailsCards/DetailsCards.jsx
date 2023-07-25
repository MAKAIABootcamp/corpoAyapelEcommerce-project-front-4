import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../DetailsCards/DetailsCards.scss";
import { actionPostCartAsync, actionPutCartAsync, actionGetCartAsync } from "../../../redux/actions/cartActions";
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import { numberToMoney } from "../../../Services/utilities";
import 'bootstrap/dist/css/bootstrap.min.css';

const DetailsCards = () => {
  // const cart = useSelector((store) => store.cartStore.cart);
  const [productInfo, setProductInfo] = useState();
  const [showToastLogin, setShowToastLogin] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const product = useSelector((store) => store.productStore);
  const { user } = useSelector((store) => store.login);
  const dispatch = useDispatch();
  const { id } = useParams();

  
  const toggleToastLogin = () => setShowToastLogin(!showToastLogin)

  useEffect(() => {
    if(product.products.length>0 && id){
      infoProduct();
    }
  }, [id, product]);

  const infoProduct = () => {
    const dataProduct = product.products;
    const getProduct = dataProduct.find((product) => product.id == id);
    setProductInfo(getProduct);
    setSelectedImage(Object.values(getProduct.img)[0]);
  };

  // encuentra el producto que se esta mostrando para enviarlo al carrito 

  const onAddingToCart = (productId) => {
    const productInCart = user.car_products.find(item => item.productId == productId);
    let newProduct;
    if (productInCart) {
      newProduct = { ...productInCart }
      newProduct.quantity = newProduct.quantity + 1;
      dispatch(actionPostCartAsync(newProduct, user))
    } else {
      newProduct = { 
        productId: productId
      }
      newProduct['quantity'] = 1;
      dispatch(actionPostCartAsync(newProduct, user))
    }
  }

  const toggleToast = () => {
    setShowToast(!showToast);
  };

  return (
    <div>
      {productInfo ? (
        <div className="containerDetails">
          <div className="detailsImages">
            <img
              className="mainImage"
              src={selectedImage || productInfo.img.imageUrl}
              alt="Product main Image" />
            <div className="containerOtherImages" >
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

          </div>
          <div className="detailsInfo">
            <h1 className="tittleProductName">{productInfo.product_name} </h1>
            <h3 className="subtittleProductPrice">  {numberToMoney(productInfo.price)} </h3>
            <p className="productDescription">{productInfo.decription} </p>
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
