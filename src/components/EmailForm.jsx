import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, setDoc, doc } from 'firebase/firestore'; // Importez 'doc' et 'setDoc'
import { getAuth, signInAnonymously, onAuthStateChanged, signInWithCustomToken } from 'firebase/auth';
import './EmailForm.css';

// Variables globales fournies par l'environnement Canvas
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

function EmailForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [db, setDb] = useState(null);

  // Initialisation de Firebase et authentification
  useEffect(() => {
    try {
      // Récupération de la configuration Firebase à partir des variables d'environnement
      const firebaseConfig = {
        apiKey: import.meta.env.VITE_API_KEY,
        authDomain: import.meta.env.VITE_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_PROJECT_ID,
        storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
        appId: import.meta.env.VITE_APP_ID,
        measurementId: import.meta.env.VITE_MEASUREMENT_ID
      };

      // Vérifiez si la configuration est complète avant de lancer l'app
      if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
        console.error("Erreur: Configuration Firebase incomplète. Veuillez vérifier les variables d'environnement.");
        setMessage("Erreur de connexion à la base de données. Veuillez réessayer plus tard.");
        return;
      }

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
      // Créez une référence de document avec l'email comme identifiant unique
      const docRef = doc(db, `/artifacts/${appId}/public/data/emails`, email);
      
      // Utilisez setDoc pour ajouter ou mettre à jour le document, évitant ainsi les doublons
      await setDoc(docRef, {
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
