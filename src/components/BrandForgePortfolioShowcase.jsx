"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

// Portfolio Projects Data
const PROJECTS = [
  {
    id: "farmer-fresh",
    title: "Farmer Fresh Delight",
    category: "Packaging & Brand Identity",
    image: "/farmer_fresh_mockup_1786784237105.jpg",
    description: "360° FMCG packaging redesign and nationwide digital advertising launch.",
  },
  {
    id: "jugg-jugg",
    title: "Jugg Jugg Ply",
    category: "Brand Campaign & Digital Media",
    image: "/jugg_jugg_mockup_1786784296597.jpg",
    description: "Omnichannel brand positioning, corporate brochure identity, and ROAS scale.",
  },
  {
    id: "apex-cyber",
    title: "Apex Cyber Systems",
    category: "3D Web & Enterprise Rebrand",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85",
    description: "Sub-second 3D WebGL portal experience driving 4.8x lead generation conversion.",
  },
  {
    id: "kinetix-auto",
    title: "Velocita Motors",
    category: "Luxury Automotive Launch",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=85",
    description: "High-octane digital showroom launch and performance media strategy.",
  },
];

const MEDIA_PARTNERS = [
  { name: "[IMPACT]", highlight: true },
  { name: "ET BRAND EQUITY", subtext: "An initiative of The Economic Times" },
  { name: "dailyhunt", icon: "❖" },
  { name: "exchange4media.com", accent: true },
  { name: "THE ECONOMIC TIMES", bold: true },
];

