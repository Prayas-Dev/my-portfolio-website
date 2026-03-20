import React, { useRef, useEffect, Suspense, lazy } from 'react'
import { ReactTyped } from 'react-typed'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import gsap from 'gsap'
import profileImage from '../../assets/profile2.png'

// Lazy load the heavy 3D Canvas
const ThreeDCanvas = lazy(() => import('./ThreeDCanvas/ThreeDCanvas'))

/* ─────────────────────────── Magnetic Button ──────────────────────────── */
function MagneticButton({ children, href }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 15 })
  const springY = useSpring(y, { stiffness: 200, damping: 15 })

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * 0.3)
    y.set((e.clientY - cy) * 0.3)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.97 }}
      className="inline-block px-8 py-3 mt-5 mb-5 text-lg font-bold text-white transition-shadow duration-300 rounded-full cursor-pointer magnetic-btn"
    >
      {children}
    </motion.a>
  )
}

/* ─────────────────────────── Magnetic Image ──────────────────────────── */
function MagneticImage({ children }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Use a gentler spring for the image wrapper
  const springX = useSpring(x, { stiffness: 100, damping: 20 })
  const springY = useSpring(y, { stiffness: 100, damping: 20 })

  const handleMouseMove = (e) => {
    if(!ref.current) return;
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    // Less movement relative to mouse than the button
    x.set((e.clientX - cx) * 0.15)
    y.set((e.clientY - cy) * 0.15)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="relative z-10"
    >
      {children}
    </motion.div>
  )
}

/* ──────────────────────────── About / Hero ─────────────────────────────── */
const About = () => {
  const headingRef = useRef(null)

  // GSAP staggered text reveal
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-word', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15,
        delay: 0.3,
      })
    }, headingRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="about"
      className="px-[7vw] md:px-[7vw] lg:px-[14vw] font-sans mt-16 md:mt-24 lg:mt-16"
    >
      <div className="flex flex-col-reverse items-center justify-between md:flex-row">
        {/* Left Side */}
        <div className="z-10 mt-8 text-center md:w-1/2 md:text-left md:mt-0">
          <div ref={headingRef}>
            <h1 className="mb-2 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-5xl">
              <span className="inline-block mr-3 hero-word">Hi,</span>
              <span className="inline-block mr-3 hero-word">I</span>
              <span className="inline-block hero-word">am</span>
            </h1>
            <h2 className="mb-4 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-5xl lg:text-5xl font-display">
              <span className="inline-block mr-3 hero-word">Prayas</span>
              <span className="inline-block hero-word">Pandey</span>
            </h2>
          </div>

          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTyped
              strings={[
                'Full Stack Developer',
                'UI/UX Developer',
                'AIML Engineer',
                'Coder',
              ]}
              typeSpeed={100}
              backSpeed={50}
              backDelay={2000}
              loop
            />
          </h3>

          {/* About Me Paragraph */}
          <p className="mt-6 mb-10 text-base leading-relaxed text-gray-400 sm:text-lg md:text-lg lg:text-lg">
            Full-stack developer skilled in building intelligent, responsive web applications with robust backend services and intuitive
            UI, combining data-driven insights with modern development stacks.
          </p>

          {/* Magnetic Resume Button */}
          <MagneticButton href="https://drive.google.com/file/d/1cChmhWpCRPPK1MYqPp2MtAI3gAK_MJHS/view?usp=sharing">
            DOWNLOAD CV
          </MagneticButton>
        </div>

        {/* Right Side - Image & 3D Stack */}
        <div className="relative flex justify-center mb-8 md:w-1/2 md:justify-end md:mb-0">
          <div className="relative flex items-center justify-center">
            {/* Background 3D Canvas */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] z-0 opacity-60 pointer-events-none">
              <Suspense fallback={null}>
                <ThreeDCanvas />
              </Suspense>
            </div>

            {/* Foreground Profile Image */}
            <MagneticImage>
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full
                           bg-white/5 backdrop-blur-md border-[3px] border-[#8245ec]/40 shadow-[0_0_40px_rgba(130,69,236,0.5)]
                           flex items-center justify-center"
              >
                {/* Profile Image itself */}
                <div className="absolute inset-2 overflow-hidden rounded-full bg-black/20">
                  <img 
                    src={profileImage} 
                    alt="Prayas Pandey" 
                    className="object-cover object-center w-full h-full pointer-events-none"
                  />
                </div>

                {/* Optional slight glass gradient overlay */}
                <div className="absolute inset-0 rounded-full pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-white/10"></div>
              </motion.div>
            </MagneticImage>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About