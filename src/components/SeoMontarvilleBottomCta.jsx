"use client";

import React from "react";
import { ArrowRight } from "lucide-react";


function MontarvilleCircles({ className = "" }) {
  return (
    <div className={`montarville-circles-wrap ${className}`} aria-hidden="true">
      <svg width="768" height="610" viewBox="0 0 768 610" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="384" cy="417.5" r="191.5" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
        <circle cx="384" cy="192" r="191.5" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
        <circle cx="192" cy="304.7" r="191.5" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
        <circle cx="576" cy="304.7" r="191.5" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
      </svg>
    </div>
  );
}

export default function SeoMontarvilleBottomCta({
  bottomCta = {},
  onOpenModal,
}) {
  const _title = bottomCta?.title || "Get Found on Google and AI Search — Starting Today";
  const subtitle = bottomCta?.subtitle || "Get a free audit of where your website currently stands, both on traditional search and emerging AI search engines.";
  const buttonText = bottomCta?.buttonText || "Book Your Free Consultation →";

  return (
    <section className="smc-bottom-section" id="deploy-enterprise-seo">
      <style>{bottomCtaStyles}</style>

      <div className="smc-container">
        <div className="smc-chassis-card">
          <MontarvilleCircles className="smc-circles-watermark" />
          <span className="smc-corner-tick tick-tl">+</span>
          <span className="smc-corner-tick tick-tr">+</span>
          <span className="smc-corner-tick tick-bl">+</span>
          <span className="smc-corner-tick tick-br">+</span>


          <h2 className="smc-title">
            {bottomCta?.title ? (
              <span>{bottomCta.title}</span>
            ) : (
              <>
                Own the Category. <br />
                <span className="title-red">Forge Your Unfair Advantage.</span>
              </>
            )}
          </h2>

          <p className="smc-desc">{subtitle}</p>

          <div className="smc-actions-row">
            <button
              type="button"
              className="smc-primary-btn"
              onClick={() => {
                if (onOpenModal) onOpenModal(buttonText || "Book Strategy Audit");
              }}
            >
              <span>{buttonText}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const bottomCtaStyles = `
  .smc-bottom-section {
    position: relative;
    background: #09090C;
    padding: clamp(60px, 8vw, 100px) 0 clamp(80px, 9vw, 120px);
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }

  .smc-container {
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 clamp(20px, 4vw, 40px);
    position: relative;
    z-index: 2;
  }

  .smc-chassis-card {
    background: linear-gradient(135deg, #0F0F16 0%, #15080A 50%, #0E0E14 100%);
    border: 1px solid rgba(255, 24, 1, 0.35);
    border-radius: 28px;
    padding: clamp(48px, 6vw, 76px) clamp(24px, 5vw, 56px);
    text-align: center;
    position: relative;
    overflow: hidden;
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.8), 0 0 50px rgba(255, 24, 1, 0.1);
  }

  .smc-circles-watermark {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    opacity: 0.45;
  }

  .smc-corner-tick {
    position: absolute;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.25);
    pointer-events: none;
  }
  .tick-tl { top: 14px; left: 16px; }
  .tick-tr { top: 14px; right: 16px; }
  .tick-bl { bottom: 14px; left: 16px; }
  .tick-br { bottom: 14px; right: 16px; }

  .smc-top-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
    position: relative;
    z-index: 2;
  }

  .smc-metalabel {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    color: #FF1801;
    text-transform: uppercase;
  }

  .smc-star {
    color: #FF1801;
    animation: smc-star-spin 16s linear infinite;
  }

  @keyframes smc-star-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .smc-live-badge {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.7rem;
    font-weight: 800;
    color: #FAFAFC;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.15);
    padding: 4px 12px;
    border-radius: 999px;
  }

  .live-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #FF1801;
    box-shadow: 0 0 8px #FF1801;
  }

  .smc-title {
    font-family: "Outfit", sans-serif;
    font-size: clamp(32px, 4.5vw, 56px);
    font-weight: 900;
    color: #FAFAFC;
    line-height: 1.15;
    letter-spacing: -0.025em;
    margin: 0 0 18px;
    position: relative;
    z-index: 2;
  }

  .title-red {
    color: #FF1801;
    background: linear-gradient(90deg, #FF1801 0%, #FF5A4E 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .smc-desc {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: clamp(16px, 1.35vw, 19px);
    line-height: 1.65;
    color: #CBD5E1;
    max-width: 640px;
    margin: 0 auto 36px;
    position: relative;
    z-index: 2;
  }

  .smc-actions-row {
    display: flex;
    justify-content: center;
    margin-bottom: 36px;
    position: relative;
    z-index: 2;
  }

  .smc-primary-btn {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 16px 38px;
    border-radius: 14px;
    background: #FF1801;
    color: #FFFFFF;
    font-family: "Outfit", sans-serif;
    font-size: 1rem;
    font-weight: 800;
    letter-spacing: 0.04em;
    border: none;
    cursor: pointer;
    box-shadow: 0 10px 30px rgba(255, 24, 1, 0.45);
    transition: all 0.3s ease;
  }

  .smc-primary-btn:hover {
    background: #D61400;
    transform: translateY(-2px);
    box-shadow: 0 16px 40px rgba(255, 24, 1, 0.6);
  }
`;
