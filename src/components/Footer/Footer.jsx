import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className='text-white py-8 px-[12vw] md:px-[7vw] lg:px-[14vw]'>
      <div className="container mx-auto text-center">
        <h2 className='text-xl font-semibold text-purple-500'>Prayas Pandey</h2>

        {/* Navigation Links */}
        <nav className='flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4'>
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "project" },
            { name: "Education", id: "education" },
            { name: "Contact", id: "contact" }
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className='hover:text-purple-500 text-sm sm:text-base my-1 cursor-pointer'
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaFacebook />, link: "" },
            { icon: <FaTwitter />, link: "https://x.com/prayaspandeyy" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/prayas-pandey-8565a2256/" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/prayaspandeyy/?__pwa=1" }
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-500 text-2xl transition"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className='text-sm text-gray-400 mt-6'>
          © 2025 Prayas Pandey. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
