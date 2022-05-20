import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCXomr8yECxgrcNlI8OwEkEQv_Z9iK6jcE",
  authDomain: "react-giordano.firebaseapp.com",
  projectId: "react-giordano",
  storageBucket: "react-giordano.appspot.com",
  messagingSenderId: "173342717138",
  appId: "1:173342717138:web:357da37f7e6b1e15a7290b",
  measurementId: "G-3N2YD9N5GC"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
      <App />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
