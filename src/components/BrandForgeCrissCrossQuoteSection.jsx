import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const PARAGRAPH_WORDS = [
  { text: "BrandForge", highlight: true, red: true },
  { text: "is", highlight: false },
  { text: "the", highlight: false },
  { text: "high-octane", highlight: true, red: true },
  { text: "digital", highlight: true, red: true },
  { text: "marketing", highlight: true, red: true },
  { text: "engine", highlight: true, red: true },
  { text: "purpose-built", highlight: false },
  { text: "for", highlight: false },
  { text: "enterprise", highlight: true },
  { text: "brands", highlight: true },
  { text: "ready", highlight: false },
  { text: "to", highlight: false },
  { text: "capture", highlight: true },
  { text: "Generative", highlight: true, red: true },
  { text: "AI", highlight: true, red: true },
  { text: "search", highlight: true, red: true },
  { text: "grids,", highlight: true, red: true },
  { text: "engineer", highlight: false },
  { text: "sub-second", highlight: true },
  { text: "3D", highlight: true, red: true },
  { text: "WebGL", highlight: true, red: true },
  { text: "experiences,", highlight: true },
  { text: "and", highlight: false },
  { text: "compound", highlight: true },
  { text: "revenue", highlight: true, red: true },
  { text: "with", highlight: false },
  { text: "algorithmic", highlight: true, red: true },
  { text: "precision.", highlight: true, red: true },
];

export default function BrandForgeCrissCrossQuoteSection({ onOpenModal }) {
  const containerRef = useRef(null);

  // Track scroll progress through this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth out the scroll progress for sleek movement
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 18,
    restDelta: 0.001,
  });

  // Dynamic scroll motion for the red background spotlight cone & glow
  const coneX = useTransform(smoothProgress, [0, 1], ["350px", "-350px"]);
  const coneSkew = useTransform(smoothProgress, [0, 1], ["-20deg", "20deg"]);
  const coneScale = useTransform(smoothProgress, [0, 1], [0.85, 1.3]);
  const glowY = useTransform(smoothProgress, [0, 1], ["150px", "-150px"]);

  return (
    <section ref={containerRef} className="bf-highlighted-root" id="about-highlighted">
      {/* ── DYNAMIC SCROLL ANIMATED RED SPOTLIGHT CONE (LIKE SCREENSHOT) ── */}
      <motion.div
        className="bf-spotlight-cone"
        style={{ x: coneX, skewX: coneSkew, scale: coneScale }}
        aria-hidden="true"
      />
      <motion.div
        className="bf-ambient-glow"
        style={{ y: glowY, scale: coneScale }}
        aria-hidden="true"
      />

      {/* ── MAIN HIGHLIGHTED TEXT CONTAINER ── */}
      <div className="bf-highlighted-content">
        <motion.div
          className="bf-about-badge"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bf-badge-dot" />
          <span>ABOUT BRANDFORGE</span>
        </motion.div>

        {/* Highlighted Paragraph Text Block */}
        <div className="bf-highlighted-para">
          {PARAGRAPH_WORDS.map((w, idx) => {
            const start = idx / PARAGRAPH_WORDS.length;
            const end = (idx + 1.5) / PARAGRAPH_WORDS.length;

            return (
              <WordItem
                key={`${w.text}-${idx}`}
                word={w}
                progress={smoothProgress}
                range={[start, end]}
              />
            );
          })}
        </div>

        {/* CTA Trigger Button */}
        <motion.div
          className="bf-cta-wrap"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <button
            type="button"
            className="bf-trigger-btn"
            onClick={onOpenModal}
          >
            <span>LAUNCH TRANSFORMATION</span>
            <span className="bf-btn-arrow">→</span>
          </button>
        </motion.div>
      </div>

      <style>{styles}</style>
    </section>
  );
}

/* Helper Word Component for Scroll-Driven Word Highlighting */
function WordItem({ word, progress, range }) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const y = useTransform(progress, range, [12, 0]);

  return (
    <motion.span
      className={`bf-word-span ${word.red ? "is-red" : word.highlight ? "is-white" : "is-dim"}`}
      style={{ opacity, y }}
    >
      {word.text}&nbsp;
    </motion.span>
  );
}

