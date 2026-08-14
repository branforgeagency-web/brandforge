import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

/* ─── FAQ Data (5 items) ─── */
const FAQ_DATA = [
  {
    question: "What services does BrandForge offer?",
    answer:
      "We provide a full-spectrum digital growth suite — from SEO & paid advertising to social media management, content marketing, web design, brand strategy, email automation, and conversion rate optimization. Every service is tailored to your unique business goals.",
    tag: "Core Suite",
  },
  {
    question: "How long before I see real results?",
    answer:
      "Most clients see measurable improvements within 30–60 days for paid channels. Organic strategies like SEO typically show compounding returns in 3–6 months. We set realistic milestones and keep you updated with transparent performance dashboards from day one.",
    tag: "Timeline & ROI",
  },
  {
    question: "What makes BrandForge different from other agencies?",
    answer:
      "We don't do cookie-cutter. Every strategy is custom-built using proprietary data frameworks, real-time analytics, and a dedicated growth team assigned to your brand. Our results-first model means we only win when you win.",
    tag: "Our Difference",
  },
  {
    question: "How does your pricing work?",
    answer:
      "We offer flexible pricing tiers based on scope, channels, and goals. Every engagement starts with a free strategy session where we map out your needs and recommend the right plan. No hidden fees, no long-term lock-ins.",
    tag: "Flexible Plans",
  },
  {
    question: "How do I get started with BrandForge?",
    answer:
      "It's simple — book a free 30-minute strategy call. We'll analyze your current digital presence, identify growth opportunities, and present a custom action plan. No commitment required. Let's build something extraordinary together.",
    tag: "Quick Start",
  },
];

/* ─── Black Particle Globe Effect (Light Theme Background) ─── */
const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));
const TILT = -0.42;
const ROT_SPEED = 0.16;
const FORM_SPREAD = 1.9;
const FORM_DUR = 1.55;

function buildParticles() {
  const isSmall = typeof window !== "undefined" && window.innerWidth < 768;
  const surface = isSmall ? 1000 : 1600;
  const interior = Math.round(surface * 0.25);
  const n = surface + interior;

  const p = {
    n,
    hx: new Float32Array(n), hy: new Float32Array(n), hz: new Float32Array(n),
    sx: new Float32Array(n), sy: new Float32Array(n), sz: new Float32Array(n),
    delay: new Float32Array(n), size: new Float32Array(n),
    bright: new Float32Array(n), phase: new Float32Array(n),
    pdx: new Float32Array(n), pdy: new Float32Array(n),
    px: new Float32Array(n), py: new Float32Array(n), pz: new Float32Array(n),
    pa: new Float32Array(n), ps: new Float32Array(n), ph: new Float32Array(n),
  };

  for (let i = 0; i < n; i++) {
    let ux, uy, uz, rr;

    if (i < surface) {
      const y = 1 - (i / (surface - 1)) * 2;
      const r = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = i * GOLDEN_ANGLE;
      ux = Math.cos(theta) * r;
      uy = y;
      uz = Math.sin(theta) * r;
      rr = 1;
      p.size[i] = 0.7 + Math.random() * 0.9;
      p.bright[i] = 0.45 + Math.random() * 0.4;
    } else {
      const y = Math.random() * 2 - 1;
      const r = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = Math.random() * Math.PI * 2;
      ux = Math.cos(theta) * r;
      uy = y;
      uz = Math.sin(theta) * r;
      rr = 0.55 + Math.random() * 0.37;
      p.size[i] = 0.5 + Math.random() * 0.5;
      p.bright[i] = 0.2 + Math.random() * 0.3;
    }

    p.hx[i] = ux * rr;
    p.hy[i] = uy * rr;
    p.hz[i] = uz * rr;

    const sy = Math.random() * 2 - 1;
    const sr = Math.sqrt(Math.max(0, 1 - sy * sy));
    const st = Math.random() * Math.PI * 2;
    const dist = 2.2 + Math.random() * 1.8;
    p.sx[i] = Math.cos(st) * sr * dist;
    p.sy[i] = sy * dist;
    p.sz[i] = Math.sin(st) * sr * dist;

    const rimInit = 1 - Math.abs(uz);
    p.delay[i] = (1 - rimInit) * FORM_SPREAD * 0.62 + Math.random() * FORM_SPREAD * 0.5;
    p.phase[i] = Math.random() * Math.PI * 2;
  }

  return p;
}

function BlackParticleGlobeCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const P = buildParticles();
    const order = new Int32Array(P.n);
    for (let i = 0; i < P.n; i++) order[i] = i;

    let w = 0, h = 0, dpr = 1;
    const pointer = { x: 0, y: 0, active: false };
    let raf = 0;
    const startTime = performance.now();

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      w = parent.offsetWidth;
      h = parent.offsetHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reduce) { cancelAnimationFrame(raf); raf = requestAnimationFrame(frame); }
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
    };
    const onTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        const rect = canvas.getBoundingClientRect();
        pointer.x = e.touches[0].clientX - rect.left;
        pointer.y = e.touches[0].clientY - rect.top;
        pointer.active = true;
      }
    };
    const onLeave = () => { pointer.active = false; };

    if (!reduce) {
      canvas.addEventListener("pointermove", onMove);
      canvas.addEventListener("pointerleave", onLeave);
      canvas.addEventListener("pointerdown", onMove);
      canvas.addEventListener("touchmove", onTouchMove, { passive: true });
    }

    const frame = (now) => {
      const t = (now - startTime) / 1000;
      const isMobile = w < 768;
      const R = (isMobile ? 0.48 : 0.58) * Math.min(w, h);
      const FOCAL = 3.4 * R;
      const cx = isMobile ? w / 2 : w / 2 + 20;
      const cy = h / 2;

      const angle = reduce ? 0.6 : t * ROT_SPEED;
      const cy_ = Math.cos(angle), sy_ = Math.sin(angle);
      const cb = Math.cos(TILT), sb = Math.sin(TILT);

      const infl = 0.33 * R;
      const maxPush = 0.52 * infl;
      const jitAmp = 0.16 * infl;

      for (let i = 0; i < P.n; i++) {
        let prog;
        if (reduce) {
          prog = 1;
        } else {
          prog = (t - P.delay[i]) / FORM_DUR;
          prog = prog < 0 ? 0 : prog > 1 ? 1 : prog;
          prog = 1 - Math.pow(1 - prog, 3);
        }

        const hx = P.hx[i], hy = P.hy[i], hz = P.hz[i];
        const cxv = P.sx[i] + (hx - P.sx[i]) * prog;
        const cyv = P.sy[i] + (hy - P.sy[i]) * prog;
        const czv = P.sz[i] + (hz - P.sz[i]) * prog;

        const rx = cxv * cy_ + czv * sy_;
        let rz = -cxv * sy_ + czv * cy_;
        const ry = cyv * cb - rz * sb;
        rz = cyv * sb + rz * cb;

        const len = Math.sqrt(rx * rx + ry * ry + rz * rz) || 1e-4;
        const nz = rz / len;

        const X = rx * R, Y = ry * R, Z = rz * R;
        let denom = FOCAL - Z;
        if (denom < 0.3 * R) denom = 0.3 * R;
        const persp = FOCAL / denom;

        let sxp = cx + X * persp;
        let syp = cy - Y * persp;

        let targetX = 0, targetY = 0, disturb = 0;
        if (pointer.active && nz > 0 && prog > 0.92) {
          const dx = sxp - pointer.x;
          const dy = syp - pointer.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < infl) {
            const fall = 0.5 - 0.5 * Math.cos((1 - d / infl) * Math.PI);
            const inv = d > 1e-3 ? 1 / d : 0;
            targetX = dx * inv * fall * maxPush;
            targetY = dy * inv * fall * maxPush;
            disturb = fall;
          }
        }

        P.pdx[i] += (targetX - P.pdx[i]) * 0.14;
        P.pdy[i] += (targetY - P.pdy[i]) * 0.14;

        const live = Math.max(disturb, Math.min(1, Math.hypot(P.pdx[i], P.pdy[i]) / maxPush));
        if (live > 0.001) {
          const ph = P.phase[i];
          sxp += P.pdx[i] + Math.sin(t * 9 + ph) * jitAmp * live;
          syp += P.pdy[i] + Math.cos(t * 11 + ph * 1.7) * jitAmp * live;
        }

        const front = 0.5 + 0.5 * nz;
        const rim = 1 - Math.abs(nz);
        let alpha = prog * P.bright[i] * (0.2 + 0.5 * front) * (0.6 + 0.4 * rim) * 0.45;
        if (alpha > 0.8) alpha = 0.8;

        P.px[i] = sxp;
        P.py[i] = syp;
        P.pz[i] = Z;
        P.pa[i] = alpha;
        P.ps[i] = Math.max(0.45, P.size[i] * persp * (0.75 + 0.45 * rim));
        P.ph[i] = rim > 0.62 && front > 0.5 && prog > 0.6 ? 1 : 0;
      }

      order.sort((a, b) => P.pz[a] - P.pz[b]);

      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "source-over";
      for (let k = 0; k < P.n; k++) {
        const i = order[k];
        const a = P.pa[i];
        if (a <= 0.005) continue;
        const x = P.px[i], y = P.py[i], s = P.ps[i];

        if (P.ph[i]) {
          ctx.fillStyle = `rgba(255, 77, 77, ${a * 0.25})`;
          ctx.beginPath();
          ctx.arc(x, y, s * 2.5, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = `rgba(20, 24, 38, ${a})`;
        ctx.beginPath();
        ctx.arc(x, y, s, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduce) raf = requestAnimationFrame(frame);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement);
    if (!reduce) raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
      canvas.removeEventListener("pointerdown", onMove);
      canvas.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "block",
        zIndex: 0,
        pointerEvents: "auto",
      }}
    />
  );
}

