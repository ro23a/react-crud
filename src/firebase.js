import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjyfcRVpCZ3cNzS4wDmIRbdu0sPuWkBQc",
  authDomain: "react-crud-4e880.firebaseapp.com",
  projectId: "react-crud-4e880",
  storageBucket: "react-crud-4e880.appspot.com",
  messagingSenderId: "1032372350821",
  appId: "1:1032372350821:web:476bb8034ba15093287b8c",
  measurementId: "G-0ZRMT503TV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);