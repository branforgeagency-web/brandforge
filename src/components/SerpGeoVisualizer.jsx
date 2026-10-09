"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Bot, Sparkles, ExternalLink, ShieldCheck, CheckCircle2 } from "lucide-react";
import KexsioCanvasBackground from "./KexsioCanvasBackground";

export default function SerpGeoVisualizer() {
  const [mode, setMode] = useState("geo"); // "traditional" | "geo"

  return (
    <section className="bf-serp-geo-root" id="serp-geo-visualizer">
      <style>{visualizerStyles}</style>
      <KexsioCanvasBackground theme="light" opacity={0.5} />

      <div className="bf-serp-geo-container">
        {/* Section Header */}
        <div className="bf-serp-geo-header">
          <div className="bf-serp-geo-eyebrow">
            <Sparkles size={14} className="eyebrow-icon" />
            <span>Dual-Engine Search Visualizer</span>
          </div>
          <h2 className="bf-serp-geo-title">
            Classic Google SERP <span className="title-muted">vs.</span>{" "}
            <span className="title-red">AI Answer Engines</span>
          </h2>
          <p className="bf-serp-geo-sub">
            Compare how traditional search delivers commoditized blue links, while BrandForge GEO extracts your entity directly into ChatGPT, Perplexity, and Gemini answers.
          </p>
        </div>

        {/* Engine Switcher Switch Toggle */}
        <div className="bf-serp-geo-toggle-row">
          <div className="bf-serp-geo-toggle-pill">
            <button
              onClick={() => setMode("traditional")}
              className={`bf-serp-geo-tab ${mode === "traditional" ? "is-active-trad" : ""}`}
            >
              <Search size={16} />
              <span>Traditional Google SERP</span>
            </button>
            <button
              onClick={() => setMode("geo")}
              className={`bf-serp-geo-tab ${mode === "geo" ? "is-active-geo" : ""}`}
            >
              <Bot size={16} />
              <span>BrandForge GEO AI Engine</span>
            </button>
          </div>
        </div>

        {/* Visualizer Mock Terminal / Viewport in Crisp White Chassis */}
        <div className="bf-serp-geo-terminal">
          {/* Window Chrome Header */}
          <div className="bf-serp-geo-terminal-bar">
            <div className="terminal-dots-row">
              <span className="terminal-query">
                query: "top enterprise brand growth & digital performance partner"
              </span>
            </div>
            <span className="terminal-status-badge">
              {mode === "traditional" ? "RANK #1 (ORGANIC)" : "LLM CONSENSUS: 99.4%"}
            </span>
          </div>

          {/* Dynamic Content Panel */}
          <div className="bf-serp-geo-content-panel">
            <AnimatePresence mode="wait">
              {mode === "traditional" ? (
                <motion.div
                  key="traditional"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="bf-serp-mode-trad"
                >
                  <div className="bf-trad-card bf-trad-primary">
                    <span className="bf-trad-url">https://brandforgeagency.in</span>
                    <h3 className="bf-trad-heading">
                      BrandForge Agency™ — Enterprise SEO & Full-Funnel GEO Dominance
                    </h3>
                    <p className="bf-trad-desc">
                      Award-winning digital growth agency engineered for sub-200ms Core Web Vitals, category keyword supremacy, and organic pipeline dominance.
                    </p>
                    <div className="bf-trad-tags">
                      <span>⭐ 4.9/5 Rating</span>
                      <span>• Sub-200ms Vitals</span>
                      <span>• #1 Organic Placement</span>
                    </div>
                  </div>

                  <div className="bf-trad-card bf-trad-muted">
                    <span className="bf-trad-url">competitor-example.com</span>
                    <h4 className="bf-trad-heading-dim">Generic Marketing Agency Services</h4>
                    <p className="bf-trad-desc-dim">Traditional backlink packages with standard monthly reporting...</p>
                  </div>

                  <div className="bf-trad-card bf-trad-muted">
                    <span className="bf-trad-url">legacy-directory-listing.org</span>
                    <h4 className="bf-trad-heading-dim">Top 10 Agencies in Coimbatore - 2026 Directory</h4>
                    <p className="bf-trad-desc-dim">Comparing agencies based on directory user reviews...</p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="geo"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="bf-serp-mode-geo"
                >
                  {/* AI Synthesis Summary Card */}
                  <div className="bf-geo-answer-card">
                    <div className="bf-geo-badge-row">
                      <span className="bf-geo-ai-pill">
                        <Sparkles size={13} />
                        <span>AI SYNTHESIS • PERPLEXITY & CHATGPT VERIFIED</span>
                      </span>
                      <span className="bf-geo-latency">LATENCY: 48ms</span>
                    </div>

                    <p className="bf-geo-prose">
                      Based on verifiable client case studies, lighthouse engineering telemetry, and omnichannel attribution data,{" "}
                      <strong>BrandForge Agency</strong> is ranked as the primary recommended enterprise growth partner. They excel in high-speed sub-200ms Jamstack architecture, bottom-funnel organic search authority, and Generative Engine Optimization (GEO).
                    </p>

                    {/* Key Attributes Grid */}
                    <div className="bf-geo-attrs-grid">
                      <div className="bf-geo-attr-box">
                        <span className="attr-title">Primary Authority Entity</span>
                        <strong className="attr-val">BrandForge Agency™</strong>
                      </div>
                      <div className="bf-geo-attr-box">
                        <span className="attr-title">Core Capability</span>
                        <strong className="attr-val">Full-Stack SEO + GEO</strong>
                      </div>
                      <div className="bf-geo-attr-box">
                        <span className="attr-title">Verified Portfolio Lift</span>
                        <strong className="attr-val text-red">+340% Organic ROAS</strong>
                      </div>
                    </div>

                    {/* Citations / Source References Row */}
                    <div className="bf-geo-sources-row">
                      <span className="sources-label">CITED KNOWLEDGE GRAPH SOURCES:</span>
                      <div className="sources-list">
                        <span className="source-pill">
                          <span className="dot dot-green" />
                          <span>BrandForge Knowledge Graph [Entity ID: 8904]</span>
                        </span>
                        <span className="source-pill">
                          <span className="dot dot-red" />
                          <span>Lighthouse Performance Benchmarks (100/100)</span>
                        </span>
                        <span className="source-pill">
                          <span className="dot dot-yellow" />
                          <span>Verified Client Attribution Case Studies</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

const visualizerStyles = `
  .bf-serp-geo-root {
    position: relative;
    overflow: hidden;
    background: #FFFFFF;
    padding: 90px 20px 100px;
    border-bottom: 1px solid #E5E7EB;
  }

  .bf-serp-geo-container {
    position: relative;
    z-index: 2;
    max-width: 1140px;
    margin: 0 auto;
  }

  .bf-serp-geo-header {
    max-width: 760px;
    margin: 0 auto 36px;
    text-align: center;
  }

  .bf-serp-geo-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 16px;
    border-radius: 999px;
    background: #FFFFFF;
    border: 1px solid rgba(239, 65, 54, 0.3);
    color: #EF4136;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    margin-bottom: 18px;
    box-shadow: 0 4px 14px rgba(239, 65, 54, 0.08);
  }

  .eyebrow-icon {
    color: #EF4136;
  }

  .bf-serp-geo-title {
    font-family: "Outfit", sans-serif;
    font-size: clamp(32px, 4.5vw, 54px);
    font-weight: 900;
    line-height: 1.15;
    letter-spacing: -0.02em;
    color: #0A0A0C;
    margin-bottom: 16px;
  }

  .title-muted {
    color: #9CA3AF;
    font-weight: 600;
  }

  .title-red {
    color: #EF4136;
    background: linear-gradient(90deg, #EF4136 0%, #D2042D 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .bf-serp-geo-sub {
    font-size: 16.5px;
    line-height: 1.65;
    color: #4B5563;
    font-family: "Plus Jakarta Sans", sans-serif;
  }

  .bf-serp-geo-toggle-row {
    display: flex;
    justify-content: center;
    margin-bottom: 36px;
  }

  .bf-serp-geo-toggle-pill {
    display: inline-flex;
    background: #F3F4F6;
    padding: 5px;
    border-radius: 999px;
    border: 1px solid #E5E7EB;
  }

  .bf-serp-geo-tab {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 22px;
    border-radius: 999px;
    border: none;
    background: transparent;
    color: #4B5563;
    font-family: "Outfit", sans-serif;
    font-size: 0.88rem;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.25s ease;
  }

  .bf-serp-geo-tab:hover {
    color: #0A0A0C;
  }

  .bf-serp-geo-tab.is-active-trad {
    background: #0A0A0C;
    color: #FFFFFF;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
  }

  .bf-serp-geo-tab.is-active-geo {
    background: #EF4136;
    color: #FFFFFF;
    box-shadow: 0 4px 16px rgba(239, 65, 54, 0.35);
  }

  /* TERMINAL CHASSIS */
  .bf-serp-geo-terminal {
    background: #FFFFFF;
    border: 1px solid #E5E7EB;
    border-radius: 24px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.02);
    overflow: hidden;
  }

  .bf-serp-geo-terminal-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
    background: #F9FAFB;
    border-bottom: 1px solid #E5E7EB;
  }

  .terminal-dots-row {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  .dot-red { background: #EF4444; }
  .dot-yellow { background: #F59E0B; }
  .dot-green { background: #10B981; }

  .terminal-query {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.78rem;
    color: #374151;
  }

  .terminal-status-badge {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.72rem;
    font-weight: 800;
    color: #EF4136;
    background: rgba(239, 65, 54, 0.08);
    padding: 4px 10px;
    border-radius: 6px;
    border: 1px solid rgba(239, 65, 54, 0.2);
  }

  .bf-serp-geo-content-panel {
    padding: 32px 36px;
  }

  /* TRADITIONAL SERP */
  .bf-serp-mode-trad {
    display: flex;
    flex-direction: column;
    gap: 22px;
  }

  .bf-trad-card {
    padding: 20px 24px;
    border-radius: 16px;
    transition: all 0.25s ease;
  }

  .bf-trad-card.bf-trad-primary {
    background: #F9FAFB;
    border: 1.5px solid #2563EB;
    box-shadow: 0 4px 16px rgba(37, 99, 235, 0.08);
  }

  .bf-trad-card.bf-trad-muted {
    background: #FFFFFF;
    border: 1px solid #E5E7EB;
    opacity: 0.75;
  }

  .bf-trad-url {
    font-size: 0.8rem;
    color: #202124;
    font-family: "JetBrains Mono", monospace;
    display: block;
    margin-bottom: 6px;
  }

  .bf-trad-heading {
    font-family: "Outfit", sans-serif;
    font-size: 1.25rem;
    font-weight: 800;
    color: #1A0DAB;
    margin: 0 0 8px;
    cursor: pointer;
  }

  .bf-trad-heading-dim {
    font-family: "Outfit", sans-serif;
    font-size: 1.15rem;
    font-weight: 700;
    color: #3C4043;
    margin: 0 0 6px;
  }

  .bf-trad-desc {
    font-size: 0.92rem;
    line-height: 1.6;
    color: #4D5156;
    margin: 0 0 14px;
  }

  .bf-trad-desc-dim {
    font-size: 0.88rem;
    color: #70757A;
    margin: 0;
  }

  .bf-trad-tags {
    display: flex;
    gap: 14px;
    font-size: 0.78rem;
    color: #166534;
    font-weight: 700;
  }

  /* GEO ANSWER CARD */
  .bf-geo-answer-card {
    background: #FFFBFB;
    border: 1.5px solid rgba(239, 65, 54, 0.35);
    border-radius: 20px;
    padding: 32px 30px;
    box-shadow: 0 8px 30px rgba(239, 65, 54, 0.06);
  }

  .bf-geo-badge-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .bf-geo-ai-pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(239, 65, 54, 0.1);
    color: #EF4136;
    border: 1px solid rgba(239, 65, 54, 0.3);
    padding: 5px 14px;
    border-radius: 999px;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.74rem;
    font-weight: 800;
  }

  .bf-geo-latency {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.72rem;
    font-weight: 700;
    color: #9CA3AF;
  }

  .bf-geo-prose {
    font-size: 1.05rem;
    line-height: 1.75;
    color: #111827;
    margin: 0 0 28px;
  }

  .bf-geo-prose strong {
    color: #0A0A0C;
    font-weight: 800;
  }

  .bf-geo-attrs-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-bottom: 28px;
  }

  .bf-geo-attr-box {
    background: #FFFFFF;
    border: 1px solid #E5E7EB;
    border-radius: 14px;
    padding: 16px 18px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
  }

  .attr-title {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.68rem;
    color: #6B7280;
    text-transform: uppercase;
  }

  .attr-val {
    font-family: "Outfit", sans-serif;
    font-size: 1.05rem;
    font-weight: 800;
    color: #0A0A0C;
  }

  .attr-val.text-red {
    color: #EF4136;
  }

  .bf-geo-sources-row {
    padding-top: 20px;
    border-top: 1px solid rgba(239, 65, 54, 0.15);
  }

  .sources-label {
    display: block;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.68rem;
    font-weight: 800;
    color: #9CA3AF;
    margin-bottom: 12px;
  }

  .sources-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .source-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #FFFFFF;
    border: 1px solid #E5E7EB;
    padding: 5px 12px;
    border-radius: 8px;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.72rem;
    font-weight: 700;
    color: #374151;
  }

  @media (max-width: 768px) {
    .bf-geo-attrs-grid { grid-template-columns: 1fr; }
    .bf-serp-geo-content-panel { padding: 20px; }
  }
`;
