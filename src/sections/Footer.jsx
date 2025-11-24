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
    <div className="flex gap-15 justify-center py-4 bg-[#111111]">
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
  );
};

export default Footer;
