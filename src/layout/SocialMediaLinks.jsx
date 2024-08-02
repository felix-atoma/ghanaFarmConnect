import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const SocialMediaLinks = () => {
  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 flex flex-col items-center space-y-4 p-2 bg-[#71B34A]">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#FFFFFF]">
        <FaFacebook size={30} />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#FFFFFF]">
        <FaTwitter size={30} />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#FFFFFF]">
        <FaInstagram size={30} />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#FFFFFF]">
        <FaLinkedin size={30} />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
