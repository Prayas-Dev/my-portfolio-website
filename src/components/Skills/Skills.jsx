import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SkillsInfo } from '../../constants';

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" ref={ref} className="py-20 bg-background">
      <motion.div
        className="px-6 mx-auto max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.h2 variants={itemVariants} className="mb-12 text-4xl font-bold text-center font-mona-sans text-accent">Skills</motion.h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SkillsInfo.map(skillCategory => (
            <motion.div
              key={skillCategory.title}
              variants={itemVariants}
              className="relative p-6 transition-all duration-300 transform rounded-lg shadow-lg group bg-gradient-to-br from-surface to-background hover:shadow-2xl hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="mb-4 text-2xl font-bold text-text-main">{skillCategory.title}</h3>
              <div className="grid grid-cols-3 gap-4">
                {skillCategory.skills.map(skill => (
                  <motion.div
                    key={skill.name}
                    className="relative flex flex-col items-center justify-center p-4 transition-all duration-300 border-2 border-transparent rounded-lg bg-gradient-to-br from-primary to-surface hover:shadow-2xl hover:border-accent"
                    whileHover={{ y: -5, scale: 1.1 }}
                  >
                    <img src={skill.logo} alt={skill.name} className="object-contain w-12 h-12" />
                    <p className="mt-2 text-sm text-center text-text-secondary">{skill.name}</p>
                    <span className="absolute inset-0 transition-opacity duration-300 rounded-lg opacity-0 group-hover:opacity-100" style={{ boxShadow: '0 0 10px #00C6D8' }}></span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;