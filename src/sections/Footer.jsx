import React from "react";
import { FaXTwitter, FaInstagram, FaDiscord } from "react-icons/fa6";
import {
  FaTiktok,
  FaYoutube,
  FaFacebookF,
  FaRedditAlien,
  FaTwitch,
  FaFacebookMessenger,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="flex gap-15 justify-center py-4 bg-black border-b-[0.5px] border-b-gray-500">
        <span>
          <FaXTwitter className="soc-icon" size={35} />
        </span>
        <span>
          <FaTiktok className="soc-icon" size={35} />
        </span>
        <span>
          <FaYoutube className="soc-icon" size={35} />
        </span>
        <span>
          <FaFacebookF className="soc-icon" size={35} />
        </span>
        <span>
          <FaInstagram className="soc-icon" size={35} />
        </span>
        <span>
          <FaDiscord className="soc-icon" size={35} />
        </span>
        <span>
          <FaRedditAlien className="soc-icon" size={35} />
        </span>
        <span>
          <FaTwitch className="soc-icon" size={35} />
        </span>
        <span>
          <FaFacebookMessenger className="soc-icon" size={35} />
        </span>
        <span>
          <FaWhatsapp className="soc-icon" size={35} />
        </span>
      </div>
      <div className="flex px-40 py-15 bg-[#212226] text-white">
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="font-bold text-2xl mb-2">
            Subscribe for the Latest News
          </h2>
          <p className="text-md w-xl">
            Subscribe to paimon's official Genshin Impact news to stay up to
            date with the latest information, character intel, and limited-time
            event rewards.
          </p>
        </div>
        <div className="flex-1 flex items-center justify-end text-xl">
          <form>
            <input
              name="email"
              placeholder="Email"
              className="bg-[#212226] w-md rounded-xl px-2 font-light py-3 mr-4 border-1 border-[#323339]"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-[#cdbb98] text-black font-light"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
      <div className="bg-black flex flex-col items-center justify-center p-4 text-gray-300 gap-8">
        <img
          src="/genshin-logo.png"
          alt="genshin logo footer"
          className="w-70"
        />
        <div className="flex gap-6">
          <a
            href="#"
            className="footer-link
          "
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="footer-link
          "
          >
            Term of Service
          </a>
          <a
            href="#"
            className="footer-link
          "
          >
            About Us
          </a>
          <a
            href="#"
            className="footer-link
          "
          >
            Contact Us
          </a>
          <a
            href="#"
            className="footer-link
          "
          >
            Help Center
          </a>
        </div>
        <img src="/teen.png" alt="" />
        <div className="text-center">
          <p>
            "PlayStation Family Mark" and "PS5 logo" are registered trademarks
            or trademarks of Sony Interactive Entertainment Inc.
          </p>
          <p className="w-5xl">
            Epic, Epic Games, Epic Games Store, the Epic Games Store logo, and
            Epic Online Services are trademarks and/or registered trademarks of
            Epic Games. All other trademarks are the property of their
            respective owners.
          </p>
        </div>
        <img src="/hoyoverse.png" alt="hoyoverse logo" className="w-100" />
        <p>Copyright © COGNOSPHERE. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
