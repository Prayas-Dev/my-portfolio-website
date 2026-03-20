import React, { useRef, useEffect } from 'react'

const ParticleBackground = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let particles = []
        let animationFrameId

        const initCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight,
                window.innerHeight
            ) // Cover full scroll height
        }

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width
                this.y = Math.random() * canvas.height
                this.size = Math.random() * 1.5 + 0.5
                this.opacity = Math.random() * 0.5 + 0.1
                this.baseSpeed = Math.random() * 0.5 + 0.2
            }

            update(time) {
                // Flow Field Logic
                // Using sine and cosine based on position and time to generate a generic flow angle
                const angle = Math.sin(this.x * 0.002 + time * 0.3) * Math.cos(this.y * 0.002 + time * 0.3) * Math.PI * 2;
                
                // Add a slight upward bias to the flow field
                this.speedX = Math.cos(angle) * this.baseSpeed;
                this.speedY = Math.sin(angle) * this.baseSpeed - 0.4;

                this.x += this.speedX;
                this.y += this.speedY;

                // Screen Wrap for continuous flow
                if (this.y < -50) this.y = canvas.height + 50;
                if (this.y > canvas.height + 50) this.y = -50;
                if (this.x < -50) this.x = canvas.width + 50;
                if (this.x > canvas.width + 50) this.x = -50;
            }

            draw() {
                // Glow effect configuration
                ctx.shadowBlur = 10;
                ctx.shadowColor = `rgba(130, 69, 236, ${this.opacity * 1.5})`; // Purple-ish glow
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fill()
                
                // Reset shadow blur to avoid accumulating memory/performance hit for other draws
                ctx.shadowBlur = 0;
            }
        }

        const createParticles = () => {
            particles = []
            // Number of particles depends on screen width for performance
            const numParticles = Math.floor((window.innerWidth * window.innerHeight) / 10000)
            for (let i = 0; i < Math.min(numParticles, 200); i++) {
                particles.push(new Particle())
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            
            const time = Date.now() * 0.001;

            particles.forEach((particle) => {
                particle.update(time)
                particle.draw()
            })
            animationFrameId = requestAnimationFrame(animate)
        }

        const handleResize = () => {
            initCanvas()
            createParticles()
        }

        window.addEventListener('resize', handleResize)

        // Initial setup
        initCanvas()
        createParticles()
        animate()

        return () => {
            window.removeEventListener('resize', handleResize)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-0 mix-blend-screen"
            style={{ 
                minHeight: '100vh', 
                height: '100%',
                animation: 'breathe 5s ease-in-out infinite' 
            }}
        />
    )
}

export default ParticleBackground
