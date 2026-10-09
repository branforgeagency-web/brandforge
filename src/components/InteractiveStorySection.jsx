"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Zap, Sparkles, Activity, ShieldCheck, ArrowRight, Bot, Search } from "lucide-react";
import LetsTalkForm from "./LetsTalkForm";
import KexsioCanvasBackground from "./KexsioCanvasBackground";

function StoryPillarCard({ pillar, index }) {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  const PillarIcon = pillar.icon || Zap;
  const pillarDesc = pillar.description
    ? (pillar.description.length > 130 ? pillar.description.slice(0, 127) + "..." : pillar.description)
    : (pillar.deliverables?.[0] || "");

  const proofTags = [
    "#1 Maps Pack & SERP",
    "Top 3 AI Source Citations",
    "+340% Organic Pipeline"
  ];
  const proofTag = pillar.proof || proofTags[index % proofTags.length];

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
      className="sg-story-pillar-3d"
    >
      <div className={`sg-story-pillar-inner ${hovered ? "is-hovered" : ""}`}>
        {/* Animated Radial Spotlight Glare */}
        <div
          className="sg-pillar-glare"
          style={{
            opacity: hovered ? 0.8 : 0,
          }}
        />

        {/* Top pillar row */}
        <div className="sg-pillar-top-meta">
          <span className="sg-pillar-node-id">PILLAR 0{index + 1}</span>
          <span className="sg-pillar-proof-tag">{proofTag}</span>
        </div>

        {/* Center content */}
        <div className="sg-pillar-main">
          <div className="sg-pillar-icon-wrap">
            <PillarIcon size={22} className="sg-pillar-icon" />
            <span className="sg-pillar-icon-pulse" />
          </div>

          <h4 className="sg-pillar-title">{pillar.title}</h4>
          <p className="sg-pillar-desc">{pillarDesc}</p>
        </div>

        {/* Bottom Conduit Indicator */}
        <div className="sg-pillar-conduit">
          <div className="sg-pillar-conduit-bar" />
          <span className="sg-pillar-status-text">
            <span className="status-ping" />
            PROVEN FRAMEWORK
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function InteractiveStorySection({
  data,
  storyHeading,
  topThreePillars,
}) {
  const [activeHighlight, setActiveHighlight] = useState(null);

  const keywords = [
    { key: "Google Maps 3-Pack", tooltip: "High-intent localized pack dominance in Coimbatore & surrounding commercial hubs." },
    { key: "ChatGPT Neural Answers", tooltip: "Direct knowledge-base entity indexing so LLMs cite your brand as the #1 answer." },
    { key: "Zero-Click Citations", tooltip: "Capturing answer overviews without relying on disappearing organic blue clicks." },
    { key: "Core Web Vitals 100/100", tooltip: "Sub-200ms DOM hydration built on modern high-speed Jamstack code." }
  ];

  return (
    <section className="sg-seo-story-section">
      <style>{storyStyles}</style>
      <KexsioCanvasBackground theme="light" opacity={0.4} />

      <div className="sg-container">
        {/* SPLIT GRID: STORY & LEAD FORM */}
        <div className="sg-seo-split-grid">
          {/* LEFT COLUMN: THE EDITORIAL STORY */}
          <motion.div
            className="sg-seo-story-left"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="sg-tech-pill inline-pill">
              <span className="sg-tech-pill-dot">•</span>
              <span>{storyHeading.pill}</span>
              <span className="sg-tech-pill-dot">•</span>
            </div>

            <h2 className="sg-seo-story-heading">
              {storyHeading.lead} <span>{storyHeading.accent}</span>
            </h2>

            {/* Interactive Keyword Pills */}
            <div className="sg-story-interactive-pills">
              <span className="pills-label">CORE VECTORS:</span>
              {keywords.map((kw, i) => (
                <div
                  key={i}
                  className={`sg-interactive-kw-pill ${activeHighlight === i ? "is-active" : ""}`}
                  onMouseEnter={() => setActiveHighlight(i)}
                  onMouseLeave={() => setActiveHighlight(null)}
                >
                  <Sparkles size={11} className="kw-icon" />
                  <span>{kw.key}</span>
                  {activeHighlight === i && (
                    <motion.div
                      className="sg-kw-tooltip"
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {kw.tooltip}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            <div className="sg-seo-story-body">
              {Array.isArray(data.subtitle) ? (
                data.subtitle.map((para, i) => (
                  <p key={i} className={`sg-seo-story-para ${i === 0 ? "lead-para" : ""}`}>
                    {para}
                  </p>
                ))
              ) : typeof data.subtitle === "string" && data.subtitle.includes("\n\n") ? (
                data.subtitle.split("\n\n").map((para, i) => (
                  <p key={i} className={`sg-seo-story-para ${i === 0 ? "lead-para" : ""}`}>
                    {para}
                  </p>
                ))
              ) : (
                <p className="sg-seo-story-para lead-para">{data.subtitle}</p>
              )}
            </div>

            {/* Technical SEO & GEO Architecture Blueprint Image */}
            <div className="sg-story-blueprint-card">
              <div className="blueprint-top-bar">
                <span className="blueprint-tag">TECHNICAL CRAWL & GEO VECTOR ARCHITECTURE</span>
                <span className="blueprint-indicator">PROPRIETARY BLUEPRINT</span>
              </div>
              <div className="blueprint-img-wrap">
                <img
                  src="/seo-sketch-diagram-transparent.png"
                  alt="BrandForge Dual-Engine SEO & GEO Architecture Schematic"
                  className="sg-story-blueprint-img"
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: LEAD CAPTURE FORM */}
          <motion.div
            className="sg-seo-story-right"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="sg-cyber-form-container">
              <div className="sg-inline-form-wrap">
                <LetsTalkForm
                  title="LET'S TALK"
                  subtitle={`Get in touch with our strategy team for ${data.eyebrow} & expect a response within 4 hours`}
                  defaultService={data.eyebrow}
                  compact={true}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3 3D INTERACTIVE PILLAR CARDS */}
        <motion.div
          className="sg-seo-story-pillars"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {topThreePillars.map((pillar, idx) => (
            <StoryPillarCard key={idx} pillar={pillar} index={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const storyStyles = `
  .sg-seo-story-section {
    background: #FFFFFF;
    position: relative;
    padding: clamp(70px, 9vw, 110px) 0;
  }

  .sg-story-telemetry-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #FFFFFF;
    border: 1px solid #E5E7EB;
    border-radius: 14px;
    padding: 12px 20px;
    margin-bottom: 34px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
    font-family: "JetBrains Mono", monospace;
    font-size: 0.75rem;
    color: #4B5563;
  }

  .sg-telemetry-left {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .telemetry-beacon {
    position: relative;
    width: 8px;
    height: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .beacon-dot {
    width: 8px;
    height: 8px;
    background: #059669;
    border-radius: 50%;
    box-shadow: 0 0 10px #059669;
  }

  .beacon-ring {
    position: absolute;
    width: 18px;
    height: 18px;
    border: 1px solid rgba(5, 150, 105, 0.5);
    border-radius: 50%;
    animation: beaconPulse 2s ease-out infinite;
  }

  @keyframes beaconPulse {
    0% { transform: scale(0.6); opacity: 1; }
    100% { transform: scale(1.8); opacity: 0; }
  }

  .telemetry-label {
    color: #6B7280;
    font-weight: 700;
  }

  .telemetry-val {
    color: #0A0A0C;
    font-weight: 800;
  }

  .sg-telemetry-right {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .telemetry-metric strong {
    color: #EF4136;
  }

  .telemetry-sep {
    color: #D1D5DB;
  }

  .sg-seo-story-heading {
    font-family: "Outfit", sans-serif;
    font-size: clamp(28px, 3.6vw, 44px);
    font-weight: 900;
    color: #0A0A0C;
    line-height: 1.18;
    margin: 16px 0 20px;
    letter-spacing: -0.02em;
  }

  .sg-seo-story-heading span {
    color: #EF4136;
  }

  .sg-story-interactive-pills {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
    margin-bottom: 24px;
  }

  .pills-label {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.72rem;
    font-weight: 800;
    color: #EF4136;
    letter-spacing: 0.08em;
    margin-right: 4px;
  }

  .sg-interactive-kw-pill {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    border-radius: 999px;
    background: #F3F4F6;
    border: 1px solid #E5E7EB;
    color: #1F2937;
    font-size: 0.76rem;
    font-family: "JetBrains Mono", monospace;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.25s ease;
  }

  .sg-interactive-kw-pill:hover,
  .sg-interactive-kw-pill.is-active {
    background: rgba(239, 65, 54, 0.08);
    border-color: #EF4136;
    color: #EF4136;
    box-shadow: 0 4px 12px rgba(239, 65, 54, 0.15);
  }

  .kw-icon {
    color: #EF4136;
  }

  .sg-kw-tooltip {
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    width: 240px;
    padding: 10px 14px;
    background: #0A0A0C;
    border: 1px solid #EF4136;
    border-radius: 10px;
    color: #FFFFFF;
    font-size: 0.75rem;
    line-height: 1.45;
    font-family: "Plus Jakarta Sans", sans-serif;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(239, 65, 54, 0.2);
    pointer-events: none;
    z-index: 50;
  }

  .sg-seo-story-para {
    font-size: 16px;
    line-height: 1.7;
    color: #4B5563;
    margin: 0 0 16px;
  }

  .sg-seo-story-para.lead-para {
    font-size: 17.5px;
    font-weight: 600;
    color: #1F2937;
  }

  /* BLUEPRINT SCHEMATIC CARD - TRANSPARENT SEAMLESS PRESENTATION */
  .sg-story-blueprint-card {
    margin-top: 28px;
    background: transparent;
    border: none;
    border-radius: 0;
    padding: 0;
    box-shadow: none;
    transition: all 0.3s ease;
  }

  .sg-story-blueprint-card:hover {
    border-color: transparent;
    box-shadow: none;
  }

  .blueprint-top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    margin-bottom: 14px;
    border-bottom: 1px solid #E5E7EB;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.68rem;
    font-weight: 800;
  }

  .blueprint-tag {
    color: #6B7280;
  }

  .blueprint-indicator {
    color: #EF4136;
    background: rgba(239, 65, 54, 0.08);
    padding: 3px 8px;
    border-radius: 6px;
    border: 1px solid rgba(239, 65, 54, 0.2);
  }

  .blueprint-img-wrap {
    width: 100%;
    overflow: hidden;
    background: transparent;
    border: none;
    box-shadow: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sg-story-blueprint-img {
    width: 100%;
    height: auto;
    object-fit: contain;
    background: transparent;
    transition: transform 0.4s ease;
  }

  .sg-story-blueprint-card:hover .sg-story-blueprint-img {
    transform: scale(1.02);
  }

  /* 3D PILLAR CARDS */
  .sg-story-pillar-3d {
    perspective: 1000px;
    transform-style: preserve-3d;
  }

  .sg-story-pillar-inner {
    position: relative;
    background: #FFFFFF;
    border: 1px solid #E5E7EB;
    border-radius: 20px;
    padding: 26px 24px;
    overflow: hidden;
    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
    min-height: 220px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .sg-story-pillar-inner.is-hovered {
    border-color: #EF4136;
    background: #FFFFFF;
    box-shadow: 0 16px 36px rgba(239, 65, 54, 0.12);
    transform: translateZ(10px);
  }

  .sg-pillar-glare {
    position: absolute;
    inset: -50%;
    background: radial-gradient(circle at 50% 50%, rgba(239, 65, 54, 0.08) 0%, transparent 60%);
    pointer-events: none;
    transition: opacity 0.3s ease;
  }

  .sg-pillar-top-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.7rem;
    font-weight: 800;
  }

  .sg-pillar-node-id {
    color: #9CA3AF;
    letter-spacing: 0.06em;
  }

  .sg-pillar-proof-tag {
    color: #EF4136;
    background: rgba(239, 65, 54, 0.08);
    padding: 3px 8px;
    border-radius: 6px;
    border: 1px solid rgba(239, 65, 54, 0.25);
  }

  .sg-pillar-main {
    flex: 1;
  }

  .sg-pillar-icon-wrap {
    position: relative;
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: rgba(239, 65, 54, 0.1);
    border: 1px solid rgba(239, 65, 54, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #EF4136;
    margin-bottom: 16px;
  }

  .sg-pillar-icon-pulse {
    position: absolute;
    inset: -3px;
    border-radius: 14px;
    border: 1px dashed rgba(239, 65, 54, 0.3);
    animation: spinSlow 20s linear infinite;
  }

  @keyframes spinSlow {
    to { transform: rotate(360deg); }
  }

  .sg-pillar-title {
    font-family: "Outfit", sans-serif;
    font-size: 1.15rem;
    font-weight: 800;
    color: #0A0A0C;
    margin: 0 0 8px;
    letter-spacing: -0.01em;
  }

  .sg-pillar-desc {
    font-size: 0.88rem;
    line-height: 1.55;
    color: #4B5563;
    margin: 0 0 18px;
  }

  .sg-pillar-conduit {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 14px;
    border-top: 1px solid #F3F4F6;
  }

  .sg-pillar-conduit-bar {
    width: 32px;
    height: 2px;
    background: linear-gradient(90deg, #EF4136, transparent);
  }

  .sg-pillar-status-text {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.68rem;
    font-weight: 800;
    color: #6B7280;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .status-ping {
    width: 5px;
    height: 5px;
    background: #059669;
    border-radius: 50%;
    box-shadow: 0 0 6px #059669;
  }

  @media (max-width: 1024px) {
    .sg-story-telemetry-bar { flex-direction: column; gap: 8px; align-items: flex-start; }
    .sg-story-pillar-3d { margin-bottom: 16px; }
  }
`;
