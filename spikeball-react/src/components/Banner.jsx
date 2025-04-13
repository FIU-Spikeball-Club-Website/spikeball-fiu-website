import React from 'react';
import StatItem from './StatItem';

const Banner = () => {
  return (
    <div className="bg-indigo-950 py-16 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Elevate Your<br />
            Spikeball Game<br />
            Today!
          </h1>
          <p className="text-white text-sm mb-8 max-w-md">
            Join Spikeball Adventures for thrilling tournaments, expert coaching,
            and a vibrant community. Unleash your potential and dominate the
            court!
          </p>
          <div className="flex gap-4">
            <button className="bg-purple-700 hover:bg-purple-800 text-white font-medium py-2 px-6 rounded-full">
              Join Now
            </button>
            <button className="border border-white text-white font-medium py-2 px-6 rounded-full hover:bg-white hover:text-indigo-950">
              Play Now
            </button>
          </div>
          <div className="flex justify-between mt-16 max-w-md">
            <StatItem value="10K+" label="Players Active" />
            <StatItem value="500+" label="Tournaments Held" />
            <StatItem value="4.9" label="Rating Stars" />
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://rec.arizona.edu/sites/default/files/styles/az_large/public/2021-11/intramural_spikeball.jpeg.webp?itok=IkfLNhTf"
            alt="Spikeball player in action"
            className="w-full h-auto rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;