"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { getStorageUrl } from "../utils/storageAsset";

// Sajan 4-point star SVG icon


// Eased number counter for brutalist metrics - re-triggers every time the section enters view
function AnimatedMetric({ target, rawString = null, prefix = "", suffix = "", delay = 0, isPrefixBlock = false }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.25 });

  useEffect(() => {
    if (!isInView || !target) {
      setVal(0);
      return;
    }

    let start = null;
    let animId = null;
    const duration = 1600;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setVal(Math.floor(eased * target));

      if (progress < 1) {
        animId = requestAnimationFrame(step);
      } else {
        setVal(target);
      }
    };

    const timer = setTimeout(() => {
      animId = requestAnimationFrame(step);
    }, delay * 1000);

    return () => {
      clearTimeout(timer);
      if (animId) cancelAnimationFrame(animId);
    };
  }, [isInView, target, delay]);

  if (rawString) {
    return (
      <span ref={ref} className="bf-outcomes-val-num">
        <span>{rawString}</span>
      </span>
    );
  }

  return (
    <span ref={ref} className="bf-outcomes-val-num">
      {isPrefixBlock && <span className="bf-outcomes-sub-prefix">{prefix}</span>}
      {!isPrefixBlock && prefix && <span className="bf-outcomes-prefix">{prefix}</span>}
      <span>{val}</span>
      {suffix && <sup className="bf-outcomes-sup">{suffix}</sup>}
    </span>
  );
}

const DEFAULT_OUTCOMES_DATA = [
  {
    id: "01",
    tag: "MOM ORGANIC GROWTH",
    targetNum: 340,
    prefix: "+",
    suffix: "%",
    isPrefixBlock: false,
    title: "ORGANIC REVENUE LIFT",
    desc: "Average L12M increase across client portfolio",
  },
  {
    id: "02",
    tag: "LIGHTHOUSE BENCHMARK",
    targetNum: 1,
    prefix: "#",
    suffix: "Rank",
    isPrefixBlock: false,
    title: "AI ANSWER CITATION",
    desc: "Top recommendation position on ChatGPT & Perplexity",
  },
  {
    id: "03",
    tag: "VERIFIED POSITION",
    targetNum: 200,
    prefix: "sub-",
    suffix: "ms",
    isPrefixBlock: true,
    title: "CORE WEB VITALS",
    desc: "100/100 Lighthouse performance benchmark",
  },
  {
    id: "04",
    tag: "AVERAGE OPEN RATE",
    targetNum: 10,
    prefix: "",
    suffix: "x",
    isPrefixBlock: false,
    title: "GEO SEARCH DOMINANCE",
    desc: "Faster indexing across AI LLM Knowledge Graphs",
  },
];

