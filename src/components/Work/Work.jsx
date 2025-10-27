import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../../constants';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" ref={ref} className="py-20 bg-background">
      <motion.div
        className="px-6 mx-auto max-w-7xl"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.h2 variants={itemVariants} className="mb-12 text-4xl font-bold text-center font-mona-sans text-accent">Projects</motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map(project => (
            <motion.div
  key={project.id}
  className="relative overflow-hidden transition-all duration-300 transform border-2 border-transparent rounded-lg shadow-lg group bg-gradient-to-br from-surface to-background hover:border-accent hover:scale-105"
  variants={itemVariants}
  onClick={() => setSelectedProject(project)}
  whileHover={{ y: -5 }}
>
  {/* Card content that blurs on hover */}
  <div className="relative z-10 p-6 transition-all duration-300 group-hover:blur-sm group-hover:opacity-60">
    <h3 className="mb-2 text-xl font-bold text-text-main">{project.title}</h3>
    <p className="mb-4 text-sm text-text-secondary">{project.description}</p>
    <div className="flex flex-wrap gap-2">
      {project.tags.map(tag => (
        <span key={tag} className="bg-primary text-text-main text-xs font-semibold px-2.5 py-0.5 rounded-full">{tag}</span>
      ))}
    </div>
  </div>

  {/* Overlay for View Project */}
  <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 opacity-0 backdrop-blur-md bg-gradient-to-t from-black/70 to-transparent group-hover:opacity-100">
    <p className="text-lg font-bold text-white cursor-pointer">View Project</p>
  </div>

  {/* Glowing border on hover */}
  <div className="absolute inset-0 transition-opacity duration-300 rounded-lg opacity-0 group-hover:opacity-100" style={{ boxShadow: '0 0 15px #00C6D8' }}></div>
</motion.div>

          ))}
        </div>
      </motion.div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={() => setSelectedProject(null)}>
          <motion.div
            className="relative w-full max-w-2xl p-8 mx-4 border-2 rounded-lg shadow-2xl bg-gradient-to-br from-surface to-background border-accent"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={e => e.stopPropagation()}
          >
            <button onClick={() => setSelectedProject(null)} className="absolute text-2xl top-4 right-4 text-text-secondary hover:text-text-main">&times;</button>
            <h2 className="mb-4 text-3xl font-bold text-accent">{selectedProject.title}</h2>
            <p className="mb-6 text-text-secondary">{selectedProject.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.tags.map(tag => (
                <span key={tag} className="bg-primary text-text-main text-xs font-semibold px-2.5 py-0.5 rounded-full">{tag}</span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="relative flex items-center gap-2 px-4 py-2 overflow-hidden font-bold text-white transition-transform rounded-lg bg-primary hover:scale-105 group">
                <FaGithub className="relative z-10" /> <span className="relative z-10">GitHub</span>
                <span className="absolute inset-0 w-full h-full transition-opacity duration-500 opacity-0 bg-gradient-to-r from-primary via-accent to-primary group-hover:opacity-100 animate-pulse"></span>
              </a>
              {selectedProject.webapp && (
                <a href={selectedProject.webapp} target="_blank" rel="noopener noreferrer" className="relative flex items-center gap-2 px-4 py-2 overflow-hidden font-bold text-white transition-transform rounded-lg bg-primary hover:scale-105 group">
                  <FaExternalLinkAlt className="relative z-10" /> <span className="relative z-10">Live Demo</span>
                  <span className="absolute inset-0 w-full h-full transition-opacity duration-500 opacity-0 bg-gradient-to-r from-primary via-accent to-primary group-hover:opacity-100 animate-pulse"></span>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Work;
