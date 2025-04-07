import React, { useEffect, useRef } from 'react';

const StarryBackground = () => {
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

    // Create stars with layers (background and foreground)
    const createStars = (count, layer) => {
      const stars = [];
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: layer === 'foreground' ? Math.random() * 2 + 1 : Math.random() * 1 + 0.5, // Larger for foreground
          speed: layer === 'foreground' ? Math.random() * 0.8 + 0.2 : Math.random() * 0.4, // Faster for foreground
          angle: Math.random() * Math.PI * 2,
          hue: Math.random() * 360, // For color variation
          trailLength: layer === 'foreground' ? Math.random() * 10 + 5 : Math.random() * 5, // Longer trails for foreground
        });
      }
      return stars;
    };

    // Draw stars with glow and trails
    const drawStars = (stars, layer) => {
      ctx.save();
      if (layer === 'background') {
        ctx.globalAlpha = 0.3; // Fainter for background
      } else {
        ctx.globalAlpha = 0.7; // Brighter for foreground
      }

      stars.forEach((star) => {
        // Draw trail
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x - Math.cos(star.angle) * star.trailLength, star.y - Math.sin(star.angle) * star.trailLength);
        ctx.strokeStyle = `hsla(${star.hue}, 70%, 50%, 0.5)`;
        ctx.lineWidth = star.radius / 2;
        ctx.stroke();

        // Draw star with glow
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${star.hue}, 70%, 50%, 0.8)`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = `hsla(${star.hue}, 70%, 50%, 0.5)`;
        ctx.fill();
      });

      ctx.restore();
    };

    // Animate stars with mouse interaction
    const animateStars = (backgroundStars, foregroundStars) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw background stars (slower, smaller)
      backgroundStars.forEach((star) => {
        star.y += star.speed;
        star.x += Math.cos(star.angle) * star.speed * 0.5; // Slight horizontal drift
        if (star.y > canvas.height) star.y = -star.radius;
        if (star.x > canvas.width) star.x = -star.radius;
        if (star.x < -star.radius) star.x = canvas.width;

        // Mouse interaction (slight attraction/repulsion)
        const dx = mousePosition.current.x - star.x;
        const dy = mousePosition.current.y - star.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 100) {
          const angleToMouse = Math.atan2(dy, dx);
          star.x += Math.cos(angleToMouse) * 0.1;
          star.y += Math.sin(angleToMouse) * 0.1;
        }
      });

      // Update and draw foreground stars (faster, larger, with more glow)
      foregroundStars.forEach((star) => {
        star.y += star.speed;
        star.x += Math.cos(star.angle) * star.speed; // More pronounced drift
        if (star.y > canvas.height) star.y = -star.radius;
        if (star.x > canvas.width) star.x = -star.radius;
        if (star.x < -star.radius) star.x = canvas.width;

        // Mouse interaction (stronger effect)
        const dx = mousePosition.current.x - star.x;
        const dy = mousePosition.current.y - star.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 150) {
          const angleToMouse = Math.atan2(dy, dx);
          star.x += Math.cos(angleToMouse) * 0.3;
          star.y += Math.sin(angleToMouse) * 0.3;
        }
      });

      drawStars(backgroundStars, 'background');
      drawStars(foregroundStars, 'foreground');

      animationFrameId = requestAnimationFrame(() => animateStars(backgroundStars, foregroundStars));
    };

    // Initialize
    resizeCanvas();
    const backgroundStars = createStars(300, 'background'); // More stars in background
    const foregroundStars = createStars(100, 'foreground'); // Fewer, brighter stars in foreground

    // Mouse move handler
    const handleMouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    animateStars(backgroundStars, foregroundStars);
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
        background: 'linear-gradient(to bottom, #000000, #0a0a0a, #0a0a0a)',
        zIndex: 1,
      }}
    />
  );
};

export default StarryBackground;