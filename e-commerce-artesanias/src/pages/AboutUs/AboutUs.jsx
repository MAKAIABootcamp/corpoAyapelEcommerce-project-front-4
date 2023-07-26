import './AboutUs.scss';
import Banner from '../../components/Banner/Banner';

const AboutUs = () => {
  return (
    <div className='aboutUs'>
      <main className='mainAboutUs'>
        <Banner />
        <section className='mainAboutUs__information'>
          <p className='mainAboutUs__information--text'>
            Nosotros somos CorpoAyapel, una entidad sin ánimo de lucro que
            promueve el desarrollo sostenible del complejo cenagoso de Ayapel y
            de su comunidad. Trabajamos bajo tres líneas estratégicas: social,
            ambiental y económica. Dentro de nuestra línea socio- económica se
            encuentra el proyecto de artesanías.
          </p>
          <p className='mainAboutUs__information--text'>
            Desde hace más de 10 años estamos formando capacidades para que los
            habitantes de Ayapel tengan una segunda oportunidad y una fuente de
            ingresos digna, alejada de la minería ilegal.
          </p>
          <p className='mainAboutUs__information--text'>
            Promovemos la autenticidad y dignidad de la comunidad de artesanos.
            En la pagina de nuestra corporación puedes informarte sobre nuestros
            otros proyectos.
          </p>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
