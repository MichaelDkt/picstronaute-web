import React from 'react';

const TopAlphaBanner = () => {
  return (
    <div className="top-alpha-bar">
      <div className="top-alpha-container">
        <p className="top-alpha-text">
          <span className="top-alpha-emoji">🚀</span>
          <strong>Équipage Alpha :</strong> Nous recherchons 12 testeurs Android.
          <a href="https://forms.gle/qCQNFppg3JQZTTNQ6" target="_blank" rel="noopener noreferrer" className="top-alpha-link">
            Rejoindre la mission
          </a>
        </p>
      </div>

      <style jsx>{`
        .top-alpha-bar {
          background-color: #29FB06; /* Ton vert Picstronaute exact */
          width: 100%;
          padding: 6px 0;
          position: relative;
          z-index: 9999;
          display: flex;
          justify-content: center;
          align-items: center;
          border-bottom: 1px solid rgba(0,0,0,0.1);
        }

        .top-alpha-container {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          padding: 0 20px;
          text-align: center;
        }

        .top-alpha-text {
          margin: 0;
          color: #211134; /* Violet très sombre pour le contraste */
          font-size: 0.85rem;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
        }

        .top-alpha-emoji {
          font-size: 1rem;
        }

        .top-alpha-link {
          color: #7500FF; /* Ton violet vibrant */
          text-decoration: underline;
          font-weight: 800;
          padding: 2px 6px;
          border-radius: 4px;
          transition: background-color 0.2s;
        }

        .top-alpha-link:hover {
          background-color: rgba(117, 0, 255, 0.1);
          color: #211134;
        }

        /* --- Éviter le chevauchement sur petits écrans --- */
        @media (max-width: 768px) {
          .top-alpha-bar {
            padding: 10px 0;
          }
          .top-alpha-text {
            font-size: 0.75rem;
            line-height: 1.3;
          }
          .top-alpha-emoji {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default TopAlphaBanner;