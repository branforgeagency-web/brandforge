import React, { useRef, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

/* ─── BrandForge particle colours ─── */
const PARTICLE_COLORS = [
  { r: 239, g: 65,  b: 54  },
  { r: 255, g: 120, b: 100 },
  { r: 255, g: 255, b: 255 },
  { r: 191, g: 52,  b: 43  },
];

const STEPS = [
  {
    number: "01",
    title: "Discovery & Deep Dive",
    description:
      "We start by listening. We analyze your business goals, target audience, current digital footprint, and unique value proposition — building a crystal-clear picture of your market position.",
    accent: "red",
  },
  {
    number: "02",
    title: "Strategy & Blueprinting",
    description:
      "One size doesn't fit all. We craft a data-backed, tailored strategy spanning SEO, paid ads, content, and social — mapped to your exact ROI targets and timelines.",
    accent: "neutral",
  },
  {
    number: "03",
    title: "Creative Execution & Launch",
    description:
      "Our designers, copywriters, and media buyers craft high-converting campaigns, stunning creatives, and optimized infrastructure — flawlessly deployed across all platforms.",
    accent: "red",
  },
  {
    number: "04",
    title: "Optimization & Scaling",
    description:
      "We continuously monitor live performance metrics, run A/B tests, and optimize bids and messaging — driving lower acquisition costs and maximum ROAS.",
    accent: "neutral",
  },
  {
    number: "05",
    title: "Growth & Reporting",
    description:
      "You're never in the dark. Clear performance reports and strategic reviews keep you updated on wins, insights, and next-phase growth for sustainable scaling.",
    accent: "red",
  },
];

const DESKTOP_PLACEMENTS = [
  { left: "-2%",  top: "0px",   rotate: "7deg"  },
  { right: "-2%", top: "200px", rotate: "-7deg" },
  { left: "-2%",  top: "480px", rotate: "7deg"  },
  { right: "-2%", top: "700px", rotate: "-6deg" },
  { left: "-2%",  top: "980px", rotate: "7deg"  },
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
      const count = Math.min(160, Math.max(50, Math.floor((W * H) / 11000)));
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
      const maxD = 130, maxD2 = maxD * maxD;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const d2 = dx * dx + dy * dy;
          if (d2 > maxD2) continue;
          const op = 0.5 * (1 - d2 / maxD2);
          const lg = ctx.createLinearGradient(particles[a].x, particles[a].y, particles[b].x, particles[b].y);
          const ca = particles[a].color, cb = particles[b].color;
          lg.addColorStop(0, `rgba(${ca.r},${ca.g},${ca.b},${op})`);
          lg.addColorStop(1, `rgba(${cb.r},${cb.g},${cb.b},${op})`);
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.strokeStyle = lg;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#060509";
      ctx.fillRect(0, 0, W, H);
      particles.forEach(p => p.update());
      connect();
      animId = requestAnimationFrame(animate);
    };

    const onMove = e => {
      const rect = canvas.parentElement.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => { mouse.x = null; mouse.y = null; };

    resize();
    const layoutTimer = setTimeout(resize, 300);
    animate();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement);
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(layoutTimer);
      ro.disconnect();
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
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

/* ─── Pin Icon ─── */
function PinIcon({ color }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      style={{
        width: 44,
        height: 44,
        fill: color,
        display: "block",
      }}
    >
      <path d="M16 3a1 1 0 0 1 .117 1.993L16 5v4.764l1.894 3.789c.054.108.088.22.1.331L18 14v2a1 1 0 0 1-.883.993L17 17h-4v4a1 1 0 0 1-1.993.117L11 21v-4H7a1 1 0 0 1-.993-.883L6 16v-2c0-.117.02-.23.06-.34l.046-.107L8 9.762V5a1 1 0 0 1-.117-1.993L8 3h8Z" />
    </svg>
  );
}

