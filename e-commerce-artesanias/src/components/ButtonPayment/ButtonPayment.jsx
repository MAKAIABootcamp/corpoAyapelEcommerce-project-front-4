import { Helmet } from 'react-helmet';
import './ButtonPayment.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { actionGetCartAsync } from '../../redux/actions/cartActions';
import { useState } from 'react';

const ButtonPayment = () => {
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
    <div>
      <Helmet>
        <script src='https://checkout.epayco.co/checkout.js'></script>
      </Helmet>
      <form>
        <button
          className='epayco-button'
          data-epayco-key='2f00a4e8968e3ecd004072f116b571f6'
          data-epayco-amount={amount}
          data-epayco-tax='0.00'
          data-epayco-tax-ico='0.00'
          data-epayco-tax-base='0.00'
          data-epayco-name={user.name}
          data-epayco-description='Compra artesanías'
          data-epayco-currency='cop'
          data-epayco-country='CO'
          data-epayco-test='true'
          data-epayco-external='false'
          data-epayco-response=''
          data-epayco-confirmation=''
          data-epayco-acepted='http://localhost:5173/SuccesfulPurchase'
          data-epayco-button='https://multimedia.epayco.co/dashboard/btns/btn3.png'
          data-epayco-email-billing={user.email}
          data-epayco-name-billing={user.name}
          data-epayco-address-billing={user.billing_address}
        ></button>
      </form>
    </div>
  );
};

export default ButtonPayment;
