"use client"

import { useEffect, useRef } from "react"

const LightCosmicBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    let animationFrameId

    // Handle window resize
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Particle class with varied sizes
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        // Randomly assign small or large size
        this.radius = Math.random() < 0.7 ? Math.random() * 1 + 0.5 : Math.random() * 2 + 2 // 70% small (0.5-1.5), 30% large (2-4)
        this.speedY = Math.random() * 0.5 + 0.1 // Slower vertical movement
        this.hue = 180 + Math.random() * 60 // Teal to blue range (180-240)
      }

      update() {
        this.y += this.speedY
        // Reset to top when off-screen
        if (this.y > canvas.height) {
          this.y = -this.radius
          this.x = Math.random() * canvas.width // Randomize x-position
        }
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${this.hue}, 80%, 60%, 0.7)`
        ctx.fill()
      }
    }

    // Create particles
    const createParticles = (count) => {
      const particles = []
      for (let i = 0; i < count; i++) {
        particles.push(new Particle())
      }
      return particles
    }

    // Adjust particle count based on screen size
    const getParticleCount = () => {
      const width = window.innerWidth
      if (width < 768) {
        return 150 // Fewer particles on mobile for better performance
      } else if (width < 1024) {
        return 200 // Medium amount on tablets
      } else {
        return 250 // Full amount on desktop
      }
    }

    // Animate particles
    const animate = (particles) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.update()
        ctx.globalAlpha = 0.5 // Consistent faint glow
        particle.draw()
      })

      animationFrameId = requestAnimationFrame(() => animate(particles))
    }

    // Initialize
    resizeCanvas()
    const particles = createParticles(getParticleCount())

    animate(particles)

    // Handle resize with debounce for performance
    let resizeTimeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        resizeCanvas()
        // Recreate particles on significant resize
        if (Math.abs(canvas.width - window.innerWidth) > 200) {
          particles.length = 0
          particles.push(...createParticles(getParticleCount()))
        }
      }, 200)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      clearTimeout(resizeTimeout)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
      style={{
        background: "#000000", // Pure black background
        zIndex: 1,
      }}
    />
  )
}

export default LightCosmicBackground
