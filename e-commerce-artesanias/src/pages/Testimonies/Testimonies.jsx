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
          Por eso estamos tan orgullosos de este proyecto. Porque hemos visto
          como ha transformado la comunidad, porque con la utilidad podemos
          seguir con nuestros proyecto y porque cada vexz que visitamos las
          casas de nuestros artesanos nos enorgullecemos de sus logros
        </p>
        <p className='mainTestimonies__texts--info info2'>
          A través de las artesanías no solo ayudas a un artesano/a a generar
          ingresos sino también a mejorar su calidad de vida para el/ella y toda
          su familia.
        </p>
      </section>
      <section className='mainTestimonies__images'>
        <div className='mainTestimonies__images--socialMedia'>
          <h2>Descubre nuestras inspiradoras historias en Instagram.</h2>
          <InstagramIcon
            className='instagramIcon'
            onClick={() => handleNavegateInstagram()}
          />
        </div>
        <BannerTestimonies className='bannerTestimonies' />
      </section>
    </main>
  );
};

export default Testimonies;
