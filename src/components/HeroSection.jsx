import React, { useEffect, useRef, useState } from 'react';
import { Zap, Play, ArrowDownRight, ShieldCheck, Activity } from 'lucide-react';

export default function HeroSection({ onOpenModal, onExploreWork }) {
  const canvasRef = useRef(null);
  const [typedTitle, setTypedTitle] = useState("");
  const fullTagline = "TURNING IDEAS INTO DIGITAL POWER";

  // DYNAMIC UNSCRAMBLE TYPOGRAPHY EFFECT
  useEffect(() => {
    let index = 0;
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@$&%";
    
    const interval = setInterval(() => {
      setTypedTitle(
        fullTagline
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < index) return fullTagline[i];
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      index += 0.4;
      if (index >= fullTagline.length) {
        setTypedTitle(fullTagline);
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  // 3D WEIGHTLESS FLOATING CANVAS PARTICLES & REPEL PHYSICS
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId;
    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight);

    const pointer = { x: width / 2, y: height / 2, active: false };

    // Floating 3D Shapes & Rings
    const nodes = Array.from({ length: 70 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 3 + 1,
      type: Math.random() > 0.6 ? 'ring' : 'dot',
      color: Math.random() > 0.4 ? '#FF3B30' : '#FFFFFF',
      opacity: Math.random() * 0.6 + 0.2,
      phase: Math.random() * Math.PI * 2,
    }));

    function handleResize() {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    }

    function handleMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
    }

    function handleMouseLeave() {
      pointer.active = false;
    }

    window.addEventListener('resize', handleResize);
    canvas.parentElement.addEventListener('mousemove', handleMouseMove);
    canvas.parentElement.addEventListener('mouseleave', handleMouseLeave);

    function render(time) {
      ctx.clearRect(0, 0, width, height);

      // Render radial glow core
      const glow = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width * 0.5);
      glow.addColorStop(0, 'rgba(255, 59, 48, 0.12)');
      glow.addColorStop(0.5, 'rgba(255, 107, 0, 0.04)');
      glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      // Draw floating nodes with cursor repel
      nodes.forEach((node) => {
        node.x += node.vx + Math.cos(time * 0.001 + node.phase) * 0.1;
        node.y += node.vy + Math.sin(time * 0.001 + node.phase) * 0.1;

        // Repel from cursor
        if (pointer.active) {
          const dx = node.x - pointer.x;
          const dy = node.y - pointer.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180 && dist > 1) {
            const force = (1 - dist / 180) * 2;
            node.x += (dx / dist) * force;
            node.y += (dy / dist) * force;
          }
        }

        // Screen wraps
        if (node.x < -10) node.x = width + 10;
        if (node.x > width + 10) node.x = -10;
        if (node.y < -10) node.y = height + 10;
        if (node.y > height + 10) node.y = -10;

        ctx.save();
        ctx.globalAlpha = node.opacity;

        if (node.type === 'ring') {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.size * 3, 0, Math.PI * 2);
          ctx.strokeStyle = node.color;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
          ctx.fillStyle = node.color;
          ctx.fill();
        }

        ctx.restore();
      });

      // Draw connection lines between near nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(255, 59, 48, ${(1 - dist / 120) * 0.15})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(render);
    }

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="brand-hero-section">
      <canvas ref={canvasRef} className="hero-canvas-bg" />

      {/* SIGNAL RADAR RIPPLE MOTIF */}
      <div className="radar-ripple-overlay">
        <div className="radar-ring r1" />
        <div className="radar-ring r2" />
        <div className="radar-ring r3" />
      </div>

      <div className="hero-content-wrapper">
        
        {/* TOP EYEBROW BADGE */}
        <div className="hero-eyebrow-pill">
          <Activity size={14} className="pulse-red-icon" />
          <span>NEXT-GEN DIGITAL MARKETING AGENCY</span>
          <span className="eyebrow-spark">⚡</span>
        </div>

        {/* MAIN KINETIC UNSCRAMBLE HEADLINE */}
        <h1 className="hero-kinetic-title">
          <span className="title-plain">BRANDFORGE //</span>
          <br />
          <span className="title-scramble-highlight">{typedTitle || fullTagline}</span>
        </h1>

        {/* HERO SUBHEADING */}
        <p className="hero-subtext">
          We forge market-leading digital engines through high-converting <strong>SEO & GEO</strong>, <strong>Paid Media</strong>, 
          <strong>Web Foundry Engineering</strong>, and <strong>Viral Brand Identity</strong>.
        </p>

        {/* HERO INTERACTIVE CTAs */}
        <div className="hero-cta-group">
          <button className="btn-hero-primary" onClick={onOpenModal}>
            <Zap size={18} fill="currentColor" />
            <span>Start Your Transformation</span>
            <span className="btn-glow-aura" />
          </button>

          <button className="btn-hero-secondary" onClick={onExploreWork}>
            <Play size={16} fill="currentColor" />
            <span>Explore Our Work</span>
            <ArrowDownRight size={16} />
          </button>
        </div>

        {/* METRIC BADGES */}
        <div className="hero-trust-bar">
          <div className="trust-item">
            <ShieldCheck size={16} className="trust-icon" />
            <span>$485M+ Client Growth</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            <span className="dot-green" />
            <span>12 Core Performance Services</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            <span>99.8% Campaign Precision</span>
          </div>
        </div>

      </div>
    </section>
  );
}
