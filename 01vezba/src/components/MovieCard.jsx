import React, { useState } from "react";
import TiltedCard from "./TiltedCard";

function MovieCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center space-y-4 p-6">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <TiltedCard
          imageSrc="https://m.media-amazon.com/images/I/A1t8xCe9jwL._AC_UF1000,1000_QL80_.jpg"
          altText="The Notebook Movie Poster"
          captionText="The Notebook - Romance Drama"
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
            <div className="p-4 text-white bg-black bg-opacity-50 rounded-lg">
              <h3 className="text-lg font-bold">The Notebook</h3>
              {isHovered && (
                <>
                  <p className="text-sm mb-2">Genre: Romance / Drama</p>
                  <p className="text-xs text-gray-300">
                    A passionate love story between Noah and Allie, spanning
                    decades and overcoming social differences.
                  </p>
                </>
              )}
            </div>
          }
        />
      </div>
      <div className="text-center text-white">
        <h2 className="text-2xl font-bold mb-2">The Notebook</h2>
      </div>
    </div>
  );
}

export default MovieCard;
