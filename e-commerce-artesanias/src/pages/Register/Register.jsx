import React, { useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import Swal from "sweetalert2";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { userCreateAsync } from '../../redux/actions/loginActions'
import '../../components/Forms/RegisterForm/RegisterForm.scss'

const Register = () => {
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
      <h1>Nuevo Usuario</h1>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <label className='input-form' >
          <input 
            className={`text-field ${errors.name ? 'border-red' : ''}`} 
            type="text" 
            placeholder='Nombre de usuario'
            {...register('name', { required: 'Nombre requerido' })} 
          />
           {errors.name ? <span className='text-red'>{errors.name.message}</span> : <></>}
        </label>
        
        <label className='input-form' >
          <input 
             className={`text-field ${errors.email ? 'border-red' : ''}`} 
             type="text"
             placeholder='Correo'
            {...register('email', { required: 'Email es requerido', validate:validateEmail })} 
          />
          {errors.email ? <span className='text-red'>{errors.email.message}</span> : <></>}
        </label>
        
        <label className='input-form'>
          <input 
            className={`text-field ${errors.password ? 'border-red' : ''}`}
            type="password" 
            placeholder='Contraseña'
            {...register('password', { required: 'Contraseña requerida' })}
          />
          {errors.password ? <span className='text-red'>{errors.password.message}</span> : <></>}
        </label>
        
        <NavLink className='signIn' to='/Login'>Sign In</NavLink>
        <button className='save-data-user' disabled={loading} type='submit'>Registrarme</button>
      </form>
      {error.status ? <span className='text-red'>{error.message}</span> : <></>}
    </section>
  );
};

export default Register;
