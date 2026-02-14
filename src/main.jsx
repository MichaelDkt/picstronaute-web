import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_WEB,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN_WEB,
  projectId: import.meta.env.VITE_PROJECT_ID_WEB,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET_WEB,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID_WEB,
  appId: import.meta.env.VITE_APP_ID_WEB,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID_WEB
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
