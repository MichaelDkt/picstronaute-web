import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-links">
        <a target="_blank" href="/privacy.html">Politique de Confidentialité</a>
        <a target="_blank" href="/conditions.html">Conditions d'Utilisation</a>
      </div>

      <div className="footer-socials">
        <a href="https://instagram.com/picstronaute" target="_blank" rel="noopener noreferrer">
          <img src="./images/logo-instagram.png" alt="Instagram Icon" className="social-icon" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61552903802924" target="_blank" rel="noopener noreferrer">
          <img src="./images/logo-facebook.png" alt="Facebook Icon" className="social-icon" />
        </a>
      </div>

      <p className="footer-copyright">© 2026 Picstronaute</p>
    </footer>
  );
}

export default Footer;