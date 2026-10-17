"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight, CheckCircle2, Zap, Cpu, Globe, PenTool, BarChart3, ShieldCheck } from "lucide-react";

function SajanStar({ size = 15, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 0C12 0 14.5 9.5 24 12C14.5 14.5 12 24 12 24C12 24 9.5 14.5 0 12C9.5 9.5 12 0 12 0Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default function SeoMontarvillePillars({ data, onOpenModal }) {
  const [expandedIdx, setExpandedIdx] = useState(0);

  const pillars = data?.pillars || [];
  const pillarsTag = data?.pillarsTag || "OUR FULL SERVICE SPECTRUM";
  const pillarsTitle = data?.pillarsTitle || "Our SEO & GEO Services in Coimbatore";
  const pillarsSubtitle = data?.pillarsSubtitle || "As a full-service SEO company in Coimbatore, we handle every layer of organic search visibility and generative AI answers.";

  return (
    <section className="smp-pillars-section" id="service-spectrum">
      <style>{pillarsComponentStyles}</style>

      <div className="smp-container">
        {/* Header */}
        <div className="smp-header">
          <div className="smp-metalabel">
            <SajanStar className="smp-star" />
            <span>{pillarsTag} // SYSTEM ARCHITECTURE</span>
          </div>
          <h2 className="smp-title">{pillarsTitle}</h2>
          <p className="smp-subtitle">{pillarsSubtitle}</p>
        </div>

        {/* Montarville Architectural Hairline Stream */}
        <div className="smp-stream-list">
          {pillars.map((pillar, idx) => {
            const isExpanded = expandedIdx === idx;
            const Icon = pillar.icon || Zap;

            return (
              <div
                key={pillar.title || idx}
                className={`smp-stream-row ${isExpanded ? "is-expanded" : ""}`}
              >
                {/* Clickable Header Bar */}
                <button
                  type="button"
                  className="smp-row-header-btn"
                  onClick={() => setExpandedIdx(isExpanded ? -1 : idx)}
                >
                  <div className="smp-row-left">
                    <span className="smp-row-num">0{idx + 1} / 0{pillars.length}</span>
                    <div className="smp-icon-wrap">
                      <Icon size={18} />
                    </div>
                    <div className="smp-title-col">
                      <span className="smp-tag-badge">{pillar.tag || "CORE SYSTEM"}</span>
                      <h3 className="smp-row-title">{pillar.title}</h3>
                    </div>
                  </div>

                  <div className="smp-row-right">
                    <span className="smp-deliv-count">
                      {pillar.deliverables?.length || 4} Deliverables
                    </span>
                    <div className="smp-toggle-glyph">
                      {isExpanded ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </div>
                </button>

                {/* Smooth Animated Blueprint Expansion Panel */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="smp-expand-body"
                    >
                      <div className="smp-blueprint-card">
                        <span className="smp-card-cross" aria-hidden="true">+</span>

                        <p className="smp-blueprint-desc">{pillar.description}</p>

                        {pillar.callout && (
                          <div className="smp-blueprint-callout">
                            <span className="callout-bar" />
                            <p>{pillar.callout}</p>
                          </div>
                        )}

                        {/* Deliverables Checklist Grid */}
                        <div className="smp-deliverables-grid">
                          {pillar.deliverables?.map((item, dIdx) => (
                            <div key={dIdx} className="smp-deliv-item">
                              <CheckCircle2 size={15} className="smp-check-icon" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>

                        {/* Action CTA Trigger */}
                        <div className="smp-blueprint-footer">
                          <button
                            type="button"
                            className="smp-cta-btn"
                            onClick={() => onOpenModal && onOpenModal(`Deploy ${pillar.title}`)}
                          >
                            <span>DEPLOY THIS PROTOCOL</span>
                            <ArrowRight size={14} />
                          </button>
                          <span className="smp-blueprint-note">
                            Sub-200ms DOM hydration standard included
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const pillarsComponentStyles = `
  .smp-pillars-section {
    position: relative;
    background: #09090C;
    padding: clamp(70px, 9vw, 110px) 0 clamp(60px, 8vw, 100px);
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    overflow: hidden;
  }

  .smp-container {
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 clamp(20px, 4vw, 40px);
    position: relative;
    z-index: 2;
  }

  .smp-header {
    text-align: center;
    max-width: 780px;
    margin: 0 auto 50px;
  }

  .smp-metalabel {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.8rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    color: #EF4136;
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  .smp-star {
    color: #EF4136;
    animation: smp-star-spin 16s linear infinite;
  }

  @keyframes smp-star-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .smp-title {
    font-family: "Outfit", sans-serif;
    font-size: clamp(32px, 4.2vw, 52px);
    font-weight: 900;
    line-height: 1.15;
    letter-spacing: -0.025em;
    color: #FAFAFC;
    margin: 0 0 16px;
  }

  .smp-subtitle {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 16.5px;
    line-height: 1.65;
    color: #94A3B8;
    margin: 0;
  }

  /* Montarville Architectural Stream List */
  .smp-stream-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .smp-stream-row {
    background: #0E0E14;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .smp-stream-row:hover {
    border-color: rgba(239, 65, 54, 0.4);
    background: #111118;
  }

  .smp-stream-row.is-expanded {
    border-color: #EF4136;
    background: #12121A;
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.5), 0 0 20px rgba(239, 65, 54, 0.1);
  }

  .smp-row-header-btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 28px;
    background: transparent;
    border: none;
    cursor: pointer;
    text-align: left;
    color: inherit;
  }

  .smp-row-left {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .smp-row-num {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.88rem;
    font-weight: 800;
    color: rgba(255, 255, 255, 0.4);
  }

  .smp-stream-row.is-expanded .smp-row-num {
    color: #EF4136;
  }

  .smp-icon-wrap {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #EF4136;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }

  .smp-stream-row.is-expanded .smp-icon-wrap {
    background: #EF4136;
    border-color: #EF4136;
    color: #FFFFFF;
    box-shadow: 0 0 16px rgba(239, 65, 54, 0.5);
  }

  .smp-title-col {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .smp-tag-badge {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.68rem;
    font-weight: 800;
    color: #EF4136;
    letter-spacing: 0.06em;
  }

  .smp-row-title {
    font-family: "Outfit", sans-serif;
    font-size: 1.25rem;
    font-weight: 800;
    color: #FAFAFC;
    margin: 0;
  }

  .smp-row-right {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .smp-deliv-count {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.72rem;
    font-weight: 700;
    color: #94A3B8;
    background: rgba(255, 255, 255, 0.05);
    padding: 4px 10px;
    border-radius: 6px;
    border: 1px solid rgba(255, 255, 255, 0.08);
  }

  .smp-toggle-glyph {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: #14141C;
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: #EF4136;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.25s ease;
  }

  .smp-stream-row.is-expanded .smp-toggle-glyph {
    background: #EF4136;
    color: #FFFFFF;
  }

  /* Expanded Blueprint Card */
  .smp-expand-body {
    overflow: hidden;
  }

  .smp-blueprint-card {
    padding: 0 28px 28px;
    position: relative;
  }

  .smp-card-cross {
    position: absolute;
    top: -10px;
    right: 28px;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.2);
  }

  .smp-blueprint-desc {
    font-size: 1rem;
    line-height: 1.7;
    color: #CBD5E1;
    margin: 0 0 20px;
    max-width: 900px;
  }

  .smp-blueprint-callout {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    background: rgba(239, 65, 54, 0.08);
    border: 1px solid rgba(239, 65, 54, 0.25);
    border-radius: 12px;
    padding: 14px 18px;
    margin-bottom: 22px;
  }

  .callout-bar {
    width: 3px;
    height: 100%;
    background: #EF4136;
    border-radius: 2px;
    flex-shrink: 0;
  }

  .smp-blueprint-callout p {
    font-size: 0.9rem;
    line-height: 1.6;
    color: #FAFAFC;
    margin: 0;
    font-weight: 500;
  }

  .smp-deliverables-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px 20px;
    margin-bottom: 24px;
    padding-top: 18px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }

  .smp-deliv-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 0.88rem;
    line-height: 1.55;
    color: #94A3B8;
  }

  .smp-check-icon {
    color: #EF4136;
    flex-shrink: 0;
    margin-top: 3px;
  }

  .smp-blueprint-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }

  .smp-cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #EF4136;
    color: #FFFFFF;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.06em;
    cursor: pointer;
    transition: all 0.25s ease;
    box-shadow: 0 4px 16px rgba(239, 65, 54, 0.35);
  }

  .smp-cta-btn:hover {
    background: #D2042D;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(239, 65, 54, 0.5);
  }

  .smp-blueprint-note {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.72rem;
    color: #64748B;
  }

  @media (max-width: 768px) {
    .smp-row-header-btn {
      padding: 18px 20px;
    }
    .smp-deliv-count {
      display: none;
    }
    .smp-deliverables-grid {
      grid-template-columns: 1fr;
    }
    .smp-blueprint-footer {
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
    }
  }
`;
