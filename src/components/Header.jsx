import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false); // État pour gérer l'ouverture/fermeture du menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="main-header">
      <h1>PICSTRONAUTE</h1>
      
      {/* Bouton burger visible uniquement sur mobile */}
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`burger-line ${isOpen ? 'open' : ''}`}></div>
        <div className={`burger-line ${isOpen ? 'open' : ''}`}></div>
        <div className={`burger-line ${isOpen ? 'open' : ''}`}></div>
      </div>

      {/* Navigation - masquée ou affichée selon l'état du menu */}
      <nav className={`main-nav ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#concept" onClick={toggleMenu}>Concept</a></li>
          <li><a href="#defis" onClick={toggleMenu}>Défis</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
