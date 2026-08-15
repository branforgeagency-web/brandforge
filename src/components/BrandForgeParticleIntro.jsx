"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

/* ───────────────────────────────────────────────────────────────────────────
   BRANDFORGE PARTICLE GLOBE INTRO — Cinematic 3D Particle Sphere.
   Particles form a rotating sphere, revealing the BrandForge Logo at center.
   ─────────────────────────────────────────────────────────────────────────── */

const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));
const TILT = -0.38; // radians
const ROT_SPEED = 0.22; // radians/sec
const FORM_SPREAD = 1.8;
const FORM_DUR = 1.6;

function buildParticles() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 720;
  const surface = isMobile ? 1800 : 2800;
  const interior = Math.round(surface * 0.28);
  const n = surface + interior;

  const p = {
    n,
    hx: new Float32Array(n),
    hy: new Float32Array(n),
    hz: new Float32Array(n),
    sx: new Float32Array(n),
    sy: new Float32Array(n),
    sz: new Float32Array(n),
    delay: new Float32Array(n),
    size: new Float32Array(n),
    bright: new Float32Array(n),
    phase: new Float32Array(n),
    isRed: new Uint8Array(n), // 1 = BrandForge Crimson Red (#EF4136), 0 = White
    pdx: new Float32Array(n),
    pdy: new Float32Array(n),
    px: new Float32Array(n),
    py: new Float32Array(n),
    pz: new Float32Array(n),
    pa: new Float32Array(n),
    ps: new Float32Array(n),
    ph: new Float32Array(n),
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
      p.size[i] = 0.8 + Math.random() * 1.1;
      p.bright[i] = 0.6 + Math.random() * 0.4;
    } else {
      const y = Math.random() * 2 - 1;
      const r = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = Math.random() * Math.PI * 2;
      ux = Math.cos(theta) * r;
      uy = y;
      uz = Math.sin(theta) * r;
      rr = 0.5 + Math.random() * 0.4;
      p.size[i] = 0.5 + Math.random() * 0.7;
      p.bright[i] = 0.3 + Math.random() * 0.4;
    }

    p.hx[i] = ux * rr;
    p.hy[i] = uy * rr;
    p.hz[i] = uz * rr;

    // Scattered start position
    const sy = Math.random() * 2 - 1;
    const sr = Math.sqrt(Math.max(0, 1 - sy * sy));
    const st = Math.random() * Math.PI * 2;
    const dist = 2.4 + Math.random() * 2.0;
    p.sx[i] = Math.cos(st) * sr * dist;
    p.sy[i] = sy * dist;
    p.sz[i] = Math.sin(st) * sr * dist;

    // Rim particles arrive first
    const rimInit = 1 - Math.abs(uz);
    p.delay[i] = (1 - rimInit) * FORM_SPREAD * 0.6 + Math.random() * FORM_SPREAD * 0.4;
    p.phase[i] = Math.random() * Math.PI * 2;

    // BrandForge theme: ~30% particles are Crimson Red (#EF4136)
    p.isRed[i] = Math.random() < 0.32 ? 1 : 0;
  }

  return p;
}

