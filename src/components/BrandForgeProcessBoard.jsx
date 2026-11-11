"use client";

import { getStorageUrl } from "../utils/storageAsset";
import React, { useRef, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Compass, Layers, Sparkles, Gauge, BarChart3 } from "lucide-react";

/* ─── BrandForge particle colours ─── */
const PARTICLE_COLORS = [
  { r: 255, g: 24,  b: 1   },
  { r: 255, g: 120, b: 100 },
  { r: 255, g: 255, b: 255 },
  { r: 191, g: 52,  b: 43  },
];

const STEPS = [
  {
    number: "01",
    eyebrow: "DISCOVERY",
    title: "Discovery & Deep Dive",
    description:
      "We start by listening. We dig into your goals, your audience, your competition, and where you stand online right now — so we know exactly what we're working with.",
    tags: ["Audience Research", "Competitor Audit"],
    icon: Compass,
    accent: "red",
  },
  {
    number: "02",
    eyebrow: "BLUEPRINT",
    title: "Strategy & Blueprinting",
    description:
      "No templates. We build a data-backed digital marketing plan across SEO, paid ads, content, and social, mapped to your actual ROI targets and timeline.",
    tags: ["Channel Architecture", "ROI Roadmap"],
    icon: Layers,
    accent: "dark",
  },
  {
    number: "03",
    eyebrow: "PRODUCTION",
    title: "Creative Execution & Launch",
    description:
      "Our designers, writers, and media buyers turn the plan into high-converting campaigns and creative, then ship it live across every platform that matters.",
    tags: ["Ad Creative", "Full-Funnel Launch"],
    icon: Sparkles,
    accent: "red",
  },
  {
    number: "04",
    eyebrow: "PERFORMANCE",
    title: "Optimization & Scaling",
    description:
      "We watch the live numbers, run A/B tests, and tune bids and messaging to bring acquisition costs down and ROAS up.",
    tags: ["A/B Experimentation", "ROAS Scaling"],
    icon: Gauge,
    accent: "dark",
  },
  {
    number: "05",
    eyebrow: "ANALYTICS",
    title: "Growth & Reporting",
    description:
      "You always know where things stand. Clear reports and regular reviews keep you on top of wins, insights, and what's next.",
    tags: ["Live Dashboards", "Executive Reviews"],
    icon: BarChart3,
    accent: "red",
  },
];

const DESKTOP_PLACEMENTS = [
  { left: "0%",   top: "0px"   },
  { right: "0%",  top: "210px" },
  { left: "0%",   top: "490px" },
  { right: "0%",  top: "710px" },
  { left: "0%",   top: "980px" },
];

const BOARD_HEIGHT = 1320;

const ROUTE =
  "M 250 100 C 480 100, 550 300, 750 300" +
  " C 920 300, 480 520, 250 600" +
  " C 80 680, 580 870, 780 870" +
  " C 960 870, 430 1060, 220 1120";

