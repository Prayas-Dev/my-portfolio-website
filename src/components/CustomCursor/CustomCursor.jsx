import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false)

    // Fast cursor dot
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    // Smoother trailing ring physics
    const ringX = useSpring(cursorX, {
        stiffness: 50,
        damping: 35,
        mass: 1.2
    })

    const ringY = useSpring(cursorY, {
        stiffness: 50,
        damping: 35,
        mass: 1.2
    })

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX)
            cursorY.set(e.clientY)
        }

        const handleMouseOver = (e) => {
            const target = e.target

            if (
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                target.closest('.project-card') ||
                window.getComputedStyle(target).cursor === 'pointer'
            ) {
                setIsHovering(true)
            } else {
                setIsHovering(false)
            }
        }

        window.addEventListener('mousemove', moveCursor)
        window.addEventListener('mouseover', handleMouseOver)

        return () => {
            window.removeEventListener('mousemove', moveCursor)
            window.removeEventListener('mouseover', handleMouseOver)
        }
    }, [cursorX, cursorY])

    return (
        <>
            {/* Small dot tracking exact position */}
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />

            {/* Smooth trailing ring */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
                style={{
                    x: ringX,
                    y: ringY,
                    translateX: '-50%',
                    translateY: '-50%',
                    width: isHovering ? 52 : 38,
                    height: isHovering ? 52 : 38,
                    border: isHovering
                        ? '2px solid #8245ec'
                        : '1px solid rgba(255, 255, 255, 0.4)',
                    backgroundColor: isHovering
                        ? 'rgba(130, 69, 236, 0.12)'
                        : 'transparent',
                    backdropFilter: isHovering ? 'blur(3px)' : 'none',
                    transition: 'width 0.25s ease, height 0.25s ease'
                }}
            />
        </>
    )
}

export default CustomCursor