"use client";

import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import KexsioCanvasBackground from "./KexsioCanvasBackground";

function AnimatedMetricCounter({ value }) {
  // Extract number and suffix/prefix if any
  const match = value.match(/([^\d]*)(\d+)([^\d]*)/);
  const prefix = match ? match[1] : "";
  const targetNum = match ? parseInt(match[2], 10) : 0;
  const suffix = match ? match[3] : "";

  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView || !targetNum) return;

    const duration = 1800; // 1.8s
    const startTime = performance.now();

    const updateCounter = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = Math.floor(easeProgress * targetNum);
      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(targetNum);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isInView, targetNum]);

  return (
    <span ref={ref} className="sg-metric-val">
      {targetNum > 0 ? (
        <>
          <span className="metric-prefix">{prefix}</span>
          <span className="metric-num">{count}</span>
          <span className="metric-suffix">{suffix}</span>
        </>
      ) : (
        value
      )}
    </span>
  );
}

export default function InteractiveMetricsSection({ metrics = [] }) {
  const [hoveredLogo, setHoveredLogo] = useState(null);

  const clientWins = [
    { name: "Sonic Prints", logo: "/client-sonicprints.png", scale: 1.4, win: "4.8x Organic Inquiries in 90 Days", tag: "E-Commerce" },
    { name: "ThoughtFlows", logo: "/client-thoughtflows.png", scale: 1.35, win: "620% Traffic Surge // #1 AI Citation", tag: "B2B SaaS" },
    { name: "Talentera", logo: "/client-talentera.png", scale: 1.0, win: "Rank #1 for 48 High-Intent Keywords", tag: "HR Tech" },
    { name: "ThoughtSpace", logo: "/client-thoughtspace.png", scale: 1.4, win: "12x Pipeline Scale & Zero-Click Dominance", tag: "Enterprise" },
  ];

  const microBadges = [
    "MoM Organic Growth",
    "Lighthouse Benchmark",
    "Verified Position",
    "Average Open Rate"
  ];

  return (
    <section className="sg-metrics-section">
      <style>{metricsStyles}</style>
      <KexsioCanvasBackground theme="light" opacity={0.65} />

      <div className="sg-container">
        {/* 4 DYNAMIC METRICS PODS */}
        <div className="sg-metrics-strip">
          {metrics.map((m, idx) => (
            <motion.div
              key={m.label}
              className="sg-metric-item"
              initial={{ opacity: 0, y: 35, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <div className="sg-metric-glow-ring" />
              
              <div className="sg-metric-badge-row">
                <span className="sg-metric-badge">0{idx + 1} // {microBadges[idx % microBadges.length]}</span>
              </div>

              <AnimatedMetricCounter value={m.value} />

              <div className="sg-metric-lbl">{m.label}</div>
              <div className="sg-metric-sub">{m.desc}</div>

              {/* Bottom active status micro-bar */}
              <div className="sg-metric-bottom-bar">
                <div className="sg-metric-progress-line" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* INTERACTIVE TRANSPARENT PNG CLIENT LOGOS PROOF STREAM */}
        <motion.div
          className="sg-client-png-strip"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div className="strip-title-row">
            <span className="strip-title-line" />
            <span className="strip-title">TRUSTED BY CATEGORY LEADERS & REGIONAL GIANTS</span>
            <span className="strip-title-line" />
          </div>

          <div className="strip-logos-interactive">
            {clientWins.map((client, cIdx) => (
              <div
                key={client.name}
                className="sg-client-logo-card"
                onMouseEnter={() => setHoveredLogo(cIdx)}
                onMouseLeave={() => setHoveredLogo(null)}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="png-client-logo"
                  style={{ transform: `scale(${client.scale})` }}
                />

                {/* Interactive Tooltip showing real quantifiable client win */}
                {hoveredLogo === cIdx && (
                  <motion.div
                    className="sg-client-tooltip"
                    initial={{ opacity: 0, y: 10, scale: 0.92 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="tooltip-tag">{client.tag}</div>
                    <div className="tooltip-win">{client.win}</div>
                    <div className="tooltip-verified">
                      <ShieldCheck size={12} className="shield-icon" />
                      <span>Verified Client Metric</span>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const metricsStyles = `
  .sg-metrics-section {
    background: #FFFFFF;
    position: relative;
    border-top: 1px solid #E5E7EB;
    border-bottom: 1px solid #E5E7EB;
    padding: 70px 0 60px;
    overflow: hidden;
  }

  .sg-metrics-top-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
    padding-bottom: 16px;
    border-bottom: 1px solid #F3F4F6;
    font-family: "JetBrains Mono", monospace;
  }

  .sg-metrics-live-tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 0.75rem;
    font-weight: 800;
    color: #EF4136;
    background: rgba(239, 65, 54, 0.08);
    padding: 4px 12px;
    border-radius: 999px;
    border: 1px solid rgba(239, 65, 54, 0.25);
  }

  .live-radar-ping {
    width: 6px;
    height: 6px;
    background: #EF4136;
    border-radius: 50%;
    box-shadow: 0 0 8px #EF4136;
    animation: livePing 1.8s infinite;
  }

  @keyframes livePing {
    0% { transform: scale(0.8); opacity: 1; }
    100% { transform: scale(2.2); opacity: 0; }
  }

  .sg-metrics-benchmark-note {
    font-size: 0.72rem;
    font-weight: 700;
    color: #9CA3AF;
    letter-spacing: 0.06em;
  }

  .sg-metrics-strip {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    margin-bottom: 50px;
  }

  .sg-metric-item {
    position: relative;
    text-align: left;
    padding: 30px 24px 26px;
    background: #FAFAFC;
    border: 1px solid #E5E7EB;
    border-radius: 20px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    overflow: hidden;
  }

  .sg-metric-item:hover {
    border-color: rgba(239, 65, 54, 0.5);
    background: #FFFFFF;
    box-shadow: 0 16px 36px rgba(239, 65, 54, 0.1), 0 0 0 1px rgba(239, 65, 54, 0.15);
  }

  .sg-metric-glow-ring {
    position: absolute;
    top: 0;
    right: 0;
    width: 120px;
    height: 120px;
    background: radial-gradient(circle at 100% 0%, rgba(239, 65, 54, 0.08) 0%, transparent 70%);
    pointer-events: none;
  }

  .sg-metric-badge-row {
    margin-bottom: 12px;
  }

  .sg-metric-badge {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.68rem;
    font-weight: 800;
    color: #9CA3AF;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .sg-metric-val {
    font-family: "Outfit", sans-serif;
    font-size: clamp(38px, 4vw, 54px);
    font-weight: 900;
    color: #0A0A0C;
    line-height: 1.05;
    display: block;
    margin-bottom: 10px;
    letter-spacing: -0.02em;
  }

  .metric-prefix, .metric-suffix {
    color: #EF4136;
  }

  .sg-metric-lbl {
    font-family: "Outfit", sans-serif;
    font-size: 0.95rem;
    font-weight: 800;
    letter-spacing: -0.01em;
    color: #0A0A0C;
    margin-bottom: 6px;
  }

  .sg-metric-sub {
    font-size: 0.84rem;
    color: #6B7280;
    line-height: 1.45;
    min-height: 40px;
  }

  .sg-metric-bottom-bar {
    margin-top: 18px;
    width: 100%;
    height: 2px;
    background: #F3F4F6;
    overflow: hidden;
    border-radius: 999px;
  }

  .sg-metric-progress-line {
    width: 40%;
    height: 100%;
    background: linear-gradient(90deg, #EF4136, #FFA07A);
    transition: width 0.4s ease;
  }

  .sg-metric-item:hover .sg-metric-progress-line {
    width: 100%;
  }

  /* CLIENT LOGOS PROOF STREAM */
  .sg-client-png-strip {
    text-align: center;
    padding-top: 36px;
    border-top: 1px solid #F3F4F6;
  }

  .strip-title-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
    margin-bottom: 30px;
  }

  .strip-title-line {
    width: 60px;
    height: 1px;
    background: #E5E7EB;
  }

  .strip-title {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    color: #9CA3AF;
    text-transform: uppercase;
  }

  .strip-logos-interactive {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: clamp(30px, 6vw, 70px);
    flex-wrap: wrap;
  }

  .sg-client-logo-card {
    position: relative;
    padding: 14px 20px;
    border-radius: 14px;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .sg-client-logo-card:hover {
    background: #F9FAFB;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  }

  .png-client-logo {
    max-height: 40px;
    object-fit: contain;
    filter: grayscale(100%) opacity(0.65) contrast(1.1);
    transition: all 0.3s ease;
  }

  .sg-client-logo-card:hover .png-client-logo {
    filter: grayscale(0%) opacity(1) contrast(1);
    transform: scale(1.08) !important;
  }

  /* REAL QUANTIFIABLE CLIENT TOOLTIP */
  .sg-client-tooltip {
    position: absolute;
    bottom: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%);
    width: 250px;
    padding: 12px 14px;
    background: #0A0A0C;
    border: 1px solid rgba(239, 65, 54, 0.4);
    border-radius: 12px;
    color: #FFFFFF;
    text-align: left;
    box-shadow: 0 14px 35px rgba(0, 0, 0, 0.3), 0 0 15px rgba(239, 65, 54, 0.2);
    z-index: 50;
    pointer-events: none;
  }

  .tooltip-tag {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.65rem;
    font-weight: 800;
    color: #EF4136;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    margin-bottom: 4px;
  }

  .tooltip-win {
    font-family: "Outfit", sans-serif;
    font-size: 0.88rem;
    font-weight: 800;
    line-height: 1.35;
    margin-bottom: 8px;
    color: #FFFFFF;
  }

  .tooltip-verified {
    display: flex;
    align-items: center;
    gap: 6px;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.68rem;
    color: #00FF87;
  }

  .shield-icon {
    color: #00FF87;
  }

  @media (max-width: 1024px) {
    .sg-metrics-strip { grid-template-columns: repeat(2, 1fr); }
    .sg-metrics-top-header { flex-direction: column; gap: 8px; align-items: flex-start; }
  }

  @media (max-width: 640px) {
    .sg-metrics-strip { grid-template-columns: 1fr; }
  }
`;
