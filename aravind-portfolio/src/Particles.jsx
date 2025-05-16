import React, { useEffect } from 'react';

export default function Particles() {
  useEffect(() => {
    // Create random particles
    const particlesContainer = document.querySelector('.particles');
    const numberOfParticles = 50;
    
    for (let i = 0; i < numberOfParticles; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      // Random size (1-4px)
      const size = Math.random() * 3 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random opacity
      particle.style.opacity = Math.random() * 0.5 + 0.1;
      
      // Append to container
      particlesContainer.appendChild(particle);
      
      // Animation
      animateParticle(particle);
    }
    
    function animateParticle(particle) {
      // Initial position
      const startPosX = parseFloat(particle.style.left);
      const startPosY = parseFloat(particle.style.top);
      
      // Random movement range
      const rangeX = Math.random() * 10 - 5; // -5 to 5
      const rangeY = Math.random() * 10 - 5; // -5 to 5
      
      // Duration (10-20 seconds)
      const duration = Math.random() * 10000 + 10000;
      
      // Start time
      let startTime = null;
      
      function moveParticle(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / duration;
        
        if (progress >= 1) {
          // Animation completed, restart
          startTime = null;
          animateParticle(particle);
          return;
        }
        
        // Calculate new position using sin for smooth back-and-forth movement
        const newX = startPosX + Math.sin(progress * Math.PI * 2) * rangeX;
        const newY = startPosY + Math.sin(progress * Math.PI * 2) * rangeY;
        
        // Update position
        particle.style.left = `${newX}%`;
        particle.style.top = `${newY}%`;
        
        // Continue animation
        requestAnimationFrame(moveParticle);
      }
      
      requestAnimationFrame(moveParticle);
    }
    
    // Cleanup function
    return () => {
      const particles = document.querySelectorAll('.particle');
      particles.forEach(particle => particle.remove());
    };
  }, []);

  return <div className="particles"></div>;
}