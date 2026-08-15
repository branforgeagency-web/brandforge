"use client";

import React from "react";

export default function BrandForgeClientMarqueeStrip() {
  return (
    <div className="bf-marquee-section">
      <style>{styles}</style>

      <div className="bf-marquee-inner">
        {/* LOOPING MARQUEE TRACK */}
        <div className="bf-marquee-viewport">
          <div className="bf-marquee-track">
            {/* FIRST SET */}
            <div className="bf-marquee-item"><img src="/client-thoughtspace.png" alt="ThoughtSpace" /></div>
            <div className="bf-marquee-item"><img src="/client-sonicprints.png" alt="Sonic Prints" /></div>
            <div className="bf-marquee-item"><span className="logo-impact">[IMPACT]</span></div>
            <div className="bf-marquee-item"><img src="/client-thoughtflows.png" alt="ThoughtFlows" /></div>
            <div className="bf-marquee-item"><img src="/client-talentera.png" alt="TalentEra" /></div>
            <div className="bf-marquee-item"><span className="logo-et"><strong>ET BRAND EQUITY</strong><small>An initiative of The Economic Times</small></span></div>
            <div className="bf-marquee-item"><span className="logo-dh">❖ dailyhunt</span></div>
            <div className="bf-marquee-item"><span className="logo-e4m">exchange<span>4</span>media.com</span></div>

            {/* DUPLICATE SET FOR INFINITE LOOPING */}
            <div className="bf-marquee-item"><img src="/client-thoughtspace.png" alt="ThoughtSpace" /></div>
            <div className="bf-marquee-item"><img src="/client-sonicprints.png" alt="Sonic Prints" /></div>
            <div className="bf-marquee-item"><span className="logo-impact">[IMPACT]</span></div>
            <div className="bf-marquee-item"><img src="/client-thoughtflows.png" alt="ThoughtFlows" /></div>
            <div className="bf-marquee-item"><img src="/client-talentera.png" alt="TalentEra" /></div>
            <div className="bf-marquee-item"><span className="logo-et"><strong>ET BRAND EQUITY</strong><small>An initiative of The Economic Times</small></span></div>
            <div className="bf-marquee-item"><span className="logo-dh">❖ dailyhunt</span></div>
            <div className="bf-marquee-item"><span className="logo-e4m">exchange<span>4</span>media.com</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = `
  @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@700;800;900&display=swap");

  .bf-marquee-section {
    width: 100%;
    background: #FFFFFF;
    border-top: 1px solid #E2E8F0;
    border-bottom: 1px solid #E2E8F0;
    padding: 22px 0;
    overflow: hidden;
    position: relative;
    z-index: 10;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
    font-family: "Outfit", sans-serif;
  }

  .bf-marquee-inner {
    width: 100%;
    display: flex;
    align-items: center;
    gap: clamp(20px, 3.5vw, 40px);
  }

  .bf-marquee-pill-wrapper {
    padding-left: clamp(20px, 4vw, 60px);
    flex-shrink: 0;
    z-index: 2;
  }

  .bf-news-awards-pill {
    display: inline-flex;
    align-items: center;
    padding: 9px 22px;
    border-radius: 999px;
    border: 1.5px solid #0F172A;
    background: #FFFFFF;
    color: #0F172A;
    font-size: 0.82rem;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.25s ease;
    white-space: nowrap;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }

  .bf-news-awards-pill:hover {
    background: #EF4136;
    border-color: #EF4136;
    color: #FFFFFF;
    box-shadow: 0 6px 20px rgba(239, 65, 54, 0.35);
  }

  .bf-marquee-viewport {
    position: relative;
    overflow: hidden;
    flex: 1;
    display: flex;
    align-items: center;
    mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
    -webkit-mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
  }

  .bf-marquee-track {
    display: flex;
    align-items: center;
    gap: clamp(40px, 5vw, 75px);
    width: max-content;
    animation: bfMarqueeLoop 26s linear infinite;
  }

  .bf-marquee-viewport:hover .bf-marquee-track {
    animation-play-state: paused;
  }

  @keyframes bfMarqueeLoop {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  .bf-marquee-item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .bf-marquee-item img {
    height: 42px;
    width: auto;
    max-width: 160px;
    object-fit: contain;
    filter: brightness(0.12) contrast(1.2);
    transition: filter 0.3s ease, transform 0.3s ease;
  }

  .bf-marquee-item:hover img {
    filter: brightness(1) contrast(1);
    transform: scale(1.08);
  }

  .logo-impact {
    font-size: 1.05rem;
    font-weight: 900;
    color: #D97706;
    letter-spacing: -0.02em;
    white-space: nowrap;
  }

  .logo-et {
    display: flex;
    flex-direction: column;
    line-height: 1.1;
    white-space: nowrap;
  }

  .logo-et strong {
    font-size: 0.88rem;
    color: #EF4136;
    font-weight: 900;
  }

  .logo-et small {
    font-size: 0.58rem;
    color: #64748B;
    font-weight: 600;
  }

  .logo-dh {
    font-size: 1.05rem;
    font-weight: 900;
    color: #0284C7;
    white-space: nowrap;
  }

  .logo-e4m {
    font-size: 1.05rem;
    font-weight: 900;
    color: #1E293B;
    white-space: nowrap;
  }

  .logo-e4m span {
    color: #EF4136;
  }

  @media (max-width: 768px) {
    .bf-marquee-inner {
      flex-direction: column;
      gap: 16px;
    }

    .bf-marquee-pill-wrapper {
      padding-left: 0;
    }
  }
`;
