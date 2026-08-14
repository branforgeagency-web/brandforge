"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, ArrowRight, ShieldCheck, TrendingUp, Calculator, Sparkles, Radio, CheckCircle2 } from "lucide-react";

// ULTRA-SMOOTH CUBIC BEZIER EASING CURVE
const SMOOTH_EASE = [0.16, 1, 0.3, 1];

export default function BrandForgeBannerSection({ onOpenModal }) {
  const [adSpend, setAdSpend] = useState(25000);
  const [showCalcModal, setShowCalcModal] = useState(false);

  // Projected metrics calculation based on spend
  const projectedRoas = 4.9;
  const projectedRevenue = Math.round(adSpend * projectedRoas);
  const projectedLeads = Math.round(adSpend / 14);

  return (
    <section id="banner-section" className="bf-banner-section">
      <style>{styles}</style>

      {/* AMBIENT NEON GLOW AURAS & CYBER GRID */}
      <div className="banner-red-aura" />
      <div className="banner-gold-aura" />
      <div className="banner-cyber-grid" />

      <div className="banner-container">
        
        {/* MAIN CREATIVE BANNER CARD WITH RE-TRIGGERING VIEWPORT MOTION */}
        <motion.div
          className="bf-banner-hero-card"
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.9, ease: SMOOTH_EASE }}
        >
          {/* LASER SCANNER LINE ACROSS BANNER */}
          <div className="banner-laser-line" />

          {/* TOP LIVE PULSE BADGE */}
          <div className="banner-header-row">
            <motion.div
              className="banner-live-pill"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1, ease: SMOOTH_EASE }}
            >
              <Radio size={13} className="pill-pulse-icon" />
              <span>🔥 LIMITED Q3 AGENCY CAPACITY // ONLY 3 SLOTS REMAINING</span>
            </motion.div>

            <motion.div
              className="banner-revenue-badge"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.15, ease: SMOOTH_EASE }}
            >
              <TrendingUp size={13} className="trending-icon" />
              <span>$148,920,400+ CLIENT REVENUE GENERATED</span>
            </motion.div>
          </div>

          {/* TWO COLUMN GRID CONTENT */}
          <div className="banner-main-grid">
            
            {/* LEFT COLUMN: HEADLINE, COPY & ACTION BUTTONS */}
            <div className="banner-left-content">
              <motion.h2
                className="banner-headline"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.85, delay: 0.2, ease: SMOOTH_EASE }}
              >
                READY TO FORGE <span className="text-crimson-glow">MARKET SUPREMACY</span> & DOMINATE Generative AI Search?
              </motion.h2>

              <motion.p
                className="banner-subtitle"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.85, delay: 0.3, ease: SMOOTH_EASE }}
              >
                We partner with ambitious founders to scale ROAS to 4.9x, build sub-second 3D web platforms, and capture search grid dominance.
              </motion.p>

              {/* ACTION BUTTONS GROUP */}
              <motion.div
                className="banner-cta-group"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.4, ease: SMOOTH_EASE }}
              >
                <button className="banner-primary-btn" onClick={onOpenModal}>
                  <span>CLAIM YOUR GROWTH BLUEPRINT</span>
                  <div className="btn-circle-icon">
                    <ArrowRight size={15} />
                  </div>
                </button>

                <button
                  className="banner-secondary-btn"
                  onClick={() => setShowCalcModal(true)}
                >
                  <Calculator size={15} className="calc-btn-icon" />
                  <span>CALCULATE YOUR ROAS LIFT</span>
                </button>
              </motion.div>

              {/* GUARANTEE PILL TAGS */}
              <motion.div
                className="banner-features-list"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.5, ease: SMOOTH_EASE }}
              >
                <span className="feat-pill">
                  <CheckCircle2 size={12} className="feat-check" />
                  No Long-Term Lock-Ins
                </span>
                <span className="feat-pill">
                  <CheckCircle2 size={12} className="feat-check" />
                  Sub-Second 3D Web UX
                </span>
                <span className="feat-pill">
                  <CheckCircle2 size={12} className="feat-check" />
                  100% Revenue Attributed
                </span>
              </motion.div>
            </div>

            {/* RIGHT COLUMN: INTERACTIVE ROAS CALCULATOR CARD */}
            <motion.div
              className="banner-right-calculator-card"
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.25, ease: SMOOTH_EASE }}
            >
              <div className="calc-card-header">
                <div className="calc-title-wrap">
                  <Sparkles size={16} className="calc-sparkle-icon" />
                  <span className="calc-title-text">LIVE REVENUE ACCELERATOR</span>
                </div>
                <span className="calc-live-pill">REAL-TIME MATH</span>
              </div>

              {/* SLIDER INPUT */}
              <div className="calc-input-block">
                <div className="calc-label-row">
                  <span className="input-label">MONTHLY AD SPEND:</span>
                  <span className="input-value-text">${adSpend.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="200000"
                  step="5000"
                  value={adSpend}
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  className="calc-range-slider"
                />
                <div className="slider-minmax-row">
                  <span>$5,000/mo</span>
                  <span>$200,000/mo</span>
                </div>
              </div>

              {/* PROJECTED METRICS DISPLAY */}
              <div className="calc-results-grid">
                <div className="result-metric-box">
                  <span className="res-label">PROJECTED REVENUE</span>
                  <strong className="res-value text-red">${projectedRevenue.toLocaleString()}</strong>
                </div>

                <div className="result-metric-box">
                  <span className="res-label">PROJECTED ROAS</span>
                  <strong className="res-value text-gold">{projectedRoas}X LIFT</strong>
                </div>

                <div className="result-metric-box">
                  <span className="res-label">EST. HIGH-TICKET LEADS</span>
                  <strong className="res-value">{projectedLeads.toLocaleString()} LEADS</strong>
                </div>
              </div>

              <button className="calc-launch-btn" onClick={onOpenModal}>
                <Zap size={14} />
                <span>FORGE THIS REVENUE NOW</span>
              </button>
            </motion.div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@600;800&display=swap');

.bf-banner-section {
  position: relative;
  width: 100%;
  padding: 80px 24px;
  background: #030305;
  overflow: hidden;
  font-family: 'Plus Jakarta Sans', sans-serif;
  box-sizing: border-box;
}

/* AMBIENT NEON GLOW AURAS & CYBER GRID */
.banner-red-aura {
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-50%, -50%);
  width: 700px;
  height: 500px;
  background: radial-gradient(circle, rgba(255, 77, 77, 0.16) 0%, rgba(216, 38, 38, 0.03) 60%, transparent 70%);
  pointer-events: none;
  filter: blur(100px);
  z-index: 1;
}

