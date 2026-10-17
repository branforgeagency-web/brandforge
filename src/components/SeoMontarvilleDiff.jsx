"use client";

import React from "react";
import { Zap, Globe, ShieldCheck, Users, ArrowRight, CheckCircle2 } from "lucide-react";

function SajanStar({ size = 15, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 0C12 0 14.5 9.5 24 12C14.5 14.5 12 24 12 24C12 24 9.5 14.5 0 12C9.5 9.5 12 0 12 0Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function MontarvilleCircles({ className = "" }) {
  return (
    <div className={`montarville-circles-wrap ${className}`} aria-hidden="true">
      <svg width="560" height="450" viewBox="0 0 768 610" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="384" cy="417.5" r="191.5" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
        <circle cx="384" cy="192" r="191.5" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
        <circle cx="192" cy="304.7" r="191.5" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
        <circle cx="576" cy="304.7" r="191.5" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
      </svg>
    </div>
  );
}

export default function SeoMontarvilleDiff({ differentiators, onOpenModal }) {
  const diffData = differentiators || {};
  const diffTag = diffData.tag || "THE BRANDFORGE ADVANTAGE";
  const diffTitle = diffData.title || "What Makes Our SEO Company Different";
  const items = diffData.items || [
    {
      title: "SEO and GEO under one roof",
      description: "Most agencies in Coimbatore are still purely Google-focused; we're already optimizing for the generative AI search shift.",
      icon: Zap,
    },
    {
      title: "Local market understanding",
      description: "We know how Coimbatore and Tamil Nadu audiences search, compare, and behave online across languages and devices.",
      icon: Globe,
    },
    {
      title: "Transparent, real-time reporting",
      description: "No black-box reporting or vanity metrics. Full weekly attribution of pipeline revenue, rankings, and AI consensus.",
      icon: ShieldCheck,
    },
    {
      title: "Content built for humans first",
      description: "Because helpful, quotable human-first insights are exactly what Google algorithms and AI models index and cite best.",
      icon: Users,
    },
  ];

  return (
    <section className="smd-diff-section" id="differentiators">
      <style>{diffComponentStyles}</style>

      {/* Montarville Geometric Line-Art Watermark */}
      <MontarvilleCircles className="smd-watermark" />

      <div className="smd-container">
        {/* Montarville "Ce qui nous distingue" Editorial Split Layout */}
        <div className="smd-split-grid">
          {/* Left Column: Authoritative Editorial Statement */}
          <div className="smd-editorial-col">
            <div className="smd-metalabel">
              <SajanStar className="smd-star" />
              <span>CE QUI NOUS DISTINGUE // {diffTag}</span>
            </div>

            <h2 className="smd-title">
              Engineering <span className="title-red">Category Supremacy</span>, Not Short-Lived Spikes.
            </h2>

            <div className="smd-wysiwyg-2c">
              <p>
                <strong>BrandForge se distingue</strong> par sa capacité à offrir une architecture intégrée et structurée, bien au-delà de la simple exécution de mots-clés. While generic agencies sell commodity backlink bundles, we build technical entity graphs that make your brand the indisputable answer across Google search and conversational AI models.
              </p>
              <p>
                Our posture is rooted in radical transparency: zero black-box reporting, sub-200ms Jamstack engineering, and measurable organic revenue growth. We believe in direct, honest partnerships where technical precision yields compounding commercial returns.
              </p>
            </div>

            <div className="smd-action-row">
              <button
                type="button"
                className="smd-pill-btn"
                onClick={() => onOpenModal && onOpenModal("Schedule Strategic Briefing")}
              >
                <span>SCHEDULE STRATEGIC BRIEFING</span>
                <ArrowRight size={14} />
              </button>
              <span className="smd-guarantee-tag">
                <CheckCircle2 size={13} className="text-red" />
                Guaranteed Senior Engineer Oversight
              </span>
            </div>
          </div>

          {/* Right Column: 4 Obsidian Architectural Cards Grid */}
          <div className="smd-cards-col">
            {items.map((item, idx) => {
              const Icon = item.icon || Zap;
              return (
                <div key={item.title || idx} className="smd-obsidian-card">
                  <span className="smd-card-cross" aria-hidden="true">+</span>

                  <div className="smd-card-top">
                    <div className="smd-card-icon-wrap">
                      <Icon size={20} />
                    </div>
                    <span className="smd-card-coord">DIFF // 0{idx + 1}</span>
                  </div>

                  <h3 className="smd-card-title">{item.title}</h3>
                  <p className="smd-card-desc">{item.description}</p>

                  <div className="smd-card-footer">
                    <span className="smd-card-check-pill">VERIFIED STANDARD</span>
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
    background: #09090C;
    padding: clamp(70px, 9vw, 110px) 0 clamp(60px, 8vw, 100px);
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    overflow: hidden;
  }

  .smd-watermark {
    position: absolute;
    bottom: -80px;
    left: -100px;
    pointer-events: none;
    opacity: 0.5;
    z-index: 1;
  }

  .smd-container {
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 clamp(20px, 4vw, 40px);
    position: relative;
    z-index: 2;
  }

  .smd-split-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: clamp(40px, 6vw, 75px);
    align-items: flex-start;
  }

  /* Left Editorial */
  .smd-editorial-col {
    display: flex;
    flex-direction: column;
  }

  .smd-metalabel {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.8rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    color: #EF4136;
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  .smd-star {
    color: #EF4136;
    animation: smd-star-spin 16s linear infinite;
  }

  @keyframes smd-star-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .smd-title {
    font-family: "Outfit", sans-serif;
    font-size: clamp(32px, 4.2vw, 50px);
    font-weight: 900;
    line-height: 1.15;
    letter-spacing: -0.025em;
    color: #FAFAFC;
    margin: 0 0 28px;
  }

  .title-red {
    color: #EF4136;
    background: linear-gradient(90deg, #EF4136 0%, #FF5A4E 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .smd-wysiwyg-2c {
    display: flex;
    flex-direction: column;
    gap: 18px;
    margin-bottom: 36px;
  }

  .smd-wysiwyg-2c p {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 16.5px;
    line-height: 1.8;
    color: #94A3B8;
    margin: 0;
  }

  .smd-wysiwyg-2c strong {
    color: #FAFAFC;
    font-weight: 700;
  }

  .smd-action-row {
    display: flex;
    flex-direction: column;
    gap: 14px;
    align-items: flex-start;
  }

  .smd-pill-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 14px 28px;
    border-radius: 999px;
    background: #14141C;
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: #FAFAFC;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .smd-pill-btn:hover {
    background: #EF4136;
    border-color: #EF4136;
    color: #FFFFFF;
    box-shadow: 0 8px 25px rgba(239, 65, 54, 0.4);
    transform: translateY(-2px);
  }

  .smd-guarantee-tag {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.72rem;
    color: #64748B;
  }

  /* Right Cards Column */
  .smd-cards-col {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 18px;
  }

  .smd-obsidian-card {
    background: #0E0E14;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 20px;
    padding: 24px 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 220px;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }

  .smd-obsidian-card:hover {
    background: #12121A;
    border-color: rgba(239, 65, 54, 0.45);
    transform: translateY(-4px);
    box-shadow: 0 16px 35px rgba(0, 0, 0, 0.5), 0 0 20px rgba(239, 65, 54, 0.1);
  }

  .smd-card-cross {
    position: absolute;
    top: 12px;
    right: 14px;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.2);
  }

  .smd-card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  .smd-card-icon-wrap {
    width: 42px;
    height: 42px;
    border-radius: 12px;
    background: rgba(239, 65, 54, 0.12);
    border: 1px solid rgba(239, 65, 54, 0.3);
    color: #EF4136;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .smd-card-coord {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.68rem;
    font-weight: 800;
    color: rgba(255, 255, 255, 0.35);
  }

  .smd-card-title {
    font-family: "Outfit", sans-serif;
    font-size: 1.15rem;
    font-weight: 800;
    color: #FAFAFC;
    margin: 0 0 8px;
    line-height: 1.3;
  }

  .smd-card-desc {
    font-size: 0.86rem;
    line-height: 1.55;
    color: #94A3B8;
    margin: 0 0 16px;
    flex-grow: 1;
  }

  .smd-card-footer {
    padding-top: 12px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }

  .smd-card-check-pill {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.64rem;
    font-weight: 800;
    color: #EF4136;
    background: rgba(239, 65, 54, 0.1);
    border: 1px solid rgba(239, 65, 54, 0.2);
    padding: 3px 8px;
    border-radius: 4px;
    display: inline-block;
  }

  @media (max-width: 1024px) {
    .smd-split-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 640px) {
    .smd-cards-col {
      grid-template-columns: 1fr;
    }
  }
`;
