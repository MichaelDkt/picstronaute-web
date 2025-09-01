import React from 'react';
import EmailForm from './EmailForm';

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
        <h3>Le concept en 4 points :</h3>
        <div className="features-container">
          <div className="feature-item-bouger">
                <h4>Bouger</h4>
                <p>Des défis photo qui vous incitent à l'action. Marchez, courez, pédalez pour trouver le cliché parfait.</p>
         </div>
          <div className="feature-item-explorer">
                <h4>Explorer</h4>
                 <p>Découvrez votre environnement, des rues de votre quartier aux sentiers de randonnée.</p>
         </div>
          <div className="feature-item-capturer">
                <h4>Capturer</h4>
                <p>Immortalisez vos aventures. Chaque mission vous invite à explorer votre créativité et à transformer l'instant en image.</p>
         </div>
          <div className="feature-item-defier">
                <h4>Défier</h4>
                 <p>Relevez des défis thématiques, grimpez dans le classement et rejoignez une communauté engagée. Chaque photo est une chance de vous dépasser.</p>
         </div>
        </div>
      </section>
      {/*  Section la collect d'email */}
      <section id="email">
         <EmailForm />
      </section>
    </>
  );
}

export default LandingPage;