export default function SeoSajanOutcomes({ metrics = [], data }) {
  const [hoveredLogo, setHoveredLogo] = useState(null);

  const resolvedMetrics = useMemo(() => {
    const list = (metrics && metrics.length > 0) ? metrics : (data?.metrics || []);
    if (list.length > 0) {
      return list.slice(0, 4).map((m, idx) => {
        const valStr = String(m.value || "").trim();
        const match = valStr.match(/^([^\d]*)([\d,.]+)([^\d]*)$/);
        if (match && !valStr.includes("→") && !valStr.includes("/")) {
          const num = parseFloat(match[2].replace(/,/g, "")) || 0;
          return {
            id: `0${idx + 1}`,
            tag: (m.label || `METRIC 0${idx + 1}`).toUpperCase(),
            targetNum: num,
            prefix: match[1] || "",
            suffix: match[3] || "",
            isPrefixBlock: (match[1] || "").length > 2,
            rawString: null,
            title: (m.label || "VERIFIED LIFT").toUpperCase(),
            desc: m.desc || "Performance benchmark across client accounts",
          };
        }
        return {
          id: `0${idx + 1}`,
          tag: (m.label || `METRIC 0${idx + 1}`).toUpperCase(),
          targetNum: 0,
          prefix: "",
          suffix: "",
          isPrefixBlock: false,
          rawString: valStr,
          title: (m.label || "VERIFIED LIFT").toUpperCase(),
          desc: m.desc || "Performance benchmark across client accounts",
        };
      });
    }
    return DEFAULT_OUTCOMES_DATA;
  }, [metrics, data]);

  const clientWins = [
    {
      name: "Sonic Prints",
      logo: getStorageUrl("/client-sonicprints.png"),
      scale: 1.4,
      popupScale: 1.45,
      tag: "E-Commerce",
      line: "Automated custom merchandise & on-demand print ecommerce platform.",
    },
    {
      name: "ThoughtFlows",
      logo: getStorageUrl("/client-thoughtflows.png"),
      scale: 1.35,
      popupScale: 1.4,
      tag: "B2B SaaS",
      line: "Enterprise workflow automation & business process intelligence engine.",
    },
    {
      name: "Talentera",
      logo: getStorageUrl("/client-talentera.png"),
      scale: 1.0,
      popupScale: 1.25,
      tag: "HR Tech",
      line: "AI-driven executive recruitment & global talent acquisition network.",
    },
    {
      name: "ThoughtSpace",
      logo: getStorageUrl("/client-thoughtspace.png"),
      scale: 1.4,
      popupScale: 1.45,
      tag: "Enterprise",
      line: "Collaborative digital workspace & modern team productivity platform.",
    },
  ];

  return (
    <section className="bf-sajan-outcomes-root" aria-label="What it earned in numbers">
      <style>{`
        .bf-sajan-outcomes-root {
          position: relative;
          background: #000000;
          color: #FAFAFC;
          width: 100%;
          min-height: 90vh;
          padding: clamp(80px, 11vh, 140px) 4% clamp(70px, 9vh, 120px);
          overflow: hidden;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        /* SAJAN LUMINA CROSSHAIR PLUS-GRID BACKGROUND */
        .bf-outcomes-plus-grid {
          position: absolute;
          inset: 0;
          background-color: #FF1801;
          opacity: 0.12;
          --_plus-svg: url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect x='11.5' y='7' width='1' height='10' fill='white'/%3E%3Crect x='7' y='11.5' width='10' height='1' fill='white'/%3E%3C/svg%3E");
          -webkit-mask-image: var(--_plus-svg);
          mask-image: var(--_plus-svg);
          -webkit-mask-size: 28px 28px;
          mask-size: 28px 28px;
          -webkit-mask-repeat: repeat;
          mask-repeat: repeat;
          pointer-events: none;
          z-index: 0;
        }

        .bf-outcomes-container {
          position: relative;
          z-index: 1;
          max-width: 1360px;
          margin: 0 auto;
        }

        /* SECTION HEADER (EYEBROW + MASSIVE NEO-GROTESK HEADLINE) */
        .bf-outcomes-head {
          margin-bottom: clamp(38px, 5vw, 64px);
        }

        .bf-outcomes-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          font-size: 0.82rem;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #FF1801;
          margin-bottom: 16px;
        }

        .bf-outcomes-title {
          font-family: inherit;
          font-size: clamp(2.8rem, 7.4vw, 6.4rem);
          font-weight: 900;
          line-height: 0.92;
          letter-spacing: -0.045em;
          text-transform: uppercase;
          color: #FAFAFC;
          margin: 0;
          max-width: 15ch;
        }

        .bf-outcomes-title-accent {
          color: #FF1801;
        }

        /* BRUTALIST 4-COLUMN OUTCOMES BOX */
        .bf-outcomes-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: #0E0E14;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.7);
          border-radius: 0;
          overflow: hidden;
          margin-bottom: clamp(48px, 6vw, 72px);
        }

        .bf-outcomes-cell {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: clamp(300px, 30vw, 370px);
          padding: clamp(28px, 2.8vw, 44px);
          border-right: 1px solid rgba(255, 255, 255, 0.1);
          background: #0E0E14;
          transition: background 0.25s ease;
        }

        .bf-outcomes-cell:last-child {
          border-right: none;
        }

        .bf-outcomes-cell:hover {
          background: #14141C;
        }

        /* BIG NUMBERS & SUPERSCRIPTS */
        .bf-outcomes-val-wrap {
          margin-bottom: 24px;
        }

        .bf-outcomes-val-num {
          font-family: inherit;
          font-size: clamp(54px, 6.8vw, 120px);
          font-weight: 800;
          line-height: 0.86;
          letter-spacing: -0.055em;
          color: #FAFAFC;
          display: block;
        }

        .bf-outcomes-prefix {
          letter-spacing: -0.04em;
          color: #FAFAFC;
        }

        .bf-outcomes-sub-prefix {
          display: block;
          font-size: clamp(20px, 2.2vw, 36px);
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #FF1801;
          line-height: 1;
          margin-bottom: 4px;
          text-transform: uppercase;
        }

        .bf-outcomes-sup {
          font-size: 0.35em;
          vertical-align: top;
          margin-left: 4px;
          color: #FF1801;
          font-weight: 800;
          line-height: 1;
        }

        /* METRIC LABELS & DESCRIPTIONS */
        .bf-outcomes-label-block {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .bf-outcomes-micro-badge {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #FF1801;
          margin-bottom: 4px;
        }

        .bf-outcomes-cell-title {
          font-size: clamp(0.95rem, 1.2vw, 1.15rem);
          font-weight: 800;
          letter-spacing: -0.01em;
          text-transform: uppercase;
          color: #FAFAFC;
          margin: 0;
          line-height: 1.2;
        }

        .bf-outcomes-cell-desc {
          font-size: 0.85rem;
          line-height: 1.45;
          color: #94A3B8;
          font-weight: 500;
          margin: 0;
        }

        /* CLIENT LOGOS PROOF STREAM BELOW BRUTALIST GRID */
        .bf-outcomes-logos-wrap {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: clamp(28px, 3.5vw, 42px);
        }

        .bf-outcomes-logos-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 24px;
        }

        .bf-outcomes-logos-line {
          flex: 1;
          height: 1px;
          background: rgba(255, 255, 255, 0.08);
        }

        .bf-outcomes-logos-title {
          font-size: 0.74rem;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #94A3B8;
          white-space: nowrap;
        }

        .bf-outcomes-logos-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }

        .bf-outcomes-logo-card {
          position: relative;
          background: #111117;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
          border-radius: 0;
          padding: 16px 28px;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1;
          min-width: 170px;
          cursor: pointer;
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s ease;
        }

        .bf-outcomes-logo-card:hover {
          transform: translate(-3px, -3px);
          box-shadow: 0 8px 30px rgba(255, 24, 1, 0.25);
          border-color: #FF1801;
        }

        .bf-outcomes-logo-img {
          max-height: 38px;
          width: auto;
          object-fit: contain;
          filter: brightness(0) invert(1);
          opacity: 0.8;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), filter 0.2s ease, opacity 0.2s ease;
        }

        .bf-outcomes-logo-card:hover .bf-outcomes-logo-img {
          opacity: 1;
        }

        /* CLIENT HOVER COMPANY POPUP */
        .bf-outcomes-company-popup {
          position: absolute;
          bottom: calc(100% + 14px);
          left: 50%;
          transform: translateX(-50%);
          background: #0E0E14;
          border: 1px solid #FF1801;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(255, 24, 1, 0.2);
          padding: 16px 20px;
          border-radius: 12px;
          min-width: 250px;
          max-width: 320px;
          z-index: 30;
          pointer-events: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 10px;
          animation: bf-popup-spring 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .bf-outcomes-company-popup::after {
          content: "";
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          border-width: 7px 7px 0 7px;
          border-style: solid;
          border-color: #FF1801 transparent transparent transparent;
        }

        @keyframes bf-popup-spring {
          from {
            opacity: 0;
            transform: translate(-50%, 8px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0) scale(1);
          }
        }

        .bf-popup-logo-wrap {
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bf-popup-logo-img {
          max-height: 40px;
          width: auto;
          object-fit: contain;
          filter: brightness(0) invert(1) !important;
          opacity: 1 !important;
        }

        .bf-popup-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 8px;
          width: 100%;
        }

        .bf-popup-title {
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #FF1801;
          margin: 0;
        }

        .bf-popup-line {
          font-size: 0.82rem;
          line-height: 1.45;
          font-weight: 500;
          color: #CBD5E1;
          margin: 0;
        }

        /* RESPONSIVE LAYOUT */
        @media (max-width: 1100px) {
          .bf-outcomes-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .bf-outcomes-cell:nth-child(2) {
            border-right: none;
          }
          .bf-outcomes-cell:first-child,
          .bf-outcomes-cell:nth-child(2) {
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }
        }

        @media (max-width: 640px) {
          .bf-sajan-outcomes-root {
            padding: 70px 5% 60px;
          }
          .bf-outcomes-grid {
            grid-template-columns: 1fr;
          }
          .bf-outcomes-cell {
            border-right: none !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            min-height: auto;
            padding: 28px 22px;
          }
          .bf-outcomes-cell:last-child {
            border-bottom: none;
          }
          .bf-outcomes-logo-card {
            min-width: 140px;
            height: 60px;
            padding: 10px 18px;
          }
        }
      `}</style>

      {/* BACKGROUND PLUS-GRID */}
      <div className="bf-outcomes-plus-grid" aria-hidden="true" />

      <div className="bf-outcomes-container">
        {/* HEADER: EYEBROW & MASSIVE TITLE */}
        <motion.div
          className="bf-outcomes-head"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="bf-outcomes-title">
            WHAT IT EARNED,
            <br />
            IN <span className="bf-outcomes-title-accent">NUMBERS.</span>
          </h2>
        </motion.div>

        {/* 4-COLUMN BRUTALIST METRICS CONTAINER */}
        <div className="bf-outcomes-grid">
          {resolvedMetrics.map((item, idx) => (
            <motion.div
              key={item.id}
              className="bf-outcomes-cell"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              {/* TOP BIG NUMBER */}
              <div className="bf-outcomes-val-wrap">
                <AnimatedMetric
                  target={item.targetNum}
                  rawString={item.rawString}
                  prefix={item.prefix}
                  suffix={item.suffix}
                  delay={idx * 0.08}
                  isPrefixBlock={item.isPrefixBlock}
                />
              </div>

              {/* BOTTOM METRIC LABELS & SUBTITLE */}
              <div className="bf-outcomes-label-block">
                <span className="bf-outcomes-micro-badge">
                  {item.tag}
                </span>
                <h3 className="bf-outcomes-cell-title">{item.title}</h3>
                <p className="bf-outcomes-cell-desc">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CLIENT LOGOS PROOF STREAM */}
        <motion.div
          className="bf-outcomes-logos-wrap"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bf-outcomes-logos-header">
            <span className="bf-outcomes-logos-line" />
            <span className="bf-outcomes-logos-title">
              TRUSTED BY CATEGORY LEADERS & REGIONAL GIANTS
            </span>
            <span className="bf-outcomes-logos-line" />
          </div>

          <div className="bf-outcomes-logos-row">
            {clientWins.map((client, cIdx) => {
              const isHovered = hoveredLogo === cIdx;
              return (
                <div
                  key={client.name}
                  className="bf-outcomes-logo-card"
                  onMouseEnter={() => setHoveredLogo(cIdx)}
                  onMouseLeave={() => setHoveredLogo(null)}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    loading="lazy"
                    decoding="async"
                    className="bf-outcomes-logo-img"
                    style={{
                      transform: isHovered
                        ? `scale(${client.scale * 1.22})`
                        : `scale(${client.scale})`,
                    }}
                  />

                  {isHovered && (
                    <div className="bf-outcomes-company-popup">
                      <div className="bf-popup-logo-wrap">
                        <img
                          src={client.logo}
                          alt={client.name}
                    loading="lazy"
                    decoding="async"
                          className="bf-popup-logo-img"
                          style={{
                            transform: `scale(${client.popupScale || client.scale * 1.15})`,
                          }}
                        />
                      </div>
                      <div className="bf-popup-info">
                        <span className="bf-popup-title">
                          {client.name} • {client.tag}
                        </span>
                        <p className="bf-popup-line">{client.line}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
