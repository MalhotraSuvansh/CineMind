// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBz2gXDFFFWbPgkFQBJOX7V-1Ii-a93iyI",
  authDomain: "cinemind-89c37.firebaseapp.com",
  projectId: "cinemind-89c37",
  storageBucket: "cinemind-89c37.firebasestorage.app",
  messagingSenderId: "183570448146",
  appId: "1:183570448146:web:74f7f745cd622b65d63dcb",
  measurementId: "G-JT3FJE8EJT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
