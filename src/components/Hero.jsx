import React from "react";
import Navbar from "./Navbar";
import { FaPlay } from "react-icons/fa";

const Hero = () => {
  return (
    <main className="hero-main">
      <video
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-screen h-screen object-cover -z-10"
      >
        <source src="/genshin-bg.mp4" type="video/mp4" />
      </video>
      <Navbar />
      <div className="hero-section">
        <button className="play-button">
          <FaPlay size={20} className="start" />
        </button>
        <h1 className="tagline">
          Released on Multiple Platforms - Download Now!
        </h1>
      </div>
    </main>
  );
};

export default Hero;
