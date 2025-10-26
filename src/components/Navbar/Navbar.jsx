import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { title: 'About', href: '#about' },
  { title: 'Skills', href: '#skills' },
  { title: 'Experience', href: '#experience' },
  { title: 'Projects', href: '#projects' },
  { title: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

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
      <div className="flex items-center justify-between h-20 px-6 mx-auto max-w-7xl">
        <a
          href="#home"
          className="text-2xl font-bold font-mona-sans text-accent"
        >
          Prayas
        </a>

        <div className="items-center hidden gap-8 md:flex">
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

        <div className="md:hidden">
          {/* Mobile menu button will be added later */}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
