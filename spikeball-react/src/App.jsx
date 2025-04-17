import React from 'react';
import NavBar from './components/Navbar';
import Banner from './components/Banner';
import BrandSection from './components/BrandSection';
import CoachingSection from './components/CoachingSection';
import NewsletterSignup from './components/NewsletterSignup';
import Footer from './components/Footer';
import Cards from './components/Cards';
import SidePics from './components/SidePics';
import WebText from './components/WebText';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <Banner />
      <BrandSection />
      <CoachingSection />
      <WebText/>
      <Cards/>
      <SidePics/>
      <NewsletterSignup />
      <Footer />
    </div>
  );
}

export default App;
