import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Particles from "./components/Particles";
import MovieCard from "./components/MovieCard.jsx";
import OpisFilma from "./components/OpisFilma.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [showDescription, setShowDescription] = useState(false);

  const handleCardClick = () => {
    setShowDescription(true);
  };

  const handleBackClick = () => {
    setShowDescription(false);
  };

  return (
    <>
      <div
        style={{ width: "100%", minHeight: "100vh", position: "relative" }}
        className="bg-gray-800"
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
        >
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        <div
          style={{
            position: "relative",
            width: "100%",
            minHeight: "100vh",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Header />
          <div className="flex-1 flex items-center justify-center mt-8">
            {showDescription ? (
              <OpisFilma onBack={handleBackClick} />
            ) : (
              <MovieCard onCardClick={handleCardClick} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
