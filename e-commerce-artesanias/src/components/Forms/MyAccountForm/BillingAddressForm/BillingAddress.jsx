import React, { useState } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';
import './BillingAddress.scss';

// Configura tu Firebase
const firebaseConfig = {
  // Aquí van tus datos de configuración de Firebase
};

// Inicializa Firebase
// firebase.initializeApp(firebaseConfig);

const BillingAddress = () => {
  const [user, setUser] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const [firebaseError, setFirebaseError] = useState(false);
  const [formData, setFormData] = useState({
    street: '',
    city: '',
    country: ''
  });

  const handleAddAddress = () => {
    if (user && !firebaseError) {
      // Aquí puedes implementar la lógica para agregar una nueva dirección de facturación a Firebase
      // utilizando los datos en el estado formData
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
          <label htmlFor="street">Calle:</label>
          <input type="text" id="street" name="street" value={formData.street} onChange={handleInputChange} />

          <label htmlFor="city">Ciudad:</label>
          <input type="text" id="city" name="city" value={formData.city} onChange={handleInputChange} />

          <label htmlFor="country">País:</label>
          <input type="text" id="country" name="country" value={formData.country} onChange={handleInputChange} />

          <button type="submit" onClick={handleAddAddress} className='add-address-button'>
            Agregar Dirección de Facturación
          </button>
        </form>
      </div>
    </div>
  );
};

export default BillingAddress;
