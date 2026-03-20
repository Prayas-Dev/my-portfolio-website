import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

const BlurBlob = ({ position, size }) => {
    const blobRef = useRef(null)
    const mousePos = useRef({ x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0, y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0 })
    const currentPos = useRef({ x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0, y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0 })

    useEffect(() => {
        const handleMouseMove = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY }
        }
        window.addEventListener('mousemove', handleMouseMove)

        let animId;
        const animate = () => {
            // Heavy dampening: move 3% towards the mouse each frame
            currentPos.current.x += (mousePos.current.x - currentPos.current.x) * 0.03
            currentPos.current.y += (mousePos.current.y - currentPos.current.y) * 0.03

            if (blobRef.current) {
                // Fixed positioning allows it to follow cursor relative to viewport
                blobRef.current.style.transform = `translate(${currentPos.current.x}px, ${currentPos.current.y}px) translate(-50%, -50%)`
            }
            animId = requestAnimationFrame(animate)
        }
        animId = requestAnimationFrame(animate)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            cancelAnimationFrame(animId)
        }
    }, [])

    return (
        <div 
            ref={blobRef} 
            className='fixed z-0 pointer-events-none'
            style={{
                top: 0,
                left: 0,
                width: size?.width || '30vw',
                height: size?.height || '40vh',
            }}
        >
            <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-400 opacity-30 blur-3xl animate-blob mix-blend-screen"></div>
        </div>
    )
}

// Define prop types
BlurBlob.propTypes = {
    position: PropTypes.shape({
        top: PropTypes.string,
        left: PropTypes.string,
    }),
    size: PropTypes.shape({
        width: PropTypes.string,
        height: PropTypes.string
    }),
}

export default BlurBlob
