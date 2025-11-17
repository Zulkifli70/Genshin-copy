import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <main>
      <video
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-screen h-screen object-cover -z-10"
      >
        <source src="/genshin-bg.mp4" type="video/mp4" />
      </video>
      <Navbar />
    </main>
  );
};

export default Hero;
