"use client";

import React, { useState, useRef, useEffect } from "react";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import SwapArrow from "./SwapArrow";

const SEO_GOALS = [
  { id: "geo", label: "ChatGPT & AI Citations", highlight: "Generative Engine Optimization (GEO)" },
  { id: "top3", label: "Google Top 3 Ranks", highlight: "High-Intent Bottom-of-Funnel Keywords" },
  { id: "maps", label: "Coimbatore Maps 3-Pack", highlight: "Local Map Pack & High-Intent Proximity" },
  { id: "vitals", label: "100/100 Core Web Vitals", highlight: "Sub-200ms Technical Edge Speed" },
  { id: "authority", label: "Knowledge Graph Authority", highlight: "Entity Schema & Digital PR Signals" },
];

export default function SeoGoalReelCta({ onOpenModal }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [step, setStep] = useState(1);
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [phoneOrEmail, setPhoneOrEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const reelRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startYRef = useRef(0);
  const currentYRef = useRef(0);

  const selectedGoal = SEO_GOALS[activeIdx];

  const handleNextPill = () => {
    setActiveIdx((prev) => (prev + 1) % SEO_GOALS.length);
  };

  const handlePrevPill = () => {
    setActiveIdx((prev) => (prev - 1 + SEO_GOALS.length) % SEO_GOALS.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onOpenModal) {
      onOpenModal();
    } else {
      setSubmitted(true);
    }
  };

  return (
    <section className="bf-seo-reel-section" id="seo-strategy-reel">
      <style>{`
        .bf-seo-reel-section {
          position: relative;
          padding: 80px 20px 96px;
          background: #0A0A0C;
          color: #FAFAFC;
          overflow: hidden;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .bf-seo-reel-container {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        .bf-seo-reel-header {
          text-align: center;
          margin-bottom: 40px;
        }
        .bf-seo-reel-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 6px 14px;
          border-radius: 9999px;
          background: rgba(239, 65, 54, 0.12);
          border: 1px solid rgba(239, 65, 54, 0.3);
          color: #FF6B5E;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .bf-seo-reel-card {
          background: radial-gradient(circle at 50% 0%, rgba(239, 65, 54, 0.12) 0%, rgba(18, 18, 22, 0.95) 70%);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 28px;
          padding: clamp(32px, 5vw, 56px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15);
          position: relative;
          backdrop-filter: blur(20px);
        }
        .bf-seo-reel-stage {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin: 24px 0 32px;
        }
        .bf-seo-reel-prompt {
          font-size: clamp(1.4rem, 3.2vw, 2.4rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          color: #FFFFFF;
          margin: 0;
        }
        .bf-seo-reel-pill-wrapper {
          position: relative;
          display: inline-flex;
          align-items: center;
        }
        .bf-seo-reel-pill-btn {
          font-size: clamp(1.1rem, 2.5vw, 1.8rem);
          font-weight: 700;
          letter-spacing: -0.01em;
          color: #EF4136;
          background: #FFFFFF;
          border: 3px solid #EF4136;
          border-radius: 9999px;
          padding: 8px 26px 10px;
          cursor: pointer;
          transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 8px 24px rgba(239, 65, 54, 0.35);
        }
        .bf-seo-reel-pill-btn:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 12px 32px rgba(239, 65, 54, 0.45);
        }
        .bf-seo-reel-pill-btn:active {
          transform: translateY(1px) scale(0.98);
        }
        .bf-seo-reel-pills-selector {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          margin: 20px 0 36px;
        }
        .bf-seo-chip-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: rgba(255, 255, 255, 0.7);
          padding: 8px 18px;
          border-radius: 9999px;
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .bf-seo-chip-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #FFFFFF;
          border-color: rgba(239, 65, 54, 0.5);
        }
        .bf-seo-chip-btn.is-active {
          background: #EF4136;
          border-color: #EF4136;
          color: #FFFFFF;
          box-shadow: 0 4px 16px rgba(239, 65, 54, 0.4);
        }
        .bf-seo-reel-action-bar {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 18px;
          padding-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
        .bf-seo-reel-note {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .bf-seo-reel-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #EF4136;
          color: #FFFFFF;
          border: none;
          padding: 14px 28px;
          border-radius: 9999px;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease;
          box-shadow: 0 8px 24px rgba(239, 65, 54, 0.35);
        }
        .bf-seo-reel-cta-btn:hover {
          background: #d9382e;
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(239, 65, 54, 0.5);
        }
      `}</style>

      <div className="bf-seo-reel-container">
        <div className="bf-seo-reel-header">
          <div className="bf-seo-reel-badge">
            <Sparkles size={14} />
            <span>Interactive Search Goal Architect</span>
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, margin: "0 0 12px", letterSpacing: "-0.03em" }}>
            Select Your Primary <span style={{ color: "#EF4136" }}>Growth Objective</span>
          </h2>
          <p style={{ color: "rgba(255, 255, 255, 0.65)", maxWidth: "620px", margin: "0 auto", fontSize: "1.05rem" }}>
            Search algorithms have bifurcated. Click or swipe through the reel below to set your immediate priority.
          </p>
        </div>

        <div className="bf-seo-reel-card">
          <div className="bf-seo-reel-stage">
            <p className="bf-seo-reel-prompt">Our brand must dominate</p>
            <div className="bf-seo-reel-pill-wrapper">
              <button
                type="button"
                className="bf-seo-reel-pill-btn"
                onClick={handleNextPill}
                title="Click to cycle next goal"
              >
                <span>{selectedGoal.label}</span>
                <span style={{ fontSize: "0.85em", opacity: 0.7 }}>⇄</span>
              </button>
            </div>
          </div>

          <div className="bf-seo-reel-pills-selector">
            {SEO_GOALS.map((goal, idx) => (
              <button
                key={goal.id}
                type="button"
                className={`bf-seo-chip-btn ${idx === activeIdx ? "is-active" : ""}`}
                onClick={() => setActiveIdx(idx)}
              >
                {goal.label}
              </button>
            ))}
          </div>

          <div className="bf-seo-reel-action-bar">
            <p className="bf-seo-reel-note">
              <CheckCircle2 size={16} color="#EF4136" />
              <span>Priority Focus: <strong>{selectedGoal.highlight}</strong></span>
            </p>
            <button
              type="button"
              className="bf-seo-reel-cta-btn"
              onClick={handleSubmit}
            >
              <span>Get Targeted SEO & GEO Blueprint</span>
              <SwapArrow dir="up-right" size={16} color="#FFFFFF" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
