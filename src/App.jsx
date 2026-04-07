import React from 'react';
import Navbar from './components/Navbar';
import PageBackdrop from './components/PageBackdrop';
import HeroSection from './components/HeroSection';
import PricingBetaSection from './components/PricingBetaSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import VesselTrySection from './components/VesselTrySection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <PageBackdrop />
      <div className="app-surface">
        <Navbar />
        <main>
          <HeroSection />
          <div className="light-section-duo">
            <div className="light-section-atmosphere__bg" aria-hidden />
            <PricingBetaSection />
            <FeaturesSection />
          </div>
          <HowItWorksSection />
          <VesselTrySection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
