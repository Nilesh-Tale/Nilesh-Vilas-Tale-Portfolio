// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNrX4w0p3p2xu9difYvhhhdGhZ7u0i-Xw",
  authDomain: "nileshtale-portfolio.firebaseapp.com",
  projectId: "nileshtale-portfolio",
  storageBucket: "nileshtale-portfolio.appspot.com",
  messagingSenderId: "118995308908",
  appId: "1:118995308908:web:99a61112a8ee72d93d6349",
  measurementId: "G-EEK5MYGLBW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);