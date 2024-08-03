// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB2CJ7qELp7YeybtbptOpy5cv_Osy4W6A",
  authDomain: "basketball-stats-89960.firebaseapp.com",
  projectId: "basketball-stats-89960",
  storageBucket: "basketball-stats-89960.appspot.com",
  messagingSenderId: "55158749229",
  appId: "1:55158749229:web:7868f78cdfef4c5fd520a4",
  measurementId: "G-VSV0H1Y7FB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getAnalytics(app);

export { db, collection, addDoc };
