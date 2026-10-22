"use client";

import React, { useState, useRef, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { servicesData, serviceUrl } from "../data/servicesData";

// Sajan Star SVG Icon


const ALL_RELATED_SERVICES = [
  { key: "seo-geo", role: "Organic SEO & AI Citations", floatDuration: 5.2 },
  { key: "paid-media", role: "Paid Media Acquisition", floatDuration: 4.5 },
  { key: "web-foundry", role: "Web Performance & Vitals", floatDuration: 5.8 },
  { key: "content-smithy", role: "Content Marketing & Authority", floatDuration: 4.8 },
  { key: "viral-social", role: "Viral Social & Video", floatDuration: 5.0 },
  { key: "inbox-edge", role: "Email Systems & Retention", floatDuration: 4.6 },
  { key: "cro-revenue", role: "Conversion Rate Optimization", floatDuration: 6.2 },
  { key: "brand-anvil", role: "Strategic Brand Positioning", floatDuration: 5.5 },
];

export default function SeoMontarvilleRelatedServices({
  currentSlug: _currentSlug = "seo-geo",
  navigate,
}) {
  const sectionRef = useRef(null);
  const [activeHoverId, setActiveHoverId] = useState(null);

  // Scroll Parallax Scrub on Red & Black Gradient Background Layers
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const parallaxBgY = useTransform(scrollYProgress, [0, 1], [-160, 160]);
  const parallaxBgScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.25, 0.98]);
  const parallaxBgRotate = useTransform(scrollYProgress, [0, 1], [-12, 18]);
  const parallaxSecondaryY = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const parallaxWatermarkY = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  const cleanSlug = (_currentSlug || "").replace(/^\/services\//, "").replace(/^\//, "");
  const currentKey = servicesData[cleanSlug]?.slug || cleanSlug || "seo-geo";

  const relatedKeys = useMemo(() => {
    const offsets = [
      { x: "-2%", y: "0px", rotate: "-1deg" },
      { x: "4%", y: "30px", rotate: "1.5deg" },
      { x: "-1%", y: "-15px", rotate: "1deg" },
      { x: "3%", y: "20px", rotate: "-1.5deg" },
    ];
    return ALL_RELATED_SERVICES
      .filter((s) => s.key !== currentKey)
      .slice(0, 4)
      .map((s, idx) => ({
        ...s,
        num: `0${idx + 1}`,
        customOffset: offsets[idx % offsets.length],
      }));
  }, [currentKey]);

  // Dynamic random permutation offsets when user clicks "Reshuffle Constellation"
  const randomOffsets = [
    [
      { x: "-3%", y: "-10px", rotate: "-2deg" },
      { x: "5%", y: "40px", rotate: "2deg" },
      { x: "2%", y: "15px", rotate: "-1deg" },
      { x: "-4%", y: "-20px", rotate: "1.5deg" },
    ],
    [
      { x: "4%", y: "25px", rotate: "1.5deg" },
      { x: "-2%", y: "-15px", rotate: "-2deg" },
      { x: "-5%", y: "30px", rotate: "2deg" },
      { x: "3%", y: "-25px", rotate: "-1deg" },
    ],
    [
      { x: "-1%", y: "10px", rotate: "-1deg" },
      { x: "2%", y: "-20px", rotate: "1deg" },
      { x: "4%", y: "35px", rotate: "-2deg" },
      { x: "-3%", y: "15px", rotate: "2deg" },
    ],
  ];

  const currentPermutation = randomOffsets[0];

  return (
    <section className="smr-constellation-root" id="synergistic-capabilities" ref={sectionRef}>
      <style>{constellationStyles}</style>

      {/* Multi-Layered Red & Black Parallax Gradient Background */}
      <div className="smr-parallax-viewport" aria-hidden="true">
        {/* Deep Primary Red & Black Nebula Gradient Orb (Moves & Scales on Scroll) */}
        <motion.div
          style={{
            y: parallaxBgY,
            scale: parallaxBgScale,
            rotate: parallaxBgRotate,
          }}
          className="smr-parallax-gradient-primary"
        />

        {/* Counter-Drifting Secondary Red Flare */}
        <motion.div
          style={{
            y: parallaxSecondaryY,
          }}
          className="smr-parallax-gradient-secondary"
        />

        {/* Dark Vignette Overlay for Crisp Contrast */}
        <div className="smr-parallax-vignette" />
      </div>

      {/* Montarville Signature Intersecting Circle Line-Art Watermark with Parallax Float */}
      <motion.div
        style={{ y: parallaxWatermarkY }}
        className="smr-watermark-wrap"
        aria-hidden="true"
      >
        <svg
          width="768"
          height="610"
          viewBox="0 0 768 610"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="384" cy="417.5" r="191.5" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1.2" />
          <circle cx="384" cy="192" r="191.5" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1.2" />
          <circle cx="192" cy="304.7" r="191.5" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1.2" />
          <circle cx="576" cy="304.7" r="191.5" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1.2" />
        </svg>
      </motion.div>

      <div className="smr-container">
        {/* Header with Montarville Red Surtitle & Reshuffle Trigger */}
        <div className="smr-header">

          <h2 className="smr-title">
            Synergistic <span className="title-red">Growth Capabilities</span>
          </h2>

          <p className="smr-subtitle">
            SEO & GEO deliver peak organic ROI when reinforced by precision paid acquisition, sub-200ms Jamstack engineering, and high-conversion landing pages.
          </p>
        </div>

        {/* Creative Random Organic Constellation Cluster (ZERO CARDS, ZERO BORDERS) */}
        <div className="smr-constellation-field">
          {/* Subtle Dynamic Neural Connecting Lines SVG */}
          <svg className="smr-connecting-svg" aria-hidden="true">
            <line x1="20%" y1="20%" x2="75%" y2="28%" stroke="rgba(255, 255, 255, 0.06)" strokeDasharray="4 6" />
            <line x1="75%" y1="28%" x2="80%" y2="72%" stroke="rgba(255, 255, 255, 0.06)" strokeDasharray="4 6" />
            <line x1="80%" y1="72%" x2="25%" y2="65%" stroke="rgba(255, 255, 255, 0.06)" strokeDasharray="4 6" />
            <line x1="25%" y1="65%" x2="20%" y2="20%" stroke="rgba(239, 65, 54, 0.12)" strokeDasharray="2 4" />
          </svg>

          {relatedKeys.map((item, idx) => {
            const srv = servicesData[item.key];
            if (!srv) return null;

            const isHovered = activeHoverId === item.key;
            const targetOffset = currentPermutation[idx];
            const cleanDesc = Array.isArray(srv.subtitle) ? srv.subtitle[0] : srv.subtitle;

            return (
              <motion.div
                key={item.key}
                layout
                animate={{
                  x: targetOffset.x,
                  y: [0, idx % 2 === 0 ? -10 : 10, 0],
                  rotate: targetOffset.rotate,
                }}
                transition={{
                  layout: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
                  y: {
                    duration: item.floatDuration,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  },
                }}
                className={`smr-node-cluster node-pos-${idx + 1} ${isHovered ? "is-hovered" : ""}`}
                onMouseEnter={() => setActiveHoverId(item.key)}
                onMouseLeave={() => setActiveHoverId(null)}
              >
                {/* Floating Node Anchor Link */}
                <a
                  href={serviceUrl(item.key)}
                  className="smr-node-link"
                  onClick={(e) => {
                    if (!e.ctrlKey && !e.metaKey && navigate) {
                      e.preventDefault();
                      navigate(serviceUrl(item.key));
                      if (typeof globalThis !== "undefined" && globalThis.scrollTo) {
                        globalThis.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }
                  }}
                >
                  {/* Glowing Ambient Radial Aura on Hover */}
                  <div className="smr-node-aura" aria-hidden="true" />

                  {/* Node Header Row: Big Floating Index & Telemetry Pill */}
                  <div className="smr-node-meta">
                    <span className="smr-node-role">{item.role}</span>
                  </div>

                  {/* Big Architectural Title (Zero Cards) */}
                  <h3 className="smr-node-title">
                    {srv.title}
                  </h3>

                  {/* Fluid Prose with Line Indent */}
                  <p className="smr-node-desc">
                    {cleanDesc}
                  </p>

                  {/* Interactive Action Vector */}
                  <div className="smr-node-action">
                    <span className="action-text">EXPLORE PROTOCOL</span>
                    <div className="action-arrow-circle">
                      <ArrowUpRight size={15} className="action-arrow-glyph" />
                    </div>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const constellationStyles = `
  /* Constellation Section Foundation with Red & Black Parallax Gradient */
  .smr-constellation-root {
    position: relative;
    background: #000000;
    color: #FAFAFC;
    padding: clamp(80px, 9vw, 130px) 0 clamp(80px, 9vw, 120px);
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    overflow: hidden;
  }

  /* Parallax Viewport & Multi-Layered Red/Black Gradients */
  .smr-parallax-viewport {
    position: absolute;
    inset: -30% -20%;
    pointer-events: none;
    z-index: 0;
    overflow: hidden;
  }

  .smr-parallax-gradient-primary {
    position: absolute;
    top: 10%;
    left: 20%;
    width: 1200px;
    height: 900px;
    border-radius: 50%;
    background: radial-gradient(
      ellipse at 50% 50%,
      rgba(239, 65, 54, 0.28) 0%,
      rgba(210, 4, 45, 0.16) 35%,
      rgba(15, 2, 4, 0.8) 65%,
      transparent 80%
    );
    filter: blur(60px);
    will-change: transform;
  }

  .smr-parallax-gradient-secondary {
    position: absolute;
    bottom: 15%;
    right: 15%;
    width: 900px;
    height: 700px;
    border-radius: 50%;
    background: radial-gradient(
      circle at 60% 60%,
      rgba(239, 65, 54, 0.22) 0%,
      rgba(180, 0, 30, 0.12) 40%,
      transparent 70%
    );
    filter: blur(70px);
    will-change: transform;
  }

  .smr-parallax-vignette {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(9, 9, 12, 0.2) 40%,
      rgba(9, 9, 12, 0.3) 70%,
      rgba(0, 0, 0, 0.8) 100%
    );
  }

  /* Watermark */
  .smr-watermark-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 1;
    opacity: 0.55;
    will-change: transform;
  }

  .smr-container {
    position: relative;
    z-index: 2;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 clamp(20px, 4vw, 40px);
  }

  /* Header */
  .smr-header {
    text-align: center;
    max-width: 860px;
    margin: 0 auto clamp(40px, 5vw, 68px);
  }

  .smr-metalabel {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.72rem;
    font-weight: 800;
    color: #FAFAFC;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  .smr-star {
    color: #EF4136;
    animation: smrSpin 14s linear infinite;
  }

  @keyframes smrSpin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .smr-title {
    font-family: "General Sans", "Outfit", -apple-system, sans-serif;
    font-size: clamp(34px, 4.6vw, 60px);
    font-weight: 700;
    line-height: 1.12;
    letter-spacing: -0.035em;
    color: #FAFAFC;
    margin: 0 0 16px 0;
  }

  .title-red {
    color: #EF4136;
  }

  .smr-subtitle {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: clamp(15.5px, 1.2vw, 18px);
    line-height: 1.68;
    color: rgba(255, 255, 255, 0.68);
    margin: 0 auto;
  }

  /* Organic Constellation Field (ZERO CARDS, ZERO BORDERS) */
  .smr-constellation-field {
    position: relative;
    width: 100%;
    min-height: 640px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto auto;
    row-gap: 56px;
    column-gap: 32px;
    padding: 20px 0;
  }

  .smr-connecting-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  }

  /* Asymmetric Random Node Placements */
  .smr-node-cluster {
    position: relative;
    z-index: 2;
    background: transparent;
    border: none;
    padding: 0;
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .node-pos-1 {
    grid-column: 1 / span 6;
    align-self: start;
    padding-right: 24px;
  }

  .node-pos-2 {
    grid-column: 7 / span 6;
    align-self: start;
    margin-top: 40px;
    padding-left: 20px;
  }

  .node-pos-3 {
    grid-column: 2 / span 5;
    align-self: end;
    margin-top: 20px;
  }

  .node-pos-4 {
    grid-column: 7 / span 6;
    align-self: end;
    margin-top: -10px;
    padding-left: 36px;
  }

  /* Floating Link Wrapper */
  .smr-node-link {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: inherit;
    position: relative;
    background: transparent;
    border: none;
  }

  /* Ambient Hover Aura (No hard card borders) */
  .smr-node-aura {
    position: absolute;
    inset: -24px;
    border-radius: 24px;
    background: radial-gradient(
      ellipse at 30% 30%,
      rgba(239, 65, 54, 0.16) 0%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
    z-index: -1;
  }

  .smr-node-cluster.is-hovered .smr-node-aura {
    opacity: 1;
  }

  /* Node Meta Row */
  .smr-node-meta {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 14px;
  }

  .smr-node-index {
    font-family: "JetBrains Mono", monospace;
    font-size: 1.15rem;
    font-weight: 800;
    color: #EF4136;
    letter-spacing: -0.02em;
    line-height: 1;
  }

  .smr-node-role {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    color: rgba(255, 255, 255, 0.45);
    text-transform: uppercase;
  }

  .smr-node-metric-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.68rem;
    font-weight: 700;
    color: #EF4136;
    background: rgba(239, 65, 54, 0.1);
    border: 1px solid rgba(239, 65, 54, 0.28);
    padding: 3px 8px;
    border-radius: 999px;
    margin-left: auto;
  }

  .pill-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #EF4136;
    box-shadow: 0 0 6px #EF4136;
  }

  /* Node Title (Large Typographic Statement, Zero Card Frames) */
  .smr-node-title {
    font-family: "General Sans", "Outfit", sans-serif;
    font-size: clamp(22px, 2.2vw, 32px);
    font-weight: 700;
    line-height: 1.22;
    letter-spacing: -0.025em;
    color: #FAFAFC;
    margin: 0 0 12px 0;
    transition: color 0.25s ease;
  }

  .smr-node-cluster:hover .smr-node-title {
    color: #EF4136;
  }

  /* Node Description */
  .smr-node-desc {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 0.94rem;
    line-height: 1.68;
    color: rgba(255, 255, 255, 0.65);
    margin: 0 0 18px 0;
    border-left: 2px solid rgba(255, 255, 255, 0.12);
    padding-left: 14px;
    transition: border-left-color 0.25s ease, color 0.25s ease;
  }

  .smr-node-cluster:hover .smr-node-desc {
    border-left-color: #EF4136;
    color: rgba(255, 255, 255, 0.85);
  }

  /* Interactive Action Link */
  .smr-node-action {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    color: #FAFAFC;
    transition: all 0.25s ease;
  }

  .action-arrow-circle {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.25s ease;
  }

  .action-arrow-glyph {
    color: rgba(255, 255, 255, 0.7);
    transition: all 0.25s ease;
  }

  .smr-node-cluster:hover .smr-node-action {
    color: #EF4136;
  }

  .smr-node-cluster:hover .action-arrow-circle {
    background: #EF4136;
    border-color: #EF4136;
    transform: translate(2px, -2px);
  }

  .smr-node-cluster:hover .action-arrow-glyph {
    color: #FAFAFC;
    transform: translate(1px, -1px);
  }

  /* Responsive Rules */
  @media (max-width: 900px) {
    .smr-constellation-field {
      display: flex;
      flex-direction: column;
      gap: 48px;
      min-height: auto;
    }

    .smr-connecting-svg {
      display: none;
    }

    .node-pos-1,
    .node-pos-2,
    .node-pos-3,
    .node-pos-4 {
      grid-column: auto;
      margin: 0 !important;
      padding: 0 !important;
    }
  }
`;
