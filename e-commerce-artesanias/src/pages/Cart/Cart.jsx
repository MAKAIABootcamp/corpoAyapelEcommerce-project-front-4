import { useNavigate } from "react-router-dom";
import CartCards from "../../components/Cards/CartCards/CartCards";

const Cart = () => {
  const navigate = useNavigate();
  return <div>
    <h2>Carrito</h2>
    <h4 onClick={() => navigate(`/`)}>Apoyanos con más productos</h4>
    <table>
    <CartCards/>
    </table>
  </div>;
};

export default Cart;
