"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

/* ─── FAQ Data (5 items) ─── */
const FAQ_DATA = [
  {
    question: "I've wasted money on marketing before. How is BrandForge any different?",
    answer:
      "Most agencies bill you for activity. We're built for outcomes. Every rupee is tied to a goal — leads, sales, rankings — and reported back so you see exactly what it earned. If it doesn't move the business, we don't do it.",
    tag: "Outcomes First",
  },
  {
    question: "I don't understand SEO, ads, all this technical stuff. Will that be a problem?",
    answer:
      "That's exactly why you hire us. You run your business; we run the growth engine. No jargon, no homework — just clear updates on what matters: more visitors, more leads, more customers.",
    tag: "No Complexity",
  },
  {
    question: "How much do I need to spend to actually see results?",
    answer:
      "Enough to compete, never more than you should. We scope your budget to your goals and put every part of it where it drives the most return. After one call, you'll know precisely what's realistic and what it'll deliver.",
    tag: "Budget & ROI",
  },
  {
    question: "How soon will I start seeing results?",
    answer:
      "Paid ads can bring leads in weeks. SEO and content compound over three to six months into growth that doesn't switch off when you stop paying. We commit to clear timelines from day one and hit them.",
    tag: "Timelines",
  },
  {
    question: "My business is small. Am I too small for BrandForge?",
    answer:
      "Every category leader started smaller. What matters is ambition, not size. Start with what moves you fastest — a website, local SEO, a campaign — and scale into the full team as you grow.",
    tag: "Ambition",
  },
  {
    question: "Do you only work with businesses in Coimbatore?",
    answer:
      "We're a digital marketing agency in Coimbatore, so local clients get us in the room fast — but we forge brands across Tamil Nadu and India. Same strategy, same results, wherever you are.",
    tag: "Coimbatore & Beyond",
  },
  {
    question: "I'm interested but not sure where to start. What's the first step?",
    answer:
      "Book a strategy call. We'll pinpoint where digital marketing will move your business most and show you the plan to get there. You'll leave the call clearer on your growth than most agencies leave you after months.",
    tag: "First Step",
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

function BlackParticleGlobeCanvas({ theme }) {
  const isDark = theme === "black" || theme === "dark";
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
      if (!isVisible && !reduce) return;
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
          ctx.fillStyle = isDark
            ? `rgba(255, 24, 1, ${a * 0.6})`
            : `rgba(255, 77, 77, ${a * 0.25})`;
          ctx.beginPath();
          ctx.arc(x, y, s * 2.5, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = isDark
          ? `rgba(255, 255, 255, ${a * 0.75})`
          : `rgba(20, 24, 38, ${a})`;
        ctx.beginPath();
        ctx.arc(x, y, s, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduce && isVisible) raf = requestAnimationFrame(frame);
    };

    let isVisible = false;
    let io = null;
    if (typeof IntersectionObserver !== "undefined" && canvas.parentElement) {
      io = new IntersectionObserver(([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && !reduce) {
          cancelAnimationFrame(raf);
          raf = requestAnimationFrame(frame);
        } else {
          cancelAnimationFrame(raf);
        }
      }, { threshold: 0.05 });
      io.observe(canvas.parentElement);
    }

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement);

    return () => {
      if (io) io.disconnect();
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
      canvas.removeEventListener("pointerdown", onMove);
      canvas.removeEventListener("touchmove", onTouchMove);
    };
  }, [isDark]);

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

/* ─── Animated 3D FAQ Diorama (Creative Studio Stage + Miniature Team) ─── */
const HANGING_BUBBLES = [
  { x: 112, y: 54, symbol: "?", fill: "#EF231A", hi: "#FF6B5B", shade: "#B91C1C", text: "#FFFFFF", delay: "0s", dur: "3.4s", tail: "right" },
  { x: 188, y: 78, symbol: "!", fill: "#16A34A", hi: "#4ADE80", shade: "#15803D", text: "#FFFFFF", delay: "-0.8s", dur: "3.8s", tail: "left" },
  { x: 256, y: 30, symbol: "?", fill: "#EF231A", hi: "#FF6B5B", shade: "#B91C1C", text: "#FFFFFF", delay: "-1.5s", dur: "3.2s", tail: "left" },
  { x: 300, y: 46, symbol: "!", fill: "#1D8CF8", hi: "#60A5FA", shade: "#1D4ED8", text: "#FFFFFF", delay: "-0.4s", dur: "4.1s", tail: "left" },
  { x: 326, y: 114, symbol: "!", fill: "#FACC15", hi: "#FEF08A", shade: "#CA8A04", text: "#111827", delay: "-2.1s", dur: "3.6s", tail: "left" },
  { x: 382, y: 74, symbol: "?", fill: "#22C55E", hi: "#86EFAC", shade: "#15803D", text: "#FFFFFF", delay: "-1.1s", dur: "3.9s", tail: "left" },
  { x: 468, y: 74, symbol: "!", fill: "#FACC15", hi: "#FEF08A", shade: "#CA8A04", text: "#111827", delay: "-2.6s", dur: "3.5s", tail: "left" },
];

const FAQ_STAGE_FOCUS = [
  { spotX: 112, x: 102, y: 104, bubbleIdx: 0, label: "ROI TRACKING" },
  { spotX: 162, x: 166, y: 104, bubbleIdx: 1, label: "ZERO JARGON" },
  { spotX: 256, x: 256, y: 104, bubbleIdx: 2, label: "SMART BUDGET" },
  { spotX: 288, x: 302, y: 212, bubbleIdx: 4, label: "FAST TIMELINES" },
  { spotX: 392, x: 392, y: 106, bubbleIdx: 5, label: "BUILT TO SCALE" },
  { spotX: 424, x: 424, y: 248, bubbleIdx: 6, label: "COIMBATORE + IN" },
  { spotX: 444, x: 444, y: 106, bubbleIdx: 3, label: "BOOK A CALL" },
];

const SKIN_TONES = {
  fair: { base: "#F1C7AE", shadow: "#CE9B7E", blush: "#E5A58B" },
  warm: { base: "#E2AD8C", shadow: "#B87E5D", blush: "#D48E6D" },
  olive: { base: "#D59E7A", shadow: "#A8704E", blush: "#C5805B" },
  medium: { base: "#B87B56", shadow: "#8A5434", blush: "#9E6340" },
};

