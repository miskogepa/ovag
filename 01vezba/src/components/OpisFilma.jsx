import React, { useState } from "react";
import ScrambledText from "./ScrambledText";
import TiltedCard from "./TiltedCard";
import slika from "../assets/Posternotebook.jpg";
import ova from "../assets/ova.jpg";
import Fotke from "./Fotke";
import { fotkeData, movieData } from "../data/data.js";

function OpisFilma({ onBack }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showGrid, setShowGrid] = useState(false);

  const handleCardClick = () => {
    setShowGrid(true);
  };

  const handleBackToDescription = () => {
    setShowGrid(false);
  };

  if (showGrid) {
    return (
      <div className="flex flex-col items-center space-y-6 p-4 sm:p-6">
        {/* Responsive Grid - 1 kolona na telefonu, 2 na tablet-u, 3 na desktop-u */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-7xl">
          {fotkeData.map((fotka) => (
            <Fotke key={fotka.id} fotka={fotka} />
          ))}
        </div>

        {/* Back to Description Button */}
        <button
          onClick={handleBackToDescription}
          className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-400 transition-colors duration-300 text-sm sm:text-base"
        >
          Nazad na opis
        </button>

        {/* Back to Main Button */}
        <button
          onClick={onBack}
          className="px-4 sm:px-6 py-2 sm:py-3 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 transition-colors duration-300 text-sm sm:text-base"
        >
          Nazad na karticu
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center space-y-4 p-6">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleCardClick}
        className="cursor-pointer"
      >
        <TiltedCard
          imageSrc={movieData.imageSrc}
          altText={movieData.altText}
          captionText={movieData.captionText}
          containerHeight="400px"
          containerWidth="300px"
          imageHeight="400px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <div className="p-4 text-white bg-red-600 bg-opacity-80 rounded-lg">
              <div className="text-center">
                <ScrambledText
                  className="scrambled-text-demo"
                  radius={100}
                  duration={1.2}
                  speed={0.5}
                  scrambleChars=".:"
                >
                  {movieData.scrambledText}
                </ScrambledText>
              </div>
            </div>
          }
        />
      </div>

      <div className="text-center text-white">
        <h2 className="text-2xl font-bold mb-2">{movieData.title}</h2>
      </div>

      {/* Back Button */}
      <button
        onClick={onBack}
        className="px-6 py-3 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 transition-colors duration-300"
      >
        Nazad na karticu
      </button>
    </div>
  );
}

export default OpisFilma;
