// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaKfrEJ5f_fp8XoIewrrVb-JaOiv2zxBs",
  authDomain: "ondc-login.firebaseapp.com",
  projectId: "ondc-login",
  storageBucket: "ondc-login.appspot.com",
  messagingSenderId: "462614404121",
  appId: "1:462614404121:web:ef9670bf7123bc28111e88",
  measurementId: "G-TQ3MH30GS5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);