function SpeechBubble({ b, isDark, isActive, isFocused, idx }) {
  const stringColor = isFocused
    ? "rgba(255,24,1,0.55)"
    : isDark
    ? "rgba(255,255,255,0.22)"
    : "rgba(15,23,42,0.18)";
  const gradId = `faqBubbleGrad${idx}`;
  return (
    <g
      className={`bf-faq-bubble ${isActive ? "is-excited" : ""} ${isFocused ? "is-focused" : ""}`}
      style={{
        animationDelay: b.delay,
        animationDuration: b.dur,
      }}
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={b.hi} />
          <stop offset="45%" stopColor={b.fill} />
          <stop offset="100%" stopColor={b.shade} />
        </linearGradient>
      </defs>
      <line x1={b.x} y1={0} x2={b.x} y2={b.y} stroke={stringColor} strokeWidth={isFocused ? "1.6" : "1.15"} />
      <g transform={`translate(${b.x - 19}, ${b.y}) scale(${isFocused ? 1.12 : 1})`}>
        {isFocused && (
          <rect
            x="-3"
            y="-3"
            width="44"
            height="35"
            rx="10"
            fill="none"
            stroke={b.hi}
            strokeWidth="1.2"
            opacity="0.65"
          />
        )}
        {/* Soft 3D depth edge */}
        <rect x="1.2" y="1.5" width="38" height="29" rx="8" fill="rgba(0,0,0,0.3)" />
        <rect x="0" y="0" width="38" height="29" rx="8" fill={`url(#${gradId})`} stroke="rgba(255,255,255,0.24)" strokeWidth="0.7" />
        {/* Top specular highlight */}
        <path d="M 8 2 L 30 2" stroke="rgba(255,255,255,0.45)" strokeWidth="1" strokeLinecap="round" />
        <polygon
          points={b.tail === "right" ? "25,28 31,28 30,35" : "9,28 15,28 8,35"}
          fill={b.shade}
        />
        <text
          x="19"
          y="20"
          textAnchor="middle"
          fill={b.text}
          fontFamily="'Outfit', sans-serif"
          fontWeight="900"
          fontSize="17"
        >
          {b.symbol}
        </text>
      </g>
    </g>
  );
}

function RealisticHead({
  skinKey = "warm",
  hair = "#1F2937",
  hairHi = "#374151",
  hairStyle = "short",
  beard = false,
  facing = "right",
}) {
  const tone = SKIN_TONES[skinKey] || SKIN_TONES.warm;
  const frontScale = facing === "front" ? 1 : null;

  if (facing === "front") {
    return (
      <g>
        {/* Neck & throat shadow */}
        <path d="M -2.2 -19 L 2.2 -19 L 2.8 -14.5 L -2.8 -14.5 Z" fill={tone.shadow} />
        {/* Ears */}
        <ellipse cx="-4.3" cy="-24.2" rx="1" ry="1.8" fill={tone.shadow} />
        <ellipse cx="4.3" cy="-24.2" rx="1" ry="1.8" fill={tone.shadow} />
        {/* Sculpted oval cranium + tapered jaw */}
        <path
          d="M -4.2 -26.5 C -4.2 -30.5, 4.2 -30.5, 4.2 -26.5 L 4.0 -22.2 C 3.8 -19.5, 1.5 -18.2, 0 -18.2 C -1.5 -18.2, -3.8 -19.5, -4.0 -22.2 Z"
          fill={tone.base}
        />
        {/* Chin & cheek contour */}
        <path d="M 1.4 -26 C 3.6 -25, 3.6 -20, 0.2 -18.4 C 2.8 -18.8, 3.9 -20.5, 4.0 -22.6 Z" fill={tone.shadow} opacity="0.45" />
        {/* Subtle blinking eyes & nose */}
        <g className="bf-faq-blink">
          <circle cx="-1.5" cy="-24.4" r="0.55" fill="#1E293B" />
          <circle cx="1.5" cy="-24.4" r="0.55" fill="#1E293B" />
        </g>
        <path d="M 0 -24.2 L 0.2 -22.4" stroke={tone.shadow} strokeWidth="0.7" strokeLinecap="round" />
        <path d="M -1.1 -21 C -0.4 -20.6, 0.4 -20.6, 1.1 -21" stroke={tone.blush} strokeWidth="0.65" fill="none" strokeLinecap="round" />
        {beard && (
          <path
            d="M -3.9 -22.8 C -3.8 -19.4, -1.5 -18, 0 -18 C 1.5 -18, 3.8 -19.4, 3.9 -22.8 C 2.9 -21.2, 1.8 -20.8, 0 -20.8 C -1.8 -20.8, -2.9 -21.2, -3.9 -22.8 Z"
            fill={hair}
            opacity="0.92"
          />
        )}
        {/* Hair */}
        <path
          d="M -4.5 -25.4 C -4.8 -31.2, 4.8 -31.2, 4.5 -25.4 C 3.6 -27.4, 1.4 -28.0, -0.4 -27.6 C -2.2 -28.0, -3.7 -27.2, -4.5 -25.4 Z"
          fill={hair}
        />
        <path d="M -2.5 -29.2 C -0.5 -30.2, 1.8 -30.0, 3.0 -28.6" stroke={hairHi} strokeWidth="0.85" fill="none" strokeLinecap="round" opacity="0.7" />
      </g>
    );
  }

  return (
    <g transform={frontScale ? undefined : undefined}>
      {/* Neck column with sternocleidomastoid shadow */}
      <path d="M -2.3 -19.2 L 1.8 -18.8 L 2.6 -14.2 L -2.6 -14.2 Z" fill={tone.shadow} />
      {/* Long hair back layer (behind neck/shoulders) */}
      {hairStyle === "long" && (
        <path
          d="M -4.6 -26.5 C -5.8 -22, -6.4 -14, -4.4 -9.5 C -2.4 -9, -1.2 -12, -1.5 -18 Z"
          fill={hair}
        />
      )}
      {hairStyle === "wavy" && (
        <path
          d="M -4.5 -26 C -6.5 -20, -6.8 -12, -3.8 -8.5 C -1.5 -9, -0.5 -13, -1 -19 Z"
          fill={hair}
        />
      )}
      {/* Sculpted profile face: cranium, brow, nose bridge, upper/lower lip, jawline */}
      <path
        d="M -4.0 -26.4 C -4.0 -30.6, 3.8 -30.8, 4.2 -26.2 L 4.4 -24.5 L 5.1 -23.0 L 4.3 -22.5 L 4.4 -21.2 L 3.8 -19.6 C 2.6 -18.3, 0.6 -18.0, -1.6 -18.6 C -3.4 -19.2, -4.2 -22.0, -4.0 -26.4 Z"
        fill={tone.base}
      />
      {/* Jaw / under-cheek shadow */}
      <path
        d="M -3.5 -21.6 C -2.2 -19.2, 0.8 -18.3, 3.3 -19.2 C 1.4 -18.8, -1.4 -19.5, -2.8 -22.0 Z"
        fill={tone.shadow}
        opacity="0.55"
      />
      {/* Ear */}
      <ellipse cx="-1.3" cy="-24.0" rx="0.95" ry="1.65" fill={tone.shadow} />
      <ellipse cx="-1.2" cy="-24.0" rx="0.45" ry="0.95" fill={tone.base} />
      {/* Brow & blinking eye */}
      <path d="M 1.8 -25.4 L 3.5 -25.3" stroke={hair} strokeWidth="0.65" strokeLinecap="round" opacity="0.7" />
      <circle className="bf-faq-blink" cx="2.7" cy="-24.4" r="0.52" fill="#1E293B" />

      {/* Beard */}
      {beard && (
        <path
          d="M -2.2 -23.0 C -1.4 -19.5, 1.5 -18.1, 3.9 -19.5 C 4.2 -20.5, 4.1 -21.5, 3.3 -21.7 C 2.0 -21.8, 0.6 -21.0, -0.6 -22.8 Z"
          fill={hair}
          opacity="0.92"
        />
      )}

      {/* Hair crown + style */}
      {hairStyle === "bun" && (
        <circle cx="-4.8" cy="-27.2" r="2.5" fill={hair} />
      )}
      <path
        d={
          hairStyle === "long" || hairStyle === "wavy"
            ? "M -4.4 -25.2 C -4.6 -31.2, 4.4 -31.2, 4.3 -26.2 C 2.2 -28.0, 0.2 -27.5, -1.5 -25.0 C -2.8 -22.0, -2.5 -16, -3.5 -11.5 L -5.0 -14.0 Z"
            : "M -4.4 -24.4 C -4.8 -31.2, 4.6 -31.2, 4.3 -26.2 C 2.8 -28.0, 0.4 -28.0, -1.3 -26.6 C -1.7 -25.0, -2.0 -23.0, -3.5 -22.2 Z"
        }
        fill={hair}
      />
      <path
        d="M -2.5 -29.2 C -0.4 -30.2, 2.0 -29.8, 3.2 -28.2"
        stroke={hairHi}
        strokeWidth="0.8"
        fill="none"
        strokeLinecap="round"
        opacity="0.65"
      />
    </g>
  );
}

