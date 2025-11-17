import React from "react";
import { FaCircleUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-section">
        <a href="#">
          <img src="/genshin-logo.png" alt="genshin-logo" />
        </a>

        <a href="#" className="navbar-button">
          HOME
        </a>
        <a href="#" className="navbar-button">
          NEWS
        </a>
        <a href="#" className="navbar-button">
          CHARACTER
        </a>
        <a href="#" className="navbar-button">
          EXPLORE
        </a>
        <a href="#" className="navbar-button">
          HoYoLAB
        </a>
        <a href="#" className="navbar-button">
          TOP-UP
        </a>
        <a href="#" className="navbar-button">
          REDEEM CODE
        </a>
      </div>
      <div className="right-section">
        <button className="flex items-center gap-3">
          Log In <FaCircleUser size={25} />
        </button>
        <button className="p-4 bg-[#FFD005] text-[#5d4a22]">Download</button>
      </div>
    </div>
  );
};

export default Navbar;
