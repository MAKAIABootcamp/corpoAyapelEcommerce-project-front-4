import { useNavigate } from "react-router-dom";
import CartCards from "../../components/Cards/CartCards/CartCards";
import "./Cart.scss"
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from "react-redux";
import { actionDeletCartAsync, actionGetCartAsync, actionUpdateCart } from "../../redux/actions/cartActions";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
const Cart = () => {
  const navigate = useNavigate();
  const cart = useSelector((store) => store.cartStore.cart);
  // const cart = useSelector((store) => store.cartStore.cart);
  console.log(cart)
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    dispatch(actionGetCartAsync());
  }, [dispatch]);

  const onRemovingToCart = (productId) => {
    const selectedProduct = cart.find((product) => product.id === productId);
    if (selectedProduct) {
      dispatch(actionDeletCartAsync(selectedProduct));
      const updatedCart = cart.filter((product) => product.id !== productId);
      dispatch(actionUpdateCart(updatedCart));
    }
  };

  const [quantities, setQuantities] = useState({});

  const incrementQuantity = (productId) => {
    setQuantities((prevQuantities) => {
      const prevQuantity = prevQuantities[productId] || 0;
      return { ...prevQuantities, [productId]: prevQuantity + 1 };
    });
  };

  const decrementQuantity = (productId) => {
    setQuantities((prevQuantities) => {
      const prevQuantity = prevQuantities[productId] || 0;
      if (prevQuantity > 0) {
        return { ...prevQuantities, [productId]: prevQuantity - 1 };
      }
      return prevQuantities;
    });
  };
// Función para calcular el total de cada producto
const calculateProductTotal = (product) => {
  const quantity = quantities[product.id] || 0;
  return product.price * quantity;
};

// Función para calcular el total general de los productos
const calculateTotal = () => {
  let total = 0;
  if (Array.isArray(cart)) {
    cart.forEach((product) => {
      const productTotal = calculateProductTotal(product);
      total += productTotal;
    });
  }
  return total;
};


// useEffect(() => {
//   setTotal(calculateTotal());
// }, [cart]);

useEffect(() => {
  const total = calculateTotal();
  setTotal(total);
}, [cart, quantities]);

  return (
    <div className="cartContainer">
    <h2 className="carritoTittle">Carrito</h2>
    <h4 onClick={() => navigate(`/`)} className="carritoSubtittle">Apóyanos con más productos</h4>
    <Table striped className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Producto</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(cart) && cart.map((product, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td className="nameImageColumn">
              <img className="productImage" src={Object.values(product.img)[0]} alt={product.product_name} />
              {product.product_name}
            </td>
            <td> ${product.price}</td>
            <td>
              <div className="d-flex justify-content-between align-items-center">
                <Button variant="light" onClick={() => decrementQuantity(product.id)} className="counterButton">
                  -
                </Button>
                <span>{quantities[product.id] || 1} </span>
                <Button variant="light" onClick={() => incrementQuantity(product.id)} className="counterButton">
                  +
                </Button>
              </div>
            </td>
            {/* <td> ${product.price * quantities[product.id] || product.price }</td> */}
            <td>${calculateProductTotal(product) || product.price }</td>
            <td> 
            <button onClick={() => {
              onRemovingToCart(product.id)}}> Eliminar producto
            </button>
             </td>
          </tr>
        ))}
      </tbody>
    </Table>
    <CartCards />
    <div className="buttonsContainer">
      <div className="subtotalInfo"> 
      <span className="subtotalTittle"> Subtotal</span>
      <span className="subtotalValue"> ${total}</span>
      </div>
      <Button onClick={() => navigate("/Payment")}>
        Finalizar pedido
      </Button>
      <Button onClick={() => navigate(`/`)}>
        Seguir comprando
      </Button>
      <span className="cartNote" >Los costes de envio y los inpuestos se añaden durante el pago  </span>
    </div>
  </div>
  )
  
};

export default Cart;
