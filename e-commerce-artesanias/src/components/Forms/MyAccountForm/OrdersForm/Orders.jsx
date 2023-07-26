import React,  { useState, useEffect }  from 'react';
import { useSelector, useDispatch } from "react-redux";
import Table from 'react-bootstrap/Table';
import { numberToMoney } from '../../../../Services/utilities';
import { urlFor } from '../../../../sanityClient';
import { actionGetCartAsync, actionPostCartAsync } from "../../../../redux/actions/cartActions";
import './Orders.scss';

const OrderMenu = () => {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartArray, setCartArray] = useState([]);

  const { user } = useSelector((store) => store.login);
  const { products } = useSelector((store) => store.productStore);   
  // Aquí puedes implementar la lógica para obtener las órdenes del usuario desde Firebase
  // y establecerlas en el estado "orders"

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(()=>{
    if(user.uid){
      dispatch(actionGetCartAsync(user.uid))
    }
    if (user.car_products && user.car_products.length>0) {
      let productsSaveCar=[]
      user.car_products.map(productCar=>{
        const getProduct = products.find(item => item._id == productCar.productId);
        productsSaveCar.push({...productCar,...getProduct})
      })
      setCartArray(productsSaveCar)
    }
  }, [user])

  const calculateProductTotal = product => {
    return Number(product.Precio) * product.quantity;
  };

  const onRemovingToCart = productId => {
    const updatedCart = [...cartArray];
    const IndexItem = updatedCart.findIndex(item => item._id === productId)
    if(IndexItem > -1){
      updatedCart.splice(IndexItem, 1);
    }
    setCartArray(updatedCart);
    const selectedProductCar = user.car_products.find(
      product => product.productId === productId
    );
    dispatch(actionPostCartAsync(selectedProductCar, user, true))

  };

  return (
    <div className="order-menu-container">
      <button className="toggle-button" onClick={toggleMenu}>
        Ver Órdenes
      </button>
      {isMenuOpen && (
        <div className="menu-content">
          {cartArray.length === 0 ? (
            <div>No hay órdenes disponibles.</div>
          ) : (
            <Table className='table'>
              <thead className='table__head'>
                <tr>
                  <th>Foto</th>
                  <th>Precio unitario</th>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Total</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {cartArray.map((product, index) => (
                  <tr key={index}>
                    <td className='nameImageColumn'>
                      <img
                        className='productImage'
                        src={urlFor(product[`image${1}`].asset._ref).url()}
                        alt={product.name}
                      />
                    </td>
                    <td> {numberToMoney(product.Precio)} </td>
                    <td> {product.name} </td>
                    <td>{product.quantity}</td>
                    <td>$ {calculateProductTotal(product) || product.Precio}</td>
                    <td>
                      <button type="button" onClick={() => onRemovingToCart(product._id)}>
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </div>
      )}
    </div>
  );
};

export default OrderMenu;
