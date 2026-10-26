"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function SeoMontarvilleBlueprint({ timeline = [], title, subtitle, onOpenModal: _onOpenModal }) {
  const [activeStep, setActiveStep] = useState(0);

  const defaultSteps = [
    {
      step: "01",
      title: "Full Technical & Entity Audit",
      description: "Deep crawl of crawlability, Core Web Vitals, entity schema gaps, and backlink health.",
      timeline: "WEEK 01",
      tasks: ["Lighthouse 100/100 Benchmark", "JSON-LD Entity Graph Audit", "Keyword Cannibalization Check"],
    },
    {
      step: "02",
      title: "On-Page & Architecture Refactor",
      description: "Re-engineering site taxonomy, sub-200ms page templates, and intent-focused content mapping.",
      timeline: "WEEKS 02 - 04",
      tasks: ["Next.js / Jamstack Speed Optimization", "Topical Cluster Structuring", "High-Intent Meta Hierarchy"],
    },
    {
      step: "03",
      title: "Generative Engine Optimization (GEO)",
      description: "Injecting structured citations, knowledge base vectors, and factual anchors for AI search models.",
      timeline: "MONTH 02",
      tasks: ["Perplexity & ChatGPT Citation Seed Sets", "Wikidata & Entity Vector Linking", "Quotable Semantic Data Modeling"],
    },
    {
      step: "04",
      title: "Authority PR & Multi-Pack Scale",
      description: "Editorial digital PR, Google Maps 3-Pack geo-grids, and continuous ROI pipeline attribution.",
      timeline: "MONTH 03+",
      tasks: ["High-Trust DA 85+ Editorial Mentions", "Local Pack Multi-Grid Supremacy", "Omnichannel Revenue Reporting"],
    },
  ];

  const steps = (timeline && timeline.length > 0)
    ? timeline.map((item, idx) => ({
        step: item.step || `0${idx + 1}`,
        title: item.title,
        description: item.description,
        timeline: item.timeline || `PHASE 0${idx + 1}`,
        tasks: item.tasks || ["Milestone Deliverable Verified", "Sub-200ms Core Vitals Guard", "Bi-Weekly Reporting"],
      }))
    : defaultSteps;

  return (
    <section className="smb-blueprint-section" id="implementation-roadmap">
      <style>{blueprintComponentStyles}</style>

      <div className="smb-container">
        {/* Header */}
        <div className="smb-header">
          <h2 className="smb-title">
            {title ? (
              <span>{title}</span>
            ) : (
              <>
                The Roadmap to <span className="title-red">Execution Supremacy</span>
              </>
            )}
          </h2>
          <p className="smb-subtitle">
            {subtitle || "A battle-tested deployment framework engineered for measurable business impact and compounding digital ROI."}
          </p>
        </div>

        {/* Blueprint Conduit Track & Step Cards */}
        <div className="smb-blueprint-track">
          {/* Laser Progress Line */}
          <div className="smb-laser-line" aria-hidden="true">
            <div
              className="smb-laser-progress"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            />
          </div>

          <div className="smb-steps-grid">
            {steps.map((item, idx) => {
              const isCurrent = activeStep === idx;
              return (
                <div
                  key={item.step || idx}
                  className={`smb-step-card ${isCurrent ? "is-active" : ""}`}
                  onMouseEnter={() => setActiveStep(idx)}
                >
                  <span className="smb-corner-cross" aria-hidden="true">+</span>

                  {/* Top Node Indicator */}
                  <div className="smb-node-row">
                    <div className="smb-node-bubble">
                      <span className="node-num">{item.step}</span>
                    </div>
                    <span className="smb-duration-pill">{item.timeline}</span>
                  </div>

                  <h3 className="smb-step-title">{item.title}</h3>
                  <p className="smb-step-desc">{item.description}</p>

                  {/* Tasks List */}
                  <ul className="smb-tasks-list">
                    {item.tasks?.map((task, tIdx) => (
                      <li key={tIdx} className="smb-task-item">
                        <CheckCircle2 size={13} className="task-check" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Step Footer Telemetry */}
                  <div className="smb-step-footer">
                    <span className="smb-footer-telemetry">PROTOCOL VERIFIED</span>
                    <span className="smb-step-index">0{idx + 1} / 0{steps.length}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

const blueprintComponentStyles = `
  .smb-blueprint-section {
    position: relative;
    background: #000000;
    padding: clamp(70px, 9vw, 110px) 0 clamp(60px, 8vw, 100px);
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    overflow: hidden;
  }

  .smb-container {
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 clamp(20px, 4vw, 40px);
    position: relative;
    z-index: 2;
  }

  .smb-header {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 50px;
  }

  .smb-metalabel {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.8rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    color: #FF1801;
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  .smb-star {
    color: #FF1801;
    animation: smb-star-spin 16s linear infinite;
  }

  @keyframes smb-star-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .smb-title {
    font-family: "Outfit", sans-serif;
    font-size: clamp(32px, 4.2vw, 52px);
    font-weight: 900;
    line-height: 1.15;
    letter-spacing: -0.025em;
    color: #FAFAFC;
    margin: 0 0 16px;
  }

  .title-red {
    color: #FF1801;
    background: linear-gradient(90deg, #FF1801 0%, #FF5A4E 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .smb-subtitle {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 16.5px;
    line-height: 1.65;
    color: #94A3B8;
    margin: 0;
  }

  /* Conduit Track */
  .smb-blueprint-track {
    position: relative;
    padding-top: 24px;
  }

  .smb-laser-line {
    position: absolute;
    top: 48px;
    left: 40px;
    right: 40px;
    height: 2px;
    background: rgba(255, 255, 255, 0.08);
    z-index: 1;
    overflow: hidden;
  }

  .smb-laser-progress {
    height: 100%;
    background: linear-gradient(90deg, #FF1801, #FF5A4E);
    box-shadow: 0 0 12px #FF1801;
    transition: width 0.4s ease;
  }

  .smb-steps-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    position: relative;
    z-index: 2;
  }

  .smb-step-card {
    background: #0E0E14;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    padding: 24px 22px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }

  .smb-step-card:hover,
  .smb-step-card.is-active {
    background: #12121A;
    border-color: #FF1801;
    transform: translateY(-4px);
    box-shadow: 0 16px 35px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 24, 1, 0.12);
  }

  .smb-corner-cross {
    position: absolute;
    top: 12px;
    right: 14px;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.2);
  }

  .smb-node-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .smb-node-bubble {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: #14141C;
    border: 2px solid rgba(255, 255, 255, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }

  .smb-step-card.is-active .smb-node-bubble {
    border-color: #FF1801;
    background: #FF1801;
    box-shadow: 0 0 16px rgba(255, 24, 1, 0.6);
  }

  .node-num {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.88rem;
    font-weight: 900;
    color: #FAFAFC;
  }

  .smb-duration-pill {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.68rem;
    font-weight: 800;
    color: #FF1801;
    background: rgba(255, 24, 1, 0.12);
    border: 1px solid rgba(255, 24, 1, 0.25);
    padding: 3px 8px;
    border-radius: 6px;
  }

  .smb-step-title {
    font-family: "Outfit", sans-serif;
    font-size: 1.15rem;
    font-weight: 800;
    color: #FAFAFC;
    margin: 0 0 10px;
    line-height: 1.3;
  }

  .smb-step-desc {
    font-size: 0.86rem;
    line-height: 1.55;
    color: #94A3B8;
    margin: 0 0 18px;
    flex-grow: 1;
  }

  .smb-tasks-list {
    list-style: none;
    margin: 0 0 18px;
    padding: 12px 0 0;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .smb-task-item {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    font-size: 0.78rem;
    line-height: 1.45;
    color: #CBD5E1;
  }

  .task-check {
    color: #FF1801;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .smb-step-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 12px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }

  .smb-footer-telemetry {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.64rem;
    font-weight: 700;
    color: #64748B;
  }

  .smb-step-index {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.68rem;
    font-weight: 800;
    color: rgba(255, 255, 255, 0.35);
  }

  @media (max-width: 1024px) {
    .smb-steps-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .smb-laser-line {
      display: none;
    }
  }

  @media (max-width: 640px) {
    .smb-steps-grid {
      grid-template-columns: 1fr;
    }
  }
`;
