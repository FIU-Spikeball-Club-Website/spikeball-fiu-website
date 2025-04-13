import React from 'react';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import BrandSection from './components/BrandSection';
import CoachingSection from './components/CoachingSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <Banner />
      <BrandSection />
      <CoachingSection />
    </div>
  );
}

export default App;