export default function BrandForgePortfolioShowcase({ onOpenModal }) {
  const [activeIdx, setActiveIdx] = useState(0);

  const prevSlide = () => {
    setActiveIdx((prev) => (prev === 0 ? PROJECTS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIdx((prev) => (prev === PROJECTS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bf-portfolio-root">
      <style>{styles}</style>

      {/* SECTION HEADER */}
      <div className="bf-port-header">
        <span className="bf-port-eyebrow">Recent Projects</span>
        <h2>A glimpse of creative excellence conceptualized with innovation</h2>
      </div>

      {/* 3D PERSPECTIVE CAROUSEL SHOWCASE */}
      <div className="bf-port-stage">
        {/* PREVIOUS SLIDE BUTTON */}
        <button
          type="button"
          className="bf-port-nav-btn btn-left"
          onClick={prevSlide}
          aria-label="Previous project"
        >
          <ChevronLeft size={22} />
        </button>

        {/* CAROUSEL CARDS WRAPPER */}
        <div className="bf-port-track">
          {PROJECTS.map((project, idx) => {
            const total = PROJECTS.length;
            let diff = idx - activeIdx;

            // Handle wrapping for infinite loop indexing
            if (diff < -1) diff += total;
            if (diff > 1) diff -= total;

            let cardClass = "bf-port-card";
            if (diff === 0) cardClass += " is-active";
            else if (diff === -1) cardClass += " is-prev";
            else if (diff === 1) cardClass += " is-next";
            else cardClass += " is-hidden";

            return (
              <div
                key={project.id}
                className={cardClass}
                onClick={() => setActiveIdx(idx)}
              >
                <div className="bf-card-inner">
                  <img src={project.image} alt={project.title} />
                  <div className="bf-card-overlay">
                    <div className="bf-card-info">
                      <span className="bf-card-category">{project.category}</span>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* NEXT SLIDE BUTTON */}
        <button
          type="button"
          className="bf-port-nav-btn btn-right"
          onClick={nextSlide}
          aria-label="Next project"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* WHITE BACKGROUND MARQUEE STRIP WITH LOOPING TESTIMONIAL LOGOS */}
      <div className="bf-port-media-marquee-wrap">
        <div className="bf-marquee-left-pill">
          <button
            type="button"
            className="bf-news-awards-pill"
            onClick={onOpenModal}
          >
            <span>→ News & Awards</span>
          </button>
        </div>

        <div className="bf-marquee-track-wrap">
          <div className="bf-marquee-track">
            {/* DUPLICATE SET 1 */}
            <div className="bf-marquee-item"><img src="/client-thoughtspace.png" alt="ThoughtSpace" /></div>
            <div className="bf-marquee-item"><img src="/client-sonicprints.png" alt="Sonic Prints" /></div>
            <div className="bf-marquee-item"><span className="bf-marquee-text-logo logo-impact">[IMPACT]</span></div>
            <div className="bf-marquee-item"><img src="/client-thoughtflows.png" alt="ThoughtFlows" /></div>
            <div className="bf-marquee-item"><img src="/client-talentera.png" alt="TalentEra" /></div>
            <div className="bf-marquee-item"><span className="bf-marquee-text-logo logo-et"><strong>ET BRAND EQUITY</strong><small>An initiative of The Economic Times</small></span></div>
            <div className="bf-marquee-item"><span className="bf-marquee-text-logo logo-dh">❖ dailyhunt</span></div>
            <div className="bf-marquee-item"><span className="bf-marquee-text-logo logo-e4m">exchange<span>4</span>media.com</span></div>

            {/* DUPLICATE SET 2 FOR SEAMLESS INFINITE LOOPING */}
            <div className="bf-marquee-item"><img src="/client-thoughtspace.png" alt="ThoughtSpace" /></div>
            <div className="bf-marquee-item"><img src="/client-sonicprints.png" alt="Sonic Prints" /></div>
            <div className="bf-marquee-item"><span className="bf-marquee-text-logo logo-impact">[IMPACT]</span></div>
            <div className="bf-marquee-item"><img src="/client-thoughtflows.png" alt="ThoughtFlows" /></div>
            <div className="bf-marquee-item"><img src="/client-talentera.png" alt="TalentEra" /></div>
            <div className="bf-marquee-item"><span className="bf-marquee-text-logo logo-et"><strong>ET BRAND EQUITY</strong><small>An initiative of The Economic Times</small></span></div>
            <div className="bf-marquee-item"><span className="bf-marquee-text-logo logo-dh">❖ dailyhunt</span></div>
            <div className="bf-marquee-item"><span className="bf-marquee-text-logo logo-e4m">exchange<span>4</span>media.com</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = `
  @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@700;800;900&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap");

  .bf-portfolio-root {
    position: relative;
    width: 100%;
    padding: clamp(60px, 7vw, 100px) 0 0 0;
    background: #060509;
    color: #FFFFFF;
    font-family: "Outfit", "Plus Jakarta Sans", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    isolation: isolate;
  }

  /* SECTION HEADER */
  .bf-port-header {
    text-align: center;
    max-width: 820px;
    padding: 0 20px;
    margin-bottom: clamp(35px, 5vh, 55px);
  }

  .bf-port-eyebrow {
    position: relative;
    display: inline-block;
    font-size: 0.82rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    color: #EF4136;
    text-transform: uppercase;
    margin-bottom: 12px;
  }

  .bf-port-eyebrow::after {
    content: "";
    display: block;
    width: 28px;
    height: 2px;
    background: #EF4136;
    margin: 6px auto 0;
    border-radius: 2px;
  }

  .bf-port-header h2 {
    font-size: clamp(1.8rem, 3.8vw, 3.1rem);
    font-weight: 900;
    line-height: 1.18;
    color: #FFFFFF;
    letter-spacing: -0.025em;
    margin: 0;
  }

  /* 3D STAGE & CAROUSEL TRACK */
  .bf-port-stage {
    position: relative;
    width: 100%;
    max-width: 1360px;
    padding: 0 20px;
    height: clamp(340px, 50vh, 520px);
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 1200px;
    margin-bottom: clamp(50px, 7vh, 80px);
  }

  .bf-port-nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 30;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #14131A;
    border: 1px solid rgba(255, 255, 255, 0.18);
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
    transition: all 0.25s ease;
  }

  .bf-port-nav-btn.btn-left {
    left: clamp(10px, 4vw, 60px);
  }

  .bf-port-nav-btn.btn-right {
    right: clamp(10px, 4vw, 60px);
  }

  .bf-port-nav-btn:hover {
    background: #EF4136;
    border-color: #EF4136;
    color: #FFFFFF;
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 12px 35px rgba(239, 65, 54, 0.45);
  }

  .bf-port-track {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bf-port-card {
    position: absolute;
    width: clamp(320px, 55vw, 760px);
    height: clamp(240px, 38vh, 440px);
    border-radius: 20px;
    border: 1px solid rgba(239, 65, 54, 0.28);
    overflow: hidden;
    cursor: pointer;
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);
    background: #0D0C12;
  }

  .bf-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .bf-card-inner img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.6s ease;
  }

  .bf-port-card:hover .bf-card-inner img {
    transform: scale(1.04);
  }

  .bf-card-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(0deg, rgba(6, 5, 9, 0.92) 0%, rgba(6, 5, 9, 0.2) 60%, transparent 100%);
    display: flex;
    align-items: flex-end;
    padding: 26px 32px;
    opacity: 0;
    transition: opacity 0.35s ease;
  }

  .bf-port-card.is-active .bf-card-overlay {
    opacity: 1;
  }

  .bf-card-info {
    color: #FFFFFF;
  }

  .bf-card-category {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #EF4136;
    margin-bottom: 6px;
  }

  .bf-card-info h3 {
    font-size: 1.45rem;
    font-weight: 900;
    margin: 0 0 6px;
    color: #FFFFFF;
  }

  .bf-card-info p {
    font-size: 0.88rem;
    color: rgba(255, 255, 255, 0.82);
    margin: 0;
  }

  /* 3D CAROUSEL POSITIONS */
  .bf-port-card.is-active {
    z-index: 20;
    transform: translateX(0) scale(1);
    opacity: 1;
    border-color: rgba(239, 65, 54, 0.55);
    box-shadow: 0 25px 70px rgba(0, 0, 0, 0.8), 0 0 35px rgba(239, 65, 54, 0.25);
  }

  .bf-port-card.is-prev {
    z-index: 10;
    transform: translateX(-52%) scale(0.82) rotateY(8deg);
    opacity: 0.55;
    filter: blur(1.5px);
  }

  .bf-port-card.is-next {
    z-index: 10;
    transform: translateX(52%) scale(0.82) rotateY(-8deg);
    opacity: 0.55;
    filter: blur(1.5px);
  }

  .bf-port-card.is-hidden {
    z-index: 1;
    transform: translateX(0) scale(0.6);
    opacity: 0;
    pointer-events: none;
  }

  /* WHITE BACKGROUND MARQUEE STRIP AT BOTTOM */
  .bf-port-media-marquee-wrap {
    width: 100%;
    background: #FFFFFF;
    padding: 24px 0;
    overflow: hidden;
    border-top: 1px solid #E2E8F0;
    border-bottom: 1px solid #E2E8F0;
    display: flex;
    align-items: center;
    gap: 30px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  }

  .bf-marquee-left-pill {
    padding-left: clamp(20px, 4vw, 60px);
    z-index: 5;
    flex-shrink: 0;
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

  .bf-marquee-track-wrap {
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
    gap: clamp(40px, 5vw, 70px);
    width: max-content;
    animation: bfMarquee 26s linear infinite;
  }

  .bf-marquee-track-wrap:hover .bf-marquee-track {
    animation-play-state: paused;
  }

  @keyframes bfMarquee {
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
    height: 40px;
    width: auto;
    max-width: 150px;
    object-fit: contain;
    filter: brightness(0.15) contrast(1.2);
    transition: filter 0.3s ease, transform 0.3s ease;
  }

  .bf-marquee-item:hover img {
    filter: brightness(1) contrast(1);
    transform: scale(1.08);
  }

  .bf-marquee-text-logo {
    font-family: "Outfit", sans-serif;
    font-size: 1.05rem;
    font-weight: 900;
    color: #0F172A;
    letter-spacing: -0.02em;
    white-space: nowrap;
  }

  .logo-impact {
    color: #D97706;
    font-weight: 900;
  }

  .logo-et {
    display: flex;
    flex-direction: column;
    line-height: 1.1;
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
    color: #0284C7;
    font-weight: 900;
  }

  .logo-e4m {
    color: #1E293B;
    font-weight: 900;
  }

  .logo-e4m span {
    color: #EF4136;
  }

  @media (max-width: 768px) {
    .bf-port-stage {
      height: 320px;
    }

    .bf-port-card.is-prev {
      transform: translateX(-40%) scale(0.78);
    }

    .bf-port-card.is-next {
      transform: translateX(40%) scale(0.78);
    }

    }
  }
`;
