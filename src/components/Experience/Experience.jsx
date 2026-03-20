import React, { useEffect, useRef } from "react";
import { experiences } from "../../constants";
import SectionHeader from "../SectionHeader/SectionHeader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Glow Path animation
    gsap.to(lineRef.current, {
      height: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom 20%",
        scrub: true,
      },
    });

    // Cards Slide and Fade
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      const isLeft = index % 2 === 0;
      gsap.fromTo(
        card,
        {
          opacity: 0,
          x: isLeft ? -50 : 50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Dots pop-in animation
    const dots = gsap.utils.toArray(".timeline-dot");
    dots.forEach((dot) => {
      gsap.fromTo(
        dot,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: dot,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans relative"
    >
      <SectionHeader
        title="EXPERIENCE"
        subtitle="A collection of my work experience and the roles I have taken in various organizations."
      />

      {/* Experience Timeline */}
      <div className="relative mt-16">
        {/* Vertical line baseline */}
        <div className="absolute left-[20px] sm:left-1/2 w-1 h-full transform -translate-x-1/2 bg-white/10"></div>
        
        {/* Glow Path */}
        <div
          ref={lineRef}
          className="absolute left-[20px] sm:left-1/2 w-1 h-0 transform -translate-x-1/2 bg-[#8245ec] shadow-[0_0_15px_#8245ec]"
        ></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div key={experience.id} className="flex items-center mb-16 relative timeline-item w-full">
            {/* Timeline Dot */}
            <div className="timeline-dot absolute left-[20px] sm:left-1/2 transform -translate-x-1/2 bg-[#1a1a29] w-6 h-6 rounded-full flex justify-center items-center z-10 border-4 border-[#8245ec] shadow-[0_0_15px_rgba(130,69,236,0.6)]"></div>

            {/* Content Section */}
            <div
              ref={(el) => (cardsRef.current[index] = el)}
              className={`timeline-card w-[calc(100%-60px)] ml-[60px] sm:w-[calc(50%-3rem)] sm:ml-0 p-6 sm:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:shadow-[0_0_30px_rgba(130,69,236,0.2)] transform transition-all duration-300 hover:-translate-y-2 relative ${
                index % 2 !== 0 ? "sm:ml-auto" : "sm:mr-auto"
              }`}
            >
              {/* Pulse Indicator for Current */}
              {index === 0 && (
                <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-green-400 text-xs font-semibold tracking-wide uppercase">Current</span>
                </div>
              )}

              {/* Prominent Logo & Role */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4 mt-2 sm:mt-0">
                {experience.img && (
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain bg-white/10 p-2 rounded-xl border border-white/20 shadow-lg"
                  />
                )}
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                    {experience.role}
                  </h3>
                  <h4 className="text-purple-400 text-base sm:text-lg font-medium">
                    {experience.company}
                  </h4>
                </div>
              </div>

              <p className="text-sm text-gray-400 font-mono mb-4 border-l-2 border-[#8245ec] pl-3">
                {experience.date}
              </p>

              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                {experience.desc}
              </p>

              <div className="mt-6">
                <ul className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="bg-white/5 text-gray-300 px-3 py-1.5 text-xs font-medium rounded-full border border-white/10 shadow-sm hover:bg-white/10 transition-colors"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
