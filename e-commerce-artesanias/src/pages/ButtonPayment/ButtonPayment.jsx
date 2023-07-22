import { Helmet } from 'react-helmet';
import './ButtonPayment.scss';

const ButtonPayment = () => {
  /* Acá necesito constantes con la información de la compra */
  const amount = 10000; // valor de la compra
  const detail = ''; // detalle de la compra

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
          data-epayco-tax-base={amount}
          data-epayco-name='Compra artesanías'
          data-epayco-description={detail}
          data-epayco-currency='cop'
          data-epayco-country='CO'
          data-epayco-test='true'
          data-epayco-external='false'
          data-epayco-response=''
          data-epayco-confirmation=''
          data-epayco-acepted='http://localhost:5173/SuccesfulPurchase'
          data-epayco-button='https://multimedia.epayco.co/dashboard/btns/btn3.png'
        ></button>
      </form>
    </div>
  );
};

export default ButtonPayment;
