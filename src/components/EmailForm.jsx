import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, query, where, getDocs, doc, setDoc } from 'firebase/firestore';
import { getAuth, signInAnonymously, onAuthStateChanged, signInWithCustomToken } from 'firebase/auth';
import './EmailForm.css';

// Votre configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCvhDJUU3IFZ_ZCkS6_YTE7CYRugSvwnJ0",
  authDomain: "picstronaute-email-base.firebaseapp.com",
  projectId: "picstronaute-email-base",
  storageBucket: "picstronaute-email-base.firebasestorage.app",
  messagingSenderId: "705721731833",
  appId: "1:705721731833:web:b991d936eb98c98f31f028",
  measurementId: "G-ZLDKNNR6JG"
};

// Variables globales fournies par l'environnement Canvas
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

function EmailForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [db, setDb] = useState(null);

  useEffect(() => {
    try {
      const app = initializeApp(firebaseConfig);
      const firestore = getFirestore(app);
      setDb(firestore);
      const auth = getAuth(app);
      
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (!user) {
          try {
            if (initialAuthToken) {
              await signInWithCustomToken(auth, initialAuthToken);
            } else {
              await signInAnonymously(auth);
            }
          } catch (error) {
            console.error("Erreur de connexion Firebase:", error);
          }
        }
      });

      return () => unsubscribe();
    } catch (error) {
      console.error("Erreur d'initialisation de Firebase:", error);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !db) {
      setMessage("Erreur de connexion à la base de données. Veuillez réessayer plus tard.");
      return;
    }

    setIsLoading(true);

    try {
      // Nous utilisons l'email comme identifiant unique du document pour éviter les doublons
      const emailDocRef = doc(db, `/artifacts/${appId}/public/data/emails`, email);
      
      await setDoc(emailDocRef, {
        email: email,
        timestamp: new Date()
      });
      
      setMessage("Merci ! Votre email a bien été enregistré.");
      setEmail('');
      
    } catch (error) {
      console.error("Erreur d'enregistrement de l'email:", error);
      setMessage("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="email-form-container">
      <h3>Restez au courant du lancement !</h3>
      <p>Soyez les premiers informés des missions exclusives, des nouvelles fonctionnalités et du lancement de l'application.</p>
      <form onSubmit={handleSubmit} className="cta-form">
        <input 
          type="email" 
          name="email" 
          placeholder="Votre adresse email" 
          required 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "En cours..." : "Rejoindre l'aventure"}
        </button>
      </form>
      {message && <p className="form-message">{message}</p>}
    </div>
  );
}

export default EmailForm;
