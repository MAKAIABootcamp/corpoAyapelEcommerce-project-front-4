import React from 'react';
import NavBar from '../../components/Layout/NavBar/NavBar';
import Bandeja from '../../assets/Images/bandeja.png';
import '../../components/Footer/RefundPolicy.scss';

const RefundPolicy = () => {
  return (
    <>
      <NavBar />
      <section className='Text'>
        <div>
          <h1>Política de reembolso</h1>
        </div>
        <div>
          <img className='img' src={Bandeja} alt='imagen' />
        </div>
        <div class='button'>
          <a href='/'>Inicio</a> &nbsp;/&nbsp;
          <span>Política de reembolso</span>
        </div>
        <div className='section'>
          <p>¡Gracias por comprar en CorpoAyapel Artesanias!</p>
          <p>
            Ofrecemos reembolso y/o cambio dentro de los primeros 8 días desde
            la entrega de tu compra. Si han transcurrido 8 días desde la
            entrega, no se te ofrecerá un reembolso y/o cambio de ningún tipo.
          </p>
          <p>
            <strong>Elegibilidad para reembolsos y cambios</strong>
          </p>
          <ul>
            <li>
                Tu artículo debe estar sin usar y en las mismas condiciones en
                que lo recibió.
            </li>
            <li>
               El artículo debe estar en el embalaje original o similar.
            </li>
            <li>
                Solo se pueden reembolsar los artículos de precio regular; los
                artículos de promoción no se pueden reembolsar.
            </li>
          </ul>
          <p>
            <strong>Cambios</strong> <em>(si es aplicable)</em>
          </p>
          <ul>
            <li> 
              Solo reemplazamos los artículos si están defectuosos o
              dañados. Envíanos un email a comercial@corpoayapel.org
            </li>
          </ul>
          <p>
            <strong>Reembolsos parciales</strong>
            <em>(si es aplicable)</em>
          </p>
          <ul>
            <li>
                Cualquier artículo que no se encuentre en su estado original,
                esté dañado o falte una parte por razones que no se debieron a
                nuestro error tendra una evaluacion de reembolso.
            </li>
            <li>
                Cualquier artículo que se devuelva más de 8 días después de la
                entrega.
            </li>
          </ul>
          <p>
            Una vez que se reciba e inspeccione tu devolución, te enviaremos un
            email para notificarte que hemos recibido tu artículo devuelto.
            También te notificaremos la aprobación o el rechazo de tu reembolso.
          </p>
          <p>
            Si es aprobado, entonces se procesará tu reembolso y se aplicará un
            crédito automáticamente a tu tarjeta de crédito o método de pago
            original, dentro de una cierta cantidad de días.
          </p>
          <p>
            <strong>Reembolsos atrasados o faltantes</strong>
          </p>
          <ul>
            <li>
                Si aún no has recibido un reembolso, primero verifica otra vez
                tu cuenta bancaria. Luego, comunícate con la compañía de tu
                tarjeta de crédito. Puede tomar algún tiempo antes de que se
                publique oficialmente tu reembolso.
            </li>
            <li>
                Si has hecho todo esto y aún no has recibido tu reembolso,
                comunícate con nosotros a comercial@corpoayapel.org.
            </li>
          </ul>
          <p>
            <strong>Envío</strong>
          </p>
          <ul>
            <li>
                Por favor, no devuelvas el producto al fabricante. Ponte en
                contacto con nosostros para tener la direccion de envio.
            </li>
            <li>
                Usted será responsable de pagar sus propios costos de envío para
                devolver su artículo.
            </li>
            <li>
                Los costos de envío no son reembolsables. Si recibes un
                reembolso, el costo del envío de devolución se deducirá de tu
                reembolso.
            </li>
            <li>
                Dependiendo de dónde vivas, el tiempo que tarde tu producto
                cambiado en llegar a ti puede variar.
            </li>
            <li>
                Por favor, nota que no podemos garantizar que recibiremos tu
                artículo devuelto.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default RefundPolicy;
