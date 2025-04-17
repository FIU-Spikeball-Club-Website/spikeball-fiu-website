import React from "react";
import net from '../assets/images/net.png';
import spikedive from '../assets/images/spikedive.jpeg';
import spikematch from '../assets/images/spikematch.jpg';

const SidePics = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-indigo-900 mb-6">Discover Panther Roundnet</h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mb-16"></div>
        
        {/* First Section */}
        <div className="flex flex-col md:flex-row items-center mb-32 gap-12">
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold text-indigo-900 mb-6">FIU Roundnet Club</h3>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Founded in 2021, the Panther Roundnet Club started as friends playing at Parkview Green. 
              Now we're a thriving community where FIU students meet new people and enjoy both 
              friendly games and competitive tournaments.
            </p>
            <div className="bg-indigo-50 rounded-xl p-6 shadow-lg border border-indigo-100">
              <h4 className="text-xl font-bold text-indigo-900 mb-4">Club Highlights</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  <span>Founded in 2021 at Parkview Green</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  <span>50+ active student members</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  <span>Regular practices 3 times per week</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              className="rounded-xl shadow-2xl w-full h-auto object-cover transform transition-all duration-500 hover:scale-105 hover:shadow-purple-500/20" 
              src={spikematch} 
              alt="FIU Roundnet match"
            />
          </div>
        </div>
        
        {/* Second Section */}
        <div className="flex flex-col md:flex-row-reverse items-center mb-32 gap-12">
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold text-indigo-900 mb-6">Campus Community</h3>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Whether you're a beginner or experienced player, our club welcomes all FIU students! 
              We practice twice weekly at Parkview Green, where you can learn the game, improve your skills, 
              and connect with fellow Panthers.
            </p>
            <div className="bg-purple-100 rounded-xl p-6 shadow-lg border border-purple-200">
                <section id="schedule" className="scroll-mt-24">
                        <h4 className="text-xl font-bold text-purple-900 mb-4">Practice Schedule</h4>
                </section>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  <span>Tuesdays: 5-7 PM at Parkview Green</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  <span>Thursdays: 5-7 PM at Parkview Green</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  <span>Saturdays: 2-5 PM at Parkview Green</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              className="rounded-xl shadow-2xl w-full h-auto object-cover transform transition-all duration-500 hover:scale-105 hover:shadow-purple-500/20" 
              src={net} 
              alt="Spikeball net"
            />
          </div>
        </div>
        
        {/* Third Section */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold text-indigo-900 mb-6">Tournament Action</h3>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Represent FIU in collegiate competitions across Florida! Our club participates in 
              the Florida Roundnet Circuit, challenging other universities and showcasing our Panther pride.
            </p>
            <div className="bg-indigo-50 rounded-xl p-6 shadow-lg border border-indigo-100">
              <h4 className="text-xl font-bold text-indigo-900 mb-4">Game Format</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  <span>2v2 team format</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  <span>Games played to 11, 15, or 21 points</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  <span>Must win by 2 points</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              className="rounded-xl shadow-2xl w-full h-auto object-cover transform transition-all duration-500 hover:scale-105 hover:shadow-purple-500/20" 
              src={spikedive} 
              alt="Diving for a spectacular save"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidePics;