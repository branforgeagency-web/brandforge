import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown, Quote, ShieldCheck, Zap, TrendingUp, Users } from "lucide-react";

export default function AboutHeroSection({ onOpenModal }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const reticleRotate = useTransform(scrollYProgress, [0, 1], [0, 20]);

  const scrollToFounders = () => {
    const nextSection = document.getElementById("who-we-are");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={containerRef} className="bf-modern-about-root">
      {/* CINEMATIC DIGITAL AGENCY STUDIO BACKGROUND */}
      <motion.div className="bf-modern-about-bg" style={{ y: bgY }}>
        <img
          src="/banner-about-hero.jpg"
          alt="BrandForge Creative Headquarters Studio"
          className="bf-modern-about-img"
        />
        <div className="bf-modern-about-overlay" />
        <div className="bf-modern-about-vignette" />
        <div className="bf-modern-about-grid" />
      </motion.div>

      {/* HERO CONTAINER */}
      <motion.div className="bf-modern-about-container" style={{ opacity: contentOpacity }}>
        {/* TOP STATUS PILL */}
        <motion.div
          className="bf-modern-about-pill"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="bf-modern-pill-pulse" />
          <span className="bf-modern-pill-text">Your Business Is Different. Your Marketing Should Be Too.</span>
        </motion.div>

        {/* LOGO & EDITORIAL RETICLE STAGE */}
        <div className="bf-reticle-hero-stage">
          {/* HIGH-PRECISION ARCHITECTURAL RETICLE */}
          <motion.div
            className="bf-reticle-svg-wrap"
            style={{ rotate: reticleRotate }}
            aria-hidden="true"
          >
            <svg
              className="bf-reticle-vector"
              viewBox="0 0 640 640"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="320"
                cy="320"
                r="280"
                stroke="rgba(255, 255, 255, 0.16)"
                strokeWidth="1"
              />
              <circle
                cx="320"
                cy="320"
                r="220"
                stroke="rgba(239, 65, 54, 0.45)"
                strokeWidth="1.2"
                strokeDasharray="6 8"
                className="bf-svg-spin-cw"
              />
              <circle
                cx="260"
                cy="260"
                r="110"
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth="1"
                strokeDasharray="4 6"
                className="bf-svg-spin-ccw"
              />
              <line x1="170" y1="170" x2="230" y2="230" stroke="#EF4136" strokeWidth="3" strokeLinecap="round" />
              <line x1="470" y1="170" x2="410" y2="230" stroke="#EF4136" strokeWidth="3" strokeLinecap="round" />
              <line x1="170" y1="470" x2="230" y2="410" stroke="#EF4136" strokeWidth="3" strokeLinecap="round" />
              <line x1="470" y1="470" x2="410" y2="410" stroke="#EF4136" strokeWidth="3" strokeLinecap="round" />
              <line
                x1="20"
                y1="320"
                x2="620"
                y2="320"
                stroke="rgba(255, 255, 255, 0.28)"
                strokeWidth="1"
              />
              <circle cx="515" cy="225" r="18" fill="#EF4136" />
              <circle cx="215" cy="445" r="14" fill="#FFFFFF" fillOpacity="0.85" />
              <circle cx="150" cy="270" r="7" fill="#EF4136" />
              <circle cx="395" cy="460" r="8" fill="#FF5733" />
              <circle cx="290" cy="150" r="5" fill="#FFFFFF" />
              <path d="M315 45 L320 35 L325 45 Z" fill="#EF4136" />
              <path d="M315 595 L320 605 L325 595 Z" fill="#EF4136" />
            </svg>
          </motion.div>

          {/* BRANDFORGE EMBLEM BADGE (FULL LOGO PNG) */}
          <motion.div
            className="bf-modern-logo-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <img
              src="/brandforge-full-logo.png"
              alt="BrandForge — Turning Ideas Into Digital Power"
              className="bf-modern-logo-media"
            />
          </motion.div>

          {/* EDITORIAL HERO HEADING */}
          <motion.h1
            className="bf-modern-hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <span>ABOUT</span>
            <span className="bf-title-gap" />
            <span>US</span>
          </motion.h1>
        </div>

        {/* HOMEPAGE-ALIGNED BRANDFORGE CORE MANIFESTO & QUOTE CARD */}
        <motion.div
          className="bf-who-we-are-quote-card"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <Quote size={20} className="bf-quote-icon" />
          <p className="bf-quote-text">
            &ldquo;BrandForge shapes bold brand identity into market dominance — a digital marketing agency in Coimbatore built to make you unignorable. We start by understanding your audience, your competition, and the growth you are chasing, pairing sharp strategy with execution that actually ships.&rdquo;
          </p>
          <div className="bf-quote-author">
            <span className="bf-author-name">Mr. BalaMurali &amp; Ms. Banumathy</span>
            <span className="bf-author-tag">Founders &amp; Leadership Squad — BrandForge Agency</span>
          </div>
        </motion.div>

        {/* CTA ACTIONS */}
        <motion.div
          className="bf-modern-action-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <button
            type="button"
            className="bf-btn-primary"
            onClick={onOpenModal}
          >
            <span>Forge Your Brand</span>
            <ArrowRight size={17} />
          </button>

          <button
            type="button"
            className="bf-btn-secondary"
            onClick={scrollToFounders}
          >
            <Users size={16} />
            <span>Meet Our Founders</span>
            <ChevronDown size={17} />
          </button>
        </motion.div>

        {/* SCROLL EXPLORE PROMPT */}
        <motion.button
          type="button"
          className="bf-modern-scroll-down"
          onClick={scrollToFounders}
          aria-label="Scroll to explore founders"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <span className="bf-scroll-lbl">Scroll to Founders Deep-Dive</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={18} />
          </motion.div>
        </motion.button>
      </motion.div>

      <style>{styles}</style>
    </section>
  );
}

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@600;700;800;900&family=Inter:wght@400;500;600;700;800&display=swap');

  .bf-modern-about-root {
    position: relative;
    width: 100%;
    min-height: 100vh;
    min-height: 100svh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #060509;
    overflow: hidden;
    padding: clamp(90px, 11vw, 130px) 24px 50px;
    isolation: isolate;
  }

  /* BACKGROUND ATMOSPHERE */
  .bf-modern-about-bg {
    position: absolute;
    inset: -6%;
    width: 112%;
    height: 112%;
    z-index: 0;
    pointer-events: none;
    will-change: transform;
  }

  .bf-modern-about-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 28%;
    filter: brightness(0.38) contrast(1.12) saturate(1.05);
    opacity: 0.85;
  }

  .bf-modern-about-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(6, 5, 9, 0.82) 0%,
      rgba(6, 5, 9, 0.45) 45%,
      rgba(6, 5, 9, 0.9) 85%,
      #060509 100%
    );
  }

  .bf-modern-about-vignette {
    position: absolute;
    inset: 0;
    background: radial-gradient(
      ellipse at 50% 50%,
      transparent 15%,
      rgba(6, 5, 9, 0.6) 65%,
      #060509 100%
    );
  }

  .bf-modern-about-grid {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(239, 65, 54, 0.08) 1px, transparent 1px);
    background-size: 32px 32px;
    opacity: 0.4;
  }

  /* CONTAINER */
  .bf-modern-about-container {
    position: relative;
    z-index: 2;
    max-width: 1080px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  /* PILL BADGE */
  .bf-modern-about-pill {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    padding: 6px 18px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 999px;
    margin-bottom: clamp(16px, 2.2vw, 22px);
    backdrop-filter: blur(12px);
  }

  .bf-modern-pill-pulse {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #EF4136;
  }

  .bf-modern-pill-text {
    font-family: 'Inter', sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #FFFFFF;
  }

  /* RETICLE STAGE */
  .bf-reticle-hero-stage {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: clamp(20px, 3.5vw, 36px) 0 clamp(14px, 1.8vw, 20px);
    width: 100%;
  }

  .bf-reticle-svg-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: min(620px, 94vw);
    height: min(620px, 94vw);
    z-index: 1;
    pointer-events: none;
    opacity: 0.78;
  }

  .bf-reticle-vector {
    width: 100%;
    height: 100%;
  }

  @keyframes spinCW {
    from { transform: rotate(0deg); transform-origin: 320px 320px; }
    to { transform: rotate(360deg); transform-origin: 320px 320px; }
  }

  @keyframes spinCCW {
    from { transform: rotate(360deg); transform-origin: 260px 260px; }
    to { transform: rotate(0deg); transform-origin: 260px 260px; }
  }

  .bf-svg-spin-cw {
    animation: spinCW 70s linear infinite;
  }

  .bf-svg-spin-ccw {
    animation: spinCCW 50s linear infinite;
  }

  /* LOGO CONTAINER (BORDERLESS & FULLY TRANSPARENT) */
  .bf-modern-logo-card {
    position: relative;
    z-index: 3;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: clamp(14px, 2.2vw, 24px);
    padding: 0;
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    outline: none !important;
    backdrop-filter: none !important;
  }

  .bf-modern-logo-media {
    height: clamp(40px, 6vw, 62px);
    width: auto;
    max-width: min(480px, 86vw);
    object-fit: contain;
    display: block;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
  }

  /* EDITORIAL HERO TITLE */
  .bf-modern-hero-title {
    position: relative;
    z-index: 3;
    font-family: 'Outfit', 'Inter', sans-serif;
    font-size: clamp(3.4rem, 8.8vw, 6.4rem);
    font-weight: 900;
    line-height: 0.95;
    letter-spacing: clamp(0.24em, 0.45em, 0.55em);
    text-transform: uppercase;
    color: #FFFFFF;
    margin: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .bf-title-gap {
    width: 0.4em;
  }

  /* AUTHENTIC QUOTE CARD */
  .bf-who-we-are-quote-card {
    position: relative;
    max-width: 820px;
    margin: 0 auto clamp(24px, 3.5vw, 34px);
    padding: clamp(18px, 3vw, 26px) clamp(22px, 4vw, 36px);
    background: rgba(14, 13, 20, 0.72);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    backdrop-filter: blur(14px);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .bf-quote-icon {
    color: #EF4136;
    margin-bottom: 10px;
  }

  .bf-quote-text {
    font-family: 'Outfit', 'Inter', sans-serif;
    font-size: clamp(1.05rem, 1.45vw, 1.28rem);
    font-weight: 600;
    line-height: 1.65;
    color: #FFFFFF;
    margin: 0 0 14px;
    letter-spacing: -0.01em;
  }

  .bf-quote-author {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
    padding-top: 10px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    width: 100%;
  }

  .bf-author-name {
    font-family: 'Outfit', sans-serif;
    font-size: 13.5px;
    font-weight: 800;
    color: #EF4136;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .bf-author-tag {
    font-family: 'Inter', sans-serif;
    font-size: 11.5px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.6);
  }

  /* ACTIONS ROW */
  .bf-modern-action-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 14px;
    margin-bottom: clamp(28px, 4vw, 42px);
  }

  .bf-btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 14px 30px;
    background: #EF4136;
    color: #FFFFFF;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 700;
    border-radius: 999px;
    border: none;
    cursor: pointer;
    transition: all 0.25s ease;
  }

  .bf-btn-primary:hover {
    background: #d4352b;
    transform: translateY(-2px);
  }

  .bf-btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 14px 26px;
    background: rgba(255, 255, 255, 0.04);
    color: #FFFFFF;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    font-weight: 600;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    cursor: pointer;
    backdrop-filter: blur(10px);
    transition: all 0.25s ease;
  }

  .bf-btn-secondary:hover {
    background: rgba(255, 255, 255, 0.09);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }

  /* SCROLL DOWN BUTTON */
  .bf-modern-scroll-down {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    background: none;
    border: none;
    color: rgba(255, 255, 255, 0.4);
    cursor: pointer;
    transition: color 0.3s ease;
  }

  .bf-modern-scroll-down:hover {
    color: #EF4136;
  }

  .bf-scroll-lbl {
    font-family: 'Inter', sans-serif;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    .bf-modern-hero-title {
      letter-spacing: 0.18em;
    }
    .bf-modern-action-row {
      flex-direction: column;
      width: 100%;
    }
    .bf-btn-primary, .bf-btn-secondary {
      width: 100%;
      justify-content: center;
    }
  }
`;
