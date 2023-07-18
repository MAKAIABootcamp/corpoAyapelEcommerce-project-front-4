import React,  { useState, useEffect }  from 'react';
import { useSelector, useDispatch } from "react-redux";
import { actionGetCartAsync } from "../../../../redux/actions/cartActions";
import './Orders.scss';

const OrderMenu = () => {
  const dispatch = useDispatch();
  const [orders, setOrders] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { cart } = useSelector((store) => store.cartStore);
  const { user } = useSelector((store) => store.login);
  // Aquí puedes implementar la lógica para obtener las órdenes del usuario desde Firebase
  // y establecerlas en el estado "orders"

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(()=>{
    if(user.uid){
      dispatch(actionGetCartAsync(user.uid))
    }
  }, [user])

  useEffect(()=>{
    if(cart?.length>0){
      console.log(cart)
    }
  }, [cart])

  return (
    <div className="order-menu-container">
      <button className="toggle-button" onClick={toggleMenu}>
        Ver Órdenes
      </button>
      {isMenuOpen && (
        <div className="menu-content">
          {orders.length === 0 ? (
            <div>No hay órdenes disponibles.</div>
          ) : (
            <ul>
              {orders.map((order) => (
                <li key={order.id}>
                  <h3>Orden #{order.id}</h3>
                  <p>Fecha: {order.date}</p>
                  <p>Total: ${order.total}</p>
                  {/* Aquí puedes agregar más detalles de la orden */}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default OrderMenu;