function Sneaker({ x = 0, y = 0, upper = "#1E293B", sole = "#F8FAFC", accent = "#94A3B8", dir = 1 }) {
  return (
    <g transform={`translate(${x}, ${y}) scale(${dir}, 1)`}>
      {/* Upper shoe body */}
      <path
        d="M -2.6 -3.2 L 1.2 -3.2 C 2.4 -2.2, 4.2 -1.8, 5.2 -0.6 L 5.2 0.8 L -2.8 0.8 Z"
        fill={upper}
      />
      {/* Tongue / lace highlight */}
      <path d="M 0.8 -2.8 L 2.8 -1.6" stroke={accent} strokeWidth="0.7" strokeLinecap="round" />
      {/* Contrasting rubber midsole */}
      <path
        d="M -2.9 0.4 L 5.4 0.4 C 5.5 1.1, 5.0 1.6, 4.2 1.6 L -2.6 1.6 C -3.0 1.6, -3.1 1.0, -2.9 0.4 Z"
        fill={sole}
      />
    </g>
  );
}

function LaptopProp({ x = 0, y = 0, tilt = 0, screenFill = "#BAE6FD" }) {
  return (
    <g transform={`translate(${x}, ${y}) rotate(${tilt})`}>
      {/* Screen lid */}
      <polygon points="3,0 13,0 15.5,-10.5 5.5,-10.5" fill="#94A3B8" stroke="#475569" strokeWidth="0.6" />
      <polygon points="4.3,-1.2 12.2,-1.2 14.3,-9.4 6.4,-9.4" fill={screenFill} opacity="0.88" />
      {/* Keyboard deck */}
      <polygon points="-4,0 11,0 12.5,2.2 -5,2.2" fill="#CBD5E1" stroke="#475569" strokeWidth="0.6" />
    </g>
  );
}

