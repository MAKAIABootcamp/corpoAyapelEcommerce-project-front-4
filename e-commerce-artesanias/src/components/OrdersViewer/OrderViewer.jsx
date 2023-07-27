import React from 'react';
import "./OrderViewer.scss"

// Fake data for orders mockup in Spanish
const fakeOrders = [
  {
    id: '1',
    user: 'Juan Pérez',
    product: 'Widget A',
    quantity: 2,
    totalPrice: 20.0,
    status: 'Pendiente', // "Pending" in Spanish
    shippingAddress: 'Calle Principal, 123, Ciudad, País', // Dirección de envío
    billingAddress: 'Apartado Postal 456, Ciudad, País', // Dirección de facturación
  },
  {
    id: '2',
    user: 'María Gómez',
    product: 'Widget B',
    quantity: 1,
    totalPrice: 15.0,
    status: 'Enviado', // "Shipped" in Spanish
    shippingAddress: 'Avenida Secundaria, 789, Otra Ciudad, País', // Dirección de envío
    billingAddress: 'Calle Comercial, 10, Otra Ciudad, País', // Dirección de facturación
  },
  // Add more fake orders as needed...
];
const OrderViewer = () => {
  const fetchOrdersFromFirebase = () => {
    return Promise.resolve(fakeOrders);
  };

  const [orders, setOrders] = React.useState([]);

  React.useEffect(() => {
    fetchOrdersFromFirebase().then((data) => setOrders(data));
  }, []);

  const handleStatusChange = (orderId, newStatus) => {
    // Update the status of the selected order
    const updatedOrders = orders.map((order) => {
      if (order.id === orderId) {
        return { ...order, status: newStatus };
      }
      return order;
    });

    // Update the state with the modified orders
    setOrders(updatedOrders);
  };

  return (
    <div className="order-viewer-container">
      <h2 className="order-heading">Órdenes</h2>
      <p>En este visor de ordenes podras ver las ordenes de todos los usuarios y marcar si esta fue enviada o no, recuerda revisar el estado del pago antes de generar cualquier guia de envio</p>
      {orders.length === 0 ? (
        <p className="no-orders">No hay órdenes disponibles.</p>
      ) : (
        <ul className="order-list">
          {orders.map((order) => (
            <li key={order.id} className="order-item">
              <strong className="order-label">Usuario:</strong> {order.user} | {' '}
              <strong className="order-label">Producto:</strong> {order.product} | {' '}
              <strong className="order-label">Cantidad:</strong> {order.quantity} | {' '}
              <strong className="order-label">Precio Total:</strong> {order.totalPrice} | {' '}
              <strong className="order-label">Estado:</strong> {order.status} | {' '}
              <span className="shipping-address">{order.shippingAddress}</span> | {' '}
              <span className="billing-address">{order.billingAddress}</span>
              <div className="status-buttons">
                {order.status === 'Pendiente' ? (
                  <button
                    className="status-button"
                    onClick={() => handleStatusChange(order.id, 'Enviado')}
                  >
                    Marcar como Enviado
                  </button>
                ) : (
                  <button
                    className="status-button"
                    onClick={() => handleStatusChange(order.id, 'Pendiente')}
                  >
                    Marcar como Pendiente de Envío
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderViewer;