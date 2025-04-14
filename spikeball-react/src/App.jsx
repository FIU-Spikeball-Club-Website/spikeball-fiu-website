import React from 'react';
import NavBar from './components/Navbar';
import Banner from './components/Banner';
import BrandSection from './components/BrandSection';
import CoachingSection from './components/CoachingSection';
import NewsletterSignup from './components/NewsletterSignup';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <Banner />
      <BrandSection />
      <CoachingSection />
      <NewsletterSignup />
      <Footer />
    </div>
  );
}

export default App;