function SeatedPerson({
  x,
  y,
  shirt,
  shirtShade,
  jacket = null,
  jacketShade = null,
  pants = "#1D4ED8",
  pantsShade = "#172554",
  skinKey = "warm",
  hair = "#1F2937",
  hairHi = "#4B5563",
  hairStyle = "short",
  beard = false,
  device = "laptop",
  pose = "dangling",
  flip = false,
  swingLegs = true,
  shoeUpper = "#F1F5F9",
  shoeSole = "#FFFFFF",
  delay = "0s",
}) {
  const sShade = shirtShade || "rgba(0,0,0,0.22)";

  return (
    <g transform={`translate(${x}, ${y}) scale(${flip ? -1 : 1}, 1)`}>
      {/* Contact shadow under seated person on letter surface */}
      <ellipse cx="1" cy="2.5" rx="11" ry="2.8" fill="rgba(0,0,0,0.34)" />

      <g className="bf-faq-seated-bob" style={{ animationDelay: delay }}>
        {/* ─── LEGS ─── */}
        {pose === "crosslegged" ? (
          <g>
            {/* Crossed thighs & shins sitting flat on top of F */}
            <path d="M -3 -1 C -9 1, -11 4.5, -2 5.2 L 5 5.0 C 8 4.4, 8 1.5, 2 -1 Z" fill={pantsShade} />
            <path d="M 1 -1 C 8 0.5, 10 4.5, 1 5.3 L -7 4.8 C -9.5 4.2, -8.5 1.0, -2 -1 Z" fill={pants} />
            {/* Knee creases */}
            <path d="M -7 2.8 L -3 3.4 M 7 2.8 L 3 3.4" stroke="rgba(255,255,255,0.16)" strokeWidth="0.7" strokeLinecap="round" />
            <Sneaker x={-6} y={4.8} upper={shoeUpper} sole={shoeSole} dir={-1} />
            <Sneaker x={6} y={4.8} upper={shoeUpper} sole={shoeSole} dir={1} />
          </g>
        ) : (
          <g>
            {/* Back thigh (fixed on ledge) + articulated knee swing */}
            <g transform="translate(2.5, -1.5)">
              <path d="M -2.5 -1 L 8.5 0.5 C 10.5 0.8, 11 2.8, 9.8 4.5 L -1 3.8 Z" fill={pantsShade} />
              <g transform="translate(9.5, 3.2)">
                <g className={swingLegs ? "bf-faq-leg-swing-b" : ""} style={{ animationDelay: delay }}>
                  <path d="M -2.2 -1.2 L 2.2 -0.5 L -0.5 14.5 L -3.5 14.2 Z" fill={pantsShade} />
                  <Sneaker x={-1.5} y={14.8} upper={shoeUpper} sole={shoeSole} />
                </g>
              </g>
            </g>

            {/* Front thigh + articulated knee swing */}
            <g transform="translate(-1.2, -1)">
              <path d="M -3.5 -1.5 L 8.2 1.0 C 10.2 1.5, 10.6 3.5, 9.4 5.2 L -2.2 4.2 Z" fill={pants} />
              <path d="M 0 0.5 L 7.5 2.0" stroke="rgba(255,255,255,0.14)" strokeWidth="0.8" strokeLinecap="round" />
              <g transform="translate(8.8, 3.8)">
                <g className={swingLegs ? "bf-faq-leg-swing-a" : ""} style={{ animationDelay: delay }}>
                  <path d="M -2.3 -1.2 L 2.3 -0.5 L -0.2 14.8 L -3.4 14.5 Z" fill={pants} />
                  <Sneaker x={-1.2} y={15.2} upper={shoeUpper} sole={shoeSole} />
                </g>
              </g>
            </g>
          </g>
        )}

        {/* ─── ANATOMICAL TORSO + OPTIONAL JACKET ─── */}
        <g>
          {/* Main torso with shoulder slope & waist taper */}
          <path
            d="M -5.8 -14.2 C -4.6 -15.6, 3.8 -15.6, 5.2 -14.0 L 4.5 -0.8 C 4.2 1.0, -4.4 1.0, -4.6 -0.8 Z"
            fill={shirt}
          />
          {/* Right-side shadow fold */}
          <path
            d="M 1.4 -14.8 L 5.2 -14.0 L 4.5 -0.8 C 4.2 0.8, 1.5 0.9, 1.0 0.8 Z"
            fill={sShade}
            opacity="0.32"
          />
          {/* Open overshirt / cardigan lapels if jacket prop provided */}
          {jacket && (
            <g>
              <path
                d="M -5.8 -14.2 C -4.8 -15.5, -1.8 -15.4, -1.2 -14.6 L -1.8 0.5 L -4.8 0.2 Z"
                fill={jacket}
              />
              <path
                d="M 1.8 -14.8 C 3.4 -15.2, 4.8 -14.8, 5.4 -13.8 L 4.6 0.2 L 1.6 0.4 Z"
                fill={jacketShade || jacket}
              />
            </g>
          )}
          {/* Collar neckline */}
          <path d="M -2.2 -15.2 Q 0 -13.4 2.2 -15.2" stroke="rgba(0,0,0,0.22)" strokeWidth="0.9" fill="none" />
        </g>

        {/* ─── HEAD ─── */}
        <RealisticHead
          skinKey={skinKey}
          hair={hair}
          hairHi={hairHi}
          hairStyle={hairStyle}
          beard={beard}
          facing={pose === "crosslegged" ? "front" : "right"}
        />

        {/* ─── ARM + DEVICE ─── */}
        {device === "laptop" && pose === "crosslegged" && (
          <g>
            {/* Both arms typing on silver laptop */}
            <g className="bf-faq-type" style={{ animationDelay: delay }}>
              <path d="M -5.2 -13.0 L -7.6 -6.5 L -3.5 -3.6" stroke={jacket || shirt} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <path d="M 4.8 -13.0 L 7.4 -6.5 L 3.5 -3.6" stroke={jacketShade || shirt} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </g>
            {/* Front centered metallic laptop */}
            <rect x="-5.8" y="-7.5" width="11.6" height="7.8" rx="0.9" fill="#CBD5E1" stroke="#475569" strokeWidth="0.7" />
            <rect x="-5.1" y="-6.8" width="10.2" height="6.2" rx="0.4" fill="#E2E8F0" />
            <circle cx="0" cy="-3.6" r="0.9" fill="#94A3B8" />
          </g>
        )}
        {device === "laptop" && pose !== "crosslegged" && (
          <g>
            {/* Upper arm + bent forearm typing on lap */}
            <path d="M 2.6 -12.6 L 5.2 -5.8" stroke={jacket || shirt} strokeWidth="3.4" strokeLinecap="round" />
            <path className="bf-faq-type" style={{ animationDelay: delay }} d="M 5.2 -5.8 L 10.6 -5.0" stroke={SKIN_TONES[skinKey].base} strokeWidth="2.4" strokeLinecap="round" />
            <LaptopProp x={11} y={-4.8} />
          </g>
        )}
        {device === "phone" && (
          <g className="bf-faq-arm-wave" style={{ animationDelay: delay }}>
            <path d="M 2.8 -12.8 L 6.4 -9.2" stroke={jacket || shirt} strokeWidth="3.2" strokeLinecap="round" />
            <path d="M 6.4 -9.2 L 9.8 -16.2" stroke={SKIN_TONES[skinKey].base} strokeWidth="2.3" strokeLinecap="round" />
            <rect x="8.8" y="-21.4" width="3.0" height="5.6" rx="0.7" fill="#0F172A" stroke="#94A3B8" strokeWidth="0.55" />
            <rect x="9.3" y="-20.6" width="2.0" height="3.8" rx="0.3" fill="#38BDF8" opacity="0.65" />
          </g>
        )}
        {device === "call" && (
          <g className="bf-faq-arm-wave" style={{ animationDelay: delay }}>
            <path d="M 2.6 -12.6 L 6.8 -13.0" stroke={jacket || shirt} strokeWidth="3.1" strokeLinecap="round" />
            <path d="M 6.8 -13.0 L 4.4 -21.2" stroke={SKIN_TONES[skinKey].base} strokeWidth="2.2" strokeLinecap="round" />
            <rect x="3.4" y="-23.6" width="2.2" height="4.4" rx="0.6" transform="rotate(-14 3.4 -23.6)" fill="#0F172A" stroke="#CBD5E1" strokeWidth="0.45" />
          </g>
        )}
        {device === "tablet" && (
          <g>
            <path d="M 2.6 -12.5 L 5.8 -6.4" stroke={shirt} strokeWidth="3.3" strokeLinecap="round" />
            <path d="M 5.8 -6.4 L 10.6 -6.2" stroke={SKIN_TONES[skinKey].base} strokeWidth="2.3" strokeLinecap="round" />
            <rect x="9.6" y="-12.2" width="8.6" height="6.0" rx="1.0" transform="rotate(-18 9.6 -12.2)" fill="#E2E8F0" stroke="#475569" strokeWidth="0.75" />
          </g>
        )}
      </g>
    </g>
  );
}

const LOTTIE_WALKERS = [
  {
    id: "groovy",
    src: "/lottie/groovy-walk.json",
    label: "Music-loving creative grooving beside FAQ",
    left: "3%",
    top: "53%",
    width: "22.5%",
    patrolClass: "bf-faq-patrol-left",
    flipClass: "bf-faq-flip",
    dur: "8.2s",
    delay: "-1.1s",
    shadowWidth: "48%",
    shadowBottom: "7%",
  },
  {
    id: "postman",
    src: "/lottie/postman-walking.json",
    label: "Courier delivering FAQ answers",
    left: "21%",
    top: "56%",
    width: "21%",
    patrolClass: "bf-faq-patrol-main",
    flipClass: "bf-faq-flip",
    dur: "11.5s",
    delay: "-2.4s",
    shadowWidth: "46%",
    shadowBottom: "10%",
  },
  {
    id: "female",
    src: "/lottie/female-walking.json",
    label: "Strategist walking near FAQ",
    left: "72%",
    top: "52.5%",
    width: "20%",
    patrolClass: "bf-faq-patrol-right",
    flipClass: "bf-faq-flip-rev",
    dur: "8.8s",
    delay: "-3.6s",
    shadowWidth: "42%",
    shadowBottom: "8%",
  },
];

