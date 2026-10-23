"use client";

import React from "react";
import SeoSajanContactForm from "./SeoSajanContactForm";



// Montarville Intersecting Circles Watermark
function MontarvilleCircles({ className = "" }) {
  return (
    <div className={`montarville-circles-wrap ${className}`} aria-hidden="true">
      <svg width="680" height="540" viewBox="0 0 768 610" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="384" cy="417.5" r="191.5" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
        <circle cx="384" cy="192" r="191.5" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
        <circle cx="192" cy="304.7" r="191.5" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
        <circle cx="576" cy="304.7" r="191.5" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
      </svg>
    </div>
  );
}

export default function SeoMontarvilleStory({ data, storyHeading, onOpenModal: _onOpenModal }) {
  const paragraphs = Array.isArray(data?.subtitle) ? data.subtitle : [data?.subtitle || ""];

  return (
    <section className="sm-story-section" id="growth-story">
      <style>{storyComponentStyles}</style>

      {/* Architectural Line-Art Watermark */}
      <MontarvilleCircles className="sm-story-watermark" />

      <div className="sm-story-container">

        {/* Editorial Story Header & 2-Column Body */}
        <div className="sm-story-editorial">
          <h2 className="sm-story-heading">
            {storyHeading?.lead ? (
              <>
                {storyHeading.lead}{" "}
                <span className="text-red">{storyHeading.accent}</span>
              </>
            ) : (
              <>
                Why High-Performance{" "}
                <span className="text-red">{data?.eyebrow ? data.eyebrow.split("|")[0].trim() : "Strategy"}</span> Matters
              </>
            )}
          </h2>

          <div className="sm-editorial-body">
            {paragraphs.map((p, idx) => (
              <p key={idx} className={`sm-editorial-para ${idx === 0 ? "is-lead" : ""}`}>
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Sajan Paudel Style Conversational Form Section */}
        <SeoSajanContactForm />
      </div>
    </section>
  );
}

const storyComponentStyles = `
  .sm-story-section {
    position: relative;
    background: #09090C;
    padding: clamp(80px, 9vw, 120px) 0 clamp(70px, 8vw, 110px);
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    overflow: hidden;
  }

  .sm-story-watermark {
    position: absolute;
    top: 50%;
    left: -120px;
    transform: translateY(-50%);
    pointer-events: none;
    opacity: 0.6;
    z-index: 1;
  }

  .sm-story-container {
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 clamp(20px, 4vw, 40px);
    position: relative;
    z-index: 2;
  }

  /* Sajan Lumina MetaLabel */
  .sm-metalabel-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    margin-bottom: 48px;
  }

  .sm-metalabel {
    display: block;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 0.74rem;
    font-weight: 700;
    color: #8E8E93;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    margin: 0;
  }

  .sm-metalabel-coord {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.68rem;
    color: rgba(255, 255, 255, 0.4);
    letter-spacing: 0.08em;
  }

  /* Editorial Story Section */
  .sm-story-editorial {
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-bottom: 32px;
  }

  .sm-story-heading {
    font-family: "General Sans", "Outfit", -apple-system, sans-serif;
    font-size: clamp(34px, 4.4vw, 56px);
    font-weight: 900;
    line-height: 1.08;
    letter-spacing: -0.03em;
    color: #FAFAFC;
    margin: 0;
    max-width: 880px;
  }

  .text-red {
    color: #FF1801;
  }

  /* Montarville --2c Editorial Prose */
  .sm-editorial-body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 36px;
  }

  @media (max-width: 860px) {
    .sm-editorial-body {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }

  .sm-editorial-para {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: clamp(15.5px, 1.15vw, 17px);
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.75);
    margin: 0;
  }

  .sm-editorial-para.is-lead {
    font-size: clamp(17.5px, 1.35vw, 19.5px);
    font-weight: 600;
    color: #FAFAFC;
    line-height: 1.7;
    border-left: 2px solid #FF1801;
    padding-left: 18px;
  }

  @media (max-width: 640px) {
    .sm-metalabel-row {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }
  }
`;
