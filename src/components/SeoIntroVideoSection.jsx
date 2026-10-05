"use client";

import React, { useRef, useEffect } from "react";

/**
 * ───────────────────────────────────────────────────────────────────────────
 * SEO INTRO VIDEO SECTION (1ST SECTION IN SEO & GEO LANDING PAGE)
 * Uses public/seo-intro.mp4.
 * Clean, modern video container without audio (muted), autoplaying, looping,
 * no scroll scrub.
 * ───────────────────────────────────────────────────────────────────────────
 */

export default function SeoIntroVideoSection({
  src = "/seo-intro.mp4",
  id = "seo-intro-section",
  ariaLabel = "BrandForge Search Ecosystem Intro"
}) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch(() => {
        // Handle browser autoplay policy gracefully
      });
    }
  }, [src]);

  return (
    <section className="bf-seo-intro-wrap" id={id}>
      <style>{styles}</style>
      <div className="bf-seo-intro-container">
        <video
          ref={videoRef}
          src={src}
          className="bf-seo-intro-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-label={ariaLabel}
        />
      </div>
    </section>
  );
}

const styles = `
  .bf-seo-intro-wrap {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    margin-right: calc(-50vw + 50%);
    background: #000000;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }

  .bf-seo-intro-container {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000000;
  }

  .bf-seo-intro-video {
    width: 100vw;
    height: auto;
    object-fit: cover;
    display: block;
    background: #000000;
  }
`;
