import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Target, Zap, Shield, Rocket, Flame } from "lucide-react";

/* ─── VALUES DATA (ADAPTED FROM NOOZI SECTION 2) ─────────────────── */
const VALUES = [
  {
    icon: Flame,
    title: "INNOVATION",
    desc: "We constantly explore new techniques, tools, and generative AI search algorithms to keep your brand ahead of the curve.",
  },
  {
    icon: Target,
    title: "PRECISION",
    desc: "Every pixel, every sub-second frame, every ad dollar matters. We obsess over measurable revenue quality in everything we build.",
  },
  {
    icon: Zap,
    title: "COLLABORATION",
    desc: "Great work happens when visionary enterprise leaders and elite digital operators unite with a shared obsession for market dominance.",
  },
];

export default function NooziMissionSection({ onOpenModal }) {
  return (
    <section className="noozi-mission-root" id="mission">
      {/* ── SECTION 2 MAIN GRID: OUR MISSION ────────────────────────── */}
      <div className="noozi-container">
        <div className="noozi-mission-grid">
          {/* Left Column: Text & Headline */}
          <motion.div
            className="noozi-mission-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="noozi-eyebrow">OUR MISSION</span>
            <h2 className="noozi-title">
              PUSHING <br />
              DIGITAL <br />
              <span className="noozi-title-highlight">BOUNDARIES</span>
            </h2>
            <p className="noozi-p-lead">
              We believe in the power of algorithmic precision and high-octane design to transform enterprise brands and dominate digital markets. Our mission is to craft visual and performance experiences that don't just look good—they capture search grids, evoke emotion, and drive compounding revenue.
            </p>
            <p className="noozi-p-sub">
              Every deployment is an opportunity to push boundaries, challenge legacy agency conventions, and forge something truly extraordinary.
            </p>

            <motion.button
              type="button"
              className="noozi-cta-btn"
              onClick={onOpenModal}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Explore The Engine</span>
              <Rocket size={16} />
            </motion.button>
          </motion.div>

          {/* Right Column: Visual Showcase Card */}
          <motion.div
            className="noozi-mission-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="noozi-card-aspect">
              <div className="noozi-card-bg-gradient" />
              <div className="noozi-card-glow-orb" />
              <div className="noozi-card-center-icon">
                <Sparkles className="noozi-big-icon" size={80} />
              </div>

              {/* Floating badges */}
              <div className="noozi-floating-badge badge-top">
                <span className="badge-dot" />
                <span>60 FPS WebGL Foundry</span>
              </div>
              <div className="noozi-floating-badge badge-bottom">
                <Shield size={14} className="badge-icon-red" />
                <span>Generative AI Search Engine</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── SUB-SECTION: OUR VALUES / WHAT DRIVES US ────────────────── */}
        <div className="noozi-values-wrap">
          <motion.div
            className="noozi-values-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="noozi-eyebrow">OUR VALUES</span>
            <h3 className="noozi-values-title">WHAT DRIVES US</h3>
          </motion.div>

          <div className="noozi-values-grid">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  className="noozi-value-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6 }}
                >
                  <div className="noozi-val-icon-box">
                    <Icon size={24} />
                  </div>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{styles}</style>
    </section>
  );
}

