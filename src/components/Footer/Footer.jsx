import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaGithub />, href: 'https://github.com/Prayas-Dev' },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/prayas-pandey-' },
  { icon: <FaTwitter />, href: '#' }, // Add your Twitter link
];

const Footer = () => {
  return (
    <footer className="bg-surface py-8 relative">
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-text-secondary text-sm">&copy; {new Date().getFullYear()} Prayas Pandey. All rights reserved.</p>
        <div className="flex gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-text-secondary hover:text-accent transition-colors duration-300"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

