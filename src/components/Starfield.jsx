import React, { useEffect, useRef } from 'react';

const Starfield = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationFrameId;

    canvas.width = width;
    canvas.height = height;

    const stars = [];
    const numStars = 200;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2,
        speedX: (Math.random() - 0.5) * 0.2, // Slow drift
        speedY: (Math.random() - 0.5) * 0.2,
        brightness: Math.random(),
        twinkleSpeed: Math.random() * 0.02 + 0.005
      });
    }

    const draw = () => {
      ctx.fillStyle = '#050a18'; // Deep space background
      ctx.fillRect(0, 0, width, height);

      stars.forEach(star => {
        // Twinkle effect
        star.brightness += star.twinkleSpeed;
        if (star.brightness > 1 || star.brightness < 0.3) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }

        // Move stars
        star.x += star.speedX;
        star.y += star.speedY;

        // Wrap around screen
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${star.brightness})`; // Light purple tint
        ctx.fill();
        
        // Add a subtle glow to some stars
        if (star.size > 1.5) {
            ctx.shadowBlur = 10;
            ctx.shadowColor = "rgba(56, 189, 248, 0.5)"; // Sky blue glow
        } else {
            ctx.shadowBlur = 0;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
};

export default Starfield;
