"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import gsap from "gsap";
import {
  Search,
  Sparkles,
  Zap,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Bot,
  Layers,
  Globe,
  Star,
  Cpu,
} from "lucide-react";
import SwapArrow from "./SwapArrow";

const DIRECTIONS = ["up", "down", "left", "right"];
const getRandomDirection = () =>
  DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];

const getDirectionOffset = (dir, dist = 110) => {
  switch (dir) {
    case "up":
      return { x: 0, y: -dist };
    case "down":
      return { x: 0, y: dist };
    case "left":
      return { x: -dist, y: 0 };
    case "right":
      return { x: dist, y: 0 };
    default:
      return { x: 0, y: -dist };
  }
};

const getOppositeDirection = (dir) => {
  switch (dir) {
    case "up":
      return "down";
    case "down":
      return "up";
    case "left":
      return "right";
    case "right":
      return "left";
    default:
      return "down";
  }
};

const triggerPortalLoop = (letterEl) => {
  if (!letterEl || gsap.isTweening(letterEl)) return;
  const dir = getRandomDirection();
  const outOffset = getDirectionOffset(dir, 115);
  const inOffset = getDirectionOffset(getOppositeDirection(dir), 115);

  gsap
    .timeline()
    .to(letterEl, {
      x: `${outOffset.x}%`,
      y: `${outOffset.y}%`,
      duration: 0.22,
      ease: "power2.in",
    })
    .set(letterEl, {
      x: `${inOffset.x}%`,
      y: `${inOffset.y}%`,
    })
    .to(letterEl, {
      x: "0%",
      y: "0%",
      duration: 0.38,
      ease: "power2.out",
    });
};

const SKILLS_LIST = [
  "GOOGLE SERP #1",
  "NEURAL GEO CITATIONS",
  "CHATGPT VECTORS",
  "PERPLEXITY ENGINE",
  "GEMINI 1.5 PRO",
  "STRUCTURED JSON-LD",
  "100/100 CORE WEB VITALS",
  "LOCAL MAPS 3-PACK",
  "AUTHORITY PR SEED SETS",
  "SUB-200MS HYDRATION",
  "KNOWLEDGE GRAPH VERIFIED",
];

