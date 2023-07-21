import React, { useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import Swal from "sweetalert2";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import './ContactForm.scss'

const ContactForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch()
  const { error, loading, isLogged, user } = useSelector((state) => state.login)

  const { register , handleSubmit, formState: { errors } } = useForm();

  const validateEmail= (value) =>{
    const re = /\S+@\S+\.\S+/;
    if (!re.test(value)) {
      return 'Email invalid'
    }
    return true
  }
  const onSubmit = async  (data) => {
    dispatch(userCreateAsync({...data}))
  }


  useEffect(()=>{
    if(error.status){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message
      })
    }
    if (isLogged && loading=== false && error.status === false){
      if (user.name) {
        navigate("/");
      }
    }
    
  },[error, loading, isLogged])

  return (
    <section className="register-page">
      <h1>Contáctanos</h1>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <label className='input-form' >
          <input 
            className={`text-field ${errors.name ? 'border-red' : ''}`} 
            type="text" 
            placeholder='Nombre de usuario'
            {...register('name', { required: 'Nombre requerido' })} 
          />
        </label>
        {errors.name ? <span className='text-red'>{errors.name.message}</span> : <></>}
        
        <label className='input-form' >
          <input 
             className={`text-field ${errors.email ? 'border-red' : ''}`} 
             type="text"
             placeholder='Correo'
            {...register('email', { required: 'Email es requerido', validate:validateEmail })} 
          />
        </label>
        {errors.email ? <span className='text-red'>{errors.email.message}</span> : <></>}
        <label className='input-form'>
          <input 
            className={`text-field ${errors.password ? 'border-red' : ''}`}
            type="password" 
            placeholder='Contraseña'
            {...register('password', { required: 'Contraseña requerida' })}
          />
        </label>
        {errors.password ? <span className='text-red'>{errors.password.message}</span> : <></>}
        <label className='input-form'>
          <input 
            className={`text-field ${errors.password ? 'border-red' : ''}`}
            type="password" 
            placeholder='Comentario'
            {...register('password', { required: 'Contraseña requerida' })}
          />
        </label>
        <button className='save-data-user' disabled={loading} type='submit'>Enviar</button>
      </form>
      {error.status ? <span className='text-red'>{error.message}</span> : <></>}
    </section>
  );
};

export default ContactForm;

