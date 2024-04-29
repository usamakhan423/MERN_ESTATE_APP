// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-6abcd.firebaseapp.com",
  projectId: "mern-estate-6abcd",
  storageBucket: "mern-estate-6abcd.appspot.com",
  messagingSenderId: "349273453979",
  appId: "1:349273453979:web:96536be099d1621f345d3e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
