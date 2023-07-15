import { useState, useEffect } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';
import '../../MyAccountForm/ShippingAddressForm/ShippingAddress.scss';

// Configura tu Firebase
const firebaseConfig = {
  // Aquí van tus datos de configuración de Firebase
};

// Inicializa Firebase
// firebase.initializeApp(firebaseConfig);

const ShippingAddress = () => {
  const [user, setUser] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const [firebaseError, setFirebaseError] = useState(false);

  useEffect(() => {
    // Observa los cambios de autenticación
    // const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     setUser(user);
    //     fetchAddresses(user.uid);
    //   } else {
    //     setUser(null);
    //     setAddresses([]);
    //     setFirebaseError(false);
    //   }
    // });

    // Limpia el observador cuando el componente se desmonte
    // return () => unsubscribe();
  }, []);

  const fetchAddresses = async (userId) => {
    try {
      // const snapshot = await firebase.firestore().collection('addresses').where('userId', '==', userId).get();
      // const addressesData = snapshot.docs.map((doc) => doc.data());
      // setAddresses(addressesData);
      // setFirebaseError(false);
    } catch (error) {
      console.error('Error fetching addresses:', error);
      setAddresses([]);
      setFirebaseError(true);
    }
  };

  const handleAddAddress = () => {
    if (user && !firebaseError) {
      // Aquí puedes implementar la lógica para agregar una nueva dirección
    }
  };

  return (
    <div className="shipping-address">
      {(!user || firebaseError) && (
        <div>
          {firebaseError ? (
            <div className="error-message">Error al cargar las direcciones. Inténtalo de nuevo más tarde.</div>
          ) : (
            <div>Inicia sesión para ver las direcciones de envío.</div>
          )}
          <button className="add-address-button" disabled={user && !firebaseError} onClick={handleAddAddress}>
            Agregar Nueva Dirección
          </button>
        </div>
      )}
      {user && !firebaseError && (
        <div>
          <h2>Direcciones de Envío</h2>
          <ul>
            {addresses.map((address) => (
              <li key={address.id}>
                {address.street}, {address.city}, {address.country}
              </li>
            ))}
          </ul>
          <button className="add-address-button" onClick={handleAddAddress}>Agregar Nueva Dirección</button>
        </div>
      )}
    </div>
  );
};

export default ShippingAddress;
