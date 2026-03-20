import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const SectionHeader = ({ title, highlightText, subtitle }) => {
    const headerRef = useRef(null)

    useGSAP(() => {
        // Animate Text fading up
        gsap.from('.header-text', {
            scrollTrigger: {
                trigger: headerRef.current,
                start: 'top 85%',
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
        })

        // Animate Underline expanding from center
        gsap.fromTo('.header-underline',
            { scaleX: 0 },
            {
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: 'top 85%',
                },
                scaleX: 1,
                transformOrigin: 'center center',
                duration: 0.8,
                ease: 'power3.out',
                delay: 0.2 // Slightly after text starts
            }
        )
    }, { scope: headerRef })

    return (
        <div ref={headerRef} className="relative z-10 mb-16 sm:mb-20 text-center">
            <h2 className="header-text text-4xl sm:text-5xl font-bold text-white font-display tracking-wide uppercase">
                {highlightText ? (
                    <>
                        <span className="text-[#8245ec]">{highlightText}</span> {title}
                    </>
                ) : (
                    title
                )}
            </h2>

            <div className="header-underline w-24 sm:w-32 h-1 mx-auto mt-4 bg-gradient-to-r from-[#8245ec] to-purple-400 rounded-full"></div>

            {subtitle && (
                <p className="header-text mt-6 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    {subtitle}
                </p>
            )}
        </div>
    )
}

export default SectionHeader
