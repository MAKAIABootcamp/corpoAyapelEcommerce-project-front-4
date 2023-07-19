import { useNavigate } from "react-router-dom";
import CartCards from "../../components/Cards/CartCards/CartCards";
import "./Cart.scss"
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from "react-redux";
import { actionDeletCartAsync, actionGetCartAsync, actionPutCartAsync, actionUpdateCart } from "../../redux/actions/cartActions";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
const Cart = () => {
  const navigate = useNavigate();
  const cart = useSelector((store) => store.cartStore.cart);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    dispatch(actionGetCartAsync());
  }, [dispatch]);



  useEffect(() => {
    setTotal(calculateTotal());
  }, [cart]);

  const onRemovingToCart = (productId) => {
    const selectedProduct = cart.find((product) => product.id === productId);
    if (selectedProduct) {
      dispatch(actionDeletCartAsync(selectedProduct));
    }
  };

  const incrementQuantity = (productId) => {
    const selectedProduct = cart.find((product) => product.id === productId);
    const updatedProduct = { ...selectedProduct }
    updatedProduct.quantity += 1
    dispatch(actionPutCartAsync(updatedProduct))
    dispatch(actionGetCartAsync());
  };

  const decrementQuantity = (productId) => {
    const selectedProduct = cart.find((product) => product.id === productId);
    const updatedProduct = { ...selectedProduct }
    updatedProduct.quantity -= 1
    dispatch(actionPutCartAsync(updatedProduct))
    dispatch(actionGetCartAsync());
  };
  // Función para calcular el total de cada producto
  const calculateProductTotal = (product) => {
    return Number(product.price) * product.quantity;
  };

  // Función para calcular el total general de los productos
  const calculateTotal = () => {
    let total = 0;
    console.log("cart", cart)
    cart.forEach((product) => {
      const productTotal = calculateProductTotal(product);
      console.log("productTotal", productTotal)
      total += productTotal;
    });

    return total;
  };



  return (
    <div className="cartContainer">
      <h2 className="carritoTittle">Carrito</h2>
      <h4 onClick={() => navigate(`/`)} className="carritoSubtittle">Apóyanos con más productos</h4>
      <Table striped className="table">
        <thead className="table__head">
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
          {Array.isArray(cart) && cart.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td className="nameImageColumn">
                <img className="productImage" src={Object.values(product.img)[0]} alt={product.product_name} />
                {product.product_name}
              </td>
              <td> ${product.price}</td>
              <td>
                <div className="counter">
                  <Button variant="light" onClick={() => decrementQuantity(product.id)} className="counterButton">
                    -
                  </Button>
                  <span>{product.quantity} </span>
                  <Button variant="light" onClick={() => incrementQuantity(product.id)} className="counterButton">
                    +
                  </Button>
                </div>
              </td>
              {/* <td> ${product.price * quantities[product.id] || product.price }</td> */}
              <td>${calculateProductTotal(product) || product.price}</td>
              <td>
                <Button onClick={() => {
                  onRemovingToCart(product.id)
                }} className="button"> Eliminar producto
                </Button>
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
        <Button onClick={() => navigate("/Payment")} className="button"> 
          Finalizar pedido
        </Button>
        <Button onClick={() => navigate(`/`)} className="button">
          Seguir comprando
        </Button>
        <span className="cartNote" >Los costes de envio y los inpuestos se añaden durante el pago  </span>
      </div>
    </div>
  )

};

export default Cart;
