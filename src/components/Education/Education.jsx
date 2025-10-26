import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { education } from '../../constants';

const Education = () => {
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
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section id="education" ref={ref} className="py-20 bg-surface">
      <motion.div
        className="max-w-7xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.h2 variants={itemVariants} className="text-4xl font-bold font-mona-sans mb-12 text-center text-accent">Education</motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map(edu => (
            <motion.div
              key={edu.id}
              className="relative group bg-gradient-to-br from-background to-surface p-6 rounded-lg shadow-lg border-2 border-transparent hover:border-accent transition-all duration-300 transform hover:scale-105"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ boxShadow: '0 0 15px #00C6D8' }}></div>
              <h3 className="relative z-10 text-xl font-bold text-text-main">{edu.school}</h3>
              <p className="relative z-10 text-accent font-semibold my-2">{edu.degree}</p>
              <p className="relative z-10 text-sm text-text-secondary mb-2">{edu.date}</p>
              <p className="relative z-10 text-text-secondary leading-relaxed">{edu.desc}</p>
              <p className="relative z-10 text-text-main font-bold mt-4">Grade: {edu.grade}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
