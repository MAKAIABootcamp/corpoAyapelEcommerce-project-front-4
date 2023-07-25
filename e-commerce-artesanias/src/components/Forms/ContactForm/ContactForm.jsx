import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import './ContactForm.scss';
import Swal from 'sweetalert2';

export const ContactForm = () => {
  const navigate = useNavigate();
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_lrqpcqv',
        'template_t1yf5kn',
        form.current,
        'QCWdUitQlMxIchViW'
      )
      .then(
        result => {
          console.log(result.text);
          Swal.fire({
            icon: 'success',
            title: 'Genial',
            text: 'Tu comentario fue enviado de forma correcta.!',
            confirmButtonText: 'OK',
          }).then(() => {
            navigate('/');
          });
        },
        error => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className='contactPage'>
      <form className='contactPage__form' ref={form} onSubmit={sendEmail}>
        <h1>Contáctanos</h1>
        <div className='inputsInfo'>
          <label className='input-form'>
            <input
              className={`text-field`}
              type='text'
              placeholder='Nombre de usuario'
              name='user_name'
            />
          </label>
          <label className='input-form'>
            <input
              className={`text-field`}
              type='text'
              placeholder='Correo'
              name='user_email'
            />
          </label>
          <label className='input-form'>
            <input
              className={`text-field`}
              type='text'
              placeholder='Número de celular'
              name='user_cellphone'
            />
          </label>
        </div>
        <div className='containerComment'>
          <label className='input-form'>
            <textarea
              className={`text-field comment`}
              type='text'
              placeholder='Escribe tu comentario'
              name='message'
            />
          </label>
        </div>
        <button className='save-data-user' type='submit' value='Send'>
          Enviar
        </button>
      </form>
    </section>
  );
};
