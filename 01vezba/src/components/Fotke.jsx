import React, { useState } from "react";
import TiltedCard from "./TiltedCard";
import ScrambledText from "./ScrambledText";

function Fotke({ fotka }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center space-y-4 p-2 sm:p-6">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="cursor-pointer"
      >
        <TiltedCard
          imageSrc={fotka.imageSrc}
          altText={fotka.altText}
          captionText={fotka.captionText}
          containerHeight="250px"
          containerWidth="200px"
          imageHeight="250px"
          imageWidth="200px"
          rotateAmplitude={8}
          scaleOnHover={1.1}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={isHovered}
          overlayContent={
            isHovered && (
              <div className="p-2 sm:p-4 text-white bg-amber-300 bg-opacity-50 rounded-lg">
                <div className="text-center">
                  <ScrambledText
                    className="scrambled-text-demo text-sm sm:text-lg font-bold"
                    radius={30}
                    duration={0.8}
                    speed={0.3}
                    scrambleChars=".:"
                  >
                    {fotka.title}
                  </ScrambledText>
                </div>
                <p className="text-xs sm:text-sm mb-1 sm:mb-2 mt-1 sm:mt-2">
                  {fotka.subtitle}
                </p>
                <p className="text-xs text-white">{fotka.description}</p>
              </div>
            )
          }
        />
      </div>
    </div>
  );
}

export default Fotke;
