import React from 'react';
import { FaInstagram, FaYoutube, FaLink } from 'react-icons/fa';
import banner from '../assets/images/banner.jpeg';

const Banner = () => {
  return (
    <div className="bg-indigo-950 py-6 px-8">
      <div className="max-w-6xl mx-auto flex flex-col">
        {/* Content Container: Text and Image */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Text Column */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight text-center md:text-left mb-8 w-full">
              Join <span className="text-purple-400">Panthers Roundnet Club</span> — Let's{" "}
              <span className="text-yellow-300">Spike Things Up!</span>
            </h1>
            
            {/* Description */}
            <p className="text-white text-sm text-center md:text-left w-full max-w-md">
              Looking for some awesome spikeball players to participate in tournaments 
              and bring home some trophies!
              <br /><br />
              We meet at the south turf field on Monday and Thursday from 6-8pm.
            </p>
          </div>
          
          {/* Image Column */}
          <div className="w-full md:w-1/2 px-6 md:px-0 py-4 md:py-0">
            <img
              src={banner}
              alt="Spikeball player in action"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>

        {/* Social Container: Follow button and Social Icons */}
        <div className="w-full flex flex-col items-center md:items-start py-8">
          {/* Follow Button */}
          <div className="flex justify-center md:justify-start w-full mb-8">
            <a
              href="https://www.instagram.com/panthersroundnet/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-700 hover:bg-purple-800 text-white font-medium py-2 px-6 rounded-full"
            >
              Follow us
            </a>
          </div>
          
          {/* Social Icons */}
          <div className="w-full flex justify-center md:justify-start gap-x-10">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/panthersroundnet/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-1 text-white hover:text-pink-400 transition duration-300"
            >
              <FaInstagram className="text-4xl" />
              <span className="text-sm text-gray-400">Instagram</span>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@PanthersRoundnet-sp5vd"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-1 text-white hover:text-red-500 transition duration-300"
            >
              <FaYoutube className="text-4xl" />
              <span className="text-sm text-gray-400">YouTube</span>
            </a>

            {/* Linktree */}
            <a
              href="https://linktr.ee/panthers_roundnet"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-1 text-white hover:text-green-400 transition duration-300"
            >
              <FaLink className="text-4xl" />
              <span className="text-sm text-gray-400">Linktree</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;