"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import SwapArrow from "./SwapArrow";

const DIRECTIONS = ["up", "down", "left", "right"];
const getRandomDirection = () =>
  DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];

const getDirectionOffset = (dir, dist = 120) => {
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
  const outOffset = getDirectionOffset(dir, 120);
  const inOffset = getDirectionOffset(getOppositeDirection(dir), 120);

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

const HERO_HEADLINES = {
  "seo-geo": {
    line1: "OWN THE SEARCH ENGINE.",
    line2: "COMMAND THE AI ANSWER.",
  },
  "paid-media": {
    line1: "MAXIMIZE PAID ACQUISITION.",
    line2: "CONVERT CLICKS INTO REVENUE.",
  },
  "web-foundry": {
    line1: "HIGH-PERFORMANCE WEB FOUNDRY.",
    line2: "SUB-200MS SPEED THAT SELLS.",
  },
  "viral-social": {
    line1: "CULTURE-DEFINING SOCIAL MEDIA.",
    line2: "ATTENTION THAT CONVERTS.",
  },
  "influencer-network": {
    line1: "CREATOR PERFORMANCE MATRIX.",
    line2: "VERIFIED INFLUENCER REVENUE.",
  },
  "content-smithy": {
    line1: "AUTHORITATIVE CONTENT SMITHY.",
    line2: "OWN THE INDUSTRY CONVERSATION.",
  },
  "inbox-edge": {
    line1: "HIGH-LTV EMAIL SYSTEMS.",
    line2: "INBOX RETENTION THAT PRINTS.",
  },
  "brand-anvil": {
    line1: "CATEGORY-DEFINING POSITIONING.",
    line2: "FORGE AN UNBEATABLE MOAT.",
  },
  "visual-id": {
    line1: "ICONIC BRAND IDENTITY.",
    line2: "VISUAL SYSTEMS THAT SCALE.",
  },
  "commercial-video": {
    line1: "CINEMATIC COMMERCIAL VIDEO.",
    line2: "STORYTELLING THAT DRIVES SALES.",
  },
  "cro-revenue": {
    line1: "CONVERSION RATE OPTIMIZATION.",
    line2: "EXTRACT MAXIMUM FUNNEL VALUE.",
  },
  "reputation-shield": {
    line1: "EXECUTIVE REPUTATION SHIELD.",
    line2: "PROTECT DOMAIN AUTHORITY.",
  },
};

HERO_HEADLINES["seo-company-coimbatore"] = HERO_HEADLINES["seo-geo"];
HERO_HEADLINES["ppc-company-coimbatore"] = HERO_HEADLINES["paid-media"];
HERO_HEADLINES["website-development-company-coimbatore"] = HERO_HEADLINES["web-foundry"];
HERO_HEADLINES["web-development-company-coimbatore"] = HERO_HEADLINES["web-foundry"];
HERO_HEADLINES["social-media-marketing-company-coimbatore"] = HERO_HEADLINES["viral-social"];
HERO_HEADLINES["social-media-agency-coimbatore"] = HERO_HEADLINES["viral-social"];
HERO_HEADLINES["content-marketing-agency-coimbatore"] = HERO_HEADLINES["content-smithy"];
HERO_HEADLINES["content-marketing-company-coimbatore"] = HERO_HEADLINES["content-smithy"];
HERO_HEADLINES["email-marketing-company-coimbatore"] = HERO_HEADLINES["inbox-edge"];
HERO_HEADLINES["email-marketing-agency-coimbatore"] = HERO_HEADLINES["inbox-edge"];
HERO_HEADLINES["brand-positioning-agency-coimbatore"] = HERO_HEADLINES["brand-anvil"];
HERO_HEADLINES["brand-positioning-company-coimbatore"] = HERO_HEADLINES["brand-anvil"];
HERO_HEADLINES["brand-identity-design-agency-coimbatore"] = HERO_HEADLINES["visual-id"];
HERO_HEADLINES["brand-identity-design-company-coimbatore"] = HERO_HEADLINES["visual-id"];
HERO_HEADLINES["influencer-marketing-coimbatore"] = HERO_HEADLINES["influencer-network"];
HERO_HEADLINES["brand-reputation-management-coimbatore"] = HERO_HEADLINES["reputation-shield"];
HERO_HEADLINES["video-production-editing-company-coimbatore"] = HERO_HEADLINES["commercial-video"];

const HERO_SKILLS = {
  "seo-geo": [
    "GOOGLE SERP #1", "NEURAL GEO CITATIONS", "CHATGPT VECTORS", "PERPLEXITY ENGINE",
    "GEMINI 1.5 PRO", "STRUCTURED JSON-LD", "100/100 CORE WEB VITALS", "LOCAL MAPS 3-PACK",
    "AUTHORITY PR SEED SETS", "SUB-200MS HYDRATION", "KNOWLEDGE GRAPH VERIFIED"
  ],
  "paid-media": [
    "GOOGLE SEARCH ADS", "META CAPI TRACKING", "ALGORITHMIC ROAS ENGINE", "NEGATIVE KEYWORD SHIELDS",
    "REELS & STORY ADS", "YOUTUBE INTENT TARGETING", "ADVANTAGE+ BIDDING", "HIGH-CONVERTING LANDERS"
  ],
  "web-foundry": [
    "SUB-200MS LOAD SPEED", "100/100 CORE WEB VITALS", "REACT & NEXT.JS JAMSTACK", "ZERO BLOAT ENGINEERING",
    "HEADLESS CMS INTEGRATION", "MOBILE-FIRST ARCHITECTURE", "ENTERPRISE SECURITY", "ECOMMERCE CHECKOUT"
  ],
  "viral-social": [
    "SHORT-FORM VIRAL REELS", "ORGANIC ALGORITHM HACKS", "COMMUNITY ENGAGEMENT", "TIKTOK & INSTAGRAM GROWTH",
    "TREND HIJACKING MATRIX", "SCROLL-STOPPING HOOKS", "HIGH-RETENTION EDITING", "AUDIENCE NURTURING"
  ],
  "influencer-network": [
    "VETTED CREATOR ROSTER", "FRAUD-FREE AUDIENCES", "UTM TRACKED SALES", "COIMBATORE & REGIONAL CREATORS",
    "UGC LICENSING RIGHTS", "MULTI-TIER INFLUENCER STACKS", "DIRECT REVENUE ATTRIBUTION", "STORY PROMO BLITZ"
  ],
  "content-smithy": [
    "AUTHORITATIVE PILLARS", "HIGH INFORMATION GAIN", "TOPICAL SEMANTIC MAPS", "ORIGINAL EDITORIAL RESEARCH",
    "AI-RESISTANT COPYWRITING", "TOP-OF-FUNNEL LEAD MAGNETS", "LINK-EARNING ASSETS", "CONVERSION STORYTELLING"
  ],
  "inbox-edge": [
    "HYPER-SEGMENTED FLOWS", "WELCOME CONVERSION SERIES", "ABANDONED CART RECOVERY", "ZERO-SPAM DELIVERABILITY",
    "HIGH-LTV NURTURING", "DYNAMIC REPEAT PURCHASE", "ENGAGEMENT RE-ACTIVATION", "VIP LOYALTY CAMPAIGNS"
  ],
  "brand-anvil": [
    "CATEGORY MONOPOLY", "STRATEGIC POSITIONING", "UNBEATABLE VALUE MOAT", "COMPETITIVE DIFFERENTIATION",
    "EXECUTIVE MESSAGING PILLARS", "BRAND VOICE ARCHITECTURE", "PREMIUM PRICING POWER", "MARKET PERCEPTION FORGE"
  ],
  "visual-id": [
    "ICONIC BRAND IDENTITY", "ENTERPRISE DESIGN SYSTEMS", "TYPOGRAPHY & COLOR MATRIX", "VECTOR LOGOMARKS",
    "PACKAGING & COLLATERAL", "MOTION BRAND GUIDELINES", "UNMISTAKABLE VISUAL MOAT", "SCALABLE ASSET LIBRARIES"
  ],
  "commercial-video": [
    "CINEMATIC AD FILMS", "COMMERCIAL SCRIPTWRITING", "HIGH-END 4K PRODUCTION", "SOUND DESIGN & COLOR GRADE",
    "DIRECT RESPONSE CUTDOWNS", "FOUNDER BRAND DOCUMENTARIES", "PRODUCT DEMO SHOWCASES", "MULTI-PLATFORM RATIOS"
  ],
  "cro-revenue": [
    "HEATMAP & BEHAVIOR MAPPING", "RIGOROUS A/B SPLIT TESTING", "CHECKOUT FRICTION REMOVAL", "FORM DROP-OFF DIAGNOSTICS",
    "VALUE PROPOSITION TESTING", "MOBILE CONVERSION LIFT", "REVENUE PER VISITOR MAX", "BEHAVIORAL PSYCHOLOGY"
  ],
  "reputation-shield": [
    "ACTIVE 5-STAR REVIEW ENGINE", "SENTIMENT SHIELDING", "GOOGLE BUSINESS DEFENSE", "EXECUTIVE BRAND PROTECTION",
    "CRISIS COMMUNICATIONS", "REVIEW VELOCITY STABILIZER", "NEGATIVE SEARCH SUPPRESSION", "POLICY COMPLIANT AUDITS"
  ]
};

HERO_SKILLS["seo-company-coimbatore"] = HERO_SKILLS["seo-geo"];
HERO_SKILLS["ppc-company-coimbatore"] = HERO_SKILLS["paid-media"];
HERO_SKILLS["website-development-company-coimbatore"] = HERO_SKILLS["web-foundry"];
HERO_SKILLS["web-development-company-coimbatore"] = HERO_SKILLS["web-foundry"];
HERO_SKILLS["social-media-marketing-company-coimbatore"] = HERO_SKILLS["viral-social"];
HERO_SKILLS["social-media-agency-coimbatore"] = HERO_SKILLS["viral-social"];
HERO_SKILLS["content-marketing-agency-coimbatore"] = HERO_SKILLS["content-smithy"];
HERO_SKILLS["content-marketing-company-coimbatore"] = HERO_SKILLS["content-smithy"];
HERO_SKILLS["email-marketing-company-coimbatore"] = HERO_SKILLS["inbox-edge"];
HERO_SKILLS["email-marketing-agency-coimbatore"] = HERO_SKILLS["inbox-edge"];
HERO_SKILLS["brand-positioning-agency-coimbatore"] = HERO_SKILLS["brand-anvil"];
HERO_SKILLS["brand-positioning-company-coimbatore"] = HERO_SKILLS["brand-anvil"];
HERO_SKILLS["brand-identity-design-agency-coimbatore"] = HERO_SKILLS["visual-id"];
HERO_SKILLS["brand-identity-design-company-coimbatore"] = HERO_SKILLS["visual-id"];
HERO_SKILLS["influencer-marketing-coimbatore"] = HERO_SKILLS["influencer-network"];
HERO_SKILLS["brand-reputation-management-coimbatore"] = HERO_SKILLS["reputation-shield"];
HERO_SKILLS["video-production-editing-company-coimbatore"] = HERO_SKILLS["commercial-video"];

export default function SeoSajanHero({ data, slug, onOpenModal }) {
  const containerRef = useRef(null);
  const taglineContainerRef = useRef(null);
  const [, setSpotlightActive] = useState(false);
  const spotlightPos = useRef({ x: 0, y: 0 });
  const rectRef = useRef(null);

  const currentSlug = data?.slug || slug || "seo-geo";
  const isSeoGeo = currentSlug === "seo-geo" || currentSlug === "seo-company-coimbatore";

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
  }, [currentSlug]);

  const headlineConfig = HERO_HEADLINES[currentSlug] || {
    line1: data?.title ? data.title.split(" ").slice(0, 4).join(" ").toUpperCase() + "." : "OWN THE CATEGORY.",
    line2: data?.title ? data.title.split(" ").slice(4).join(" ").toUpperCase() + "." : "COMMAND THE MARKET.",
  };
  const line1 = headlineConfig.line1;
  const line2 = headlineConfig.line2;

  const skillsList = HERO_SKILLS[currentSlug] || (
    data?.pillars ? data.pillars.map((p) => p.title.replace(/—.*$/, "").trim().toUpperCase()) : HERO_SKILLS["seo-geo"]
  );

  const taglineBase = Array.isArray(data?.subtitle)
    ? data.subtitle[0]
    : data?.subtitle || "Traditional agencies rely on generic templates and unverified vanity metrics. BrandForge engineers high-performance architectures that command market authority.";

  const taglineHidden = Array.isArray(data?.subtitle) && data.subtitle[1]
    ? data.subtitle[1]
    : data?.whyChooseUs?.description || data?.metaDescription || "We combine on-ground market knowledge with precision engineering to scale revenue, not just vanity impressions.";

  const primaryBtnText = data?.heroButtonText
    ? data.heroButtonText.replace("→", "").trim().toUpperCase()
    : "IGNITE YOUR DOMINANCE";

  return (
    <section ref={containerRef} id="hero-banner" className="bf-montarville-hero-root">
      <style>{`
        .bf-montarville-hero-root {
          position: relative;
          min-height: 86vh;
          background: #09090C;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: clamp(70px, 8.5vw, 105px) clamp(24px, 5vw, 64px) clamp(24px, 3.5vw, 40px);
          overflow: hidden;
          color: #FAFAFC;
        }

        /* Video Background */
        .bf-hero-video-wrap {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
          pointer-events: none;
        }

        .bf-hero-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          opacity: 0.95;
        }

        /* Image Background for Non-Video Dashboards */
        .bf-hero-image-wrap {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
          pointer-events: none;
        }

        .bf-hero-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          opacity: 0.28;
          filter: contrast(1.15) saturate(1.1);
          transform: scale(1.05);
        }

        .bf-hero-img-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 60% 40%, rgba(9, 9, 12, 0.45) 0%, #09090C 85%),
                      linear-gradient(to bottom, rgba(9, 9, 12, 0.4) 0%, #09090C 100%);
        }

        /* Ambient Architectural Background Geometry */
        .bf-montarville-bg-geometry {
          position: absolute;
          right: -80px;
          top: 8%;
          width: clamp(500px, 55vw, 920px);
          height: auto;
          pointer-events: none;
          z-index: 1;
          opacity: 0.42;
        }

        /* Left-Side Editorial Layout Column */
        .bf-montarville-left-col {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          max-width: 860px;
        }

        .bf-sajan-headline-block {
          margin-bottom: clamp(24px, 3vw, 36px);
        }

        .bf-sajan-headline-line {
          font-family: "General Sans", "Outfit", -apple-system, sans-serif;
          font-size: clamp(34px, 5.2vw, 76px);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.04em;
          color: #FAFAFC;
          text-transform: uppercase;
          margin: 0;
          word-break: break-word;
        }

        .bf-sajan-headline-line.accent {
          color: #EF4136;
          margin-top: 4px;
        }

        .bf-portal-mask {
          display: inline-block;
          overflow: hidden;
          vertical-align: top;
          cursor: pointer;
        }

        .bf-portal-letter {
          display: inline-block;
          will-change: transform;
          user-select: none;
          transition: color 0.15s ease;
        }

        .bf-portal-mask:hover .bf-portal-letter {
          color: #EF4136;
        }

        .bf-sajan-headline-line.accent .bf-portal-mask:hover .bf-portal-letter {
          color: #FFFFFF;
        }

        /* Dual-Layer Cursor Spotlight Tagline */
        .bf-sajan-tagline-wrap {
          position: relative;
          max-width: 760px;
          margin-bottom: clamp(30px, 4vw, 44px);
          cursor: crosshair;
          --spotlight-size: 0px;
          --spotlight-x: 0px;
          --spotlight-y: 0px;
        }

        .bf-sajan-tagline-base {
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(15.5px, 1.25vw, 18.5px);
          line-height: 1.62;
          color: rgba(250, 250, 252, 0.68);
          font-weight: 450;
          margin: 0;
          user-select: none;
        }

        .bf-sajan-tagline-hidden {
          position: absolute;
          inset: 0;
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: clamp(15.5px, 1.25vw, 18.5px);
          line-height: 1.62;
          color: #FFFFFF;
          font-weight: 600;
          margin: 0;
          user-select: none;
          pointer-events: none;
          clip-path: circle(var(--spotlight-size) at var(--spotlight-x) var(--spotlight-y));
          -webkit-clip-path: circle(var(--spotlight-size) at var(--spotlight-x) var(--spotlight-y));
          transition: clip-path 0.05s linear;
        }

        .bf-sajan-spotlight-hint {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 10px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.68rem;
          color: rgba(255, 255, 255, 0.45);
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        /* Two-Button CTA Row */
        .bf-montarville-cta-row {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .bf-montarville-btn-primary {
          appearance: none;
          background: #EF4136;
          border: 1px solid #EF4136;
          color: #FFFFFF;
          padding: 16px 28px;
          border-radius: 9999px;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease, background-color 0.2s ease;
        }

        .bf-montarville-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(239, 65, 54, 0.4);
          background: #d8352b;
        }

        .bf-btn-dot-white {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #FFFFFF;
          display: inline-block;
        }

        .bf-btn-dot-red {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #EF4136;
          display: inline-block;
        }

        .bf-montarville-btn-secondary {
          appearance: none;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.18);
          color: #FAFAFC;
          padding: 16px 26px;
          border-radius: 9999px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
        }

        .bf-montarville-btn-secondary:hover {
          border-color: #EF4136;
          background: rgba(239, 65, 54, 0.08);
          transform: translateY(-2px);
        }

        /* Marquee Ticker Strip */
        .bf-sajan-marquee-wrapper {
          position: relative;
          z-index: 2;
          width: 100%;
          margin-top: clamp(40px, 6vw, 64px);
          overflow: hidden;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 18px;
          mask-image: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
        }

        .bf-sajan-marquee-track {
          display: flex;
          align-items: center;
          gap: clamp(28px, 4vw, 52px);
          width: max-content;
          animation: bfMarquee 38s linear infinite;
        }

        @keyframes bfMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .bf-sajan-skill-cell {
          display: inline-flex;
          align-items: center;
          gap: 14px;
        }

        .bf-sajan-skill-text {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: clamp(0.7rem, 0.9vw, 0.78rem);
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

        @media (max-width: 768px) {
          .bf-montarville-hero-root {
            padding: 85px 20px 30px;
          }
          .bf-montarville-cta-row {
            flex-direction: column;
            align-items: stretch;
          }
          .bf-montarville-btn-primary,
          .bf-montarville-btn-secondary {
            justify-content: center;
          }
        }
      `}</style>

      {/* ── BACKGROUND MEDIA ── */}
      {isSeoGeo ? (
        <div className="bf-hero-video-wrap" aria-hidden="true">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="bf-hero-video"
          >
            <source src="/seobanner.mp4" type="video/mp4" />
          </video>
        </div>
      ) : (
        <div className="bf-hero-image-wrap" aria-hidden="true">
          <img
            src={data?.bannerBg || "/banner-seo-geo-bg.jpg"}
            alt=""
            loading="eager"
            fetchpriority="high"
            decoding="async"
            className="bf-hero-bg-img"
          />
          <div className="bf-hero-img-overlay" />
        </div>
      )}

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
          <p className="bf-sajan-tagline-base">{taglineBase}</p>

          <p className="bf-sajan-tagline-hidden" aria-hidden="true">
            {taglineHidden}
          </p>

          <span className="bf-sajan-spotlight-hint">
            <span>[ Interactive ] Hover cursor across text to reveal deeper strategy layer</span>
          </span>
        </div>

        {/* TWO-BUTTON CTA ROW */}
        <div className="bf-montarville-cta-row">
          <button
            type="button"
            onClick={onOpenModal}
            className="bf-montarville-btn-primary"
          >
            <span className="bf-btn-dot-white" />
            <span>{primaryBtnText}</span>
            <SwapArrow dir="right" size={15} color="#FFFFFF" />
          </button>

          <a href="#deliverables" className="bf-montarville-btn-secondary">
            <span className="bf-btn-dot-red" />
            <span>EXPLORE CAPABILITIES</span>
            <ArrowRight size={15} />
          </a>
        </div>
      </div>

      {/* MARQUEE TICKER STRIP */}
      <div className="bf-sajan-marquee-wrapper" aria-hidden="true">
        <div className="bf-sajan-marquee-track">
          {[...skillsList, ...skillsList].map((item, idx) => (
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
