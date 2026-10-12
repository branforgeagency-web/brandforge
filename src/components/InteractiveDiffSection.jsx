"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles, ShieldCheck, Zap, Award } from "lucide-react";
import KexsioCanvasBackground from "./KexsioCanvasBackground";

function DiffCard({ item, idx }) {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 140, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 140, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["11deg", "-11deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-11deg", "11deg"]);
  const translateX = useTransform(mouseXSpring, [-0.5, 0.5], [-8, 8]);
  const translateY = useTransform(mouseYSpring, [-0.5, 0.5], [-8, 8]);

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

  const DiffIcon = item.icon || Sparkles;

  const guaranteeTags = [
    "100% ATTRIBUTION SLA",
    "ZERO-CLICK CITATION PROOF",
    "SUB-SECOND CODE GUARANTEE"
  ];
  const tag = guaranteeTags[idx % guaranteeTags.length];

  return (
    <motion.div
      animate={{
        y: idx % 2 === 0 ? [-6, 6, -6] : [6, -6, 6],
      }}
      transition={{
        duration: 4.6 + idx * 0.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="sg-diff-card-3d"
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
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, delay: idx * 0.1 }}
      >
        <div className={`sg-diff-card ${hovered ? "is-hovered" : ""}`} style={{ transformStyle: "preserve-3d" }}>
          {/* Cursor Glow Spotlight */}
          <div
            className="sg-diff-glare"
            style={{ opacity: hovered ? 0.75 : 0 }}
          />

          {/* Top Cyber Metadata */}
          <div className="sg-diff-card-top" style={{ transform: "translateZ(30px)" }}>
            <motion.div
              className="sg-diff-icon-wrap"
              animate={{ scale: hovered ? 1.1 : 1, rotateZ: hovered ? [0, -8, 8, 0] : 0 }}
              transition={{ duration: 0.45 }}
            >
              <DiffIcon size={24} className="diff-lucide-icon" />
            </motion.div>
            <span className="sg-diff-guarantee-badge">{tag}</span>
          </div>

          <div style={{ transform: "translateZ(36px)" }}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>

          {/* Bottom Status Conduit */}
          <div className="sg-diff-card-footer" style={{ transform: "translateZ(24px)" }}>
            <div className="footer-line" />
            <span className="footer-code">BENCHMARK 0{idx + 1} // VERIFIED</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function InteractiveDiffSection({
  differentiators = {},
}) {
  if (!differentiators || !differentiators.items) return null;

  return (
    <section className="sg-section sg-diff-section">
      <style>{diffStyles}</style>
      <KexsioCanvasBackground theme="light" opacity={0.4} />

      <div className="sg-container">
        {/* HEADER */}
        <motion.div
          className="sg-section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span className="sg-section-tag">{differentiators.tag || "THE BRANDFORGE ADVANTAGE"}</span>
          <h2 className="sg-section-title">{differentiators.title}</h2>
          {differentiators.subtitle && (
            <p className="sg-section-subtitle">{differentiators.subtitle}</p>
          )}
        </motion.div>

        {/* 3 CARDS 3D GRID */}
        <div className="sg-diff-grid">
          {differentiators.items.map((item, idx) => (
            <DiffCard key={item.title} item={item} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

const diffStyles = `
  .sg-diff-section {
    background: #FAFAFC;
    border-top: 1px solid #E5E7EB;
    border-bottom: 1px solid #E5E7EB;
    padding: clamp(70px, 9vw, 110px) 0;
  }

  .sg-diff-section .sg-section-title {
    color: #0A0A0C;
  }

  .sg-diff-section .sg-section-subtitle {
    color: #4B5563;
  }

  .sg-diff-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
  }

  .sg-diff-card-3d {
    perspective: 1000px;
  }

  .sg-diff-card {
    position: relative;
    padding: 34px 28px 28px;
    border-radius: 24px;
    background: #FFFFFF;
    border: 1px solid #E5E7EB;
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.04);
    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 280px;
  }

  .sg-diff-card.is-hovered {
    border-color: #EF4136;
    background: #FFFFFF;
    transform: translateZ(10px);
    box-shadow: 0 16px 40px rgba(239, 65, 54, 0.12);
  }

  .sg-diff-glare {
    position: absolute;
    inset: -50%;
    background: radial-gradient(circle at 50% 50%, rgba(239, 65, 54, 0.08) 0%, transparent 60%);
    pointer-events: none;
    transition: opacity 0.3s ease;
  }

  .sg-diff-card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 22px;
  }

  .sg-diff-icon-wrap {
    width: 48px;
    height: 48px;
    border-radius: 14px;
    background: rgba(239, 65, 54, 0.1);
    border: 1px solid rgba(239, 65, 54, 0.3);
    color: #EF4136;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sg-diff-guarantee-badge {
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

  .sg-diff-card h3 {
    font-family: "Outfit", sans-serif;
    font-size: 1.25rem;
    font-weight: 800;
    color: #0A0A0C;
    margin: 0 0 12px;
    letter-spacing: -0.01em;
  }

  .sg-diff-card p {
    font-size: 0.92rem;
    line-height: 1.65;
    color: #4B5563;
    margin: 0 0 24px;
    flex: 1;
  }

  .sg-diff-card-footer {
    display: flex;
    align-items: center;
    gap: 10px;
    padding-top: 14px;
    border-top: 1px solid #F3F4F6;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.68rem;
    color: #6B7280;
  }

  .footer-line {
    width: 24px;
    height: 2px;
    background: #EF4136;
  }

  @media (max-width: 1024px) {
    .sg-diff-grid { grid-template-columns: 1fr; }
  }
`;
