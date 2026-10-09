"use client";

import React from "react";
import { Search, Cpu, Target, Award, Sparkles } from "lucide-react";
import Seo3DBentoCard from "./Seo3DBentoCard";
import KexsioCanvasBackground from "./KexsioCanvasBackground";

export default function Seo3DBentoGrid() {
  const cards = [
    {
      icon: Search,
      pillarTag: "PILLAR 01 • CRAWL SUPREMACY",
      title: "Technical SEO & Semantic Crawl Architecture",
      description: "Sub-200ms Core Web Vitals, entity-first schema indexing, dynamic XML node structures, and frictionless mobile rendering.",
      metricValue: "sub-200ms",
      metricLabel: "CORE WEB VITALS",
      badgeText: "100/100 Benchmark",
      visualType: "crawl",
    },
    {
      icon: Cpu,
      pillarTag: "PILLAR 02 • NEURAL SYNTHESIS",
      title: "Generative Engine Optimization (GEO)",
      description: "Seeding semantic knowledge graphs so ChatGPT, Perplexity, and Gemini cite BrandForge clients as authoritative primary recommendations.",
      metricValue: "10x",
      metricLabel: "LLM GRAPH EXPANSION",
      badgeText: "Zero-Click Dominance",
      visualType: "geo",
    },
    {
      icon: Target,
      pillarTag: "PILLAR 03 • REVENUE INTENT",
      title: "High-Intent Bottom-Funnel Keyword Engine",
      description: "Eliminate vanity click waste. We target commercially qualified entity queries that drive high-ticket sales pipelines and inbound contract requests.",
      metricValue: "+340%",
      metricLabel: "ORGANIC REVENUE LIFT",
      badgeText: "L12M Portfolio Avg",
      visualType: "intent",
    },
    {
      icon: Award,
      pillarTag: "PILLAR 04 • REPUTATION & PR",
      title: "Digital PR & High-Domain Authority Forging",
      description: "Editorial brand placements, tier-1 authoritative editorial mentions, and contextual backlinks that fortify your domain rating against algorithmic shifts.",
      metricValue: "#1 Rank",
      metricLabel: "AI ANSWER CITATION",
      badgeText: "Verified Authority",
      visualType: "pr",
    },
  ];

  return (
    <section className="bf-bento-section-root" id="seo-bento-grid">
      <style>{gridStyles}</style>
      <KexsioCanvasBackground theme="light" opacity={0.5} />

      <div className="bf-bento-container">
        <div className="bf-bento-header text-center">
          <div className="bf-bento-eyebrow">
            <Sparkles size={14} className="eyebrow-icon" />
            <span>BrandForge 3D Core Capabilities</span>
          </div>
          <h2 className="bf-bento-heading">
            Engineered For Category <span className="bf-bento-heading-glow">Dominance</span>
          </h2>
          <p className="bf-bento-sub">
            Interactive 3D glass cards powered by our dual-engine methodology. Move your cursor to inspect each capability module.
          </p>
        </div>

        {/* 3D Bento Grid Layout */}
        <div className="bf-bento-cards-grid">
          {cards.map((card, idx) => (
            <Seo3DBentoCard
              key={idx}
              icon={card.icon}
              pillarTag={card.pillarTag}
              title={card.title}
              description={card.description}
              metricValue={card.metricValue}
              metricLabel={card.metricLabel}
              badgeText={card.badgeText}
              visualType={card.visualType}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const gridStyles = `
  .bf-bento-section-root {
    position: relative;
    overflow: hidden;
    background: #FAFAFC;
    padding: 90px 20px 100px;
    color: #0A0A0C;
    border-bottom: 1px solid #E5E7EB;
  }

  .bf-bento-container {
    position: relative;
    z-index: 2;
    max-width: 1240px;
    margin: 0 auto;
  }

  .bf-bento-header {
    max-width: 760px;
    margin: 0 auto 56px;
    text-align: center;
  }

  .bf-bento-eyebrow {
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

  .bf-bento-heading {
    font-family: "Outfit", sans-serif;
    font-size: clamp(32px, 4.5vw, 54px);
    font-weight: 900;
    line-height: 1.12;
    letter-spacing: -0.02em;
    color: #0A0A0C;
    margin-bottom: 16px;
  }

  .bf-bento-heading-glow {
    color: #EF4136;
    background: linear-gradient(90deg, #EF4136 0%, #D2042D 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .bf-bento-sub {
    font-size: 16.5px;
    line-height: 1.65;
    color: #4B5563;
    font-family: "Plus Jakarta Sans", sans-serif;
  }

  .bf-bento-cards-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 26px;
  }

  @media (max-width: 900px) {
    .bf-bento-cards-grid {
      grid-template-columns: 1fr;
    }
  }
`;
