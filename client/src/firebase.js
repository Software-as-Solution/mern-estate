// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-3978b.firebaseapp.com",
  projectId: "mern-estate-3978b",
  storageBucket: "mern-estate-3978b.appspot.com",
  messagingSenderId: "231811358928",
  appId: "1:231811358928:web:0943522d5b6f0e9a33fed5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
