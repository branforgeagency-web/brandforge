"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowUpRight, ShieldCheck, Sparkles, MapPin, Search, Cpu, Database } from "lucide-react";

// Sajan 4-point star SVG icon
function SajanStar({ size = 16, color = "#EF4136", className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 0C12 0 14.5 9.5 24 12C14.5 14.5 12 24 12 24C12 24 9.5 14.5 0 12C9.5 9.5 12 0 12 0Z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default function SeoSajanWhyChoose({ whyChooseUs, onOpenModal }) {
  const [activePill, setActivePill] = useState(null);

  const pillars = [
    {
      id: "01",
      tag: "ENTERPRISE SLA",
      shortTitle: "organic search",
      marqueeText: "ranking on google's organic search",
      marqueeSub: "first page serp dominance",
      fullText: "Ranking on Google's organic search results with zero black-hat risk and pure algorithmic velocity.",
      metaCategory: "ORGANIC SERP",
      metaYear: "2025",
      badgeColor: "#EF4136",
      icon: Search,
      tilt: -1.8,
      speed: 28,
      isOutline: false,
    },
    {
      id: "02",
      tag: "ZERO-CLICK PROOF",
      shortTitle: "maps & local pack",
      marqueeText: "google local pack & near me maps",
      marqueeSub: "coimbatore regional proximity",
      fullText: "Appearing in Google's Local Pack and Maps for high-intent \"near me\" searches across Coimbatore and regional industrial belts.",
      metaCategory: "MAPS & LOCAL",
      metaYear: "3-PACK",
      badgeColor: "#0A0A0C",
      icon: MapPin,
      tilt: 1.6,
      speed: 32,
      isOutline: true,
    },
    {
      id: "03",
      tag: "SUB-SECOND STACK",
      shortTitle: "ai overviews citation",
      marqueeText: "ai overviews & generative citations",
      marqueeSub: "chatgpt · perplexity · gemini",
      fullText: "Getting cited by AI search engines and AI Overviews through GEO Services, turning LLMs into direct recommendation engines.",
      metaCategory: "NEURAL GEO",
      metaYear: "AI LLM",
      badgeColor: "#EF4136",
      icon: Cpu,
      tilt: -1.2,
      speed: 26,
      isOutline: false,
    },
    {
      id: "04",
      tag: "KNOWLEDGE GRAPH",
      shortTitle: "entity authority",
      marqueeText: "long-term organic entity authority",
      marqueeSub: "knowledge graph verified",
      fullText: "Building long-term organic authority and topical knowledge graph entities, not short-lived algorithmic ranking spikes.",
      metaCategory: "ENTITY GRAPH",
      metaYear: "LIFETIME",
      badgeColor: "#EF4136",
      icon: Database,
      tilt: 1.9,
      speed: 30,
      isOutline: true,
    },
  ];

  return (
    <section className="bf-sajan-why-root" aria-label="Why Coimbatore Businesses Choose Brand Forge">
      <style>{`
        .bf-sajan-why-root {
          position: relative;
          background: #09090C;
          color: #FAFAFC;
          width: 100%;
          padding: clamp(90px, 12vh, 150px) 4% clamp(90px, 11vh, 140px);
          overflow: hidden;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        /* SAJAN CROSSHAIR PLUS-GRID BACKGROUND */
        .bf-why-plus-grid {
          position: absolute;
          inset: 0;
          background-color: #EF4136;
          opacity: 0.08;
          --_plus-svg: url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect x='11.5' y='7' width='1' height='10' fill='black'/%3E%3Crect x='7' y='11.5' width='10' height='1' fill='black'/%3E%3C/svg%3E");
          -webkit-mask-image: var(--_plus-svg);
          mask-image: var(--_plus-svg);
          -webkit-mask-size: 28px 28px;
          mask-size: 28px 28px;
          -webkit-mask-repeat: repeat;
          mask-repeat: repeat;
          pointer-events: none;
          z-index: 0;
        }

        .bf-why-container {
          position: relative;
          z-index: 1;
          max-width: 1360px;
          margin: 0 auto;
        }

        /* SECTION HEADER & INTRO */
        .bf-why-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(32px, 5vw, 80px);
          align-items: flex-end;
          margin-bottom: clamp(60px, 8vw, 96px);
        }

        .bf-why-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #EF4136;
          margin-bottom: 18px;
        }

        .bf-why-title {
          font-family: inherit;
          font-size: clamp(2.4rem, 5.2vw, 4.4rem);
          font-weight: 900;
          line-height: 1.0;
          letter-spacing: -0.04em;
          text-transform: uppercase;
          color: #FAFAFC;
          margin: 0;
        }

        .bf-why-title-accent {
          color: #EF4136;
        }

        .bf-why-narrative {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .bf-why-desc {
          font-size: clamp(1.02rem, 1.35vw, 1.2rem);
          line-height: 1.6;
          color: #94A3B8;
          margin: 0;
        }

        .bf-why-lead-in {
          font-size: 0.95rem;
          font-weight: 700;
          color: #FAFAFC;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        /* STACKED ANGLED MARQUEE RIBBON PILLS (SAJAN STYLE) */
        .bf-why-ribbons-stack {
          display: flex;
          flex-direction: column;
          gap: clamp(14px, 2vw, 24px);
          position: relative;
          width: 100%;
        }

        .bf-why-ribbon-item {
          position: relative;
          width: 100%;
          transform-origin: center center;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), z-index 0.35s ease;
        }

        .bf-why-ribbon-pill {
          position: relative;
          width: 100%;
          height: clamp(68px, 7.8vw, 92px);
          background: #0E0E14;
          border: 1.5px solid rgba(255, 255, 255, 0.12);
          border-radius: 9999px;
          box-shadow: 6px 6px 0px #000000;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 clamp(8px, 1.2vw, 16px);
          overflow: hidden;
          cursor: pointer;
          user-select: none;
          transition: box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease;
        }

        .bf-why-ribbon-item:hover {
          z-index: 20 !important;
        }

        .bf-why-ribbon-item:hover .bf-why-ribbon-pill {
          box-shadow: 8px 8px 0px #EF4136;
          border-color: #EF4136;
          background: #14141E;
        }

        /* LEFT CIRCLE NUMBER BADGE */
        .bf-ribbon-left {
          display: flex;
          align-items: center;
          gap: clamp(8px, 1.2vw, 14px);
          z-index: 3;
          flex-shrink: 0;
        }

        .bf-ribbon-num-circle {
          width: clamp(44px, 5vw, 60px);
          height: clamp(44px, 5vw, 60px);
          border-radius: 50%;
          background: #000000;
          border: 1px solid rgba(255, 255, 255, 0.16);
          color: #FAFAFC;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: clamp(14px, 1.35vw, 18px);
          font-weight: 800;
          letter-spacing: -0.02em;
          flex-shrink: 0;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
          transition: background 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
        }

        .bf-why-ribbon-item:hover .bf-ribbon-num-circle {
          background: #EF4136;
          border-color: #EF4136;
          transform: scale(1.05);
        }

        .bf-ribbon-tag-chip {
          display: inline-flex;
          align-items: center;
          padding: 4px 12px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: clamp(10px, 0.9vw, 11px);
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #FAFAFC;
          white-space: nowrap;
        }

        /* CENTER MARQUEE TRACK */
        .bf-ribbon-marquee-track-wrap {
          flex: 1;
          margin: 0 clamp(10px, 2vw, 32px);
          overflow: hidden;
          position: relative;
          height: 100%;
          display: flex;
          align-items: center;
          mask-image: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
        }

        .bf-ribbon-marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          will-change: transform;
        }

        .bf-ribbon-marquee-phrase {
          display: inline-flex;
          align-items: center;
          gap: clamp(14px, 2vw, 24px);
          padding: 0 clamp(12px, 1.8vw, 20px);
          white-space: nowrap;
        }

        .bf-ribbon-text-primary {
          font-size: clamp(24px, 3.4vw, 44px);
          font-weight: 800;
          letter-spacing: -0.04em;
          text-transform: lowercase;
          color: #FAFAFC;
          line-height: 1;
        }

        .bf-ribbon-text-primary.is-outline {
          color: transparent;
          -webkit-text-stroke: 1.6px #FAFAFC;
        }

        .bf-ribbon-text-secondary {
          font-size: clamp(18px, 2.4vw, 32px);
          font-weight: 700;
          letter-spacing: -0.03em;
          text-transform: lowercase;
          color: rgba(250, 250, 252, 0.45);
          line-height: 1;
        }

        /* RIGHT META PILL & ARROW BADGE */
        .bf-ribbon-right {
          display: flex;
          align-items: center;
          gap: clamp(8px, 1.2vw, 14px);
          z-index: 3;
          flex-shrink: 0;
        }

        .bf-ribbon-meta-block {
          text-align: right;
          white-space: nowrap;
        }

        .bf-ribbon-meta-cat {
          font-size: clamp(10px, 0.85vw, 11px);
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #FAFAFC;
          display: block;
          line-height: 1.2;
        }

        .bf-ribbon-meta-yr {
          font-size: clamp(9px, 0.75vw, 10px);
          font-weight: 700;
          letter-spacing: 0.1em;
          color: rgba(250, 250, 252, 0.4);
          display: block;
        }

        .bf-ribbon-icon-circle {
          width: clamp(38px, 4.2vw, 48px);
          height: clamp(38px, 4.2vw, 48px);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          flex-shrink: 0;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
          transition: transform 0.3s ease;
        }

        .bf-why-ribbon-item:hover .bf-ribbon-icon-circle {
          transform: rotate(45deg);
        }

        /* EXPANDABLE REVEAL DRAWER ON HOVER / CLICK */
        .bf-ribbon-drawer {
          margin-top: 10px;
          background: #0E0E14;
          border: 1.5px solid #EF4136;
          box-shadow: 6px 6px 0px #000000;
          border-radius: 20px;
          padding: clamp(20px, 2.5vw, 28px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }

        .bf-drawer-text {
          font-size: clamp(0.95rem, 1.2vw, 1.15rem);
          font-weight: 600;
          line-height: 1.5;
          color: #FAFAFC;
          margin: 0;
          flex: 1;
          min-width: 280px;
        }

        .bf-drawer-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: #EF4136;
          color: #FFFFFF;
          border-radius: 9999px;
          font-size: 0.85rem;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .bf-drawer-cta-btn:hover {
          background: #D2042D;
          transform: translateY(-2px);
        }

        /* RESPONSIVE QUERIES */
        @media (max-width: 900px) {
          .bf-why-header {
            grid-template-columns: 1fr;
            gap: 24px;
            margin-bottom: 40px;
          }
          .bf-ribbon-tag-chip {
            display: none;
          }
          .bf-ribbon-meta-block {
            display: none;
          }
          .bf-why-ribbon-pill {
            height: 64px;
          }
        }

        @media (max-width: 640px) {
          .bf-sajan-why-root {
            padding: 70px 4% 60px;
          }
          .bf-why-ribbon-pill {
            height: 58px;
            box-shadow: 4px 4px 0px #0A0A0C;
          }
          .bf-ribbon-num-circle {
            width: 38px;
            height: 38px;
            font-size: 13px;
          }
          .bf-ribbon-icon-circle {
            width: 34px;
            height: 34px;
          }
          .bf-ribbon-text-primary {
            font-size: 18px;
          }
          .bf-ribbon-text-secondary {
            font-size: 14px;
          }
        }
      `}</style>

      {/* BACKGROUND PLUS-GRID */}
      <div className="bf-why-plus-grid" aria-hidden="true" />

      <div className="bf-why-container">
        {/* SECTION HEADER: EYEBROW + EDITORIAL TITLE + INTRO */}
        <motion.div
          className="bf-why-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="bf-why-eyebrow">
              <SajanStar size={15} color="#EF4136" />
              <span>{whyChooseUs.tag || "WHY CHOOSE BRAND FORGE"}</span>
            </div>
            <h2 className="bf-why-title">
              Why Businesses in Coimbatore Choose Brand Forge as Their{" "}
              <span className="bf-why-title-accent">SEO Company</span>
            </h2>
          </div>

          <div className="bf-why-narrative">
            <p className="bf-why-desc">{whyChooseUs.description}</p>
            <div className="bf-why-lead-in">
              <Sparkles size={16} color="#EF4136" />
              <span>{whyChooseUs.leadIn || "Our approach covers the full picture of modern search visibility:"}</span>
            </div>
          </div>
        </motion.div>

        {/* STACKED ANGLED MARQUEE RIBBON PILLS */}
        <div className="bf-why-ribbons-stack">
          {pillars.map((pill, idx) => {
            const Icon = pill.icon;
            const isOpen = activePill === pill.id;

            return (
              <motion.div
                key={pill.id}
                className="bf-why-ribbon-item"
                style={{ zIndex: pillars.length - idx }}
                initial={{ opacity: 0, y: 35, rotate: pill.tilt * 1.5 }}
                whileInView={{ opacity: 1, y: 0, rotate: pill.tilt }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.55, delay: idx * 0.08 }}
                whileHover={{ rotate: 0, scale: 1.012, transition: { duration: 0.25 } }}
              >
                {/* THE CAPSULE PILL */}
                <div
                  className="bf-why-ribbon-pill"
                  onClick={() => setActivePill(isOpen ? null : pill.id)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  aria-label={`${pill.marqueeText} - Click to expand details`}
                >
                  {/* LEFT: NUMBER CIRCLE + MICRO-TAG */}
                  <div className="bf-ribbon-left">
                    <div className="bf-ribbon-num-circle">{pill.id}</div>
                    <span className="bf-ribbon-tag-chip">{pill.tag}</span>
                  </div>

                  {/* CENTER: INFINITE RUNNING MARQUEE TICKER */}
                  <div className="bf-ribbon-marquee-track-wrap">
                    <motion.div
                      className="bf-ribbon-marquee-track"
                      animate={{ x: idx % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
                      transition={{
                        duration: pill.speed,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      {/* Repeat phrases 4 times for seamless infinite loop */}
                      {[1, 2, 3, 4].map((dup) => (
                        <div key={dup} className="bf-ribbon-marquee-phrase">
                          <span className={`bf-ribbon-text-primary ${pill.isOutline ? "is-outline" : ""}`}>
                            {pill.marqueeText}
                          </span>
                          <SajanStar size={16} color="#EF4136" />
                          <span className="bf-ribbon-text-secondary">
                            {pill.marqueeSub}
                          </span>
                          <SajanStar size={16} color="#EF4136" />
                        </div>
                      ))}
                    </motion.div>
                  </div>

                  {/* RIGHT: META CATEGORY & ICON CIRCLE */}
                  <div className="bf-ribbon-right">
                    <div className="bf-ribbon-meta-block">
                      <span className="bf-ribbon-meta-cat">{pill.metaCategory}</span>
                      <span className="bf-ribbon-meta-yr">{pill.metaYear}</span>
                    </div>
                    <div className="bf-ribbon-icon-circle" style={{ background: pill.badgeColor }}>
                      <ArrowUpRight size={18} strokeWidth={2.4} />
                    </div>
                  </div>
                </div>

                {/* EXPANDABLE VERIFIED PERFORMANCE DRAWER */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      className="bf-ribbon-drawer"
                      initial={{ opacity: 0, height: 0, y: -10 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -10 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="bf-drawer-text">{pill.fullText}</p>

                      <button
                        type="button"
                        className="bf-drawer-cta-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onOpenModal) onOpenModal();
                        }}
                      >
                        <span>Audit This Channel</span>
                        <ArrowUpRight size={14} />
                      </button>
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
