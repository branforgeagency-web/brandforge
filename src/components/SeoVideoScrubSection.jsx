"use client";

import React, { useRef, useEffect, useState } from "react";
import { useScroll, useSpring, useTransform, motion } from "framer-motion";

/**
 * ───────────────────────────────────────────────────────────────────────────
 * SEO & GEO ULTRA-SMOOTH TWO-WAY VIDEO SCROLL-SCRUB SECTION
 * Uses public/seo-animation1.mp4.
 * 1. Framer Motion useSpring physics dampener turns stepped scroll wheel ticks
 *    into a continuous, liquid-smooth scrub curve.
 * 2. Asynchronous seek queue + exponential moving average (lerp) ensures
 *    hardware video decoder never drops frames or hitches.
 * 3. Video plays completely from 0% to ~82% scroll.
 * 4. Video section gracefully fades out (opacity: 1 -> 0, scale: 1 -> 0.96)
 *    from 82% to 98% scroll before transitioning to the next section.
 * 5. Solid pure black background (#000000) with zero text overlays.
 * ───────────────────────────────────────────────────────────────────────────
 */

export default function SeoVideoScrubSection() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [duration, setDuration] = useState(5.589);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Tuned spring dampener for fluid inertia without micro-stutter
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 75,
    damping: 24,
    mass: 0.12,
    restDelta: 0.0001,
  });

  // Smooth fade out & subtle depth scale down after video completes before unsticking
  const stageOpacity = useTransform(smoothProgress, [0, 0.82, 0.96], [1, 1, 0]);
  const stageScale = useTransform(smoothProgress, [0, 0.82, 0.96], [1, 1, 0.96]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let targetTime = 0;
    let smoothRenderedTime = 0;
    let isSeeking = false;
    let pendingSeekTime = null;
    let rafId;

    const handleLoadedMetadata = () => {
      if (video.duration && !isNaN(video.duration)) {
        setDuration(video.duration);
      }
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    if (video.readyState >= 1 && video.duration) {
      setDuration(video.duration);
    }

    // Subscribe to the spring-smoothed scroll progress
    // Play video across 0.0 to 0.82 of the scroll travel so animation is 100% complete
    // before the fade-out begins
    const unsubscribe = smoothProgress.on("change", (progress) => {
      const dur = video.duration || duration;
      const normalizedVideoProgress = Math.min(1, progress / 0.82);
      const clamped = Math.max(0, Math.min(dur - 0.01, normalizedVideoProgress * dur));
      targetTime = clamped;
    });

    const executeSeek = (time) => {
      isSeeking = true;
      try {
        if (typeof video.fastSeek === "function") {
          video.fastSeek(time);
        } else {
          video.currentTime = time;
        }
      } catch (_e) {
        isSeeking = false;
      }
    };

    // Continuous 60fps render loop with lerp easing
    const render = () => {
      const dur = video.duration || duration;
      if (dur > 0) {
        const diff = targetTime - smoothRenderedTime;
        if (Math.abs(diff) > 0.003) {
          smoothRenderedTime += diff * 0.28;
          if (!video.seeking && !isSeeking) {
            executeSeek(smoothRenderedTime);
          } else {
            pendingSeekTime = smoothRenderedTime;
          }
        }
      }
      rafId = requestAnimationFrame(render);
    };

    const handleSeeked = () => {
      isSeeking = false;
      if (pendingSeekTime !== null) {
        const nextTime = pendingSeekTime;
        pendingSeekTime = null;
        if (Math.abs(nextTime - video.currentTime) > 0.01) {
          executeSeek(nextTime);
        }
      }
    };

    video.addEventListener("seeked", handleSeeked);
    rafId = requestAnimationFrame(render);

    return () => {
      unsubscribe();
      cancelAnimationFrame(rafId);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("seeked", handleSeeked);
    };
  }, [smoothProgress, duration]);

  return (
    <section ref={containerRef} className="bf-seo-scrub-track" id="seo-scrub-engine">
      <style>{styles}</style>

      {/* FIXED PINNED VIEWPORT STAGE: REMAINS FIXED AND FADES OUT BEFORE NEXT SECTION */}
      <motion.div
        className="bf-seo-scrub-stage"
        style={{
          opacity: stageOpacity,
          scale: stageScale,
        }}
      >
        {/* CENTER VIDEO CANVAS: VIDEO FRAME COMPLETELY IN VIEW */}
        <div className="bf-seo-scrub-video-box">
          <video
            ref={videoRef}
            src="/seo-animation1.mp4"
            className="bf-seo-scrub-video-el"
            playsInline
            muted
            preload="auto"
            aria-label="BrandForge SEO and GEO Search Ecosystem Animation"
          />
        </div>
      </motion.div>
    </section>
  );
}

const styles = `
  /* 280vh TRACK: LUXURIOUS SMOOTH SCROLL RESOLUTION */
  .bf-seo-scrub-track {
    position: relative;
    width: 100%;
    height: 280vh;
    background: #000000;
    z-index: 10;
  }

  /* PINNED FIXED VIEWPORT (100vw x 100vh) */
  .bf-seo-scrub-stage {
    position: sticky;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #000000;
    overflow: hidden;
    isolation: isolate;
  }

  /* VIDEO FRAME COMPLETELY IN VIEW (CENTERED, 100% VISIBLE, NO CLIPPING) */
  .bf-seo-scrub-video-box {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #000000;
    z-index: 5;
  }

  .bf-seo-scrub-video-el {
    width: 100%;
    height: 100%;
    max-width: 100vw;
    max-height: 100vh;
    object-fit: contain;
    object-position: center center;
    display: block;
    background: #000000;
    user-select: none;
    pointer-events: none;
  }

  @media (max-width: 600px) {
    .bf-seo-scrub-track {
      height: 220vh;
    }
  }
`;
