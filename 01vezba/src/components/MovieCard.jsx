import React, { useState } from "react";
import TiltedCard from "./TiltedCard";
import slika from "../assets/Posternotebook.jpg";

function MovieCard({ onCardClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center space-y-4 p-6">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onCardClick}
        className="cursor-pointer"
      >
        <TiltedCard
          imageSrc={slika}
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
            <div className="p-4 text-white bg-amber-300 bg-opacity-50 rounded-lg">
              <h3 className="text-lg font-bold">The Notebook</h3>
              {isHovered && (
                <>
                  <p className="text-sm mb-2">Genre: Romance / Drama</p>
                  <p className="text-xs text-white">
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
