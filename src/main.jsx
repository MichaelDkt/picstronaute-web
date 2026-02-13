import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDmeVjMhcEwjWTHTyXRGLk9Q-nGx350KYo",
  authDomain: "picstronaute-v2.firebaseapp.com",
  projectId: "picstronaute-v2",
  storageBucket: "picstronaute-v2.firebasestorage.app",
  messagingSenderId: "980624999287",
  appId: "1:980624999287:web:b8da060d2215ed32e45772",
  measurementId: "G-282D0Q2VDV"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
