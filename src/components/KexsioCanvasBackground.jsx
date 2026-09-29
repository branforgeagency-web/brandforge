import React, { useEffect, useRef } from "react";

const PARTICLE_COLORS = [
  { r: 239, g: 65,  b: 54  }, // Crimson Red
  { r: 255, g: 77,  b: 77  }, // Electric Red
  { r: 255, g: 255, b: 255 }, // White
  { r: 191, g: 52,  b: 43  }, // Deep Crimson
];

/**
 * High-performance neural constellation / particle network canvas background
 * with subtle radial vignette overlay, mouse repulsion, and IntersectionObserver
 * visibility auto-pausing for ultra-smooth 60fps performance across sections.
 */
export default function KexsioCanvasBackground({ showOverlay = true, opacity = 1 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    let animationFrameId = 0;
    let particles = [];
    let canvasWidth = 0;
    let canvasHeight = 0;
    let pixelRatio = 1;
    let isVisible = true;

    const mouse = {
      x: null,
      y: null,
      radius: 190,
    };

    class Particle {
      constructor(x, y, velocityX, velocityY, size, color) {
        this.x = x;
        this.y = y;
        this.velocityX = velocityX;
        this.velocityY = velocityY;
        this.size = size;
        this.color = color;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

        const particleGlow = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.size * 4,
        );

        particleGlow.addColorStop(
          0,
          `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 1)`,
        );

        particleGlow.addColorStop(
          0.35,
          `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.75)`,
        );

        particleGlow.addColorStop(
          1,
          `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`,
        );

        ctx.fillStyle = particleGlow;
        ctx.fill();
      }

      update() {
        if (this.x >= canvasWidth || this.x <= 0) {
          this.velocityX *= -1;
        }

        if (this.y >= canvasHeight || this.y <= 0) {
          this.velocityY *= -1;
        }

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance > 0 && distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            const forceX = dx / distance;
            const forceY = dy / distance;

            this.x -= forceX * force * 4.5;
            this.y -= forceY * force * 4.5;
          }
        }

        this.x += this.velocityX;
        this.y += this.velocityY;

        this.draw();
      }
    }

    const createParticles = () => {
      particles = [];

      const responsiveDivider = canvasWidth < 768 ? 15000 : 10500;
      const particleCount = Math.min(
        165,
        Math.max(
          45,
          Math.floor((canvasWidth * canvasHeight) / responsiveDivider),
        ),
      );

      for (let index = 0; index < particleCount; index += 1) {
        const size = Math.random() * 1.8 + 0.9;
        const x = Math.random() * canvasWidth;
        const y = Math.random() * canvasHeight;
        const velocityX = Math.random() * 0.42 - 0.21;
        const velocityY = Math.random() * 0.42 - 0.21;

        const color =
          PARTICLE_COLORS[
            Math.floor(Math.random() * PARTICLE_COLORS.length)
          ];

        particles.push(
          new Particle(
            x,
            y,
            velocityX,
            velocityY,
            size,
            color,
          ),
        );
      }
    };

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const newWidth = parent.offsetWidth;
      const newHeight = parent.offsetHeight;
      if (newWidth === 0 || newHeight === 0) return;

      canvasWidth = newWidth;
      canvasHeight = newHeight;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = canvasWidth * pixelRatio;
      canvas.height = canvasHeight * pixelRatio;

      canvas.style.width = `${canvasWidth}px`;
      canvas.style.height = `${canvasHeight}px`;

      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      createParticles();
    };

    const connectParticles = () => {
      const maxDistance = canvasWidth < 768 ? 105 : 145;
      const maxDistanceSquared = maxDistance * maxDistance;

      for (let a = 0; a < particles.length; a += 1) {
        for (let b = a + 1; b < particles.length; b += 1) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distanceSquared = dx * dx + dy * dy;

          if (distanceSquared > maxDistanceSquared) continue;

          const lineOpacity =
            0.58 * (1 - distanceSquared / maxDistanceSquared);

          const startColor = particles[a].color;
          const endColor = particles[b].color;

          const lineGradient = ctx.createLinearGradient(
            particles[a].x,
            particles[a].y,
            particles[b].x,
            particles[b].y,
          );

          lineGradient.addColorStop(
            0,
            `rgba(${startColor.r}, ${startColor.g}, ${startColor.b}, ${lineOpacity})`,
          );

          lineGradient.addColorStop(
            1,
            `rgba(${endColor.r}, ${endColor.g}, ${endColor.b}, ${lineOpacity})`,
          );

          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.strokeStyle = lineGradient;
          ctx.lineWidth = 0.85;
          ctx.stroke();
        }
      }
    };

    const animate = () => {
      if (!isVisible) return;

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      particles.forEach((particle) => {
        particle.update();
      });

      connectParticles();

      animationFrameId = window.requestAnimationFrame(animate);
    };

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      if (
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom &&
        event.clientX >= rect.left &&
        event.clientX <= rect.right
      ) {
        mouse.x = event.clientX - rect.left;
        mouse.y = event.clientY - rect.top;
      } else {
        mouse.x = null;
        mouse.y = null;
      }
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    // Initial sizing
    resizeCanvas();
    animate();

    // IntersectionObserver to pause loop when off-screen
    let observer = null;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (!isVisible) {
                isVisible = true;
                window.cancelAnimationFrame(animationFrameId);
                animate();
              }
            } else {
              isVisible = false;
              window.cancelAnimationFrame(animationFrameId);
            }
          });
        },
        { threshold: 0.05 },
      );
      observer.observe(canvas.parentElement || canvas);
    }

    // ResizeObserver for dynamic container resizes (e.g., accordions toggling)
    let resizeObserver = null;
    if ("ResizeObserver" in window && canvas.parentElement) {
      resizeObserver = new ResizeObserver(() => {
        resizeCanvas();
      });
      resizeObserver.observe(canvas.parentElement);
    }

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      if (observer) observer.disconnect();
      if (resizeObserver) resizeObserver.disconnect();
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="kexsio-bg-wrapper"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
        opacity: opacity,
      }}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="kexsio-canvas"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      />
      {showOverlay && (
        <div
          className="kexsio-overlay"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(circle at center, transparent 10%, rgba(0, 0, 0, 0.18) 56%, rgba(0, 0, 0, 0.72) 100%)",
          }}
        />
      )}
    </div>
  );
}
