import React from "react";

const Cards = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-indigo-900 text-center mb-16">Why Join Our Club</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-purple-500/20 border border-gray-200">
            <div className="h-2 bg-indigo-900"></div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">Friendly Environment</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our FIU Spike Club is all about good vibes and great company! We welcome
                everyone at Parkview Green and create a friendly environment where you
                can learn, share, and grow together as Panthers.
              </p>
            </div>
          </div>
      
          {/* Card 2 */}
          <div className="bg-purple-700 rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-purple-500/20">
            <div className="h-2 bg-white"></div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Panther Community</h3>
              <p className="text-white text-lg leading-relaxed">
                Founded in 2021, our club thrives on community. Whether you're a seasoned player or just starting out, 
                all FIU students are welcomed with open arms. We support each other on and off the court, creating lasting friendships.
              </p>
            </div>
          </div>
      
          {/* Card 3 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-purple-500/20 border border-gray-200">
            <div className="h-2 bg-indigo-900"></div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">Great Exercise</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Spikeball keeps you constantly moving during our weekly practices. It's a fun way to improve your cardio, 
                agility, and hand-eye coordination—all while playing with fellow Panthers and getting a full-body workout!
              </p>
            </div>
          </div>
      
          {/* Card 4 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-purple-500/20 border border-gray-200">
            <div className="h-2 bg-indigo-900"></div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">College Competition</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Represent FIU in tournaments throughout Florida! Our club competes against other colleges, giving you the chance 
                to show your skills and bring recognition to our Panthers community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;