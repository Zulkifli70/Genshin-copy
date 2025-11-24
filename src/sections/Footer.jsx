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
      <div className="flex gap-15 justify-center py-4 bg-[#1a1a1aee] border-b-1 border-b-gray-500">
        <span>
          <FaXTwitter color="gray" size={35} />
        </span>
        <span>
          <FaTiktok color="gray" size={35} />
        </span>
        <span>
          <FaYoutube color="gray" size={35} />
        </span>
        <span>
          <FaFacebookF color="gray" size={35} />
        </span>
        <span>
          <FaInstagram color="gray" size={35} />
        </span>
        <span>
          <FaDiscord color="gray" size={35} />
        </span>
        <span>
          <FaRedditAlien color="gray" size={35} />
        </span>
        <span>
          <FaTwitch color="gray" size={35} />
        </span>
        <span>
          <FaFacebookMessenger color="gray" size={35} />
        </span>
        <span>
          <FaWhatsapp color="gray" size={35} />
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
        <div className="flex-1 flex items-center justify-center text-2xl">
          <form>
            <input
              name="email"
              placeholder="Email"
              className="bg-[#212226] rounded-md px-2 font-light py-3 mr-4 border-1 border-[#323339]"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-md bg-[#cdbb98] text-black font-light"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
