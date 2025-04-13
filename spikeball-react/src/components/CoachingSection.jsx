import React from 'react';

const CoachingSection = () => {
  return (
    <div className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/3">
          <p className="text-gray-700 text-sm mb-4">
            Experience the next level of spikeball with our exclusive offerings.
          </p>
        </div>
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Dominate the Court with Spikeball Adventures Premium Coaching
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              src="https://si.wsj.net/public/resources/images/B3-BI071_201808_12S_20180805222816.jpg"
              alt="Spikeball player in action"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <img
              src="https://i.shgcdn.com/09fe6064-e05e-42fa-b53d-6a246afde913/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
              alt="Spikeball equipment close-up"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachingSection;