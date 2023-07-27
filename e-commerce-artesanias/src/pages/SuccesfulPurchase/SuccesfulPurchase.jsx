import { useDispatch, useSelector } from 'react-redux';
import { actionGetCartAsync } from '../../redux/actions/cartActions';
import './succesfulPurchase.scss';
import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react';
import { useEffect } from 'react';

const SuccesfulPurchase = () => {
  const dispatch = useDispatch();
  const [cartArray, setCartArray] = useState([]);
  const { user } = useSelector(store => store.login);
  const { products } = useSelector(store => store.productStore);

  useEffect(() => {
    if (user.uid) {
      dispatch(actionGetCartAsync(user.uid));
    }
    if (user.car_products && user.car_products.length > 0) {
      let productsSaveCar = [];
      user.car_products.map(productCar => {
        const getProduct = products.find(
          item => item._id == productCar.productId
        );
        productsSaveCar.push({ ...productCar, ...getProduct });
      });
      setCartArray(productsSaveCar);
    }
  }, [user]);

  console.log(user);

  let amount = 0;
  const message1 = 'Querido ' + user.name + ' realizaste la compra de ';
  let detail = '';
  cartArray.forEach(producto => {
    amount += producto.quantity * producto.Precio;
    detail += producto.quantity + ' ' + producto.name + ' ';
  });

  const formatNumberToCurrency = number => {
    const formattedNumber = new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
    }).format(number);

    return formattedNumber;
  };

  const message =
    message1 + detail + 'por un valor de ' + formatNumberToCurrency(amount);
  console.log(message);

  return (
    <section className='pagePurchase'>
      <div className='succesfulPurchase'>
        <h1 className='succesfulPurchase__title'>¡GRACIAS POR TU COMPRA!</h1>
        <div className='succesfulPurchase__stars'>
          <StarIcon className='succesfulPurchase__stars--star' />
          <StarIcon className='succesfulPurchase__stars--star' />
          <StarIcon className='succesfulPurchase__stars--star' />
          <StarIcon className='succesfulPurchase__stars--star' />
          <StarIcon className='succesfulPurchase__stars--star' />
        </div>
        <h3 className='succesfulPurchase__message1'>
          Con ella estas aportando al trabajo de los artesanos de Ayapel,
          quienes con sus manos construyen un futuro prometedor para sus
          familias y para la comunidad.
        </h3>
        <h4 className='succesfulPurchase__message2'>
          Resumen de la compra: {message}.
        </h4>
        <h6 className='succesfulPurchase__message3'>
          Tu compra será entregada en las próximas dos o tres semanas, nos
          pondremos en contacto contigo.
        </h6>
      </div>
    </section>
  );
};

export default SuccesfulPurchase;
