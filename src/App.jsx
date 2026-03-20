import React from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import Navbar from "./components/Navbar/Navbar"
import About from "./components/About/About"
import Skills from "./components/Skills/Skills"
import Experience from "./components/Experience/Experience"
import Education from "./components/Education/Education"
import Contact from "./components/Contact/Contact"
import Work from "./components/Work/Work"
import Footer from "./components/Footer/Footer"
import BlurBlob from "./BlurBlob"
import CustomCursor from "./components/CustomCursor/CustomCursor"
import ParticleBackground from "./components/ParticleBackground/ParticleBackground"

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
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
