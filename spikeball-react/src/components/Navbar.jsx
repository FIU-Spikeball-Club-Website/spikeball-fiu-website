import React from 'react';

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between py-6 px-8 bg-indigo-950">
      <div className="max-w-6xl mx-auto w-full flex items-center justify-between">
        <div className="font-bold text-white text-xl">Spikeball</div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-white hover:text-purple-300">Home</a>
          <a href="#" className="text-white hover:text-purple-300">Gallery</a>
          <a href="#" className="text-white hover:text-purple-300">Gallery</a>
          <a href="#" className="text-white hover:text-purple-300">Testimonials</a>
          <a href="#" className="text-white hover:text-purple-300">Contact</a>
        </div>
        <button className="bg-purple-700 hover:bg-purple-800 text-white font-medium py-2 px-6 rounded-full">
          Join Now
        </button>
      </div>
    </nav>
  );
};

export default NavBar;