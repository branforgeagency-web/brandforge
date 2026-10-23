"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";

/**
 * Interactive 3D Liquid-Glass Capability Card
 * Features continuous levitation, multi-plane 3D parallax (translateZ),
 * cursor-tracking specular glare, and interactive deliverable rows.
 */
export default function Seo3DBentoCard({
  index = 0,
  icon: Icon,
  pillarTag,
  title,
  description,
  metricValue,
  metricLabel,
  badgeText,
  highlights = [],
}) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [activeHighlightIdx, setActiveHighlightIdx] = useState(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const pixelX = useMotionValue(200);
  const pixelY = useMotionValue(200);

  const springConfig = { stiffness: 140, damping: 18 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // 3D Tilt & Parallax matching the hero right-side artwork
  const rotateX = useTransform(springY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-10deg", "10deg"]);
  const translateX = useTransform(springX, [-0.5, 0.5], [-10, 10]);
  const translateY = useTransform(springY, [-0.5, 0.5], [-8, 8]);

  // Counter-parallax for floating 3D elements inside the card
  const floatBadgeX = useTransform(springX, [-0.5, 0.5], [12, -12]);
  const floatBadgeY = useTransform(springY, [-0.5, 0.5], [8, -8]);

  // Dynamic cursor spotlight glare
  const spotlightBg = useMotionTemplate`radial-gradient(380px circle at ${pixelX}px ${pixelY}px, rgba(255, 24, 1, 0.12), rgba(255, 255, 255, 0.4) 45%, transparent 80%)`;

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const localX = e.clientX - rect.left;
    const localY = e.clientY - rect.top;
    pixelX.set(localX);
    pixelY.set(localY);
    mouseX.set(localX / rect.width - 0.5);
    mouseY.set(localY / rect.height - 0.5);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const stepNumber = `0${index + 1}`;
  const floatDuration = 4.6 + (index % 3) * 0.6;

  return (
    <motion.div
      className="bf-pro-card-perspective"
      animate={{
        y: index % 2 === 0 ? [-6, 6, -6] : [6, -6, 6],
      }}
      transition={{
        duration: floatDuration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <style>{cardStyles}</style>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          x: translateX,
          y: translateY,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, delay: index * 0.08 }}
        className={`bf-pro-bento-card ${isHovered ? "is-hovered" : ""}`}
      >
        {/* Dynamic Cursor-Following Liquid Glass Glare */}
        <motion.div
          className="bf-pro-cursor-spotlight"
          style={{
            background: spotlightBg,
            opacity: isHovered ? 1 : 0,
          }}
        />

        {/* Ambient 3D Orb Glow */}
        <div className="bf-pro-ambient-orb" />

        {/* Top Accent Sweep Bar */}
        <div className="bf-pro-top-bar" />

        <div className="bf-pro-card-inner">
          {/* Header Row: 3D Floating Icon + Category Label + Floating Liquid Glass Pill */}
          <div className="bf-pro-card-header" style={{ transform: "translateZ(35px)" }}>
            <div className="bf-pro-icon-group">
              <motion.div
                className="bf-pro-icon-box"
                animate={{
                  rotateZ: isHovered ? [0, -6, 6, 0] : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                {Icon && <Icon size={20} strokeWidth={2.2} />}
                <span className="bf-pro-icon-ring" />
              </motion.div>
              <div className="bf-pro-meta-text">
                <span className="bf-pro-step-num">{stepNumber}</span>
                <span className="bf-pro-meta-divider">/</span>
                <span className="bf-pro-pillar-tag">{pillarTag}</span>
              </div>
            </div>

            {badgeText && (
              <motion.span
                style={{ x: floatBadgeX, y: floatBadgeY }}
                className="bf-pro-badge-pill"
              >
                <span className="bf-pro-live-dot" />
                {badgeText}
              </motion.span>
            )}
          </div>

          {/* Title & Description on 3D Plane */}
          <div className="bf-pro-copy-block" style={{ transform: "translateZ(25px)" }}>
            <h3 className="bf-pro-title">{title}</h3>
            <p className="bf-pro-desc">{description}</p>
          </div>

          {/* Interactive 3D Deliverable Highlights List */}
          {highlights && highlights.length > 0 && (
            <div className="bf-pro-highlights-box" style={{ transform: "translateZ(42px)" }}>
              {highlights.map((item, idx) => {
                const isItemActive = activeHighlightIdx === idx;
                return (
                  <motion.div
                    key={idx}
                    onMouseEnter={() => setActiveHighlightIdx(idx)}
                    onClick={() => setActiveHighlightIdx(idx)}
                    whileHover={{ x: 5, scale: 1.01 }}
                    className={`bf-pro-highlight-row ${isItemActive ? "is-active-row" : ""}`}
                  >
                    <div className="bf-pro-highlight-left">
                      <span className="bf-pro-check-circle">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span className="bf-pro-highlight-label">{item.label}</span>
                    </div>
                    {item.tag && (
                      <span className="bf-pro-highlight-tag">{item.tag}</span>
                    )}
                  </motion.div>
                );
              })}
            </div>
          )}

          {/* Bottom 3D Impact Metric Bar */}
          <div className="bf-pro-card-footer" style={{ transform: "translateZ(38px)" }}>
            <div className="bf-pro-metric-group">
              <span className="bf-pro-metric-val">{metricValue}</span>
              <span className="bf-pro-metric-lbl">{metricLabel}</span>
            </div>

            <motion.div
              whileHover={{ scale: 1.15, rotate: 12 }}
              className="bf-pro-arrow-circle"
              aria-hidden="true"
            >
              <ArrowUpRight size={16} strokeWidth={2.4} />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const cardStyles = `
  .bf-pro-card-perspective {
    perspective: 1200px;
    height: 100%;
  }

  .bf-pro-bento-card {
    position: relative;
    height: 100%;
    border-radius: 26px;
    background: linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.92) 0%,
      rgba(255, 255, 255, 0.78) 100%
    );
    backdrop-filter: blur(24px) saturate(180%);
    -webkit-backdrop-filter: blur(24px) saturate(180%);
    border: 1px solid rgba(229, 231, 235, 0.9);
    box-shadow:
      0 18px 40px -15px rgba(10, 10, 12, 0.07),
      0 4px 14px -2px rgba(10, 10, 12, 0.03),
      inset 0 1px 0 0 rgba(255, 255, 255, 1);
    overflow: hidden;
    transition: border-color 0.35s ease, box-shadow 0.35s ease;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    will-change: transform;
  }

  .bf-pro-bento-card.is-hovered {
    border-color: rgba(255, 24, 1, 0.45);
    box-shadow:
      0 30px 60px -15px rgba(10, 10, 12, 0.13),
      0 12px 28px -6px rgba(255, 24, 1, 0.12),
      inset 0 1px 0 0 rgba(255, 255, 255, 1);
  }

  .bf-pro-cursor-spotlight {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    transition: opacity 0.3s ease;
  }

  .bf-pro-ambient-orb {
    position: absolute;
    top: -60px;
    right: -60px;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 24, 1, 0.12) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
    transition: transform 0.5s ease, opacity 0.5s ease;
    opacity: 0.5;
  }

  .bf-pro-bento-card.is-hovered .bf-pro-ambient-orb {
    transform: scale(1.35);
    opacity: 1;
  }

  .bf-pro-top-bar {
    position: relative;
    z-index: 2;
    height: 3.5px;
    width: 100%;
    background: linear-gradient(90deg, #FF1801 0%, #0A0A0C 100%);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .bf-pro-bento-card.is-hovered .bf-pro-top-bar {
    transform: scaleX(1);
  }

  .bf-pro-card-inner {
    position: relative;
    z-index: 2;
    padding: 32px;
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-between;
    gap: 22px;
    transform-style: preserve-3d;
  }

  .bf-pro-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
  }

  .bf-pro-icon-group {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .bf-pro-icon-box {
    position: relative;
    width: 46px;
    height: 46px;
    border-radius: 14px;
    background: #0A0A0C;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
    flex-shrink: 0;
    box-shadow: 0 8px 18px rgba(10, 10, 12, 0.18);
  }

  .bf-pro-bento-card.is-hovered .bf-pro-icon-box {
    background: #FF1801;
    transform: translateY(-2px) scale(1.06);
    box-shadow: 0 10px 22px rgba(255, 24, 1, 0.35);
  }

  .bf-pro-icon-ring {
    position: absolute;
    inset: -3px;
    border-radius: 16px;
    border: 1.5px solid rgba(255, 24, 1, 0);
    transition: border-color 0.3s ease;
  }

  .bf-pro-bento-card.is-hovered .bf-pro-icon-ring {
    border-color: rgba(255, 24, 1, 0.35);
  }

  .bf-pro-meta-text {
    display: flex;
    align-items: center;
    gap: 6px;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 0.82rem;
    font-weight: 700;
    color: #6B7280;
  }

  .bf-pro-step-num {
    color: #FF1801;
    font-weight: 800;
  }

  .bf-pro-meta-divider {
    color: #D1D5DB;
  }

  .bf-pro-pillar-tag {
    color: #374151;
    letter-spacing: 0.01em;
  }

  .bf-pro-badge-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 13px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(12px);
    border: 1px solid #E5E7EB;
    color: #1F2937;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    box-shadow: 0 4px 12px rgba(10, 10, 12, 0.05);
    transition: background 0.3s ease, border-color 0.3s ease, color 0.3s ease;
  }

  .bf-pro-live-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #FF1801;
    box-shadow: 0 0 8px rgba(255, 24, 1, 0.6);
  }

  .bf-pro-bento-card.is-hovered .bf-pro-badge-pill {
    background: rgba(255, 24, 1, 0.08);
    border-color: rgba(255, 24, 1, 0.35);
    color: #FF1801;
  }

  .bf-pro-copy-block {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .bf-pro-title {
    font-family: "Outfit", sans-serif;
    font-size: 1.42rem;
    font-weight: 800;
    line-height: 1.25;
    color: #0A0A0C;
    margin: 0;
    letter-spacing: -0.01em;
  }

  .bf-pro-desc {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 0.95rem;
    line-height: 1.65;
    color: #4B5563;
    margin: 0;
  }

  /* Interactive 3D Deliverable Highlights */
  .bf-pro-highlights-box {
    background: rgba(250, 250, 252, 0.85);
    border: 1px solid #ECEEF2;
    border-radius: 18px;
    padding: 12px 14px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    transition: border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
  }

  .bf-pro-bento-card.is-hovered .bf-pro-highlights-box {
    background: rgba(255, 255, 255, 0.95);
    border-color: rgba(255, 24, 1, 0.2);
    box-shadow: 0 8px 24px rgba(10, 10, 12, 0.04);
  }

  .bf-pro-highlight-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 8px 10px;
    border-radius: 11px;
    transition: background 0.25s ease, transform 0.25s ease;
  }

  .bf-pro-highlight-row.is-active-row {
    background: rgba(255, 24, 1, 0.06);
  }

  .bf-pro-highlight-left {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .bf-pro-check-circle {
    width: 21px;
    height: 21px;
    border-radius: 50%;
    background: rgba(255, 24, 1, 0.12);
    color: #FF1801;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: all 0.25s ease;
  }

  .bf-pro-highlight-row.is-active-row .bf-pro-check-circle,
  .bf-pro-bento-card.is-hovered .bf-pro-highlight-row.is-active-row .bf-pro-check-circle {
    background: #FF1801;
    color: #FFFFFF;
    box-shadow: 0 3px 8px rgba(255, 24, 1, 0.3);
  }

  .bf-pro-highlight-label {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 0.86rem;
    font-weight: 700;
    color: #1F2937;
  }

  .bf-pro-highlight-tag {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 0.74rem;
    font-weight: 700;
    color: #4B5563;
    background: #FFFFFF;
    border: 1px solid #E5E7EB;
    padding: 3px 10px;
    border-radius: 999px;
    white-space: nowrap;
    transition: all 0.25s ease;
  }

  .bf-pro-highlight-row.is-active-row .bf-pro-highlight-tag {
    border-color: rgba(255, 24, 1, 0.35);
    color: #FF1801;
    background: #FFFFFF;
  }

  /* Footer */
  .bf-pro-card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 18px;
    border-top: 1px solid #F3F4F6;
  }

  .bf-pro-metric-group {
    display: flex;
    align-items: baseline;
    gap: 10px;
  }

  .bf-pro-metric-val {
    font-family: "Outfit", sans-serif;
    font-size: 1.65rem;
    font-weight: 900;
    color: #0A0A0C;
    letter-spacing: -0.02em;
    transition: color 0.3s ease;
  }

  .bf-pro-bento-card.is-hovered .bf-pro-metric-val {
    color: #FF1801;
  }

  .bf-pro-metric-lbl {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 0.82rem;
    font-weight: 700;
    color: #6B7280;
  }

  .bf-pro-arrow-circle {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #F3F4F6;
    color: #0A0A0C;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }

  .bf-pro-bento-card.is-hovered .bf-pro-arrow-circle {
    background: #FF1801;
    color: #FFFFFF;
    transform: translate(3px, -3px);
    box-shadow: 0 6px 16px rgba(255, 24, 1, 0.3);
  }

  @media (max-width: 640px) {
    .bf-pro-card-inner {
      padding: 24px 20px;
    }
    .bf-pro-title {
      font-size: 1.25rem;
    }
    .bf-pro-highlight-tag {
      display: none;
    }
  }
`;