/* ─── STYLES (NOOZI STYLES ADAPTED FOR BRANDFORGE DARK PALETTE) ─── */
const styles = `
  .noozi-mission-root {
    --bg-dark: #060509;
    --card-bg: #0d0a13;
    --red: #FF4D4D;
    --white: #ffffff;
    --muted: rgba(255, 255, 255, 0.6);
    --border: rgba(255, 255, 255, 0.08);

    position: relative;
    width: 100%;
    background: var(--bg-dark);
    color: var(--white);
    font-family: "Inter", "Poppins", sans-serif;
    padding: clamp(60px, 8vw, 120px) 0;
    overflow: hidden;
    border-top: 1px solid rgba(255, 77, 77, 0.15);
  }

  .noozi-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 clamp(20px, 5vw, 64px);
  }

  /* Grid Layout */
  .noozi-mission-grid {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: clamp(32px, 6vw, 64px);
    align-items: center;
    margin-bottom: clamp(80px, 10vw, 120px);
  }

  /* Left Column */
  .noozi-eyebrow {
    display: block;
    color: var(--red);
    font-size: clamp(12px, 1.2vw, 14px);
    font-weight: 700;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  .noozi-title {
    font-family: "Outfit", "Barlow Condensed", sans-serif;
    font-size: clamp(40px, 5.5vw, 72px);
    font-weight: 900;
    font-style: italic;
    line-height: 1.02;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: var(--white);
    margin: 0 0 24px;
  }

  .noozi-title-highlight {
    color: var(--red);
  }

  .noozi-p-lead {
    color: var(--muted);
    font-size: clamp(15px, 1.2vw, 18px);
    line-height: 1.75;
    margin-bottom: 16px;
  }

  .noozi-p-sub {
    color: rgba(255, 255, 255, 0.45);
    font-size: clamp(14px, 1.1vw, 16px);
    line-height: 1.7;
    margin-bottom: 32px;
  }

  .noozi-cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 14px 28px;
    background: rgba(255, 77, 77, 0.12);
    border: 1px solid rgba(255, 77, 77, 0.4);
    border-radius: 999px;
    color: var(--red);
    font-family: inherit;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    cursor: pointer;
    transition: background 0.3s ease, border-color 0.3s ease, color 0.3s ease;
  }

  .noozi-cta-btn:hover {
    background: var(--red);
    border-color: var(--red);
    color: #ffffff;
  }

  /* Right Column Visual Card */
  .noozi-mission-right {
    position: relative;
    width: 100%;
  }

  .noozi-card-aspect {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid var(--border);
    border-radius: 24px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  }

  .noozi-card-bg-gradient {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255, 77, 77, 0.15) 0%, rgba(6, 5, 9, 0.8) 100%);
    z-index: 1;
  }

  .noozi-card-glow-orb {
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 77, 77, 0.35), transparent 70%);
    filter: blur(30px);
    z-index: 1;
  }

  .noozi-card-center-icon {
    position: relative;
    z-index: 2;
    color: rgba(255, 77, 77, 0.4);
    animation: noozi-pulse 4s ease-in-out infinite;
  }

  .noozi-floating-badge {
    position: absolute;
    z-index: 3;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    background: rgba(13, 10, 19, 0.85);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 14px;
    font-size: 12px;
    font-weight: 600;
    color: var(--white);
  }

  .badge-top {
    top: 24px;
    left: 24px;
  }

  .badge-bottom {
    bottom: 24px;
    right: 24px;
  }

  .badge-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #00FF87;
    box-shadow: 0 0 8px #00FF87;
  }

  .badge-icon-red {
    color: var(--red);
  }

  /* Values Sub-Section */
  .noozi-values-wrap {
    width: 100%;
  }

  .noozi-values-header {
    text-align: center;
    margin-bottom: 48px;
  }

  .noozi-values-title {
    font-family: "Outfit", "Barlow Condensed", sans-serif;
    font-size: clamp(32px, 4vw, 52px);
    font-weight: 900;
    font-style: italic;
    text-transform: uppercase;
    letter-spacing: -0.02em;
    margin: 8px 0 0;
  }

  .noozi-values-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: clamp(20px, 3vw, 32px);
  }

  .noozi-value-card {
    padding: 36px 28px;
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 20px;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }

  .noozi-value-card:hover {
    border-color: rgba(255, 77, 77, 0.4);
    box-shadow: 0 0 30px rgba(255, 77, 77, 0.12);
  }

  .noozi-val-icon-box {
    display: grid;
    place-items: center;
    width: 48px;
    height: 48px;
    background: rgba(255, 77, 77, 0.10);
    border: 1px solid rgba(255, 77, 77, 0.25);
    border-radius: 14px;
    color: var(--red);
    margin-bottom: 20px;
  }

  .noozi-value-card h4 {
    margin: 0 0 12px;
    font-size: 18px;
    font-weight: 800;
    letter-spacing: 0.04em;
    color: var(--white);
  }

  .noozi-value-card p {
    margin: 0;
    font-size: 14px;
    line-height: 1.65;
    color: var(--muted);
  }

  @keyframes noozi-pulse {
    0%, 100% { transform: scale(1); opacity: 0.4; }
    50% { transform: scale(1.1); opacity: 0.8; }
  }

  /* Responsive */
  @media (max-width: 900px) {
    .noozi-mission-grid {
      grid-template-columns: 1fr;
    }

    .noozi-values-grid {
      grid-template-columns: 1fr;
    }
  }
`;
