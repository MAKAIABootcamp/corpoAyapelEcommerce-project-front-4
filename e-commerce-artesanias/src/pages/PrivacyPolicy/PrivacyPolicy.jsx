import React from 'react';
import "../../components/Footer/PrivacyPolicy.scss"
import NavBar from "../../components/Layout/NavBar/NavBar";
import Imagen from "../../assets/Images/matica.png"

const PrivacyPolicy = () => {
  return (
    <>
    <NavBar/>
      <section className='content'>
        <div>
          <h1>Política de privacidad</h1>
        </div>
        <div>
          <img className='image' src={Imagen} alt="matica" />
        </div>
        
        <div class="buton-inicial">
          <a href="/">Inicio</a> &nbsp;/&nbsp;
          <span>Política de privacidad</span>
        </div>
        <div className='section'>
          <p className='paragraph'>
            Esta Política de Privacidad describe cómo se recopila, utiliza y
            comparte tu información personal cuando visitas o realizas una
            compra en{' '}
            <a href='https://corpoayapelartesanias.com'>
              https://corpoayapelartesanias.com
            </a>
            .
          </p>
          <p className='paragraph'>
            <strong>QUÉ INFORMACIÓN PERSONAL RECOPILAMOS</strong>
          </p>
          <p className='paragraph'>
            Cuando visitas el Sitio, recopilamos automáticamente cierta
            información sobre tu dispositivo, incluida información sobre tu
            navegador web, dirección IP, zona horaria y algunas de las cookies
            que están instaladas en tu dispositivo.
          </p>
          <p className='paragraph'>
            Además, a medida que navegas por el Sitio, recopilamos información
            sobre las páginas web individuales o los productos que ves, qué
            sitios web o términos de búsqueda te remiten al Sitio, e información
            sobre cómo interactúas con el Sitio. Nos referimos a esta
            información recopilada automáticamente como{' '}
            <strong>Información del Dispositivo</strong> (device information).
          </p>
          <p className='paragraph'>
            Recopilamos información del dispositivo utilizando las siguientes
            tecnologías:
          </p>
          <ul>
            <li>
              <p className='paragraph'>
                <strong>Cookies</strong>: son archivos de datos que se colocan
                en tu dispositivo o computadora y con frecuencia incluyen un
                identificador único anónimo.
              </p>
            </li>
            <li>
              <p className='paragraph'>
                <strong>Archivos de registro</strong>: rastrean las acciones que
                ocurren en el Sitio y recopilan datos, incluida tu dirección IP,
                el tipo de navegador, el proveedor de servicios de Internet, las
                páginas de referencia/salida y las marcas de fecha y hora.
              </p>
            </li>
          </ul>
          <p className='paragraph'>
            <em>
              Menciona todas las demás herramientas de seguimiento y/o
              tecnologías que usa tu sitio web.
            </em>
          </p>
          <p className='paragraph'>
            Además, cuando efectúas una compra o intentas realizar una compra a
            través del Sitio, recopilamos cierta información tuya, como tu
            nombre, dirección de facturación, dirección de envío, información de
            pago, incluidos números de tarjetas de crédito (
            <strong>menciona todos los tipos de pagos aceptados</strong>),
            dirección de email y el número de teléfono. Esto se denomina{' '}
            <strong>Información del Pedido</strong>.
          </p>
          <p className='paragraph'>
            <em>Asegúrate de mencionar toda otra información que recopiles.</em>
          </p>
          <p className='paragraph'>
            Al referirnos a <strong>Información Personal</strong> en esta
            Política de Privacidad, estamos hablando tanto de la Información del
            Dispositivo como de la Información del Pedido.
          </p>
          <p className='paragraph'>
            <strong>CÓMO USAMOS TU INFORMACIÓN PERSONAL</strong>
          </p>
          <p className='paragraph'>
            Utilizamos la Información de Pedido que recopilamos por lo general
            para cumplir con los pedidos realizados a través del Sitio (incluido
            el procesamiento de tu información de pago, la organización del
            envío y el envío de facturas y/o confirmaciones de pedidos).
          </p>
          <p className='paragraph'>
            Además, usamos esta Información del Pedido para: comunicarnos
            contigo, examinar nuestros pedidos para detectar posibles riesgos o
            fraudes, para (en línea con las preferencias que has compartido con
            nosotros) ofrecerte información o publicidad relacionada con
            nuestros productos o servicios.
          </p>
          <p className='paragraph'>
            Utilizamos la Información del Dispositivo que recopilamos para
            ayudarnos a detectar posibles riesgos y fraudes (en particular, tu
            dirección IP) y, en general, para mejorar y optimizar nuestro sitio.
          </p>
          <p className='paragraph'>
            <strong>COMPARTIENDO TU INFORMACIÓN PERSONAL</strong>{' '}
          </p>
          <p className='paragraph'>
            Compartimos tu Información Personal con terceros para ayudarnos a
            utilizarla como se describió anteriormente.
          </p>
          <p className='paragraph'>
            También empleamos Google Analytics para ayudarnos a comprender cómo
            nuestros clientes usan CorpoAyapel Artesanias.{' '}
            <a
              href='https://www.google.com/intl/en/policies/privacy/'
              onmousedown="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Links Externos', 'eventAct': 'Click', 'eventLbl': 'www.google.com/intl/en/policies/privacy/', 'eventVal': 0});"
            >
              Cómo usa Google tu Información Personal.
            </a>
            .
          </p>
          <p className='paragraph'>
            Finalmente, también podemos compartir tu Información Personal para
            cumplir con las leyes y regulaciones aplicables, para responder a
            una citación, una orden de registro u otras solicitudes legales de
            información que recibimos, o para proteger nuestros derechos.
          </p>
          <p className='paragraph'>
            <strong>PUBLICIDAD DE COMPORTAMIENTO</strong>
          </p>
          <p className='paragraph'>
            Utilizamos tu Información Personal para proporcionarte anuncios
            específicos o comunicaciones de marketing que creemos que pueden ser
            de tu interés.
          </p>
          <p className='paragraph'>
            <em>
              Menciona los enlaces opt-out de servicios externos, tales como:
            </em>
          </p>
          <ul>
            <li>
              <a
                href='https://www.facebook.com/settings/?tab=ads'
                onmousedown="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Links Externos', 'eventAct': 'Click', 'eventLbl': 'www.facebook.com/settings/?tab=ads', 'eventVal': 0});"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href='https://www.google.com/settings/ads/anonymous'
                onmousedown="dataLayer.push({'event': 'eventTracker', 'eventCat': 'Links Externos', 'eventAct': 'Click', 'eventLbl': 'www.google.com/settings/ads/anonymous', 'eventVal': 0});"
              >
                Google
              </a>{' '}
            </li>
          </ul>
          <p className='paragraph'>Puedes inhabilitar la publicidad dirigida...</p>
          <p>
            <strong>TUS DERECHOS</strong>
          </p>
          <p className='paragraph'>
            Si eres un residente europeo, tienes derecho a acceder a la
            información personal que tenemos sobre ti y a solicitar que tu
            información personal se corrija, actualice o elimine. Si deseas
            ejercer este derecho, por favor contáctanos.
          </p>
          <p className='paragraph'>
            Además, si eres un residente europeo, notamos que estamos procesando
            tu información para cumplir con los contratos que podríamos tener
            contigo (por ejemplo, si realizas un pedido a través del Sitio), o
            de otra manera para perseguir nuestros intereses comerciales
            legítimos mencionados anteriormente.
          </p>
          <p className='paragraph'>
            Ten en cuenta que tu información se transferirá fuera de Europa,
            incluso a Canadá y Estados Unidos.
          </p>
          <p className='paragraph'>
            <strong>RETENCIÓN DE DATOS</strong>
          </p>
          <p className='paragraph'>
            Cuando realices un pedido a través del Sitio, mantendremos tu
            Información de Pedido para nuestros registros a menos que y hasta
            que nos solicites eliminar esta información.
          </p>
          <p className='paragraph'>
            <strong>MENORES</strong>
          </p>
          <p className='paragraph'>
            El Sitio no está destinado a personas menores de edad (EDAD
            CLARAMENTE MENCIONADA).
          </p>
          <p className='paragraph'>
            <strong>CAMBIOS</strong>
            Podemos actualizar esta política de privacidad de vez en cuando para
            reflejar, por ejemplo, cambios en nuestras prácticas o por otras
            razones operativas, legales o reglamentarias.
          </p>
          <p className='paragraph'>
            Si tiene preguntas y/o necesitas más información, no dudes en
            ponerte en contacto con nosotros (
            <strong>Agrega información de contacto relevante</strong>).
          </p>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
