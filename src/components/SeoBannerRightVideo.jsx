"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";

export default function SeoBannerRightVideo() {
  const videoRef = useRef(null);
  const [opacity, setOpacity] = useState(1);
  const isFadingOutRef = useRef(false);

  // Enforce 0.8x playback speed
  const applyPlaybackRate = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  // Smooth fade-in restart after fade-out
  const handleRestart = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    // Reset while hidden (opacity: 0)
    video.currentTime = 0;
    video.playbackRate = 0.8;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Allow frame 0 to paint before initiating smooth fade-in
          setTimeout(() => {
            isFadingOutRef.current = false;
            setOpacity(1);
          }, 80);
        })
        .catch(() => {
          isFadingOutRef.current = false;
          setOpacity(1);
        });
    }
  }, []);

  const handleTimeUpdate = useCallback(() => {
    const video = videoRef.current;
    if (!video || !video.duration) return;

    const timeLeft = video.duration - video.currentTime;

    // Trigger slow fade-out ~1.0s before end of playback
    if (timeLeft <= 1.0 && !isFadingOutRef.current) {
      isFadingOutRef.current = true;
      setOpacity(0);
    }

    // Fallback trigger if near end
    if (timeLeft <= 0.08 && isFadingOutRef.current) {
      handleRestart();
    }
  }, [handleRestart]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    applyPlaybackRate();

    const handleLoadedMetadata = () => {
      applyPlaybackRate();
      const p = video.play();
      if (p !== undefined) {
        p.catch(() => {});
      }
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("play", applyPlaybackRate);
    video.addEventListener("ratechange", () => {
      if (video.playbackRate !== 0.8) {
        video.playbackRate = 0.8;
      }
    });

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("play", applyPlaybackRate);
    };
  }, [applyPlaybackRate]);

  return (
    <div className="bf-seo-video-showcase">
      <style>{`
        .bf-seo-video-showcase {
          position: relative;
          width: 100%;
          max-width: 780px;
          margin: 0 auto;
        }

        .bf-seo-video-chassis {
          position: relative;
          width: 100%;
          background: #000000;
          border: none;
          box-shadow: none;
          border-radius: 20px;
          overflow: hidden;
          aspect-ratio: 16 / 9;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bf-seo-banner-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          border-radius: 20px;
          transition: opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: opacity;
          -webkit-mask-image: radial-gradient(ellipse 94% 90% at 50% 50%, #000000 68%, rgba(0, 0, 0, 0.5) 84%, transparent 100%);
          mask-image: radial-gradient(ellipse 94% 90% at 50% 50%, #000000 68%, rgba(0, 0, 0, 0.5) 84%, transparent 100%);
        }

        /* Soft blurred edge feathering overlay to eliminate sharp borders */
        .bf-seo-video-feather {
          position: absolute;
          inset: 0;
          pointer-events: none;
          border-radius: 20px;
          box-shadow: inset 0 0 26px 16px #000000, inset 0 0 52px 30px rgba(0, 0, 0, 0.8);
          z-index: 2;
        }

        @media (max-width: 640px) {
          .bf-seo-video-showcase {
            max-width: 100%;
          }
          .bf-seo-video-feather {
            box-shadow: inset 0 0 18px 10px #000000, inset 0 0 34px 20px rgba(0, 0, 0, 0.8);
          }
        }
      `}</style>

      <div className="bf-seo-video-chassis">
        <video
          ref={videoRef}
          src="/seobannerrightvideo.mp4"
          autoPlay
          muted
          playsInline
          preload="auto"
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleRestart}
          className="bf-seo-banner-video"
          style={{ opacity }}
        />
        <div className="bf-seo-video-feather" aria-hidden="true" />
      </div>
    </div>
  );
}
