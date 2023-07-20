import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../DetailsCards/DetailsCards.scss";
import { actionPostCartAsync, actionPutCartAsync, actionGetCartAsync } from "../../../redux/actions/cartActions";
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import 'bootstrap/dist/css/bootstrap.min.css';
import { numberToMoney } from "../../../Services/utilities";

const DetailsCards = () => {
  const cart = useSelector((store) => store.cartStore.cart);
  const [productInfo, setProductInfo] = useState();
  const [selectedImage, setSelectedImage] = useState("");  
  const [showToast, setShowToast] = useState(false);
  const product = useSelector((store) => store.productStore);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    infoProduct();
  }, [id]);

  

  const infoProduct = () => {
    const dataProduct = product.products;
    const getProduct = dataProduct.find((product) => product.id == id);
    setProductInfo(getProduct);
    setSelectedImage(Object.values(getProduct.img)[0]);    
  };
  
  // encuentra el producto que se esta mostrando para enviarlo al carrito 
 
  const onAddingToCart = (productId) => {
    console.log("productId", productId)
    const productInCart = cart.find(item => item.id == productId);
    console.log("productInCart", productInCart)
    if(productInCart){
      const newProduct = {...productInCart}
      newProduct.quantity =  newProduct.quantity + 1;
      dispatch(actionPutCartAsync(newProduct))
    } else {
      const selectedProduct = product.products.find((product) => product.id === productId);
      const productToAddToCart = {...selectedProduct}
      productToAddToCart['quantity'] = 1
      dispatch(actionPostCartAsync(productToAddToCart))
    }
    dispatch(actionGetCartAsync())
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
            alt="Product main Image"/>
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
            <h3 className="subtittleProductPrice">  {numberToMoney(product.price)}  </h3>
            <p className="productDescription">{productInfo.decription} </p>
            <Button className="button" onClick={() => {
              onAddingToCart(productInfo.id);
              toggleToast();
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
          </div>
        </div>
      ) : (
        <div>Producto no encontrado</div>
      )}
    </div>
  );
};

export default DetailsCards;
