import React from "react";

const WebText = () => {
  return (
    <div className="relative py-32 bg-gradient-to-b from-white to-indigo-900 overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-10 -top-10 w-72 h-72 rounded-full bg-purple-600 opacity-15 blur-2xl"></div>
        <div className="absolute -left-20 top-40 w-96 h-96 rounded-full bg-indigo-500 opacity-10 blur-3xl"></div>
        <div className="absolute right-20 bottom-10 w-80 h-80 rounded-full bg-purple-800 opacity-15 blur-2xl"></div>
      </div>
      
      <div className="relative container mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block px-5 py-2 bg-indigo-800/50 backdrop-blur-sm rounded-full mb-8 border border-purple-500/30">
            <span className="text-purple-300 text-sm font-medium">Established 2021</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Unleash Your <span className="text-purple-600">Panther Roundnet</span> Potential
          </h1>
          
          <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 mx-auto mb-10"></div>
          
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-12 max-w-3xl mx-auto">
            FIU's Roundnet Club offers top-notch coaching, thrilling tournaments, and a supportive community. 
            Established in 2021, we've grown from friends playing at Parkview to representing FIU in 
            collegiate competitions across Florida.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
          <div className="flex flex-wrap gap-4 mt-8">
              {/* Join Club Button - opens external link in new tab */}
              <a
                href="https://linktr.ee/panthers_roundnet"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 hover:bg-purple-500 text-white text-lg font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/30 shadow-lg shadow-purple-800/20"
              >
                Join Our Club
              </a>

              {/* View Schedule Button - scrolls to schedule section */}
              <a
                href="#schedule"
                className="bg-transparent border-2 border-white/70 text-white text-lg font-bold py-4 px-10 rounded-full transition-all duration-300 hover:bg-white/10 transform hover:scale-105 hover:shadow-white/20 shadow-lg shadow-indigo-800/10"
              >
                View Schedule
              </a>
            </div>
          </div>
          
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-indigo-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 transform transition-all duration-500 hover:scale-105 hover:bg-indigo-800/40 hover:shadow-purple-500/20 shadow-lg shadow-purple-800/5">
              <div className="w-16 h-16 bg-purple-600/70 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">50+</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Active Members</h3>
              <p className="text-purple-200">Panthers from all majors creating a vibrant community</p>
            </div>
            <div className="bg-indigo-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 transform transition-all duration-500 hover:scale-105 hover:bg-indigo-800/40 hover:shadow-purple-500/20 shadow-lg shadow-purple-800/5">
              <div className="w-16 h-16 bg-purple-600/70 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">12+</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Tournaments</h3>
              <p className="text-purple-200">Representing FIU across Florida in competitive play</p>
            </div>
            <div className="bg-indigo-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 transform transition-all duration-500 hover:scale-105 hover:bg-indigo-800/40 hover:shadow-purple-500/20 shadow-lg shadow-purple-800/5">
              <div className="w-16 h-16 bg-purple-600/70 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3x</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Weekly Practices</h3>
              <p className="text-purple-200">Regular sessions at Parkview to hone your skills</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebText;