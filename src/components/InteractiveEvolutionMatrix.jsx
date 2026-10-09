"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Bot, Layers, MessageSquare, Zap, Cpu, ArrowRightLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import KexsioCanvasBackground from "./KexsioCanvasBackground";

export default function InteractiveEvolutionMatrix({
  matrixRows = [],
  matrixTag = "PARADIGM SHIFT",
  matrixTitle = "The Evolution from Traditional SEO to Generative AI Optimization",
  matrixSubtitle = "Search engines are transitioning from 10 blue links to AI synthesized answers. Here is how BrandForge keeps your business #1 across both worlds.",
  evolutionVisual = {},
}) {
  const [activeStage, setActiveStage] = useState(0);
  const [activeMode, setActiveMode] = useState("geo"); // "trad" or "geo"

  // 3D Tilt for left visual card
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 120, damping: 18 });
  const mouseYSpring = useSpring(y, { stiffness: 120, damping: 18 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const EvolutionBadgeIcon = evolutionVisual.badgeIcon || Cpu;

  return (
    <section className="sg-section sg-evolution-section">
      <style>{evolutionStyles}</style>
      <KexsioCanvasBackground theme="light" opacity={0.6} />

      <div className="sg-container">
        {/* HEADER */}
        <motion.div
          className="sg-section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="sg-evolution-badge">
            <span className="badge-pulse-dot" />
            <span>{matrixTag}</span>
          </div>
          <h2 className="sg-section-title">{matrixTitle}</h2>
          <p className="sg-section-subtitle">{matrixSubtitle}</p>
        </motion.div>

        {/* 2-COLUMN EVOLUTION GRID */}
        <div className="sg-evolution-grid">
          {/* LEFT COLUMN: 3D EMBLEM SHOWCASE WITH HOLOGRAPHIC SCANNER */}
          <motion.div
            className="sg-evolution-visual-col"
            initial={{ opacity: 0, scale: 0.96, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="sg-evolution-card-pod-3d"
            >
              <div className="sg-evolution-card-pod">
                {/* Holographic scanner line */}
                <div className="holographic-scanner-beam" />

                <div className="sg-evolution-img-wrap">
                  <img
                    src={evolutionVisual.image || "/seo-to-geo-evolution-icon.png"}
                    alt={matrixTitle}
                    className="sg-evolution-3d-img"
                  />
                  <div className="sg-evolution-img-badge">
                    <EvolutionBadgeIcon size={14} className="badge-icon-cpu" />
                    <span>{evolutionVisual.badge || "NEXT-GEN AI SEARCH"}</span>
                  </div>
                </div>

                <div className="sg-evolution-pod-caption">
                  {/* Interactive Mode Switcher Chips */}
                  <div className="sg-pod-badge-row">
                    <button
                      type="button"
                      className={`sg-pod-chip chip-trad ${activeMode === "trad" ? "is-selected" : ""}`}
                      onClick={() => setActiveMode("trad")}
                    >
                      {evolutionVisual.chipFrom || "Classic Search (SEO)"}
                    </button>
                    <ArrowRightLeft size={14} className="sg-pod-arrow" />
                    <button
                      type="button"
                      className={`sg-pod-chip chip-geo ${activeMode === "geo" ? "is-selected" : ""}`}
                      onClick={() => setActiveMode("geo")}
                    >
                      {evolutionVisual.chipTo || "Generative AI (GEO)"}
                    </button>
                  </div>

                  <h4 className="sg-pod-title">{evolutionVisual.title}</h4>
                  <p className="sg-pod-desc">{evolutionVisual.desc}</p>

                  {/* Micro Assurance Badge */}
                  <div className="sg-pod-assurance-pill">
                    <CheckCircle2 size={13} className="pill-check" />
                    <span>Dual Dominance: Google 1st Page + Top LLM Citation</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: INTERACTIVE COMPARISON STAGES */}
          <div className="sg-evolution-cards-col">
            {matrixRows.map((row, idx) => {
              const RowIcon = idx === 0 ? Bot : idx === 1 ? Layers : idx === 2 ? MessageSquare : Zap;
              const isCurrent = activeStage === idx;

              return (
                <motion.div
                  key={row.feature}
                  className={`sg-evolution-compare-item ${isCurrent ? "is-current-stage" : ""}`}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  onMouseEnter={() => setActiveStage(idx)}
                >
                  {/* Feature Title Row */}
                  <div className="sg-compare-header">
                    <div className={`sg-compare-icon-wrap ${isCurrent ? "is-active-icon" : ""}`}>
                      <RowIcon size={18} />
                    </div>
                    <span className="sg-compare-feature-name">{row.feature}</span>
                    <span className="sg-compare-step-num">STAGE 0{idx + 1}</span>
                  </div>

                  {/* Dual Cards Comparison */}
                  <div className="sg-compare-dual-grid">
                    {/* Left: Traditional Agency */}
                    <div className={`sg-compare-box box-trad ${activeMode === "trad" ? "box-highlight" : ""}`}>
                      <div className="sg-compare-box-label">
                        <span className="status-dot dot-gray" />
                        <span>TRADITIONAL SEO</span>
                      </div>
                      <p className="sg-compare-box-text">{row.traditional}</p>
                    </div>

                    {/* Center transfer glyph with animated laser arrow */}
                    <div className="sg-compare-transfer-arrow">
                      <ArrowRight size={16} className="transfer-arrow-icon" />
                    </div>

                    {/* Right: BrandForge GEO Engine */}
                    <div className={`sg-compare-box box-geo ${activeMode === "geo" ? "box-highlight" : ""}`}>
                      <div className="sg-compare-box-label">
                        <span className="status-dot dot-red" />
                        <span>BRANDFORGE GEO ENGINE</span>
                      </div>
                      <p className="sg-compare-box-text">{row.brandforge}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

const evolutionStyles = `
  .sg-evolution-section {
    position: relative;
    border-top: 1px solid #E5E7EB;
    border-bottom: 1px solid #E5E7EB;
    background: #FFFFFF;
    padding: clamp(70px, 9vw, 110px) 0;
    overflow: hidden;
  }

  .sg-evolution-grid {
    display: grid;
    grid-template-columns: 0.95fr 1.05fr;
    gap: clamp(32px, 4vw, 54px);
    align-items: flex-start;
  }

  .sg-evolution-visual-col {
    position: sticky;
    top: 100px;
  }

  .sg-evolution-card-pod-3d {
    perspective: 1000px;
  }

  .sg-evolution-card-pod {
    position: relative;
    background: #FAFAFC;
    border: 1px solid #E5E7EB;
    border-radius: 24px;
    padding: 24px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .sg-evolution-card-pod:hover {
    border-color: rgba(239, 65, 54, 0.4);
    box-shadow: 0 16px 40px rgba(239, 65, 54, 0.1);
  }

  /* HOLOGRAPHIC SCANNER BEAM */
  .holographic-scanner-beam {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, transparent, #EF4136, #FFA07A, transparent);
    box-shadow: 0 0 12px #EF4136;
    animation: scannerSweep 3.5s ease-in-out infinite;
    z-index: 10;
    pointer-events: none;
  }

  @keyframes scannerSweep {
    0% { top: 0%; opacity: 0; }
    15% { opacity: 1; }
    85% { opacity: 1; }
    100% { top: 75%; opacity: 0; }
  }

  .sg-evolution-img-wrap {
    position: relative;
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #F3F4F6;
    border-radius: 18px;
    padding: 24px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sg-evolution-3d-img {
    width: 100%;
    max-height: 280px;
    object-fit: contain;
    filter: drop-shadow(0 15px 30px rgba(0, 0, 0, 0.08));
    display: block;
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .sg-evolution-card-pod:hover .sg-evolution-3d-img {
    transform: scale(1.05);
  }

  .sg-evolution-img-badge {
    position: absolute;
    bottom: 12px;
    left: 12px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 14px;
    border-radius: 12px;
    background: #0A0A0C;
    border: 1px solid rgba(239, 65, 54, 0.4);
    color: #FFFFFF;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.05em;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
  }

  .badge-icon-cpu {
    color: #EF4136;
  }

  .sg-evolution-pod-caption {
    padding: 20px 0 0;
  }

  .sg-pod-badge-row {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 14px;
  }

  .sg-pod-chip {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.74rem;
    font-weight: 800;
    padding: 5px 12px;
    border-radius: 8px;
    letter-spacing: 0.04em;
    cursor: pointer;
    border: none;
    transition: all 0.25s ease;
  }

  .sg-pod-chip.chip-trad {
    background: #F3F4F6;
    border: 1px solid #E5E7EB;
    color: #4B5563;
  }
  .sg-pod-chip.chip-trad.is-selected {
    background: #111827;
    border-color: #111827;
    color: #FFFFFF;
  }

  .sg-pod-chip.chip-geo {
    background: rgba(239, 65, 54, 0.09);
    border: 1px solid rgba(239, 65, 54, 0.35);
    color: #EF4136;
  }
  .sg-pod-chip.chip-geo.is-selected {
    background: #EF4136;
    border-color: #EF4136;
    color: #FFFFFF;
    box-shadow: 0 0 14px rgba(239, 65, 54, 0.35);
  }

  .sg-pod-arrow {
    color: #9CA3AF;
  }

  .sg-pod-title {
    font-family: "Outfit", sans-serif;
    font-size: 1.25rem;
    font-weight: 800;
    color: #0A0A0C;
    line-height: 1.3;
    margin: 0 0 10px;
    letter-spacing: -0.01em;
  }

  .sg-pod-desc {
    font-size: 0.88rem;
    line-height: 1.65;
    color: #4B5563;
    margin: 0 0 16px;
  }

  .sg-pod-assurance-pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px;
    background: #F0FDF4;
    border: 1px solid #BBF7D0;
    border-radius: 8px;
    font-size: 0.74rem;
    font-weight: 700;
    color: #166534;
  }

  .pill-check {
    color: #16A34A;
  }

  /* RIGHT STAGES COLUMN */
  .sg-evolution-cards-col {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .sg-evolution-compare-item {
    background: #FFFFFF;
    border: 1px solid #E5E7EB;
    border-radius: 20px;
    padding: 24px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .sg-evolution-compare-item:hover,
  .sg-evolution-compare-item.is-current-stage {
    border-color: #EF4136;
    box-shadow: 0 10px 28px rgba(239, 65, 54, 0.12);
    transform: translateY(-2px);
  }

  .sg-compare-header {
    display: flex;
    align-items: center;
    gap: 12px;
    padding-bottom: 16px;
    margin-bottom: 18px;
    border-bottom: 1px solid #F3F4F6;
  }

  .sg-compare-icon-wrap {
    width: 38px;
    height: 38px;
    border-radius: 10px;
    background: rgba(239, 65, 54, 0.08);
    border: 1px solid rgba(239, 65, 54, 0.25);
    color: #EF4136;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.25s ease;
  }

  .sg-compare-icon-wrap.is-active-icon {
    background: #EF4136;
    color: #FFFFFF;
    box-shadow: 0 0 12px rgba(239, 65, 54, 0.4);
  }

  .sg-compare-feature-name {
    font-family: "Outfit", sans-serif;
    font-size: 1.08rem;
    font-weight: 800;
    color: #0A0A0C;
    flex: 1;
    letter-spacing: -0.01em;
  }

  .sg-compare-step-num {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.72rem;
    font-weight: 800;
    color: #EF4136;
    background: rgba(239, 65, 54, 0.08);
    padding: 4px 10px;
    border-radius: 6px;
    border: 1px solid rgba(239, 65, 54, 0.2);
  }

  .sg-compare-dual-grid {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: 14px;
    align-items: center;
  }

  .sg-compare-box {
    border-radius: 14px;
    padding: 16px 18px;
    min-height: 96px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    transition: all 0.25s ease;
  }

  .sg-compare-box.box-trad {
    background: #F9FAFB;
    border: 1px solid #E5E7EB;
  }

  .sg-compare-box.box-geo {
    background: #FFF8F8;
    border: 1.5px solid rgba(239, 65, 54, 0.35);
    box-shadow: 0 4px 16px rgba(239, 65, 54, 0.06);
  }

  .sg-compare-box.box-highlight {
    border-color: #EF4136;
    box-shadow: 0 0 18px rgba(239, 65, 54, 0.15);
  }

  .sg-compare-box-label {
    display: flex;
    align-items: center;
    gap: 7px;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.7rem;
    font-weight: 800;
    letter-spacing: 0.06em;
    margin-bottom: 8px;
  }

  .box-trad .sg-compare-box-label { color: #6B7280; }
  .box-geo .sg-compare-box-label { color: #EF4136; }

  .status-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }
  .status-dot.dot-gray { background: #9CA3AF; }
  .status-dot.dot-red { background: #EF4136; box-shadow: 0 0 8px #EF4136; }

  .sg-compare-box-text {
    font-size: 0.88rem;
    line-height: 1.5;
    margin: 0;
  }
  .box-trad .sg-compare-box-text { color: #4B5563; }
  .box-geo .sg-compare-box-text { color: #0A0A0C; font-weight: 600; }

  .sg-compare-transfer-arrow {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #FFFFFF;
    border: 1px solid #E5E7EB;
    color: #EF4136;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }

  .transfer-arrow-icon {
    animation: arrowNudge 1.8s ease-in-out infinite;
  }

  @keyframes arrowNudge {
    0%, 100% { transform: translateX(0); }
    50% { transform: translateX(3px); }
  }

  @media (max-width: 1024px) {
    .sg-evolution-grid { grid-template-columns: 1fr; }
    .sg-evolution-visual-col { position: static; }
  }

  @media (max-width: 768px) {
    .sg-compare-dual-grid { grid-template-columns: 1fr; }
    .sg-compare-transfer-arrow { transform: rotate(90deg); margin: 0 auto; }
  }
`;
