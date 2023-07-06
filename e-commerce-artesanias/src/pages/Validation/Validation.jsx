import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { auth, google } from "../../Firebase/FirebaseConfig";
import "../../components/Forms/LoginForm/LoginForm.scss";
import {
  loginUserAsync,
  loginUser,
  userLoginProviderAsync,
} from "../../redux/actions/loginActions";
import googleIcon from "../../assets/Icons/google.svg";

function Validation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, user, loading, isLogged } = useSelector(
    (store) => store.login
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitForm = (data) => {
    dispatch(loginUserAsync(data));
  };

  useEffect(() => {
    if (error.status) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
      const err = { status: false, message: "" };
      dispatch(loginUser({}, err));
    }
    if (isLogged && loading === false && error.status === false) {
      if (user.name && user.photo) {
        navigate("/home");
      } else {
        navigate("/register", {
          state: {
            email: auth.currentUser.email,
          },
        });
      }
    }
  }, [error, loading, isLogged]);

  const sesionProvider = (provider) => {
    dispatch(userLoginProviderAsync(provider));
  };

  return (
    <section className="login-page">
      <p className="title">Login</p>
      <form className="formLogin" onSubmit={handleSubmit(onSubmitForm)}>
        <input
          type="text"
          placeholder="username"
          {...register("user", { required: "Ingresa un nombre" })}
        />
        {errors.email && <span className="error">{errors.user.message}</span>}
        <input
          type="text"
          placeholder="email"
          {...register("email", { required: "Ingresa un email" })}
        />
        {errors.email && <span className="error">{errors.email.message}</span>}
        <input
          type="password"
          placeholder="password"
          {...register("password", { required: "Ingresa una contraseña" })}
        />
        {errors.password && (
          <span className="error">{errors.password.message}</span>
        )}
        
        <button className="login-button" type="submit">
          Sing In
        </button>
         <div className="providers">
          <figure
            onClick={() => {
              sesionProvider(google);
            }}
          >
            <img className="icon" src={googleIcon} alt="google" />
          </figure>
        </div>
      </form>
      <Link className="button-register" to="/RegisterForm">
        Register new user
      </Link>
    </section>
  );
}

export default Validation;
