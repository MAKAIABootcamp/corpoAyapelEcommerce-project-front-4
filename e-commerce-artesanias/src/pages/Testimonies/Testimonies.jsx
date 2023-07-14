import NavBar from '../../components/Layout/NavBar/NavBar';

const Testimonies = () => {
  return (
    <div>
      <NavBar />
      <main>
        <h1>Nuestros Artesanos</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla veniam
          quidem distinctio natus nisi voluptatibus architecto recusandae omnis
          quam, repellendus dignissimos nemo eius magni soluta fuga est quas
          blanditiis doloremque.
        </p>
        <section>
          <div>
            <h2>Conoce nuestras historias en nuestro Instagram</h2>
            <figure>
              <img src='' alt='Logo Instagram' />
            </figure>
          </div>
          <div>
            <figure>
              <img src='' alt='Cards Fotos de artesanos' />
            </figure>
            <div>
              <div>
                <figure>
                  <img src='' alt='Flecha izquierda' />
                </figure>
                <figure>
                  <img src='' alt='Flecha derecha' />
                </figure>
              </div>
              <button>Conócelos aquí</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Testimonies;
