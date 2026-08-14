"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, ShieldCheck, ArrowRight, Radio } from "lucide-react";

export default function BrandForgeIntroSequence({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("INITIALIZING NEURAL CORE...");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Smooth progress ticker
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            if (onComplete) onComplete();
          }, 600);
          return 100;
        }

        const next = prev + Math.floor(Math.random() * 8) + 2;
        const capped = Math.min(next, 100);

        // Update status text based on progress milestone
        if (capped < 25) {
          setStatusText("INITIALIZING BRANDFORGE NEURAL CORE...");
        } else if (capped < 50) {
          setStatusText("FORGING SEARCH SUPREMACY & 3D WEBGL...");
        } else if (capped < 75) {
          setStatusText("SYNCHRONIZING HIGH-TICKET ROAS FUNNELS...");
        } else if (capped < 100) {
          setStatusText("TURNING IDEAS INTO DIGITAL POWER...");
        } else {
          setStatusText("SYSTEM OPERATIONAL // WELCOME TO BRANDFORGE");
        }

        return capped;
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onComplete]);

  const handleSkip = () => {
    setIsDone(true);
    if (onComplete) onComplete();
  };

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="bf-intro-stage"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
        >
          <style>{styles}</style>

          {/* TOP & BOTTOM CINEMATIC SHUTTERS FOR SPLIT OPENING */}
          <motion.div
            className="bf-shutter shutter-top"
            exit={{ y: "-100%", transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }}
          />
          <motion.div
            className="bf-shutter shutter-bottom"
            exit={{ y: "100%", transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }}
          />

          {/* AMBIENT CYBER GRID & NEON ENERGY GLOW */}
          <div className="intro-cyber-grid" />
          <div className="intro-red-aura" />
          <div className="intro-gold-aura" />

          {/* SKIP BUTTON */}
          <button className="intro-skip-btn" onClick={handleSkip}>
            <span>SKIP INTRO</span>
            <ArrowRight size={14} />
          </button>

          {/* MAIN INTRO HERO CONTENT */}
          <div className="intro-content-wrap">
            
            {/* PULSING BRAND SIGNAL WAVES & LOGO */}
            <motion.div
              className="intro-logo-container"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* SIGNAL POWER RINGS */}
              <div className="signal-ring ring-1" />
              <div className="signal-ring ring-2" />
              <div className="signal-ring ring-3" />

              {/* LASER SCANNER LINE ACROSS LOGO */}
              <div className="intro-laser-beam" />

              {/* OFFICIAL BRANDFORGE LOGO IMAGE */}
              <img
                src="/brandforge-logo.png"
                alt="BrandForge Logo"
                className="intro-official-logo"
              />
            </motion.div>

            {/* HIGH-TECH PROGRESS BAR & COUNTER */}
            <div className="intro-progress-box">
              <div className="progress-track">
                <motion.div
                  className="progress-fill"
                  style={{ width: `${progress}%` }}
                />
                <div
                  className="progress-laser-tip"
                  style={{ left: `${progress}%` }}
                />
              </div>

              {/* STATUS & NUMERICAL COUNTER ROW */}
              <div className="progress-info-row">
                <div className="status-live-group">
                  <Radio size={14} className="radio-pulse-icon" />
                  <span className="status-text">{statusText}</span>
                </div>

                <div className="counter-num-wrap">
                  <span className="counter-num">{progress}</span>
                  <span className="counter-percent">%</span>
                </div>
              </div>
            </div>

            {/* BRAND PILL TAGS FOOTER */}
            <motion.div
              className="intro-tag-pills"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="tag-pill">
                <Zap size={12} className="pill-icon" />
                SEARCH & GEO SUPREMACY
              </span>
              <span className="tag-pill">
                <ShieldCheck size={12} className="pill-icon" />
                3D WEBGL FOUNDRY
              </span>
              <span className="tag-pill">
                <Zap size={12} className="pill-icon" />
                ROAS SCALING ENGINE
              </span>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@600;800&display=swap');

.bf-intro-stage {
  position: fixed;
  inset: 0;
  z-index: 999999;
  background: #030305;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Plus Jakarta Sans', sans-serif;
  overflow: hidden;
  user-select: none;
}

/* CINEMATIC SHUTTERS */
.bf-shutter {
  position: absolute;
  left: 0;
  width: 100%;
  height: 50.5%;
  background: #030305;
  z-index: 10;
  pointer-events: none;
}

.shutter-top { top: 0; }
.shutter-bottom { bottom: 0; }

/* AMBIENT GRID & AURAS */
.intro-cyber-grid {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(255, 77, 77, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 77, 77, 0.08) 1px, transparent 1px);
  background-size: 50px 50px;
  pointer-events: none;
  z-index: 2;
  opacity: 0.6;
}

