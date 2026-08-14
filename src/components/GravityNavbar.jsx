import React, { useEffect, useRef, useState } from 'react';

const NAVIGATION_ITEMS = [
  {
    id: "seo-geo",
    label: "SEO & GEO",
    number: "01",
    left: "12%",
    top: "18%",
    size: "clamp(0.8rem, 1.2vw, 1.1rem)",
    eyebrow: "Search Grid Supremacy",
    description: "Dominate search engine grids and generative AI search engines (GEO) with technical optimization and authority building.",
    detail: "Technical SEO audits, Schema markup, Generative Engine Optimization, Core Web Vitals, and search query dominance.",
    colorA: "#FF3B30",
    colorB: "#FF6B00",
  },
  {
    id: "web-foundry",
    label: "Web Foundry",
    number: "02",
    left: "78%",
    top: "16%",
    size: "clamp(0.85rem, 1.3vw, 1.2rem)",
    eyebrow: "High-Performance Engineering",
    description: "Ultra-fast, high-converting digital web platforms engineered for modern brand dominance.",
    detail: "Next-gen web development, custom interactive UI/UX, head-turning animations, and sub-second page load speed.",
    colorA: "#00F0FF",
    colorB: "#7000FF",
  },
  {
    id: "paid-media",
    label: "Paid Media",
    number: "03",
    left: "14%",
    top: "72%",
    size: "clamp(0.85rem, 1.3vw, 1.2rem)",
    eyebrow: "Performance Ad Scaling",
    description: "Precision customer acquisition across Google, Meta, TikTok, LinkedIn, and Programmatic ad channels.",
    detail: "Machine learning bid strategies, hyper-targeted retargeting funnels, and data-backed ROAS maximization.",
    colorA: "#FF5E54",
    colorB: "#FF2A2A",
  },
  {
    id: "social-media",
    label: "Social Media",
    number: "04",
    left: "76%",
    top: "74%",
    size: "clamp(0.8rem, 1.2vw, 1.15rem)",
    eyebrow: "Viral Community Reach",
    description: "Turn passive scrollers into brand advocates with high-converting social campaigns and creative content.",
    detail: "Short-form video creation, community growth management, social listening, and viral engagement loops.",
    colorA: "#FF4DBE",
    colorB: "#995DFF",
  },
  {
    id: "influencer-media",
    label: "Influencer Media",
    number: "05",
    left: "6%",
    top: "45%",
    size: "clamp(0.75rem, 1.1vw, 1.05rem)",
    eyebrow: "Creator Power Network",
    description: "Connect your brand with high-converting creators and key opinion leaders for explosive viral authority.",
    detail: "End-to-end creator matchmaking, contract management, content vetting, and ROI tracking.",
    colorA: "#FFB800",
    colorB: "#FF6B00",
  },
  {
    id: "content",
    label: "Content",
    number: "06",
    left: "86%",
    top: "45%",
    size: "clamp(0.8rem, 1.2vw, 1.1rem)",
    eyebrow: "High-Impact Storytelling",
    description: "Authority content engines designed to convert prospects into long-term enterprise clients.",
    detail: "Copywriting, whitepapers, video production, editorial calendars, and brand thought leadership.",
    colorA: "#66F5C8",
    colorB: "#48A7FF",
  },
  {
    id: "email",
    label: "Email",
    number: "07",
    left: "32%",
    top: "12%",
    size: "clamp(0.75rem, 1.1vw, 1rem)",
    eyebrow: "Retention & Funnel Automation",
    description: "Automated lifecycle email sequences that maximize customer lifetime value (LTV).",
    detail: "Klaviyo/HubSpot setup, dynamic segmentation, behavioral triggers, and high deliverability design.",
    colorA: "#FFDD55",
    colorB: "#FF577D",
  },
  {
    id: "strategy",
    label: "Strategy",
    number: "08",
    left: "58%",
    top: "12%",
    size: "clamp(0.75rem, 1.1vw, 1rem)",
    eyebrow: "Growth Architecture",
    description: "Comprehensive 360° digital growth blueprints tailored for market leadership.",
    detail: "Market research, positioning analysis, unit economics optimization, and multi-channel roadmaps.",
    colorA: "#A980FF",
    colorB: "#F462FF",
  },
  {
    id: "visual-id",
    label: "Visual ID",
    number: "09",
    left: "34%",
    top: "84%",
    size: "clamp(0.75rem, 1.1vw, 1rem)",
    eyebrow: "Brand Identity & Design",
    description: "Command instant market authority with head-turning 3D visuals and visual identity design.",
    detail: "Logo forging, design systems, 3D motion graphics, brand guidelines, and high-converting asset suites.",
    colorA: "#FF3E3D",
    colorB: "#FF9500",
  },
  {
    id: "analytics",
    label: "Analytics",
    number: "10",
    left: "58%",
    top: "84%",
    size: "clamp(0.75rem, 1.1vw, 1rem)",
    eyebrow: "Data Intelligence & Attribution",
    description: "Real-time campaign performance tracking and multi-touch attribution dashboards.",
    detail: "GA4, server-side tracking, custom executive dashboards, conversion tracking, and predictive insights.",
    colorA: "#35D5FF",
    colorB: "#4D6DFF",
  },
];

