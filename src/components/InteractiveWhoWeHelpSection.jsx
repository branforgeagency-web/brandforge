"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { CheckCircle2, ShieldCheck, ArrowRight, Building2, Stethoscope, Factory, ShoppingBag, Laptop } from "lucide-react";
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

        <div className="sg-who-bottom-bar" style={{ transform: "translateZ(22px)" }}>
          <span className="who-sector-code">SECTOR 0{idx + 1} // DOMINANCE ARCHITECTURE</span>
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
      <KexsioCanvasBackground theme="light" opacity={0.65} />

      <div className="sg-container">
        {/* HEADER */}
        <motion.div
          className="sg-section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span className="sg-section-tag">{whoWeHelp.tag || "WHO WE HELP"}</span>
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

        {/* CERTIFICATIONS STRIP WITH ROTATING AURA */}
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
    background: #FFFFFF;
    border-top: 1px solid #E5E7EB;
    border-bottom: 1px solid #E5E7EB;
    padding: clamp(70px, 9vw, 110px) 0;
    position: relative;
    overflow: hidden;
  }

  .sg-who-section .sg-section-title {
    color: #0A0A0C;
  }

  .sg-who-section .sg-section-subtitle {
    color: #4B5563;
  }

  .sg-who-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-bottom: 44px;
  }

  .sg-who-card {
    padding: 28px 24px 22px;
    border-radius: 20px;
    background: #FAFAFC;
    border: 1px solid #E5E7EB;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .sg-who-card:hover,
  .sg-who-card.is-hovered {
    border-color: #EF4136;
    background: #FFFFFF;
    box-shadow: 0 12px 30px rgba(239, 65, 54, 0.1), 0 0 0 1px rgba(239, 65, 54, 0.2);
  }

  .sg-who-top-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;
  }

  .sg-who-icon {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background: rgba(239, 65, 54, 0.1);
    border: 1px solid rgba(239, 65, 54, 0.25);
    color: #EF4136;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .sg-who-metric-tag {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.68rem;
    font-weight: 800;
    color: #EF4136;
    background: rgba(239, 65, 54, 0.08);
    padding: 3px 8px;
    border-radius: 6px;
    border: 1px solid rgba(239, 65, 54, 0.2);
  }

  .sg-who-content h4 {
    font-family: "Outfit", sans-serif;
    font-size: 1.15rem;
    font-weight: 800;
    color: #0A0A0C;
    margin: 0 0 8px;
    letter-spacing: -0.01em;
  }

  .sg-who-content p {
    font-size: 0.88rem;
    line-height: 1.6;
    color: #4B5563;
    margin: 0 0 20px;
  }

  .sg-who-bottom-bar {
    padding-top: 12px;
    border-top: 1px solid #F3F4F6;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.68rem;
    color: #9CA3AF;
  }

  /* CERTIFICATIONS STRIP */
  .sg-cert-strip {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
    padding-top: 28px;
    border-top: 1px solid #E5E7EB;
  }

  .sg-cert-badge {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 22px;
    border-radius: 999px;
    background: #FFFFFF;
    border: 1px solid #E5E7EB;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.8rem;
    font-weight: 800;
    color: #0A0A0C;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
    cursor: default;
    overflow: hidden;
  }

  .cert-aura-ring {
    position: absolute;
    inset: -50%;
    background: radial-gradient(circle at 50% 50%, rgba(239, 65, 54, 0.08) 0%, transparent 60%);
    pointer-events: none;
  }

  .cert-icon { color: #EF4136; }

  @media (max-width: 1024px) {
    .sg-who-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 640px) {
    .sg-who-grid { grid-template-columns: 1fr; }
  }
`;
