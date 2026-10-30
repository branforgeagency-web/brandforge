"use client";

/* global window, document */

import React, { useRef, useState, useEffect, useLayoutEffect, useMemo, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof globalThis !== "undefined" && globalThis.window) {
  gsap.registerPlugin(ScrollTrigger);
}

const DIRECTIONS = ["up", "down", "left", "right"];
const getRandomDir = () =>
  DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];

const getOffset = (dir, dist = 110) => {
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

const SEO_GEO_FACES = [
  {
    word: "ORGANIC SERP.",
    rail: "ORGANIC SERP",
    num: "01",
    label: "Currently · Organic SERP Supremacy",
    copy: "<b>Organic SERP.</b> Dominate high-intent commercial searches with sub-200ms Core Web Vitals, semantic schema clustering, and high-trust editorial seed backlinks that permanently lock in #1 rankings.",
    tools: [
      "Google Search Console",
      "Ahrefs Elite",
      "Screaming Frog",
      "Schema Markup",
      "Core Web Vitals",
      "Semrush",
    ],
  },
  {
    word: "NEURAL GEO.",
    rail: "NEURAL GEO",
    num: "02",
    label: "Currently · Generative AI Answer Engines",
    copy: "<b>Neural GEO.</b> Ensure your business is synthesized as the primary recommended brand in ChatGPT, Perplexity, and Google Gemini vector embeddings with zero hallucination risk.",
    tools: [
      "Perplexity Pro",
      "ChatGPT-4o Vectors",
      "Google Gemini 1.5",
      "Claude 3.5 Sonnet",
      "Vector Embeddings",
      "LLM Benchmark",
    ],
  },
  {
    word: "ENTITY GRAPH.",
    rail: "ENTITY GRAPH",
    num: "03",
    label: "Currently · Knowledge Graph & Wikidata Authority",
    copy: "<b>Entity Graph.</b> Transform your brand from an unindexed website into an authoritative knowledge graph node. Deep JSON-LD nesting, Wikipedia entity linking, and verified Google topical clusters.",
    tools: [
      "JSON-LD Schema",
      "Wikidata Graph",
      "Google Knowledge Graph",
      "SameAs Entity Linking",
      "Topical Clusters",
    ],
  },
  {
    word: "LOCAL PROXIMITY.",
    rail: "LOCAL PROXIMITY",
    num: "04",
    label: "Currently · Google Maps 3-Pack & Regional Dominance",
    copy: "<b>Local Proximity.</b> Command high-value local intent across Coimbatore and regional hubs. Fully optimized Google Business Profiles, geotagged schema vectors, automated review velocity, and verified citation grids.",
    tools: [
      "Google Business Profile",
      "Local Maps 3-Pack",
      "Geotagged Schema",
      "NAP Consistency",
      "Review Velocity",
      "Regional Citations",
    ],
  },
];

export default function SeoSajanServicesDial({ data, onOpenModal: _onOpenModal }) {
  const dialFaces = useMemo(() => {
    if (data?.pillars && data.pillars.length >= 3) {
      return data.pillars.slice(0, 4).map((p, idx) => {
        const titleWords = p.title.replace(/—.*$/, "").trim().split(" ");
        const word = (p.tag || titleWords.slice(0, 2).join(" ")).toUpperCase() + ".";
        const rail = (p.tag || titleWords.slice(0, 2).join(" ")).toUpperCase();
        const tools = p.deliverables
          ? p.deliverables.slice(0, 6).map((d) => d.replace(/—.*$/, "").trim())
          : [];
        return {
          word,
          rail,
          num: `0${idx + 1}`,
          label: `Currently · ${p.title}`,
          copy: `<b>${p.title}.</b> ${p.description}`,
          tools: tools.length > 0 ? tools : ["Precision Architecture", "Dedicated Team", "Weekly Audits", "Data Tracking"],
        };
      });
    }
    return SEO_GEO_FACES;
  }, [data]);
  const containerRef = useRef(null);
  const shellRef = useRef(null);
  const pinRef = useRef(null);
  const contentRef = useRef(null);
  const dialwrapRef = useRef(null);
  const dialStripRef = useRef(null);
  const notchesRef = useRef(null);
  const headlineRef = useRef(null);
  const ledeRef = useRef(null);
  const indicatorRef = useRef(null);
  const zoneRefs = useRef([]);

  const [activeZone, setActiveZone] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const isTransitioningRef = useRef(false);
  const pendingZoneRef = useRef(null);
  const activeZoneRef = useRef(0);

  // Build the flat list of cells with 3 empty pads at start and end
  const dialCells = useMemo(() => {
    const cells = [];
    for (let i = 0; i < 3; i++) cells.push({ zoneIdx: 0, name: "", isPad: true });
    dialFaces.forEach((face, fIdx) => {
      face.tools.forEach((tool) => {
        cells.push({ zoneIdx: fIdx, name: tool, isPad: false });
      });
    });
    const lastZone = dialFaces.length - 1;
    for (let i = 0; i < 3; i++) cells.push({ zoneIdx: lastZone, name: "", isPad: true });
    return cells;
  }, [dialFaces]);

  const nonPadCount = useMemo(
    () => dialCells.filter((c) => !c.isPad).length,
    [dialCells]
  );

  // Check mobile on mount
  useEffect(() => {
    const checkMob = () => {
      setIsMobile(
        window.matchMedia("(pointer: coarse), (max-width: 820px)").matches
      );
    };
    checkMob();
    window.addEventListener("resize", checkMob);
    return () => window.removeEventListener("resize", checkMob);
  }, []);

  // Animate headline letters in/out
  const renderHeadline = useCallback((text, container) => {
    if (!container) return [];
    container.innerHTML = "";
    const letters = [];
    const words = text.split(" ");

    words.forEach((w, wIdx) => {
      const wordWrap = document.createElement("span");
      wordWrap.className = "bf-dial-word-wrap";

      [...w].forEach((char) => {
        const mask = document.createElement("span");
        mask.className = "bf-dial-letter-mask";
        const inner = document.createElement("span");
        inner.className =
          char === "."
            ? "bf-dial-letter-inner bf-dial-accent"
            : "bf-dial-letter-inner";
        inner.textContent = char;
        mask.appendChild(inner);
        wordWrap.appendChild(mask);
        letters.push(inner);
      });

      container.appendChild(wordWrap);

      if (wIdx < words.length - 1) {
        const space = document.createElement("span");
        space.className = "bf-dial-word-space";
        space.innerHTML = "&nbsp;";
        container.appendChild(space);
      }
    });

    return letters;
  }, []);

  // Update active zone UI and text
  const switchZone = useCallback(
    (nextZone) => {
      if (activeZoneRef.current === nextZone && headlineRef.current?.hasChildNodes()) {
        return;
      }

      if (isTransitioningRef.current) {
        pendingZoneRef.current = nextZone;
        return;
      }

      isTransitioningRef.current = true;
      activeZoneRef.current = nextZone;
      setActiveZone(nextZone);

      // Slide bottom indicator pill
      if (indicatorRef.current) {
        indicatorRef.current.style.transform = `translateX(${100 * nextZone}%)`;
      }
      zoneRefs.current.forEach((zEl, idx) => {
        if (zEl) zEl.classList.toggle("is-active", idx === nextZone);
      });

      const nextFace = dialFaces[nextZone];
      const headEl = headlineRef.current;
      const ledeEl = ledeRef.current;
      if (!headEl || !ledeEl) {
        isTransitioningRef.current = false;
        return;
      }

      // Outgoing letters blast out in random directions
      const currLetters = [...headEl.querySelectorAll(".bf-dial-letter-inner")];
      const outDuration = currLetters.length ? (currLetters.length - 1) * 0.02 + 0.25 : 0;

      currLetters.forEach((el, idx) => {
        const dir = getRandomDir();
        const off = getOffset(dir, 110);
        gsap.to(el, {
          x: `${off.x}%`,
          y: `${off.y}%`,
          duration: 0.24,
          delay: idx * 0.02,
          ease: "power2.in",
        });
      });

      // Outgoing copy lifts up
      gsap.to(ledeEl, {
        y: -24,
        opacity: 0,
        duration: 0.28,
        ease: "power2.in",
      });

      // Enter new content
      gsap.delayedCall(Math.max(0.18, outDuration * 0.6), () => {
        const inLetters = renderHeadline(nextFace.word, headEl);

        inLetters.forEach((el, idx) => {
          const dir = getRandomDir();
          const off = getOffset(dir, 110);
          gsap.set(el, { x: `${off.x}%`, y: `${off.y}%` });
          gsap.to(el, {
            x: "0%",
            y: "0%",
            duration: 0.42,
            delay: idx * 0.035,
            ease: "power2.out",
          });
        });

        ledeEl.innerHTML = nextFace.copy;
        gsap.fromTo(
          ledeEl,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.45, ease: "power2.out" }
        );

        const totalInTime = inLetters.length ? (inLetters.length - 1) * 0.035 + 0.45 : 0.45;
        gsap.delayedCall(totalInTime, () => {
          isTransitioningRef.current = false;
          if (pendingZoneRef.current !== null && pendingZoneRef.current !== activeZoneRef.current) {
            const next = pendingZoneRef.current;
            pendingZoneRef.current = null;
            switchZone(next);
          }
        });
      });
    },
    [renderHeadline, dialFaces]
  );

  // GSAP ScrollTrigger Pinned Dial setup
  useLayoutEffect(() => {
    if (isMobile) return;
    const triggerEl = containerRef.current;
    const pinEl = pinRef.current;
    const stripEl = dialStripRef.current;
    const notchesEl = notchesRef.current;
    const dialwrap = dialwrapRef.current;
    if (!triggerEl || !pinEl || !stripEl || !notchesEl || !dialwrap) return;

    // Build DOM elements for dialStrip and notches
    stripEl.innerHTML = "";
    notchesEl.innerHTML = "";

    const toolEls = [];
    const barEls = [];

    dialCells.forEach((cell, idx) => {
      const cellEl = document.createElement("div");
      cellEl.className = "bf-dial-cell";

      if (cell.isPad) {
        toolEls.push(null);
        barEls.push(null);
      } else {
        const toolSpan = document.createElement("span");
        toolSpan.className = "bf-dial-tool-text";
        toolSpan.textContent = cell.name;
        cellEl.appendChild(toolSpan);
        toolEls.push(toolSpan);

        const barSpan = document.createElement("span");
        barSpan.className = "bf-dial-bar";
        cellEl.appendChild(barSpan);
        barEls.push(barSpan);
      }
      stripEl.appendChild(cellEl);

      const notchEl = document.createElement("div");
      notchEl.className = "bf-dial-notch";
      const prev = dialCells[idx - 1];
      if (!cell.isPad && (!prev || prev.isPad || prev.zoneIdx !== cell.zoneIdx)) {
        notchEl.classList.add("is-major");
      }
      notchesEl.appendChild(notchEl);
    });

    let halfWidth = dialwrap.getBoundingClientRect().width / 2;
    let dialHeight = dialwrap.getBoundingClientRect().height || 180;

    const onResize = () => {
      halfWidth = dialwrap.getBoundingClientRect().width / 2;
      dialHeight = dialwrap.getBoundingClientRect().height || 180;
    };
    window.addEventListener("resize", onResize);

    // Initial render for zone 0
    switchZone(0);

    const updatePhysics = (progress) => {
      // Allocate 0.00 to 0.82 for smooth full tuning through all 4 zones
      const dialProgress = Math.min(1, progress / 0.82);
      const t = dialProgress * Math.max(0, nonPadCount - 1) + 3;
      const xPos = halfWidth - (t + 0.5) * 220;

      gsap.set([stripEl, notchesEl], { x: xPos });

      for (let idx = 0; idx < dialCells.length; idx++) {
        const toolEl = toolEls[idx];
        if (!toolEl) continue;

        const dist = Math.max(0, 1 - Math.abs(idx - t) / 2.3);
        const curve = dist * dist * (3 - 2 * dist); // smoothstep
        const barScale = 0.05 + 0.95 * curve;

        const barEl = barEls[idx];
        if (barEl) {
          barEl.style.transform = `scaleY(${barScale})`;
          barEl.style.opacity = `${0.22 + 0.78 * curve}`;
        }

        toolEl.style.opacity = `${0.3 + 0.7 * dist}`;
        const transY = Math.round(-(0.42 * dialHeight * barScale + 14));
        const scaleVal = 0.9 + 0.38 * curve;
        toolEl.style.transform = `translateY(${transY}px) scale(${scaleVal})`;
        toolEl.style.fontWeight = Math.round(400 + 350 * curve);
      }

      // Detect active cell
      const centerIdx = Math.min(
        dialCells.length - 4,
        Math.max(3, Math.round(t))
      );
      const centerCell = dialCells[centerIdx];
      if (centerCell && !centerCell.isPad) {
        if (centerCell.zoneIdx !== activeZoneRef.current) {
          switchZone(centerCell.zoneIdx);
        }
      }

      // Smooth exit transition into next section (progress 0.86 to 1.0)
      // Zone 4 remains settled between 0.82 and 0.86 for comfortable reading
      // Then the stage gracefully dissolves and elevates upward
      const exitProgress = Math.max(0, Math.min(1, (progress - 0.86) / 0.14));
      if (contentRef.current) {
        const exitOpacity = 1 - exitProgress;
        const exitY = -Math.round(exitProgress * 44);
        const exitScale = 1 - exitProgress * 0.03;
        contentRef.current.style.opacity = exitOpacity.toFixed(3);
        contentRef.current.style.transform = `translate3d(0, ${exitY}px, 0) scale(${exitScale.toFixed(3)})`;
        contentRef.current.style.pointerEvents = exitProgress > 0.85 ? "none" : "auto";
      }
    };

    updatePhysics(0);

    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: triggerEl,
        start: "top top",
        end: () => `+=${Math.round(window.innerHeight * 5.2)}`,
        pin: pinEl,
        pinSpacing: true,
        scrub: 0.8,
        anticipatePin: 1,
        onUpdate: (self) => updatePhysics(self.progress),
        onRefresh: (self) => {
          onResize();
          updatePhysics(self ? self.progress : 0);
        },
      });
    }, containerRef.current);

    ScrollTrigger.refresh();

    return () => {
      if (ctx) ctx.revert();
      window.removeEventListener("resize", onResize);
    };
  }, [dialCells, isMobile, nonPadCount, switchZone]);

  return (
    <section ref={containerRef} className="bf-sajan-dial-root" id="services">
      <style>{`
        .bf-sajan-dial-root {
          position: relative;
          width: 100%;
          background: #000000;
          color: #FAFAFC;
        }

        .bf-dial-shell {
          width: 100%;
        }

        .bf-dial-pin-container {
          min-height: 100vh;
          height: 100vh;
          position: relative;
          overflow: hidden;
          background: #000000;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: none;
        }

        .bf-dial-inner-stage {
          width: 100%;
          height: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: clamp(60px, 8vw, 90px) 5% clamp(40px, 6vw, 60px);
          position: relative;
          will-change: transform, opacity;
        }

        /* Top Meta Row */
        .bf-dial-top {
          position: relative;
          z-index: 2;
          max-width: 1360px;
          margin-bottom: 32px;
        }
        .bf-dial-metalabel {
          display: block;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #8E8E93;
          margin-bottom: clamp(18px, 2.5vw, 28px);
        }

        .bf-dial-heading-row {
          display: grid;
          grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr);
          gap: clamp(24px, 4vw, 56px);
          align-items: baseline;
        }
        @media (max-width: 900px) {
          .bf-dial-heading-row {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }

        .bf-dial-word {
          font-size: clamp(2rem, 4.6vw, 4.6rem);
          font-weight: 900;
          line-height: 1.02;
          letter-spacing: -0.04em;
          text-transform: uppercase;
          margin: 0;
          user-select: none;
          word-break: keep-all;
          overflow-wrap: normal;
        }
        .bf-dial-word-wrap {
          display: inline-block;
          white-space: nowrap;
        }
        .bf-dial-word-space {
          display: inline-block;
        }
        .bf-dial-letter-mask {
          display: inline-block;
          overflow: hidden;
          vertical-align: bottom;
        }
        .bf-dial-letter-inner {
          display: inline-block;
          will-change: transform;
        }
        .bf-dial-accent {
          color: #FF1801;
        }

        .bf-dial-lede {
          font-size: clamp(1.05rem, 1.6vw, 1.35rem);
          line-height: 1.6;
          color: #94A3B8;
          margin: 0;
          font-weight: 400;
        }
        .bf-dial-lede b {
          color: #FFFFFF;
          font-weight: 700;
        }

        /* Center Horizontal Tuner & Notches */
        .bf-dial-wrap {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 240px;
          margin: clamp(24px, 4vw, 44px) 0;
          overflow: hidden;
          display: flex;
          align-items: center;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.015);
        }

        .bf-dial-rule-top,
        .bf-dial-rule-bot {
          position: absolute;
          left: 0;
          right: 0;
          height: 1px;
          background: rgba(255, 255, 255, 0.08);
          pointer-events: none;
        }
        .bf-dial-rule-top { top: 12px; }
        .bf-dial-rule-bot { bottom: 12px; }

        .bf-dial-strip {
          display: flex;
          align-items: flex-end;
          position: absolute;
          bottom: 30px;
          left: 0;
          height: 160px;
          will-change: transform;
        }
        .bf-dial-cell {
          width: 220px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          position: relative;
          height: 100%;
        }
        .bf-dial-tool-text {
          font-size: 0.88rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #FAFAFC;
          white-space: nowrap;
          transform-origin: center bottom;
          will-change: transform, opacity;
          pointer-events: none;
          margin-bottom: 8px;
        }
        .bf-dial-bar {
          width: 2px;
          height: 70px;
          background: #FF1801;
          box-shadow: 0 0 10px rgba(255, 24, 1, 0.5);
          transform-origin: bottom center;
          will-change: transform, opacity;
        }

        .bf-dial-notches {
          position: absolute;
          bottom: 12px;
          left: 0;
          display: flex;
          will-change: transform;
          pointer-events: none;
        }
        .bf-dial-notch {
          width: 220px;
          flex-shrink: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }
        .bf-dial-notch::after {
          content: "";
          display: block;
          width: 1px;
          height: 8px;
          background: rgba(255, 255, 255, 0.25);
        }
        .bf-dial-notch.is-major::after {
          height: 18px;
          width: 2px;
          background: #FF1801;
          box-shadow: 0 0 8px #FF1801;
        }

        /* Fixed Center Reticle Needle */
        .bf-dial-needle {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          background: #FF1801;
          box-shadow: 0 0 16px rgba(255, 24, 1, 0.85);
          pointer-events: none;
          z-index: 10;
        }
        .bf-needle-star-top,
        .bf-needle-star-bot {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 18px;
          height: 18px;
          color: #FF1801;
        }
        .bf-needle-star-top { top: 4px; }
        .bf-needle-star-bot { bottom: 4px; }

        /* Bottom Zones Bar */
        .bf-dial-zones-container {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1360px;
        }
        .bf-dial-zones-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          position: relative;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
        }
        .bf-dial-indicator-bar {
          position: absolute;
          top: -1px;
          left: 0;
          height: 2px;
          background: #FF1801;
          box-shadow: 0 0 12px #FF1801;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          width: 25%;
        }
        .bf-dial-zone-btn {
          background: transparent;
          border: none;
          color: #94A3B8;
          padding: 20px 12px;
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.25s ease;
          text-align: left;
        }
        .bf-dial-zone-btn.is-active {
          color: #FFFFFF;
        }
        .bf-dial-zone-num {
          font-size: 0.72rem;
          color: #FF1801;
          opacity: 0.8;
        }

        /* Mobile Stacked Card View */
        .bf-dial-mobile-stack {
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding: 40px 16px;
        }
        .bf-dial-mobile-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 24px 20px;
        }
        .bf-dial-mobile-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }
        .bf-dial-mobile-num {
          font-size: 0.76rem;
          font-weight: 700;
          color: #FF1801;
        }
        .bf-dial-mobile-title {
          font-size: 1.6rem;
          font-weight: 800;
          text-transform: uppercase;
          margin: 0 0 12px;
          color: #FAFAFC;
        }
        .bf-dial-mobile-copy {
          font-size: 0.95rem;
          line-height: 1.55;
          color: #94A3B8;
          margin: 0 0 18px;
        }
        .bf-dial-mobile-copy b { color: #FFFFFF; }
        .bf-dial-mobile-tools {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .bf-dial-mobile-tool {
          font-size: 0.76rem;
          padding: 4px 10px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.85);
        }
      `}</style>

      {/* MOBILE STACKED VIEW */}
      {isMobile ? (
        <div className="bf-dial-mobile-stack">
          <p className="bf-dial-metalabel">Core Capabilities</p>

          {dialFaces.map((face, idx) => (
            <div key={idx} className="bf-dial-mobile-card">
              <div className="bf-dial-mobile-top">
                <span className="bf-dial-mobile-num">{face.num}</span>
                <span style={{ fontSize: "0.75rem", color: "#94A3B8" }}>
                  {face.rail}
                </span>
              </div>
              <h3 className="bf-dial-mobile-title">{face.word}</h3>
              <p
                className="bf-dial-mobile-copy"
                dangerouslySetInnerHTML={{ __html: face.copy }}
              />
              <div className="bf-dial-mobile-tools">
                {face.tools.map((t, tIdx) => (
                  <span key={tIdx} className="bf-dial-mobile-tool">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* DESKTOP PINNED ANALOG FREQUENCY DIAL */
        <div ref={shellRef} className="bf-dial-shell">
          <div ref={pinRef} className="bf-dial-pin-container">
            <div ref={contentRef} className="bf-dial-inner-stage">
              {/* TOP ROW: HEADLINE & CURRENT LEDE */}
              <div className="bf-dial-top">
                <p className="bf-dial-metalabel">Core Capabilities</p>

                <div className="bf-dial-heading-row">
                  <h2 ref={headlineRef} className="bf-dial-word" />
                  <p ref={ledeRef} className="bf-dial-lede" />
                </div>
              </div>

              {/* CENTER HORIZONTAL FREQUENCY TUNER GAUGE */}
              <div ref={dialwrapRef} className="bf-dial-wrap">
                <span className="bf-dial-rule-top" aria-hidden="true" />
                <span className="bf-dial-rule-bot" aria-hidden="true" />

                <div ref={dialStripRef} className="bf-dial-strip" />
                <div ref={notchesRef} className="bf-dial-notches" aria-hidden="true" />

                {/* CENTER FIXED RETICLE NEEDLE */}
                <div className="bf-dial-needle" aria-hidden="true">
                  <svg
                    className="bf-needle-star-top"
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
                  <svg
                    className="bf-needle-star-bot"
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
              </div>

              {/* BOTTOM ZONES SEGMENT SELECTOR */}
              <div className="bf-dial-zones-container">
                <div className="bf-dial-zones-grid">
                  <div ref={indicatorRef} className="bf-dial-indicator-bar" />
                  {dialFaces.map((face, idx) => (
                    <button
                      key={idx}
                      type="button"
                      ref={(el) => (zoneRefs.current[idx] = el)}
                      className={`bf-dial-zone-btn ${
                        activeZone === idx ? "is-active" : ""
                      }`}
                      onClick={() => switchZone(idx)}
                    >
                      <span className="bf-dial-zone-num">{face.num}</span>
                      <span>{face.rail}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