function LottieWalker({ walker, isPaused, isDark }) {
  const containerRef = useRef(null);
  const animRef = useRef(null);
  const isPausedRef = useRef(isPaused);
  isPausedRef.current = isPaused;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let cancelled = false;
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    import("lottie-web").then((mod) => {
      if (cancelled || !containerRef.current) return;
      const lottie = mod.default || mod;
      const anim = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: !isPausedRef.current && !reduceMotion,
        path: walker.src,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid meet",
        },
      });
      animRef.current = anim;
    });

    return () => {
      cancelled = true;
      if (animRef.current) {
        animRef.current.destroy();
        animRef.current = null;
      }
    };
  }, [walker.src]);

  useEffect(() => {
    const anim = animRef.current;
    if (!anim) return;
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isPaused || reduceMotion) {
      anim.pause();
    } else {
      anim.play();
    }
  }, [isPaused]);

  return (
    <div
      style={{
        position: "absolute",
        left: walker.left,
        top: walker.top,
        width: walker.width,
        aspectRatio: "1 / 1",
        pointerEvents: "none",
      }}
    >
      <div
        className={walker.patrolClass}
        style={{
          width: "100%",
          height: "100%",
          animationDuration: walker.dur,
          animationDelay: walker.delay,
          position: "relative",
        }}
      >
        {/* Ground contact shadow synchronized with patrol path */}
        <div
          className="bf-faq-lottie-shadow"
          style={{
            width: walker.shadowWidth,
            bottom: walker.shadowBottom,
            background: isDark
              ? "radial-gradient(ellipse at center, rgba(0,0,0,0.85) 0%, rgba(255,24,1,0.18) 65%, transparent 100%)"
              : "radial-gradient(ellipse at center, rgba(15,23,42,0.28) 0%, transparent 75%)",
          }}
        />
        <div
          className={walker.flipClass}
          style={{
            width: "100%",
            height: "100%",
            animationDuration: walker.dur,
            animationDelay: walker.delay,
          }}
        >
          <div
            ref={containerRef}
            aria-label={walker.label}
            style={{
              width: "100%",
              height: "100%",
              filter: isDark
                ? "drop-shadow(0 0 1.2px rgba(255,255,255,0.45)) drop-shadow(0 6px 12px rgba(0,0,0,0.75))"
                : "drop-shadow(0 4px 10px rgba(15,23,42,0.16))",
            }}
          />
        </div>
      </div>
    </div>
  );
}

function HoloProjector({ x, y, text = "ROI ↑", accent = "#38BDF8", delay = "0s" }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <g className="bf-faq-holo-float" style={{ animationDelay: delay }}>
        {/* Soft vertical light ray */}
        <polygon points="-10,10 10,10 15,-8 -15,-8" fill={accent} opacity="0.1" />
        <rect
          x="-15"
          y="-12"
          width="30"
          height="13"
          rx="3.5"
          fill="rgba(10,14,22,0.82)"
          stroke={accent}
          strokeWidth="0.7"
          strokeOpacity="0.6"
        />
        <text
          x="0"
          y="-3.3"
          textAnchor="middle"
          fill={accent}
          fontFamily="'JetBrains Mono', monospace"
          fontWeight="700"
          fontSize="5.8"
          letterSpacing="0.04em"
        >
          {text}
        </text>
      </g>
    </g>
  );
}

function PaperPlaneRelay() {
  return (
    <g>
      {/* Subtle dashed flight trail connecting F -> A -> Q */}
      <path
        d="M 114 114 Q 186 58 262 114 T 404 120"
        fill="none"
        stroke="rgba(255,255,255,0.16)"
        strokeWidth="0.9"
        strokeDasharray="3 4"
      />
      <g className="bf-faq-plane-a">
        <polygon points="0,0 -11,-4 -7,0 -11,4" fill="#FFFFFF" stroke="#FF1801" strokeWidth="0.55" />
        <polygon points="0,0 -7,0 -9,3.2" fill="#FF3B24" />
      </g>
      <g className="bf-faq-plane-b">
        <polygon points="0,0 -10,-3.5 -6.5,0 -10,3.5" fill="#FF3B24" stroke="#FFFFFF" strokeWidth="0.5" />
      </g>
    </g>
  );
}

function ActiveSpecialistCallout({ focus, isDark }) {
  if (!focus) return null;
  const pillWidth = Math.max(76, focus.label.length * 5.6 + 22);
  const pillX = Math.max(12, Math.min(548 - pillWidth, focus.x - pillWidth / 2));
  const pillY = Math.max(8, focus.y - 34);

  return (
    <g className="bf-faq-callout-pop">
      <line
        x1={focus.x}
        y1={focus.y - 4}
        x2={focus.x}
        y2={pillY + 18}
        stroke="#FF1801"
        strokeWidth="1.1"
        strokeDasharray="2 2.5"
      />
      <circle cx={focus.x} cy={focus.y - 4} r="2.6" fill="#FF1801" />
      <rect
        x={pillX}
        y={pillY}
        width={pillWidth}
        height="18"
        rx="9"
        fill={isDark ? "rgba(12, 10, 18, 0.92)" : "rgba(255, 255, 255, 0.95)"}
        stroke="#FF1801"
        strokeWidth="1"
      />
      <circle cx={pillX + 9} cy={pillY + 9} r="2.2" fill="#22C55E" />
      <text
        x={pillX + 16}
        y={pillY + 11.8}
        fill={isDark ? "#FFFFFF" : "#111827"}
        fontFamily="'JetBrains Mono', monospace"
        fontWeight="700"
        fontSize="6.8"
        letterSpacing="0.06em"
      >
        {focus.label}
      </text>
    </g>
  );
}

