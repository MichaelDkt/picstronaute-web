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
            <h2>L'Appli qui va faire de vos photos de vraies aventures.</h2>
            <p>Des défis créatifs pour bouger, explorer et capturer le monde autrement.</p>
            <a href="#email" className="cta-button">Rejoindre l'aventure</a>
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


      {/* SECTION POUR LES DÉFIS INSTAGRAM */}
      <section id="defis" className='feature-challenge'>
        <h3>En attendant l'application, participe à nos défis !</h3>
        <p>Retrouve les derniers challenges photo et partage tes créations sur Instagram avec <a href="https://www.instagram.com/explore/tags/ChallengePicstronaute" target="_blank" rel="noopener noreferrer">#ChallengePicstronaute</a>.</p>
        
        <div className="challenges-container">
          <div className="challenge-card">
            <img src="images/Defis/1.png" alt="Défi Bouger" />
          </div>
          <div className="challenge-card">
            <img src="images/Defis/2.png" alt="Défi Explorer" />
          </div>
          <div className="challenge-card">
            <img src="images/Defis/3.png" alt="Défi Capturer" />
          </div>
          <div className="challenge-card">
            <img src="images/Defis/4.png" alt="Défi Bouger" />
          </div>
          <div className="challenge-card">
            <img src="images/Defis/5.png" alt="Défi Explorer" />
          </div>
          <div className="challenge-card">
            <img src="images/Defis/6.png" alt="Défi Capturer" />
          </div>
          <div className="challenge-card">
            <img src="images/Defis/7.png" alt="Défi Capturer" />
          </div>
          <div className="challenge-card">
            <img src="images/Defis/8.png" alt="Défi Bouger" />
          </div>
          <div className="challenge-card">
            <img src="images/Defis/9.png" alt="Défi Explorer" />
          </div>
          <div className="challenge-card">
            <img src="images/Defis/10.png" alt="Défi Capturer" />
          </div>
        </div>
        <div className='instagram-button'>
        <a href="https://instagram.com/picstronaute" target="_blank" className="cta-button instagram-button">
          Voir plus de défis sur Instagram
        </a>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
