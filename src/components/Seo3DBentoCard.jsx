"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Search, Cpu, Globe, Target, Sparkles, CheckCircle2, TrendingUp, ShieldCheck,
  Zap, Check, ExternalLink, ArrowUpRight
} from "lucide-react";

/**
 * World-Class Creative & Interactive 3D Bento Card
 * Powered by Liquid Glass Glassmorphism, real-time mouse spring 3D tilt,
 * and dynamic interactive simulation widgets for each SEO/GEO capability.
 */
export default function Seo3DBentoCard({
  icon: Icon,
  pillarTag,
  title,
  description,
  metricValue,
  metricLabel,
  badgeText,
  visualType = "crawl",
}) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Interactive states for each card type
  const [activeCrawlIdx, setActiveCrawlIdx] = useState(1);
  const [activeGeoIdx, setActiveGeoIdx] = useState(0);
  const [activeIntentIdx, setActiveIntentIdx] = useState(0);
  const [activePrIdx, setActivePrIdx] = useState(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // 3D Perspective Tilt (-10deg to 10deg)
  const rotateX = useTransform(springY, [-0.5, 0.5], ["9deg", "-9deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-9deg", "9deg"]);

  // Dynamic Radial Spotlight Coordinates
  const glareX = useTransform(springX, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(springY, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const renderVisual = () => {
    switch (visualType) {
      case "crawl": {
        const nodes = [
          { name: "XML Sitemap", metric: "0-RTT Crawl", detail: "10k+ URLs indexed in 120ms with clean canonical hierarchy", status: "200 OK" },
          { name: "JSON-LD Schema", metric: "Entity Graph", detail: "Nested Organization, Product & Service semantic markup", status: "VALID" },
          { name: "Core Web Vitals", metric: "100/100 Speed", detail: "Sub-400ms LCP & 0ms CLS edge-rendered with Jamstack", status: "PASS" },
        ];
        return (
          <div className="bf-bento-visual visual-crawl-interactive">
            <div className="interactive-hint-row">
              <span className="live-crawl-beacon">
                <span className="beacon-ping" />
                <span className="beacon-core" />
              </span>
              <span className="hint-txt">LIVE GOOGLEBOT PIPELINE • CLICK NODES</span>
            </div>

            {/* Interactive Animated SVG Node Pipeline */}
            <div className="crawl-svg-pipeline">
              <svg viewBox="0 0 320 26" className="pipeline-svg">
                <line x1="20" y1="13" x2="300" y2="13" className="pipe-bg-track" />
                <line x1="20" y1="13" x2="300" y2="13" className="pipe-active-beam" />
                <circle cx="20" cy="13" r="5" className={`pipe-dot ${activeCrawlIdx === 0 ? "is-selected" : ""}`} />
                <circle cx="160" cy="13" r="5" className={`pipe-dot ${activeCrawlIdx === 1 ? "is-selected" : ""}`} />
                <circle cx="300" cy="13" r="5" className={`pipe-dot ${activeCrawlIdx === 2 ? "is-selected" : ""}`} />
              </svg>
            </div>

            {/* Interactive Node Selector Buttons */}
            <div className="crawl-interactive-nodes">
              {nodes.map((node, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveCrawlIdx(i)}
                  className={`crawl-btn-node ${activeCrawlIdx === i ? "is-active" : ""}`}
                >
                  <span className="node-status-dot" />
                  <span className="node-name">{node.name}</span>
                  <span className="node-tag">{node.status}</span>
                </button>
              ))}
            </div>

            {/* Dynamic Diagnostics readout */}
            <div className="crawl-diagnostics-pod">
              <div className="diag-header">
                <span className="diag-title">{nodes[activeCrawlIdx].metric}</span>
                <span className="diag-badge">AUDIT VERIFIED</span>
              </div>
              <p className="diag-desc">{nodes[activeCrawlIdx].detail}</p>
            </div>
          </div>
        );
      }

      case "geo": {
        const models = [
          {
            id: "chatgpt",
            name: "ChatGPT 4o",
            status: "Top Citation",
            confidence: "99.8%",
            query: '"Leading SEO & GEO partner in Coimbatore?"',
            answer: 'BrandForge is the top-cited recommendation across regional organic graphs.',
          },
          {
            id: "perplexity",
            name: "Perplexity Pro",
            status: "Primary Source",
            confidence: "99.4%",
            query: '"Best enterprise search growth firm?"',
            answer: 'Citing brandforge.in [1] as verified high-authority domain entity.',
          },
          {
            id: "gemini",
            name: "Gemini 1.5",
            status: "Entity Grounded",
            confidence: "99.6%",
            query: '"Top digital marketing agency Coimbatore?"',
            answer: 'Knowledge graph links BrandForge with 100/100 Core Web Vitals.',
          },
        ];
        const activeModel = models[activeGeoIdx];
        return (
          <div className="bf-bento-visual visual-geo-interactive">
            <div className="interactive-hint-row">
              <span className="hint-badge-red">LLM VECTOR CONSENSUS</span>
              <span className="hint-txt">CLICK MODEL TO AUDIT CITATION</span>
            </div>

            {/* Interactive AI Model Selector Tabs */}
            <div className="geo-model-tabs">
              {models.map((m, idx) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setActiveGeoIdx(idx)}
                  className={`geo-tab-btn ${activeGeoIdx === idx ? "is-active" : ""}`}
                >
                  <span className="geo-tab-dot" />
                  <span>{m.name}</span>
                </button>
              ))}
            </div>

            {/* Dynamic AI Prompt & Vector Response Box */}
            <div className="geo-live-terminal">
              <div className="term-query">
                <span className="term-prompt-lbl">PROMPT:</span>
                <span className="term-prompt-txt">{activeModel.query}</span>
              </div>
              <div className="term-response">
                <span className="term-ai-tag">{activeModel.status}</span>
                <p className="term-answer-txt">{activeModel.answer}</p>
              </div>
              <div className="term-bar-wrap">
                <div className="term-bar-header">
                  <span>Vector Confidence: {activeModel.confidence}</span>
                  <span className="term-match">Semantic Match</span>
                </div>
                <div className="term-progress-track">
                  <div
                    className="term-progress-fill"
                    style={{ width: activeModel.confidence }}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      }

      case "intent": {
        const intents = [
          {
            label: "Enterprise SEO",
            query: '"enterprise seo company coimbatore"',
            rank: "#1",
            ctr: "44.2%",
            lift: "+380%",
            bars: [30, 52, 70, 94, 100],
          },
          {
            label: "B2B SaaS GEO",
            query: '"b2b generative engine optimization"',
            rank: "#1",
            ctr: "41.8%",
            lift: "+310%",
            bars: [25, 45, 68, 88, 96],
          },
          {
            label: "Local 3-Pack",
            query: '"best seo agency near me"',
            rank: "#1",
            ctr: "46.5%",
            lift: "+420%",
            bars: [40, 60, 78, 92, 100],
          },
        ];
        const activeItem = intents[activeIntentIdx];
        return (
          <div className="bf-bento-visual visual-intent-interactive">
            <div className="interactive-hint-row">
              <span className="hint-badge-red">HIGH-TICKET PIPELINE</span>
              <span className="hint-txt">SELECT COMMERCIAL QUERY</span>
            </div>

            {/* Interactive Query Pills */}
            <div className="intent-query-pills">
              {intents.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveIntentIdx(idx)}
                  className={`intent-pill-btn ${activeIntentIdx === idx ? "is-active" : ""}`}
                >
                  <Search size={11} className="intent-icon" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            {/* Dynamic SERP Simulation & Growth Graph */}
            <div className="intent-display-box">
              <div className="intent-serp-row">
                <div className="intent-query-badge">
                  <span className="query-snippet">{activeItem.query}</span>
                </div>
                <div className="intent-rank-tag">
                  <span className="rank-bold">{activeItem.rank}</span>
                  <span className="rank-sub">ORGANIC</span>
                </div>
              </div>

              {/* Dynamic Animated Funnel Bars */}
              <div className="intent-bars-wrap">
                <div className="bars-header">
                  <span className="bars-title">Conversion Lift</span>
                  <span className="bars-lift-val">{activeItem.lift} YoY</span>
                </div>
                <div className="bars-chart">
                  {activeItem.bars.map((h, bIdx) => (
                    <div key={bIdx} className="bar-track">
                      <div
                        className={`bar-fill ${bIdx === activeItem.bars.length - 1 ? "peak-bar" : ""}`}
                        style={{ height: `${h}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      }

      case "pr":
      default: {
        const pubs = [
          { name: "Forbes", da: "DA 94", type: "Tier-1 Editorial", status: "Do-Follow Active", score: 96 },
          { name: "TechCrunch", da: "DA 92", type: "Tech Leadership", status: "Indexed & Grounded", score: 94 },
          { name: "Bloomberg", da: "DA 95", type: "Financial Entity", status: "Verified Authority", score: 98 },
          { name: "YourStory", da: "DA 88", type: "Founder Feature", status: "Permanent Backlink", score: 91 },
        ];
        const activePub = pubs[activePrIdx];
        return (
          <div className="bf-bento-visual visual-pr-interactive">
            <div className="interactive-hint-row">
              <span className="hint-badge-red">DOMAIN FORTRESS</span>
              <span className="hint-txt">INSPECT TIER-1 CITATIONS</span>
            </div>

            {/* Interactive Publisher Chips */}
            <div className="pr-publisher-grid">
              {pubs.map((pub, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActivePrIdx(idx)}
                  className={`pr-pub-btn ${activePrIdx === idx ? "is-active" : ""}`}
                >
                  <span className="pub-name">{pub.name}</span>
                  <span className="pub-da">{pub.da}</span>
                </button>
              ))}
            </div>

            {/* Dynamic Authority Audit Pod */}
            <div className="pr-audit-pod">
              <div className="audit-left">
                <div className="audit-trust-ring">
                  <svg viewBox="0 0 36 36" className="ring-svg">
                    <circle cx="18" cy="18" r="14" className="ring-track" />
                    <circle
                      cx="18"
                      cy="18"
                      r="14"
                      className="ring-fill"
                      style={{
                        strokeDasharray: "88",
                        strokeDashoffset: `${88 - (88 * activePub.score) / 100}`,
                      }}
                    />
                  </svg>
                  <span className="ring-num">{activePub.score}</span>
                </div>
                <div className="audit-meta">
                  <span className="audit-tier">{activePub.type}</span>
                  <span className="audit-status">
                    <CheckCircle2 size={12} className="chk-icon" />
                    {activePub.status}
                  </span>
                </div>
              </div>
              <div className="audit-shield-badge">
                <ShieldCheck size={14} className="shield-icon" />
                <span>Zero Spam Score</span>
              </div>
            </div>
          </div>
        );
      }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="bf-3d-bento-card-wrapper"
    >
      <style>{cardStyles}</style>

      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`bf-3d-bento-card-inner ${isHovered ? "is-hovered" : ""}`}
      >
        {/* Dynamic Radial Spotlight follows mouse */}
        <motion.div
          className="bf-3d-bento-glare"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(420px circle at ${glareX} ${glareY}, rgba(239, 65, 54, 0.14), transparent 70%)`,
          }}
        />

        {/* Card Header & Icon */}
        <div style={{ transform: "translateZ(30px)" }} className="bf-3d-bento-header">
          <div className="bf-3d-bento-icon-tag-row">
            <div className="bf-3d-bento-icon-box">
              {Icon && <Icon size={24} />}
            </div>
            <span className="bf-3d-bento-pillar-tag">
              {pillarTag}
            </span>
          </div>

          {badgeText && (
            <span className="bf-3d-bento-badge">
              {badgeText}
            </span>
          )}
        </div>

        {/* Title & Description with 3D Depth */}
        <div style={{ transform: "translateZ(38px)" }} className="bf-3d-bento-body">
          <h3 className="bf-3d-bento-title">
            {title}
          </h3>
          <p className="bf-3d-bento-desc">
            {description}
          </p>
        </div>

        {/* 3D Visual Diagram illustrating capability */}
        <div style={{ transform: "translateZ(44px)" }} className="bf-3d-bento-visual-wrap">
          {renderVisual()}
        </div>

        {/* Rolling Numeric Metric Counter Pod */}
        <div style={{ transform: "translateZ(28px)" }} className="bf-3d-bento-footer">
          <div className="bf-3d-bento-metric-pod">
            <span className="bf-3d-bento-metric-val">
              {metricValue}
            </span>
            <span className="bf-3d-bento-metric-lbl">
              {metricLabel}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const cardStyles = `
  .bf-3d-bento-card-wrapper {
    perspective: 1000px;
    height: 100%;
  }

  /* LIQUID GLASS GLASSMORPHISM CARD SUBSTRATE */
  .bf-3d-bento-card-inner {
    position: relative;
    height: 100%;
    border-radius: 24px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.55) 45%, rgba(255, 255, 255, 0.78) 100%);
    border: 1px solid rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(28px) saturate(200%) contrast(102%);
    -webkit-backdrop-filter: blur(28px) saturate(200%) contrast(102%);
    padding: 30px 26px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    box-shadow:
      0 20px 50px rgba(0, 0, 0, 0.06),
      0 6px 18px rgba(0, 0, 0, 0.03),
      inset 0 1.5px 1.5px 0 rgba(255, 255, 255, 0.98),
      inset 0 -1px 2px 0 rgba(10, 10, 12, 0.04),
      inset 0 0 20px 0 rgba(255, 255, 255, 0.5);
    transition: all 0.38s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .bf-3d-bento-card-inner::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: radial-gradient(circle at 20% 0%, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.15) 30%, transparent 65%);
    pointer-events: none;
    z-index: 1;
  }

  .bf-3d-bento-card-inner.is-hovered {
    border-color: rgba(239, 65, 54, 0.5);
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.92) 0%, rgba(255, 255, 255, 0.62) 45%, rgba(255, 255, 255, 0.85) 100%);
    box-shadow:
      0 30px 70px rgba(239, 65, 54, 0.14),
      0 12px 28px rgba(0, 0, 0, 0.05),
      inset 0 2px 2px 0 rgba(255, 255, 255, 1),
      inset 0 -1.5px 2px 0 rgba(239, 65, 54, 0.18),
      inset 0 0 24px 0 rgba(255, 255, 255, 0.7);
  }

  .bf-3d-bento-glare {
    position: absolute;
    inset: -50%;
    pointer-events: none;
    transition: opacity 0.3s ease;
    z-index: 1;
  }

  .bf-3d-bento-header {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  .bf-3d-bento-icon-tag-row {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .bf-3d-bento-icon-box {
    width: 48px;
    height: 48px;
    border-radius: 14px;
    background: #0A0A0C;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.12);
  }

  .bf-3d-bento-pillar-tag {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.68rem;
    font-weight: 800;
    color: #6B7280;
    letter-spacing: 0.05em;
  }

  .bf-3d-bento-badge {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.68rem;
    font-weight: 800;
    color: #EF4136;
    background: rgba(239, 65, 54, 0.08);
    border: 1px solid rgba(239, 65, 54, 0.25);
    padding: 3px 8px;
    border-radius: 999px;
    letter-spacing: 0.04em;
  }

  .bf-3d-bento-body {
    position: relative;
    z-index: 2;
    margin-bottom: 14px;
  }

  .bf-3d-bento-title {
    font-family: "Outfit", sans-serif;
    font-size: 1.25rem;
    font-weight: 800;
    color: #0A0A0C;
    line-height: 1.3;
    margin: 0 0 8px;
    letter-spacing: -0.01em;
  }

  .bf-3d-bento-desc {
    font-size: 0.88rem;
    line-height: 1.6;
    color: #4B5563;
    margin: 0;
  }

  /* 3D VISUAL DIAGRAM CONTAINERS */
  .bf-3d-bento-visual-wrap {
    position: relative;
    z-index: 2;
    margin: 10px 0 16px;
  }

  .bf-bento-visual {
    background: rgba(255, 255, 255, 0.75);
    border: 1px solid rgba(229, 231, 235, 0.9);
    backdrop-filter: blur(14px);
    border-radius: 16px;
    padding: 14px 16px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
  }

  .interactive-hint-row {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 10px;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.65rem;
    font-weight: 800;
  }

  .hint-txt {
    color: #6B7280;
    letter-spacing: 0.05em;
  }

  .hint-badge-red {
    color: #EF4136;
    background: rgba(239, 65, 54, 0.08);
    padding: 2px 6px;
    border-radius: 4px;
    letter-spacing: 0.05em;
  }

  /* CRAWL PIPELINE STYLES */
  .crawl-svg-pipeline {
    width: 100%;
    height: 26px;
    margin: 4px 0 8px;
  }

  .pipeline-svg {
    width: 100%;
    height: 100%;
  }

  .pipe-bg-track {
    stroke: #E5E7EB;
    stroke-width: 2.5;
    stroke-linecap: round;
  }

  .pipe-active-beam {
    stroke: #EF4136;
    stroke-width: 2.5;
    stroke-linecap: round;
    stroke-dasharray: 20 60;
    animation: crawlBeamFlow 2.8s linear infinite;
  }

  @keyframes crawlBeamFlow {
    0% { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: -160; }
  }

  .pipe-dot {
    fill: #0A0A0C;
    transition: fill 0.3s ease, r 0.3s ease;
  }

  .pipe-dot.is-selected {
    fill: #EF4136;
    r: 6.5;
  }

  .crawl-interactive-nodes {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 6px;
    margin-bottom: 10px;
  }

  .crawl-btn-node {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
    padding: 7px 4px;
    border-radius: 10px;
    background: #F9FAFB;
    border: 1px solid #E5E7EB;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .crawl-btn-node:hover,
  .crawl-btn-node.is-active {
    background: #FFFFFF;
    border-color: #EF4136;
    box-shadow: 0 4px 12px rgba(239, 65, 54, 0.12);
  }

  .node-status-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #10B981;
  }

  .crawl-btn-node.is-active .node-status-dot {
    background: #EF4136;
    box-shadow: 0 0 6px #EF4136;
  }

  .node-name {
    font-family: "Outfit", sans-serif;
    font-size: 0.72rem;
    font-weight: 800;
    color: #0A0A0C;
    white-space: nowrap;
  }

  .node-tag {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.6rem;
    font-weight: 800;
    color: #059669;
  }

  .crawl-btn-node.is-active .node-tag {
    color: #EF4136;
  }

  .crawl-diagnostics-pod {
    background: #F3F4F6;
    border-radius: 10px;
    padding: 8px 12px;
  }

  .diag-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3px;
  }

  .diag-title {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.72rem;
    font-weight: 800;
    color: #0A0A0C;
  }

  .diag-badge {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.58rem;
    font-weight: 800;
    color: #047857;
    background: rgba(16, 185, 129, 0.15);
    padding: 2px 6px;
    border-radius: 999px;
  }

  .diag-desc {
    font-size: 0.76rem;
    line-height: 1.45;
    color: #4B5563;
    margin: 0;
  }

  .live-crawl-beacon {
    position: relative;
    width: 8px;
    height: 8px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .beacon-core {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #EF4136;
  }

  .beacon-ping {
    position: absolute;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: rgba(239, 65, 54, 0.35);
    animation: beaconPing 2s infinite ease-out;
  }

  @keyframes beaconPing {
    0% { transform: scale(0.6); opacity: 1; }
    100% { transform: scale(1.6); opacity: 0; }
  }

  /* GEO AI INTERACTIVE TERMINAL */
  .geo-model-tabs {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 10px;
  }

  .geo-tab-btn {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 10px;
    border-radius: 8px;
    background: #F3F4F6;
    border: 1px solid #E5E7EB;
    font-family: "Outfit", sans-serif;
    font-size: 0.72rem;
    font-weight: 800;
    color: #4B5563;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .geo-tab-btn:hover,
  .geo-tab-btn.is-active {
    background: #0A0A0C;
    color: #FFFFFF;
    border-color: #0A0A0C;
  }

  .geo-tab-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #9CA3AF;
  }

  .geo-tab-btn.is-active .geo-tab-dot {
    background: #EF4136;
  }

  .geo-live-terminal {
    background: #0A0A0C;
    border-radius: 12px;
    padding: 12px 14px;
    color: #FFFFFF;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }

  .term-query {
    display: flex;
    align-items: baseline;
    gap: 6px;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.68rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 6px;
    margin-bottom: 8px;
  }

  .term-prompt-lbl {
    color: #EF4136;
    font-weight: 800;
  }

  .term-prompt-txt {
    color: #E5E7EB;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .term-response {
    margin-bottom: 10px;
  }

  .term-ai-tag {
    display: inline-block;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.6rem;
    font-weight: 800;
    color: #10B981;
    background: rgba(16, 185, 129, 0.15);
    padding: 2px 6px;
    border-radius: 4px;
    margin-bottom: 4px;
  }

  .term-answer-txt {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 0.78rem;
    line-height: 1.45;
    color: #F9FAFB;
    margin: 0;
  }

  .term-bar-wrap {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.62rem;
  }

  .term-bar-header {
    display: flex;
    justify-content: space-between;
    color: #9CA3AF;
    margin-bottom: 3px;
  }

  .term-match {
    color: #EF4136;
  }

  .term-progress-track {
    width: 100%;
    height: 4px;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 999px;
    overflow: hidden;
  }

  .term-progress-fill {
    height: 100%;
    border-radius: 999px;
    background: linear-gradient(90deg, #EF4136, #FF6B6B);
    transition: width 0.4s ease;
  }

  /* INTENT SERP & CONVERSION FUNNEL */
  .intent-query-pills {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 10px;
  }

  .intent-pill-btn {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 10px;
    border-radius: 8px;
    background: #F3F4F6;
    border: 1px solid #E5E7EB;
    font-family: "Outfit", sans-serif;
    font-size: 0.72rem;
    font-weight: 800;
    color: #4B5563;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .intent-pill-btn:hover,
  .intent-pill-btn.is-active {
    background: #EF4136;
    color: #FFFFFF;
    border-color: #EF4136;
    box-shadow: 0 4px 12px rgba(239, 65, 54, 0.25);
  }

  .intent-display-box {
    background: #F9FAFB;
    border: 1px solid #E5E7EB;
    border-radius: 12px;
    padding: 10px 12px;
  }

  .intent-serp-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;
  }

  .intent-query-badge {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.7rem;
    color: #1F2937;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .intent-rank-tag {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    background: #0A0A0C;
    color: #FFFFFF;
    padding: 2px 7px;
    border-radius: 6px;
    font-family: "Outfit", sans-serif;
    font-size: 0.68rem;
    font-weight: 800;
    flex-shrink: 0;
  }

  .rank-bold {
    color: #EF4136;
  }

  .intent-bars-wrap {
    padding-top: 6px;
    border-top: 1px dashed #E5E7EB;
  }

  .bars-header {
    display: flex;
    justify-content: space-between;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.65rem;
    margin-bottom: 6px;
  }

  .bars-title {
    color: #6B7280;
    font-weight: 700;
  }

  .bars-lift-val {
    color: #047857;
    font-weight: 800;
  }

  .bars-chart {
    display: flex;
    align-items: flex-end;
    gap: 6px;
    height: 38px;
  }

  .bar-track {
    flex: 1;
    height: 100%;
    background: #E5E7EB;
    border-radius: 4px;
    display: flex;
    align-items: flex-end;
    overflow: hidden;
  }

  .bar-fill {
    width: 100%;
    background: #9CA3AF;
    border-radius: 4px;
    transition: height 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .bar-fill.peak-bar {
    background: #EF4136;
    box-shadow: 0 0 8px rgba(239, 65, 54, 0.4);
  }

  /* PR FORTRESS AUDIT POD */
  .pr-publisher-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
    margin-bottom: 10px;
  }

  .pr-pub-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6px 2px;
    border-radius: 8px;
    background: #F3F4F6;
    border: 1px solid #E5E7EB;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .pr-pub-btn:hover,
  .pr-pub-btn.is-active {
    background: #0A0A0C;
    border-color: #0A0A0C;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .pub-name {
    font-family: "Outfit", sans-serif;
    font-size: 0.72rem;
    font-weight: 800;
    color: #0A0A0C;
  }

  .pr-pub-btn:hover .pub-name,
  .pr-pub-btn.is-active .pub-name {
    color: #FFFFFF;
  }

  .pub-da {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.6rem;
    font-weight: 800;
    color: #EF4136;
  }

  .pr-audit-pod {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #F9FAFB;
    border: 1px solid #E5E7EB;
    border-radius: 12px;
    padding: 8px 12px;
  }

  .audit-left {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .audit-trust-ring {
    position: relative;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .ring-svg {
    width: 36px;
    height: 36px;
    transform: rotate(-90deg);
  }

  .ring-track {
    fill: none;
    stroke: #E5E7EB;
    stroke-width: 3;
  }

  .ring-fill {
    fill: none;
    stroke: #EF4136;
    stroke-width: 3;
    stroke-linecap: round;
    transition: stroke-dashoffset 0.4s ease;
  }

  .ring-num {
    position: absolute;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.72rem;
    font-weight: 900;
    color: #0A0A0C;
  }

  .audit-meta {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .audit-tier {
    font-family: "Outfit", sans-serif;
    font-size: 0.76rem;
    font-weight: 800;
    color: #0A0A0C;
  }

  .audit-status {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.62rem;
    font-weight: 700;
    color: #059669;
  }

  .chk-icon {
    color: #059669;
  }

  .audit-shield-badge {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.62rem;
    font-weight: 800;
    color: #1F2937;
    background: #E5E7EB;
    padding: 3px 7px;
    border-radius: 6px;
  }

  .shield-icon {
    color: #EF4136;
  }

  /* METRIC COUNTER POD */
  .bf-3d-bento-footer {
    position: relative;
    z-index: 2;
    padding-top: 14px;
    border-top: 1px dashed rgba(229, 231, 235, 0.9);
  }

  .bf-3d-bento-metric-pod {
    display: flex;
    align-items: baseline;
    gap: 8px;
  }

  .bf-3d-bento-metric-val {
    font-family: "JetBrains Mono", monospace;
    font-size: 1.45rem;
    font-weight: 900;
    color: #EF4136;
    letter-spacing: -0.02em;
  }

  .bf-3d-bento-metric-lbl {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.72rem;
    font-weight: 800;
    color: #0A0A0C;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }
`;
