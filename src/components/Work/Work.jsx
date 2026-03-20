import React, { useState, useRef } from "react"
import { projects } from "../../constants"
import { motion, AnimatePresence } from "framer-motion"
import { FiX, FiGithub, FiExternalLink } from "react-icons/fi"
import SectionHeader from "../SectionHeader/SectionHeader"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const containerRef = useRef(null)

  // GSAP scroll trigger animation for cards floating into view
  useGSAP(() => {
    gsap.fromTo(".project-card",
      { y: 100, rotation: 5, opacity: 0.5 },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        y: 0,
        rotation: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      }
    )
  }, { scope: containerRef })

  const handleOpenModal = (project) => {
    setSelectedProject(project)
    // Prevent background scrolling when modal is open
    document.body.style.overflow = "hidden"
  }

  const handleCloseModal = () => {
    setSelectedProject(null)
    // Restore background scrolling
    document.body.style.overflow = "auto"
  }

  return (
    <section
      id="project"
      ref={containerRef}
      className="py-24 pb-32 px-[7vw] md:px-[7vw] lg:px-[14vw] font-sans relative bg-[#050414]"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      {/* Section Title */}
      <SectionHeader
        title="Projects"
        highlightText="Featured"
        subtitle="A showcase of my recent work — blending AI, web, and blockchain technologies into seamless digital experiences."
      />

      {/* Project Grid */}
      <div className="relative z-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-14">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="project-card group relative h-[400px] overflow-hidden rounded-3xl cursor-pointer shadow-2xl transition-all duration-500 hover:shadow-[#8245ec]/30 border border-white/10 bg-gray-900"
          >
            {/* Project Image Mockup */}
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/60 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>

            {/* Hover Reveal Content Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-display transition-transform duration-500 group-hover:-translate-y-2">
                {project.title}
              </h3>

              {/* Sliding Description & Tags (Hidden by default, slides up on hover) */}
              <div className="overflow-hidden">
                <div className="transform translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 h-0 group-hover:h-auto">
                  <p className="text-gray-300 mb-6 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-white/10 backdrop-blur-md border border-white/5 text-xs font-medium text-white rounded-full px-3 py-1.5"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="bg-white/5 border border-white/5 text-xs font-medium text-gray-400 rounded-full px-3 py-1.5">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Framer Motion Full-Screen Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-[#030014]/80 backdrop-blur-xl"
            onClick={handleCloseModal}
          >
            {/* Close Button top-right */}
            <button
              onClick={handleCloseModal}
              className="absolute top-6 right-6 sm:top-10 sm:right-10 text-white/50 hover:text-white transition-colors duration-300 z-50 p-2 bg-white/5 hover:bg-white/10 rounded-full backdrop-blur-md"
            >
              <FiX className="w-8 h-8" />
            </button>

            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0520] border border-white/10 rounded-[2rem] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Image Header */}
              <div className="w-full h-64 sm:h-80 lg:h-96 relative overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0520] to-transparent"></div>
              </div>

              {/* Modal Body */}
              <div className="p-8 sm:p-12 -mt-20 relative z-10">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-display drop-shadow-lg">
                  {selectedProject.title}
                </h3>

                <div className="flex flex-wrap gap-3 mb-10">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#8245ec]/20 text-purple-300 border border-[#8245ec]/30 text-sm font-medium rounded-full px-4 py-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="prose prose-invert max-w-none mb-12">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Modal Actions */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-8 py-4 text-white font-bold rounded-full transition-all duration-300 bg-gradient-to-r from-[#8245ec] to-purple-500 hover:shadow-[0_0_20px_#8245ec] hover:-translate-y-1"
                  >
                    <FiGithub className="w-5 h-5" />
                    View Source Code
                  </a>
                  {/* Optional Live Demo buttons could go here */}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Work