export default function SeoSajanHero({ onOpenModal }) {
  const containerRef = useRef(null);
  const taglineContainerRef = useRef(null);
  const [spotlightActive, setSpotlightActive] = useState(false);
  const spotlightPos = useRef({ x: 0, y: 0 });
  const rectRef = useRef(null);

  // Measure tagline bounding box
  const updateRect = useCallback(() => {
    if (taglineContainerRef.current) {
      rectRef.current = taglineContainerRef.current.getBoundingClientRect();
    }
  }, []);

  useEffect(() => {
    updateRect();
    window.addEventListener("resize", updateRect);
    window.addEventListener("scroll", updateRect, { passive: true });
    return () => {
      window.removeEventListener("resize", updateRect);
      window.removeEventListener("scroll", updateRect);
    };
  }, [updateRect]);

  const handleMouseMove = (e) => {
    if (!taglineContainerRef.current || !rectRef.current) return;
    const x = e.clientX - rectRef.current.left;
    const y = e.clientY - rectRef.current.top;
    spotlightPos.current = { x, y };
    taglineContainerRef.current.style.setProperty("--spotlight-x", `${x}px`);
    taglineContainerRef.current.style.setProperty("--spotlight-y", `${y}px`);
  };

  const handleMouseEnter = () => {
    updateRect();
    setSpotlightActive(true);
    if (taglineContainerRef.current) {
      taglineContainerRef.current.style.setProperty("--spotlight-size", "140px");
    }
  };

  const handleMouseLeave = () => {
    setSpotlightActive(false);
    if (taglineContainerRef.current) {
      taglineContainerRef.current.style.setProperty("--spotlight-size", "0px");
    }
  };

  // Staggered letter entrance on mount
  useEffect(() => {
    const letters = containerRef.current?.querySelectorAll(".bf-portal-letter");
    if (!letters?.length) return;

    letters.forEach((el, idx) => {
      const dir = getRandomDirection();
      const offset = getDirectionOffset(dir, 120);
      gsap.fromTo(
        el,
        { x: `${offset.x}%`, y: `${offset.y}%`, opacity: 0 },
        {
          x: "0%",
          y: "0%",
          opacity: 1,
          duration: 0.65,
          delay: 0.08 + idx * 0.02,
          ease: "power3.out",
        }
      );
    });
  }, []);

  const line1 = "OWN THE SEARCH ENGINE.";
  const line2 = "COMMAND THE AI ANSWER.";

  return (
    <section ref={containerRef} className="bf-sajan-hero-root">
      <style>{`
        .bf-sajan-hero-root {
          position: relative;
          min-height: 94vh;
          background: #09090C;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: clamp(100px, 13vw, 150px) 4% clamp(40px, 6vw, 60px);
          overflow: hidden;
          color: #FAFAFC;
        }

        /* Cinematic Background Image */
        .bf-sajan-hero-bg-img {
          position: absolute;
          inset: 0;
          background-image: url("/seo-geo-banner-bg.png");
          background-size: cover;
          background-position: center right;
          background-repeat: no-repeat;
          opacity: 0.65;
          z-index: 0;
          pointer-events: none;
        }
        .bf-sajan-hero-bg-overlay {
          position: absolute;
          inset: 0;
          background: 
            linear-gradient(90deg, rgba(9, 9, 12, 0.94) 0%, rgba(9, 9, 12, 0.78) 45%, rgba(9, 9, 12, 0.45) 75%, rgba(9, 9, 12, 0.7) 100%),
            linear-gradient(180deg, rgba(9, 9, 12, 0.5) 0%, transparent 40%, rgba(9, 9, 12, 0.92) 100%);
          z-index: 1;
          pointer-events: none;
        }

        /* Ambient Glow Backdrop */
        .bf-sajan-hero-glow {
          position: absolute;
          top: -200px;
          right: -100px;
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(239, 65, 54, 0.15) 0%, rgba(99, 102, 241, 0.08) 45%, transparent 70%);
          filter: blur(100px);
          pointer-events: none;
          z-index: 1;
        }
        .bf-sajan-hero-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
          background-size: 60px 60px;
          opacity: 0.45;
          pointer-events: none;
          z-index: 1;
        }

        /* Top Eyebrow Chip */
        .bf-sajan-eyebrow {
          position: relative;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 6px 16px;
          border-radius: 9999px;
          background: rgba(239, 65, 54, 0.08);
          border: 1px solid rgba(239, 65, 54, 0.25);
          color: #FF5A4D;
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: clamp(24px, 3.5vw, 36px);
          width: fit-content;
        }
        .bf-eyebrow-pulse {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #EF4136;
          box-shadow: 0 0 10px #EF4136;
          animation: bf-pulse 1.8s infinite;
        }
        @keyframes bf-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.85); }
        }

        /* Massive Typography & Sajan Portal Mask Architecture */
        .bf-sajan-headline-block {
          position: relative;
          z-index: 2;
          margin-bottom: clamp(32px, 5vw, 48px);
        }
        .bf-sajan-headline-line {
          font-size: clamp(2.6rem, 7.8vw, 6.8rem);
          font-weight: 900;
          line-height: 0.95;
          letter-spacing: -0.04em;
          text-transform: uppercase;
          margin: 0;
          white-space: normal;
          user-select: none;
          color: #FAFAFC;
        }
        .bf-sajan-headline-line.accent {
          color: #EF4136;
          text-shadow: 0 0 40px rgba(239, 65, 54, 0.35);
        }

        .bf-portal-mask {
          display: inline-block;
          position: relative;
          overflow: hidden;
          vertical-align: bottom;
          cursor: pointer;
        }
        .bf-portal-letter {
          display: inline-block;
          position: relative;
          will-change: transform;
          backface-visibility: hidden;
          transition: color 0.2s ease;
        }
        .bf-portal-mask:hover .bf-portal-letter {
          color: #FF6B5E;
        }

        /* Sajan Cursor-Spotlight Tagline */
        .bf-sajan-tagline-wrap {
          position: relative;
          z-index: 2;
          max-width: 920px;
          margin-bottom: clamp(36px, 6vw, 56px);
          cursor: pointer;
          overflow: visible;
        }
        .bf-sajan-tagline-base {
          font-size: clamp(1.05rem, 1.8vw, 1.35rem);
          line-height: 1.55;
          color: #94A3B8;
          font-weight: 400;
          margin: 0;
          position: relative;
          z-index: 1;
        }
        .bf-sajan-tagline-hidden {
          font-size: clamp(1.05rem, 1.8vw, 1.35rem);
          line-height: 1.55;
          color: #FFFFFF;
          font-weight: 600;
          margin: 0;
          position: absolute;
          inset: 0;
          z-index: 3;
          pointer-events: none;
          clip-path: circle(var(--spotlight-size, 0px) at var(--spotlight-x, 50%) var(--spotlight-y, 50%));
          background: #EF4136;
          padding: 2px 8px;
          border-radius: 8px;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }
        .bf-sajan-spotlight-hint {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          color: rgba(255, 255, 255, 0.45);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-top: 10px;
        }

        /* CTA Row */
        .bf-sajan-cta-row {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: clamp(40px, 7vw, 68px);
        }
        .bf-sajan-primary-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #EF4136;
          color: #FFFFFF;
          padding: 16px 32px;
          border-radius: 9999px;
          font-size: 0.95rem;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 10px 30px rgba(239, 65, 54, 0.32);
        }
        .bf-sajan-primary-btn:hover {
          background: #DC2626;
          transform: translateY(-2px);
          box-shadow: 0 16px 40px rgba(239, 65, 54, 0.45);
        }

        .bf-sajan-secondary-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #FAFAFC;
          padding: 16px 28px;
          border-radius: 9999px;
          font-size: 0.92rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s ease;
          text-decoration: none;
        }
        .bf-sajan-secondary-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }

        /* Sajan Star Marquee Strip */
        .bf-sajan-marquee-wrapper {
          position: relative;
          z-index: 2;
          width: calc(100% + 8vw);
          margin-left: -4vw;
          overflow: hidden;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.02);
          padding: 18px 0;
        }
        .bf-sajan-marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: bf-sajan-scroll 34s linear infinite;
        }
        .bf-sajan-marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes bf-sajan-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .bf-sajan-skill-cell {
          display: inline-flex;
          align-items: center;
          gap: 18px;
          padding: 0 16px;
        }
        .bf-sajan-skill-text {
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.7);
          white-space: nowrap;
        }
        .bf-sajan-star-icon {
          width: 14px;
          height: 14px;
          color: #EF4136;
          flex-shrink: 0;
        }
      `}</style>

      {/* CINEMATIC BACKGROUND & AMBIENT VISUALS */}
      <div className="bf-sajan-hero-bg-img" aria-hidden="true" />
      <div className="bf-sajan-hero-bg-overlay" aria-hidden="true" />
      <div className="bf-sajan-hero-glow" aria-hidden="true" />
      <div className="bf-sajan-hero-grid" aria-hidden="true" />

      {/* TOP EYEBROW */}
      <div className="bf-sajan-eyebrow">
        <span className="bf-eyebrow-pulse" />
        <span>NEXT-GEN SEARCH SUPREMACY • DUAL-ENGINE ARCHITECTURE</span>
      </div>

      {/* MASSIVE KINETIC PORTAL-MASK HEADLINE */}
      <div className="bf-sajan-headline-block">
        <h1 className="bf-sajan-headline-line">
          {line1.split(" ").map((word, wIdx, arr) => (
            <React.Fragment key={wIdx}>
              <span style={{ display: "inline-block", whiteSpace: "nowrap" }}>
                {word.split("").map((char, cIdx) => (
                  <span
                    key={cIdx}
                    className="bf-portal-mask"
                    onMouseEnter={(e) => {
                      const letter = e.currentTarget.querySelector(
                        ".bf-portal-letter"
                      );
                      triggerPortalLoop(letter);
                    }}
                  >
                    <span className="bf-portal-letter">{char}</span>
                  </span>
                ))}
              </span>
              {wIdx < arr.length - 1 && " "}
            </React.Fragment>
          ))}
        </h1>

        <h2 className="bf-sajan-headline-line accent">
          {line2.split(" ").map((word, wIdx, arr) => (
            <React.Fragment key={wIdx}>
              <span style={{ display: "inline-block", whiteSpace: "nowrap" }}>
                {word.split("").map((char, cIdx) => (
                  <span
                    key={cIdx}
                    className="bf-portal-mask"
                    onMouseEnter={(e) => {
                      const letter = e.currentTarget.querySelector(
                        ".bf-portal-letter"
                      );
                      triggerPortalLoop(letter);
                    }}
                  >
                    <span className="bf-portal-letter">{char}</span>
                  </span>
                ))}
              </span>
              {wIdx < arr.length - 1 && " "}
            </React.Fragment>
          ))}
        </h2>
      </div>

      {/* SAJAN DUAL-LAYER CURSOR SPOTLIGHT TAGLINE */}
      <div
        ref={taglineContainerRef}
        className="bf-sajan-tagline-wrap"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <p className="bf-sajan-tagline-base">
          Traditional SEO captures ten blue links. BrandForge GEO synthesizes
          your brand into ChatGPT, Perplexity, and Google Gemini vector graphs.
          We deliver category-leading organic market share across Coimbatore and
          global enterprise search.
        </p>

        <p className="bf-sajan-tagline-hidden" aria-hidden="true">
          Own the Google #1 organic position. Rank inside the Maps 3-Pack. Get
          cited as the definitive authority across Perplexity, ChatGPT, and
          Google Gemini AI answer consensus.
        </p>

        <span className="bf-sajan-spotlight-hint">
          <Sparkles size={12} color="#EF4136" />
          <span>Hover cursor across text to reveal neural answer engine layer</span>
        </span>
      </div>

      {/* CTA BUTTONS */}
      <div className="bf-sajan-cta-row">
        <button
          type="button"
          onClick={onOpenModal}
          className="bf-sajan-primary-btn"
        >
          <span>Ignite Your Search Dominance</span>
          <SwapArrow dir="right" size={16} color="#FFFFFF" />
        </button>

        <a href="#seo-query-archive" className="bf-sajan-secondary-btn">
          <span>Explore Live Query Citations</span>
          <ArrowRight size={15} />
        </a>
      </div>

      {/* SAJAN STAR MARQUEE TICKER STRIP */}
      <div className="bf-sajan-marquee-wrapper" aria-hidden="true">
        <div className="bf-sajan-marquee-track">
          {[...SKILLS_LIST, ...SKILLS_LIST].map((item, idx) => (
            <div key={idx} className="bf-sajan-skill-cell">
              <span className="bf-sajan-skill-text">{item}</span>
              <svg
                className="bf-sajan-star-icon"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 0C12 0 14.5 9.5 24 12C14.5 14.5 12 24 12 24C12 24 9.5 14.5 0 12C9.5 9.5 12 0 12 0Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
