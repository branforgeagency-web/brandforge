"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { Bot, Search, Zap, MapPin, Award } from "lucide-react";
import SwapArrow from "./SwapArrow";

const QUERY_ITEMS = [
  {
    query: "Who is the top SEO & GEO agency in Coimbatore?",
    discipline: "Neural GEO",
    year: "2026",
    badge: "LLM CONSENSUS: 99.4%",
    badgeColor: "#FF1801",
    title: "BrandForge™ Neural Answer Citation",
    description: "Synthesized by ChatGPT, Perplexity & Gemini as the primary recommended brand growth authority.",
    icon: Bot,
    stats: "+340% AI Discovery",
  },
  {
    query: "How do LLMs choose sources for generative AI citations?",
    discipline: "Entity Schema",
    year: "2026",
    badge: "KNOWLEDGE GRAPH VERIFIED",
    badgeColor: "#FF1801",
    title: "Structured Entity Vector Linking",
    description: "Deep JSON-LD schema linking founder credentials, client proof, and Wikipedia entity vectors.",
    icon: Search,
    stats: "100% Entity Match",
  },
  {
    query: "What Core Web Vitals score is required for AI ranking?",
    discipline: "Technical Speed",
    year: "2026",
    badge: "PERFECT 100/100 VITALS",
    badgeColor: "#FF1801",
    title: "Sub-200ms DOM Hydration",
    description: "Zero render-blocking scripts, edge-cached React assets, and optimal First Contentful Paint.",
    icon: Zap,
    stats: "0.18s LCP Benchmark",
  },
  {
    query: "How to rank in Google Maps 3-Pack in Coimbatore?",
    discipline: "Local Proximity",
    year: "2026",
    badge: "LOCAL PACK #1",
    badgeColor: "#FF1801",
    title: "Geo-Targeted Proximity Grid",
    description: "Google Business Profile optimization with consistent local citations and automated review growth.",
    icon: MapPin,
    stats: "Top 3 Map Ranking",
  },
  {
    query: "Do backlinks still matter for AI answer engines?",
    discipline: "Authority PR",
    year: "2026",
    badge: "EDITORIAL DA 85+",
    badgeColor: "#FF1801",
    title: "High-Trust Media Citations",
    description: "Genuine press mentions and authoritative publications that AI models crawl as trusted seed sets.",
    icon: Award,
    stats: "Zero Spam Backlinks",
  },
];

const STACK_CONFIG = [
  { y: 0, scale: 1, blur: 0, opacity: 1 },
  { y: -50, scale: 0.9, blur: 3, opacity: 0.45 },
  { y: -95, scale: 0.8, blur: 6, opacity: 0.22 },
  { y: -135, scale: 0.7, blur: 8, opacity: 0.1 },
];
const RESTING_CONFIG = { y: -160, scale: 0.62, blur: 8, opacity: 0 };

