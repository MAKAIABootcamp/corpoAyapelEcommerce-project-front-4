import './OrderViewer.scss'; // Import the SCSS file


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
  // Replace this with the actual function to fetch orders from Firebase
  const fetchOrdersFromFirebase = () => {
    // Simulate API call or Firebase query here
    return Promise.resolve(fakeOrders);
  };

  const [orders, setOrders] = React.useState([]);

  React.useEffect(() => {
    // Fetch orders when the component mounts
    fetchOrdersFromFirebase().then((data) => setOrders(data));
  }, []);

  return (
    <div>
      <h2>Órdenes</h2> {/* Orders in Spanish */}
      {orders.length === 0 ? (
        <p>No hay órdenes disponibles.</p> 
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <strong>Usuario:</strong> {order.user} | <strong>Producto:</strong> {order.product} |{' '}
              <strong>Cantidad:</strong> {order.quantity} | <strong>Precio Total:</strong>{' '}
              {order.totalPrice} | <strong>Estado:</strong> {order.status} |{' '}
              <strong>Dirección de Envío:</strong> {order.shippingAddress} |{' '}
              <strong>Dirección de Facturación:</strong> {order.billingAddress}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderViewer;