.banner-gold-aura {
  position: absolute;
  top: 50%;
  right: 15%;
  transform: translate(50%, -50%);
  width: 600px;
  height: 450px;
  background: radial-gradient(circle, rgba(255, 184, 0, 0.1) 0%, transparent 65%);
  pointer-events: none;
  filter: blur(90px);
  z-index: 1;
}

.banner-cyber-grid {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
  z-index: 2;
  opacity: 0.5;
}

.banner-container {
  position: relative;
  z-index: 10;
  max-width: 1360px;
  margin: 0 auto;
}

/* MAIN HERO CARD STYLING */
.bf-banner-hero-card {
  position: relative;
  background: rgba(14, 14, 18, 0.88);
  border: 1px solid rgba(255, 77, 77, 0.35);
  border-radius: 32px;
  padding: 48px 44px;
  backdrop-filter: blur(24px);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(255, 77, 77, 0.15);
  overflow: hidden;
}

.banner-laser-line {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #FF4D4D, #FFB800, transparent);
  animation: laserScanBanner 3s linear infinite;
}

@keyframes laserScanBanner {
  0% { left: -100%; }
  100% { left: 100%; }
}

/* BANNER HEADER ROW */
.banner-header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 32px;
  flex-wrap: wrap;
}

.banner-live-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 77, 77, 0.12);
  border: 1px solid rgba(255, 77, 77, 0.35);
  color: #FF4D4D;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.72rem;
  font-weight: 800;
  padding: 6px 16px;
  border-radius: 9999px;
  letter-spacing: 0.08em;
}

.pill-pulse-icon {
  color: #FFB800;
  animation: pulseDot 2s infinite;
}

@keyframes pulseDot {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
}

.banner-revenue-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.72rem;
  font-weight: 800;
  color: #FFB800;
  background: rgba(255, 184, 0, 0.1);
  border: 1px solid rgba(255, 184, 0, 0.25);
  padding: 6px 16px;
  border-radius: 9999px;
}

.trending-icon {
  color: #FFB800;
}

/* MAIN GRID LAYOUT */
.banner-main-grid {
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 48px;
  align-items: center;
}

.banner-left-content {
  display: flex;
  flex-direction: column;
}

.banner-headline {
  font-family: 'Outfit', sans-serif;
  font-size: clamp(2.2rem, 3.8vw, 3.4rem);
  font-weight: 900;
  line-height: 1.08;
  color: #FFFFFF;
  margin: 0 0 18px;
  letter-spacing: -0.035em;
}

.text-crimson-glow {
  color: #FF4D4D;
  text-shadow: 0 0 25px rgba(255, 77, 77, 0.4);
}

