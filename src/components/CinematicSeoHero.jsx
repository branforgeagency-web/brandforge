"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Zap, ArrowRight, Search, Cpu, Globe, CheckCircle2, Sparkles, Check, Star } from "lucide-react";
import KexsioCanvasBackground from "./KexsioCanvasBackground";

/**
 * World-Class Cinematic 3D SEO & GEO Hero
 * Features interactive 3D SEO & GEO apparatus artwork with cursor parallax,
 * floating 3D Google Search & AI Recommendation holographic cards,
 * and high-converting light-theme styling with red, black, and white accents.
 */
export default function CinematicSeoHero({ onOpenModal }) {
  const heroRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  // 3D Parallax Tilt for the 3D Artwork Stage
  const rotateTiltX = useTransform(springY, [-1, 1], [10, -10]);
  const rotateTiltY = useTransform(springX, [-1, 1], [-10, 10]);
  const artTranslateX = useTransform(springX, [-1, 1], [-18, 18]);
  const artTranslateY = useTransform(springY, [-1, 1], [-14, 14]);

  // Floating HUD 3D depth parallax
  const hudGoogleX = useTransform(springX, [-1, 1], [-25, 15]);
  const hudGoogleY = useTransform(springY, [-1, 1], [-20, 10]);
  const hudAiX = useTransform(springX, [-1, 1], [15, -25]);
  const hudAiY = useTransform(springY, [-1, 1], [10, -20]);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const normY = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    mouseX.set(normX);
    mouseY.set(normY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <header
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bf-cine-hero-root"
      id="seo-hero-banner"
    >
      <style>{heroStyles}</style>

      {/* Light Mesh Network Constellation */}
      <KexsioCanvasBackground theme="light" opacity={0.6} />

      {/* Ambient Concentric Brand Radar Rings */}
      <div className="bf-cine-radar-overlay" aria-hidden="true">
        <div className="bf-cine-radar-ring ring-outer" />
        <div className="bf-cine-radar-ring ring-middle" />
        <div className="bf-cine-radar-glow" />
      </div>

      <div className="bf-cine-container">
        <div className="bf-cine-split-grid">

          {/* LEFT COLUMN: HIGH-IMPACT EDITORIAL & ACTIONS */}
          <motion.div
            className="bf-cine-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Category Tag */}
            <div className="bf-cine-eyebrow">
              <span className="bf-cine-pulse-dot">
                <span className="ping-ring" />
                <span className="solid-dot" />
              </span>
              <span>NEXT-GEN SEARCH SUPREMACY • DUAL-ENGINE ARCHITECTURE</span>
            </div>

            {/* Main Headline */}
            <h1 className="bf-cine-h1">
              Own The <span className="bf-cine-h1-dark">Search Engine</span>.
              <br />
              Command The <span className="bf-cine-h1-red">AI Answer</span>.
            </h1>

            {/* Subtitle */}
            <p className="bf-cine-sub">
              Traditional SEO captures ten blue links. BrandForge GEO synthesizes your brand into ChatGPT, Perplexity, and Google Gemini vector graphs. We deliver category-leading organic market share.
            </p>

            {/* Dual Action Buttons */}
            <div className="bf-cine-cta-wrap">
              <button onClick={onOpenModal} className="bf-cine-btn-black">
                <Zap size={18} />
                <span>Ignite Your Search Dominance</span>
                <ArrowRight size={18} className="btn-arrow" />
              </button>

              <button
                onClick={() => {
                  const el = document.querySelector(".sg-seo-story-section");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                  else onOpenModal();
                }}
                className="bf-cine-btn-white"
              >
                <span>See How It Works</span>
              </button>
            </div>

            {/* Trust Proof Badges */}
            <div className="bf-cine-proof-strip">
              <div className="proof-item">
                <CheckCircle2 size={15} className="proof-icon" />
                <span>#1 Organic SERP</span>
              </div>
              <span className="proof-sep">•</span>
              <div className="proof-item">
                <CheckCircle2 size={15} className="proof-icon" />
                <span>Top AI Answer Citations</span>
              </div>
              <span className="proof-sep">•</span>
              <div className="proof-item">
                <CheckCircle2 size={15} className="proof-icon" />
                <span>100/100 Core Web Vitals</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: 3D INTERACTIVE SEO & GEO ARTWORK STAGE */}
          <motion.div
            className="bf-cine-right"
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              style={{
                rotateX: rotateTiltX,
                rotateY: rotateTiltY,
                x: artTranslateX,
                y: artTranslateY,
                transformStyle: "preserve-3d",
              }}
              className="bf-3d-stage-viewport"
            >
              {/* Soft Ambient Spotlight Glow */}
              <div className="bf-3d-stage-glow" />

              {/* Main 3D SEO & GEO Apparatus Model */}
              <motion.div
                className="bf-3d-model-wrap"
                animate={{
                  y: [-8, 8, -8],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ transform: "translateZ(30px)" }}
              >
                <img
                  src="/seo-rocket-3d.png"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/seo-geo-floating-3d.png";
                  }}
                  alt="BrandForge 3D SEO & GEO Rocket Engine"
                  className="bf-3d-model-img"
                />
              </motion.div>

              {/* CREATIVE SATELLITE CARD 1: GOOGLE SERP (#1 RANK) */}
              <motion.div
                style={{
                  x: hudGoogleX,
                  y: hudGoogleY,
                  transform: "translateZ(75px)",
                }}
                animate={{
                  y: [-6, 6, -6],
                  rotateZ: [-0.6, 0.6, -0.6],
                }}
                transition={{
                  duration: 4.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="bf-creative-card card-serp-dominant"
              >
                <div className="bf-serp-top">
                  <div className="bf-serp-source">
                    <div className="bf-g-badge">
                      <Search size={13} />
                    </div>
                    <div className="bf-serp-meta">
                      <span className="bf-serp-brand">brandforge.in</span>
                      <span className="bf-serp-slug">› seo-geo</span>
                    </div>
                  </div>
                  <div className="bf-rank-trophy-pill">
                    <Star size={11} className="trophy-star" />
                    <span>#1 ORGANIC</span>
                  </div>
                </div>

                <div className="bf-serp-headline">
                  Top SEO &amp; GEO Engine
                </div>
              </motion.div>

              {/* CREATIVE SATELLITE CARD 2: GENERATIVE ENGINE OPTIMIZATION */}
              <motion.div
                style={{
                  x: hudAiX,
                  y: hudAiY,
                  transform: "translateZ(75px)",
                }}
                animate={{
                  y: [6, -6, 6],
                  rotateZ: [0.6, -0.6, 0.6],
                }}
                transition={{
                  duration: 5.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="bf-creative-card card-geo-network"
              >
                <div className="bf-geo-heading">
                  Top AI Answer Source
                </div>

                {/* 3 AI Engine Citation Badges */}
                <div className="bf-geo-chips-row">
                  <div className="bf-engine-chip">
                    <span className="engine-name">ChatGPT</span>
                    <Check size={10} className="engine-icon-chk" />
                  </div>
                  <div className="bf-engine-chip">
                    <span className="engine-name">Perplexity</span>
                    <Sparkles size={10} className="engine-icon-spark" />
                  </div>
                  <div className="bf-engine-chip">
                    <span className="engine-name">Gemini</span>
                    <Zap size={10} className="engine-icon-zap" />
                  </div>
                </div>

                {/* Micro Attribution Gauge */}
                <div className="bf-geo-progress-track">
                  <div className="bf-geo-progress-bar" />
                </div>
              </motion.div>

              {/* CREATIVE SATELLITE CARD 3: LIGHTHOUSE 100 PERFORMANCE */}
              <motion.div
                style={{
                  transform: "translateZ(65px)",
                }}
                animate={{
                  y: [-5, 5, -5],
                  rotateZ: [-0.5, 0.5, -0.5],
                }}
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="bf-creative-card card-speed-lighthouse"
              >
                {/* Authentic Circular Lighthouse Dial */}
                <div className="bf-dial-wrapper">
                  <svg viewBox="0 0 46 46" className="bf-svg-dial">
                    <circle cx="23" cy="23" r="19" className="dial-bg-track" />
                    <circle cx="23" cy="23" r="19" className="dial-fill-stroke" />
                  </svg>
                  <div className="bf-dial-num">100</div>
                </div>

                <div className="bf-speed-details">
                  <div className="bf-speed-header">
                    <span className="bf-speed-label">Core Web Vitals</span>
                    <span className="bf-pass-pill">PERFECT</span>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </motion.div>

        </div>
      </div>
    </header>
  );
}

const heroStyles = `
  .bf-cine-hero-root {
    position: relative;
    min-height: 90vh;
    width: 100%;
    overflow: hidden;
    background: #FFFFFF;
    color: #0A0A0C;
    display: flex;
    align-items: center;
    padding: clamp(60px, 8vw, 110px) 0 clamp(70px, 9vw, 120px);
    border-bottom: 1px solid #E5E7EB;
  }

  .bf-cine-container {
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    padding: 0 clamp(20px, 4vw, 40px);
    position: relative;
    z-index: 10;
  }

  .bf-cine-radar-overlay {
    position: absolute;
    inset: 0;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    z-index: 1;
  }

  .bf-cine-radar-ring {
    position: absolute;
    border-radius: 50%;
  }

  .bf-cine-radar-ring.ring-outer {
    width: 860px;
    height: 860px;
    border: 1px dashed rgba(10, 10, 12, 0.07);
    animation: cineSpin 90s linear infinite;
  }

  .bf-cine-radar-ring.ring-middle {
    width: 580px;
    height: 580px;
    border: 1px dashed rgba(239, 65, 54, 0.2);
    animation: cineSpinRev 65s linear infinite;
  }

  .bf-cine-radar-glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 65% 50%, rgba(239, 65, 54, 0.08) 0%, transparent 65%);
  }

  @keyframes cineSpin {
    to { transform: rotate(360deg); }
  }

  @keyframes cineSpinRev {
    to { transform: rotate(-360deg); }
  }

  .bf-cine-split-grid {
    display: grid;
    grid-template-columns: 1.15fr 1fr;
    gap: clamp(40px, 6vw, 80px);
    align-items: center;
  }

  .bf-cine-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }

  .bf-cine-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 8px 18px;
    border-radius: 999px;
    background: #FFFFFF;
    border: 1px solid rgba(239, 65, 54, 0.3);
    color: #EF4136;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.76rem;
    font-weight: 800;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    box-shadow: 0 4px 14px rgba(239, 65, 54, 0.08);
  }

  .bf-cine-pulse-dot {
    position: relative;
    display: flex;
    width: 8px;
    height: 8px;
  }

  .bf-cine-pulse-dot .ping-ring {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: #EF4136;
    opacity: 0.75;
    animation: cinePing 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
  }

  .bf-cine-pulse-dot .solid-dot {
    position: relative;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #EF4136;
  }

  @keyframes cinePing {
    75%, 100% {
      transform: scale(2.2);
      opacity: 0;
    }
  }

  .bf-cine-h1 {
    margin: 22px 0 0;
    font-family: "Outfit", sans-serif;
    font-size: clamp(36px, 4.8vw, 66px);
    font-weight: 900;
    line-height: 1.08;
    letter-spacing: -0.025em;
    color: #0A0A0C;
  }

  .bf-cine-h1-dark {
    color: #0A0A0C;
  }

  .bf-cine-h1-red {
    color: #EF4136;
    background: linear-gradient(90deg, #EF4136 0%, #D2042D 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .bf-cine-sub {
    margin: 20px 0 0;
    font-size: clamp(16px, 1.2vw, 18px);
    line-height: 1.7;
    color: #4B5563;
    font-family: "Plus Jakarta Sans", sans-serif;
    max-width: 580px;
  }

  .bf-cine-cta-wrap {
    margin-top: 36px;
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
  }

  .bf-cine-btn-black {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 18px 34px;
    border-radius: 14px;
    background: #0A0A0C;
    color: #FFFFFF;
    font-family: "Outfit", sans-serif;
    font-size: 0.95rem;
    font-weight: 800;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    border: 1px solid #0A0A0C;
    cursor: pointer;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .bf-cine-btn-black:hover {
    background: #EF4136;
    border-color: #EF4136;
    transform: translateY(-2px);
    box-shadow: 0 14px 35px rgba(239, 65, 54, 0.35);
  }

  .bf-cine-btn-black .btn-arrow {
    transition: transform 0.25s ease;
  }

  .bf-cine-btn-black:hover .btn-arrow {
    transform: translateX(4px);
  }

  .bf-cine-btn-white {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 18px 30px;
    border-radius: 14px;
    background: #FFFFFF;
    color: #0A0A0C;
    font-family: "Outfit", sans-serif;
    font-size: 0.95rem;
    font-weight: 800;
    letter-spacing: 0.04em;
    border: 1px solid #E5E7EB;
    cursor: pointer;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
    transition: all 0.25s ease;
  }

  .bf-cine-btn-white:hover {
    border-color: #EF4136;
    color: #EF4136;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(239, 65, 54, 0.1);
  }

  .bf-cine-proof-strip {
    margin-top: 32px;
    display: flex;
    align-items: center;
    gap: 14px;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.74rem;
    font-weight: 700;
    color: #4B5563;
    flex-wrap: wrap;
  }

  .proof-item {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .proof-icon {
    color: #EF4136;
  }

  .proof-sep {
    color: #D1D5DB;
  }

  /* RIGHT 3D STAGE */
  .bf-cine-right {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 1200px;
  }

  .bf-3d-stage-viewport {
    position: relative;
    width: 100%;
    max-width: 520px;
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    transform-style: preserve-3d;
  }

  .bf-3d-stage-glow {
    position: absolute;
    width: 380px;
    height: 380px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(239, 65, 54, 0.2) 0%, rgba(239, 65, 54, 0.04) 50%, transparent 70%);
    filter: blur(30px);
    pointer-events: none;
  }

  .bf-3d-model-wrap {
    position: relative;
    z-index: 5;
    width: 100%;
    max-width: 480px;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: drop-shadow(0 25px 50px rgba(0, 0, 0, 0.14)) drop-shadow(0 0 40px rgba(239, 65, 54, 0.2));
  }

  .bf-3d-model-img {
    width: 100%;
    height: auto;
    object-fit: contain;
    user-select: none;
    pointer-events: none;
  }

  /* BESPOKE LIQUID GLASS GLASSMORPHISM 3D FLOATING CARDS */
  .bf-creative-card {
    position: absolute;
    z-index: 20;
    border-radius: 20px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.42) 45%, rgba(255, 255, 255, 0.65) 100%);
    border: 1px solid rgba(255, 255, 255, 0.88);
    backdrop-filter: blur(26px) saturate(200%) contrast(102%);
    -webkit-backdrop-filter: blur(26px) saturate(200%) contrast(102%);
    box-shadow:
      0 24px 60px rgba(0, 0, 0, 0.07),
      0 10px 24px rgba(0, 0, 0, 0.03),
      inset 0 1.5px 1.5px 0 rgba(255, 255, 255, 0.95),
      inset 0 -1px 2px 0 rgba(10, 10, 12, 0.04),
      inset 0 0 20px 0 rgba(255, 255, 255, 0.45);
    transition: all 0.38s cubic-bezier(0.16, 1, 0.3, 1);
    transform-style: preserve-3d;
    cursor: default;
    user-select: none;
    overflow: hidden;
  }

  .bf-creative-card::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: radial-gradient(circle at 25% 0%, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.18) 32%, transparent 65%);
    pointer-events: none;
    z-index: 1;
  }

  .bf-creative-card > * {
    position: relative;
    z-index: 2;
  }

  .bf-creative-card:hover {
    transform: scale(1.05) translateZ(95px) !important;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.5) 45%, rgba(255, 255, 255, 0.78) 100%);
    border-color: rgba(255, 255, 255, 0.98);
    box-shadow:
      0 32px 75px rgba(239, 65, 54, 0.14),
      0 12px 30px rgba(0, 0, 0, 0.06),
      inset 0 2px 2px 0 rgba(255, 255, 255, 1),
      inset 0 -1.5px 2px 0 rgba(239, 65, 54, 0.18),
      inset 0 0 24px 0 rgba(255, 255, 255, 0.7);
  }

  /* CARD 1: GOOGLE SERP (#1 RANK) */
  .card-serp-dominant {
    top: 6%;
    left: -4%;
    padding: 12px 16px;
    min-width: 230px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .bf-serp-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  .bf-serp-source {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .bf-g-badge {
    width: 24px;
    height: 24px;
    border-radius: 7px;
    background: #0A0A0C;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .bf-serp-meta {
    display: flex;
    align-items: center;
    gap: 4px;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.72rem;
  }

  .bf-serp-brand {
    font-weight: 700;
    color: #0A0A0C;
  }

  .bf-serp-slug {
    color: #9CA3AF;
  }

  .bf-rank-trophy-pill {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    background: #EF4136;
    color: #FFFFFF;
    padding: 3px 8px;
    border-radius: 999px;
    font-family: "Outfit", sans-serif;
    font-size: 0.65rem;
    font-weight: 800;
    letter-spacing: 0.05em;
    box-shadow: 0 4px 12px rgba(239, 65, 54, 0.35);
  }

  .trophy-star {
    fill: #FFD700;
    color: #FFD700;
  }

  .bf-serp-headline {
    font-family: "Outfit", sans-serif;
    font-size: 0.95rem;
    font-weight: 800;
    color: #0A0A0C;
    line-height: 1.25;
  }

  /* CARD 2: GEO AI VECTOR CITATION */
  .card-geo-network {
    bottom: 6%;
    right: -6%;
    padding: 12px 16px;
    min-width: 250px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .bf-geo-heading {
    font-family: "Outfit", sans-serif;
    font-size: 0.92rem;
    font-weight: 800;
    color: #0A0A0C;
    line-height: 1.25;
  }

  .bf-geo-chips-row {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .bf-engine-chip {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 4px 8px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.65);
    border: 1px solid rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03), inset 0 1px 1px rgba(255, 255, 255, 0.9);
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 0.72rem;
    font-weight: 700;
    color: #1F2937;
    transition: all 0.2s ease;
  }

  .bf-engine-chip:hover {
    border-color: #EF4136;
    background: rgba(255, 255, 255, 0.95);
    color: #EF4136;
    transform: translateY(-1px);
  }

  .engine-icon-chk { color: #10B981; }
  .engine-icon-spark { color: #8B5CF6; }
  .engine-icon-zap { color: #EF4136; }

  .bf-geo-progress-track {
    width: 100%;
    height: 4px;
    border-radius: 999px;
    background: #F3F4F6;
    overflow: hidden;
    margin-top: 2px;
  }

  .bf-geo-progress-bar {
    width: 94%;
    height: 100%;
    border-radius: 999px;
    background: linear-gradient(90deg, #EF4136 0%, #D2042D 100%);
  }

  /* CARD 3: LIGHTHOUSE 100 PERFORMANCE */
  .card-speed-lighthouse {
    bottom: -4%;
    left: -4%;
    padding: 10px 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 220px;
  }

  .bf-dial-wrapper {
    position: relative;
    width: 44px;
    height: 44px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bf-svg-dial {
    width: 44px;
    height: 44px;
    transform: rotate(-90deg);
  }

  .dial-bg-track {
    fill: none;
    stroke: #E5E7EB;
    stroke-width: 3.5;
  }

  .dial-fill-stroke {
    fill: none;
    stroke: #10B981;
    stroke-width: 3.5;
    stroke-linecap: round;
    stroke-dasharray: 120;
    stroke-dashoffset: 0;
  }

  .bf-dial-num {
    position: absolute;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.85rem;
    font-weight: 900;
    color: #0A0A0C;
  }

  .bf-speed-details {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .bf-speed-header {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .bf-speed-label {
    font-family: "Outfit", sans-serif;
    font-size: 0.88rem;
    font-weight: 800;
    color: #0A0A0C;
  }

  .bf-pass-pill {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.6rem;
    font-weight: 800;
    color: #047857;
    background: rgba(16, 185, 129, 0.12);
    border: 1px solid rgba(16, 185, 129, 0.3);
    padding: 2px 6px;
    border-radius: 999px;
  }

  @media (max-width: 1024px) {
    .bf-cine-split-grid {
      grid-template-columns: 1fr;
      text-align: center;
    }
    .bf-cine-left {
      align-items: center;
      text-align: center;
    }
    .bf-cine-sub {
      margin-left: auto;
      margin-right: auto;
    }
    .bf-cine-cta-wrap {
      justify-content: center;
    }
    .bf-cine-proof-strip {
      justify-content: center;
    }
    .card-serp-dominant {
      top: 0;
      left: 0;
    }
    .card-geo-network {
      bottom: 0;
      right: 0;
    }
    .card-speed-lighthouse {
      bottom: -6%;
      left: 2%;
    }
  }

  @media (max-width: 640px) {
    .bf-cine-btn-black, .bf-cine-btn-white {
      width: 100%;
      justify-content: center;
    }
    .bf-creative-card {
      position: static;
      margin-bottom: 12px;
      width: 100%;
    }
    .card-serp-dominant, .card-geo-network, .card-speed-lighthouse {
      left: auto;
      right: auto;
      top: auto;
      bottom: auto;
    }
  }
`;