/* ─── STYLES ────────────────────────────────────────────────────── */
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@700;800;900&family=Inter:wght@400;500;600;700;800&display=swap');

  .bf-highlighted-root {
    --bg: #060509;
    --red: #EF4136;
    --white: #FFFFFF;
    --dim: rgba(255, 255, 255, 0.25);

    position: relative;
    width: 100%;
    min-height: 100svh;
    background: var(--bg);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: clamp(80px, 10vw, 140px) 0;
    overflow: hidden;
    isolation: isolate;
  }

  /* Background Spotlight Cone & Ambient Glow */
  .bf-spotlight-cone {
    position: absolute;
    top: 0;
    right: -10%;
    width: 65vw;
    height: 100%;
    background: linear-gradient(135deg, rgba(239, 65, 54, 0.85) 0%, rgba(191, 52, 43, 0.95) 100%);
    clip-path: polygon(100% 0, 0 100%, 100% 100%);
    z-index: 1;
    opacity: 0.85;
    pointer-events: none;
  }

  .bf-ambient-glow {
    position: absolute;
    bottom: -100px; right: -100px;
    width: 500px; height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(239, 65, 54, 0.4), transparent 70%);
    filter: blur(80px);
    z-index: 1;
    pointer-events: none;
  }

  /* Main Container */
  .bf-highlighted-content {
    position: relative;
    z-index: 2;
    max-width: 1180px;
    margin: 0 auto;
    padding: 0 clamp(24px, 5vw, 64px);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  /* Badge */
  .bf-about-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 18px;
    background: rgba(239, 65, 54, 0.12);
    border: 1px solid rgba(239, 65, 54, 0.35);
    border-radius: 999px;
    font-family: "Inter", sans-serif;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.16em;
    color: var(--red);
    text-transform: uppercase;
    margin-bottom: clamp(32px, 5vw, 48px);
  }

  .bf-badge-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--red);
    box-shadow: 0 0 10px var(--red);
  }

  /* Highlighted Paragraph Block */
  .bf-highlighted-para {
    font-family: "Outfit", "Inter", sans-serif;
    font-size: clamp(2rem, 4.2vw, 4.2rem);
    font-weight: 900;
    line-height: 1.18;
    letter-spacing: -0.03em;
    text-align: center;
    text-transform: uppercase;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: clamp(40px, 6vw, 64px);
  }

  .bf-word-span {
    display: inline-block;
    will-change: opacity, transform;
    transition: text-shadow 0.3s ease;
  }

  .bf-word-span.is-red {
    color: var(--white);
    text-shadow: 0 0 25px rgba(239, 65, 54, 0.8), 0 0 50px rgba(239, 65, 54, 0.4);
  }

  .bf-word-span.is-white {
    color: var(--white);
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
  }

  .bf-word-span.is-dim {
    color: rgba(255, 255, 255, 0.7);
  }

  /* CTA Button */
  .bf-cta-wrap {
    display: flex;
    justify-content: center;
  }

  .bf-trigger-btn {
    display: inline-flex;
    align-items: center;
    gap: 14px;
    padding: 18px 42px;
    background: #FFFFFF;
    color: #060509;
    border: 0;
    border-radius: 999px;
    font-family: "Inter", sans-serif;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.10em;
    text-transform: uppercase;
    cursor: pointer;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  }

  .bf-trigger-btn:hover {
    background: var(--red);
    color: #FFFFFF;
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 16px 40px rgba(239, 65, 54, 0.4);
  }

  .bf-btn-arrow {
    font-size: 16px;
    transition: transform 0.3s ease;
  }

  .bf-trigger-btn:hover .bf-btn-arrow {
    transform: translateX(4px);
  }

  /* Mobile Adjustments */
  @media (max-width: 768px) {
    .bf-spotlight-cone {
      width: 90vw;
      right: -20%;
    }

    .bf-highlighted-para {
      font-size: clamp(1.5rem, 6.5vw, 2.5rem);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .bf-word-span {
      opacity: 1 !important;
      transform: none !important;
    }
  }
`;
