import React from 'react';
import EmailForm from './EmailForm';

function LandingPage() {
  return (
    <>
      {/* Section "Héros" - MISE À JOUR DU TEXTE POUR L'EXPLICATION CLAIRE DE L'APP */}
      <section 
        className="hero-section"
      >
        <div className="hero-content">
          <div className="hero-text-column">
            <h1>Pour que chaque photo devienne une aventure.</h1>
            <p> L'application mobile qui transforme chaque jour en une aventure photo. Bougez, explorez, et gagnez grâce à vos clichés.</p>
            <a href="#email" className="cta-button">Rejoindre l'aventure</a>
          </div>
        </div>
      </section>

      {/* Section l'application en action */}
      <section id="app-en-action" className='screenshots-section'>
        <h2>L'Application Picstronaute en Action</h2>
        <p className="app-description">Découvrez comment l'application Picstronaute vous fait bouger, vous inspire et vous permet de vous mesurer aux autres photographes de la communauté.</p>
        
        <div className="screenshot-grid">
          <div className="screenshot-grid-wrapper">
            <div className="screenshot-item">
              <img src="images/AppScreenshots/challenges.png" alt="Écran challenge Picstonaute" />
              <div className="screenshot-text">
                <h4>Relever les challenges</h4>
                <p>Chaque jour, découvrez de nouveaux challenges photos. Laissez l'inspiration venir et préparez-vous à sortir pour immortaliser l'instant.</p>
              </div>
            </div>

            <div className="screenshot-item">
              <img src="images/AppScreenshots/club.png" alt="Écran création de club Picstonaute" />
              <div className="screenshot-text">
                <h4>Créer vos clubs photos</h4>
                <p>Envie de vous challenger avec vos amis? Créez votre club, invitez vos amis et défiez les à travers vos propres challenges.</p>
              </div>
            </div>

            <div className="screenshot-item">
              <img src="images/AppScreenshots/vote.png" alt="Écran vote" />
              <div className="screenshot-text">
                <h4>Voter </h4>
                <p>Votez pour vos photos préférées. Donnez des notes en fonction de la qualité de l'image mais aussi du respect du thème.</p>
              </div>
            </div>

            <div className="screenshot-item">
              <img src="images/AppScreenshots/classement.png" alt="Écran classement" />
              <div className="screenshot-text">
                <h4>Classement </h4>
                <p>Montez au classement public ou au sein de vos clubs privés. C'est le moment d'impressioner votre communauté. </p>
              </div>
            </div>

            <div className="screenshot-item">
              <img src="images/AppScreenshots/badges.png" alt="Écran badges" />
              <div className="screenshot-text">
                <h4>Gagner </h4>
                <p>Collectionnez les badges en completant les challenges et en bougeant.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* Section "Le concept" (id="concept") - PAS DE CHANGEMENT */}
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
                <p>Immortalisez vos aventures. Avec votre smartphone ou votre appareil photo, transformer l'instant en image.</p>
         </div>
          <div className="feature-item-defier">
                <h4>Défier</h4>
                 <p>Relevez ou créer vos défis, grimpez dans le classement et gagnez les challenges. Chaque photo est une chance de vous dépasser.</p>
         </div>
        </div>
      </section>

      {/* Section la collect d'email - PAS DE CHANGEMENT */}
      <section id="email">
         <EmailForm />
      </section>
      
      {/* L'ANCIENNE SECTION INSTAGRAM EST SUPPRIMÉE ICI */}
    </>
  );
}

export default LandingPage;