/* ─── Particle Canvas ─── */
function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId = 0;
    let particles = [];
    let W = 0, H = 0, dpr = 1;
    const mouse = { x: null, y: null, radius: 160 };

    class Particle {
      constructor(x, y, vx, vy, size, color) {
        Object.assign(this, { x, y, vx, vy, size, color });
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        const g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 4);
        const { r, g: gv, b } = this.color;
        g.addColorStop(0,    `rgba(${r},${gv},${b},1)`);
        g.addColorStop(0.35, `rgba(${r},${gv},${b},0.7)`);
        g.addColorStop(1,    `rgba(${r},${gv},${b},0)`);
        ctx.fillStyle = g;
        ctx.fill();
      }
      update() {
        if (this.x >= W || this.x <= 0) this.vx *= -1;
        if (this.y >= H || this.y <= 0) this.vy *= -1;
        if (mouse.x !== null) {
          const dx = mouse.x - this.x, dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > 0 && dist < mouse.radius) {
            const f = (mouse.radius - dist) / mouse.radius;
            this.x -= (dx / dist) * f * 4;
            this.y -= (dy / dist) * f * 4;
          }
        }
        this.x += this.vx;
        this.y += this.vy;
        this.draw();
      }
    }

    const spawn = () => {
      particles = [];
      const count = Math.min(70, Math.max(25, Math.floor((W * H) / 20000)));
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(
          Math.random() * W, Math.random() * H,
          Math.random() * 0.4 - 0.2, Math.random() * 0.4 - 0.2,
          Math.random() * 1.6 + 0.8,
          PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
        ));
      }
    };

    const resize = () => {
      canvas.style.width  = "";
      canvas.style.height = "";
      const parent = canvas.parentElement;
      W = parent.offsetWidth;
      H = parent.offsetHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width  = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width  = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      spawn();
    };

    const connect = () => {
      const maxD = 110, maxD2 = maxD * maxD;
      ctx.lineWidth = 0.75;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const d2 = dx * dx + dy * dy;
          if (d2 > maxD2) continue;
          const op = (0.32 * (1 - d2 / maxD2)).toFixed(2);
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.strokeStyle = `rgba(255, 24, 1, ${op})`;
          ctx.stroke();
        }
      }
    };

    let isPaused = false;
    const animate = () => {
      if (isPaused) return;
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, W, H);
      particles.forEach(p => p.update());
      connect();
      animId = requestAnimationFrame(animate);
    };

    const parent = canvas.parentElement;
    const onMove = (e) => {
      if (isPaused || !parent) return;
      const rect = parent.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => { mouse.x = null; mouse.y = null; };

    resize();
    const layoutTimer = setTimeout(resize, 300);
    let io;
    if (typeof IntersectionObserver !== "undefined" && parent) {
      io = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          if (isPaused) {
            isPaused = false;
            animId = requestAnimationFrame(animate);
          }
        } else {
          isPaused = true;
          cancelAnimationFrame(animId);
        }
      }, { threshold: 0.05 });
      io.observe(parent);
    }
    animate();

    const ro = new ResizeObserver(() => {
      resize();
    });
    if (parent) {
      ro.observe(parent);
      parent.addEventListener("mousemove", onMove, { passive: true });
      parent.addEventListener("mouseleave", onLeave, { passive: true });
    }

    return () => {
      if (io) io.disconnect();
      cancelAnimationFrame(animId);
      clearTimeout(layoutTimer);
      ro.disconnect();
      if (parent) {
        parent.removeEventListener("mousemove", onMove);
        parent.removeEventListener("mouseleave", onLeave);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute", inset: 0,
        width: "100%", height: "100%",
        zIndex: 0, display: "block",
      }}
    />
  );
}