/* ─── Process Card ─── */
function ProcessCard({ step, index, placement, isMobile }) {
  const isRed = step.accent === "red";
  const isLeft = index % 2 === 0;

  const cardStyle = isMobile
    ? { position: "relative", width: "100%", marginBottom: 28 }
    : {
        position: "absolute",
        width: 320,
        ...placement,
        transform: `rotate(${placement.rotate})`,
        zIndex: 10,
        transition: "transform 0.3s ease",
      };

  return (
    <motion.article
      style={cardStyle}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={!isMobile ? { scale: 1.06, zIndex: 30, rotate: 0 } : {}}
    >
      <div style={{
        borderRadius: 24,
        border: isRed ? "1px solid rgba(255,255,255,0.15)" : "1px solid #e5e7eb",
        background: isRed ? "#EF4136" : "#FFFFFF",
        padding: "12px 10px 10px",
        boxShadow: isRed ? "0 8px 32px rgba(239, 65, 54,0.3)" : "0 8px 24px rgba(0,0,0,0.5)",
        cursor: "default",
        position: "relative",
      }}>
        {/* ANIMATED PUSH PIN DROPPING & PINNING INTO TOP-LEFT OR TOP-RIGHT CORNER ON SCROLL */}
        <motion.div
          initial={{ opacity: 0, y: -65, scale: 1.4 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: 1.25,
            delay: index * 0.2 + 0.35,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{
            display: "flex",
            justifyContent: isLeft ? "flex-start" : "flex-end",
            width: "100%",
            marginTop: -22,
            marginBottom: 4,
            paddingLeft: isLeft ? 12 : 0,
            paddingRight: !isLeft ? 12 : 0,
            transform: isLeft ? "rotate(-10deg)" : "rotate(10deg)",
          }}
        >
          <PinIcon color={isRed ? "#FFFFFF" : "#EF4136"} />
        </motion.div>

        <div style={{
          borderRadius: 16,
          border: isRed ? "1px solid #f3f4f6" : "1px solid rgba(239, 65, 54,0.2)",
          background: isRed ? "#FFFFFF" : "#EF4136",
          padding: "20px 18px 24px",
        }}>
          <span style={{
            display: "block",
            fontFamily: '"Comic Sans MS", "Chalkboard SE", cursive',
            fontSize: "2.8rem",
            lineHeight: 1,
            fontWeight: 900,
            color: isRed ? "#EF4136" : "#FFFFFF",
            marginBottom: 14,
          }}>
            {step.number}
          </span>

          <h3 style={{
            fontFamily: "'Outfit', 'Inter', sans-serif",
            fontSize: "1.2rem",
            fontWeight: 800,
            lineHeight: 1.2,
            color: isRed ? "#111827" : "#FFFFFF",
            marginBottom: 10,
            letterSpacing: "-0.02em",
          }}>
            {step.title}
          </h3>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.875rem",
            lineHeight: 1.65,
            color: isRed ? "#6b7280" : "rgba(255,255,255,0.8)",
            margin: 0,
          }}>
            {step.description}
          </p>
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
      background: "#060509",
      width: "100%",
      padding: isMobile ? "80px 20px" : "100px 40px 140px",
      position: "relative",
      overflow: "hidden",
    }}>
      <ParticleCanvas />

      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
        background: "radial-gradient(circle at center, transparent 10%, rgba(6,5,9,0.25) 55%, rgba(6,5,9,0.7) 100%)",
      }} />

      <div aria-hidden="true" style={{
        position: "absolute", top: "40%", right: -100, zIndex: 1,
        width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(239, 65, 54,0.1) 0%, transparent 70%)",
        filter: "blur(80px)", pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 1100, margin: "0 auto" }}>

        <motion.div
          style={{ textAlign: "center", marginBottom: isMobile ? 48 : 80 }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{
            fontFamily: "'Outfit', 'Inter', sans-serif",
            fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            color: "#FFFFFF",
            margin: "0 0 20px",
          }}>
            How We Work at{" "}
            <span style={{ color: "#EF4136" }}>BrandForge</span>
          </h2>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)",
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.7,
            maxWidth: 560,
            margin: "0 auto",
          }}>
            Impactful digital growth isn't luck — it's the product of a precise, tested process that turns your vision into measurable success.
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
                stroke="rgba(239, 65, 54,0.35)"
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
                src="/rocket.png?v=3"
                alt="rocket"
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
