import React from "react";
import { Zap } from "lucide-react";

const MARQUEE_ITEMS = [
  "BRANDFORGE DIGITAL AGENCY",
  "SEARCH & GEO SUPREMACY",
  "SUB-SECOND 3D WEBGL",
  "PAID MEDIA ROAS LIFT",
  "VIRAL CREATOR NETWORKS",
  "ENTERPRISE BRAND FORGING",
];

export default function SplitMarqueeSection() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <section className="bf-split-marquee-root" aria-label="BrandForge Capabilities Marquee">
      <style>{styles}</style>

      {/* TOP HALF: Black Background with White Text */}
      <div className="bf-split-layer bf-layer-top" aria-hidden="true">
        <div className="bf-marquee-track">
          {items.map((item, index) => (
            <div key={`top-${index}`} className="bf-marquee-item">
              <Zap className="bf-marquee-icon" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM HALF: White Background with Black Text */}
      <div className="bf-split-layer bf-layer-bottom" aria-hidden="true">
        <div className="bf-marquee-track">
          {items.map((item, index) => (
            <div key={`bottom-${index}`} className="bf-marquee-item">
              <Zap className="bf-marquee-icon" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = `
.bf-split-marquee-root {
  position: relative;
  width: 100%;
  font-size: clamp(4.8rem, 13.5vw, 12.5rem);
  height: clamp(4.6rem, 13vw, 12rem);
  overflow: hidden;
  user-select: none;
  isolation: isolate;
}

/* Two stacked synchronized split layers */
.bf-split-layer {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
}

/* Top Half Layer: Black Background + White Text */
.bf-layer-top {
  background-color: #060509;
  color: #FFFFFF;
  clip-path: inset(0 0 50% 0);
  z-index: 1;
}

/* Bottom Half Layer: White Background + Pure Black Text */
.bf-layer-bottom {
  background-color: #FFFFFF;
  color: #000000;
  clip-path: inset(50% 0 0 0);
  z-index: 2;
}

/* Infinite Marquee Track */
.bf-marquee-track {
  display: flex;
  align-items: center;
  gap: 4.5rem;
  white-space: nowrap;
  will-change: transform;
  animation: bfSplitMarquee 32s linear infinite;
  padding-left: 4.5rem;
}

.bf-split-marquee-root:hover .bf-marquee-track {
  animation-play-state: paused;
}

.bf-marquee-item {
  display: inline-flex;
  align-items: center;
  gap: 1.2rem;
  font-family: 'Outfit', 'Plus Jakarta Sans', system-ui, sans-serif;
  font-weight: 900;
  font-size: 1em;
  line-height: 0.9;
  letter-spacing: -0.04em;
  text-transform: uppercase;
}

/* Small Zap Icon Symbol */
.bf-marquee-icon {
  width: 0.22em;
  height: 0.22em;
  color: #EF4136;
  flex-shrink: 0;
}

@keyframes bfSplitMarquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

@media (max-width: 768px) {
  .bf-split-marquee-root {
    font-size: clamp(3.2rem, 12vw, 5.5rem);
    height: clamp(3.0rem, 11.5vw, 5.2rem);
  }
  .bf-marquee-track {
    gap: 2.5rem;
    padding-left: 2.5rem;
    animation-duration: 22s;
  }
  .bf-marquee-item {
    gap: 0.7rem;
  }
}
`;
