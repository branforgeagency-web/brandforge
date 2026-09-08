import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

/* ───────────────────────────────────────────────────────────────────────────
   BRANDFORGE CLIENT RATINGS & TRUST STRIP WITH PRECISION PATH-FOLLOWING ROCKET
   The rocket follows the exact arched trajectory line with automatic tangent
   alignment, active thruster flame, and glowing dashed arches.
   ─────────────────────────────────────────────────────────────────────────── */

const CLIENT_REVIEWS = [
  {
    id: "sonic",
    name: "Sonic Prints",
    logo: "/client-sonicprints.png",
    scale: 1.45,
    tag: "Brand & Packaging Scale",
    rating: 5.0,
  },
  {
    id: "thoughtflows",
    name: "ThoughtFlows",
    logo: "/client-thoughtflows.png",
    scale: 1.38,
    tag: "No.1 Medical Coding Academy",
    rating: 5.0,
  },
  {
    id: "talentera",
    name: "Talentera",
    logo: "/client-talentera.png",
    scale: 1.05,
    tag: "Era of Talent Platform",
    rating: 5.0,
  },
  {
    id: "thoughtspace",
    name: "ThoughtSpace",
    logo: "/client-thoughtspace.png",
    scale: 1.45,
    tag: "Enterprise Workspace Network",
    rating: 5.0,
  },
];