function AnimatedFAQScene({ isDark, isActive, focusedIndex = null, tilt = { rx: 0, ry: 0 } }) {
  const stageRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = stageRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPaused(!entry.isIntersecting);
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const activeFocus = focusedIndex !== null ? FAQ_STAGE_FOCUS[focusedIndex] || null : null;
  const spotX = activeFocus ? activeFocus.spotX : 272;

  return (
    <div
      ref={stageRef}
      className={`bf-faq-diorama ${isPaused ? "is-paused" : ""}`}
      style={{
        transform: `perspective(1050px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
      }}
      aria-label="Interactive animated 3D FAQ studio diorama with realistic miniature people walking and collaborating"
    >
      <style>{dioramaStyles}</style>

      <svg
        viewBox="0 0 560 430"
        className="bf-faq-svg"
        role="img"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="faqLetterFace" x1="10%" y1="0%" x2="85%" y2="100%">
            <stop offset="0%" stopColor="#FF3B24" />
            <stop offset="48%" stopColor="#E6190B" />
            <stop offset="100%" stopColor="#B80C00" />
          </linearGradient>
          <linearGradient id="faqLetterExtrude" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9E0C00" />
            <stop offset="100%" stopColor="#5C0500" />
          </linearGradient>
          <linearGradient id="faqFloorGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,24,1,0)" />
            <stop offset="50%" stopColor={isDark ? "rgba(255,24,1,0.28)" : "rgba(15,23,42,0.14)"} />
            <stop offset="100%" stopColor="rgba(255,24,1,0)" />
          </linearGradient>
          <linearGradient id="faqSpotlightGrad" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor={activeFocus ? "rgba(255, 59, 36, 0.22)" : "rgba(255, 255, 255, 0.08)"} />
            <stop offset="70%" stopColor={activeFocus ? "rgba(255, 24, 1, 0.07)" : "rgba(255, 255, 255, 0.02)"} />
            <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
          </linearGradient>
          <linearGradient id="faqFloorReflect" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF2812" stopOpacity={isDark ? "0.24" : "0.1"} />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Overhead volumetric stage spotlight panning to hovered/open topic */}
        <g style={{ transition: "transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)" }} transform={`translate(${spotX - 272}, 0)`}>
          <polygon
            points="232,-12 312,-12 396,348 148,348"
            fill="url(#faqSpotlightGrad)"
          />
          <ellipse
            cx="272"
            cy="344"
            rx={activeFocus ? 82 : 68}
            ry="10"
            fill={activeFocus ? "rgba(255, 24, 1, 0.26)" : "rgba(255, 255, 255, 0.05)"}
          />
        </g>

        {/* Studio floor horizon & glossy obsidian mirror reflection under FAQ */}
        <ellipse cx="285" cy="346" rx="242" ry="24" fill="url(#faqFloorGlow)" />
        <ellipse
          cx="285"
          cy="344"
          rx="212"
          ry="12"
          fill={isDark ? "rgba(0,0,0,0.82)" : "rgba(15,23,42,0.12)"}
        />
        <g transform="translate(0, 682) scale(1, -0.24)" opacity="0.58">
          <g transform="translate(58, 134)">
            <path d="M 10 8 L 118 8 L 118 46 L 54 46 L 54 84 L 106 84 L 106 122 L 54 122 L 54 202 L 10 202 Z" fill="url(#faqFloorReflect)" />
          </g>
          <g transform="translate(184, 134)">
            <path d="M 48 8 L 96 8 L 146 202 L 100 202 L 90 162 L 48 162 L 38 202 L -4 202 Z" fill="url(#faqFloorReflect)" />
          </g>
          <g transform="translate(332, 134)">
            <path d="M 88 6 C 142 6, 174 44, 174 104 C 174 146, 157 176, 130 192 L 154 216 L 116 216 L 98 198 C 95 198.5, 91 199, 88 199 C 34 199, 2 162, 2 104 C 2 44, 34 6, 88 6 Z" fill="url(#faqFloorReflect)" />
          </g>
        </g>

        {/* HANGING ? & ! SPEECH BUBBLES */}
        {HANGING_BUBBLES.map((b, idx) => (
          <SpeechBubble
            key={idx}
            idx={idx}
            b={b}
            isDark={isDark}
            isActive={isActive}
            isFocused={activeFocus?.bubbleIdx === idx}
          />
        ))}

        {/* Paper plane insight relay gliding between team members */}
        <PaperPlaneRelay />

        {/* ─── 3D EXTRUDED "F" ─── */}
        <g transform="translate(58, 134)">
          <path
            d="M 10 8 L 118 8 L 118 46 L 54 46 L 54 84 L 106 84 L 106 122 L 54 122 L 54 202 L 10 202 Z"
            transform="translate(14, -8)"
            fill="url(#faqLetterExtrude)"
          />
          <polygon points="10,8 24,0 132,0 118,8" fill="#C41406" />
          <polygon points="118,8 132,0 132,38 118,46" fill="#6D0700" />
          <polygon points="54,122 68,114 68,194 54,202" fill="#6D0700" />
          <path
            d="M 10 8 L 118 8 L 118 46 L 54 46 L 54 84 L 106 84 L 106 122 L 54 122 L 54 202 L 10 202 Z"
            fill="url(#faqLetterFace)"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="1"
          />
        </g>

        {/* ─── 3D EXTRUDED "A" ─── */}
        <g transform="translate(184, 134)">
          <path
            d="M 48 8 L 96 8 L 146 202 L 100 202 L 90 162 L 48 162 L 38 202 L -4 202 Z M 57 124 L 83 124 L 70 64 Z"
            fillRule="evenodd"
            transform="translate(14, -8)"
            fill="url(#faqLetterExtrude)"
          />
          <polygon points="48,8 62,0 110,0 96,8" fill="#C41406" />
          <path
            d="M 48 8 L 96 8 L 146 202 L 100 202 L 90 162 L 48 162 L 38 202 L -4 202 Z M 57 124 L 83 124 L 70 64 Z"
            fillRule="evenodd"
            fill="url(#faqLetterFace)"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="1"
          />
        </g>

        {/* ─── 3D EXTRUDED "Q" ─── */}
        <g transform="translate(332, 134)">
          <path
            d="M 88 6 C 142 6, 174 44, 174 104 C 174 146, 157 176, 130 192 L 154 216 L 116 216 L 98 198 C 95 198.5, 91 199, 88 199 C 34 199, 2 162, 2 104 C 2 44, 34 6, 88 6 Z M 88 48 C 62 48, 48 68, 48 104 C 48 139, 62 158, 88 158 C 114 158, 128 139, 128 104 C 128 68, 114 48, 88 48 Z"
            fillRule="evenodd"
            transform="translate(14, -8)"
            fill="url(#faqLetterExtrude)"
          />
          <path
            d="M 88 6 C 142 6, 174 44, 174 104 C 174 146, 157 176, 130 192 L 154 216 L 116 216 L 98 198 C 95 198.5, 91 199, 88 199 C 34 199, 2 162, 2 104 C 2 44, 34 6, 88 6 Z M 88 48 C 62 48, 48 68, 48 104 C 48 139, 62 158, 88 158 C 114 158, 128 139, 128 104 C 128 68, 114 48, 88 48 Z"
            fillRule="evenodd"
            fill="url(#faqLetterFace)"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="1"
          />
        </g>

        {/* ─── REALISTIC MINIATURE SEATED TEAM ─── */}
        {/* Cross-legged bearded dev in maroon overshirt on top-left of F */}
        <SeatedPerson
          x={102}
          y={136}
          shirt="#E2E8F0"
          jacket="#6B1D1D"
          jacketShade="#4A1212"
          pants="#2563EB"
          pantsShade="#1E40AF"
          skinKey="warm"
          hair="#271A14"
          beard={true}
          device="laptop"
          pose="crosslegged"
          swingLegs={false}
          shoeUpper="#475569"
          delay="0s"
        />

        {/* Woman in olive jacket + yellow top checking phone on right corner of F */}
        <SeatedPerson
          x={166}
          y={137}
          shirt="#CA8A04"
          jacket="#4D5D32"
          jacketShade="#364222"
          pants="#2563EB"
          pantsShade="#1E3A8A"
          skinKey="fair"
          hair="#1F1917"
          hairStyle="long"
          device="phone"
          swingLegs={true}
          shoeUpper="#E2E8F0"
          delay="-0.9s"
        />

        {/* Guy in sage green tee typing on laptop atop A */}
        <SeatedPerson
          x={256}
          y={137}
          shirt="#3F7E54"
          shirtShade="#275637"
          pants="#1E3A8A"
          pantsShade="#0F172A"
          skinKey="fair"
          hair="#3A281E"
          device="laptop"
          swingLegs={true}
          shoeUpper="#1E293B"
          delay="-0.4s"
        />

        {/* Woman in beige cardigan on phone call resting against slope of A */}
        <SeatedPerson
          x={302}
          y={246}
          shirt="#D6C6B2"
          shirtShade="#A89682"
          pants="#2563EB"
          pantsShade="#1D4ED8"
          skinKey="olive"
          hair="#18181B"
          hairStyle="long"
          device="call"
          swingLegs={true}
          shoeUpper="#F1F5F9"
          delay="-1.3s"
        />

        {/* Woman with wavy dark hair in lilac/gray tee on left top arc of Q */}
        <SeatedPerson
          x={392}
          y={139}
          shirt="#D8D2DC"
          shirtShade="#ABA3B2"
          pants="#1D4ED8"
          pantsShade="#172554"
          skinKey="warm"
          hair="#18181B"
          hairStyle="wavy"
          device="laptop"
          swingLegs={true}
          shoeUpper="#F8FAFC"
          delay="-0.7s"
        />

        {/* Woman with top bun in yellow tee facing left on right top arc of Q */}
        <SeatedPerson
          x={444}
          y={139}
          shirt="#EAB308"
          shirtShade="#B45309"
          pants="#1E40AF"
          pantsShade="#172554"
          skinKey="medium"
          hair="#271C19"
          hairStyle="bun"
          device="laptop"
          flip={true}
          swingLegs={true}
          shoeUpper="#F8FAFC"
          delay="-1.7s"
        />

        {/* Bearded specialist seated inside Q inner loop reading tablet */}
        <SeatedPerson
          x={424}
          y={284}
          shirt="#65A30D"
          shirtShade="#3F6212"
          pants="#1E3A8A"
          pantsShade="#0F172A"
          skinKey="olive"
          hair="#2A1D17"
          beard={true}
          device="tablet"
          flip={true}
          swingLegs={false}
          shoeUpper="#78350F"
          shoeSole="#F1F5F9"
          delay="-0.5s"
        />

        {/* Holographic micro-projections floating above active screens */}
        <HoloProjector x={102} y={108} text="ROI ↑" accent="#38BDF8" delay="0s" />
        <HoloProjector x={270} y={108} text="</>" accent="#4ADE80" delay="-1.3s" />
        <HoloProjector x={410} y={248} text="24/7" accent="#FACC15" delay="-2.1s" />

        {/* Live specialist callout tag synchronized with hovered or open FAQ */}
        <ActiveSpecialistCallout focus={activeFocus} isDark={isDark} />
      </svg>

      {/* ─── LOTTIE WALKING CHARACTERS ON STUDIO FLOOR ─── */}
      <div className="bf-faq-lottie-layer">
        {LOTTIE_WALKERS.map((walker) => (
          <LottieWalker key={walker.id} walker={walker} isPaused={isPaused} isDark={isDark} />
        ))}
      </div>
    </div>
  );
}

const dioramaStyles = `
  .bf-faq-diorama {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    transform-style: preserve-3d;
  }

  .bf-faq-svg {
    width: 100%;
    height: auto;
    overflow: visible;
    display: block;
  }

  .bf-faq-lottie-layer {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 3;
  }

  .bf-faq-lottie-shadow {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    height: 10px;
    border-radius: 50%;
    pointer-events: none;
  }

  .bf-faq-diorama.is-paused * {
    animation-play-state: paused !important;
  }

  .bf-faq-bubble {
    transform-box: fill-box;
    transform-origin: 50% 0%;
    animation: faqBubbleFloat 3.6s ease-in-out infinite;
  }

  .bf-faq-bubble.is-excited {
    filter: brightness(1.12);
  }

  @keyframes faqBubbleFloat {
    0%, 100% { transform: translateY(0px) rotate(-1.5deg); }
    50% { transform: translateY(-7px) rotate(1.5deg); }
  }

  .bf-faq-seated-bob {
    transform-box: fill-box;
    transform-origin: 50% 100%;
    animation: faqSeatedBob 2.8s ease-in-out infinite;
  }

  @keyframes faqSeatedBob {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-2.0px); }
  }

  .bf-faq-leg-swing-a {
    transform-box: fill-box;
    transform-origin: 55% 6%;
    animation: faqLegSwing 2.2s ease-in-out infinite;
  }

  .bf-faq-leg-swing-b {
    transform-box: fill-box;
    transform-origin: 55% 6%;
    animation: faqLegSwing 2.2s ease-in-out infinite reverse;
  }

  @keyframes faqLegSwing {
    0%, 100% { transform: rotate(-7deg); }
    50% { transform: rotate(9deg); }
  }

  .bf-faq-arm-wave {
    transform-box: fill-box;
    transform-origin: 15% 85%;
    animation: faqArmWave 2.4s ease-in-out infinite;
  }

  @keyframes faqArmWave {
    0%, 100% { transform: rotate(-5deg); }
    50% { transform: rotate(7deg); }
  }

  /* Floor Patrol Paths (Responsive Percentages) */
  .bf-faq-patrol-left {
    animation: faqPatrolLeft linear infinite;
  }
  @keyframes faqPatrolLeft {
    0% { transform: translate(0%, 0%); }
    48% { transform: translate(48%, 6%); }
    50% { transform: translate(48%, 6%); }
    98% { transform: translate(0%, 0%); }
    100% { transform: translate(0%, 0%); }
  }

  .bf-faq-patrol-main {
    animation: faqPatrolMain linear infinite;
  }
  @keyframes faqPatrolMain {
    0% { transform: translate(0%, 0%); }
    48% { transform: translate(185%, -3%); }
    50% { transform: translate(185%, -3%); }
    98% { transform: translate(0%, 0%); }
    100% { transform: translate(0%, 0%); }
  }

  .bf-faq-patrol-right {
    animation: faqPatrolRight linear infinite;
  }
  @keyframes faqPatrolRight {
    0% { transform: translate(0%, 0%); }
    48% { transform: translate(-42%, 8%); }
    50% { transform: translate(-42%, 8%); }
    98% { transform: translate(0%, 0%); }
    100% { transform: translate(0%, 0%); }
  }

  .bf-faq-flip {
    transform-origin: center center;
    animation: faqFlipDirection linear infinite;
  }
  @keyframes faqFlipDirection {
    0%, 48% { transform: scaleX(1); }
    50%, 98% { transform: scaleX(-1); }
    100% { transform: scaleX(1); }
  }

  .bf-faq-flip-rev {
    transform-origin: center center;
    animation: faqFlipDirectionRev linear infinite;
  }
  @keyframes faqFlipDirectionRev {
    0%, 48% { transform: scaleX(-1); }
    50%, 98% { transform: scaleX(1); }
    100% { transform: scaleX(-1); }
  }

  /* Subtle blinking & typing micro-life */
  .bf-faq-blink {
    transform-box: fill-box;
    transform-origin: 50% 50%;
    animation: faqEyeBlink 4.6s ease-in-out infinite;
  }
  @keyframes faqEyeBlink {
    0%, 92%, 100% { transform: scaleY(1); }
    96% { transform: scaleY(0.1); }
  }

  .bf-faq-type {
    animation: faqTypingTap 0.42s ease-in-out infinite alternate;
  }
  @keyframes faqTypingTap {
    0% { transform: translateY(0px); }
    100% { transform: translateY(-0.9px); }
  }

  .bf-faq-holo-float {
    animation: faqHoloFloat 3.4s ease-in-out infinite;
  }
  @keyframes faqHoloFloat {
    0%, 100% { transform: translateY(0px); opacity: 0.72; }
    50% { transform: translateY(-6px); opacity: 1; }
  }

  .bf-faq-callout-pop {
    animation: faqCalloutPop 0.28s cubic-bezier(0.16, 1, 0.3, 1);
  }
  @keyframes faqCalloutPop {
    0% { opacity: 0; transform: translateY(4px); }
    100% { opacity: 1; transform: translateY(0px); }
  }

  /* Curved paper plane insight relay F -> A -> Q */
  .bf-faq-plane-a {
    animation: faqPlaneArcA 6.4s cubic-bezier(0.35, 0.1, 0.65, 0.9) infinite;
  }
  @keyframes faqPlaneArcA {
    0% { transform: translate(114px, 114px) rotate(-26deg) scale(0.75); opacity: 0; }
    10% { opacity: 0.95; }
    38% { transform: translate(188px, 78px) rotate(-4deg) scale(1); }
    72% { transform: translate(262px, 112px) rotate(22deg) scale(0.95); opacity: 0.95; }
    88%, 100% { transform: translate(272px, 118px) rotate(26deg) scale(0.7); opacity: 0; }
  }

  .bf-faq-plane-b {
    animation: faqPlaneArcB 7.8s cubic-bezier(0.35, 0.1, 0.65, 0.9) infinite;
    animation-delay: -3.2s;
  }
  @keyframes faqPlaneArcB {
    0% { transform: translate(264px, 112px) rotate(-24deg) scale(0.75); opacity: 0; }
    10% { opacity: 0.95; }
    42% { transform: translate(334px, 76px) rotate(-2deg) scale(1); }
    76% { transform: translate(404px, 118px) rotate(24deg) scale(0.92); opacity: 0.95; }
    90%, 100% { transform: translate(414px, 126px) rotate(28deg) scale(0.7); opacity: 0; }
  }

  @media (prefers-reduced-motion: reduce) {
    .bf-faq-diorama,
    .bf-faq-diorama * {
      animation: none !important;
      transition: none !important;
    }
  }
`;

/* ─── Creative Floating FAQ Card ─── */
function FAQCard({ item, index, isOpen, onToggle, onHoverChange, isMobile, theme }) {
  const isDark = theme === "black" || theme === "dark";
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
        onHoverStart={() => onHoverChange?.(index)}
        onHoverEnd={() => onHoverChange?.(null)}
        whileHover={!isMobile ? { y: -2 } : {}}
        whileTap={{ scale: 0.99 }}
        style={{
          borderRadius: 22,
          background: isDark
            ? isOpen
              ? "rgba(22, 19, 30, 0.95)"
              : "rgba(16, 14, 22, 0.75)"
            : isOpen
            ? "rgba(255, 255, 255, 0.94)"
            : "rgba(255, 255, 255, 0.65)",
          backdropFilter: "blur(16px) saturate(180%)",
          WebkitBackdropFilter: "blur(16px) saturate(180%)",
          border: isDark
            ? isOpen
              ? "1.5px solid #FF1801"
              : "1px solid rgba(255, 255, 255, 0.08)"
            : isOpen
            ? "1.5px solid #FF4D4D"
            : "1px solid rgba(255, 255, 255, 0.8)",
          boxShadow: isDark
            ? isOpen
              ? "0 20px 48px -12px rgba(255, 24, 1, 0.25), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)"
              : "0 8px 32px 0 rgba(0, 0, 0, 0.45), inset 0 1px 0 0 rgba(255, 255, 255, 0.04)"
            : isOpen
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
              background: "linear-gradient(180deg, #FF1801 0%, #FF8A65 100%)",
              boxShadow: "0 0 12px rgba(255, 24, 1, 0.8)",
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
                color: isDark
                  ? isOpen
                    ? "#FF1801"
                    : "#FFFFFF"
                  : isOpen
                  ? "#FF4D4D"
                  : "#9CA3AF",
                background: isDark
                  ? isOpen
                    ? "rgba(255, 24, 1,0.18)"
                    : "rgba(255,255,255,0.08)"
                  : isOpen
                  ? "rgba(255,77,77,0.08)"
                  : "rgba(0,0,0,0.03)",
                border: isDark
                  ? isOpen
                    ? "1px solid rgba(255, 24, 1,0.45)"
                    : "1px solid rgba(255,255,255,0.12)"
                  : "none",
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
                color: isDark
                  ? isOpen
                    ? "#FFFFFF"
                    : "rgba(255, 255, 255, 0.95)"
                  : isOpen
                  ? "#111827"
                  : "#1F2937",
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
              background: isOpen
                ? "#FF1801"
                : isDark
                ? "rgba(255,255,255,0.1)"
                : "rgba(0,0,0,0.04)",
              color: "#FFFFFF",
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
              border: isDark ? "1px solid rgba(255,255,255,0.15)" : "none",
              boxShadow: isOpen ? "0 4px 14px rgba(255, 24, 1,0.45)" : "none",
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
                background: isDark
                  ? "linear-gradient(90deg, #FF1801 0%, rgba(255,255,255,0.2) 60%, transparent 100%)"
                  : "linear-gradient(90deg, rgba(255,77,77,0.2), transparent)",
                marginBottom: 16,
              }}
            />
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: isMobile ? "0.9rem" : "0.95rem",
                lineHeight: 1.75,
                color: isDark ? "rgba(255, 255, 255, 0.88)" : "#4B5563",
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
export default function BrandForgeFAQ({ theme }) {
  const isDark = theme === "black" || theme === "dark";
  const [openIndex, setOpenIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [stageTilt, setStageTilt] = useState({ rx: 0, ry: 0 });
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

  const handleStagePointerMove = (e) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    setStageTilt({ rx: Number((-ny * 7).toFixed(2)), ry: Number((nx * 9).toFixed(2)) });
  };

  const resetStageTilt = () => setStageTilt({ rx: 0, ry: 0 });

  const focusedIndex = hoveredIndex !== null ? hoveredIndex : openIndex;

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        padding: isMobile ? "70px 16px 90px" : "110px 24px 130px",
        background: isDark ? "#000000" : "#FBFBFC",
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
          background: isDark
            ? "radial-gradient(circle, rgba(255, 24, 1,0.08) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(255,77,77,0.04) 0%, transparent 70%)",
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
          background: isDark
            ? "radial-gradient(circle, rgba(255,87,51,0.06) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(255,138,101,0.05) 0%, transparent 70%)",
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
          <h2
            style={{
              fontFamily: "'Outfit', 'Inter', sans-serif",
              fontSize: "clamp(2.1rem, 5vw, 3.6rem)",
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: "-0.035em",
              color: isDark ? "#FFFFFF" : "#111827",
              margin: "0 0 16px",
            }}
          >
            Frequently Asked{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #FF1801 0%, #FF8A65 100%)",
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
              color: isDark ? "rgba(255, 255, 255, 0.65)" : "#6B7280",
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
          {/* Left — Animated 3D FAQ Diorama + Particle Globe */}
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 20 : 0, x: isMobile ? 0 : -40 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              flex: isMobile ? "1 1 100%" : "0 0 480px",
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
              onPointerMove={handleStagePointerMove}
              onPointerLeave={resetStageTilt}
              style={{
                position: "relative",
                width: "100%",
                minHeight: isMobile ? 310 : 440,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 24,
                overflow: "hidden",
              }}
            >
              {/* Interactive Particle Globe behind diorama */}
              <BlackParticleGlobeCanvas theme={theme} />

              {/* Animated 3D Red FAQ Letters with Walking & Seated Team */}
              <AnimatedFAQScene
                isDark={isDark}
                isActive={openIndex !== null}
                focusedIndex={focusedIndex}
                tilt={stageTilt}
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
                onHoverChange={setHoveredIndex}
                isMobile={isMobile}
                theme={theme}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
