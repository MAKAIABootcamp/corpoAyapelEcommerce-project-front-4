import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import CartCards from "../../components/Cards/CartCards/CartCards";
import "./Cart.scss"
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from "react-redux";
import { actionPostCartAsync } from "../../redux/actions/cartActions";
import Button from 'react-bootstrap/Button';
import { numberToMoney } from '../../Services/utilities';
import Swal from 'sweetalert2';
import { urlFor } from '../../../src/sanityClient';

const Cart = () => {
  const navigate = useNavigate();
  const  [cart, setCart] = useState([])
  const isLogged = useSelector((store) => store.login.isLogged);  
  console.log(isLogged)
  const user = useSelector((store) => store.login.user);  
  const { products } = useSelector((store) => store.productStore);  
  console.log(user)
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const [getCartProdcuts, setGetCartProducts] = useState({});
  /*
  const [getCartProdcuts, setGetCartProducts] = useState(() => {
    const cartFromLocalStorage = JSON.parse(
      localStorage.getItem('productsInCart')
    );
    return cartFromLocalStorage || {};
  }); */
  // const getCartProdcuts = JSON.parse(localStorage.getItem("productsInCart"));
  // console.log(getCartProdcuts)

  useEffect(() => {
    if(user){
      setCart([...user.car_products])
      let productsSaveCar={}
      user.car_products.map(productCar=>{
        const getProduct = products.find(item => item._id == productCar.productId);
        productsSaveCar[productCar.productId] = {...productCar,...getProduct}
      })
      setGetCartProducts(productsSaveCar)
    }
  }, [user]);
  const cartArray = Object.values(getCartProdcuts);
  console.log('ProductsInCart', cartArray);


  useEffect(() => {
    updateTotal(); 
  }, [cartArray]); 

  


  const onRemovingToCart = productId => {
    // const selectedProduct = cart.find((product) => product.id === productId);
    // if (selectedProduct) {
    //   dispatch(actionDeletCartAsync(selectedProduct));
    // }
    // Eliminar el producto del carrito en el almacenamiento local
    const updatedCart = { ...getCartProdcuts };
    delete updatedCart[productId];
    // localStorage.setItem('productsInCart', JSON.stringify(updatedCart));

    // Actualizar el estado para que el componente se re-renderice y muestre los cambios
    setGetCartProducts(updatedCart);

    const selectedProductCar = user.car_products.find(
      product => product.productId === productId
    );
    dispatch(actionPostCartAsync(selectedProductCar, user, true))

  };

  const incrementQuantity = productId => {
    const selectedProduct = cartArray.find(
      product => product._id === productId
    );
    const updatedProduct = { ...selectedProduct };
    console.log(selectedProduct);
    updatedProduct.quantity += 1;
    // dispatch(actionPutCartAsync(updatedProduct))
    // dispatch(actionPutCartAsync(updatedProduct))
    // dispatch(actionGetCartAsync());
    // Actualizar el producto en el estado local del carrito
     const updatedCart = { ...getCartProdcuts, [productId]: updatedProduct };
     setGetCartProducts(updatedCart);
    /*localStorage.setItem('productsInCart', JSON.stringify(updatedCart));*/
     const selectedProductCar = user.car_products.find(
      product => product.productId === productId
    );
    const updatedProductCar = { ...selectedProductCar };
    updatedProductCar.quantity= Number(updatedProductCar.quantity) +  1;
    dispatch(actionPostCartAsync(updatedProductCar, user))

  
  };

  const decrementQuantity = productId => {
    const selectedProduct = cartArray.find(
      product => product._id === productId
    );
    const updatedProduct = { ...selectedProduct };
    updatedProduct.quantity -= 1;
    // dispatch(actionPutCartAsync(updatedProduct))
    // dispatch(actionGetCartAsync());
    const updatedCart = { ...getCartProdcuts, [productId]: updatedProduct };
    // localStorage.setItem('productsInCart', JSON.stringify(updatedCart));
    // return updatedCart;
    setGetCartProducts(updatedCart);

    const selectedProductCar = user.car_products.find(
      product => product.productId === productId
    );
    const updatedProductCar = { ...selectedProductCar };
    updatedProductCar.quantity= Number(updatedProductCar.quantity) -  1;
    dispatch(actionPostCartAsync(updatedProductCar, user))

  };
  // Función para calcular el total de cada producto
  const calculateProductTotal = product => {
    return Number(product.Precio) * product.quantity;
  };

  // Función para calcular el total general de los productos
  const calculateTotal = () => {
    let total = 0;
    console.log('cart', cartArray);
    cartArray.forEach(product => {
      const productTotal = calculateProductTotal(product);
      console.log('productTotal', productTotal);
      total += productTotal;
    });

    return total;
  };

  // Función para actualizar el subtotal 
  const updateTotal = () => {
    const newTotal = calculateTotal();
    setTotal(newTotal);
  };
  // Validar logIn
  const finishPurchase = () => {
    if (isLogged) {
      const updateCart = {
        products: Object.values(cartArray),
        // user: user,
        subtotal: numberToMoney(total),
      };
      console.log(updateCart);
      // dispatch(actionPutCartAsync(updateCart))
      localStorage.removeItem('productsInCart');
      setGetCartProducts({});
      localStorage.setItem('order', JSON.stringify(updateCart));
      navigate('/ConfirmPayment');
    } else {
      Swal.fire('Debe iniciar sesión para continuar');
      navigate('/LogIn');
    }
  };

  return (
    <div className='cartContainer'>
      <h2 className='carritoTittle'>Carrito</h2>
      <h4 onClick={() => navigate(`/`)} className='carritoSubtittle'>
        Apóyanos con más productos
      </h4>
      <Table striped className='table'>
        <thead className='table__head'>
          <tr>
            <th>#</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {cartArray.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td className='nameImageColumn'>
                <img
                  className='productImage'
                  src={urlFor(product[`image${1}`].asset._ref).url()}
                  alt={product.name}
                />
                {product.name}
              </td>
              <td> {numberToMoney(product.Precio)} </td>
              <td>
                <div className='counter'>
                  <button
                    variant='light'
                    onClick={() => decrementQuantity(product._id)}
                    className='counterButton'
                  >
                    -
                  </button>
                  <span>{product.quantity} </span>
                  <button
                    variant='light'
                    onClick={() => incrementQuantity(product._id)}
                    className='counterButton'
                  >
                    +
                  </button>
                </div>
              </td>
              <td>{numberToMoney(calculateProductTotal(product) || product.Precio)} </td>
              <td>
                <button
                  onClick={() => {
                    onRemovingToCart(product._id);
                  }}
                  className='eliminarButton'
                >
                  {' '}
                  Eliminar producto
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className='buttonsContainer'>
        <div className='subtotalInfo'>
          <span className='subtotalTittle'> Subtotal: </span>
          <span className='subtotalValue'> {numberToMoney(total)} </span>
        </div>
        <Button onClick={() => finishPurchase()} className='button'>
          Finalizar pedido
        </Button>
        <Button onClick={() => navigate(`/`)} className='button'>
          Seguir comprando
        </Button>
        <span className='cartNote'>
          Los costos de envío y los inpuestos se añaden durante el pago{' '}
        </span>
      </div>
    </div>
  );
};

export default Cart;
