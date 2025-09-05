import React from 'react';
import './Footer.css'; // Nous créerons ce fichier plus tard

function Footer() {
  return (
    <footer className="main-footer">
      <a href="https://instagram.com/picstronaute" target="_blank">
      <img src="./images/logo-instagram.png" alt="Instagram Icon" className="instagram-icon" />
      </a>
      <p className="footer-copyright">© 2025 Picstronaute</p>
    </footer>
  );
}

export default Footer;