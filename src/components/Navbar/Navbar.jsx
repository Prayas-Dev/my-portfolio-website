import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const navLinks = [
  { title: 'About', href: '#about' },
  { title: 'Skills', href: '#skills' },
  { title: 'Experience', href: '#experience' },
  { title: 'Projects', href: '#projects' },
  { title: 'Education', href: '#education' },
  { title: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          setActiveLink(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/60 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between h-16 max-w-6xl px-4 mx-auto sm:h-20 sm:px-6">
  {/* Logo */}
  <div className="text-xl font-semibold cursor-pointer select-none sm:text-2xl">
    <span className="text-[#8245ec]">&lt;</span>
    <span className="text-white">Prayas</span>
    <span className="text-[#8245ec]">/</span>
    <span className="text-white">Pandey</span>
    <span className="text-[#8245ec]">&gt;</span>
  </div>

  {/* Desktop Menu */}
  <div className="items-center hidden gap-6 md:flex">
    <div className="flex items-center gap-8">
      {navLinks.map((link) => (
        <a
          key={link.title}
          href={link.href}
          className={`relative font-medium transition-colors duration-300 group ${
            activeLink === link.href.substring(1)
              ? 'text-accent'
              : 'text-text-main hover:text-accent'
          }`}
        >
          {link.title}
          <span
            className={`absolute left-0 bottom-0 h-0.5 bg-accent transition-all duration-300 ${
              activeLink === link.href.substring(1)
                ? 'w-full'
                : 'w-0 group-hover:w-full'
            }`}
          ></span>
        </a>
      ))}
    </div>

    {/* Divider */}
    <div className="w-px h-6 bg-gradient-to-b from-[#8245ec] to-transparent rounded-full opacity-60 mx-3"></div>

    {/* Social Icons */}
    <div className="flex items-center gap-4">
      <a
        href="https://github.com/Prayas-Dev"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 transition-all duration-300 hover:text-[#8245ec] hover:scale-110"
      >
        <FaGithub size={22} />
      </a>
      <a
        href="https://www.linkedin.com/in/prayas-pandey-8565a2256/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 transition-all duration-300 hover:text-[#8245ec] hover:scale-110"
      >
        <FaLinkedin size={22} />
      </a>
    </div>
  </div>

  {/* Mobile Menu Button */}
  <div className="flex items-center md:hidden">
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="text-2xl text-accent focus:outline-none"
      aria-label="Toggle menu"
    >
      {menuOpen ? <FiX /> : <FiMenu />}
    </button>
  </div>
</div>


      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="absolute left-0 w-full shadow-lg top-20 bg-background/90 backdrop-blur-lg md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center py-6 space-y-6">
              {navLinks.map((link) => (
                <button
                  key={link.title}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-lg font-medium transition-colors duration-300 ${
                    activeLink === link.href.substring(1)
                      ? 'text-accent'
                      : 'text-text-main hover:text-accent'
                  }`}
                >
                  {link.title}
                </button>
              ))}

              {/* Social Icons in Mobile Menu */}
              <div className="flex items-center gap-6 mt-4">
                <a
                  href="https://github.com/Prayas-Dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 transition-all duration-300 hover:text-[#8245ec] hover:scale-110"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/prayas-pandey-8565a2256/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 transition-all duration-300 hover:text-[#8245ec] hover:scale-110"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
