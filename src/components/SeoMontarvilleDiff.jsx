"use client";

import React from "react";
import { Zap, Globe, ShieldCheck, Users, ArrowRight } from "lucide-react";



function MontarvilleCircles({ className = "" }) {
  return (
    <div className={`montarville-circles-wrap ${className}`} aria-hidden="true">
      <svg width="680" height="540" viewBox="0 0 768 610" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="384" cy="417.5" r="191.5" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="384" cy="192" r="191.5" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
        <circle cx="192" cy="304.7" r="191.5" stroke="rgba(255, 24, 1, 0.06)" strokeWidth="1" />
        <circle cx="576" cy="304.7" r="191.5" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
      </svg>
    </div>
  );
}

const CARD_METAS = [
  { coord: "Architecture", iconColor: "#FF1801" },
  { coord: "Local Intelligence", iconColor: "#FF6B00" },
  { coord: "Attribution", iconColor: "#FF1801" },
  { coord: "Content Strategy", iconColor: "#FF6B00" },
];

const DEFAULT_ITEMS = [
  {
    title: "SEO and GEO Under One Roof",
    description: "While typical agencies remain purely single-channel focused, we simultaneously optimize your brand across modern AI answer engines and search algorithms.",
    icon: Zap,
  },
  {
    title: "Deep Local & Enterprise Market Intelligence",
    description: "Granular behavioral insights tailored to how regional and global high-intent buyers discover, evaluate, and convert.",
    icon: Globe,
  },
  {
    title: "Radical Transparency & Attribution",
    description: "Full attribution of rankings, pipeline revenue, and conversion metrics with zero black-box vanity reporting.",
    icon: ShieldCheck,
  },
  {
    title: "Engineered for Conversion & Speed",
    description: "Sub-second load times, bespoke user journeys, and high-converting copy that turns visitors into qualified pipeline.",
    icon: Users,
  },
];

