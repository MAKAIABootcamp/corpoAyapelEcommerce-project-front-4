import { useState } from 'react';
import './Orders.scss';

const OrderMenu = () => {
  const [orders, setOrders] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Aquí puedes implementar la lógica para obtener las órdenes del usuario desde Firebase
  // y establecerlas en el estado "orders"

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
