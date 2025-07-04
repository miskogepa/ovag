import React from "react";
import ScrambledText from "./ScrambledText";
import TiltedCard from "./TiltedCard";
import slika from "../assets/Posternotebook.jpg";

function OpisFilma({ onBack }) {
  return (
    <div className="flex flex-col items-center space-y-8 p-6 max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Movie Card */}
        <div className="flex-shrink-0">
          <TiltedCard
            imageSrc={slika}
            altText="The Notebook Movie Poster"
            captionText="The Notebook - Romance Drama"
            containerHeight="400px"
            containerWidth="300px"
            imageHeight="400px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <div className="p-4 text-white bg-black bg-opacity-50 rounded-lg">
                <h3 className="text-lg font-bold">The Notebook</h3>
                <p className="text-sm mb-2">Genre: Romance / Drama</p>
                <p className="text-xs text-white">
                  A passionate love story between Noah and Allie
                </p>
              </div>
            }
          />
        </div>

        {/* Scrambled Text Description */}
        <div className="flex-1 flex items-center justify-center">
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
