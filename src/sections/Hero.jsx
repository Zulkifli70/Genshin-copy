import React from "react";
import Navbar from "../components/Navbar";
import { FaPlay } from "react-icons/fa";

const Hero = () => {
  return (
    <main className="hero-main">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-screen h-screen object-cover -z-10"
      >
        <source src="/genshin-bg.mp4" type="video/mp4" />
      </video>
      <div className="hero-section">
        <button className="play-button">
          <FaPlay size={20} className="start" />
        </button>
        <h1 className="tagline">
          Released on Multiple Platforms - Download Now!
        </h1>
        <div className="available-platform">
          <div className="row-start-1 row-end-3 flex">
            <img className="h-[120px]" src="/qrcode.png" alt="qr" />
          </div>
          <div className="col-start-2 col-end-4 flex gap-4">
            <img className="w-[150px]" src="/ps5.png" alt="ps5" />
            <img className="w-[150px]" src="/apple.png" alt="apple" />
            <img className="w-[150px]" src="/hoyoplay-pc.png" alt="pc" />
          </div>
          <div className="col-start-2 col-end-4 flex gap-4">
            <img className="w-[150px]" src="/gplay.png" alt="google play" />
            <img className="w-[150px]" src="/xbox.png" alt="xbox" />
            <img className="w-[150px]" src="/epic.png" alt="epic game store" />
          </div>
          <div className="row-start-1 row-end-3 col-start-4 col-end-5 h-full flex">
            <img className="h-[120px]" src="/teen.png" alt="teen" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
