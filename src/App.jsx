import React from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="landing-page-container">
      <Header />
      <main className="main-content">
        <LandingPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