export default function BrandForgeParticleIntro({ onComplete }) {
  const canvasRef = useRef(null);
  const [showLogo, setShowLogo] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

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

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const ro = new ResizeObserver(resize);

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
    };
    const onLeave = () => { pointer.active = false; };

    if (!reduce) {
      canvas.addEventListener("pointermove", onMove);
      canvas.addEventListener("pointerleave", onLeave);
      canvas.addEventListener("pointerdown", onMove);
    }

    let raf = 0;
    const start = performance.now();

    // Trigger logo reveal after particles assemble (~3.2s)
    const logoTimer = setTimeout(() => {
      setShowLogo(true);
    }, 3000);

    const frame = (now) => {
      const t = (now - start) / 1000;
      const R = 0.32 * Math.min(w, h);
      const FOCAL = 3.4 * R;
      const cx = w / 2;
      const cy = h / 2;

      const angle = reduce ? 0.6 : t * ROT_SPEED;
      const cy_ = Math.cos(angle), sy_ = Math.sin(angle);
      const cb = Math.cos(TILT), sb = Math.sin(TILT);

      const infl = 0.36 * R;
      const maxPush = 0.5 * infl;
      const jitAmp = 0.15 * infl;

      // Pass 1: Rotate, project & displacement
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
        if (pointer.active && nz > 0 && prog > 0.9) {
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
        let alpha = prog * P.bright[i] * (0.26 + 0.74 * front) * (0.78 + 0.6 * rim);
        if (alpha > 1) alpha = 1;

        P.px[i] = sxp;
        P.py[i] = syp;
        P.pz[i] = Z;
        P.pa[i] = alpha;
        P.ps[i] = Math.max(0.45, P.size[i] * persp * (0.82 + 0.5 * rim));
        P.ph[i] = rim > 0.62 && front > 0.5 && prog > 0.6 ? 1 : 0;
      }

      order.sort((a, b) => P.pz[a] - P.pz[b]);

      // Pass 2: Draw with BrandForge colors
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";

      for (let k = 0; k < P.n; k++) {
        const i = order[k];
        const a = P.pa[i];
        if (a <= 0.012) continue;
        const x = P.px[i], y = P.py[i], s = P.ps[i];

        if (P.isRed[i]) {
          // BrandForge Acid Red particle
          if (P.ph[i]) {
            ctx.fillStyle = `rgba(239, 65, 54, ${a * 0.35})`;
            ctx.beginPath();
            ctx.arc(x, y, s * 3.2, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.fillStyle = `rgba(239, 65, 54, ${a})`;
          ctx.beginPath();
          ctx.arc(x, y, s * 1.1, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Radiant White particle
          if (P.ph[i]) {
            ctx.fillStyle = `rgba(255, 255, 255, ${a * 0.2})`;
            ctx.beginPath();
            ctx.arc(x, y, s * 2.8, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.fillStyle = `rgba(255, 255, 255, ${a})`;
          ctx.beginPath();
          ctx.arc(x, y, s, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.globalCompositeOperation = "source-over";
      if (!reduce) raf = requestAnimationFrame(frame);
    };

    resize();
    ro.observe(canvas);
    if (!reduce) raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(logoTimer);
      ro.disconnect();
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
      canvas.removeEventListener("pointerdown", onMove);
    };
  }, []);

  const handleEnter = () => {
    const el = document.getElementById("hero") || document.getElementById("fluid-field");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bf-particle-intro">
      <style>{styles}</style>

      {/* 3D PARTICLE CANVASES */}
      <canvas ref={canvasRef} className="bf-intro-canvas" />

      {/* COSMETIC DEPTH VIGNETTE */}
      <div className="bf-intro-vignette" />

      {/* CENTER BRANDFORGE LOGO & HERO OVERLAY */}
      <div className="bf-intro-overlay">
        <AnimatePresence>
          {showLogo && (
            <motion.div
              className="bf-logo-center-card"
              initial={{ opacity: 0, scale: 0.72, filter: "blur(12px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* PULSING CRIMSON AURA RING */}
              <div className="bf-logo-aura-ring" />

              {/* BRANDFORGE LOGO */}
              <div className="bf-logo-wrap">
                <img
                  src="/brandforge-logo.png"
                  alt="BrandForge Agency Logo"
                  className="bf-logo-img"
                />
              </div>

              {/* BRAND STATEMENT */}
              <div className="bf-intro-badge">
                <Sparkles size={14} className="sparkle-red" />
                <span>TURNING IDEAS INTO DIGITAL POWER</span>
              </div>

              <p className="bf-intro-tagline">
                WE FORGE DOMINANT BRANDS & HYPER SCALED MEDIA
              </p>

              {/* ENTER EXPERIENCE BUTTON */}
              <button className="bf-enter-btn" onClick={handleEnter}>
                <span>EXPLORE BRANDFORGE</span>
                <ArrowRight size={17} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* INITIAL LOADING STATUS BEFORE LOGO REVEALS */}
        {!showLogo && (
          <motion.div
            className="bf-intro-loading-status"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="bf-loading-spinner" />
            <span>FORGING PARTICLE CORE...</span>
          </motion.div>
        )}
      </div>
    </div>
  );
}

const styles = `
  .bf-particle-intro {
    position: relative;
    width: 100%;
    height: 100vh;
    min-height: 600px;
    background: #060509;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Outfit', 'Plus Jakarta Sans', sans-serif;
  }

  .bf-intro-canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: block;
    cursor: crosshair;
  }

  .bf-intro-vignette {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: radial-gradient(120% 100% at 50% 50%, transparent 48%, rgba(6, 5, 9, 0.82) 100%);
  }

  .bf-intro-overlay {
    position: absolute;
    inset: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
  }

  .bf-logo-center-card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    pointer-events: auto;
    padding: 32px 40px;
    border-radius: 28px;
    background: rgba(10, 10, 12, 0.65);
    border: 1px solid rgba(239, 65, 54, 0.25);
    backdrop-filter: blur(20px);
    box-shadow:
      0 0 60px rgba(239, 65, 54, 0.18),
      inset 0 1px rgba(255, 255, 255, 0.08);
  }

  .bf-logo-aura-ring {
    position: absolute;
    width: 280px;
    height: 280px;
    border-radius: 50%;
    z-index: -1;
    background: radial-gradient(circle, rgba(239, 65, 54, 0.35) 0%, transparent 70%);
    animation: auraPulse 3.5s ease-in-out infinite alternate;
  }

  .bf-logo-wrap {
    margin-bottom: 18px;
  }

  .bf-logo-img {
    height: clamp(48px, 6vw, 68px);
    width: auto;
    object-fit: contain;
    filter: drop-shadow(0 0 24px rgba(239, 65, 54, 0.45));
  }

  .bf-intro-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 16px;
    border-radius: 100px;
    background: rgba(239, 65, 54, 0.12);
    border: 1px solid rgba(239, 65, 54, 0.35);
    color: #FFFFFF;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    margin-bottom: 12px;
  }

  .sparkle-red {
    color: #EF4136;
  }

  .bf-intro-tagline {
    max-width: 380px;
    margin: 0 0 24px;
    color: rgba(255, 255, 255, 0.75);
    font-size: 12.5px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    line-height: 1.5;
  }

  .bf-enter-btn {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 14px 32px;
    border-radius: 12px;
    border: none;
    background: #EF4136;
    color: #FFFFFF;
    font-family: inherit;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    cursor: pointer;
    box-shadow: 0 12px 32px rgba(239, 65, 54, 0.4);
    transition: transform 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
  }

  .bf-enter-btn:hover {
    background: #D9382E;
    transform: translateY(-2px);
    box-shadow: 0 16px 42px rgba(239, 65, 54, 0.55);
  }

  .bf-intro-loading-status {
    display: flex;
    align-items: center;
    gap: 12px;
    color: rgba(255, 255, 255, 0.6);
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .bf-loading-spinner {
    width: 18px;
    height: 18px;
    border: 2px solid rgba(239, 65, 54, 0.2);
    border-top-color: #EF4136;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes auraPulse {
    0% {
      transform: scale(0.88);
      opacity: 0.4;
    }
    100% {
      transform: scale(1.15);
      opacity: 0.85;
    }
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 600px) {
    .bf-logo-center-card {
      padding: 24px 28px;
      width: 90vw;
    }

    .bf-logo-aura-ring {
      width: 220px;
      height: 220px;
    }

    .bf-enter-btn {
      width: 100%;
      justify-content: center;
    }
  }
`;
