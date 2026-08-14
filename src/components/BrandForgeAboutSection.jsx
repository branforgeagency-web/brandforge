import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import {
  Zap,
  TrendingUp,
  Cpu,
  Target,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  Globe,
  BarChart3,
  Flame,
  Award,
  Layers,
} from "lucide-react";

/* ─── DATA DEFINITIONS ─────────────────────────────────────────── */
const STATS = [
  { label: "ROAS ACCELERATION", val: "4.9X", sub: "Avg. Return on Ad Spend Lift", icon: TrendingUp },
  { label: "AI GRID DOMINANCE", val: "+210%", sub: "Generative Search Share", icon: Target },
  { label: "ENGINEERED UX", val: "60 FPS", sub: "Sub-second 3D Web Performance", icon: Cpu },
  { label: "CAPITAL GENERATED", val: "$50M+", sub: "Client Revenue Scaled", icon: Zap },
];

const PILLARS = [
  {
    num: "01",
    title: "GENERATIVE GEO SEARCH",
    tag: "POST-SEARCH ERA",
    desc: "We capture answer-engine grid rankings and train LLM brand signals so your brand dominates AI search results before your competitors even know they exist.",
    stat: "92% AI Answer Grid Capture",
    icon: Globe,
    accent: "#FF4D4D",
  },
  {
    num: "02",
    title: "3D WEBGL PLATFORMS",
    tag: "IMMERSIVE FOUNDRY",
    desc: "Sub-second, cinematic 3D web experiences that stop visitors in their tracks and convert high-ticket enterprise contracts instantly.",
    stat: "3.2x Session Duration Increase",
    icon: Layers,
    accent: "#FFB800",
  },
  {
    num: "03",
    title: "LETHAL PAID MEDIA FUNNELS",
    tag: "HIGH-OCTANE ROAS",
    desc: "Hyper-targeted viral funnels across Meta, Google, TikTok, and Programmatic platforms engineered to scale revenue with zero wasted ad spend.",
    stat: "4.9x Verified ROAS Lift",
    icon: Flame,
    accent: "#FF4D4D",
  },
  {
    num: "04",
    title: "ENTERPRISE BRAND SIGNAL",
    tag: "CATEGORY SUPREMACY",
    desc: "A unified brand architecture combining neuroscience, art direction, and algorithmic precision to turn your brand into an unshakeable market leader.",
    stat: "98% Enterprise Client Retention",
    icon: Award,
    accent: "#FFB800",
  },
];

const TIMELINE = [
  {
    year: "PHASE 01",
    label: "FOUNDATION & DISRUPTION",
    detail: "Built by performance operators tired of slow, pitch-deck-only agencies. Built to execute at sub-second speed.",
  },
  {
    year: "PHASE 02",
    label: "THE ALGORITHMIC ENGINE",
    detail: "Integrated real-time GEO search grid tracking, 3D WebGL foundry, and multi-channel paid funnels under one roof.",
  },
  {
    year: "PHASE 03",
    label: "CATEGORY DOMINANCE",
    detail: "Over $50M in client revenue generated across 340+ enterprise deployments with an industry-leading 98% retention rate.",
  },
];