.intro-red-aura {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, rgba(255, 77, 77, 0.22) 0%, rgba(216, 38, 38, 0.05) 55%, transparent 70%);
  pointer-events: none;
  filter: blur(90px);
  z-index: 1;
  animation: auraPulse 3s ease-in-out infinite alternate;
}

.intro-gold-aura {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  height: 450px;
  background: radial-gradient(circle, rgba(255, 184, 0, 0.12) 0%, transparent 60%);
  pointer-events: none;
  filter: blur(80px);
  z-index: 1;
}

@keyframes auraPulse {
  0% { transform: translate(-50%, -50%) scale(0.95); opacity: 0.8; }
  100% { transform: translate(-50%, -50%) scale(1.15); opacity: 1; }
}

/* SKIP BUTTON */
.intro-skip-btn {
  position: absolute;
  top: 32px;
  right: 32px;
  z-index: 30;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #FFFFFF;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  font-weight: 800;
  padding: 8px 18px;
  border-radius: 9999px;
  cursor: pointer;
  backdrop-filter: blur(12px);
  transition: all 0.25s ease;
}

.intro-skip-btn:hover {
  background: #FF4D4D;
  border-color: #FF4D4D;
  transform: translateY(-2px);
}

/* MAIN CONTENT WRAPPER */
.intro-content-wrap {
  position: relative;
  z-index: 20;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 720px;
  width: 90%;
  text-align: center;
}

/* LOGO & SIGNAL RINGS CONTAINER */
.intro-logo-container {
  position: relative;
  margin-bottom: 44px;
  padding: 30px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.signal-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 1px solid rgba(255, 77, 77, 0.35);
  pointer-events: none;
  animation: ringExpand 2.8s cubic-bezier(0.16, 1, 0.3, 1) infinite;
}

.ring-1 { width: 120px; height: 120px; animation-delay: 0s; }
.ring-2 { width: 220px; height: 220px; animation-delay: 0.6s; }
.ring-3 { width: 320px; height: 320px; animation-delay: 1.2s; }

@keyframes ringExpand {
  0% { transform: translate(-50%, -50%) scale(0.6); opacity: 0.9; }
  100% { transform: translate(-50%, -50%) scale(1.6); opacity: 0; }
}

.intro-laser-beam {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #FF4D4D, #FFB800, transparent);
  box-shadow: 0 0 15px #FF4D4D;
  animation: laserScan 2s linear infinite;
}

@keyframes laserScan {
  0% { left: -100%; }
  100% { left: 100%; }
}

.intro-official-logo {
  max-width: 480px;
  width: 100%;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 0 35px rgba(255, 77, 77, 0.5));
}

/* PROGRESS BAR & COUNTER BOX */
.intro-progress-box {
  width: 100%;
  max-width: 560px;
  margin-bottom: 32px;
}

.progress-track {
  position: relative;
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 9999px;
  overflow: hidden;
  margin-bottom: 16px;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #FF4D4D 0%, #FFB800 100%);
  border-radius: 9999px;
  transition: width 0.1s linear;
  box-shadow: 0 0 12px #FF4D4D;
}

.progress-laser-tip {
  position: absolute;
  top: 0;
  width: 12px;
  height: 100%;
  background: #FFFFFF;
  box-shadow: 0 0 10px #FFFFFF, 0 0 20px #FF4D4D;
  transform: translateX(-50%);
  border-radius: 50%;
}

.progress-info-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'JetBrains Mono', monospace;
}

.status-live-group {
  display: flex;
  align-items: center;
  gap: 8px;
}

.radio-pulse-icon {
  color: #FF4D4D;
  animation: pulseIcon 1.5s infinite;
}

@keyframes pulseIcon {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

.status-text {
  font-size: 0.75rem;
  font-weight: 800;
  color: #94A3B8;
  letter-spacing: 0.05em;
}

.counter-num-wrap {
  display: flex;
  align-items: baseline;
  color: #FF4D4D;
  font-family: 'Outfit', sans-serif;
  font-weight: 900;
}

.counter-num {
  font-size: 1.6rem;
  line-height: 1;
}

.counter-percent {
  font-size: 1rem;
  margin-left: 2px;
}

/* PILL TAGS FOOTER */
.intro-tag-pills {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
}

.tag-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255, 77, 77, 0.1);
  border: 1px solid rgba(255, 77, 77, 0.25);
  color: #E2E8F0;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 5px 14px;
  border-radius: 9999px;
  letter-spacing: 0.05em;
}

.pill-icon {
  color: #FF4D4D;
}

/* RESPONSIVE */
@media (max-width: 640px) {
  .intro-official-logo {
    max-width: 320px;
  }
  .counter-num {
    font-size: 1.3rem;
  }
  .status-text {
    font-size: 0.65rem;
  }
  .intro-skip-btn {
    top: 20px;
    right: 20px;
    padding: 6px 14px;
    font-size: 0.7rem;
  }
}
`;
