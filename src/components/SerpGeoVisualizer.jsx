"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function SerpGeoVisualizer() {
  const containerRef = useRef(null);

  // Montarville Parallax scrub on the architectural visual
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [-25, 25]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.0]);

  return (
    <section className="montarville-visualizer-root" id="serp-geo-visualizer" ref={containerRef}>
      <style>{visualizerStyles}</style>

      {/* Montarville Intersecting Circles SVG Watermark */}
      <div className="montarville-watermark-ctn" aria-hidden="true">
        <svg
          className="montarville-watermark-svg"
          width="768"
          height="610"
          viewBox="0 0 768 610"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="384" cy="417.524" r="191.5" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1.2" />
          <circle cx="384" cy="192" r="191.5" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1.2" />
          <circle cx="192" cy="304.762" r="191.5" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1.2" />
          <circle cx="576" cy="304.762" r="191.5" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1.2" />
        </svg>
      </div>

      <div className="montarville-visualizer-container">
        {/* Montarville Surtitle with Signature Red Rectangle */}
        <motion.div
          className="montarville-surtitle"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Dual-Engine Search Architecture
        </motion.div>

        {/* Hero Title Line 1 */}
        <motion.div
          className="montarville-title-hero"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="montarville-display-title">Classic Google SERP</h2>
        </motion.div>

        {/* Montarville Split Grid (Left: Parallax Architecture Image / Right: Content) */}
        <div className="montarville-grid">
          {/* Left Column: Transparent 3D Dual-Engine Visualizer */}
          <div className="montarville-left-col">
            <div className="montarville-image-frame">
              <motion.div style={{ y: imageY, scale: imageScale }} className="montarville-image-inner">
                <img
                  src="/seo-geo-floating-3d.png"
                  alt="SEO & GEO 3D Launch Engine"
                  className="montarville-img"
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>
            </div>
          </div>

          {/* Right Column: Title Line 2, 2-Col Editorial Copy */}
          <div className="montarville-right-col">
            <h3 className="montarville-sub-title">
              <span className="title-muted">vs.</span>{" "}
              <span className="title-red">AI Answer Engines</span>
            </h3>

            {/* Montarville Editorial 2-Column Copy (--2c) */}
            <div className="montarville-editorial-2c">
              <p className="montarville-body-p">
                Traditional search algorithms index static web pages through bot crawlers and sponsored keyword auctions. When enterprise buyers query high-intent keywords, legacy search delivers commoditized blue links buried under layers of sponsored friction.
              </p>
              <p className="montarville-body-p">
                BrandForge Generative Engine Optimization (GEO) encodes your entity directly into neural vector embeddings. When prospective clients prompt ChatGPT, Perplexity, or Gemini, your brand is synthesized as the indisputable category leader.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const visualizerStyles = `
  /* Montarville Section Foundation (Pitch Black, Pure White, Electric Red ONLY) */
  .montarville-visualizer-root {
    position: relative;
    background: #09090C;
    color: #FAFAFC;
    padding: 100px 24px 110px;
    overflow: hidden;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .montarville-watermark-ctn {
    position: absolute;
    top: 40px;
    right: -100px;
    pointer-events: none;
    z-index: 1;
    opacity: 0.8;
  }

  .montarville-watermark-svg {
    width: 680px;
    height: auto;
    filter: drop-shadow(0 0 40px rgba(0, 0, 0, 0.8));
  }

  .montarville-visualizer-container {
    position: relative;
    z-index: 2;
    max-width: 1240px;
    margin: 0 auto;
  }

  /* Montarville Signature Surtitle */
  .montarville-surtitle {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 0.74rem;
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #8E8E93;
    margin-bottom: 24px;
  }

  .montarville-surtitle::before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 3px;
    background-color: #EF4136;
    border-radius: 1px;
  }

  /* Montarville Giant Display Title */
  .montarville-title-hero {
    margin-bottom: 36px;
  }

  .montarville-display-title {
    font-family: "General Sans", "Outfit", -apple-system, sans-serif;
    font-size: clamp(38px, 5.5vw, 76px);
    font-weight: 700;
    line-height: 0.98;
    letter-spacing: -0.035em;
    color: #FAFAFC;
    margin: 0;
  }

  /* Montarville Split Grid */
  .montarville-grid {
    display: grid;
    grid-template-columns: minmax(320px, 410px) 1fr;
    gap: 48px;
    align-items: center;
  }

  @media (max-width: 1024px) {
    .montarville-grid {
      grid-template-columns: 1fr;
      gap: 36px;
      align-items: flex-start;
    }
  }

  /* Left Column: Parallax 3D Asset Frame */
  .montarville-left-col {
    position: relative;
  }

  .montarville-image-frame {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;
    overflow: visible;
    border: none;
    background: transparent;
    box-shadow: none;
  }

  .montarville-image-inner {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .montarville-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.5));
    padding: 0;
  }

  /* Right Column Styling */
  .montarville-right-col {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  .montarville-sub-title {
    font-family: "General Sans", "Outfit", -apple-system, sans-serif;
    font-size: clamp(28px, 3.8vw, 52px);
    font-weight: 700;
    line-height: 1.05;
    letter-spacing: -0.03em;
    margin: 0 0 28px 0;
  }

  .title-muted {
    color: rgba(255, 255, 255, 0.4);
    font-weight: 500;
  }

  .title-red {
    color: #EF4136;
  }

  /* Montarville --2c Editorial Wysiwyg Copy */
  .montarville-editorial-2c {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 28px;
  }

  @media (max-width: 768px) {
    .montarville-editorial-2c {
      grid-template-columns: 1fr;
      gap: 18px;
    }
  }

  .montarville-body-p {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 15.5px;
    line-height: 1.72;
    color: rgba(255, 255, 255, 0.75);
    margin: 0;
  }
`;
