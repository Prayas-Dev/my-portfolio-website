import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { SkillsInfo } from '../../constants'
import SectionHeader from '../SectionHeader/SectionHeader'

const SkillCapsule = ({ skill }) => (
    <motion.div 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center px-4 py-2 sm:px-6 sm:py-3 space-x-3 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full cursor-pointer transition-colors duration-300 hover:bg-[#8245ec]/20 hover:border-[#8245ec]/50 shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(130,69,236,0.3)]"
    >
        <img src={skill.logo} alt={skill.name} className="w-5 h-5 sm:w-7 sm:h-7 object-contain" />
        <span className="text-sm sm:text-base font-semibold text-gray-200 whitespace-nowrap tracking-wide">{skill.name}</span>
    </motion.div>
);

const MarqueeRow = ({ skills, direction = 'left', speed = 30 }) => {
    const [isHovered, setIsHovered] = useState(false);

    // Duplicate skills to ensure 1 set is wide enough to cover most screens seamlessly
    let singleSet = [...skills];
    while(singleSet.length < 15) {
        singleSet = [...singleSet, ...skills];
    }

    const SkillSet = () => (
        // Added padding-right to equal the gap, so that the width is exactly identical when chained
        <div className="flex gap-4 sm:gap-6 pr-4 sm:pr-6">
            {singleSet.map((skill, index) => (
                <SkillCapsule key={`${skill.name}-${index}`} skill={skill} />
            ))}
        </div>
    );

    return (
        <div className="relative flex w-full overflow-hidden py-4 my-2"
             style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
             
             {/* Subtle horizontal glow behind the row imitating BlurBlob horizontally stretched */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-[#8245ec]/10 blur-[80px] rounded-full pointer-events-none z-0"></div>

            <div 
                className="flex w-max relative z-10"
                style={{
                    animation: `${direction === 'left' ? 'scrollLeft' : 'scrollRight'} ${speed}s linear infinite`,
                    animationPlayState: isHovered ? 'paused' : 'running'
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* 2 identical sets render side by side. 50% translation shifts exactly one set over */}
                <SkillSet />
                <SkillSet />
            </div>
        </div>
    )
}

const Skills = () => {
  const frontendSkills = SkillsInfo.find(c => c.title === 'Frontend')?.skills || [];
  const backendSkills = SkillsInfo.find(c => c.title === 'Backend')?.skills || [];
  const languageSkills = SkillsInfo.find(c => c.title === 'Languages')?.skills || [];
  const row2Skills = [...backendSkills, ...languageSkills];
  const toolSkills = SkillsInfo.find(c => c.title === 'Tools')?.skills || [];

  return (
    <section
      id='skills'
      className='py-24 pb-32 font-sans relative z-10 overflow-hidden'
    >
      <style>
        {`
          @keyframes scrollLeft {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
          }
          @keyframes scrollRight {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0%); }
          }
        `}
      </style>
      
      <div className="px-[7vw] md:px-[7vw] lg:px-[14vw] mb-12">
        <SectionHeader
          title="Skills"
          highlightText="Professional"
          subtitle="Collection of my technical expertise navigating the modern web. Smoothly loop and hover to explore my tech stack."
        />
      </div>

      <div className="flex flex-col space-y-2 sm:space-y-6">
        {/* Row 1: Frontend (Left, Slow) */}
        <MarqueeRow skills={frontendSkills} direction="left" speed={40} />
        
        {/* Row 2: Backend + Languages (Right, Faster) */}
        <MarqueeRow skills={row2Skills} direction="right" speed={30} />
        
        {/* Row 3: Tools (Left, Slowest) */}
        <MarqueeRow skills={toolSkills} direction="left" speed={50} />
      </div>
    </section>
  )
}

export default Skills