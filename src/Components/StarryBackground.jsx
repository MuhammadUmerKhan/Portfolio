import React, { useEffect, useRef } from 'react';

const CosmicParticleBackground = () => {
  const canvasRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Handle window resize
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Particle class for enhanced cosmic effect
    class Particle {
      constructor(layer) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = layer === 'foreground' ? Math.random() * 2 + 1 : Math.random() * 1 + 0.5;
        this.speedX = (Math.random() - 0.5) * (layer === 'foreground' ? 0.8 : 0.4);
        this.speedY = (Math.random() - 0.5) * (layer === 'foreground' ? 0.8 : 0.4);
        this.hue = 180 + Math.random() * 60; // Teal to blue range (180-240)
        this.pulseSpeed = Math.random() * 0.02 + 0.01; // Pulsing effect
        this.pulseOffset = Math.random() * Math.PI * 2;
      }

      update(time) {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

        // Mouse interaction
        const dx = mousePosition.current.x - this.x;
        const dy = mousePosition.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 120) {
          const angle = Math.atan2(dy, dx);
          this.speedX += Math.cos(angle) * 0.2;
          this.speedY += Math.sin(angle) * 0.2;
        }
      }

      draw(time) {
        const pulse = Math.sin(time * this.pulseSpeed + this.pulseOffset) * 0.5 + 0.5;
        const radius = this.radius * (0.8 + pulse * 0.4); // Pulsing size

        // Draw glowing particle
        ctx.beginPath();
        ctx.arc(this.x, this.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 80%, 60%, 0.9)`;
        ctx.shadowBlur = 15;
        ctx.shadowColor = `hsla(${this.hue}, 80%, 60%, 0.6)`;
        ctx.fill();
      }
    }

    // Create particles
    const createParticles = (count, layer) => {
      const particles = [];
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(layer));
      }
      return particles;
    };

    // Draw connecting lines between nearby particles
    const drawConnections = (particles) => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `hsla(${p1.hue}, 70%, 50%, ${1 - distance / 100})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    // Animate particles
    const animate = (backgroundParticles, foregroundParticles, time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw background particles
      backgroundParticles.forEach((particle) => {
        particle.update(time);
        ctx.globalAlpha = 0.4; // Fainter for background
        particle.draw(time);
      });

      // Update and draw foreground particles
      foregroundParticles.forEach((particle) => {
        particle.update(time);
        ctx.globalAlpha = 0.9; // Brighter for foreground
        particle.draw(time);
      });

      // Draw connections between foreground particles
      ctx.globalAlpha = 0.3;
      drawConnections(foregroundParticles);

      animationFrameId = requestAnimationFrame(() => animate(backgroundParticles, foregroundParticles, time + 1));
    };

    // Initialize
    resizeCanvas();
    const backgroundParticles = createParticles(200, 'background'); // More subtle particles
    const foregroundParticles = createParticles(80, 'foreground'); // Fewer, prominent particles

    // Mouse move handler
    const handleMouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    animate(backgroundParticles, foregroundParticles, 0);
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
      style={{
        background: '#000000', // Pure black background
        zIndex: 1,
      }}
    />
  );
};

export default CosmicParticleBackground;