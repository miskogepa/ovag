import React, { useState } from "react";
import ScrambledText from "./ScrambledText";
import TiltedCard from "./TiltedCard";
import slika from "../assets/Posternotebook.jpg";
import ova from "../assets/ova.jpg";



function OpisFilma({ onBack }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center space-y-4 p-6">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="cursor-pointer"
      >
        <TiltedCard
          imageSrc={ova}
          altText="The Notebook Movie Poster"
          captionText="Jeco, volim te"
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
                  Jeco, volim te.
                </ScrambledText>
              </div>
            </div>
          }
        />
      </div>

      <div className="text-center text-white">
        <h2 className="text-2xl font-bold mb-2"> Jeco, volim te.</h2>
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