/* ─── Creative Floating FAQ Card ─── */
function FAQCard({ item, index, isOpen, onToggle, isMobile }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      style={{ marginBottom: 16 }}
    >
      <motion.div
        onClick={onToggle}
        whileHover={!isMobile ? { y: -2 } : {}}
        whileTap={{ scale: 0.99 }}
        style={{
          borderRadius: 22,
          background: isOpen
            ? "rgba(255, 255, 255, 0.94)"
            : "rgba(255, 255, 255, 0.65)",
          backdropFilter: "blur(16px) saturate(180%)",
          WebkitBackdropFilter: "blur(16px) saturate(180%)",
          border: isOpen
            ? "1.5px solid #FF4D4D"
            : "1px solid rgba(255, 255, 255, 0.8)",
          boxShadow: isOpen
            ? "0 20px 48px -12px rgba(255, 77, 77, 0.22), inset 0 1px 0 0 rgba(255, 255, 255, 1)"
            : "0 8px 32px 0 rgba(31, 38, 135, 0.05), inset 0 1px 0 0 rgba(255, 255, 255, 0.9)",
          padding: isMobile ? "20px 18px" : "24px 28px",
          cursor: "pointer",
          transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Left edge glowing bar for active glass card */}
        {isOpen && (
          <motion.div
            layoutId="card-glass-glow"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              width: 4,
              background: "linear-gradient(180deg, #FF4D4D 0%, #FF8A65 100%)",
              boxShadow: "0 0 12px rgba(255, 77, 77, 0.8)",
            }}
          />
        )}

        {/* Question Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <div style={{ flex: 1 }}>
            {/* Tag Badge */}
            <span
              style={{
                display: "inline-block",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.72rem",
                fontWeight: 800,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: isOpen ? "#FF4D4D" : "#9CA3AF",
                background: isOpen ? "rgba(255,77,77,0.08)" : "rgba(0,0,0,0.03)",
                padding: "3px 10px",
                borderRadius: 999,
                marginBottom: 10,
                transition: "all 0.3s",
              }}
            >
              {item.tag}
            </span>

            <h3
              style={{
                fontFamily: "'Outfit', 'Inter', sans-serif",
                fontSize: isMobile ? "1rem" : "1.12rem",
                fontWeight: 800,
                color: isOpen ? "#111827" : "#1F2937",
                lineHeight: 1.35,
                margin: 0,
                letterSpacing: "-0.01em",
                transition: "color 0.3s",
              }}
            >
              {item.question}
            </h3>
          </div>

          {/* Plus / X Icon Button */}
          <motion.div
            animate={{
              rotate: isOpen ? 135 : 0,
              background: isOpen ? "#FF4D4D" : "rgba(0,0,0,0.04)",
              color: isOpen ? "#FFFFFF" : "#4B5563",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              width: 36,
              height: 36,
              minWidth: 36,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: isOpen ? "0 4px 14px rgba(255,77,77,0.35)" : "none",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M7 1V13M1 7H13"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>
        </div>

        {/* Answer Accordion */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? height : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{
            height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
            opacity: { duration: 0.25, delay: isOpen ? 0.08 : 0 },
          }}
          style={{ overflow: "hidden" }}
        >
          <div ref={contentRef} style={{ paddingTop: 18 }}>
            <div
              style={{
                height: 1,
                width: "100%",
                background: "linear-gradient(90deg, rgba(255,77,77,0.2), transparent)",
                marginBottom: 16,
              }}
            />
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: isMobile ? "0.9rem" : "0.95rem",
                lineHeight: 1.75,
                color: "#4B5563",
                margin: 0,
              }}
            >
              {item.answer}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Main FAQ Section ─── */
