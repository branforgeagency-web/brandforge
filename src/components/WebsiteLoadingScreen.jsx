"use client";

import React, { useEffect, useRef, useState } from "react";
import { getStorageUrl } from "../utils/storageAsset";

const TOTAL_BLOCKS = 20;
const DURATION_MS = 1200; // 1.2s total loading duration

export default function WebsiteLoadingScreen() {
  const [mounted, setMounted] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    // 1. Lock scrolling on initial load
    if (typeof document !== "undefined") {
      document.body.classList.add("is-video-intro-active");
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    }
    if (typeof window !== "undefined" && window.__lenis) {
      window.__lenis.stop();
      window.__lenis.scrollTo(0, { immediate: true });
    }

    let frameId;

    const startProgressSequence = () => {
      if (hasStartedRef.current) return;
      hasStartedRef.current = true;

      const startTime = performance.now();

      const tick = (now) => {
        const elapsed = now - startTime;
        const rawProgress = Math.min(1, elapsed / DURATION_MS);

        // 0% to 100% in 5% steps (20 blocks)
        const currentBlocks = Math.floor(rawProgress * TOTAL_BLOCKS);
        const steppedPercent = currentBlocks * (100 / TOTAL_BLOCKS);

        setProgress(steppedPercent);

        if (rawProgress < 1) {
          frameId = requestAnimationFrame(tick);
        } else {
          setProgress(100);

          // Brief pause at 100% then initiate cinematic fade
          setTimeout(() => {
            setIsFading(true);

            setTimeout(() => {
              if (typeof document !== "undefined") {
                document.body.classList.remove("is-video-intro-active");
                document.body.style.overflow = "";
                document.documentElement.style.overflow = "";
              }
              if (typeof window !== "undefined" && window.__lenis) {
                window.__lenis.start();
              }
              setMounted(false);
            }, 450);
          }, 100);
        }
      };

      frameId = requestAnimationFrame(tick);
    };

    // 2. Play video safely and sync timer
    const video = videoRef.current;
    if (video) {
      const onPlaying = () => {
        startProgressSequence();
      };
      video.addEventListener("playing", onPlaying, { once: true });

      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          startProgressSequence();
        });
      }
    }

    // Safety fallback: ensure loading proceeds even if browser delays autoplay
    const fallbackTimer = setTimeout(() => {
      startProgressSequence();
    }, 1400);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(fallbackTimer);
      if (typeof document !== "undefined") {
        document.body.classList.remove("is-video-intro-active");
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
      }
      if (typeof window !== "undefined" && window.__lenis) {
        window.__lenis.start();
      }
    };
  }, []);

  if (!mounted) return null;

  const videoUrl = getStorageUrl("/websiteloading.mp4");
  const filledCount = Math.round((progress / 100) * TOTAL_BLOCKS);

  return (
    <div
      className={`bf-loading-screen ${isFading ? "bf-loading-fade-out" : ""}`}
      aria-label="BrandForge Loading Screen"
      role="status"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

        .bf-loading-screen {
          position: fixed;
          inset: 0;
          z-index: 999999;
          background: #000000;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          opacity: 1;
          pointer-events: auto;
          transition: opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1), transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), filter 0.45s ease;
        }

        .bf-loading-fade-out {
          opacity: 0 !important;
          transform: scale(1.025) !important;
          filter: blur(5px) !important;
          pointer-events: none !important;
        }

        .bf-combo-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: clamp(12px, 2vh, 16px);
          user-select: none;
        }

        /* Top: Prominent Video Frame with Deeply Blurred & Feathered Edges (No Sharp Borders) */
        .bf-combo-video-frame {
          position: relative;
          width: min(640px, 92vw);
          aspect-ratio: 16 / 9;
          max-height: 48vh;
          background: #000000;
          display: flex;
          align-items: center;
          justify-content: center;
          /* 4-way intersecting linear gradient feather mask removes all hard boundaries */
          -webkit-mask-image: 
            linear-gradient(to right, transparent 0%, #000000 15%, #000000 85%, transparent 100%),
            linear-gradient(to bottom, transparent 0%, #000000 15%, #000000 85%, transparent 100%);
          -webkit-mask-composite: source-in;
          mask-image: 
            linear-gradient(to right, transparent 0%, #000000 15%, #000000 85%, transparent 100%),
            linear-gradient(to bottom, transparent 0%, #000000 15%, #000000 85%, transparent 100%);
          mask-composite: intersect;
          box-shadow: 0 0 60px 30px #000000;
        }

        .bf-combo-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: contrast(1.05) brightness(1.02);
        }

        /* Deep radial vignette & inset shadow to softly dissolve video edges into black */
        .bf-combo-corner-softener {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(ellipse 85% 80% at 50% 50%, transparent 35%, rgba(0, 0, 0, 0.5) 65%, #000000 98%);
          box-shadow: inset 0 0 30px 15px #000000;
        }

        /* Bottom: Compact Retro 8-bit Loading Bar in BrandForge Red & White Theme */
        .bf-retro-container {
          width: min(240px, 68vw);
          display: flex;
          flex-direction: column;
        }

        .bf-retro-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 6px;
          font-family: 'Press Start 2P', monospace;
          line-height: 1;
        }

        .bf-retro-title {
          color: #FF1801;
          font-size: clamp(7.5px, 1.8vw, 8.5px);
          letter-spacing: 1.2px;
          text-shadow: 0 0 10px rgba(255, 24, 1, 0.5);
        }

        .bf-retro-percent {
          color: #FFFFFF;
          font-size: clamp(7.5px, 1.8vw, 8.5px);
          font-variant-numeric: tabular-nums;
          letter-spacing: 0.5px;
          text-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
        }

        .bf-retro-bar-frame {
          position: relative;
          width: 100%;
          height: clamp(14px, 2.1vh, 17px);
          border: 1.8px solid #FF1801;
          border-radius: 3px;
          padding: 2px;
          background: #000000;
          display: flex;
          gap: 1.5px;
          box-sizing: border-box;
          box-shadow: 0 0 14px rgba(255, 24, 1, 0.3), inset 0 0 6px rgba(255, 24, 1, 0.15);
        }

        .bf-retro-block {
          flex: 1;
          height: 100%;
          background: rgba(255, 255, 255, 0.04);
          border-radius: 1px;
          transition: background-color 0.04s ease;
        }

        .bf-retro-block.is-filled {
          background: #FFFFFF;
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.6);
        }

        @media (max-width: 768px) {
          .bf-combo-video-frame {
            width: min(380px, 88vw);
            max-height: 38vh;
            -webkit-mask-image: 
              linear-gradient(to right, transparent 0%, #000000 14%, #000000 86%, transparent 100%),
              linear-gradient(to bottom, transparent 0%, #000000 14%, #000000 86%, transparent 100%);
            -webkit-mask-composite: source-in;
            mask-image: 
              linear-gradient(to right, transparent 0%, #000000 14%, #000000 86%, transparent 100%),
              linear-gradient(to bottom, transparent 0%, #000000 14%, #000000 86%, transparent 100%);
            mask-composite: intersect;
          }
          .bf-retro-container {
            width: min(190px, 64vw);
          }
          .bf-retro-bar-frame {
            height: 13.5px;
            border-width: 1.5px;
            padding: 1.5px;
            gap: 1.2px;
          }
          .bf-retro-title,
          .bf-retro-percent {
            font-size: 7px;
          }
        }
      `}</style>

      <div className="bf-combo-wrapper">
        {/* TOP: Video in compact frame with soft blurred corners */}
        <div className="bf-combo-video-frame">
          <video
            ref={videoRef}
            src={videoUrl}
            autoPlay
            muted
            playsInline
            loop
            preload="auto"
            className="bf-combo-video"
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
          <div className="bf-combo-corner-softener" />
        </div>

        {/* BOTTOM: Smaller Retro 8-bit loading bar in Red & White theme */}
        <div className="bf-retro-container">
          <div className="bf-retro-header">
            <span className="bf-retro-title">LOADING...</span>
            <span className="bf-retro-percent">{progress}%</span>
          </div>

          <div className="bf-retro-bar-frame">
            {Array.from({ length: TOTAL_BLOCKS }).map((_, idx) => (
              <div
                key={idx}
                className={`bf-retro-block ${idx < filledCount ? "is-filled" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
