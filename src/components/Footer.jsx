import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-links">
        <a href="/privacy.html">Politique de Confidentialité</a>
        <a href="/conditions.html">Conditions d'Utilisation</a>
      </div>
      <a href="https://instagram.com/picstronaute" target="_blank" rel="noopener noreferrer">
        <img src="./images/logo-instagram.png" alt="Instagram Icon" className="instagram-icon" />
      </a>
      <p className="footer-copyright">© 2025 Picstronaute</p>
    </footer>
  );
}

export default Footer;