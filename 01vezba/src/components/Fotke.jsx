import React from "react";
import ova from "../assets/ova.jpg";

function Fotke() {
  return (
    <div className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img
        src={ova}
        alt="Fotografija"
        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
}

export default Fotke;
