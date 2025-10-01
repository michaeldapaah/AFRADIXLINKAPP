import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import ImpactSection from './components/ImpactSection';
import CallToActionSection from './components/CallToActionSection';
import Footer from './components/Footer';
import WaitlistForm from './components/WaitlistForm';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ImpactSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}

export default App;