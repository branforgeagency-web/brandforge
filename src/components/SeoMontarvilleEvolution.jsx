"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles, Zap, ChevronDown } from "lucide-react";

export default function SeoMontarvilleEvolution({
  matrixRows = [],
  matrixTag: _matrixTag = "PARADIGM SHIFT",
  matrixTitle = "The Evolution from Traditional SEO to Generative AI Optimization",
  matrixSubtitle = "Search is no longer just typing keywords into a box. Millions of buyers now ask AI assistants for direct brand recommendations.",
}) {
  const [activeFilter, setActiveFilter] = useState("all"); // "all" | "01" | "02" | "03" | "04"
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [expandedIdx, setExpandedIdx] = useState(0); // Accordion deep-dive index
  const [viewMode, setViewMode] = useState("split"); // "split" | "traditional" | "geo"

  const defaultRows = [
    {
      num: "01",
      id: "01",
      feature: "Audience & Discovery Target",
      dimension: "Target Entity",
      traditional: "Mechanical web crawler bots parsing static HTML metadata, headers, and keyword density formulas.",
      traditionalTelemetry: "2.8% Average CTR · 14-Day Index Crawl Cycle",
      traditionalStat: "14-Day Crawl Delay",
      traditionalFriction: "High Bot Scraping Overhead",
      geo: "Autonomous LLM reasoning engines (ChatGPT, Perplexity, Gemini, Claude) synthesizing verified answers.",
      geoTelemetry: "99.4% LLM Consensus · Direct Entity Attribution",
      geoStat: "Sub-50ms Vector Response",
      geoAdvantage: "Multi-Engine Verified Source Set",
      detailProse:
        "While vintage crawler bots spend weeks indexing static keyword density, generative AI engines evaluate semantic vector distance in real-time. BrandForge architects high-dimension entity graphs that force ChatGPT and Perplexity to prioritize your brand as the baseline citation.",
    },
    {
      num: "02",
      id: "02",
      feature: "Authority & Ranking Engine",
      dimension: "Ranking Engine",
      traditional: "Backlink quantity exchanges, exact-match anchor text schemes, and vulnerable PageRank algorithms.",
      traditionalTelemetry: "High Algorithm Volatility · Backlink Decay",
      traditionalStat: "Decaying Link Signals",
      traditionalFriction: "Algorithmic Vulnerability",
      geo: "Semantic Knowledge Graphs, multi-dimensional vector embeddings, and verified seed-set citations.",
      geoTelemetry: "Sub-50ms Vector Retrieval · Seed Set Supremacy",
      geoStat: "Knowledge Graph Authority",
      geoAdvantage: "Immutable Neural Vector Weight",
      detailProse:
        "Modern LLMs rely on seed-set authority and knowledge graph consensus rather than raw backlink volume. We encode your brand into authoritative institutional graphs, eliminating ranking volatility during search engine core updates.",
    },
    {
      num: "03",
      id: "03",
      feature: "Search Output Interface",
      dimension: "Output Format",
      traditional: "10 commoditized blue links buried underneath sponsored PPC ad auctions and aggregator directory spam.",
      traditionalTelemetry: "68% Clicks Lost to Ads · Friction Loop",
      traditionalStat: "68% Lost to Sponsored Ads",
      traditionalFriction: "Commoditized Blue Links",
      geo: "Direct synthesized answer placement with authoritative enterprise source citations and contextual recommendations.",
      geoTelemetry: "Zero-Click Authority · #1 AI Citation",
      geoStat: "#1 Source Citation",
      geoAdvantage: "Zero-Click AI Supremacy",
      detailProse:
        "Over 60% of Google queries now conclude with AI overviews or direct conversational answers. Rather than bidding for commoditized ad space, BrandForge positions your business as the definitive answer cited at the exact moment of buyer intent.",
    },
    {
      num: "04",
      id: "04",
      feature: "Buyer Decision Velocity",
      dimension: "Conversion Path",
      traditional: "Prolonged multi-tab browsing loops with high bounce rates, banner fatigue, and fragmented research.",
      traditionalTelemetry: "3-4 Site Visits to Convert · High Drop-Off",
      traditionalStat: "3-4 Visits Required",
      traditionalFriction: "Fragmented Multi-Tab Fatigue",
      geo: "Single-prompt enterprise qualification with immediate confidence and direct decision triggers inside AI workflows.",
      geoTelemetry: "+340% Pipeline Velocity · High-Intent Conversion",
      geoStat: "+340% Pipeline Velocity",
      geoAdvantage: "Single-Prompt Qualification",
      detailProse:
        "Enterprise buyers researching high-value services no longer visit dozens of websites. By securing primary attribution across ChatGPT, Claude, and Perplexity, BrandForge converts high-intent buyers on their very first prompt interaction.",
    },
  ];

  const rows = matrixRows.length > 0
    ? matrixRows.map((r, i) => ({
        num: `0${i + 1}`,
        id: `0${i + 1}`,
        feature: r.feature || `Dimension 0${i + 1}`,
        dimension: "Core Protocol",
        traditional: r.traditional || "",
        traditionalTelemetry: "Legacy Search Constraint",
        traditionalStat: "Web 2.0 Algorithmic Delay",
        traditionalFriction: "Mechanical Crawler Bot Friction",
        geo: r.brandforge || r.geo || "",
        geoTelemetry: "Next-Gen GEO Advantage",
        geoStat: "Sub-50ms Consensus",
        geoAdvantage: "Direct Entity Vector Mapping",
        detailProse:
          "BrandForge optimizes your entity across both traditional Google SERP algorithms and modern LLM knowledge graphs simultaneously.",
      }))
    : defaultRows;

  const filteredRows = activeFilter === "all" ? rows : rows.filter((r) => r.id === activeFilter);

  return (
    <section className="sme-section-root" id="evolution-matrix">
      <style>{evolutionStyles}</style>

      {/* Montarville Intersecting Circles SVG Watermark */}
      <div className="sme-watermark-wrap" aria-hidden="true">
        <svg
          width="768"
          height="610"
          viewBox="0 0 768 610"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="384" cy="417.5" r="191.5" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1.2" />
          <circle cx="384" cy="192" r="191.5" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1.2" />
          <circle cx="192" cy="304.7" r="191.5" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1.2" />
          <circle cx="576" cy="304.7" r="191.5" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1.2" />
        </svg>
      </div>

      <div className="sme-container">
        {/* Header with Montarville Signature Red Surtitle */}
        <div className="sme-header">

          <h2 className="sme-title">
            {matrixTitle ? (
              matrixTitle.includes("VS") ? (
                <>
                  <span className="title-muted">{matrixTitle.split("VS")[0].trim()}</span>{" "}
                  <span className="title-muted">VS</span>{" "}
                  <span className="title-red">{matrixTitle.split("VS")[1].trim()}</span>
                </>
              ) : matrixTitle.toLowerCase().includes(" to ") ? (
                <>
                  {matrixTitle.split(/ to /i)[0].trim()}{" "}
                  to <span className="title-red">{matrixTitle.split(/ to /i)[1].trim()}</span>
                </>
              ) : (
                <span>{matrixTitle}</span>
              )
            ) : (
              <>
                The Evolution from <span className="title-muted">Traditional SEO</span> to{" "}
                <span className="title-red">Generative AI Optimization</span>
              </>
            )}
          </h2>

          <p className="sme-subtitle">{matrixSubtitle}</p>

          {/* Interactive Mode & Filter Toolbar (Zero Cards, Clean Typographic Pills) */}
          <div className="sme-interactive-toolbar">
            <div className="sme-filter-tabs">
              <button
                type="button"
                onClick={() => setActiveFilter("all")}
                className={`sme-filter-btn ${activeFilter === "all" ? "is-active" : ""}`}
              >
                All Dimensions
              </button>
              {rows.map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setActiveFilter(r.id)}
                  className={`sme-filter-btn ${activeFilter === r.id ? "is-active" : ""}`}
                >
                  {r.feature.split(" ")[0]}
                </button>
              ))}
            </div>

            <div className="sme-view-toggle">
              <button
                type="button"
                onClick={() => setViewMode("split")}
                className={`sme-toggle-btn ${viewMode === "split" ? "is-active" : ""}`}
              >
                Split Horizon
              </button>
              <button
                type="button"
                onClick={() => setViewMode("traditional")}
                className={`sme-toggle-btn ${viewMode === "traditional" ? "is-active" : ""}`}
              >
                Legacy SERP
              </button>
              <button
                type="button"
                onClick={() => setViewMode("geo")}
                className={`sme-toggle-btn ${viewMode === "geo" ? "is-active" : ""}`}
              >
                <Sparkles size={11} className="inline-sparkle" /> GEO Protocol
              </button>
            </div>
          </div>
        </div>

        {/* Creative Typographic Comparison Ledger (ZERO CARDS) */}
        <div className="sme-ledger">
          {/* Ledger Table Column Headers */}
          <div className="sme-ledger-head" aria-hidden="true">
            <div className="sme-col-dim">
              <span className="sme-head-tag">DIMENSION & DISCOVERY</span>
            </div>

            {(viewMode === "split" || viewMode === "traditional") && (
              <div className="sme-col-trad">
                <div className="sme-head-row">
                  <span className="sme-head-dot dot-gray" />
                  <span className="sme-head-tag">TRADITIONAL GOOGLE SERP (ERA 2012–2023)</span>
                </div>
              </div>
            )}

            {viewMode === "split" && <div className="sme-col-arrow" />}

            {(viewMode === "split" || viewMode === "geo") && (
              <div className="sme-col-geo">
                <div className="sme-head-row">
                  <span className="sme-head-dot dot-red" />
                  <span className="sme-head-tag text-red">BRANDFORGE GEO PROTOCOL (2026+ NEURAL AI)</span>
                </div>
              </div>
            )}
          </div>

          {/* Ledger Architectural Rows with Smooth Interactive Expanders */}
          <div className="sme-ledger-body">
            {filteredRows.map((row, idx) => {
              const isHovered = hoveredIdx === idx;
              const isExpanded = expandedIdx === idx;

              return (
                <div
                  key={row.feature}
                  className={`sme-row-group ${isHovered ? "is-hovered" : ""} ${isExpanded ? "is-expanded" : ""}`}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  {/* Primary Row Trigger */}
                  <div
                    className="sme-row"
                    onClick={() => setExpandedIdx(isExpanded ? null : idx)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setExpandedIdx(isExpanded ? null : idx);
                      }
                    }}
                    aria-expanded={isExpanded}
                  >
                    {/* Left Column: Number & Feature Name */}
                    <div className="sme-col-dim">
                      <div className="sme-dim-badge-row">
                        <span className="sme-dim-index">{row.num}</span>
                        <span className="sme-expand-hint">
                          {isExpanded ? "Collapse" : "Inspect Protocol"}
                          <ChevronDown size={11} className={`sme-chevron ${isExpanded ? "is-open" : ""}`} />
                        </span>
                      </div>
                      <h3 className="sme-dim-title">{row.feature}</h3>
                      <span className="sme-dim-label">{row.dimension}</span>
                    </div>

                    {/* Middle Column: Traditional SEO Era */}
                    {(viewMode === "split" || viewMode === "traditional") && (
                      <div className="sme-col-trad">
                        <p className="sme-trad-desc">{row.traditional}</p>
                        <div className="sme-trad-telemetry">
                          <span className="telemetry-bar-dim" />
                          <span>{row.traditionalTelemetry}</span>
                        </div>
                      </div>
                    )}

                    {/* Center Column: Kinetic Evolution Vector Arrow */}
                    {viewMode === "split" && (
                      <div className="sme-col-arrow" aria-hidden="true">
                        <div className="sme-arrow-pill">
                          <ArrowRight size={13} className="sme-arrow-icon" />
                        </div>
                      </div>
                    )}

                    {/* Right Column: BrandForge GEO Protocol */}
                    {(viewMode === "split" || viewMode === "geo") && (
                      <div className="sme-col-geo">
                        <p className="sme-geo-desc">{row.geo}</p>
                        <div className="sme-geo-telemetry">
                          <span className="telemetry-bar-red" />
                          <span className="text-red font-bold">{row.geoTelemetry}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Dynamic Deep-Dive Telemetry Accordion (Zero Cards, Architectural Lines) */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="sme-deepdive-panel"
                      >
                        <div className="sme-deepdive-inner">
                          {/* Live Telemetry Comparison Grid */}
                          <div className="sme-deepdive-grid">
                            <div className="sme-deepdive-box is-trad">
                              <span className="deepdive-subhead">VINTAGE SEARCH DEFICIT</span>
                              <strong className="deepdive-stat">{row.traditionalStat}</strong>
                              <span className="deepdive-note">{row.traditionalFriction}</span>
                            </div>

                            <div className="sme-deepdive-arrow-col" aria-hidden="true">
                              <Zap size={16} className="text-red" />
                            </div>

                            <div className="sme-deepdive-box is-geo">
                              <span className="deepdive-subhead text-red">NEURAL GEO ADVANTAGE</span>
                              <strong className="deepdive-stat text-red">{row.geoStat}</strong>
                              <span className="deepdive-note text-white">{row.geoAdvantage}</span>
                            </div>
                          </div>

                          {/* Architectural Strategic Analysis */}
                          <p className="sme-deepdive-prose">{row.detailProse}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Bottom Horizon Metric Strip */}
          <div className="sme-ledger-footer">
            <div className="sme-footer-stat">
              <span className="sme-stat-label">LEGACY GOOGLE SERP CONSTRAINTS</span>
              <p className="sme-stat-desc">
                68% of enterprise clicks absorbed by sponsored PPC ads before prospects reach organic links.
              </p>
            </div>
            <div className="sme-footer-divider" />
            <div className="sme-footer-stat is-geo">
              <span className="sme-stat-label text-red">BRANDFORGE DUAL-ENGINE GEO ADVANTAGE</span>
              <p className="sme-stat-desc text-white">
                <CheckCircle2 size={13} className="text-red inline-icon" /> Verified #1 recommendation across Perplexity, ChatGPT, and Gemini knowledge graphs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const evolutionStyles = `
  /* Montarville Section Foundation (Zero Cards, Red/Black/White Only) */
  .sme-section-root {
    position: relative;
    background: #09090C;
    color: #FAFAFC;
    padding: clamp(80px, 9vw, 120px) 0 clamp(70px, 8vw, 110px);
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    overflow: hidden;
  }

  .sme-watermark-wrap {
    position: absolute;
    top: 50%;
    right: -120px;
    transform: translateY(-50%);
    pointer-events: none;
    z-index: 1;
    opacity: 0.6;
  }

  .sme-container {
    position: relative;
    z-index: 2;
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 clamp(20px, 4vw, 40px);
  }

  /* Section Header */
  .sme-header {
    text-align: center;
    max-width: 920px;
    margin: 0 auto clamp(40px, 5.5vw, 64px);
  }

  .sme-surtitle {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    font-family: "JetBrains Mono", monospace;
    font-size: 11px;
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #FAFAFC;
    margin-bottom: 22px;
  }

  .sme-surtitle-rect {
    display: inline-block;
    width: 20px;
    height: 8px;
    background-color: #EF4136;
    border-radius: 2px;
    box-shadow: 0 0 10px rgba(239, 65, 54, 0.5);
  }

  .sme-title {
    font-family: "General Sans", "Outfit", -apple-system, sans-serif;
    font-size: clamp(32px, 4.5vw, 56px);
    font-weight: 700;
    line-height: 1.12;
    letter-spacing: -0.03em;
    color: #FAFAFC;
    margin: 0 0 18px 0;
  }

  .title-muted {
    color: rgba(255, 255, 255, 0.42);
    font-weight: 500;
  }

  .title-red {
    color: #EF4136;
  }

  .sme-subtitle {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: clamp(15.5px, 1.2vw, 18px);
    line-height: 1.65;
    color: rgba(255, 255, 255, 0.68);
    margin: 0 auto 32px;
  }

  /* Interactive Toolbar (Dimension filter & Split View Toggle) */
  .sme-interactive-toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
    padding-top: 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }

  .sme-filter-tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .sme-filter-btn {
    appearance: none;
    cursor: pointer;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: rgba(255, 255, 255, 0.6);
    font-family: "JetBrains Mono", monospace;
    font-size: 0.72rem;
    font-weight: 700;
    padding: 6px 14px;
    border-radius: 4px;
    transition: all 0.25s ease;
  }

  .sme-filter-btn:hover {
    color: #FAFAFC;
    border-color: rgba(255, 255, 255, 0.35);
  }

  .sme-filter-btn.is-active {
    background: #EF4136;
    border-color: #EF4136;
    color: #FAFAFC;
    box-shadow: 0 0 12px rgba(239, 65, 54, 0.35);
  }

  .sme-view-toggle {
    display: inline-flex;
    background: #000000;
    padding: 3px;
    border-radius: 6px;
    border: 1px solid rgba(255, 255, 255, 0.12);
  }

  .sme-toggle-btn {
    appearance: none;
    cursor: pointer;
    background: transparent;
    border: none;
    color: rgba(255, 255, 255, 0.6);
    font-family: "General Sans", sans-serif;
    font-size: 0.78rem;
    font-weight: 700;
    padding: 6px 12px;
    border-radius: 4px;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 5px;
  }

  .sme-toggle-btn:hover {
    color: #FAFAFC;
  }

  .sme-toggle-btn.is-active {
    background: rgba(255, 255, 255, 0.12);
    color: #FAFAFC;
  }

  .inline-sparkle {
    color: #EF4136;
  }

  /* Typographic Ledger Table (Zero Cards) */
  .sme-ledger {
    width: 100%;
    display: flex;
    flex-direction: column;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    margin-top: 24px;
  }

  /* Ledger Column Header Row */
  .sme-ledger-head {
    display: grid;
    grid-template-columns: 260px 1fr 48px 1fr;
    gap: 28px;
    align-items: center;
    padding: 16px 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    background: rgba(255, 255, 255, 0.02);
  }

  .sme-head-row {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .sme-head-tag {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.7rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.5);
  }

  .sme-head-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .dot-gray {
    background: rgba(255, 255, 255, 0.35);
  }

  .dot-red {
    background: #EF4136;
    box-shadow: 0 0 6px #EF4136;
  }

  /* Ledger Rows */
  .sme-ledger-body {
    display: flex;
    flex-direction: column;
  }

  .sme-row-group {
    position: relative;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    transition: background-color 0.25s ease;
  }

  .sme-row-group::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: #EF4136;
    opacity: 0;
    transition: opacity 0.25s ease;
    z-index: 3;
  }

  .sme-row-group.is-hovered,
  .sme-row-group.is-expanded {
    background: rgba(255, 255, 255, 0.02);
  }

  .sme-row-group.is-hovered::before,
  .sme-row-group.is-expanded::before {
    opacity: 1;
  }

  .sme-row {
    display: grid;
    grid-template-columns: 260px 1fr 48px 1fr;
    gap: 28px;
    align-items: center;
    padding: 30px 20px;
    cursor: pointer;
    user-select: none;
    outline: none;
  }

  /* Left Column: Dimension */
  .sme-col-dim {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .sme-dim-badge-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 12px;
  }

  .sme-dim-index {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.72rem;
    font-weight: 800;
    color: #EF4136;
    letter-spacing: 0.08em;
  }

  .sme-expand-hint {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.65rem;
    color: rgba(255, 255, 255, 0.4);
    transition: color 0.2s ease;
  }

  .sme-row-group:hover .sme-expand-hint {
    color: #EF4136;
  }

  .sme-chevron {
    transition: transform 0.25s ease;
  }

  .sme-chevron.is-open {
    transform: rotate(180deg);
  }

  .sme-dim-title {
    font-family: "General Sans", "Outfit", sans-serif;
    font-size: 1.15rem;
    font-weight: 700;
    color: #FAFAFC;
    margin: 0;
    line-height: 1.3;
  }

  .sme-dim-label {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.65rem;
    color: rgba(255, 255, 255, 0.35);
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  /* Traditional Column */
  .sme-col-trad {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .sme-trad-desc {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 0.94rem;
    line-height: 1.62;
    color: rgba(255, 255, 255, 0.55);
    margin: 0;
  }

  .sme-trad-telemetry {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.7rem;
    color: rgba(255, 255, 255, 0.4);
    letter-spacing: 0.04em;
  }

  .telemetry-bar-dim {
    display: inline-block;
    width: 14px;
    height: 2px;
    background: rgba(255, 255, 255, 0.25);
  }

  /* Center Vector Arrow Column */
  .sme-col-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sme-arrow-pill {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
  }

  .sme-row-group.is-hovered .sme-arrow-pill,
  .sme-row-group.is-expanded .sme-arrow-pill {
    background: #EF4136;
    border-color: #EF4136;
    transform: translateX(3px);
  }

  .sme-arrow-icon {
    color: rgba(255, 255, 255, 0.5);
    transition: color 0.25s ease;
  }

  .sme-row-group.is-hovered .sme-arrow-icon,
  .sme-row-group.is-expanded .sme-arrow-icon {
    color: #FAFAFC;
  }

  /* GEO Column */
  .sme-col-geo {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .sme-geo-desc {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 0.96rem;
    line-height: 1.65;
    color: #FAFAFC;
    margin: 0;
    font-weight: 500;
  }

  .sme-geo-telemetry {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.72rem;
    letter-spacing: 0.04em;
  }

  .telemetry-bar-red {
    display: inline-block;
    width: 14px;
    height: 2px;
    background: #EF4136;
    box-shadow: 0 0 6px #EF4136;
  }

  /* Deep-Dive Interactive Telemetry Expander (ZERO CARDS, Clean Architectural Lines) */
  .sme-deepdive-panel {
    overflow: hidden;
    background: #000000;
    border-top: 1px dashed rgba(255, 255, 255, 0.12);
  }

  .sme-deepdive-inner {
    padding: 24px 20px 28px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .sme-deepdive-grid {
    display: grid;
    grid-template-columns: 1fr 48px 1fr;
    gap: 24px;
    align-items: center;
  }

  .sme-deepdive-box {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 16px 20px;
    background: rgba(255, 255, 255, 0.02);
    border-left: 2px solid rgba(255, 255, 255, 0.2);
  }

  .sme-deepdive-box.is-geo {
    border-left-color: #EF4136;
    background: rgba(239, 65, 54, 0.04);
  }

  .deepdive-subhead {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.65rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    color: rgba(255, 255, 255, 0.4);
    text-transform: uppercase;
  }

  .deepdive-stat {
    font-family: "General Sans", "Outfit", sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    color: #FAFAFC;
    line-height: 1.2;
  }

  .deepdive-note {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.5);
  }

  .sme-deepdive-arrow-col {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sme-deepdive-prose {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 0.95rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.78);
    margin: 0;
    border-left: 2px solid #EF4136;
    padding-left: 16px;
  }

  /* Bottom Horizon Metric Strip */
  .sme-ledger-footer {
    display: grid;
    grid-template-columns: 1fr 1px 1fr;
    gap: 36px;
    align-items: center;
    padding: 28px 20px;
    background: rgba(255, 255, 255, 0.015);
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  }

  .sme-footer-divider {
    width: 1px;
    height: 48px;
    background: rgba(255, 255, 255, 0.1);
  }

  .sme-footer-stat {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .sme-stat-label {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.68rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    color: rgba(255, 255, 255, 0.45);
    text-transform: uppercase;
  }

  .sme-stat-desc {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 0.92rem;
    line-height: 1.55;
    color: rgba(255, 255, 255, 0.65);
    margin: 0;
  }

  .inline-icon {
    display: inline-block;
    vertical-align: -2px;
    margin-right: 4px;
  }

  .text-white {
    color: #FAFAFC;
  }

  .text-red {
    color: #EF4136;
  }

  .font-bold {
    font-weight: 700;
  }

  /* Responsive Rules */
  @media (max-width: 1024px) {
    .sme-ledger-head {
      display: none;
    }

    .sme-row {
      grid-template-columns: 1fr;
      gap: 16px;
      padding: 24px 16px;
    }

    .sme-col-arrow {
      display: none;
    }

    .sme-deepdive-grid {
      grid-template-columns: 1fr;
      gap: 16px;
    }

    .sme-deepdive-arrow-col {
      display: none;
    }

    .sme-ledger-footer {
      grid-template-columns: 1fr;
      gap: 20px;
    }

    .sme-footer-divider {
      display: none;
    }
  }
`;
