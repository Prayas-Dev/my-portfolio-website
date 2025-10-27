import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../../assets/profile2.png';
import {ReactTyped} from "react-typed";


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
          <h1 className="mb-2 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-5xl">
            Hi, I am
          </h1>
          <h2 className="mb-4 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-5xl lg:text-5xl">
            Prayas Pandey
          </h2>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTyped
              strings={[
                'Full Stack Developer',
                'UI/UX Developer',
                'AIML Engineer',
                'Coder',
              ]}
              typeSpeed={100}
              backSpeed={50}
              backDelay={2000}
              loop
            />
          </h3>
          <p className="mt-4 text-lg md:text-xl text-text-secondary">
            Full-stack developer skilled in building intelligent, responsive web applications with robust backend services and intuitive UI, combining data-driven insights with modern development stacks.
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