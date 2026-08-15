import React from "react";
import { motion } from "framer-motion";
import PlumeFieldSection from "./PlumeFieldSection";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2200&q=90";

export default function RiftStageHero({
  onOpenModal,
  leadImage = DEFAULT_IMAGE,
  openingTitle = "WE FORGE DOMINANT BRANDS & HYPER SCALED MEDIA",
  panels = [
    {
      eyebrow: "BRAND INSTINCT",
      text: "A REVOLUTIONARY SIGNAL BEGINS WITH A BOLD CREATIVE INSTINCT — SHAPING IDENTITY INTO MARKET DOMINANCE.",
    },
    {
      eyebrow: "ROAS LIFT",
      text: "HYPER-SCALE AD CAMPAIGNS AND SUB-SECOND 3D WEB EXPERIENCES BUILT FOR MAXIMUM REVENUE.",
    },
  ],
}) {
  return (
    <div className="rr-root">
      <style>{styles}</style>

      {/* STAGE CONTAINER WITH REAL-TIME GPU FLUID SIMULATION */}
      <div className="rr-stage-hero">
        <div className="rr-fluid-layer">
          <PlumeFieldSection onOpenModal={onOpenModal} />
        </div>
      </div>

      {/* STRATEGY UNDERLAY PANELS */}
      <div className="rr-underlay-wrap">
        <div className="rr-underlay">
          <article className="rr-panel rr-panel-left">
            <motion.div
              className="rr-panel-copy"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              <span>{panels[0].eyebrow}</span>
              <p>{panels[0].text}</p>
            </motion.div>
          </article>

          <article className="rr-panel rr-panel-right">
            <motion.div
              className="rr-panel-copy"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span>{panels[1].eyebrow}</span>
              <p>{panels[1].text}</p>
            </motion.div>
          </article>
        </div>
      </div>
    </div>
  );
}

const styles = `
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap");

.rr-root {
  --ink: #060509;
  --paper: #FFFFFF;
  --acid: #EF4136;
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  background: var(--ink);
  color: var(--paper);
  font-family: "Plus Jakarta Sans", sans-serif;
}

.rr-stage-hero {
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background: var(--ink);
}

.rr-bg-layer {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.rr-hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.32;
  filter: contrast(1.15) brightness(0.85);
}

.rr-fluid-layer {
  position: absolute;
  inset: 0;
  z-index: 2;
}

.rr-root * {
  box-sizing: border-box;
}

.rr-root.rr-embedded {
  height: 100vh;
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-width: none;
}

.rr-root.rr-embedded::-webkit-scrollbar {
  display: none;
}

.rr-content {
  position: relative;
  width: 100%;
}

.rr-stage {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 560px;
  overflow: hidden;
}

.rr-underlay,
.rr-finale,
.rr-lead {
  position: absolute;
  inset: 0;
}

.rr-underlay {
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  background: var(--ink);
  color: var(--paper);
}

.rr-underlay::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(90deg, transparent calc(50% - 0.5px), rgba(239, 65, 54, 0.25) 50%, transparent calc(50% + 0.5px)),
    linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 100% 100%, 100% 8rem;
}

.rr-panel {
  display: flex;
  align-items: center;
  padding: clamp(1.25rem, 3vw, 3rem);
  overflow: hidden;
}

.rr-panel-right {
  justify-content: flex-end;
  text-align: right;
  border-left: 1px solid rgba(239, 65, 54, 0.25);
}

.rr-panel-copy {
  position: relative;
  z-index: 1;
  width: min(32rem, 80%);
  will-change: transform, opacity;
}

.rr-panel-copy::before {
  content: "";
  display: block;
  width: clamp(2.5rem, 5vw, 5rem);
  height: 3px;
  margin-bottom: clamp(1rem, 2vw, 1.75rem);
  background: var(--acid);
}

.rr-panel-right .rr-panel-copy::before {
  margin-left: auto;
}

.rr-panel-copy span,
.rr-scroll-cue span {
  display: block;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.rr-panel-copy span {
  margin-bottom: 0.85rem;
  color: var(--acid);
  font-family: "Outfit", sans-serif;
  font-size: clamp(2.8rem, 6vw, 6.5rem);
  font-weight: 900;
  line-height: 0.85;
  letter-spacing: -0.03em;
}

.rr-panel-copy p {
  margin: 0;
  font-size: clamp(0.9rem, 1.2vw, 1.15rem);
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 600;
  text-transform: uppercase;
}

.rr-finale {
  z-index: 2;
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: var(--ink);
}

.rr-root img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  user-select: none;
}

.rr-lead {
  z-index: 3;
  overflow: hidden;
  transform-origin: center;
  clip-path: inset(0% 0% 0% 0%);
  background: var(--ink);
  will-change: clip-path, transform;
}

.rr-lead h1 {
  position: absolute;
  z-index: 2;
  left: 50%;
  bottom: clamp(2rem, 5vw, 5rem);
  width: min(94%, 1400px);
  margin: 0;
  transform: translateX(-50%);
  text-align: center;
  font-family: "Outfit", sans-serif;
  font-size: clamp(3.0rem, 8.5vw, 9.5rem);
  font-weight: 900;
  line-height: 0.86;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  text-wrap: balance;
  color: #FFFFFF;
  text-shadow: 0 10px 40px rgba(0, 0, 0, 0.9);
}

.rr-image-vignette,
.rr-shade,
.rr-flash {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.rr-image-vignette {
  z-index: 1;
  background:
    linear-gradient(180deg, rgba(6, 5, 9, 0.25) 30%, rgba(6, 5, 9, 0.9) 100%),
    radial-gradient(circle at 50% 40%, transparent 20%, rgba(6, 5, 9, 0.6) 100%);
}

.rr-shade {
  z-index: 4;
  opacity: 0;
  background: var(--ink);
  will-change: opacity;
}

.rr-flash {
  z-index: 5;
  opacity: 0;
  background: var(--acid);
  mix-blend-mode: screen;
  will-change: opacity;
}

.rr-scroll-cue {
  position: absolute;
  z-index: 5;
  right: clamp(1rem, 2.5vw, 2.5rem);
  bottom: clamp(1rem, 2.5vw, 2.5rem);
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--paper);
  mix-blend-mode: difference;
  pointer-events: none;
}

.rr-scroll-cue i {
  width: 2.75rem;
  height: 2px;
  overflow: hidden;
  background: var(--acid);
  transform-origin: left;
  animation: rr-pulse 1.8s ease-in-out infinite;
}

@keyframes rr-pulse {
  0%, 100% { transform: scaleX(0.25); opacity: 0.45; }
  50% { transform: scaleX(1); opacity: 1; }
}

@media (max-width: 760px) {
  .rr-stage {
    min-height: 520px;
  }

  .rr-underlay {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }

  .rr-panel {
    align-items: flex-start;
    padding: 1.25rem;
  }

  .rr-panel-left {
    padding-top: 12vh;
  }

  .rr-panel-right {
    align-items: flex-end;
    border-top: 1px solid rgba(239, 65, 54, 0.25);
    border-left: 0;
    padding-bottom: 12vh;
  }

  .rr-panel-copy {
    width: min(90%, 24rem);
  }

  .rr-lead h1 {
    bottom: 12vh;
    font-size: clamp(3.0rem, 14vw, 5.5rem);
  }

  .rr-scroll-cue {
    right: 1rem;
    bottom: 1rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .rr-scroll-cue i {
    animation: none;
  }
}
`;
