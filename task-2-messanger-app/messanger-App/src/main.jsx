import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQKxXziK3k40ojRCtXSWaVUIEVIGSreNc",
  authDomain: "react-messanger-app-4cdf7.firebaseapp.com",
  databaseURL: "https://react-messanger-app-4cdf7-default-rtdb.firebaseio.com",
  projectId: "react-messanger-app-4cdf7",
  storageBucket: "react-messanger-app-4cdf7.appspot.com",
  messagingSenderId: "540974558919",
  appId: "1:540974558919:web:23666fe8fea9714ac598e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
