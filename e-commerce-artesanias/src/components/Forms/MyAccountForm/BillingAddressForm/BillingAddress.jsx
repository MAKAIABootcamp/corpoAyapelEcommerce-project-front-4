import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { createBillingAddressActionsAsync } from "../../../../redux/actions/billingAddressActions";
import './BillingAddress.scss';
import Swal from 'sweetalert2';

const initialValue= {
  name: '',
  lastname: '',
  address: '',
  city: '',
  code: '',
  country:'',
  identification: '',
  number: '',
  email: '',
}

const BillingAddress = () => {
  const dispatch = useDispatch();
  const [addresses, setAddresses] = useState([]);
  const { user } = useSelector((store) => store.login);
  const [formData, setFormData] = useState(initialValue);

  const handleAddAddress = (event) => {
    event.preventDefault();
    const validation = true;
    if(validation){
      dispatch(createBillingAddressActionsAsync(formData)).then(data=>{
        setFormData(initialValue)
        Swal.fire({
            icon: 'success',
            title: 'Genial',
            text: 'Tus datos se guardaron exitosamente!',
            confirmButtonText: 'ok',
        })
    })
    }
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className="billing-address">
      {/* {(!user || firebaseError) && (
        <div>
          {firebaseError ? (
            <div className="error-message">Error al cargar las direcciones. Inténtalo de nuevo más tarde.</div>
          ) : (
            <div>Inicia sesión para ver las direcciones de facturación.</div>
          )}
          <button className="add-address-button" disabled={user && !firebaseError} onClick={handleAddAddress}>
            Agregar Nueva Dirección de Facturación
          </button>
        </div>
      )} */}
      <h2>Direcciones de Facturación</h2>
      <ul>
        {addresses.map((address) => (
          <li key={address.id}>
            {address.street}, {address.city}, {address.country}
          </li>
        ))}
      </ul>
      <div className="add-address-form">
        <h3>Agregar Nueva Dirección de Facturación</h3>
        <form>
        <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />

          <label htmlFor="lastname">Apellido:</label>
          <input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleInputChange} />

          <label htmlFor="address">Dirección:</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} />

          <label htmlFor="city">Ciudad:</label>
          <input type="text" id="city" name="city" value={formData.city} onChange={handleInputChange} />

          <label htmlFor="code">Código Postal:</label>
          <input type="text" id="code" name="code" value={formData.code} onChange={handleInputChange} />

          <label htmlFor="country">País:</label>
          <input type="text" id="country" name="country" value={formData.country} onChange={handleInputChange} />

          <label htmlFor="identification">Cédula:</label>
          <input type="text" id="identification" name="identification" value={formData.identification} onChange={handleInputChange} />

          <label htmlFor="number">Celular:</label>
          <input type="text" id="number" name="number" value={formData.number} onChange={handleInputChange} />

          <label htmlFor="email">Correo electrónico:</label>
          <input type="text" id="email" name="email" value={formData.email}  onChange={handleInputChange} />

          <button type="submit" onClick={handleAddAddress} className='add-address-button'>
            Agregar Dirección de Facturación
          </button>
        </form>
      </div>
    </div>
  );
};

export default BillingAddress;
