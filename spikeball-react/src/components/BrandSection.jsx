import React from 'react';

const BrandSection = () => {
  return (
    <div className="py-16 px-8 bg-white">
      <p className="text-center text-gray-700 mb-12 font-light">Trusted by leading sports brands worldwide</p>
      <div className="flex flex-wrap justify-center items-center gap-16 max-w-4xl mx-auto">
        <div className="text-2xl font-bold italic text-gray-800">Nike</div>
        <div className="text-2xl font-bold text-gray-800">Wilson</div>
        <div className="text-2xl font-bold italic text-gray-800">Reebok</div>
        <div className="text-2xl font-bold text-gray-800">Adidas</div>
        <div className="text-2xl font-bold italic text-gray-800">Puma</div>
      </div>
    </div>
  );
};

export default BrandSection;