/* ─── MAIN COMPONENT ───────────────────────────────────────────── */
export default function BrandForgeAboutSection({ onOpenModal }) {
  const containerRef = useRef(null);
  const spotlightRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  // Scroll progress transforms for kinetic text & stage effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });

  // Kinetic marquee transforms
  const tickerX1 = useTransform(smoothProgress, [0, 1], ["0%", "-35%"]);
  const tickerX2 = useTransform(smoothProgress, [0, 1], ["-35%", "0%"]);

  // Mouse spotlight effect
  useEffect(() => {
    const spot = spotlightRef.current;
    const section = containerRef.current;
    if (!spot || !section) return;

    const handleMouseMove = (e) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spot.style.setProperty("--sx", `${x}px`);
      spot.style.setProperty("--sy", `${y}px`);
      spot.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      spot.style.opacity = "0";
    };

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section ref={containerRef} className="bf-about-root" id="about-forge">
      {/* ── MOUSE SPOTLIGHT OVERLAY ─────────────────────────────── */}
      <div ref={spotlightRef} className="bf-about-spotlight" />

      {/* ── AMBIENT NOISE & GRID BACKDROP ───────────────────────── */}
      <div className="bf-about-grid-bg" aria-hidden="true" />

      {/* ── 1. KINETIC SCROLL MARQUEE TICKER ────────────────────── */}
      <div className="bf-kinetic-ticker-wrap">
        <motion.div className="bf-kinetic-ticker-line" style={{ x: tickerX1 }}>
          <span>BRANDFORGE // HIGH-OCTANE ENGINE</span>
          <span className="bf-red-star">✦</span>
          <span>GENERATIVE GEO DOMINANCE</span>
          <span className="bf-red-star">✦</span>
          <span>60 FPS WEBGL UX</span>
          <span className="bf-red-star">✦</span>
          <span>4.9X ROAS LIFT</span>
        </motion.div>
        <motion.div className="bf-kinetic-ticker-line bf-line-reverse" style={{ x: tickerX2 }}>
          <span>UNFAIR ADVANTAGE</span>
          <span className="bf-red-star">✦</span>
          <span>REVENUE ACCELERATION</span>
          <span className="bf-red-star">✦</span>
          <span>CATEGORY SUPREMACY</span>
          <span className="bf-red-star">✦</span>
          <span>FORGE MARKET DOMINANCE</span>
        </motion.div>
      </div>

      {/* ── 2. HERO HEADLINE & INTRO STATEMENT ──────────────────── */}
      <div className="bf-about-header-container">
        <motion.div
          className="bf-about-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bf-eyebrow-badge">
            <span className="bf-eyebrow-dot" />
            ABOUT BRANDFORGE AGENCY
          </span>
          <span className="bf-eyebrow-code">SYSTEM v4.8 // ENTERPRISE READY</span>
        </motion.div>

        <motion.h2
          className="bf-about-main-title"
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          WE BUILD THE DIGITAL PATH.
          <br />
          <span className="bf-text-gradient">YOU CONQUER THE SUMMIT.</span>
        </motion.h2>

        <motion.p
          className="bf-about-lead-p"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          BrandForge is the high-octane digital marketing engine purpose-built for enterprise brands ready to break through noise, capture Generative AI search grids, and compound revenue with algorithmic precision.
        </motion.p>
      </div>

      {/* ── 3. SCROLL-ANIMATED STATS MATRIX ─────────────────────── */}
      <div className="bf-stats-matrix-wrap">
        <div className="bf-stats-grid">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="bf-stat-card-3d"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="bf-stat-card-header">
                  <span className="bf-stat-icon-wrap">
                    <Icon size={20} />
                  </span>
                  <span className="bf-stat-code">0{i + 1}</span>
                </div>
                <div className="bf-stat-value">{stat.val}</div>
                <div className="bf-stat-label">{stat.label}</div>
                <div className="bf-stat-sub">{stat.sub}</div>
                <div className="bf-stat-shimmer" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── 4. INTERACTIVE PILLARS SHOWCASE (TABS / CARDS) ──────── */}
      <div className="bf-pillars-section">
        <motion.div
          className="bf-section-tag-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <span className="bf-tag-label">FOUR FORCES OF DOMINANCE</span>
        </motion.div>

        <div className="bf-pillars-grid">
          {/* Left Navigation Tabs */}
          <div className="bf-pillars-tabs">
            {PILLARS.map((item, idx) => {
              const Icon = item.icon;
              const isActive = idx === activeTab;
              return (
                <motion.button
                  key={item.num}
                  type="button"
                  className={`bf-pillar-tab-btn ${isActive ? "is-active" : ""}`}
                  onClick={() => setActiveTab(idx)}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="bf-tab-num">{item.num}</span>
                  <span className="bf-tab-icon">
                    <Icon size={18} />
                  </span>
                  <span className="bf-tab-title">{item.title}</span>
                  {isActive && (
                    <motion.div
                      className="bf-tab-active-indicator"
                      layoutId="activePillarTab"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Right Display Panel */}
          <div className="bf-pillars-display">
            <AnimatePresence mode="wait">
              {(() => {
                const current = PILLARS[activeTab];
                const Icon = current.icon;
                return (
                  <motion.div
                    key={current.num}
                    className="bf-pillar-display-card"
                    initial={{ opacity: 0, x: 40, filter: "blur(8px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: -40, filter: "blur(8px)" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="bf-card-badge-row">
                      <span className="bf-card-tag">{current.tag}</span>
                      <span className="bf-card-num">{current.num} // 04</span>
                    </div>

                    <div className="bf-card-headline-row">
                      <span className="bf-card-icon-big">
                        <Icon size={32} />
                      </span>
                      <h3>{current.title}</h3>
                    </div>

                    <p className="bf-card-desc">{current.desc}</p>

                    <div className="bf-card-stat-pill">
                      <span className="bf-pill-pulse-dot" />
                      <span>{current.stat}</span>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ── 5. SCROLL TIMELINE PIPELINE ─────────────────────────── */}
      <div className="bf-timeline-section">
        <motion.div
          className="bf-timeline-title-wrap"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <span className="bf-tag-label">OUR GROWTH PIPELINE</span>
          <h2>ENGINEERED FOR HIGH-OCTANE RESULTS</h2>
        </motion.div>

        <div className="bf-timeline-track">
          <div className="bf-timeline-line" />

          {TIMELINE.map((step, idx) => (
            <motion.div
              key={step.year}
              className="bf-timeline-step"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.6, delay: idx * 0.18 }}
            >
              <div className="bf-step-node">
                <span className="bf-node-dot" />
              </div>
              <div className="bf-step-content">
                <div className="bf-step-phase">{step.year}</div>
                <h4 className="bf-step-label">{step.label}</h4>
                <p className="bf-step-detail">{step.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── 6. BOTTOM ACTION CTA STRIP ──────────────────────────── */}
      <motion.div
        className="bf-about-cta-banner"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <div className="bf-cta-banner-bg" />
        <div className="bf-cta-banner-content">
          <span className="bf-cta-eyebrow">READY TO FORGE MARKET SUPREMACY?</span>
          <h3>Let's build a digital presence your competitors can't ignore.</h3>
          <button
            type="button"
            className="bf-cta-fire-btn"
            onClick={onOpenModal}
          >
            <span>Launch Transformation</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </motion.div>

      <style>{styles}</style>
    </section>
  );
}

/* ─── STYLES ────────────────────────────────────────────────────── */
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

  * { box-sizing: border-box; }

  .bf-about-root {
    --bg: #060509;
    --card: #0e0b12;
    --red: #FF4D4D;
    --red-glow: rgba(255, 77, 77, 0.15);
    --gold: #FFB800;
    --text-white: #ffffff;
    --text-muted: rgba(255, 255, 255, 0.50);
    --line: rgba(255, 255, 255, 0.08);

    position: relative;
    width: 100%;
    overflow: hidden;
    background: var(--bg);
    color: var(--text-white);
    font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
    padding: clamp(60px, 8vw, 120px) clamp(20px, 4vw, 64px);
  }

  /* Spotlight effect */
  .bf-about-spotlight {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.4s ease;
    background: radial-gradient(
      600px circle at var(--sx, 50%) var(--sy, 50%),
      rgba(255, 77, 77, 0.08),
      transparent 70%
    );
  }

  /* Grid backdrop */
  .bf-about-grid-bg {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    opacity: 0.04;
    background-image:
      linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
    background-size: 60px 60px;
  }

  .bf-about-root > *:not(.bf-about-spotlight):not(.bf-about-grid-bg) {
    position: relative;
    z-index: 2;
  }

  /* ── 1. Kinetic Marquee Ticker ───────────────────────────────── */
  .bf-kinetic-ticker-wrap {
    width: 100%;
    overflow: hidden;
    margin-bottom: clamp(40px, 6vw, 80px);
    display: flex;
    flex-direction: column;
    gap: 12px;
    user-select: none;
  }

  .bf-kinetic-ticker-line {
    display: flex;
    align-items: center;
    gap: 32px;
    white-space: nowrap;
    font-size: clamp(24px, 4.5vw, 64px);
    font-weight: 900;
    letter-spacing: -0.03em;
    color: rgba(255, 255, 255, 0.06);
    text-transform: uppercase;
    will-change: transform;
  }

  .bf-red-star {
    color: var(--red);
    font-size: 0.6em;
  }

  /* ── 2. Header Container ────────────────────────────────────── */
  .bf-about-header-container {
    max-width: 1100px;
    margin: 0 auto clamp(60px, 8vw, 100px);
    text-align: center;
  }

  .bf-about-eyebrow {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-bottom: 24px;
    flex-wrap: wrap;
  }

  .bf-eyebrow-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 14px;
    background: rgba(255, 77, 77, 0.10);
    border: 1px solid rgba(255, 77, 77, 0.3);
    border-radius: 999px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.12em;
    color: var(--red);
    text-transform: uppercase;
  }

  .bf-eyebrow-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--red);
    box-shadow: 0 0 0 4px rgba(255, 77, 77, 0.2);
    animation: bf-pulse 2s ease-in-out infinite;
  }

  .bf-eyebrow-code {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.10em;
    color: var(--text-muted);
  }

  .bf-about-main-title {
    margin: 0 0 24px;
    font-size: clamp(36px, 5.5vw, 84px);
    font-weight: 900;
    line-height: 0.98;
    letter-spacing: -0.045em;
    color: var(--text-white);
  }

  .bf-text-gradient {
    background: linear-gradient(135deg, #ffffff 0%, #FF4D4D 60%, #FFB800 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .bf-about-lead-p {
    max-width: 720px;
    margin: 0 auto;
    font-size: clamp(15px, 1.2vw, 18px);
    font-weight: 400;
    line-height: 1.75;
    color: var(--text-muted);
  }

  /* ── 3. Stats Matrix ───────────────────────────────────────── */
  .bf-stats-matrix-wrap {
    max-width: 1240px;
    margin: 0 auto clamp(80px, 10vw, 130px);
  }

  .bf-stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  .bf-stat-card-3d {
    position: relative;
    padding: 32px 24px;
    background: var(--card);
    border: 1px solid var(--line);
    border-radius: 24px;
    overflow: hidden;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  }

  .bf-stat-card-3d:hover {
    border-color: rgba(255, 77, 77, 0.35);
    box-shadow: 0 0 40px rgba(255, 77, 77, 0.12), 0 24px 60px rgba(0, 0, 0, 0.6);
  }

  .bf-stat-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
  }

  .bf-stat-icon-wrap {
    display: grid;
    place-items: center;
    width: 42px;
    height: 42px;
    background: rgba(255, 77, 77, 0.10);
    border: 1px solid rgba(255, 77, 77, 0.25);
    border-radius: 12px;
    color: var(--red);
  }

  .bf-stat-code {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.10em;
    color: var(--text-muted);
  }

  .bf-stat-value {
    font-size: clamp(38px, 4vw, 56px);
    font-weight: 900;
    line-height: 1;
    letter-spacing: -0.04em;
    color: var(--text-white);
    margin-bottom: 12px;
  }

  .bf-stat-label {
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.04em;
    color: var(--red);
    text-transform: uppercase;
    margin-bottom: 6px;
  }

  .bf-stat-sub {
    font-size: 11px;
    color: var(--text-muted);
    line-height: 1.4;
  }

  .bf-stat-shimmer {
    position: absolute;
    top: 0; right: 0; bottom: 0; width: 1px;
    background: linear-gradient(to bottom, transparent, rgba(255,77,77,0.3), transparent);
  }

  /* ── 4. Pillars Showcase ────────────────────────────────────── */
  .bf-pillars-section {
    max-width: 1240px;
    margin: 0 auto clamp(80px, 10vw, 130px);
  }

  .bf-section-tag-wrap {
    margin-bottom: 32px;
    text-align: center;
  }

  .bf-tag-label {
    display: inline-block;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.18em;
    color: var(--red);
    text-transform: uppercase;
  }

  .bf-pillars-grid {
    display: grid;
    grid-template-columns: 340px 1fr;
    gap: 24px;
    align-items: stretch;
  }

  .bf-pillars-tabs {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .bf-pillar-tab-btn {
    position: relative;
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 20px 24px;
    background: var(--card);
    border: 1px solid var(--line);
    border-radius: 18px;
    color: var(--text-muted);
    font-family: inherit;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.02em;
    cursor: pointer;
    text-align: left;
    transition: color 0.25s ease, border-color 0.25s ease, background 0.25s ease;
    overflow: hidden;
  }

  .bf-pillar-tab-btn:hover {
    color: var(--text-white);
    border-color: rgba(255, 255, 255, 0.16);
  }

  .bf-pillar-tab-btn.is-active {
    color: var(--text-white);
    background: #140f1a;
    border-color: rgba(255, 77, 77, 0.35);
  }

  .bf-tab-num {
    font-size: 12px;
    font-weight: 800;
    color: var(--red);
    flex: 0 0 auto;
  }

  .bf-tab-icon {
    color: var(--text-muted);
    flex: 0 0 auto;
    transition: color 0.25s ease;
  }

  .bf-pillar-tab-btn.is-active .bf-tab-icon {
    color: var(--red);
  }

  .bf-tab-title {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .bf-tab-active-indicator {
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 4px;
    background: var(--red);
    border-radius: 0 4px 4px 0;
  }

  /* Display card */
  .bf-pillars-display {
    position: relative;
    min-height: 380px;
  }

  .bf-pillar-display-card {
    height: 100%;
    padding: clamp(32px, 5vw, 56px);
    background: var(--card);
    border: 1px solid var(--line);
    border-radius: 28px;
    box-shadow: 0 24px 70px rgba(0,0,0,0.5);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .bf-card-badge-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 28px;
  }

  .bf-card-tag {
    padding: 6px 14px;
    background: rgba(255, 77, 77, 0.12);
    border: 1px solid rgba(255, 77, 77, 0.3);
    border-radius: 999px;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.14em;
    color: var(--red);
    text-transform: uppercase;
  }

  .bf-card-num {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.10em;
    color: var(--text-muted);
  }

  .bf-card-headline-row {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;
  }

  .bf-card-icon-big {
    display: grid;
    place-items: center;
    width: 56px;
    height: 56px;
    background: rgba(255, 77, 77, 0.10);
    border: 1px solid rgba(255, 77, 77, 0.3);
    border-radius: 16px;
    color: var(--red);
    flex: 0 0 auto;
  }

  .bf-card-headline-row h3 {
    margin: 0;
    font-size: clamp(22px, 2.5vw, 34px);
    font-weight: 900;
    letter-spacing: -0.03em;
    color: var(--text-white);
  }

  .bf-card-desc {
    margin: 0 0 32px;
    font-size: clamp(14px, 1.15vw, 17px);
    line-height: 1.75;
    color: var(--text-muted);
    max-width: 680px;
  }

  .bf-card-stat-pill {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 10px 18px;
    background: rgba(255, 77, 77, 0.08);
    border: 1px solid rgba(255, 77, 77, 0.25);
    border-radius: 12px;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.06em;
    color: var(--red);
    align-self: flex-start;
  }

  .bf-pill-pulse-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--red);
    box-shadow: 0 0 0 4px rgba(255, 77, 77, 0.2);
    animation: bf-pulse 2s ease-in-out infinite;
  }

  /* ── 5. Timeline Track ──────────────────────────────────────── */
  .bf-timeline-section {
    max-width: 900px;
    margin: 0 auto clamp(80px, 10vw, 130px);
  }

  .bf-timeline-title-wrap {
    text-align: center;
    margin-bottom: 48px;
  }

  .bf-timeline-title-wrap h2 {
    margin: 12px 0 0;
    font-size: clamp(26px, 3.5vw, 44px);
    font-weight: 900;
    letter-spacing: -0.03em;
  }

  .bf-timeline-track {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding-left: 32px;
  }

  .bf-timeline-line {
    position: absolute;
    left: 7px; top: 0; bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, var(--red), rgba(255,77,77,0.1));
  }

  .bf-timeline-step {
    position: relative;
    display: flex;
    gap: 20px;
    align-items: flex-start;
  }

  .bf-step-node {
    position: absolute;
    left: -32px;
    top: 4px;
    width: 16px;
    height: 16px;
    display: grid;
    place-items: center;
  }

  .bf-node-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--red);
    box-shadow: 0 0 0 4px rgba(255, 77, 77, 0.2);
  }

  .bf-step-content {
    background: var(--card);
    border: 1px solid var(--line);
    border-radius: 20px;
    padding: 24px 28px;
    width: 100%;
  }

  .bf-step-phase {
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.16em;
    color: var(--red);
    text-transform: uppercase;
    margin-bottom: 6px;
  }

  .bf-step-label {
    margin: 0 0 10px;
    font-size: 18px;
    font-weight: 800;
    letter-spacing: -0.02em;
    color: var(--text-white);
  }

  .bf-step-detail {
    margin: 0;
    font-size: 14px;
    line-height: 1.65;
    color: var(--text-muted);
  }

  /* ── 6. Bottom Action Banner ────────────────────────────────── */
  .bf-about-cta-banner {
    position: relative;
    max-width: 1240px;
    margin: 0 auto;
    padding: clamp(40px, 6vw, 72px) clamp(28px, 5vw, 64px);
    border-radius: 32px;
    overflow: hidden;
    background: linear-gradient(135deg, #140b12 0%, #0e0910 50%, #1a0808 100%);
    border: 1px solid rgba(255, 77, 77, 0.25);
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6);
  }

  .bf-cta-banner-bg {
    position: absolute;
    top: -100px; right: -100px;
    width: 350px; height: 350px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 77, 77, 0.20), transparent 70%);
    pointer-events: none;
  }

  .bf-cta-banner-content {
    position: relative;
    z-index: 2;
    max-width: 780px;
  }

  .bf-cta-eyebrow {
    display: inline-block;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.18em;
    color: var(--red);
    margin-bottom: 14px;
  }

  .bf-cta-banner-content h3 {
    margin: 0 0 32px;
    font-size: clamp(24px, 3.5vw, 46px);
    font-weight: 900;
    line-height: 1.1;
    letter-spacing: -0.035em;
    color: var(--text-white);
  }

  .bf-cta-fire-btn {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 18px 36px;
    background: var(--red);
    border: 0;
    border-radius: 16px;
    color: white;
    font-family: inherit;
    font-size: 14px;
    font-weight: 800;
    letter-spacing: 0.02em;
    cursor: pointer;
    box-shadow: 0 10px 30px rgba(255, 77, 77, 0.35);
    transition: background 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
  }

  .bf-cta-fire-btn:hover {
    background: #e83838;
    transform: translateY(-3px);
    box-shadow: 0 16px 40px rgba(255, 77, 77, 0.5);
  }

  /* ── Keyframes ──────────────────────────────────────────────── */
  @keyframes bf-pulse {
    0%, 100% { box-shadow: 0 0 0 4px rgba(255, 77, 77, 0.2); }
    50%       { box-shadow: 0 0 0 8px rgba(255, 77, 77, 0.05); }
  }

  /* ── Responsive ─────────────────────────────────────────────── */
  @media (max-width: 1024px) {
    .bf-stats-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .bf-pillars-grid {
      grid-template-columns: 1fr;
    }

    .bf-pillars-tabs {
      flex-direction: row;
      overflow-x: auto;
      padding-bottom: 8px;
    }

    .bf-pillar-tab-btn {
      flex: 0 0 auto;
      padding: 14px 18px;
    }

    .bf-tab-active-indicator {
      left: 0; top: auto; bottom: 0; right: 0;
      width: auto; height: 3px;
      border-radius: 3px 3px 0 0;
    }
  }

  @media (max-width: 600px) {
    .bf-stats-grid {
      grid-template-columns: 1fr;
    }

    .bf-about-root {
      padding: 48px 16px;
    }

    .bf-about-main-title {
      font-size: clamp(32px, 10vw, 48px);
    }

    .bf-stat-value {
      font-size: 38px;
    }

    .bf-pillar-display-card {
      padding: 24px 18px;
    }

    .bf-cta-fire-btn {
      width: 100%;
      justify-content: center;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .bf-about-root *,
    .bf-about-root *::before,
    .bf-about-root *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
`;
