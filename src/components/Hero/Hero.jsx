import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../../assets/profile2.png';

const Hero = () => {
  return (
    <section id="home" className="relative flex items-center justify-center w-full h-screen mx-auto overflow-hidden bg-background">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-surface to-background opacity-70"></div>

      <div className="relative z-10 flex flex-col items-center gap-10 px-6 mx-auto max-w-7xl md:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-5xl font-bold font-mona-sans md:text-7xl text-text-main">
            Hi, I'm <span className="text-accent">Prayas</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-text-secondary">
            A passionate Full Stack Developer with a love for creating beautiful and functional web applications.
          </p>
          <motion.a
  href="/Resume_Updated.pdf"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.1 }}
  className="relative inline-block px-6 py-3 mt-8 overflow-hidden font-semibold text-white rounded-lg group"
>
  <span className="relative z-10">View Resume</span>

  {/* Neon glow effect */}
  <span className="absolute inset-0 w-full h-full transition-opacity duration-500 opacity-0 bg-gradient-to-r from-primary via-accent to-primary group-hover:opacity-100 animate-pulse"></span>
</motion.a>

        </motion.div>
        <motion.div
          className="relative flex items-center justify-center flex-1"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Glowing accent behind profile picture */}
          <div className="absolute inset-0 rounded-full bg-accent opacity-30 blur-xl animate-pulse"></div>
          <motion.img
            src={profileImg}
            alt="Prayas"
            className="relative z-10 object-cover border-4 rounded-full shadow-2xl w-80 h-80 md:w-96 md:h-96 border-accent"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;