export default function BrandForgeRatingsTrustStrip() {
  return (
    <section className="bf-trust-strip-root">
      <style>{styles}</style>

      <div className="bf-trust-container">
        <motion.div
          className="bf-trust-card"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* SECTION EYEBROW / TITLE */}
          <div className="bf-trust-header">
            <span className="bf-trust-tag">⚡ VERIFIED CLIENT EXCELLENCE</span>
            <h3 className="bf-trust-title">
              TRUSTED BY CATEGORY LEADERS
            </h3>
          </div>

          {/* RELATIVE STAGE FOR ARCH PATH & PRECISION-TRACKING ROCKET */}
          <div className="bf-trust-stage">
            
            {/* SVG STAGE WITH ARCH TRACKS AND ROCKET ON EXACT PATH */}
            <svg className="bf-arch-track-svg" viewBox="0 0 1000 130" fill="none">
              <defs>
                <linearGradient id="rocketArchGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#EF4136" stopOpacity="0.25" />
                  <stop offset="25%" stopColor="#EF4136" stopOpacity="0.85" />
                  <stop offset="50%" stopColor="#FFB800" stopOpacity="0.95" />
                  <stop offset="75%" stopColor="#EF4136" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#EF4136" stopOpacity="0.25" />
                </linearGradient>

                <linearGradient id="rocketBodyGrad" x1="18" y1="0" x2="-8" y2="0" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="50%" stopColor="#E2E8F0" />
                  <stop offset="100%" stopColor="#94A3B8" />
                </linearGradient>

                {/* MULTI-STAGE FLAME GRADIENTS (INSPIRED BY HOW WE WORK SECTION) */}
                <radialGradient id="flameOuterRadial" cx="85%" cy="50%" r="75%">
                  <stop offset="0%" stopColor="#FFDC50" stopOpacity="0.95" />
                  <stop offset="35%" stopColor="#FF7A18" stopOpacity="0.85" />
                  <stop offset="70%" stopColor="#EF4136" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#EF4136" stopOpacity="0" />
                </radialGradient>

                <radialGradient id="flameMidRadial" cx="85%" cy="50%" r="65%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
                  <stop offset="25%" stopColor="#FFFFB4" stopOpacity="0.95" />
                  <stop offset="60%" stopColor="#FFA014" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#EF4136" stopOpacity="0" />
                </radialGradient>

                <radialGradient id="flameCoreRadial" cx="80%" cy="50%" r="60%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
                  <stop offset="60%" stopColor="#FFE678" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#FFA014" stopOpacity="0" />
                </radialGradient>

                <filter id="flameGlowFilter" x="-40%" y="-40%" width="180%" height="180%">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>

                <filter id="archGlow" x="-10%" y="-10%" width="120%" height="120%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>

                <filter id="rocketAura" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* ARCH 1: Col 1 (125) to Col 2 (375) */}
              <path
                d="M 125,92 Q 250,14 375,92"
                stroke="url(#rocketArchGrad)"
                strokeWidth="2"
                strokeDasharray="5 7"
                className="bf-arch-dash"
                filter="url(#archGlow)"
              />
              {/* ARCH 2: Col 2 (375) to Col 3 (625) */}
              <path
                d="M 375,92 Q 500,14 625,92"
                stroke="url(#rocketArchGrad)"
                strokeWidth="2"
                strokeDasharray="5 7"
                className="bf-arch-dash"
                filter="url(#archGlow)"
              />
              {/* ARCH 3: Col 3 (625) to Col 4 (875) */}
              <path
                d="M 625,92 Q 750,14 875,92"
                stroke="url(#rocketArchGrad)"
                strokeWidth="2"
                strokeDasharray="5 7"
                className="bf-arch-dash"
                filter="url(#archGlow)"
              />

              {/* ROCKET FOLLOWING THE EXACT ARCH PATH WITH AUTOMATIC TANGENT ROTATION */}
              <g className="bf-rocket-carrier">
                <animateMotion
                  path="M 125,92 Q 250,14 375,92 Q 500,14 625,92 Q 750,14 875,92 Q 750,14 625,92 Q 500,14 375,92 Q 250,14 125,92"
                  dur="9.6s"
                  repeatCount="indefinite"
                  rotate="auto"
                />

                {/* 3D PARABOLIC SCALE & OPACITY HOP (TRANSLUCENT & SMALL AT BOTTOM OF ARCH ~0.35/0.55, FULL & BIG AT TOP ~1.0/1.38) */}
                <g className="bf-rocket-scaler">
                  <animateTransform
                    attributeName="transform"
                    type="scale"
                    values="0.55; 1.38; 0.55"
                    keyTimes="0; 0.5; 1"
                    dur="1.6s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.32; 1; 0.32"
                    keyTimes="0; 0.5; 1"
                    dur="1.6s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                  />

                  {/* MULTI-STAGE THRUSTER FLAME (HOW WE WORK STYLE: GLOWING OUTER PLUME -> WARM MID -> WHITE PLASMA CORE) */}
                  <g className="bf-svg-flame-group">
                    {/* Outer Fiery Glow Plume */}
                    <ellipse cx="-24" cy="0" rx="16" ry="6.5" fill="url(#flameOuterRadial)" className="bf-svg-flame-outer" filter="url(#flameGlowFilter)" />
                    {/* Mid Fiery Flame Body */}
                    <ellipse cx="-19" cy="0" rx="11" ry="4.2" fill="url(#flameMidRadial)" className="bf-svg-flame-mid" />
                    {/* Super-hot White/Yellow Plasma Core */}
                    <ellipse cx="-14.5" cy="0" rx="6.2" ry="2.2" fill="url(#flameCoreRadial)" className="bf-svg-flame-core" />
                    {/* Trailing Particle Sparks */}
                    <circle cx="-32" cy="-3" r="1.3" fill="#FFDC50" className="bf-svg-spark s1" />
                    <circle cx="-38" cy="2.5" r="1.5" fill="#FFA014" className="bf-svg-spark s2" />
                    <circle cx="-43" cy="-1.5" r="1.1" fill="#EF4136" className="bf-svg-spark s3" />
                    <circle cx="-48" cy="2.8" r="0.9" fill="#FFDC50" className="bf-svg-spark s4" />
                  </g>

                  {/* ROCKET GRAPHICS (POINTING FORWARD ALONG +X AXIS) */}
                  <g className="bf-rocket-graphics">
                    {/* Outer Engine Glow Aura */}
                    <circle cx="2" cy="0" r="12" fill="#EF4136" opacity="0.3" filter="url(#rocketAura)" />

                    {/* Top & Bottom Stabilizer Fins */}
                    <path d="M -7 -4 L -15 -10 L -11 -3 Z" fill="#D8342A" stroke="#FF6B5E" strokeWidth="0.8" />
                    <path d="M -7 4 L -15 10 L -11 3 Z" fill="#D8342A" stroke="#FF6B5E" strokeWidth="0.8" />

                    {/* Aerodynamic Fuselage */}
                    <path
                      d="M 18 0 C 11 -6 0 -8 -7 -7 C -8 -7 -8 7 -7 7 C 0 8 11 6 18 0 Z"
                      fill="url(#rocketBodyGrad)"
                      stroke="#FFFFFF"
                      strokeWidth="1.2"
                    />

                    {/* Crimson Nose Cone */}
                    <path d="M 18 0 C 14 -4 9 -5 7 -5 C 7 -5 7 5 7 5 C 9 5 14 4 18 0 Z" fill="#EF4136" />

                    {/* High-Tech Porthole Window */}
                    <circle cx="2.5" cy="0" r="3.2" fill="#0A0A10" stroke="#00F0FF" strokeWidth="1" />
                    <circle cx="1.8" cy="-0.9" r="1" fill="#FFFFFF" opacity="0.9" />

                    {/* Engine Thruster Nozzle */}
                    <rect x="-10.5" y="-3" width="3.5" height="6" rx="1" fill="#374151" stroke="#9CA3AF" strokeWidth="0.6" />
                  </g>
                </g>
              </g>
            </svg>

            {/* 4-COLUMN RATINGS ROW WITH SLEEK VERTICAL DIVIDERS */}
            <div className="bf-trust-grid">
              {CLIENT_REVIEWS.map((client, idx) => (
                <React.Fragment key={client.name}>
                  {idx > 0 && <div className="bf-trust-divider" />}

                  <div className="bf-trust-col">
                    {/* CLIENT LOGO */}
                    <div className="bf-trust-logo-wrap">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="bf-client-img"
                        style={{ transform: `scale(${client.scale})` }}
                      />
                    </div>

                    {/* 5 GOLD STAR RATING ROW */}
                    <div className="bf-stars-row">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="bf-star-icon" />
                      ))}
                      <span className="bf-rating-num">{client.rating.toFixed(1)}</span>
                    </div>

                    {/* SUB-CAPTION */}
                    <span className="bf-client-subtag">{client.tag}</span>
                  </div>
                </React.Fragment>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

