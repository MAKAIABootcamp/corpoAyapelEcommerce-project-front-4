import ButtonPayment from '../../components/ButtonPayment/ButtonPayment';
import artesanos from '../../assets/Images/6.jpg';
import './ConfirmPayment.scss';

const ConfirmPayment = () => {
  return (
    <main className='confirmPayment'>
      <h1 className='confirmPayment__title'>
        Confirmando este pago estarás apoyando a nuestros artesanos:
      </h1>
      <div className='confirmPayment__container'>
        <figure className='confirmPayment__container--figure'>
          <img src={artesanos} alt='' />
        </figure>
        <ButtonPayment />
      </div>
    </main>
  );
};

export default ConfirmPayment;
