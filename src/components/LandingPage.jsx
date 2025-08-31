import React from 'react';
import InstagramFeed from './InstagramFeed';

function LandingPage() {
  return (
    <>
      {/* Section "Héros" */}
      <section 
        className="hero-section"
      >
        <div className="hero-content">
          <div className="hero-text-column">
            <h2>L'Appli qui fait de vos photos de vraies aventures.</h2>
            <p>Des défis créatifs pour bouger, explorer et capturer le monde autrement.</p>
            <button className="cta-button">Rejoindre l'aventure</button>
          </div>
        </div>
      </section>

      {/* Section "Le concept" (id="concept") */}
      <section id="concept" className="features-section">
        <h3>Le concept en 3 points :</h3>
        <div className="features-container">
          <div className="feature-item">
            <h4>Bouger</h4>
            <p>Des défis photo qui vous incitent à l'action. Marchez, courez, pédalez pour trouver le cliché parfait.</p>
          </div>
          <div className="feature-item">
            <h4>Explorer</h4>
            <p>Découvrez votre environnement, des rues de votre quartier aux sentiers de randonnée.</p>
          </div>
          <div className="feature-item">
            <h4>Capturer</h4>
            <p>Immortalisez ces aventures en photo.</p>
          </div>
        </div>
      </section>

      {/* Nouvelle section pour le flux Instagram */}
      <section id="instagram-feed" className="features-section">
        <h3>Suivez nos missions en direct sur Instagram !</h3>
        <InstagramFeed />
      </section>
    </>
  );
}

export default LandingPage;
