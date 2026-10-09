"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight, Sparkles, Clock, Target } from "lucide-react";
import KexsioCanvasBackground from "./KexsioCanvasBackground";

export default function InteractiveBlueprintTimeline({
  timeline = {},
}) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = timeline?.steps || [
    { num: "01", title: "STRATEGY ARCHITECTURE", desc: "120-point diagnostic audit, competitor teardowns & roadmap alignment.", duration: "Sprint 1-2", kpi: "Full Architecture Audit Document" },
    { num: "02", title: "UI/UX & PROTOTYPING", desc: "Custom 3D visual design tokens, glassmorphic UX & conversion triggers.", duration: "Sprint 3-4", kpi: "Sub-Second Prototype & Tokens" },
    { num: "03", title: "SUB-SECOND ENGINEERING", desc: "Next.js/React front-end code, WebGL shaders & Core Web Vitals optimization.", duration: "Sprint 5-6", kpi: "100/100 Core Web Vitals Score" },
    { num: "04", title: "DEPLOYS & ROAS SCALE", desc: "Live production launch, CAPI tracking, GEO schemas & LTV scaling loops.", duration: "Ongoing", kpi: "#1 Rankings & Top LLM Citations" },
  ];

  return (
    <section className="sg-section sg-process-sec">
      <style>{blueprintStyles}</style>
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
          <span className="sg-section-tag">{timeline?.tag || "EXECUTION ROADMAP"}</span>
          <h2 className="sg-section-title">
            {timeline?.title ? (
              timeline.title
            ) : (
              <>4-STEP <span>ENGINEERING BLUEPRINT</span></>
            )}
          </h2>
          <p className="sg-section-subtitle">
            {timeline?.subtitle || "How we take your project from initial strategy blueprint to live market dominance."}
          </p>
        </motion.div>

        {/* TIMELINE STREAM */}
        <div className={`sg-timeline-stream ${steps.length === 6 ? "has-6-steps" : ""}`}>
          {/* Animated Connecting Laser Line */}
          <div className="sg-timeline-line">
            <div className="sg-timeline-laser-pulse" />
          </div>

          {steps.map((step, sIdx) => {
            const isSelected = activeStep === sIdx;

            return (
              <motion.div
                key={step.num}
                className={`sg-timeline-step ${isSelected ? "is-active-step" : ""}`}
                initial={{ opacity: 0, y: 35, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: sIdx * 0.12 }}
                onClick={() => setActiveStep(sIdx)}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                {/* Node Dot with concentric glow rings */}
                <div className="sg-node-dot-wrap">
                  <div className={`sg-node-dot ${isSelected ? "is-selected-dot" : ""}`}>
                    {step.num}
                  </div>
                  {isSelected && <span className="node-active-ring" />}
                </div>

                <div className="sg-timeline-meta-row">
                  <span className="timeline-phase-tag">PHASE 0{sIdx + 1}</span>
                  {step.duration && (
                    <span className="timeline-duration-badge">
                      <Clock size={11} />
                      {step.duration}
                    </span>
                  )}
                </div>

                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const blueprintStyles = `
  .sg-process-sec {
    background: #FFFFFF;
    border-top: 1px solid #E5E7EB;
    border-bottom: 1px solid #E5E7EB;
    padding: clamp(70px, 9vw, 110px) 0;
    position: relative;
    overflow: hidden;
  }

  .sg-process-sec .sg-section-title {
    color: #0A0A0C;
  }

  .sg-process-sec .sg-section-subtitle {
    color: #4B5563;
  }

  .sg-timeline-stream {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    position: relative;
    padding-top: 36px;
  }

  .sg-timeline-stream.has-6-steps {
    grid-template-columns: repeat(3, 1fr);
  }

  .sg-timeline-line {
    position: absolute;
    top: 58px;
    left: 40px;
    right: 40px;
    height: 3px;
    background: #E5E7EB;
    z-index: 1;
    overflow: hidden;
    border-radius: 999px;
  }

  .sg-timeline-laser-pulse {
    position: absolute;
    top: 0;
    left: 0;
    width: 25%;
    height: 100%;
    background: linear-gradient(90deg, transparent, #EF4136, #FFA07A, transparent);
    box-shadow: 0 0 10px #EF4136;
    animation: laserTravel 3.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }

  @keyframes laserTravel {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(500%); }
  }

  .sg-timeline-step {
    position: relative;
    z-index: 2;
    background: #FAFAFC;
    border: 1px solid #E5E7EB;
    border-radius: 22px;
    padding: 28px 22px 24px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .sg-timeline-step:hover,
  .sg-timeline-step.is-active-step {
    border-color: #EF4136;
    background: #FFFFFF;
    box-shadow: 0 14px 35px rgba(239, 65, 54, 0.12), 0 0 0 1px rgba(239, 65, 54, 0.2);
  }

  .sg-node-dot-wrap {
    position: relative;
    width: 48px;
    height: 48px;
    margin-bottom: 20px;
  }

  .sg-node-dot {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #0A0A0C;
    color: #FFFFFF;
    border: 2px solid #EF4136;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.9rem;
    font-weight: 800;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
    transition: all 0.25s ease;
  }

  .sg-node-dot.is-selected-dot {
    background: #EF4136;
    border-color: #FFFFFF;
    box-shadow: 0 0 18px rgba(239, 65, 54, 0.5);
  }

  .node-active-ring {
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    border: 1px dashed rgba(239, 65, 54, 0.6);
    animation: ringSpin 10s linear infinite;
  }

  @keyframes ringSpin {
    to { transform: rotate(360deg); }
  }

  .sg-timeline-meta-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .timeline-phase-tag {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.68rem;
    font-weight: 800;
    color: #9CA3AF;
    letter-spacing: 0.06em;
  }

  .timeline-duration-badge {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.68rem;
    font-weight: 700;
    color: #EF4136;
    background: rgba(239, 65, 54, 0.08);
    padding: 2px 7px;
    border-radius: 6px;
  }

  .sg-timeline-step h4 {
    font-family: "Outfit", sans-serif;
    font-size: 1.1rem;
    font-weight: 800;
    color: #0A0A0C;
    margin: 0 0 10px;
    letter-spacing: -0.01em;
  }

  .sg-timeline-step p {
    font-size: 0.88rem;
    line-height: 1.6;
    color: #4B5563;
    margin: 0 0 18px;
    flex: 1;
  }

  .sg-timeline-kpi {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 8px 12px;
    background: #F3F4F6;
    border-radius: 10px;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.72rem;
    font-weight: 700;
    color: #1F2937;
    border: 1px solid #E5E7EB;
  }

  .kpi-icon {
    color: #EF4136;
    flex-shrink: 0;
  }

  @media (max-width: 1024px) {
    .sg-timeline-stream { grid-template-columns: repeat(2, 1fr); }
    .sg-timeline-line { display: none; }
  }

  @media (max-width: 640px) {
    .sg-timeline-stream { grid-template-columns: 1fr; }
  }
`;
