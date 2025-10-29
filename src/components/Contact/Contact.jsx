import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import { toast, Slide } from 'react-toastify';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { CheckCircle2, XCircle } from 'lucide-react'; // for custom icons

const socialLinks = [
  { icon: <FaGithub />, href: 'https://github.com/Prayas-Dev' },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/prayas-pandey-' },
  { icon: <FaTwitter />, href: '#' },
];

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_9vn712q',       // ✅ your EmailJS service ID
        'template_p3i4fv6',      // ✅ your EmailJS template ID
        form.current,
        '-290b_mK7eHCRw5ch'      // ✅ your EmailJS public key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();

          toast.success(
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-green-400" size={20} />
              <span>Message sent successfully!</span>
            </div>,
            {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Slide,
              style: {
                background: "linear-gradient(135deg, #1e1b4b, #4c1d95)",
                color: "#fff",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.4)"
              }
            }
          );
        },
        (error) => {
          console.error("FAILED...", error);

          toast.error(
            <div className="flex items-center gap-2">
              <XCircle className="text-red-400" size={20} />
              <span>Failed to send message. Please try again.</span>
            </div>,
            {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Slide,
              style: {
                background: "linear-gradient(135deg, #2e1065, #7e22ce)",
                color: "#fff",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.4)"
              }
            }
          );
        }
      );
  };

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
    <section id="contact" ref={ref} className="relative py-20 bg-background">
      <motion.div
        className="max-w-4xl px-6 mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.h2
          variants={itemVariants}
          className="mb-8 text-4xl font-bold text-center font-mona-sans text-accent"
        >
          Get in Touch
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="mb-12 text-center text-text-secondary"
        >
          Have a project in mind or just want to say hi? Feel free to reach out!
        </motion.p>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          variants={itemVariants}
          className="grid grid-cols-1 gap-6"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="p-4 transition-colors border-2 rounded-lg bg-gradient-to-br from-surface to-background border-primary focus:border-accent focus:outline-none text-text-main placeholder-text-secondary"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="p-4 transition-colors border-2 rounded-lg bg-gradient-to-br from-surface to-background border-primary focus:border-accent focus:outline-none text-text-main placeholder-text-secondary"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="p-4 transition-colors border-2 rounded-lg bg-gradient-to-br from-surface to-background border-primary focus:border-accent focus:outline-none text-text-main placeholder-text-secondary"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="p-4 transition-colors border-2 rounded-lg bg-gradient-to-br from-surface to-background border-primary focus:border-accent focus:outline-none text-text-main placeholder-text-secondary"
            required
          ></textarea>

          <motion.button
            type="submit"
            className="relative px-6 py-3 overflow-hidden font-bold text-white transition-all duration-300 transform rounded-lg shadow-lg group bg-primary hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <span className="relative z-10">Send Message</span>
            <span className="absolute inset-0 w-full h-full transition-opacity duration-500 opacity-0 bg-gradient-to-r from-primary via-accent to-primary group-hover:opacity-100 animate-pulse"></span>
          </motion.button>
        </motion.form>

        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-8 mt-12"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl transition-colors duration-300 text-text-secondary hover:text-accent"
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
