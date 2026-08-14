import React, { useEffect, useRef, useState } from 'react';
import { Home, TrendingUp, Layers } from 'lucide-react';

export default function LiquidOrbNavbar({ activeTab = 'Home', onTabChange }) {
  const [selected, setSelected] = useState(activeTab);
  const orbCanvasRef = useRef(null);
  const capsuleRef = useRef(null);

  const [isOrbHovered, setIsOrbHovered] = useState(false);
  const [isOrbClicked, setIsOrbClicked] = useState(false);
  const [pointerOffset, setPointerOffset] = useState({ x: 0, y: 0 });

  // GLOWING ORGANIC LIQUID ORB CANVAS PHYSICS
  useEffect(() => {
    const canvas = orbCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    const size = 52;
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = size * pixelRatio;
    canvas.height = size * pixelRatio;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

    // Inner floating liquid particles
    const particles = Array.from({ length: 18 }, () => ({
      x: (Math.random() - 0.5) * 20,
      y: (Math.random() - 0.5) * 20,
      radius: Math.random() * 1.8 + 0.8,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      phase: Math.random() * Math.PI * 2,
    }));

    let burstTime = 0;

    function render(time) {
      ctx.clearRect(0, 0, size, size);

      const centerX = size / 2;
      const centerY = size / 2;
      const baseRadius = 18;

      if (isOrbClicked) {
        burstTime = Math.min(1, burstTime + 0.1);
      } else {
        burstTime = Math.max(0, burstTime - 0.05);
      }

      // Outer soft blue halo glow
      const outerGlow = ctx.createRadialGradient(centerX, centerY, baseRadius * 0.8, centerX, centerY, size / 2);
      outerGlow.addColorStop(0, 'rgba(0, 240, 255, 0.45)');
      outerGlow.addColorStop(0.5, 'rgba(0, 119, 255, 0.15)');
      outerGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = outerGlow;
      ctx.fillRect(0, 0, size, size);

      // Organic jelly wobble outline path
      ctx.save();
      ctx.beginPath();

      const points = 16;
      for (let i = 0; i < points; i++) {
        const angle = (i / points) * Math.PI * 2;
        // Jelly breathing sine distortion
        const distortion = Math.sin(angle * 3 + time * 0.003) * 1.2 + Math.cos(angle * 2 - time * 0.002) * 1.0 + burstTime * 4;
        const r = baseRadius + distortion + (isOrbHovered ? 2 : 0);

        const x = centerX + Math.cos(angle) * r + pointerOffset.x * 0.15;
        const y = centerY + Math.sin(angle) * r + pointerOffset.y * 0.15;

        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.clip();

      // Deep Navy & Cyan Glass Surface Gradient
      const liquidGrad = ctx.createRadialGradient(
        centerX - 4 + pointerOffset.x * 0.1,
        centerY - 4 + pointerOffset.y * 0.1,
        2,
        centerX,
        centerY,
        baseRadius + 4
      );
      liquidGrad.addColorStop(0, '#00F0FF');
      liquidGrad.addColorStop(0.35, '#0077FF');
      liquidGrad.addColorStop(0.75, '#001A4D');
      liquidGrad.addColorStop(1, '#00071A');

      ctx.fillStyle = liquidGrad;
      ctx.fill();

      // Inner Liquid Swirling Currents
      ctx.save();
      ctx.globalCompositeOperation = 'screen';

      for (let i = 0; i < 3; i++) {
        const currentAngle = time * 0.002 * (i % 2 === 0 ? 1 : -1) + i * 2;
        const currentX = centerX + Math.cos(currentAngle) * (6 + i * 2);
        const currentY = centerY + Math.sin(currentAngle) * (6 + i * 2);

        const currentGrad = ctx.createRadialGradient(currentX, currentY, 0, currentX, currentY, 12);
        currentGrad.addColorStop(0, 'rgba(0, 240, 255, 0.7)');
        currentGrad.addColorStop(0.6, 'rgba(0, 119, 255, 0.25)');
        currentGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = currentGrad;
        ctx.beginPath();
        ctx.arc(currentX, currentY, 12, 0, Math.PI * 2);
        ctx.fill();
      }

      // Floating internal particles
      particles.forEach((p) => {
        p.x += p.speedX + Math.cos(time * 0.002 + p.phase) * 0.2;
        p.y += p.speedY + Math.sin(time * 0.002 + p.phase) * 0.2;

        const dist = Math.sqrt(p.x * p.x + p.y * p.y);
        if (dist > baseRadius - 4) {
          p.x *= -0.8;
          p.y *= -0.8;
        }

        ctx.beginPath();
        ctx.arc(centerX + p.x, centerY + p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
        ctx.fill();
      });

      ctx.restore();

      // Sharp white upper-left glass reflection highlight
      const glassHighlight = ctx.createRadialGradient(
        centerX - 7,
        centerY - 7,
        0,
        centerX - 7,
        centerY - 7,
        8
      );
      glassHighlight.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
      glassHighlight.addColorStop(0.5, 'rgba(255, 255, 255, 0.3)');
      glassHighlight.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.fillStyle = glassHighlight;
      ctx.beginPath();
      ctx.arc(centerX - 7, centerY - 7, 7, 0, Math.PI * 2);
      ctx.fill();

      // Illuminated outer edge stroke
      ctx.restore();
      ctx.beginPath();
      ctx.arc(centerX, centerY, baseRadius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.6)';
      ctx.lineWidth = 1.2;
      ctx.stroke();

      animId = requestAnimationFrame(render);
    }

    animId = requestAnimationFrame(render);

    return () => cancelAnimationFrame(animId);
  }, [isOrbHovered, isOrbClicked, pointerOffset]);

  // Cursor magnet attraction for Orb
  function handleMouseMove(e) {
    if (!capsuleRef.current) return;
    const rect = capsuleRef.current.getBoundingClientRect();
    const orbX = rect.left + 35;
    const orbY = rect.top + rect.height / 2;

    const dx = e.clientX - orbX;
    const dy = e.clientY - orbY;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < 120) {
      setPointerOffset({ x: dx * 0.2, y: dy * 0.2 });
    } else {
      setPointerOffset({ x: 0, y: 0 });
    }
  }

  function handleTabClick(label) {
    setSelected(label);
    if (onTabChange) onTabChange(label);
  }

  const buttons = [
    { id: 'Home', label: 'Home', icon: Home },
    { id: 'Measure Advances', label: 'Measure Advances', icon: TrendingUp },
    { id: 'Collections', label: 'Collections', icon: Layers },
  ];

  return (
    <div className="orb-navbar-scene" onMouseMove={handleMouseMove}>
      <div className="scene-bg-grid" aria-hidden="true" />
      <div className="scene-vignette" aria-hidden="true" />

      {/* LARGE HORIZONTAL FLOATING CAPSULE */}
      <div ref={capsuleRef} className="floating-capsule-bar">
        
        {/* GLOWING LIQUID ORB (FAR-LEFT SIDE) */}
        <div
          className={`liquid-orb-wrapper ${isOrbHovered ? 'hovered' : ''} ${isOrbClicked ? 'clicked' : ''}`}
          onMouseEnter={() => setIsOrbHovered(true)}
          onMouseLeave={() => setIsOrbHovered(false)}
          onMouseDown={() => {
            setIsOrbClicked(true);
            setTimeout(() => setIsOrbClicked(false), 300);
          }}
          title="Living Electric-Blue Liquid Orb"
        >
          <canvas ref={orbCanvasRef} className="liquid-orb-canvas" />
        </div>

        {/* EXACTLY THREE NAVIGATION BUTTONS */}
        <div className="capsule-nav-buttons">
          {buttons.map((btn) => {
            const IconComponent = btn.icon;
            const isSelected = selected === btn.id;

            return (
              <button
                key={btn.id}
                type="button"
                className={`capsule-nav-btn ${isSelected ? 'selected' : ''}`}
                onClick={() => handleTabClick(btn.id)}
              >
                <div className="btn-shimmer-reflection" />
                <IconComponent className="btn-icon" size={18} />
                <span className="btn-label">{btn.label}</span>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
}
