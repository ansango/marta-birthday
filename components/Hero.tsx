import React from "react";
import { playAudio, resetAudio } from "../lib/audio";

const Hero = ({ action = () => {} }) => {
  const applause = () => {
    resetAudio("carino");
    resetAudio("tame");
    resetAudio("laugh");
    playAudio("applause");
    action();
  };
  return (
    <div className="h-screen flex flex-col justify-between pt-20">
      <div className="space-y-10">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-gray-900 text-center">
          ¡Este es tu 30 cumpleaños!
        </h1>
        <h2 className="text-center text-5xl">👵🎉</h2>
        <p className="text-center text-gray-700 text-lg">
          ¡Te espera un <span className="font-semibold">mega regalo</span>!
        </p>
      </div>
      <div className="text-7xl text-center">🎁</div>
      <div className="flex justify-center py-10">
        <a
          href="#iphone"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={applause}
        >
          Ver regalo
        </a>
      </div>
    </div>
  );
};

export default Hero;
