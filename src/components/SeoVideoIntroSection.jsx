"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * SEO & GEO CINEMATIC VIDEO INTRO TAKEOVER
 * - Displays /seointro.mp4 on initial page load / reload.
 * - Pure video presentation with zero text overlays (clean, cinematic).
 * - Always 100% silent without audio (muted at all times).
 * - Full 100% width display with object-fit: contain (no zoom-in).
 * - Entire page & section are strictly non-scrollable while the video is playing.
 * - Once the video completes, slowly fades out over 1.5s while the hero banner
 *   simultaneously fades in for a seamless, cinematic crossfade.
 * - Once the crossfade finishes, the intro unmounts completely from the DOM so
 *   the visitor cannot scroll back up past the banner section.
 * - Only upon reloading the page will the video intro run again.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export default function SeoVideoIntroSection({ onStartFade, onComplete }) {
  const videoRef = useRef(null);
  const [isDone, setIsDone] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  // Guard flags to guarantee video plays strictly ONCE and never restarts
  const hasStartedRef = useRef(false);
  const hasEndedRef = useRef(false);

  // Store latest callbacks in refs so prop changes don't trigger re-renders/effects
  const onStartFadeRef = useRef(onStartFade);
  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onStartFadeRef.current = onStartFade;
    onCompleteRef.current = onComplete;
  }, [onStartFade, onComplete]);

  // Scroll lock active flag ref
  const isLockedRef = useRef(true);

  // Helper to unlock page scroll & restore navbar
  const unlockScroll = useCallback(() => {
    isLockedRef.current = false;
    if (typeof document !== "undefined") {
      document.body.classList.remove("is-video-intro-active");
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.touchAction = "";
    }
    if (typeof window !== "undefined" && window.__lenis) {
      window.__lenis.start();
    }
  }, []);

  // Helper to strictly lock page scroll & hide navbar
  const lockScroll = useCallback(() => {
    isLockedRef.current = true;
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
    if (typeof document !== "undefined") {
      document.body.classList.add("is-video-intro-active");
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    }
    if (typeof window !== "undefined" && window.__lenis) {
      window.__lenis.stop();
      window.__lenis.scrollTo(0, { immediate: true });
    }
  }, []);

  // Once video finishes playing:
  // 1. Explicitly pause video on its final frame so it NEVER restarts or loops
  // 2. Slowly crossfade out video section over 1.5s
  // 3. Notify parent to simultaneously fade in the banner section
  // 4. Unlock scroll & permanently unmount from DOM
  const handleComplete = useCallback(() => {
    if (hasEndedRef.current) return;
    hasEndedRef.current = true;

    // Immediately pause and freeze the video on the final frame
    const video = videoRef.current;
    if (video) {
      try {
        video.pause();
      } catch {
        // ignore
      }
    }

    setIsExiting(true);

    if (onStartFadeRef.current) {
      onStartFadeRef.current();
    }

    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      if (window.__lenis) {
        window.__lenis.scrollTo(0, { immediate: true });
      }
    }

    // Allow slow cinematic fade-out (1.5s) to finish, then unlock scroll & unmount
    setTimeout(() => {
      unlockScroll();
      setIsDone(true);
      if (onCompleteRef.current) {
        onCompleteRef.current();
      }
    }, 1500);
  }, [unlockScroll]);

  // Lock scroll on mount and manage listeners
  useEffect(() => {
    lockScroll();

    const preventScroll = (e) => {
      if (isLockedRef.current) {
        e.preventDefault();
      }
    };

    const handleKeydown = (e) => {
      if (isLockedRef.current && (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "PageDown" || e.key === "PageUp" || e.key === " ")) {
        e.preventDefault();
      }
      if (e.key === "Escape") {
        handleComplete();
      }
    };

    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });
    window.addEventListener("keydown", handleKeydown);

    return () => {
      unlockScroll();
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [lockScroll, unlockScroll, handleComplete]);

  // Start video playback strictly ONCE on mount
  useEffect(() => {
    const video = videoRef.current;
    if (!video || hasStartedRef.current) return;
    hasStartedRef.current = true;

    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        if (!hasEndedRef.current && video) {
          video.muted = true;
          video.play().catch(() => {});
        }
      });
    }
  }, []);

  // Once completed, completely remove from DOM
  if (isDone) {
    return null;
  }

  return (
    <div
      id="seo-intro-video-overlay"
      className={`bf-seo-intro-overlay ${isExiting ? "is-exiting" : ""}`}
      aria-label="BrandForge SEO & GEO Video Intro"
    >
      <style>{`
        /* Remove navbar & floating buttons completely while video is playing */
        body.is-video-intro-active .liquid-nav__root,
        body.is-video-intro-active .bf-floating-contact-stack {
          display: none !important;
          opacity: 0 !important;
          visibility: hidden !important;
          pointer-events: none !important;
          transform: translateY(-200%) !important;
        }

        .bf-seo-intro-overlay {
          position: fixed;
          inset: 0;
          width: 100vw;
          height: 100vh;
          background: #000000;
          z-index: 999999;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          opacity: 1;
          transition: opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .bf-seo-intro-overlay.is-exiting {
          opacity: 0;
          pointer-events: none;
        }

        /* Video Frame: 100% Width edge-to-edge */
        .bf-intro-video-chassis {
          position: relative;
          width: 100vw;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000000;
          overflow: hidden;
        }

        /* 100% Width Video (Muted at all times, zero text) */
        .bf-intro-video-element {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          background: #000000;
        }
      `}</style>

      <div className="bf-intro-video-chassis">
        <video
          ref={videoRef}
          src="/seointro.mp4"
          autoPlay
          muted
          loop={false}
          playsInline
          preload="auto"
          className="bf-intro-video-element"
          onEnded={handleComplete}
        />
      </div>
    </div>
  );
}
