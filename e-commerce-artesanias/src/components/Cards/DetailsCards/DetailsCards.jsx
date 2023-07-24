import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../DetailsCards/DetailsCards.scss";
import { actionPostCartAsync, actionPutCartAsync, actionGetCartAsync } from "../../../redux/actions/cartActions";
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
import 'bootstrap/dist/css/bootstrap.min.css';
import { numberToMoney } from "../../../Services/utilities";
import { createClient } from '@sanity/client';
import { urlFor } from '../../../sanityClient';
import { getProductById } from '../../../Services/servicesSanity';
const DetailsCards = () => {
  const cart = useSelector((store) => store.cartStore.cart);
  const [productInfo, setProductInfo] = useState();
  const [selectedImage, setSelectedImage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const product = useSelector((store) => store.productStore);
  const dispatch = useDispatch();
  const { id } = useParams();


  // const infoProduct = async () => {
  //   try {
  //     const dataProduct = await getProductById(id);
  //     setProductInfo(dataProduct[0]); 
  //   } catch (error) {
  //     console.error('Error fetching product:', error);
  //     setProductInfo(null);
  //   }
  // };


  const infoProduct = async () => {
    try {
      const dataProduct = await getProductById(id);
      console.log('Product Data:', dataProduct);
      if (dataProduct.length > 0) {
        setProductInfo(dataProduct[0]); // Access the first element of the array
      } else {
        setProductInfo(null); // Product not found
      }
    } catch (error) {
      console.error('Error fetching product:', error);
      setProductInfo(null);
    }
  };
  
  useEffect(() => {
    console.log('ID:', id);
    infoProduct();
    // getProductById();
  }, [id]);

  // encuentra el producto que se esta mostrando para enviarlo al carrito 

  const onAddingToCart = (productId) => {
    console.log("productId", productId)
    const productInCart = cart.find(item => item.id == productId);
    console.log("productInCart", productInCart)
    if (productInCart) {
      const newProduct = { ...productInCart }
      newProduct.quantity = newProduct.quantity + 1;
      dispatch(actionPutCartAsync(newProduct))
    } else {
      const selectedProduct = product.products.find((product) => product.id === productId);
      const productToAddToCart = { ...selectedProduct }
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
              src={selectedImage || product.image1?.asset?._ref}
              alt="Product main Image" />
              {/* <img className="cardImage" variant="top" src={urlFor(product[`image${imageIndex}`].asset._ref).url()} alt={product.name} /> */}
            {/* <div className="containerOtherImages" >
              {Array.from({ length: 4 }, (_, index) => (
    product[`image${index + 1}`]?.asset?._ref && (
      <img
        key={`image-${index}`}
        className="cardImage"
        variant="top"
        src={urlFor(product[`image${index + 1}`].asset._ref).url()}
        alt={product.name}
        onClick={() => setSelectedImage(product[`image${index + 1}`]?.asset?._ref)}
      />
    )
  ))}
              {productInfo.img && Object.values(productInfo.img).map((imageUrl, index) => (
                <img
                  key={index}
                  className={`otherimg ${imageUrl === selectedImage ? 'active' : ''}`}
                  src={imageUrl}
                  alt={`Image ${index + 1}`}
                  onClick={() => setSelectedImage(imageUrl)}
                />
              ))}
            </div> */}

          </div>
          <div className="detailsInfo">
            <h1 className="tittleProductName">{productInfo?.name}</h1>
            <h3 className="subtittleProductPrice"> {numberToMoney(productInfo?.Precio)} </h3>
            <p className="productDescription">{productInfo?.description2} </p>
            <Button className="button" onClick={() => {
              onAddingToCart(product._id);
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