export default function SeoMontarvilleDiff({ differentiators, onOpenModal }) {
  const diffData = differentiators || {};
  const icons = [Zap, Globe, ShieldCheck, Users];
  const items = (diffData.items && diffData.items.length > 0)
    ? diffData.items.map((it, idx) => ({
        ...it,
        icon: it.icon || icons[idx % icons.length],
      }))
    : DEFAULT_ITEMS;

  return (
    <section className="smd-diff-section" id="differentiators">
      <style>{diffComponentStyles}</style>

      {/* Ambient Radial Lights */}
      <div className="smd-ambient-light smd-ambient-left" aria-hidden="true" />
      <div className="smd-ambient-light smd-ambient-right" aria-hidden="true" />

      {/* Montarville Geometric Line-Art Watermark */}
      <MontarvilleCircles className="smd-watermark" />

      <div className="smd-container">
        <div className="smd-split-grid">
          {/* Left Column: Authoritative Editorial Statement */}
          <div className="smd-editorial-col">

            <h2 className="smd-title">
              {diffData.title ? (
                <span>{diffData.title}</span>
              ) : (
                <>
                  Engineering <span className="title-gradient">Category Supremacy</span>, Not Short-Lived Spikes.
                </>
              )}
            </h2>

            <div className="smd-wysiwyg-2c">
              {diffData.description ? (
                <p>
                  <strong>BrandForge engineers performance architectures</strong> that transcend generic agency deliverables. {diffData.description}
                </p>
              ) : (
                <>
                  <p>
                    <strong>BrandForge engineers performance architectures</strong> that transcend basic agency outputs. While generic agencies sell commodity templates, we build high-converting infrastructure and technical moats that make your brand the definitive category choice.
                  </p>
                  <p>
                    Our methodology is rooted in radical transparency: zero black-box vanity reporting, sub-200ms engineering, and measurable commercial growth. We forge compounding value where technical precision yields sustainable market dominance.
                  </p>
                </>
              )}
            </div>

            {/* Enterprise Micro-Metrics Strip */}
            <div className="smd-proof-strip">
              <div className="smd-proof-item">
                <span className="smd-proof-val">100%</span>
                <span className="smd-proof-lbl">Transparent Attribution</span>
              </div>
              <div className="smd-proof-sep" />
              <div className="smd-proof-item">
                <span className="smd-proof-val">&lt;200ms</span>
                <span className="smd-proof-lbl">Sub-Second Speed SLA</span>
              </div>
              <div className="smd-proof-sep" />
              <div className="smd-proof-item">
                <span className="smd-proof-val">GEO + SEO</span>
                <span className="smd-proof-lbl">AI-Engine Ready</span>
              </div>
            </div>

            {/* CTA & Trust Row */}
            <div className="smd-action-row">
              <button
                type="button"
                className="smd-pill-btn"
                onClick={() => onOpenModal && onOpenModal("Schedule Strategic Briefing")}
              >
                <span>SCHEDULE STRATEGIC BRIEFING</span>
                <ArrowRight size={14} className="smd-btn-arrow" />
              </button>
            </div>
          </div>

          {/* Right Column: 4 Obsidian Glass Architectural Cards */}
          <div className="smd-cards-col">
            {items.map((item, idx) => {
              const Icon = item.icon || Zap;
              const meta = CARD_METAS[idx % CARD_METAS.length];
              const desc = item.description || "";
              const formattedDesc = desc ? desc.charAt(0).toUpperCase() + desc.slice(1) : "";

              return (
                <div key={item.title || idx} className="smd-obsidian-card">
                  {/* Subtle Top-Right Cross Accent */}
                  <span className="smd-card-cross" aria-hidden="true">+</span>

                  <div className="smd-card-top">
                    <div className="smd-card-icon-wrap">
                      <Icon size={20} strokeWidth={2} />
                    </div>
                    <span className="smd-card-coord">{meta.coord}</span>
                  </div>

                  <div className="smd-card-content">
                    <h3 className="smd-card-title">{item.title}</h3>
                    <p className="smd-card-desc">{formattedDesc}</p>
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

const diffComponentStyles = `
  .smd-diff-section {
    position: relative;
    background: #08080C;
    padding: clamp(80px, 9vw, 125px) 0 clamp(70px, 8vw, 115px);
    border-top: 1px solid rgba(255, 255, 255, 0.07);
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);
    overflow: hidden;
  }

  /* Ambient Colored Lighting for Depth */
  .smd-ambient-light {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    filter: blur(80px);
    z-index: 1;
  }

  .smd-ambient-left {
    top: 5%;
    left: -12%;
    width: 48vw;
    height: 48vw;
    max-width: 600px;
    max-height: 600px;
    background: radial-gradient(circle, rgba(255, 24, 1, 0.09) 0%, transparent 70%);
  }

  .smd-ambient-right {
    bottom: -8%;
    right: -8%;
    width: 42vw;
    height: 42vw;
    max-width: 520px;
    max-height: 520px;
    background: radial-gradient(circle, rgba(255, 107, 0, 0.07) 0%, transparent 70%);
  }

  .smd-watermark {
    position: absolute;
    bottom: -90px;
    left: -110px;
    pointer-events: none;
    opacity: 0.6;
    z-index: 1;
  }

  .smd-container {
    max-width: 1260px;
    margin: 0 auto;
    padding: 0 clamp(20px, 4vw, 44px);
    position: relative;
    z-index: 2;
  }

  .smd-split-grid {
    display: grid;
    grid-template-columns: 1.04fr 1fr;
    gap: clamp(40px, 5.5vw, 75px);
    align-items: center;
  }

  /* Left Editorial Presentation */
  .smd-editorial-col {
    display: flex;
    flex-direction: column;
  }

  .smd-metalabel {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    font-family: var(--font-mono, "JetBrains Mono", monospace);
    font-size: 0.76rem;
    font-weight: 800;
    letter-spacing: 0.14em;
    color: #FF1801;
    text-transform: uppercase;
    margin-bottom: 22px;
    background: rgba(255, 24, 1, 0.08);
    border: 1px solid rgba(255, 24, 1, 0.22);
    padding: 6px 14px;
    border-radius: 999px;
    width: fit-content;
  }

  .smd-pulsing-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #FF1801;
    box-shadow: 0 0 10px #FF1801, 0 0 16px rgba(255, 24, 1, 0.8);
    animation: smd-pulse 2s infinite ease-in-out;
  }

  @keyframes smd-pulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.4); opacity: 0.5; }
  }

  .smd-star {
    color: #FF1801;
    animation: smd-star-spin 18s linear infinite;
  }

  @keyframes smd-star-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .smd-title {
    font-family: var(--font-heading, "Outfit", sans-serif);
    font-size: clamp(34px, 4.4vw, 52px);
    font-weight: 900;
    line-height: 1.12;
    letter-spacing: -0.03em;
    color: #FFFFFF;
    margin: 0 0 24px;
  }

  .title-gradient {
    background: linear-gradient(135deg, #FF453A 0%, #FF6B4A 50%, #FFA066 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 0 35px rgba(255, 24, 1, 0.3));
  }

  .smd-wysiwyg-2c {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 24px;
  }

  .smd-wysiwyg-2c p {
    font-family: var(--font-body, "Plus Jakarta Sans", sans-serif);
    font-size: 15.5px;
    line-height: 1.75;
    color: #94A3B8;
    margin: 0;
  }

  .smd-wysiwyg-2c strong {
    color: #FAFAFC;
    font-weight: 700;
  }

  /* Micro Metrics Strip */
  .smd-proof-strip {
    display: flex;
    align-items: center;
    gap: 16px;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.07);
    border-radius: 12px;
    padding: 12px 18px;
    margin-bottom: 28px;
    width: fit-content;
    max-width: 100%;
  }

  .smd-proof-item {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .smd-proof-val {
    font-family: var(--font-mono, "JetBrains Mono", monospace);
    font-size: 0.95rem;
    font-weight: 800;
    color: #FAFAFC;
    letter-spacing: -0.01em;
  }

  .smd-proof-lbl {
    font-family: var(--font-body, "Plus Jakarta Sans", sans-serif);
    font-size: 0.72rem;
    color: #64748B;
    font-weight: 600;
  }

  .smd-proof-sep {
    width: 1px;
    height: 28px;
    background: rgba(255, 255, 255, 0.08);
  }

  .smd-action-row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 18px;
  }

  .smd-pill-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 14px 28px;
    border-radius: 999px;
    background: #101018;
    border: 1px solid rgba(255, 255, 255, 0.16);
    color: #FAFAFC;
    font-family: var(--font-mono, "JetBrains Mono", monospace);
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.4);
  }

  .smd-pill-btn:hover {
    background: #FF1801;
    border-color: #FF1801;
    color: #FFFFFF;
    box-shadow: 0 8px 30px rgba(255, 24, 1, 0.45);
    transform: translateY(-2px);
  }

  .smd-btn-arrow {
    transition: transform 0.25s ease;
  }

  .smd-pill-btn:hover .smd-btn-arrow {
    transform: translateX(4px);
  }

  /* Right Cards Column - Obsidian Glass */
  .smd-cards-col {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .smd-obsidian-card {
    background: linear-gradient(145deg, rgba(16, 16, 24, 0.78) 0%, rgba(10, 10, 16, 0.92) 100%);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 18px;
    padding: 24px 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 230px;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  }

  .smd-obsidian-card::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 18px;
    background: radial-gradient(circle at top right, rgba(255, 24, 1, 0.12), transparent 70%);
    opacity: 0;
    transition: opacity 0.35s ease;
    pointer-events: none;
  }

  .smd-obsidian-card:hover {
    background: linear-gradient(145deg, rgba(22, 22, 34, 0.85) 0%, rgba(14, 14, 22, 0.95) 100%);
    border-color: rgba(255, 24, 1, 0.45);
    transform: translateY(-5px);
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.65), 0 0 25px rgba(255, 24, 1, 0.15);
  }

  .smd-obsidian-card:hover::before {
    opacity: 1;
  }

  .smd-card-cross {
    position: absolute;
    top: 14px;
    right: 16px;
    font-family: var(--font-mono, "JetBrains Mono", monospace);
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.2);
    transition: all 0.25s ease;
  }

  .smd-obsidian-card:hover .smd-card-cross {
    color: #FF1801;
    transform: rotate(45deg) scale(1.1);
  }

  .smd-card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    position: relative;
    z-index: 2;
  }

  .smd-card-icon-wrap {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: linear-gradient(135deg, rgba(255, 24, 1, 0.15) 0%, rgba(255, 24, 1, 0.05) 100%);
    border: 1px solid rgba(255, 24, 1, 0.32);
    color: #FF1801;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 15px rgba(255, 24, 1, 0.12);
    transition: all 0.3s ease;
  }

  .smd-obsidian-card:hover .smd-card-icon-wrap {
    background: #FF1801;
    border-color: #FF1801;
    color: #FFFFFF;
    box-shadow: 0 0 20px rgba(255, 24, 1, 0.45);
    transform: scale(1.05);
  }

  .smd-card-coord {
    font-family: var(--font-mono, "JetBrains Mono", monospace);
    font-size: 0.65rem;
    font-weight: 800;
    letter-spacing: 0.05em;
    color: rgba(255, 255, 255, 0.4);
  }

  .smd-card-content {
    position: relative;
    z-index: 2;
    flex-grow: 1;
    margin-bottom: 16px;
  }

  .smd-card-title {
    font-family: var(--font-heading, "Outfit", sans-serif);
    font-size: 1.15rem;
    font-weight: 800;
    color: #FAFAFC;
    margin: 0 0 8px;
    line-height: 1.32;
    letter-spacing: -0.015em;
  }

  .smd-card-desc {
    font-family: var(--font-body, "Plus Jakarta Sans", sans-serif);
    font-size: 0.86rem;
    line-height: 1.6;
    color: #94A3B8;
    margin: 0;
  }

  .smd-card-footer {
    padding-top: 14px;
    border-top: 1px solid rgba(255, 255, 255, 0.07);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 2;
  }

  .smd-card-check-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: var(--font-mono, "JetBrains Mono", monospace);
    font-size: 0.63rem;
    font-weight: 800;
    letter-spacing: 0.06em;
    color: #FF1801;
    background: rgba(255, 24, 1, 0.09);
    border: 1px solid rgba(255, 24, 1, 0.22);
    padding: 4px 10px;
    border-radius: 6px;
    transition: all 0.25s ease;
  }

  .smd-pill-indicator {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #FF1801;
    box-shadow: 0 0 6px #FF1801;
  }

  .smd-obsidian-card:hover .smd-card-check-pill {
    background: rgba(255, 24, 1, 0.16);
    border-color: rgba(255, 24, 1, 0.4);
  }

  .smd-card-arrow {
    font-family: var(--font-mono, "JetBrains Mono", monospace);
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.25);
    transition: all 0.25s ease;
  }

  .smd-obsidian-card:hover .smd-card-arrow {
    color: #FF1801;
    transform: translate(2px, -2px);
  }

  @media (max-width: 1040px) {
    .smd-split-grid {
      grid-template-columns: 1fr;
      gap: 50px;
    }
    .smd-proof-strip {
      width: 100%;
      justify-content: space-around;
    }
  }

  @media (max-width: 640px) {
    .smd-cards-col {
      grid-template-columns: 1fr;
    }
    .smd-proof-strip {
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
    }
    .smd-proof-sep {
      display: none;
    }
  }
`;
