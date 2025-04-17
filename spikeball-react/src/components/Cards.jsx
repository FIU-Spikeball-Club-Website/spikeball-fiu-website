import React from "react";

const Cards = () => {
  return (
    <div class="flex flex-row justify-center h-100 mb-50">
      <div className="bg-indigo-950 text-white w-75 flex flex-col">
        <div className="text-2xl font-bold w-100 m-5">Friendly Environment</div>
        <div className="m-10 mt-15">
          Our Spike Club is all about good vibes and great company! We welcome
          everyone with open arms and create a friendly environment where you
          can learn, share, and grow together.
        </div>
      </div>

      <div className="bg-purple-700 text-black w-75 ">
        <div className="text-2xl font-bold w-100 m-5">Welcoming Community</div>
        <div className="m-10 mt-15">
        Our Spike Club thrives on a strong sense of community. Whether you’re a seasoned player or just starting out, everyone is welcomed with open arms. We support each other on and off the court, creating a fun, encouraging environment where friendships grow as strong as our game.
        </div>
      </div>
      <div className="bg-indigo-950 text-white w-75">
        <div className="text-2xl font-bold w-100 m-5 ml-10">Great Excersise</div>
        <div className="m-10 mt-15">
        Spikeball is a great form of exercise because it keeps you constantly moving, jumping, and diving. It’s a fun way to improve your cardio, agility, and hand-eye coordination—all while playing with friends. You get a full-body workout without even realizing it!
        </div>
      </div>
      <div className="bg-indigo-950 text-white w-75">
        <div className="text-2xl font-bold w-100 m-5 ml-15">Great Sport</div>
        <div className="m-10 mt-15">
        Spikeball is an awesome sport to get into—it’s fast-paced, easy to learn, and perfect for all skill levels. Whether you're playing casually at the beach or getting competitive, it’s a great way to stay active, build teamwork, and have fun with friends. Plus, it’s super portable, so you can bring the game anywhere!
        </div>
      </div>
    </div>
  );
};
export default Cards;
