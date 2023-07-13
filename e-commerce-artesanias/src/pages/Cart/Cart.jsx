import { useNavigate } from "react-router-dom";
import CartCards from "../../components/Cards/CartCards/CartCards";
import "./Cart.scss"
import Table from 'react-bootstrap/Table';
const Cart = () => {
  const navigate = useNavigate();
  return <div className="cartContainer">
    <h2>Carrito</h2>
    <h4 onClick={() => navigate(`/`)}>Apoyanos con más productos</h4>
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    <CartCards/>
  </div>;
};

export default Cart;