export default function SeoQueryArchiveDeck({ onOpenModal }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const deckRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current;
    if (!cards.length) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    cards.forEach((cardEl, idx) => {
      if (!cardEl) return;
      const rank = isHovered ? (idx === activeIdx ? 0 : (idx > activeIdx ? idx - activeIdx : QUERY_ITEMS.length - activeIdx + idx)) : idx;
      const isVisible = rank < STACK_CONFIG.length;
      const target = isVisible ? STACK_CONFIG[rank] : RESTING_CONFIG;

      gsap.set(cardEl, { zIndex: isVisible ? STACK_CONFIG.length - rank : 0 });

      if (prefersReduced) {
        gsap.to(cardEl, {
          opacity: idx === activeIdx ? 1 : 0,
          duration: 0.2,
          overwrite: "auto",
        });
      } else {
        gsap.to(cardEl, {
          y: target.y,
          scale: target.scale,
          opacity: target.opacity,
          filter: `blur(${target.blur}px)`,
          duration: 0.38,
          ease: "power3.out",
          overwrite: "auto",
        });
      }
    });
  }, [activeIdx, isHovered]);

  return (
    <section className="bf-seo-archive-section" id="seo-query-archive">
      <style>{`
        .bf-seo-archive-section {
          width: calc(100% - 32px);
          max-width: 1240px;
          margin: 60px auto 80px;
          background: #000000;
          border-radius: 32px;
          padding: 80px 32px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
        }
        .bf-seo-archive-header {
          margin-bottom: 48px;
        }
        .bf-seo-archive-tag {
          display: block;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #8E8E93;
          margin-bottom: 12px;
        }
        .bf-seo-archive-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: #FAFAFC;
          margin: 0 0 12px;
          letter-spacing: -0.025em;
        }
        .bf-seo-archive-sub {
          font-size: 1.05rem;
          color: #94A3B8;
          margin: 0;
          max-width: 640px;
        }
        .bf-seo-archive-panel {
          display: grid;
          grid-template-columns: minmax(0, 1.4fr) minmax(320px, 1fr);
          gap: 40px;
          align-items: center;
          position: relative;
          min-height: 440px;
        }
        .bf-seo-archive-rows {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .bf-seo-archive-row {
          padding: 16px 20px;
          border-radius: 16px;
          cursor: pointer;
          transition: background-color 0.25s ease, opacity 0.25s ease;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: 1px solid transparent;
        }
        .bf-seo-archive-row:hover,
        .bf-seo-archive-row.is-active {
          background: #14141C;
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
        }
        .bf-seo-archive-row-left {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .bf-seo-archive-query {
          font-size: 1.05rem;
          font-weight: 600;
          color: #FAFAFC;
          transition: color 0.2s ease;
        }
        .bf-seo-archive-row.is-active .bf-seo-archive-query {
          color: #FF1801;
        }
        .bf-seo-archive-meta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.82rem;
          color: #94A3B8;
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 0.04em;
        }
        .bf-seo-archive-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
        }
        .bf-seo-archive-row.is-active .bf-seo-archive-dot {
          background: #FF1801;
        }
        .bf-seo-archive-deck-wrapper {
          position: relative;
          height: 380px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .bf-seo-deck-stage {
          position: relative;
          width: 320px;
          height: 280px;
        }
        .bf-seo-deck-card {
          position: absolute;
          inset: 0;
          background: #000000;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 24px;
          padding: 26px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          color: #FFFFFF;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
          will-change: transform, opacity, filter;
          transform-origin: 50% 100%;
        }
        .bf-deck-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .bf-deck-badge {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 4px;
          background: #11141C;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .bf-deck-icon-wrap {
          width: 38px;
          height: 38px;
          border-radius: 12px;
          background: rgba(255, 24, 1, 0.15);
          color: #FF1801;
          display: grid;
          place-items: center;
        }
        .bf-deck-title {
          font-size: 1.2rem;
          font-weight: 700;
          margin: 12px 0 6px;
          color: #FFFFFF;
          line-height: 1.25;
        }
        .bf-deck-desc {
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.45;
          margin: 0;
        }
        .bf-deck-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 14px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .bf-deck-stats {
          font-size: 0.85rem;
          font-weight: 700;
          color: #FF1801;
        }
        @media (max-width: 900px) {
          .bf-seo-archive-section {
            width: calc(100% - 20px);
            padding: 50px 18px;
            border-radius: 20px;
          }
          .bf-seo-archive-panel {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .bf-seo-archive-deck-wrapper {
            height: 300px;
          }
          .bf-seo-deck-stage {
            width: 100%;
            max-width: 320px;
          }
        }
      `}</style>

      <div className="bf-seo-archive-header">
        <p className="bf-seo-archive-tag">LIVE NEURAL QUERY PERFORMANCE ARCHIVE</p>
        <h2 className="bf-seo-archive-title">
          Live Search Queries & <span style={{ color: "#FF1801" }}>Neural Extraction</span>
        </h2>
        <p className="bf-seo-archive-sub">
          Hover or tap any enterprise query to inspect how BrandForge engineers verified citations directly inside search engines and LLM vector stores.
        </p>
      </div>

      <div
        className="bf-seo-archive-panel"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <ul className="bf-seo-archive-rows">
          {QUERY_ITEMS.map((item, idx) => (
            <li
              key={idx}
              className={`bf-seo-archive-row ${activeIdx === idx ? "is-active" : ""}`}
              onMouseEnter={() => setActiveIdx(idx)}
              onClick={() => setActiveIdx(idx)}
            >
              <div className="bf-seo-archive-row-left">
                <span className="bf-seo-archive-query">{item.query}</span>
                <div className="bf-seo-archive-meta">
                  <span>{item.discipline}</span>
                  <span className="bf-seo-archive-dot" />
                  <span>{item.year}</span>
                </div>
              </div>
              <SwapArrow dir="up-right" size={15} color={activeIdx === idx ? "#FF1801" : "rgba(255, 255, 255, 0.45)"} />
            </li>
          ))}
        </ul>

        {/* FLOATING 3D CARD DECK (AWAKE ARCHIVE DECK REPLICA) */}
        <div className="bf-seo-archive-deck-wrapper">
          <div ref={deckRef} className="bf-seo-deck-stage" aria-hidden="true">
            {QUERY_ITEMS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  ref={(el) => (cardRefs.current[idx] = el)}
                  className="bf-seo-deck-card"
                >
                  <div className="bf-deck-card-top">
                    <span className="bf-deck-badge" style={{ color: item.badgeColor, borderColor: `${item.badgeColor}40` }}>
                      {item.badge}
                    </span>
                    <div className="bf-deck-icon-wrap">
                      <Icon size={18} />
                    </div>
                  </div>

                  <div>
                    <h3 className="bf-deck-title">{item.title}</h3>
                    <p className="bf-deck-desc">{item.description}</p>
                  </div>

                  <div className="bf-deck-footer">
                    <span className="bf-deck-stats">{item.stats}</span>
                    <button
                      type="button"
                      onClick={onOpenModal}
                      style={{
                        background: "none",
                        border: "none",
                        color: "#FFFFFF",
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <span>Audit Query</span>
                      <SwapArrow dir="up-right" size={12} color="#FFFFFF" />
                    </button>
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
