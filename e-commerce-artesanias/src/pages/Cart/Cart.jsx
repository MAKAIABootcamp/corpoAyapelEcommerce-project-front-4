import { useNavigate } from "react-router-dom";
import CartCards from "../../components/Cards/CartCards/CartCards";
import "./Cart.scss"
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from "react-redux";
import { actionGetCartAsync } from "../../redux/actions/cartActions";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
const Cart = () => {
  const navigate = useNavigate();
  const cart = useSelector((store) => store.cartStore.cart);
  // const cart = useSelector((store) => store.cartStore.cart);
  console.log(cart)
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    dispatch(actionGetCartAsync());
  }, [dispatch]);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return <div className="cartContainer">
    <h2>Carrito</h2>
    <h4 onClick={() => navigate(`/`)}>Apóyanos con más productos</h4>
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
              <img src={Object.values(product.img)[0]} alt={product.product_name} />
              {product.product_name}
            </td>
            <td>{product.price}</td>
            <td>
              <div className="d-flex justify-content-between align-items-center">
                <Button variant="light" onClick={decrementQuantity} className="counterButton">
                  -
                </Button>
                <span>{quantity}</span>
                <Button variant="light" onClick={incrementQuantity} className="counterButton">
                  +
                </Button>
              </div>
            </td>
            <td>@mdo</td>
          </tr>
        ))}
      </tbody>
    </Table>
    <CartCards />
    <div className="buttonsContainer">
      <Button onClick={() => navigate("/Payment")}>
        Finalizar pedido
      </Button>
      <Button onClick={() => navigate(`/`)}>
        Seguir comprando
      </Button>
    </div>
  </div>;
};

export default Cart;
