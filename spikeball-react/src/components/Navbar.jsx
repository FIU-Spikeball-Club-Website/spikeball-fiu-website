import React, { useState } from 'react';
import logo from '../assets/logo.png';

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-indigo-950 px-8 py-4">
      <div className="max-w-6xl mx-auto">
        {/* Desktop and Mobile Header */}
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Panthers Roundnet Logo" className="h-30 w-auto" />
            <span className="font-bold text-white text-xl">Panthers Roundnet</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-purple-300 transition">About Us</a>
            <a href="#gallery" className="text-white hover:text-purple-300 transition">Gallery</a>
            <a href="#contact" className="text-white hover:text-purple-300 transition">Contact</a>
            <a
              href="https://linktr.ee/panthers_roundnet"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-700 hover:bg-purple-800 text-white font-medium py-2 px-6 rounded-full transition"
            >
              Join Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col space-y-4">
            <a href="#home" className="text-white hover:text-purple-300 transition">About Us</a>
            <a href="#gallery" className="text-white hover:text-purple-300 transition">Gallery</a>
            <a href="#contact" className="text-white hover:text-purple-300 transition">Contact</a>
            <a
              href="https://linktr.ee/panthers_roundnet"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-700 hover:bg-purple-800 text-white font-medium py-2 px-6 rounded-full transition inline-block w-fit"
            >
              Join Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;