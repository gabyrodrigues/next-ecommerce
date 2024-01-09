// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACKz6U3f82vgCPQGBW3ZoOZBVdpPAh2Xg",
  authDomain: "next-ecommerce-2fa59.firebaseapp.com",
  projectId: "next-ecommerce-2fa59",
  storageBucket: "next-ecommerce-2fa59.appspot.com",
  messagingSenderId: "803600880996",
  appId: "1:803600880996:web:822c0cdae65be024989671"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { app, db, auth };
