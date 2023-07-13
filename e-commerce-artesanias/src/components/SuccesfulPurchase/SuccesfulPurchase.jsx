import './succesfulPurchase.scss';
import StarIcon from '@mui/icons-material/Star';

const SuccesfulPurchase = () => {
  return (
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
        Con ella estas aportando al trabajo de los artesanos de Ayapel, quienes
        con sus manos construyen un futuro prometedor para sus familias y para
        la comunidad.
      </h3>
      <h6 className='succesfulPurchase__message2'>
        Tu compra será entregada en las próximas dos o tres semanas, nos
        pondremos en contacto contigo.
      </h6>
    </div>
  );
};

export default SuccesfulPurchase;