const INITIAL_PORTAL = {
  visible: false,
  x: 0,
  y: 0,
  label: "",
  number: "",
  colorA: "#FF3B30",
  colorB: "#FF6B00",
  key: 0,
};

export default function GravityNavbar() {
  const fieldRef = useRef(null);
  const canvasRef = useRef(null);
  const timerIdsRef = useRef([]);

  const [portal, setPortal] = useState(INITIAL_PORTAL);

  useEffect(() => {
    return () => {
      timerIdsRef.current.forEach((timerId) => window.clearTimeout(timerId));
    };
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("[data-destination-section]"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("gravity-destination--visible");
          }
        });
      },
      { threshold: 0.18 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = fieldRef.current;
    const canvas = canvasRef.current;

    if (!section || !canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 1;
    let height = 1;
    let pixelRatio = 1;
    let animationFrameId = 0;

    let particles = [];
    let shockwaves = [];
    let wordPositions = [];

    const pointer = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
      active: false,
      pressed: false,
    };

    function createParticle() {
      const x = Math.random() * width;
      const y = Math.random() * height;

      return {
        x,
        y,
        previousX: x,
        previousY: y,
        velocityX: (Math.random() - 0.5) * 0.22,
        velocityY: (Math.random() - 0.5) * 0.22,
        size: Math.random() * 1.4 + 0.4,
        opacity: Math.random() * 0.5 + 0.15,
        phase: Math.random() * Math.PI * 2,
      };
    }

    function createParticles() {
      const amount = Math.min(240, Math.max(100, Math.floor((width * height) / 7500)));
      particles = Array.from({ length: amount }, createParticle);
    }

    function measureWords() {
      const sectionBounds = section.getBoundingClientRect();
      const elements = Array.from(section.querySelectorAll("[data-gravity-word]"));

      wordPositions = elements.map((element) => {
        const bounds = element.getBoundingClientRect();
        return {
          element,
          centerX: bounds.left - sectionBounds.left + bounds.width / 2,
          centerY: bounds.top - sectionBounds.top + bounds.height / 2,
        };
      });
    }

    function resize() {
      const bounds = section.getBoundingClientRect();

      width = Math.max(1, bounds.width);
      height = Math.max(1, bounds.height);

      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      if (!pointer.active) {
        pointer.x = width / 2;
        pointer.y = height / 2;
        pointer.targetX = width / 2;
        pointer.targetY = height / 2;
      }

      createParticles();
      requestAnimationFrame(measureWords);
    }

    function updateCursorStyles() {
      section.style.setProperty("--gravity-x", `${pointer.x}px`);
      section.style.setProperty("--gravity-y", `${pointer.y}px`);
      section.style.setProperty("--gravity-scale", pointer.pressed ? "0.68" : "1");
      section.style.setProperty("--gravity-opacity", pointer.active ? "1" : "0");
    }

    function updateFloatingWords() {
      for (const word of wordPositions) {
        if (!pointer.active) {
          word.element.style.setProperty("--word-x", "0px");
          word.element.style.setProperty("--word-y", "0px");
          word.element.style.setProperty("--word-rotate", "0deg");
          word.element.style.setProperty("--word-scale", "1");
          continue;
        }

        const deltaX = pointer.x - word.centerX;
        const deltaY = pointer.y - word.centerY;

        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const influenceRadius = 310;

        if (distance >= influenceRadius) {
          word.element.style.setProperty("--word-x", "0px");
          word.element.style.setProperty("--word-y", "0px");
          word.element.style.setProperty("--word-rotate", "0deg");
          word.element.style.setProperty("--word-scale", "1");
          continue;
        }

        const strength = 1 - distance / influenceRadius;
        const safeDistance = Math.max(distance, 1);

        const directionX = deltaX / safeDistance;
        const directionY = deltaY / safeDistance;

        const tangentX = -directionY;
        const tangentY = directionX;

        const pull = strength * strength * 32;
        const orbit = strength * 14;

        const translateX = directionX * pull + tangentX * orbit;
        const translateY = directionY * pull + tangentY * orbit;

        const rotation = Math.atan2(deltaY, deltaX) * (180 / Math.PI) * strength * 0.08;
        const scale = 1 + strength * 0.16;

        word.element.style.setProperty("--word-x", `${translateX}px`);
        word.element.style.setProperty("--word-y", `${translateY}px`);
        word.element.style.setProperty("--word-rotate", `${rotation}deg`);
        word.element.style.setProperty("--word-scale", `${scale}`);
      }
    }

    function updateParticle(particle, time) {
      particle.previousX = particle.x;
      particle.previousY = particle.y;

      particle.velocityX += Math.cos(time * 0.0003 + particle.phase) * 0.004;
      particle.velocityY += Math.sin(time * 0.00025 + particle.phase) * 0.004;

      if (pointer.active) {
        const deltaX = pointer.x - particle.x;
        const deltaY = pointer.y - particle.y;

        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const influenceRadius = 270;

        if (distance < influenceRadius && distance > 1) {
          const influence = 1 - distance / influenceRadius;

          const directionX = deltaX / distance;
          const directionY = deltaY / distance;

          const attraction = influence * influence * 0.11;
          const orbitalForce = influence * 0.075;

          particle.velocityX += directionX * attraction - directionY * orbitalForce;
          particle.velocityY += directionY * attraction + directionX * orbitalForce;

          if (distance < 42) {
            const repulsion = (1 - distance / 42) * 0.35;
            particle.velocityX -= directionX * repulsion;
            particle.velocityY -= directionY * repulsion;
          }
        }
      }

      particle.velocityX *= 0.975;
      particle.velocityY *= 0.975;

      particle.x += particle.velocityX;
      particle.y += particle.velocityY;

      const padding = 20;
      if (particle.x < -padding) { particle.x = width + padding; particle.previousX = particle.x; }
      if (particle.x > width + padding) { particle.x = -padding; particle.previousX = particle.x; }
      if (particle.y < -padding) { particle.y = height + padding; particle.previousY = particle.y; }
      if (particle.y > height + padding) { particle.y = -padding; particle.previousY = particle.y; }
    }

    function drawParticle(particle) {
      const speed = Math.sqrt(
        particle.velocityX * particle.velocityX + particle.velocityY * particle.velocityY
      );

      const opacity = Math.min(0.55, particle.opacity + speed * 0.15);

      const gradient = context.createLinearGradient(
        particle.previousX,
        particle.previousY,
        particle.x,
        particle.y
      );

      gradient.addColorStop(0, "rgba(255, 59, 48, 0)");
      gradient.addColorStop(0.5, `rgba(255, 59, 48, ${opacity * 0.45})`);
      gradient.addColorStop(1, `rgba(255, 255, 255, ${opacity})`);

      context.beginPath();
      context.moveTo(particle.previousX, particle.previousY);
      context.lineTo(particle.x, particle.y);

      context.strokeStyle = gradient;
      context.lineWidth = particle.size * 0.75;
      context.stroke();

      context.beginPath();
      context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      context.fillStyle = `rgba(255,255,255,${particle.opacity})`;
      context.fill();
    }

    function drawPointerConnections() {
      if (!pointer.active) return;
      const radius = 170;

      for (const particle of particles) {
        const deltaX = particle.x - pointer.x;
        const deltaY = particle.y - pointer.y;

        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        if (distance >= radius) continue;

        const opacity = (1 - distance / radius) * 0.16;

        context.beginPath();
        context.moveTo(pointer.x, pointer.y);
        context.lineTo(particle.x, particle.y);

        context.strokeStyle = `rgba(255, 79, 167, ${opacity})`;
        context.lineWidth = 0.75;
        context.stroke();
      }
    }

    function drawShockwaves() {
      shockwaves = shockwaves.filter((sw) => sw.opacity > 0.01);

      for (const sw of shockwaves) {
        sw.radius += 4.5;
        sw.opacity *= 0.94;

        const gradient = context.createRadialGradient(
          sw.x, sw.y, Math.max(0, sw.radius - 15),
          sw.x, sw.y, sw.radius + 15
        );

        gradient.addColorStop(0, "rgba(255,59,48,0)");
        gradient.addColorStop(0.5, `rgba(255,107,0,${sw.opacity})`);
        gradient.addColorStop(1, "rgba(255,255,255,0)");

        context.beginPath();
        context.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        context.strokeStyle = gradient;
        context.lineWidth = 3;
        context.stroke();
      }
    }

    function drawPointerGlow() {
      if (!pointer.active) return;

      const glow = context.createRadialGradient(
        pointer.x, pointer.y, 0,
        pointer.x, pointer.y, 290
      );

      glow.addColorStop(0, "rgba(255,59,48,0.15)");
      glow.addColorStop(0.3, "rgba(255,107,0,0.06)");
      glow.addColorStop(1, "rgba(0,0,0,0)");

      context.fillStyle = glow;
      context.fillRect(0, 0, width, height);
    }

    function render(time) {
      pointer.x += (pointer.targetX - pointer.x) * 0.14;
      pointer.y += (pointer.targetY - pointer.y) * 0.14;

      context.clearRect(0, 0, width, height);

      drawPointerGlow();
      context.globalCompositeOperation = "screen";

      for (const particle of particles) {
        updateParticle(particle, time);
        drawParticle(particle);
      }

      drawPointerConnections();
      drawShockwaves();

      context.globalCompositeOperation = "source-over";

      updateCursorStyles();
      updateFloatingWords();

      animationFrameId = requestAnimationFrame(render);
    }

    function handlePointerMove(event) {
      const bounds = section.getBoundingClientRect();
      pointer.targetX = event.clientX - bounds.left;
      pointer.targetY = event.clientY - bounds.top;
      pointer.active = true;
    }

    function handlePointerEnter(event) {
      const bounds = section.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
      pointer.targetX = pointer.x;
      pointer.targetY = pointer.y;
      pointer.active = true;
    }

    function handlePointerLeave() {
      pointer.active = false;
      pointer.pressed = false;
      pointer.targetX = width / 2;
      pointer.targetY = height / 2;
    }

    function handlePointerDown(event) {
      const bounds = section.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;

      pointer.pressed = true;

      shockwaves.push({ x, y, radius: 8, opacity: 0.75 });

      for (const particle of particles) {
        const deltaX = particle.x - x;
        const deltaY = particle.y - y;

        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        if (distance >= 230 || distance <= 1) continue;

        const force = (1 - distance / 230) * 1.35;
        particle.velocityX += (deltaX / distance) * force;
        particle.velocityY += (deltaY / distance) * force;
      }
    }

    function handlePointerUp() {
      pointer.pressed = false;
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(section);

    section.addEventListener("pointermove", handlePointerMove);
    section.addEventListener("pointerenter", handlePointerEnter);
    section.addEventListener("pointerleave", handlePointerLeave);
    section.addEventListener("pointerdown", handlePointerDown);
    section.addEventListener("pointerup", handlePointerUp);

    resize();

    if (!reducedMotion) {
      animationFrameId = requestAnimationFrame(render);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();

      section.removeEventListener("pointermove", handlePointerMove);
      section.removeEventListener("pointerenter", handlePointerEnter);
      section.removeEventListener("pointerleave", handlePointerLeave);
      section.removeEventListener("pointerdown", handlePointerDown);
      section.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);

  function openDestination(item, event) {
    const buttonBounds = event.currentTarget.getBoundingClientRect();
    const originX = buttonBounds.left + buttonBounds.width / 2;
    const originY = buttonBounds.top + buttonBounds.height / 2;

    timerIdsRef.current.forEach((timerId) => window.clearTimeout(timerId));
    timerIdsRef.current = [];

    setPortal({
      visible: true,
      x: originX,
      y: originY,
      label: item.label,
      number: item.number,
      colorA: item.colorA,
      colorB: item.colorB,
      key: Date.now(),
    });

    const scrollTimer = window.setTimeout(() => {
      const destination = document.getElementById(item.id);
      destination?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 470);

    const closeTimer = window.setTimeout(() => {
      setPortal((current) => ({ ...current, visible: false }));
    }, 1150);

    timerIdsRef.current.push(scrollTimer, closeTimer);
  }

  function returnToField() {
    document.getElementById("gravity-navigation-field")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <main className="gravity-experience">
      <style>{`
        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html, body {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          overflow-x: hidden;
          background: #030305;
          scroll-behavior: smooth;
        }

        .gravity-experience {
          margin: 0;
          padding: 0;
          width: 100%;
        }

        .gravity-field {
          --gravity-x: 50%;
          --gravity-y: 50%;
          --gravity-scale: 1;
          --gravity-opacity: 0;

          position: relative;
          width: 100%;
          min-height: 100vh;
          margin: 0;
          padding: 0;
          overflow: hidden;
          isolation: isolate;
          background:
            radial-gradient(
              circle at center,
              #120c18 0%,
              #07060b 44%,
              #020203 100%
            );
          color: #ffffff;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .gravity-field__canvas {
          position: absolute;
          inset: 0;
          z-index: 1;
          display: block;
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          pointer-events: none;
        }

        .gravity-field__grid {
          position: absolute;
          inset: 0;
          z-index: 0;
          opacity: 0.22;
          pointer-events: none;
          margin: 0;
          padding: 0;
          background-image:
            linear-gradient(
              rgb(255 255 255 / 0.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgb(255 255 255 / 0.035) 1px,
              transparent 1px
            );
          background-size: 70px 70px;
          mask-image:
            radial-gradient(
              circle at center,
              #000,
              transparent 76%
            );
        }

        .gravity-field__noise {
          position: absolute;
          inset: -50%;
          z-index: 2;
          opacity: 0.05;
          pointer-events: none;
          margin: 0;
          padding: 0;
          background-image:
            repeating-radial-gradient(
              circle at 20% 20%,
              #fff 0,
              transparent 1px,
              transparent 3px
            );
          background-size: 5px 5px;
          animation: gravity-noise 0.25s steps(2) infinite;
        }

        .gravity-field__content {
          position: relative;
          z-index: 4;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 24px;
          margin: 0;
          pointer-events: none;
        }

        .gravity-field__heading {
          max-width: 920px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 0;
          padding: 0;
        }

        .gravity-field__label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 25px;
          color: rgb(255 255 255 / 0.45);
          font-family: "JetBrains Mono", monospace;
          font-size: 11px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
        }

        .gravity-field__label-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #FF3B30;
          box-shadow:
            0 0 12px #FF3B30,
            0 0 28px #FF6B00;
          animation: gravity-pulse 2s ease-in-out infinite;
        }

        /* BRANDFORGE LOGO AT THE CENTER */
        .gravity-brand-logo-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          pointer-events: auto;
          cursor: pointer;
          transition: transform 0.3s ease;
          margin: 0;
          padding: 0;
        }

        .gravity-brand-logo-wrap:hover {
          transform: scale(1.04);
        }

        .gravity-brand-logo-img {
          height: clamp(60px, 12vw, 130px);
          width: auto;
          object-fit: contain;
          filter: drop-shadow(0 0 35px rgba(255, 59, 48, 0.45));
          margin: 0;
          padding: 0;
        }

        .gravity-field__description {
          max-width: 510px;
          margin: 30px auto 0;
          padding: 0;
          color: rgb(255 255 255 / 0.55);
          font-size: clamp(0.9rem, 1.2vw, 1.1rem);
          line-height: 1.7;
          text-align: center;
        }

        .gravity-field__description strong {
          color: #FF3B30;
          font-weight: 700;
        }

        /* CLEAN FLOATING SERVICE BUTTON PILLS */
        .gravity-field__word {
          --word-x: 0px;
          --word-y: 0px;
          --word-rotate: 0deg;
          --word-scale: 1;
          --word-accent: #FF3B30;

          position: absolute;
          z-index: 7;
          margin: 0;
          padding: 12px 20px;
          border: 0;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.03);
          color: rgb(255 255 255 / 0.7);
          cursor: pointer;
          font-family: "JetBrains Mono", monospace;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          white-space: nowrap;
          transform:
            translate(var(--word-x), var(--word-y))
            rotate(var(--word-rotate))
            scale(var(--word-scale));
          transition:
            color 250ms ease,
            background 250ms ease,
            box-shadow 250ms ease;
          will-change: transform;
        }

        .gravity-field__word::before {
          position: absolute;
          inset: 0;
          border: 1px solid color-mix(in srgb, var(--word-accent) 65%, transparent);
          border-radius: inherit;
          content: "";
          opacity: 0;
          transform: scale(0.72);
          transition: opacity 250ms ease, transform 250ms ease;
        }

        .gravity-field__word::after {
          position: absolute;
          top: 50%;
          right: -5px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          content: "";
          background: var(--word-accent);
          opacity: 0;
          transform: translateY(-50%) scale(0);
          box-shadow: 0 0 16px var(--word-accent);
          transition: opacity 250ms ease, transform 250ms ease;
        }

        .gravity-field__word:hover,
        .gravity-field__word:focus-visible {
          outline: none;
          color: #ffffff;
          background: rgba(255, 59, 48, 0.18);
          box-shadow: 0 0 35px color-mix(in srgb, var(--word-accent) 45%, transparent);
        }

        .gravity-field__word:hover::before,
        .gravity-field__word:focus-visible::before {
          opacity: 1;
          transform: scale(1);
        }

        .gravity-field__word:hover::after,
        .gravity-field__word:focus-visible::after {
          opacity: 1;
          transform: translateY(-50%) scale(1);
        }

        .gravity-field__cursor {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 20;
          width: 74px;
          height: 74px;
          border: 1px solid rgba(255, 59, 48, 0.55);
          border-radius: 50%;
          opacity: var(--gravity-opacity);
          pointer-events: none;
          transform:
            translate(calc(var(--gravity-x) - 37px), calc(var(--gravity-y) - 37px))
            scale(var(--gravity-scale));
          box-shadow:
            0 0 22px rgba(255, 59, 48, 0.3),
            inset 0 0 20px rgba(255, 107, 0, 0.15);
          transition: opacity 180ms ease, scale 180ms ease;
        }

        .gravity-field__cursor::before {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          content: "";
          background: #ffffff;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 12px #ffffff, 0 0 30px #FF3B30, 0 0 55px #FF6B00;
        }

        .gravity-field__cursor::after {
          position: absolute;
          inset: 10px;
          border: 1px dashed rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          content: "";
          animation: gravity-orbit 5s linear infinite;
        }

        .gravity-field__instruction {
          position: absolute;
          bottom: 28px;
          left: 50%;
          z-index: 5;
          display: flex;
          align-items: center;
          gap: 12px;
          color: rgba(255, 255, 255, 0.4);
          font-family: "JetBrains Mono", monospace;
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          transform: translateX(-50%);
          pointer-events: none;
          margin: 0;
          padding: 0;
        }

        .gravity-field__instruction-line {
          width: 34px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 59, 48, 0.8));
        }

        .gravity-portal {
          --portal-x: 50vw;
          --portal-y: 50vh;
          --portal-a: #FF3B30;
          --portal-b: #FF6B00;

          position: fixed;
          inset: 0;
          z-index: 999;
          display: grid;
          place-items: center;
          overflow: hidden;
          color: #ffffff;
          pointer-events: none;
          background:
            radial-gradient(
              circle at var(--portal-x) var(--portal-y),
              var(--portal-b) 0%,
              var(--portal-a) 28%,
              #07060b 70%
            );
          clip-path: circle(0 at var(--portal-x) var(--portal-y));
          animation: gravity-portal-open 1.15s cubic-bezier(0.76, 0, 0.24, 1) both;
        }

        .gravity-portal::before {
          position: absolute;
          inset: -30%;
          content: "";
          background: repeating-radial-gradient(
            circle at center,
            transparent 0, transparent 28px,
            rgba(255, 255, 255, 0.08) 29px, transparent 30px
          );
          animation: gravity-portal-spin 8s linear infinite;
        }

        .gravity-portal__content {
          position: relative;
          z-index: 2;
          text-align: center;
          text-transform: uppercase;
          animation: gravity-portal-content 0.8s 0.14s both;
        }

        .gravity-portal__number {
          display: block;
          margin-bottom: 15px;
          color: rgba(255, 255, 255, 0.6);
          font-family: "JetBrains Mono", monospace;
          font-size: 12px;
          letter-spacing: 0.35em;
        }

        .gravity-portal__label {
          margin: 0;
          font-size: clamp(3.5rem, 12vw, 10rem);
          font-weight: 800;
          line-height: 0.8;
          letter-spacing: -0.07em;
          text-shadow: 0 0 60px rgba(255, 255, 255, 0.3);
        }

        .gravity-destination {
          --section-a: #FF3B30;
          --section-b: #FF6B00;

          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: clamp(60px, 8vw, 120px) clamp(24px, 8vw, 120px);
          margin: 0;
          scroll-margin-top: 0;
          background:
            radial-gradient(
              circle at 75% 30%,
              color-mix(in srgb, var(--section-b) 19%, transparent),
              transparent 38%
            ),
            radial-gradient(
              circle at 15% 80%,
              color-mix(in srgb, var(--section-a) 15%, transparent),
              transparent 36%
            ),
            #050508;
          color: #ffffff;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .gravity-destination::before {
          position: absolute;
          inset: 0;
          content: "";
          opacity: 0.28;
          background-image:
            linear-gradient(rgb(255 255 255 / 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgb(255 255 255 / 0.04) 1px, transparent 1px);
          background-size: 80px 80px;
          mask-image: linear-gradient(90deg, #000, transparent 85%);
        }

        .gravity-destination__number {
          position: absolute;
          top: 30px;
          right: clamp(24px, 5vw, 70px);
          color: rgba(255, 255, 255, 0.08);
          font-size: clamp(7rem, 24vw, 22rem);
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.1em;
          pointer-events: none;
          transform: translateY(70px) rotate(5deg);
          opacity: 0;
          transition: opacity 1.2s ease, transform 1.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .gravity-destination__content {
          position: relative;
          z-index: 2;
          width: min(760px, 100%);
          transform: translateY(70px);
          opacity: 0;
          filter: blur(12px);
          transition: opacity 1s ease, transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), filter 1s ease;
        }

        .gravity-destination--visible .gravity-destination__content {
          opacity: 1;
          filter: blur(0);
          transform: translateY(0);
        }

        .gravity-destination--visible .gravity-destination__number {
          opacity: 1;
          transform: translateY(0) rotate(0);
        }

        .gravity-destination__eyebrow {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 25px;
          color: rgba(255, 255, 255, 0.5);
          font-family: "JetBrains Mono", monospace;
          font-size: 11px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
        }

        .gravity-destination__eyebrow::before {
          width: 46px;
          height: 1px;
          content: "";
          background: linear-gradient(90deg, var(--section-a), var(--section-b));
        }

        .gravity-destination__title {
          margin: 0;
          font-size: clamp(3.5rem, 9vw, 8rem);
          font-weight: 800;
          line-height: 0.85;
          letter-spacing: -0.06em;
          text-transform: uppercase;
        }

        .gravity-destination__description {
          max-width: 650px;
          margin: 35px 0 0;
          color: rgba(255, 255, 255, 0.75);
          font-size: clamp(1.1rem, 2vw, 1.6rem);
          line-height: 1.45;
        }

        .gravity-destination__detail {
          max-width: 540px;
          margin: 22px 0 0;
          color: rgba(255, 255, 255, 0.45);
          font-size: 0.95rem;
          line-height: 1.75;
        }

        .gravity-destination__back {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          margin-top: 42px;
          padding: 0;
          border: 0;
          background: transparent;
          color: rgba(255, 255, 255, 0.7);
          cursor: pointer;
          font-family: "JetBrains Mono", monospace;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .gravity-destination__back-arrow {
          display: grid;
          width: 34px;
          height: 34px;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          transition: background 250ms ease, color 250ms ease, transform 250ms ease;
        }

        .gravity-destination__back:hover .gravity-destination__back-arrow {
          color: #050508;
          background: #ffffff;
          transform: translateY(-4px);
        }

        @media (pointer: fine) {
          .gravity-field { cursor: none; }
          .gravity-field__word { cursor: none; }
        }

        @media (pointer: coarse) {
          .gravity-field__cursor { display: none; }
          .gravity-field__instruction { display: none; }
          .gravity-field__word { color: rgba(255, 255, 255, 0.7); }
        }

        @media (max-width: 700px) {
          .gravity-field__content { padding-inline: 18px; }
          .gravity-brand-logo-img { height: 60px; }
          .gravity-field__description { max-width: 330px; margin-top: 26px; }
          .gravity-field__word { padding: 8px 12px; font-size: 0.7rem !important; }
          .gravity-destination { padding-inline: 22px; }
        }

        @keyframes gravity-portal-open {
          0% { opacity: 1; clip-path: circle(0 at var(--portal-x) var(--portal-y)); }
          58% { opacity: 1; clip-path: circle(150vmax at var(--portal-x) var(--portal-y)); }
          84% { opacity: 1; clip-path: circle(150vmax at var(--portal-x) var(--portal-y)); }
          100% { opacity: 0; clip-path: circle(150vmax at var(--portal-x) var(--portal-y)); }
        }

        @keyframes gravity-portal-content {
          from { opacity: 0; filter: blur(15px); transform: translateY(50px) scale(0.8); }
          to { opacity: 1; filter: blur(0); transform: translateY(0) scale(1); }
        }

        @keyframes gravity-portal-spin { to { transform: rotate(360deg); } }
        @keyframes gravity-orbit { to { transform: rotate(360deg); } }
        @keyframes gravity-pulse { 0%, 100% { opacity: 0.45; transform: scale(0.8); } 50% { opacity: 1; transform: scale(1.2); } }
        @keyframes gravity-noise { 0% { transform: translate(0, 0); } 25% { transform: translate(3%, -2%); } 50% { transform: translate(-2%, 3%); } 75% { transform: translate(2%, 2%); } 100% { transform: translate(-3%, -2%); } }
      `}</style>

      <section ref={fieldRef} id="gravity-navigation-field" className="gravity-field">
        <div className="gravity-field__grid" aria-hidden="true" />
        <canvas ref={canvasRef} className="gravity-field__canvas" aria-hidden="true" />
        <div className="gravity-field__noise" aria-hidden="true" />

        {/* CLEAN FLOATING BRANDFORGE SERVICES */}
        {NAVIGATION_ITEMS.map((item) => (
          <button
            key={item.id}
            type="button"
            data-gravity-word
            className="gravity-field__word"
            aria-label={`Open ${item.label} service section`}
            onClick={(event) => openDestination(item, event)}
            style={{
              left: item.left,
              top: item.top,
              fontSize: item.size,
              "--word-accent": item.colorA,
            }}
          >
            {item.label}
          </button>
        ))}

        {/* CENTER BRANDFORGE LOGO */}
        <div className="gravity-field__content">
          <div className="gravity-field__heading">
            <div className="gravity-field__label">
              <span className="gravity-field__label-dot" />
              BRANDFORGE DIGITAL SERVICES
            </div>

            {/* BRANDFORGE LOGO AT THE CENTER */}
            <div className="gravity-brand-logo-wrap" title="BrandForge - Turning Ideas Into Digital Power">
              <img src="/logo.png" alt="BrandForge Logo" className="gravity-brand-logo-img" />
            </div>

            <p className="gravity-field__description">
              Select any <strong>floating service node</strong> around the logo to open its capability.
            </p>
          </div>
        </div>

        <div className="gravity-field__cursor" aria-hidden="true" />

        <div className="gravity-field__instruction">
          <span className="gravity-field__instruction-line" />
          Hover & Select BrandForge Service Nodes
          <span className="gravity-field__instruction-line" />
        </div>
      </section>

      {/* DESTINATION SECTIONS FOR EACH BRANDFORGE SERVICE */}
      {NAVIGATION_ITEMS.map((item) => (
        <section
          key={item.id}
          id={item.id}
          data-destination-section
          className="gravity-destination"
          style={{
            "--section-a": item.colorA,
            "--section-b": item.colorB,
          }}
        >
          <div className="gravity-destination__number" aria-hidden="true">
            {item.number}
          </div>

          <div className="gravity-destination__content">
            <div className="gravity-destination__eyebrow">{item.eyebrow}</div>
            <h2 className="gravity-destination__title">{item.label}</h2>
            <p className="gravity-destination__description">{item.description}</p>
            <p className="gravity-destination__detail">{item.detail}</p>

            <button type="button" className="gravity-destination__back" onClick={returnToField}>
              <span className="gravity-destination__back-arrow">↑</span>
              Return to BrandForge gravity field
            </button>
          </div>
        </section>
      ))}

      {/* WARP PORTAL TRANSITION */}
      {portal.visible && (
        <div
          key={portal.key}
          className="gravity-portal"
          aria-hidden="true"
          style={{
            "--portal-x": `${portal.x}px`,
            "--portal-y": `${portal.y}px`,
            "--portal-a": portal.colorA,
            "--portal-b": portal.colorB,
          }}
        >
          <div className="gravity-portal__content">
            <span className="gravity-portal__number">Opening Service / {portal.number}</span>
            <p className="gravity-portal__label">{portal.label}</p>
          </div>
        </div>
      )}
    </main>
  );
}
