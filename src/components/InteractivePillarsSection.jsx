"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, ChevronDown, Sparkles, CheckCircle2 } from "lucide-react";
import KexsioCanvasBackground from "./KexsioCanvasBackground";

export default function InteractivePillarsSection({
  data,
}) {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = data.pillars || [];

  return (
    <section className="sg-section sg-pillars-section">
      <style>{pillarsStyles}</style>
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
          <span className="sg-section-tag">{data.pillarsTag || "6-PILLAR SYSTEM"}</span>
          <h2 className="sg-section-title">
            {data.pillarsTitle ? (
              data.pillarsTitle
            ) : (
              <>THE <span>BRANDFORGE {data.number} FORGE</span></>
            )}
          </h2>
          <p className="sg-section-subtitle">
            {data.pillarsSubtitle || "Every system is engineered to capture market intent, build category authority, and scale pipeline."}
          </p>
        </motion.div>

        {/* QUICK JUMP NAVIGATION CHIPS BAR */}
        <div className="sg-pillars-quick-tabs">
          {pillars.map((p, idx) => (
            <button
              key={idx}
              type="button"
              className={`sg-quick-tab-btn ${activePillar === idx ? "is-active" : ""}`}
              onClick={() => setActivePillar(idx)}
            >
              <span className="tab-idx">0{idx + 1}</span>
              <span className="tab-title">{p.tag || p.title.split(" ")[0]}</span>
            </button>
          ))}
        </div>

        {/* ACCORDION CARDS STREAM */}
        <div className="sg-creative-accordion-list">
          {pillars.map((p, idx) => {
            const PillarIcon = p.icon || Zap;
            const isOpen = activePillar === idx;

            return (
              <motion.div
                key={p.title}
                className={`sg-creative-accordion-card ${isOpen ? "is-expanded" : ""}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
              >
                <button
                  type="button"
                  className="sg-creative-accordion-btn"
                  onClick={() => setActivePillar(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                >
                  <div className="sg-acc-left-meta">
                    <span className="sg-acc-index">0{idx + 1}</span>
                    <div className={`sg-acc-icon-box ${isOpen ? "is-active" : ""}`}>
                      <PillarIcon size={22} />
                    </div>
                  </div>

                  <div className="sg-acc-content-header">
                    <div className="sg-acc-tag-row">
                      <span className="sg-acc-tag">{p.tag}</span>
                      {p.deliverables && (
                        <span className="sg-acc-count-badge">
                          {p.deliverables.length} {p.deliverables.length === 1 ? "Capability" : "Capabilities"}
                        </span>
                      )}
                    </div>
                    <h3 className="sg-acc-title">{p.title}</h3>
                  </div>

                  <div className={`sg-acc-toggle-bubble ${isOpen ? "is-open" : ""}`}>
                    <ChevronDown size={18} className="sg-acc-chevron" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="sg-acc-collapse-body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="sg-acc-body-inner">
                        <p className="sg-acc-desc">{p.description}</p>

                        {p.callout && (
                          <div className="sg-acc-callout">
                            <Sparkles size={16} className="sg-acc-callout-icon" />
                            <p>{p.callout}</p>
                          </div>
                        )}

                        {p.deliverables && p.deliverables.length > 0 && (
                          <div className="sg-acc-deliverables-grid">
                            {p.deliverables.map((deliv, dIdx) => {
                              const parts = deliv.includes(" — ")
                                ? deliv.split(" — ")
                                : deliv.includes(" - ")
                                ? deliv.split(" - ")
                                : null;

                              return (
                                <motion.div
                                  key={dIdx}
                                  className="sg-acc-deliv-item"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.25, delay: dIdx * 0.03 }}
                                  whileHover={{ x: 4, transition: { duration: 0.15 } }}
                                >
                                  <div className="sg-acc-deliv-bullet">
                                    <CheckCircle2 size={15} />
                                  </div>
                                  <div className="sg-acc-deliv-text">
                                    {parts ? (
                                      <>
                                        <strong>{parts[0]}</strong> — {parts.slice(1).join(" — ")}
                                      </>
                                    ) : (
                                      deliv
                                    )}
                                  </div>
                                </motion.div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const pillarsStyles = `
  .sg-pillars-section {
    background: #FFFFFF;
    border-top: 1px solid #E5E7EB;
    border-bottom: 1px solid #E5E7EB;
    padding: clamp(70px, 9vw, 110px) 0;
  }

  .sg-pillars-section .sg-section-title {
    color: #0A0A0C;
  }

  .sg-pillars-section .sg-section-title span {
    color: #EF4136;
  }

  .sg-pillars-section .sg-section-subtitle {
    color: #4B5563;
  }

  .sg-pillars-quick-tabs {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 36px;
    flex-wrap: wrap;
  }

  .sg-quick-tab-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 18px;
    background: #F3F4F6;
    border: 1px solid #E5E7EB;
    border-radius: 999px;
    color: #4B5563;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.74rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.25s ease;
  }

  .sg-quick-tab-btn:hover {
    background: #E5E7EB;
    color: #0A0A0C;
    border-color: rgba(239, 65, 54, 0.4);
  }

  .sg-quick-tab-btn.is-active {
    background: #EF4136;
    border-color: #EF4136;
    color: #FFFFFF;
    box-shadow: 0 4px 16px rgba(239, 65, 54, 0.35);
  }

  .tab-idx {
    opacity: 0.75;
    font-weight: 800;
  }

  .tab-title {
    text-transform: uppercase;
  }

  .sg-creative-accordion-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 1040px;
    margin: 0 auto;
  }

  .sg-creative-accordion-card {
    background: #FAFAFC;
    border: 1px solid #E5E7EB;
    border-radius: 20px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    overflow: hidden;
  }

  .sg-creative-accordion-card:hover {
    border-color: rgba(239, 65, 54, 0.4);
    box-shadow: 0 6px 20px rgba(239, 65, 54, 0.08);
  }

  .sg-creative-accordion-card.is-expanded {
    background: #FFFFFF;
    border-color: #EF4136;
    box-shadow: 0 12px 30px rgba(239, 65, 54, 0.1);
  }

  .sg-creative-accordion-btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 24px 28px;
    background: transparent;
    border: none;
    text-align: left;
    cursor: pointer;
    color: inherit;
    transition: background 0.25s ease;
  }

  .sg-acc-left-meta {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-shrink: 0;
  }

  .sg-acc-index {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.95rem;
    font-weight: 800;
    color: #9CA3AF;
  }

  .sg-creative-accordion-card.is-expanded .sg-acc-index {
    color: #EF4136;
  }

  .sg-acc-icon-box {
    width: 48px;
    height: 48px;
    border-radius: 14px;
    background: #F3F4F6;
    border: 1px solid #E5E7EB;
    color: #0A0A0C;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }

  .sg-acc-icon-box.is-active,
  .sg-creative-accordion-card.is-expanded .sg-acc-icon-box {
    background: #EF4136;
    border-color: #EF4136;
    color: #FFFFFF;
    box-shadow: 0 0 18px rgba(239, 65, 54, 0.4);
  }

  .sg-acc-content-header {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .sg-acc-tag-row {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .sg-acc-tag {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.72rem;
    font-weight: 800;
    color: #EF4136;
    background: rgba(239, 65, 54, 0.08);
    padding: 3px 10px;
    border-radius: 6px;
    border: 1px solid rgba(239, 65, 54, 0.25);
    text-transform: uppercase;
  }

  .sg-acc-count-badge {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.72rem;
    color: #4B5563;
    background: #F3F4F6;
    border: 1px solid #E5E7EB;
    padding: 3px 8px;
    border-radius: 6px;
  }

  .sg-acc-title {
    font-family: "Outfit", sans-serif;
    font-size: clamp(1.15rem, 1.6vw, 1.45rem);
    font-weight: 800;
    color: #0A0A0C;
    margin: 0;
    letter-spacing: -0.01em;
  }

  .sg-acc-toggle-bubble {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: #F3F4F6;
    border: 1px solid #E5E7EB;
    color: #0A0A0C;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .sg-acc-toggle-bubble.is-open {
    background: #EF4136;
    border-color: #EF4136;
    color: #FFFFFF;
    transform: rotate(180deg);
  }

  .sg-acc-collapse-body {
    overflow: hidden;
  }

  .sg-acc-body-inner {
    padding: 0 28px 28px;
    border-top: 1px solid #F3F4F6;
    padding-top: 22px;
  }

  .sg-acc-desc {
    font-size: 0.98rem;
    line-height: 1.7;
    color: #4B5563;
    margin: 0 0 20px;
  }

  .sg-acc-callout {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 14px 18px;
    border-radius: 12px;
    background: rgba(239, 65, 54, 0.06);
    border-left: 3px solid #EF4136;
    color: #1F2937;
    font-size: 0.88rem;
    margin-bottom: 22px;
  }

  .sg-acc-callout p { margin: 0; line-height: 1.55; }
  .sg-acc-callout-icon { color: #EF4136; flex-shrink: 0; margin-top: 2px; }

  .sg-acc-deliverables-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .sg-acc-deliv-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 12px 16px;
    border-radius: 10px;
    background: #F9FAFB;
    border: 1px solid #E5E7EB;
    font-size: 0.88rem;
    line-height: 1.5;
    color: #4B5563;
    transition: all 0.2s ease;
  }

  .sg-acc-deliv-item:hover {
    border-color: rgba(239, 65, 54, 0.4);
    background: #FFFFFF;
  }

  .sg-acc-deliv-bullet {
    color: #EF4136;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .sg-acc-deliv-text strong {
    color: #0A0A0C;
  }

  @media (max-width: 1024px) {
    .sg-acc-deliverables-grid { grid-template-columns: 1fr; }
  }
`;
