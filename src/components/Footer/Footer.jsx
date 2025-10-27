import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaGithub />, href: 'https://github.com/Prayas-Dev' },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/prayas-pandey-' },
  { icon: <FaTwitter />, href: '#' }, // Add your Twitter link
];

const Footer = () => {
  return (
    <footer className="relative py-8 bg-surface">
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
      <div className="flex flex-col items-center justify-center gap-4 px-6 mx-auto max-w-7xl md:flex-row">
        <p className="text-sm text-text-secondary">&copy; {new Date().getFullYear()} Prayas Pandey. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

