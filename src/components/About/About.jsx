import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Completed' },
  { value: '4', label: 'Programming Languages' },
];

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
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
    <section id="about" ref={ref} className="py-20 bg-surface">
      <motion.div
        className="grid items-center gap-12 px-6 mx-auto max-w-7xl md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants}>
          <h2 className="mb-4 text-4xl font-bold font-mona-sans text-accent">About Me</h2>
          <p className="leading-relaxed text-text-secondary">
            I'm a passionate Full Stack Developer with a knack for turning ideas into beautiful, functional, and user-centric web applications. With a strong foundation in both front-end and back-end technologies, I enjoy building everything from responsive UIs to robust server-side logic. I'm a quick learner, a collaborative team player, and I'm always excited to take on new challenges.
          </p>
        </motion.div>
        <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4">
          {stats.map(stat => (
            <div key={stat.label} className="relative p-6 text-center transition-all duration-300 transform rounded-lg shadow-lg group bg-gradient-to-br from-primary to-surface hover:shadow-2xl hover:scale-105">
              <div className="absolute inset-0 transition-opacity duration-300 rounded-lg opacity-0 group-hover:opacity-100" style={{ boxShadow: '0 0 15px #00C6D8' }}></div>
              <p className="relative z-10 text-4xl font-bold text-accent">{stat.value}</p>
              <p className="relative z-10 mt-2 text-text-secondary">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;