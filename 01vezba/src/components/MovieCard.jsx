import React from "react";
import TiltedCard from "./TiltedCard";

function MovieCard() {
  return (
    <div className="flex flex-col items-center space-y-4 p-6">
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
            <p className="text-sm">Romance / Drama</p>
          </div>
        }
      />

      <div className="text-center text-white">
        <h2 className="text-2xl font-bold mb-2">The Notebook</h2>
        <p className="text-lg text-gray-300">Genre: Romance / Drama</p>
        <p className="text-sm text-gray-400 mt-2 max-w-md">
          A passionate love story between Noah and Allie, spanning decades and
          overcoming social differences.
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
