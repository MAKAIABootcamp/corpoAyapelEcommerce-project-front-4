import BannerTestimonies from '../../components/BannerTestimonies/BannerTestimonies';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Testimonies.scss';

const Testimonies = () => {
  const handleNavegateInstagram = () => {
    window.open('https://www.instagram.com/corpoayapelartesanias/', '_blank');
  };
  return (
    <main className='mainTestimonies'>
      <h1 className='mainTestimonies__title'>Nuestros Artesanos</h1>
      <section className='mainTestimonies__texts'>
        <p className='mainTestimonies__texts--info'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla veniam
          quidem distinctio natus nisi voluptatibus architecto recusandae omnis
          quam, repellendus dignissimos nemo eius magni soluta fuga est quas
          blanditiis doloremque.
        </p>
        <p className='mainTestimonies__texts--info info2'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla veniam
          quidem distinctio natus nisi voluptatibus architecto recusandae omnis
          quam, repellendus dignissimos nemo eius magni soluta fuga est quas
          blanditiis doloremque.
        </p>
      </section>
      <section className='mainTestimonies__images'>
        <div className='mainTestimonies__images--socialMedia'>
          <h2>Conoce nuestras historias en nuestro Instagram.</h2>
          <InstagramIcon
            className='instagramIcon'
            onClick={() => handleNavegateInstagram()}
          />
        </div>
        <BannerTestimonies />
      </section>
    </main>
  );
};

export default Testimonies;
