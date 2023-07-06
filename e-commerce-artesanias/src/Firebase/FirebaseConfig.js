import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDUHlItmpcuvT7QxOuUV6v_9a7hR6rl4Dg",
    authDomain: "fir-day-artesanias.firebaseapp.com",
    projectId: "fir-day-artesanias",
    storageBucket: "fir-day-artesanias.appspot.com",
    messagingSenderId: "808157551451",
    appId: "1:808157551451:web:918a7eb204da93d0ab187e",
    measurementId: "G-J9LQQ9Q12H"
  };
  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const google = new GoogleAuthProvider();
export const dataBase = getFirestore(app);