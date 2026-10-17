"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
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
  const [, setSpotlightActive] = useState(false);
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
    const win = typeof globalThis !== "undefined" ? globalThis.window : null;
    if (win) {
      win.addEventListener("resize", updateRect);
      win.addEventListener("scroll", updateRect, { passive: true });
    }
    return () => {
      if (win) {
        win.removeEventListener("resize", updateRect);
        win.removeEventListener("scroll", updateRect);
      }
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
    <section ref={containerRef} className="bf-montarville-hero-root">
      <style>{`
        .bf-montarville-hero-root {
          position: relative;
          min-height: 94vh;
          background: #09090C;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: clamp(90px, 11vw, 130px) clamp(24px, 5vw, 64px) clamp(30px, 4vw, 50px);
          overflow: hidden;
          color: #FAFAFC;
        }

        /* Ambient Architectural Background Geometry (Montarville Inspired) */
        .bf-montarville-bg-geometry {
          position: absolute;
          right: -80px;
          top: 8%;
          width: clamp(500px, 55vw, 920px);
          height: auto;
          pointer-events: none;
          z-index: 0;
          opacity: 0.42;
        }

        /* Left-Side Editorial Layout Column */
        .bf-montarville-left-col {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          max-width: 960px;
        }

        /* Top Editorial Tracking */
        .bf-sajan-eyebrow {
          display: block;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #8E8E93;
          margin-bottom: clamp(20px, 3vw, 32px);
        }

        /* Headline Block with Kinetic Portal-Mask Letters */
        .bf-sajan-headline-block {
          position: relative;
          z-index: 2;
          margin-bottom: clamp(28px, 4.5vw, 44px);
        }
        .bf-sajan-headline-line {
          font-family: 'General Sans', sans-serif, -apple-system, BlinkMacSystemFont;
          font-size: clamp(2.6rem, 7.4vw, 6.4rem);
          font-weight: 900;
          line-height: 0.96;
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

        /* Dual-Layer Cursor Spotlight Tagline */
        .bf-sajan-tagline-wrap {
          position: relative;
          z-index: 2;
          max-width: 860px;
          margin-bottom: clamp(36px, 5.5vw, 54px);
          cursor: pointer;
          overflow: visible;
        }
        .bf-sajan-tagline-base {
          font-size: clamp(1.05rem, 1.6vw, 1.3rem);
          line-height: 1.6;
          color: #94A3B8;
          font-weight: 400;
          margin: 0;
          position: relative;
          z-index: 1;
        }
        .bf-sajan-tagline-hidden {
          font-size: clamp(1.05rem, 1.6vw, 1.3rem);
          line-height: 1.6;
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

        /* Montarville Two-Button CTA Row */
        .bf-montarville-cta-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: clamp(40px, 6vw, 64px);
        }

        /* Solid Red Primary Button with White Dot */
        .bf-montarville-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #EF4136;
          color: #FFFFFF;
          padding: 16px 32px;
          border-radius: 8px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border: 1px solid #EF4136;
          cursor: pointer;
          transition: all 0.28s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 10px 28px rgba(239, 65, 54, 0.28);
        }
        .bf-montarville-btn-primary:hover {
          background: #DC2626;
          border-color: #DC2626;
          transform: translateY(-2px);
          box-shadow: 0 16px 36px rgba(239, 65, 54, 0.42);
        }

        .bf-btn-dot-white {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #FFFFFF;
          display: inline-block;
          flex-shrink: 0;
        }

        /* Dark Translucent Secondary Button with Red Dot */
        .bf-montarville-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #1B1B20;
          border: 1px solid rgba(255, 255, 255, 0.14);
          color: #FAFAFC;
          padding: 16px 30px;
          border-radius: 8px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.25s ease;
          text-decoration: none;
        }
        .bf-montarville-btn-secondary:hover {
          background: #24242C;
          border-color: rgba(255, 255, 255, 0.32);
          transform: translateY(-2px);
          color: #FFFFFF;
        }

        .bf-btn-dot-red {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #EF4136;
          box-shadow: 0 0 6px #EF4136;
          display: inline-block;
          flex-shrink: 0;
        }

        /* Sajan Star Marquee Strip */
        .bf-sajan-marquee-wrapper {
          position: relative;
          z-index: 2;
          width: calc(100% + 10vw);
          margin-left: -5vw;
          overflow: hidden;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.015);
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

      {/* ARCHITECTURAL BACKGROUND GEOMETRY */}
      <div className="bf-montarville-bg-geometry" aria-hidden="true">
        <svg viewBox="0 0 1000 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="650" cy="400" r="340" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="1.5" />
          <circle cx="850" cy="520" r="280" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1.5" />
          <circle cx="500" cy="300" r="220" stroke="rgba(239, 65, 54, 0.1)" strokeWidth="1.5" />
          <line x1="300" y1="120" x2="900" y2="720" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1.5" />
        </svg>
      </div>

      {/* LEFT-SIDE EDITORIAL CONTENT BLOCK */}
      <div className="bf-montarville-left-col">
        {/* TOP EDITORIAL CATEGORY TRACKING */}
        <p className="bf-sajan-eyebrow">
          DUAL-ENGINE SEARCH ARCHITECTURE // ORGANIC + GENERATIVE AI
        </p>

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

        {/* DUAL-LAYER CURSOR SPOTLIGHT TAGLINE */}
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
            <span>[ Interactive ] Hover cursor across text to reveal neural answer engine layer</span>
          </span>
        </div>

        {/* TWO-BUTTON CTA ROW (MONTARVILLE ARCHITECTURAL STYLE) */}
        <div className="bf-montarville-cta-row">
          <button
            type="button"
            onClick={onOpenModal}
            className="bf-montarville-btn-primary"
          >
            <span className="bf-btn-dot-white" />
            <span>IGNITE YOUR SEARCH DOMINANCE</span>
            <SwapArrow dir="right" size={15} color="#FFFFFF" />
          </button>

          <a href="#seo-query-archive" className="bf-montarville-btn-secondary">
            <span className="bf-btn-dot-red" />
            <span>EXPLORE LIVE QUERY CITATIONS</span>
            <ArrowRight size={15} />
          </a>
        </div>
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