export default function BrandForgeFAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        padding: isMobile ? "70px 16px 90px" : "110px 24px 130px",
        background: "#FBFBFC",
        overflow: "hidden",
      }}
    >
      {/* Decorative ambient background blur blobs */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: -100,
          left: "20%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,77,77,0.04) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: -100,
          right: "10%",
          width: 450,
          height: 450,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,138,101,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1240,
          margin: "0 auto",
        }}
      >
        {/* Header Title Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: "center", marginBottom: isMobile ? 36 : 56 }}
        >
          {/* Top Pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 18px",
              background: "rgba(255,77,77,0.08)",
              border: "1px solid rgba(255,77,77,0.2)",
              borderRadius: 999,
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: "0.14em",
              color: "#FF4D4D",
              textTransform: "uppercase",
              marginBottom: 20,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#FF4D4D",
                boxShadow: "0 0 8px rgba(255,77,77,0.8)",
              }}
            />
            Got Questions? We Have Answers
          </div>

          <h2
            style={{
              fontFamily: "'Outfit', 'Inter', sans-serif",
              fontSize: "clamp(2.1rem, 5vw, 3.6rem)",
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: "-0.035em",
              color: "#111827",
              margin: "0 0 16px",
            }}
          >
            Frequently Asked{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #FF4D4D 0%, #FF8A65 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Questions
            </span>
          </h2>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(0.95rem, 1.2vw, 1.08rem)",
              color: "#6B7280",
              lineHeight: 1.65,
              maxWidth: 580,
              margin: "0 auto",
            }}
          >
            Everything you need to know about partnering with BrandForge for measurable digital growth.
          </p>
        </motion.div>

        {/* Main Grid Content */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: isMobile ? 32 : 60,
            flexWrap: "wrap",
          }}
        >
          {/* Left — 3D Stage with Black Particle Globe */}
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 20 : 0, x: isMobile ? 0 : -40 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              flex: isMobile ? "1 1 100%" : "0 0 440px",
              maxWidth: "100%",
              position: isMobile ? "relative" : "sticky",
              top: isMobile ? 0 : 120,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                minHeight: isMobile ? 280 : 440,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 24,
                overflow: "hidden",
              }}
            >
              {/* Interactive Black Particle Globe behind image */}
              <BlackParticleGlobeCanvas />

              {/* 3D Illustration Image */}
              <motion.img
                whileHover={{ scale: 1.03, rotate: -1 }}
                transition={{ duration: 0.4 }}
                src="/faq-illustration.png"
                alt="Frequently Asked Questions illustration"
                style={{
                  width: isMobile ? "85%" : "100%",
                  maxWidth: 400,
                  height: "auto",
                  objectFit: "contain",
                  position: "relative",
                  zIndex: 2,
                  transform: isMobile ? "none" : "translateX(-10px)",
                  filter: "drop-shadow(0 16px 32px rgba(0,0,0,0.08))",
                }}
              />
            </div>
          </motion.div>

          {/* Right — Creative Floating FAQ Cards */}
          <div style={{ flex: 1, minWidth: isMobile ? "100%" : 340, zIndex: 2 }}>
            {FAQ_DATA.map((item, i) => (
              <FAQCard
                key={item.question}
                item={item}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => handleToggle(i)}
                isMobile={isMobile}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
