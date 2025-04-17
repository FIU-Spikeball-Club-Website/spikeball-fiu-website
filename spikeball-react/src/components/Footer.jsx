import React from 'react';
import { FaInstagram, FaYoutube, FaLink } from 'react-icons/fa';
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="bg-indigo-950 text-white">
      <div className="max-w-6xl mx-auto px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Club Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">FIU Panthers Roundnet</h3>
            <p className="text-gray-300 text-sm mb-4">
              Join our vibrant Spikeball community at Florida International University. From beginners to competitive players, everyone is welcome!
            </p>
            <div className="flex space-x-4 text-white text-xl">
              <a href="https://www.instagram.com/panthersroundnet/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaInstagram />
              </a>
              <a href="https://www.youtube.com/@PanthersRoundnet-sp5vd" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaYoutube />
              </a>
              <a href="https://linktr.ee/panthers_roundnet" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <FaLink />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-white">Gallery</a></li>
              <li><a href="https://dasa.fiu.edu/all-departments/wellness-recreation-centers/programs/join-a-sport/" className="text-gray-300 hover:text-white">Join FIU Sports Club</a></li>
              <li><a href="https://linktr.ee/panthers_roundnet" className="text-gray-300 hover:text-white">All Links</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start">
                <HiOutlineLocationMarker className="h-5 w-5 mr-2 text-purple-400 flex-shrink-0" />
                <span>11290 SW 12th St<br />Miami, FL 33199</span>
              </li>
              <li className="flex items-start">
                <HiOutlineMail className="h-5 w-5 mr-2 text-purple-400 flex-shrink-0" />
                <span>dgonz601@fiu.edu</span>
              </li>
              <li className="flex items-start">
                <HiOutlinePhone className="h-5 w-5 mr-2 text-purple-400 flex-shrink-0" />
                <span>(305) 348-1054</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} FIU Panthers Roundnet Club. All rights reserved.
            </p>
            <ul className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
              <li><a href="https://www.fiu.edu/" className="hover:text-white">Florida International University</a></li>
              <li><a href="https://fiusports.com/" className="hover:text-white">FIU Athletics</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Roundnet" className="hover:text-white">Spikeball™</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
