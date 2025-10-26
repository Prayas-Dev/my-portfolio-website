import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaGithub />, href: 'https://github.com/Prayas-Dev' },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/prayas-pandey-' },
  { icon: <FaTwitter />, href: '#' }, // Add your Twitter link
];

const Contact = () => {
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
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" ref={ref} className="py-20 bg-background">
      <motion.div
        className="max-w-4xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.h2 variants={itemVariants} className="text-4xl font-bold font-mona-sans mb-8 text-center text-accent">Get in Touch</motion.h2>
        <motion.p variants={itemVariants} className="text-text-secondary text-center mb-12">
          Have a project in mind or just want to say hi? Feel free to reach out!
        </motion.p>
        <motion.form
          variants={itemVariants}
          action="https://formspree.io/f/your_form_id" // Replace with your Formspree ID
          method="POST"
          className="grid grid-cols-1 gap-6"
        >
          <input type="text" name="name" placeholder="Your Name" className="bg-gradient-to-br from-surface to-background p-4 rounded-lg border-2 border-primary focus:border-accent focus:outline-none transition-colors text-text-main placeholder-text-secondary" required />
          <input type="email" name="email" placeholder="Your Email" className="bg-gradient-to-br from-surface to-background p-4 rounded-lg border-2 border-primary focus:border-accent focus:outline-none transition-colors text-text-main placeholder-text-secondary" required />
          <textarea name="message" placeholder="Your Message" rows="5" className="bg-gradient-to-br from-surface to-background p-4 rounded-lg border-2 border-primary focus:border-accent focus:outline-none transition-colors text-text-main placeholder-text-secondary" required></textarea>
          <motion.button
            type="submit"
            className="relative group bg-primary text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <span className="relative z-10">Send Message</span>
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></span>
          </motion.button>
        </motion.form>
        <motion.div variants={itemVariants} className="flex justify-center gap-8 mt-12">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-text-secondary hover:text-accent transition-colors duration-300"
              whileHover={{ y: -5 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;