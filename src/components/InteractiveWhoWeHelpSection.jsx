"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import KexsioCanvasBackground from "./KexsioCanvasBackground";

function WhoIndustryCard({ ind, idx, winTag }) {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);
  const translateX = useTransform(mouseXSpring, [-0.5, 0.5], [-8, 8]);
  const translateY = useTransform(mouseYSpring, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      animate={{
        y: idx % 2 === 0 ? [-5, 5, -5] : [5, -5, 5],
      }}
      transition={{
        duration: 4.5 + (idx % 3) * 0.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ perspective: "1100px" }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          x: translateX,
          y: translateY,
          transformStyle: "preserve-3d",
        }}
        className={`sg-who-card ${hovered ? "is-hovered" : ""}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5, delay: idx * 0.08 }}
      >
        <div className="sg-who-top-row" style={{ transform: "translateZ(28px)" }}>
          <motion.div
            className="sg-who-icon"
            animate={{ scale: hovered ? 1.12 : 1, rotateZ: hovered ? [0, -8, 8, 0] : 0 }}
            transition={{ duration: 0.4 }}
          >
            <CheckCircle2 size={18} className="check-icon" />
          </motion.div>
          <span className="sg-who-metric-tag">{winTag}</span>
        </div>

        <div className="sg-who-content" style={{ transform: "translateZ(34px)" }}>
          <h4>{ind.title}</h4>
          <p>{ind.desc}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function InteractiveWhoWeHelpSection({
  whoWeHelp = {},
}) {
  if (!whoWeHelp || !whoWeHelp.industries) return null;

  const industryWins = [
    "+420% Patient Inquiries",
    "₹18Cr+ Attributed Pipeline",
    "35+ Monthly Export Inquiries",
    "4.6x Return On Ad Spend",
    "62% Shorter Sales Cycle",
    "Rank #1 Across South India"
  ];

  return (
    <section className="sg-section sg-who-section">
      <style>{whoStyles}</style>

      {/* High-Performance Neural Constellation Background */}
      <KexsioCanvasBackground theme="dark" opacity={0.88} />

      {/* Montarville Signature Intersecting Circle Line-Art Watermark */}
      <div className="sg-who-watermark-wrap" aria-hidden="true">
        <svg
          width="768"
          height="610"
          viewBox="0 0 768 610"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="384" cy="417.5" r="191.5" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1.2" />
          <circle cx="384" cy="192" r="191.5" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1.2" />
          <circle cx="192" cy="304.7" r="191.5" stroke="rgba(255, 24, 1, 0.06)" strokeWidth="1.2" />
          <circle cx="576" cy="304.7" r="191.5" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1.2" />
        </svg>
      </div>

      <div className="sg-container">
        {/* HEADER */}
        <motion.div
          className="sg-section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span className="sg-section-tag">{whoWeHelp.tag || "WHO WE BUILD FOR"}</span>
          <h2 className="sg-section-title">{whoWeHelp.title}</h2>
          {whoWeHelp.subtitle && (
            <p className="sg-section-subtitle">{whoWeHelp.subtitle}</p>
          )}
        </motion.div>

        {/* INDUSTRIES GRID */}
        <div className="sg-who-grid">
          {whoWeHelp.industries.map((ind, idx) => (
            <WhoIndustryCard
              key={ind.title}
              ind={ind}
              idx={idx}
              winTag={industryWins[idx % industryWins.length]}
            />
          ))}
        </div>

        {/* CERTIFICATIONS STRIP */}
        {whoWeHelp.certifications && (
          <div className="sg-cert-strip">
            {whoWeHelp.certifications.map((cert, idx) => (
              <motion.div
                key={cert.label}
                className="sg-cert-badge"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="cert-aura-ring" />
                <ShieldCheck size={16} className="cert-icon" />
                <span>{cert.label}</span>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

const whoStyles = `
  .sg-who-section {
    background: #09090C !important;
    background-image: 
      radial-gradient(circle at 50% 0%, rgba(255, 24, 1, 0.12) 0%, transparent 60%),
      radial-gradient(circle at 85% 85%, rgba(255, 24, 1, 0.06) 0%, transparent 50%),
      radial-gradient(circle at 15% 75%, rgba(255, 255, 255, 0.02) 0%, transparent 40%) !important;
    border-top: 1px solid rgba(255, 255, 255, 0.08) !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
    padding: clamp(80px, 9vw, 130px) 0;
    position: relative;
    overflow: hidden;
    color: #FAFAFC;
  }

  .sg-who-watermark-wrap {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 1;
    opacity: 0.7;
  }

  .sg-who-section .sg-container {
    position: relative;
    z-index: 2;
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 clamp(20px, 4vw, 40px);
  }

  .sg-who-section .sg-section-header {
    text-align: center;
    max-width: 860px;
    margin: 0 auto clamp(40px, 5vw, 64px);
  }

  .sg-who-section .sg-section-tag {
    display: inline-block;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    color: #FF1801;
    background: rgba(255, 24, 1, 0.08);
    border: 1px solid rgba(255, 24, 1, 0.25);
    padding: 5px 14px;
    border-radius: 9999px;
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  .sg-who-section .sg-section-title {
    font-family: "General Sans", "Outfit", -apple-system, sans-serif;
    font-size: clamp(32px, 4.4vw, 56px);
    font-weight: 800;
    letter-spacing: -0.035em;
    line-height: 1.12;
    color: #FAFAFC !important;
    margin: 0 0 16px 0;
  }

  .sg-who-section .sg-section-subtitle {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: clamp(15.5px, 1.2vw, 17.5px);
    line-height: 1.68;
    color: rgba(250, 250, 252, 0.68) !important;
    max-width: 820px;
    margin: 0 auto;
  }

  .sg-who-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-bottom: 44px;
  }

  .sg-who-card {
    padding: 28px 24px 24px;
    border-radius: 20px;
    background: #0E0E14 !important;
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5) !important;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  }

  .sg-who-card:hover,
  .sg-who-card.is-hovered {
    border-color: #FF1801 !important;
    background: #14141C !important;
    box-shadow: 0 16px 40px rgba(255, 24, 1, 0.2), 0 0 0 1px rgba(255, 24, 1, 0.4) !important;
    transform: translateY(-4px);
  }

  .sg-who-top-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .sg-who-icon {
    width: 38px;
    height: 38px;
    border-radius: 10px;
    background: rgba(255, 24, 1, 0.12);
    border: 1px solid rgba(255, 24, 1, 0.3);
    color: #FF1801;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .sg-who-metric-tag {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 0.7rem;
    font-weight: 700;
    color: #FF1801;
    background: rgba(255, 24, 1, 0.08);
    padding: 4px 10px;
    border-radius: 6px;
    border: 1px solid rgba(255, 24, 1, 0.22);
    letter-spacing: 0.04em;
  }

  .sg-who-content h4 {
    font-family: "Outfit", sans-serif;
    font-size: 1.15rem;
    font-weight: 800;
    color: #FAFAFC !important;
    margin: 0 0 10px;
    letter-spacing: -0.01em;
  }

  .sg-who-content p {
    font-size: 0.88rem;
    line-height: 1.62;
    color: rgba(250, 250, 252, 0.65) !important;
    margin: 0;
  }

  /* CERTIFICATIONS STRIP */
  .sg-cert-strip {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
    padding-top: 36px;
    border-top: 1px solid rgba(255, 255, 255, 0.08) !important;
    margin-top: 24px;
  }

  .sg-cert-badge {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 22px;
    border-radius: 999px;
    background: #0E0E14 !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 0.8rem;
    font-weight: 700;
    color: #FAFAFC !important;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.4) !important;
    cursor: default;
    overflow: hidden;
    transition: all 0.25s ease;
  }

  .sg-cert-badge:hover {
    border-color: #FF1801 !important;
    background: #14141C !important;
    transform: translateY(-2px);
  }

  .cert-aura-ring {
    position: absolute;
    inset: -50%;
    background: radial-gradient(circle at 50% 50%, rgba(255, 24, 1, 0.12) 0%, transparent 60%);
    pointer-events: none;
  }

  .cert-icon { color: #FF1801; }

  @media (max-width: 1024px) {
    .sg-who-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 640px) {
    .sg-who-grid { grid-template-columns: 1fr; }
    .sg-who-section { padding: 60px 0; }
  }
`;
