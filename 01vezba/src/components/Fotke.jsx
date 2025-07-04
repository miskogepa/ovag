import React, { useState } from "react";
import TiltedCard from "./TiltedCard";

function Fotke({ fotka }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center space-y-4 p-6">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="cursor-pointer"
      >
        <TiltedCard
          imageSrc={fotka.imageSrc}
          altText={fotka.altText}
          captionText={fotka.captionText}
          containerHeight="300px"
          containerWidth="250px"
          imageHeight="300px"
          imageWidth="250px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={isHovered}
          overlayContent={
            isHovered && (
              <div className="p-4 text-white bg-amber-300 bg-opacity-50 rounded-lg">
                <h3 className="text-lg font-bold">{fotka.title}</h3>
                <p className="text-sm mb-2">{fotka.subtitle}</p>
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
