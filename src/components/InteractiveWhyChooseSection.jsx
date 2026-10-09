"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap, Cpu, Sparkles, Activity } from "lucide-react";
import KexsioCanvasBackground from "./KexsioCanvasBackground";

function WhyPointCard({ point, idx }) {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  const microTags = [
    "ENTERPRISE SLA",
    "ZERO-CLICK PROOF",
    "SUB-SECOND STACK",
    "KNOWLEDGE GRAPH",
    "ATTRIBUTION ENGINE",
    "COIMBATORE LOCAL DOMINANCE"
  ];

  const tag = microTags[idx % microTags.length];
  const pointText = typeof point === "string" ? point : point.text;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="sg-why-point-3d-wrap"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.5, delay: idx * 0.08 }}
    >
      <div className={`sg-why-point-card ${hovered ? "is-hovered" : ""}`}>
        {/* Animated Spotlight Glare */}
        <div
          className="sg-why-card-glare"
          style={{ opacity: hovered ? 0.7 : 0 }}
        />

        <div className="sg-why-card-header">
          <div className="sg-why-point-icon">
            <CheckCircle2 size={18} className="check-icon" />
            <span className="check-ring-pulse" />
          </div>
          <span className="sg-why-card-tag">{tag}</span>
        </div>

        <div className="sg-why-point-content">
          <p>{pointText}</p>
        </div>

        <div className="sg-why-card-footer">
          <span className="footer-status-dot" />
          <span className="footer-status-label">VERIFIED PERFORMANCE STANDARD</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function InteractiveWhyChooseSection({ whyChooseUs }) {
  if (!whyChooseUs) return null;

  return (
    <section className="sg-section sg-why-section">
      <style>{whyStyles}</style>
      <KexsioCanvasBackground theme="light" opacity={0.4} />

      <div className="sg-container">
        <div className="sg-why-grid">
          {/* LEFT: HEADING, DESCRIPTION & LIVE RADAR TELEMETRY HUD */}
          <motion.div
            className="sg-why-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <span className="sg-section-tag">{whyChooseUs.tag || "LOCAL SEO AUTHORITY"}</span>
            <h2 className="sg-why-title">{whyChooseUs.title}</h2>
            <p className="sg-why-desc">{whyChooseUs.description}</p>
            <p className="sg-why-leadin">{whyChooseUs.leadIn}</p>
          </motion.div>

          {/* RIGHT: FEATURE CARDS WITH 3D PERSPECTIVE TILT */}
          <div className="sg-why-points-grid">
            {whyChooseUs.points.map((point, idx) => (
              <WhyPointCard key={idx} point={point} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const whyStyles = `
  .sg-why-section {
    position: relative;
    border-top: 1px solid #E5E7EB;
    border-bottom: 1px solid #E5E7EB;
    background: #FAFAFC;
    padding: clamp(70px, 9vw, 110px) 0;
  }

  .sg-why-grid {
    display: grid;
    grid-template-columns: 1fr 1.15fr;
    gap: clamp(40px, 6vw, 70px);
    align-items: flex-start;
  }

  .sg-why-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .sg-why-title {
    font-family: "Outfit", sans-serif;
    font-size: clamp(30px, 4vw, 48px);
    font-weight: 900;
    color: #0A0A0C;
    line-height: 1.15;
    margin: 0 0 20px;
    letter-spacing: -0.02em;
  }

  .sg-why-desc {
    font-size: 16px;
    line-height: 1.7;
    color: #4B5563;
    margin: 0 0 16px;
  }

  .sg-why-leadin {
    font-size: 17px;
    font-weight: 700;
    color: #0A0A0C;
    margin: 0 0 32px;
  }

  /* TELEMETRY RADAR HUD */
  .sg-radar-telemetry-hud {
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #E5E7EB;
    border-radius: 18px;
    padding: 20px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
  }

  .hud-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 14px;
    border-bottom: 1px solid #F3F4F6;
    margin-bottom: 16px;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.72rem;
  }

  .hud-title-row {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #0A0A0C;
    font-weight: 800;
  }

  .hud-icon {
    color: #EF4136;
  }

  .hud-live-tag {
    background: rgba(239, 65, 54, 0.1);
    color: #EF4136;
    border: 1px solid rgba(239, 65, 54, 0.25);
    padding: 2px 8px;
    border-radius: 6px;
    font-weight: 800;
  }

  .hud-body {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  .radar-screen {
    position: relative;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background: radial-gradient(circle, #F3F4F6 0%, #E5E7EB 100%);
    border: 1px solid rgba(239, 65, 54, 0.35);
    overflow: hidden;
    flex-shrink: 0;
  }

  .radar-ring {
    position: absolute;
    inset: 0;
    margin: auto;
    border-radius: 50%;
    border: 1px dashed rgba(239, 65, 54, 0.25);
  }
  .radar-ring.ring-1 { width: 30px; height: 30px; }
  .radar-ring.ring-2 { width: 60px; height: 60px; }
  .radar-ring.ring-3 { width: 85px; height: 85px; }

  .radar-cross-h {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: rgba(239, 65, 54, 0.15);
  }
  .radar-cross-v {
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 1px;
    background: rgba(239, 65, 54, 0.15);
  }

  .radar-sweep {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: conic-gradient(from 0deg, rgba(239, 65, 54, 0.4) 0deg, transparent 60deg, transparent 360deg);
    border-radius: 50%;
    animation: radarSpin 3.5s linear infinite;
  }

  @keyframes radarSpin {
    to { transform: rotate(360deg); }
  }

  .radar-blip {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #EF4136;
    box-shadow: 0 0 6px #EF4136;
  }
  .blip-1 { top: 25%; left: 65%; animation: blipPulse 1.8s infinite; }
  .blip-2 { top: 70%; left: 35%; animation: blipPulse 2.3s infinite; }

  @keyframes blipPulse {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; transform: scale(1.4); }
  }

  .radar-diagnostics {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.74rem;
  }

  .diag-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .diag-lbl {
    color: #6B7280;
  }

  .diag-val.success {
    color: #059669;
    font-weight: 700;
  }
  .diag-val.red {
    color: #EF4136;
    font-weight: 700;
  }

  /* 3D POINT CARDS */
  .sg-why-points-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .sg-why-point-3d-wrap {
    perspective: 1000px;
  }

  .sg-why-point-card {
    position: relative;
    padding: 22px 24px;
    border-radius: 18px;
    background: #FFFFFF;
    border: 1px solid #E5E7EB;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    overflow: hidden;
  }

  .sg-why-point-card.is-hovered {
    border-color: #EF4136;
    background: #FFFFFF;
    box-shadow: 0 12px 30px rgba(239, 65, 54, 0.12);
    transform: translateZ(8px);
  }

  .sg-why-card-glare {
    position: absolute;
    inset: -50%;
    background: radial-gradient(circle at 50% 50%, rgba(239, 65, 54, 0.08) 0%, transparent 60%);
    pointer-events: none;
    transition: opacity 0.3s ease;
  }

  .sg-why-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }

  .sg-why-point-icon {
    position: relative;
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background: rgba(239, 65, 54, 0.1);
    border: 1px solid rgba(239, 65, 54, 0.3);
    color: #EF4136;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .check-ring-pulse {
    position: absolute;
    inset: -3px;
    border-radius: 12px;
    border: 1px dashed rgba(239, 65, 54, 0.3);
    animation: radarSpin 15s linear infinite;
  }

  .sg-why-card-tag {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.68rem;
    font-weight: 800;
    color: #EF4136;
    background: rgba(239, 65, 54, 0.08);
    padding: 3px 8px;
    border-radius: 6px;
    border: 1px solid rgba(239, 65, 54, 0.25);
    letter-spacing: 0.05em;
  }

  .sg-why-point-content p {
    font-size: 15.5px;
    line-height: 1.6;
    color: #0A0A0C;
    margin: 0 0 14px;
    font-weight: 600;
  }

  .sg-why-card-footer {
    display: flex;
    align-items: center;
    gap: 8px;
    padding-top: 10px;
    border-top: 1px solid #F3F4F6;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.68rem;
    color: #6B7280;
  }

  .footer-status-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #059669;
    box-shadow: 0 0 6px #059669;
  }

  @media (max-width: 1024px) {
    .sg-why-grid { grid-template-columns: 1fr; }
    .hud-body { flex-direction: column; align-items: flex-start; }
  }
`;
