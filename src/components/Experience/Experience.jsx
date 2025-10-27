import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experiences } from '../../constants';

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  

  const itemVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
};


  return (
    <section id="experience" ref={ref} className="py-20 bg-surface">
      <motion.div
  ref={ref}
  variants={containerVariants}
  initial="hidden"
  animate={inView ? 'visible' : 'hidden'}
>

        <motion.h2 variants={itemVariants} className="mb-12 text-4xl font-bold text-center font-mona-sans text-accent">Experience</motion.h2>

        {/* Mobile Card Layout */}
        <div className="grid grid-cols-1 gap-8 md:hidden">
          {experiences.map(experience => (
            <motion.div
              key={experience.id}
              className="relative group bg-gradient-to-br from-[#0D071A] to-[#1A0F33] p-6 rounded-lg shadow-lg border-2 border-transparent hover:border-[#00E0FF] transition-all duration-300 transform hover:scale-105"
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="absolute inset-0 transition-opacity duration-300 rounded-lg opacity-0 group-hover:opacity-100" style={{ boxShadow: '0 0 15px #00C6D8' }}></div>
              <div className="relative z-10 flex items-center mb-4">
                {experience.img && <img src={experience.img} alt={experience.company} className="w-12 h-12 mr-4 rounded-full" />}
                <div>
                  <h3 className="text-xl font-bold text-text-main">{experience.role}</h3>
                  <p className="text-text-secondary">{experience.company}</p>
                  <p className="text-sm text-text-secondary">{experience.date}</p>
                </div>
              </div>
              <p className="relative z-10 leading-relaxed text-text-secondary">{experience.desc}</p>
              <div className="relative z-10 flex flex-wrap gap-2 mt-4">
                {experience.skills.map(skill => (
                  <span key={skill} className="bg-primary text-text-main text-xs font-semibold px-2.5 py-0.5 rounded-full">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop Timeline Layout */}
        <div className="relative hidden max-w-6xl px-4 mx-auto md:block">
          <div className="absolute w-1 h-full transform -translate-x-1/2 rounded-full left-1/2 bg-primary"></div>
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              className={`mb-12 flex items-center w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              variants={cardVariants}
            >
              <div className={`w-[48%] ${index % 2 === 0 ? 'pr-4' : 'pl-4'}`}>
                <motion.div
  className="relative p-6 transition-all duration-300 border-2 border-transparent rounded-lg shadow-lg group bg-gradient-to-br from-background to-surface hover:border-accent"
  whileHover={{ scale: 1.02 }}
  style={{ overflow: 'hidden', maxWidth: '100%' }}
>

                  <div className="absolute inset-0 transition-opacity duration-300 rounded-lg opacity-0 group-hover:opacity-100" style={{ boxShadow: '0 0 15px #00C6D8' }}></div>
                  <div className="relative z-10 flex items-center mb-4">
                    {experience.img && <img src={experience.img} alt={experience.company} className="w-12 h-12 mr-4 rounded-full" />}
                    <div>
                      <h3 className="text-xl font-bold text-text-main">{experience.role}</h3>
                      <p className="text-text-secondary">{experience.company}</p>
                      <p className="text-sm text-text-secondary">{experience.date}</p>
                    </div>
                  </div>
                  <p className="relative z-10 leading-relaxed text-text-secondary">{experience.desc}</p>
                  <div className="relative z-10 flex flex-wrap gap-2 mt-4">
                    {experience.skills.map(skill => (
                      <span key={skill} className="bg-primary text-text-main text-xs font-semibold px-2.5 py-0.5 rounded-full">{skill}</span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