const styles = `
  @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@700;800;900&family=Plus+Jakarta+Sans:wght@600;700;800&family=JetBrains+Mono:wght@700;800&display=swap");

  .bf-trust-strip-root {
    position: relative;
    padding: 30px 0 60px;
    background: transparent;
    z-index: 5;
  }

  .bf-trust-container {
    max-width: 1220px;
    margin: 0 auto;
    padding: 0 clamp(16px, 3vw, 36px);
  }

  .bf-trust-card {
    background: rgba(12, 12, 16, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 22px;
    padding: clamp(32px, 4vw, 44px) clamp(20px, 3vw, 44px);
    backdrop-filter: blur(18px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7), 0 0 35px rgba(239, 65, 54, 0.08);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .bf-trust-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 20%;
    right: 20%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(239, 65, 54, 0.6), transparent);
  }

  .bf-trust-header {
    margin-bottom: 36px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .bf-trust-tag {
    font-family: "JetBrains Mono", monospace;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.14em;
    color: #EF4136;
    text-transform: uppercase;
  }

  .bf-trust-title {
    font-family: "Outfit", sans-serif;
    font-size: clamp(20px, 2.5vw, 26px);
    font-weight: 900;
    letter-spacing: 0.12em;
    color: #FFFFFF;
    margin: 0;
    text-transform: uppercase;
  }

  /* STAGE FOR JUMPING ROCKET */
  .bf-trust-stage {
    position: relative;
    width: 100%;
    max-width: 1100px;
    margin-top: 10px;
  }

  /* SVG ARCH TRACK & ROCKET OVERLAY */
  .bf-arch-track-svg {
    position: absolute;
    top: -50px;
    left: 0;
    width: 100%;
    height: 130px;
    pointer-events: none;
    z-index: 10;
    overflow: visible;
  }

  .bf-arch-dash {
    animation: archPulse 2.8s ease-in-out infinite alternate;
  }

  @keyframes archPulse {
    0% { opacity: 0.35; stroke-width: 1.5; }
    100% { opacity: 0.85; stroke-width: 2.5; }
  }

  /* SVG THRUSTER FLAME ANIMATIONS (INSPIRED BY HOW WE WORK FLAME) */
  .bf-svg-flame-outer {
    transform-origin: -10px 0px;
    animation: flameOuterFlicker 0.22s ease-in-out infinite alternate;
  }

  .bf-svg-flame-mid {
    transform-origin: -10px 0px;
    animation: flameMidFlicker 0.18s ease-in-out infinite alternate 0.04s;
  }

  .bf-svg-flame-core {
    transform-origin: -10px 0px;
    animation: flameCoreFlicker 0.14s ease-in-out infinite alternate 0.07s;
  }

  @keyframes flameOuterFlicker {
    0% { transform: scaleX(0.85) scaleY(0.8); opacity: 0.82; }
    50% { transform: scaleX(1.45) scaleY(1.18); opacity: 1; }
    100% { transform: scaleX(1.1) scaleY(0.9); opacity: 0.9; }
  }

  @keyframes flameMidFlicker {
    0% { transform: scaleX(0.88) scaleY(0.85); opacity: 0.88; }
    50% { transform: scaleX(1.35) scaleY(1.12); opacity: 1; }
    100% { transform: scaleX(1.05) scaleY(0.92); opacity: 0.94; }
  }

  @keyframes flameCoreFlicker {
    0% { transform: scaleX(0.9); opacity: 0.88; }
    50% { transform: scaleX(1.28); opacity: 1; }
    100% { transform: scaleX(1.05); opacity: 0.95; }
  }

  .bf-svg-spark {
    animation: sparkDrift 0.38s linear infinite;
  }

  .bf-svg-spark.s1 { animation-delay: 0.0s; }
  .bf-svg-spark.s2 { animation-delay: 0.1s; }
  .bf-svg-spark.s3 { animation-delay: 0.2s; }
  .bf-svg-spark.s4 { animation-delay: 0.3s; }

  @keyframes sparkDrift {
    0% { transform: translate(0, 0) scale(1); opacity: 1; }
    100% { transform: translate(-20px, 0) scale(0); opacity: 0; }
  }

  /* LOGOS & METRICS GRID */
  .bf-trust-grid {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 10px;
    position: relative;
    z-index: 3;
  }

  .bf-trust-col {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 10px 14px;
    transition: transform 0.3s ease;
  }

  .bf-trust-col:hover {
    transform: translateY(-3px);
  }

  .bf-trust-logo-wrap {
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .bf-client-img {
    height: clamp(34px, 4vw, 48px);
    max-width: 170px;
    width: auto;
    object-fit: contain;
    filter: brightness(0) invert(1) opacity(0.92) drop-shadow(0 2px 10px rgba(255, 255, 255, 0.2));
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .bf-trust-col:hover .bf-client-img {
    filter: brightness(0) invert(1) opacity(1) drop-shadow(0 4px 18px rgba(239, 65, 54, 0.7));
  }

  .bf-trust-divider {
    width: 1px;
    height: 64px;
    background: rgba(255, 255, 255, 0.12);
    flex-shrink: 0;
  }

  .bf-stars-row {
    display: flex;
    align-items: center;
    gap: 4px;
    background: rgba(255, 184, 0, 0.08);
    border: 1px solid rgba(255, 184, 0, 0.22);
    padding: 4px 10px;
    border-radius: 999px;
  }

  .bf-star-icon {
    color: #FFB800;
    fill: #FFB800;
  }

  .bf-rating-num {
    font-family: "JetBrains Mono", monospace;
    font-size: 11px;
    font-weight: 800;
    color: #FFB800;
    margin-left: 4px;
    letter-spacing: 0.02em;
  }

  .bf-client-subtag {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 11.5px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.65);
    letter-spacing: 0.01em;
  }

  @media (max-width: 900px) {
    .bf-arch-track-svg {
      display: none;
    }
    .bf-trust-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px 20px;
    }
    .bf-trust-divider {
      display: none;
    }
  }

  @media (max-width: 520px) {
    .bf-trust-grid {
      grid-template-columns: 1fr;
      gap: 26px;
    }
  }
`;
