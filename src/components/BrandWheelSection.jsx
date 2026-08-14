import React, { useEffect, useMemo, useRef } from "react";

const STYLES = `
.kexsio-brand-wheel-page {
  position: relative;
  width: 100%;
  padding: 10px 0 0px;
  overflow: hidden;
  display: grid;
  place-items: center;
  background: transparent;
  font-family: 'Outfit', 'Inter', sans-serif;
  user-select: none;
}

.kexsio-brand-wheel-stage {
  position: relative;
  width: min(1400px, 100%);
  height: 160px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1200px;
  perspective-origin: 50% 50%;
}

/* Soft side fade */
.kexsio-brand-wheel-stage::before,
.kexsio-brand-wheel-stage::after {
  content: "";
  position: absolute;
  z-index: 30;
  top: 0;
  width: 16%;
  height: 100%;
  pointer-events: none;
}

.kexsio-brand-wheel-stage::before {
  left: 0;
  background: linear-gradient(90deg, #FBFBFC 0%, rgba(251,251,252,0.92) 34%, rgba(251,251,252,0.36) 72%, transparent 100%);
}

.kexsio-brand-wheel-stage::after {
  right: 0;
  background: linear-gradient(270deg, #FBFBFC 0%, rgba(251,251,252,0.92) 34%, rgba(251,251,252,0.36) 72%, transparent 100%);
}

/* Center focus softness */
.kexsio-brand-wheel-focus {
  position: absolute;
  z-index: 1;
  left: 50%;
  top: 50%;
  width: 320px;
  height: 100px;
  border-radius: 50%;
  background: radial-gradient(ellipse, rgba(239, 65, 54, 0.08), transparent 68%);
  transform: translate(-50%, -50%);
  filter: blur(24px);
  pointer-events: none;
}

.kexsio-brand-wheel-track {
  position: relative;
  z-index: 3;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
}

.kexsio-brand-word {
  position: absolute;
  left: 50%;
  top: 50%;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
  transform-style: preserve-3d;
  will-change: transform, opacity, filter;
  display: flex;
  align-items: center;
  justify-content: center;
}

.kexsio-brand-logo-img {
  height: clamp(34px, 5.5vw, 64px);
  width: auto;
  max-width: 180px;
  object-fit: contain;
  filter: drop-shadow(0 4px 12px rgba(0,0,0,0.12));
}

@media (max-width: 900px) {
  .kexsio-brand-wheel-stage {
    height: 140px;
  }
  .kexsio-brand-logo-img {
    height: clamp(28px, 6vw, 48px);
  }
}

@media (max-width: 640px) {
  .kexsio-brand-wheel-stage {
    height: 120px;
  }
  .kexsio-brand-logo-img {
    height: clamp(24px, 7vw, 38px);
  }
}
`;

const BRANDS = [
  { name: "ThoughtSpace", logo: "/client-thoughtspace.png" },
  { name: "Sonic Prints", logo: "/client-sonicprints.png" },
  { name: "ThoughtFlows", logo: "/client-thoughtflows.png" },
  { name: "TalentEra", logo: "/client-talentera.png" },
  { name: "ThoughtSpace", logo: "/client-thoughtspace.png" },
  { name: "Sonic Prints", logo: "/client-sonicprints.png" },
  { name: "ThoughtFlows", logo: "/client-thoughtflows.png" },
  { name: "TalentEra", logo: "/client-talentera.png" },
];

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const lerp = (start, end, amount) => start + (end - start) * amount;
const smoothstep = (edge0, edge1, x) => {
  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
};

export default function BrandWheelSection() {
  const wordRefs = useRef([]);
  const stageRef = useRef(null);
  const progressRef = useRef(0);
  const frameRef = useRef(null);

  const brands = useMemo(() => BRANDS, []);

  useEffect(() => {
    let previousTime = performance.now();

    const animate = (time) => {
      const delta = Math.min((time - previousTime) / 1000, 0.05);
      previousTime = time;

      progressRef.current += delta * 0.25;

      const stageWidth =
        stageRef.current?.clientWidth || window.innerWidth;
      const isMobile = stageWidth < 900;

      const radiusX = isMobile
        ? Math.min(stageWidth * 0.72, 420)
        : Math.min(stageWidth * 0.48, 640);

      const radiusZ = isMobile ? 240 : 400;
      const verticalArc = isMobile ? 6 : 9;
      const count = brands.length;

      wordRefs.current.forEach((element, index) => {
        if (!element) return;

        const angle =
          (index / count) * Math.PI * 2 - progressRef.current;

        const sin = Math.sin(angle);
        const cos = Math.cos(angle);

        const frontness = clamp((cos + 1) / 2, 0, 1);
        const focusZone = smoothstep(0.48, 0.96, frontness);
        const sharpness = Math.pow(focusZone, 1.15);

        const x = sin * radiusX;
        const y = -cos * verticalArc + Math.sin(angle * 2) * 3;
        const z = cos * radiusZ;
        const rotateY = -sin * 32;
        const scale = lerp(0.65, 1.15, sharpness);
        const blur = lerp(12, 0, sharpness);
        const opacity = lerp(0.12, 1, Math.pow(frontness, 1.35));

        element.style.transform = `
          translate3d(
            calc(-50% + ${x}px),
            calc(-50% + ${y}px),
            ${z}px
          )
          rotateY(${rotateY}deg)
          scale(${scale})
        `;

        element.style.opacity = `${opacity}`;
        element.style.filter = `
          blur(${blur}px)
          contrast(${lerp(0.94, 1.05, sharpness)})
        `;

        element.style.zIndex = `${Math.round(1000 + z)}`;
      });

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [brands]);

  return (
    <div className="kexsio-brand-wheel-page">
      <style>{STYLES}</style>
      <section
        ref={stageRef}
        className="kexsio-brand-wheel-stage"
        aria-label="3D brand wheel logo carousel"
      >
        <div className="kexsio-brand-wheel-focus" />

        <div className="kexsio-brand-wheel-track">
          {brands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              ref={(element) => {
                wordRefs.current[index] = element;
              }}
              className="kexsio-brand-word"
            >
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="kexsio-brand-logo-img"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