.banner-subtitle {
  color: #94A3B8;
  font-size: 1.05rem;
  line-height: 1.65;
  margin: 0 0 32px;
  max-width: 680px;
}

/* CTA BUTTONS */
.banner-cta-group {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
  flex-wrap: wrap;
}

.banner-primary-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(135deg, #FF4D4D 0%, #D82626 100%);
  color: #FFFFFF;
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-family: 'Outfit', sans-serif;
  font-size: 0.92rem;
  font-weight: 900;
  letter-spacing: 0.05em;
  padding: 14px 26px;
  border-radius: 9999px;
  cursor: pointer;
  box-shadow: 0 10px 25px rgba(255, 77, 77, 0.35);
  transition: transform 0.25s ease, background 0.25s ease;
}

.banner-primary-btn:hover {
  transform: translateY(-2px);
  background: linear-gradient(135deg, #D82626 0%, #B81D1D 100%);
}

.btn-circle-icon {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #FFFFFF;
  color: #FF4D4D;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.25s ease;
}

.banner-primary-btn:hover .btn-circle-icon {
  transform: translateX(3px);
}

.banner-secondary-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #FFFFFF;
  font-family: 'Outfit', sans-serif;
  font-size: 0.88rem;
  font-weight: 800;
  padding: 14px 22px;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.25s ease;
}

.banner-secondary-btn:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 77, 77, 0.5);
  transform: translateY(-2px);
}

.calc-btn-icon {
  color: #FFB800;
}

/* FEATURES LIST */
.banner-features-list {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.feat-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.72rem;
  font-weight: 700;
  color: #CBD5E1;
}

.feat-check {
  color: #FF4D4D;
}

/* RIGHT COLUMN CALCULATOR CARD */
.banner-right-calculator-card {
  background: rgba(6, 5, 9, 0.95);
  border: 1px solid rgba(255, 77, 77, 0.3);
  border-radius: 24px;
  padding: 28px 24px;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5);
}

.calc-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.calc-title-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
}

.calc-sparkle-icon {
  color: #FFB800;
}

.calc-title-text {
  font-family: 'Outfit', sans-serif;
  font-size: 0.88rem;
  font-weight: 900;
  letter-spacing: 0.05em;
  color: #FFFFFF;
}

.calc-live-pill {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.65rem;
  font-weight: 800;
  color: #FF4D4D;
  background: rgba(255, 77, 77, 0.12);
  padding: 3px 8px;
  border-radius: 9999px;
  border: 1px solid rgba(255, 77, 77, 0.3);
}

.calc-input-block {
  margin-bottom: 24px;
}

.calc-label-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  font-family: 'JetBrains Mono', monospace;
}

.input-label {
  font-size: 0.7rem;
  font-weight: 800;
  color: #94A3B8;
}

.input-value-text {
  font-family: 'Outfit', sans-serif;
  font-size: 1.1rem;
  font-weight: 900;
  color: #FFB800;
}

.calc-range-slider {
  width: 100%;
  height: 6px;
  background: #1E293B;
  border-radius: 9999px;
  outline: none;
  accent-color: #FF4D4D;
  cursor: pointer;
}

.slider-minmax-row {
  display: flex;
  justify-content: space-between;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.62rem;
  color: #64748B;
  margin-top: 6px;
}

.calc-results-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 22px;
}

.result-metric-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 10px 14px;
  border-radius: 14px;
}

.res-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.68rem;
  font-weight: 800;
  color: #94A3B8;
}

.res-value {
  font-family: 'Outfit', sans-serif;
  font-size: 1rem;
  font-weight: 900;
  color: #FFFFFF;
}

.text-red { color: #FF4D4D; }
.text-gold { color: #FFB800; }

.calc-launch-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  background: #FF4D4D;
  color: #FFFFFF;
  border: none;
  font-family: 'Outfit', sans-serif;
  font-size: 0.82rem;
  font-weight: 900;
  letter-spacing: 0.05em;
  padding: 12px;
  border-radius: 9999px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
}

.calc-launch-btn:hover {
  background: #D82626;
  transform: translateY(-2px);
}

/* RESPONSIVE LAYOUT */
@media (max-width: 1024px) {
  .banner-main-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }
  .bf-banner-hero-card {
    padding: 36px 28px;
  }
}

@media (max-width: 640px) {
  .bf-banner-section {
    padding: 50px 16px;
  }
  .bf-banner-hero-card {
    padding: 28px 20px;
    border-radius: 24px;
  }
  .banner-headline {
    font-size: 1.8rem;
  }
  .banner-subtitle {
    font-size: 0.92rem;
  }
  .banner-primary-btn {
    width: 100%;
    justify-content: center;
  }
  .banner-secondary-btn {
    width: 100%;
    justify-content: center;
  }
}
`;
