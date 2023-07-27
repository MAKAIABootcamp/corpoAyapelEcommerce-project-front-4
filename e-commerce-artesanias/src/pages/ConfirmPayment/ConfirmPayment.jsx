import ButtonPayment from '../../components/ButtonPayment/ButtonPayment';
import artesanos from '../../assets/Images/6.jpg';
import './ConfirmPayment.scss';
import { actionGetCartAsync } from '../../redux/actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const ConfirmPayment = () => {
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

  let amount = 0;
  const message1 = 'Querido ' + user.name + ' estás realizando la compra de ';
  let detail = '';
  cartArray.forEach(producto => {
    amount += producto.quantity * producto.Precio;
    detail += producto.quantity + ' ' + producto.name + ', ';
  });

  console.log(user);

  const formatNumberToCurrency = number => {
    const formattedNumber = new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
    }).format(number);

    return formattedNumber;
  };

  const message =
    message1 +
    detail +
    'por un valor de ' +
    formatNumberToCurrency(amount) +
    '.';
  console.log(message);

  return (
    <main className='confirmPayment'>
      <h1 className='confirmPayment__title'>
        Confirmando este pago estarás apoyando a nuestros artesanos:
      </h1>
      <div className='confirmPayment__container'>
        <figure className='confirmPayment__container--figure'>
          <img src={artesanos} alt='' />
        </figure>
        <section className='confirmPayment__container--infoPayment'>
          <h2>Información de la compra</h2>
          <div>
            <h3>Nombre:</h3>
            <p>{user.name}</p>
          </div>
          <div>
            <h3>Correo electrónico:</h3>
            <p>{user.email}</p>
          </div>{' '}
          <div>
            <h3>Dirección de envío:</h3>
            <p>Calle 61 # 56-51 Medellín, Colombia</p>
          </div>
          <div>
            <h3>Resumen de la compra:</h3>
            <p>{message}</p>
          </div>
          <ButtonPayment />
        </section>
      </div>
    </main>
  );
};

export default ConfirmPayment;