/* ─── Process Card (Editorial Studio Aesthetic matching Service Cards) ─── */
function ProcessCard({ step, index, placement, isMobile }) {
  const isRed = step.accent === "red";
  const Icon = step.icon;

  const cardStyle = isMobile
    ? { position: "relative", width: "100%", marginBottom: 24 }
    : {
        position: "absolute",
        width: 390,
        ...placement,
        zIndex: 10,
      };

  return (
    <motion.article
      style={cardStyle}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={!isMobile ? { scale: 1.03, y: -6, zIndex: 30 } : {}}
    >
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 20,
          background: isRed
            ? "linear-gradient(135deg, #FF1801 0%, #C40F00 100%)"
            : "#000000",
          border: "1.5px solid rgba(255, 255, 255, 0.9)",
          padding: "22px 24px 20px",
          boxShadow: "none",
          cursor: "default",
        }}
      >
        <div style={{ position: "relative", zIndex: 1 }}>
          {/* TOP BAR: ICON CAPSULE PILL + CATEGORY EYEBROW */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 16,
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 48,
                height: 26,
                borderRadius: 999,
                background: "transparent",
                border: isRed
                  ? "1px solid rgba(255, 255, 255, 0.32)"
                  : "1px solid rgba(255, 24, 1, 0.42)",
                color: isRed ? "#FFFFFF" : "#FF1801",
              }}
            >
              {Icon && <Icon size={14} strokeWidth={2.2} />}
            </span>

            <span
              style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: isRed ? "rgba(255, 255, 255, 0.9)" : "#FF1801",
              }}
            >
              {step.eyebrow}
            </span>
          </div>

          {/* UPPERCASE EDITORIAL HEADLINE */}
          <h3
            style={{
              fontFamily: '"Outfit", sans-serif',
              fontSize: "clamp(1.28rem, 1.5vw, 1.5rem)",
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              margin: "0 0 10px",
            }}
          >
            {step.title}
          </h3>

          {/* CLEAN DESCRIPTION */}
          <p
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: "0.84rem",
              fontWeight: 500,
              lineHeight: 1.52,
              color: isRed
                ? "rgba(255, 255, 255, 0.9)"
                : "rgba(255, 255, 255, 0.78)",
              margin: "0 0 18px",
            }}
          >
            {step.description}
          </p>

          {/* BOTTOM ROW: DELIVERABLE PILLS + RINGED INDEX */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 12,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 6,
              }}
            >
              {step.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 7,
                    fontFamily: '"Plus Jakarta Sans", sans-serif',
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: isRed
                      ? "rgba(255, 255, 255, 0.92)"
                      : "rgba(255, 255, 255, 0.85)",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: isRed ? "#FFFFFF" : "#FF1801",
                      flexShrink: 0,
                    }}
                  />
                  {tag}
                </span>
              ))}
            </div>

            <div
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                flexShrink: 0,
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  right: -4,
                  top: -8,
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  border: isRed
                    ? "1px solid rgba(255, 255, 255, 0.2)"
                    : "1px solid rgba(255, 24, 1, 0.24)",
                  pointerEvents: "none",
                }}
              />
              <span
                style={{
                  fontFamily: '"Outfit", sans-serif',
                  fontSize: "2.35rem",
                  fontWeight: 900,
                  lineHeight: 0.9,
                  letterSpacing: "-0.04em",
                  color: isRed ? "#FFFFFF" : "#FF1801",
                }}
              >
                {step.number}
              </span>
              <span
                style={{
                  marginTop: 5,
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: "0.62rem",
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  color: "#FFFFFF",
                }}
              >
                STEP →
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ─── Main Export ─── */
export default function BrandForgeProcessBoard() {
  const [isMobile, setIsMobile] = React.useState(false);

  const sectionRef     = useRef(null);
  const pathRef        = useRef(null);
  const rocketRef      = useRef(null);
  const boardRef       = useRef(null);
  const flameRef       = useRef(null);
  const scrollStopTimer = useRef(null);

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const path   = pathRef.current;
    const rocket = rocketRef.current;
    const board  = boardRef.current;
    if (!path || !rocket || !board) return;

    const total = path.getTotalLength();
    const dist  = Math.max(0, Math.min(1, progress)) * total;
    const pt    = path.getPointAtLength(dist);

    const eps   = 8;
    const p1    = path.getPointAtLength(Math.max(0, dist - eps));
    const p2    = path.getPointAtLength(Math.min(total, dist + eps));
    const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x) * (180 / Math.PI);

    const scaleX = board.offsetWidth  / 1000;
    const scaleY = board.offsetHeight / BOARD_HEIGHT;

    rocket.style.transform = `translate(${pt.x * scaleX - 85}px, ${pt.y * scaleY - 75}px) rotate(${angle}deg)`;

    // Show flame while scrolling, hide shortly after scroll stops
    if (flameRef.current) flameRef.current.style.opacity = "1";
    clearTimeout(scrollStopTimer.current);
    scrollStopTimer.current = setTimeout(() => {
      if (flameRef.current) flameRef.current.style.opacity = "0";
    }, 100);
  });

  return (
    <section ref={sectionRef} style={{
      background: "#000000",
      width: "100%",
      padding: isMobile ? "80px 20px" : "100px 40px 140px",
      position: "relative",
      overflow: "hidden",
    }}>
      <ParticleCanvas />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 1100, margin: "0 auto" }}>

        <motion.div
          style={{ textAlign: "center", marginBottom: isMobile ? 48 : 80 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <span style={{
            display: "inline-block",
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#FF1801",
            marginBottom: 12,
          }}>
            OUR METHODOLOGY · 5-STEP WORKFLOW
          </span>

          <h2 style={{
            fontFamily: '"Outfit", sans-serif',
            fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
            fontWeight: 900,
            lineHeight: 1.0,
            letterSpacing: "-0.035em",
            textTransform: "uppercase",
            color: "#FFFFFF",
            margin: "0 0 18px",
          }}>
            How We Work at{" "}
            <span style={{ color: "#FF1801" }}>BrandForge</span>
          </h2>

          <p style={{
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            fontSize: "clamp(0.95rem, 1.15vw, 1.08rem)",
            fontWeight: 500,
            color: "rgba(255,255,255,0.62)",
            lineHeight: 1.65,
            maxWidth: 560,
            margin: "0 auto",
          }}>
            Real digital marketing growth isn&apos;t luck. It comes from a tested process that turns your vision into results you can measure.
          </p>
        </motion.div>

        {isMobile ? (
          <div>
            {STEPS.map((step, i) => (
              <ProcessCard key={i} step={step} index={i} placement={null} isMobile={true} />
            ))}
          </div>
        ) : (
          <div ref={boardRef} style={{ position: "relative", height: BOARD_HEIGHT, width: "100%" }}>

            <svg
              aria-hidden="true"
              style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 5 }}
              viewBox={`0 0 1000 ${BOARD_HEIGHT}`}
              preserveAspectRatio="none"
            >
              <motion.path
                ref={pathRef}
                d={ROUTE}
                fill="none"
                stroke="rgba(255, 24, 1,0.35)"
                strokeWidth="2"
                strokeDasharray="10 8"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                initial={{ strokeDashoffset: 0 }}
                animate={{ strokeDashoffset: -180 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
            </svg>

            <div
              ref={rocketRef}
              style={{
                position: "absolute", top: 0, left: 0,
                width: 170, height: 150,
                zIndex: 4, pointerEvents: "none",
                willChange: "transform",
                transformOrigin: "center center",
              }}
            >
              {/* Animated exhaust flame — shown only while scrolling */}
              <div
                ref={flameRef}
                style={{
                  position: "absolute",
                  left: 0, top: 0, width: "100%", height: "100%",
                  opacity: 0,
                  transition: "opacity 1.2s ease-out",
                  pointerEvents: "none",
                }}
              >
                {/* Outer glow */}
                <motion.div
                  style={{
                    position: "absolute",
                    left: -8, top: 63,
                    width: 62, height: 30,
                    borderRadius: "50%",
                    background: "radial-gradient(ellipse at 88% 50%, rgba(255,220,80,0.95) 0%, rgba(255,100,10,0.7) 50%, transparent 85%)",
                    filter: "blur(5px)",
                    transformOrigin: "right center",
                  }}
                  animate={{ scaleX: [1,1.45,0.82,1.3,1], scaleY: [1,0.78,1.18,0.85,1], opacity: [0.9,1,0.72,0.95,0.9] }}
                  transition={{ duration: 0.22, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Mid flame */}
                <motion.div
                  style={{
                    position: "absolute",
                    left: 8, top: 72,
                    width: 40, height: 16,
                    borderRadius: "50%",
                    background: "radial-gradient(ellipse at 85% 50%, rgba(255,255,180,1) 0%, rgba(255,160,20,0.9) 45%, transparent 90%)",
                    filter: "blur(2.5px)",
                    transformOrigin: "right center",
                  }}
                  animate={{ scaleX: [1,1.35,0.88,1.2,1], scaleY: [1,0.82,1.15,0.88,1] }}
                  transition={{ duration: 0.18, repeat: Infinity, ease: "easeInOut", delay: 0.04 }}
                />
                {/* Bright core */}
                <motion.div
                  style={{
                    position: "absolute",
                    left: 22, top: 78,
                    width: 20, height: 8,
                    borderRadius: "50%",
                    background: "radial-gradient(ellipse at 80% 50%, rgba(255,255,255,1) 0%, rgba(255,230,120,0.9) 60%, transparent 100%)",
                    filter: "blur(1px)",
                    transformOrigin: "right center",
                  }}
                  animate={{ scaleX: [1,1.25,0.9,1.1,1], opacity: [1,0.85,1,0.9,1] }}
                  transition={{ duration: 0.14, repeat: Infinity, ease: "easeInOut", delay: 0.07 }}
                />
              </div>

              <img
                src={getStorageUrl("/rocket.png")}
                alt="rocket"
                loading="lazy"
                decoding="async"
                style={{ width: "100%", height: "100%", objectFit: "contain", position: "relative", zIndex: 1 }}
              />
            </div>

            {STEPS.map((step, i) => (
              <ProcessCard
                key={i}
                step={step}
                index={i}
                placement={DESKTOP_PLACEMENTS[i]}
                isMobile={false}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
