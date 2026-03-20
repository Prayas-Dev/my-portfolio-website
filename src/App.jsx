import React, { Suspense, lazy } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import Navbar from "./components/Navbar/Navbar"
import About from "./components/About/About"
import BlurBlob from "./BlurBlob"
import CustomCursor from "./components/CustomCursor/CustomCursor"
import ParticleBackground from "./components/ParticleBackground/ParticleBackground"

// Lazy-loaded components for better performance
const Skills = lazy(() => import("./components/Skills/Skills"))
const Experience = lazy(() => import("./components/Experience/Experience"))
const Work = lazy(() => import("./components/Work/Work"))
const Education = lazy(() => import("./components/Education/Education"))
const Contact = lazy(() => import("./components/Contact/Contact"))
const Footer = lazy(() => import("./components/Footer/Footer"))

// Simple loading fallback
const SectionLoader = () => (
  <div className="flex items-center justify-center w-full py-20 min-h-[400px]">
    <div className="w-12 h-12 border-4 border-[#8245ec] border-t-transparent rounded-full animate-spin" />
  </div>
)

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div className="bg-[#050414] min-h-screen relative overflow-hidden">
      <CustomCursor />

      {/* Scroll Progress Bar at very top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-[#8245ec] to-pink-500 origin-left z-[10000]"
        style={{ scaleX }}
      />

      {/* Decorative Blurs */}
      <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }}></BlurBlob>

      {/* Dynamic Particle Background replacing static grid */}
      <ParticleBackground />

      <div className="relative pt-20 z-10">
        <Navbar />
        {/* About is kept eager as it's the hero section */}
        <About />
        
        <Suspense fallback={<SectionLoader />}>
          <Skills />
          <Experience />
          <Work />
          <Education />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </div>
  )
}

export default App
