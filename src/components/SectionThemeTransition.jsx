import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* ─── Dark → light theme bridge ─────────────────────────────────────
   Sits between the dark 12-services stack and the light testimonials
   section. Reuses the same scroll-scrubbed clip-path wipe technique as
   RiftStageHero's opening sequence (GSAP + ScrollTrigger, no pin here):
   a flat dark layer sits over the full light gradient and is wiped away
   from the bottom up as the user scrolls through, so the page eases
   from dark into light in step with the scroll instead of cutting.
──────────────────────────────────────────────────────────────────── */
export default function SectionThemeTransition() {
  const rootRef = useRef(null);
  const darkRef = useRef(null);
  const lineRef = useRef(null);
  const sunRef = useRef(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const darkLayer = darkRef.current;
    const line = lineRef.current;
    const sun = sunRef.current;

    if (!root || !darkLayer || !line || !sun) return;

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(darkLayer, { clipPath: "inset(0% 0% 100% 0%)" });
        gsap.set(line, { scaleX: 1 });
        gsap.set(sun, { y: "-20%", scale: 0.9, backgroundColor: "#FFFFFF" });
        return;
      }

      gsap.set(darkLayer, { clipPath: "inset(0% 0% 0% 0%)" });
      gsap.set(line, { scaleX: 0, transformOrigin: "50% 50%" });
      gsap.set(sun, { y: "70%", scale: 0.55, backgroundColor: "#EF4136" });

      const sequence = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: root,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      });

      sequence
        .to(darkLayer, { clipPath: "inset(0% 0% 100% 0%)", duration: 1 }, 0)
        .to(sun, { y: "-20%", scale: 1.1, duration: 1, ease: "power1.inOut" }, 0)
        .to(sun, { backgroundColor: "#FF9A5A", duration: 0.5 }, 0.25)
        .to(sun, { backgroundColor: "#FFFFFF", duration: 0.5 }, 0.75)
        .to(line, { scaleX: 1, duration: 0.6 }, 0.2);

      ScrollTrigger.refresh();
    }, root);

    return () => context.revert();
  }, []);

  return (
    <div ref={rootRef} className="theme-bridge" aria-hidden="true">
      <div className="theme-bridge-light" />
      <div ref={darkRef} className="theme-bridge-dark" />

      <div ref={lineRef} className="theme-bridge-line" />
      <div ref={sunRef} className="theme-bridge-sun" />

      <style>{styles}</style>
    </div>
  );
}

const styles = `
  .theme-bridge {
    position: relative;
    width: 100%;
    height: clamp(180px, 22vw, 320px);
    overflow: hidden;
  }

  .theme-bridge-light,
  .theme-bridge-dark {
    position: absolute;
    inset: 0;
  }

  .theme-bridge-light {
    z-index: 0;
    background: linear-gradient(
      to bottom,
      #030305 0%,
      #0c0a0e 16%,
      #241c1e 34%,
      #4d3934 52%,
      #8c766a 68%,
      #cdc2b3 84%,
      #F7F5F1 100%
    );
  }

  .theme-bridge-dark {
    z-index: 1;
    background: #030305;
    will-change: clip-path;
  }

  .theme-bridge-line {
    position: absolute;
    z-index: 3;
    left: 8%;
    right: 8%;
    top: 50%;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      rgba(239, 65, 54, 0.7) 30%,
      rgba(255, 255, 255, 0.9) 50%,
      rgba(239, 65, 54, 0.7) 70%,
      transparent
    );
    box-shadow: 0 0 24px rgba(239, 65, 54, 0.45);
  }

  .theme-bridge-sun {
    position: absolute;
    z-index: 3;
    left: 50%;
    top: 50%;
    width: 14px;
    height: 14px;
    margin: -7px 0 0 -7px;
    border-radius: 50%;
    box-shadow: 0 0 28px 10px rgba(255, 150, 90, 0.4);
  }

  @media (max-width: 600px) {
    .theme-bridge { height: clamp(140px, 34vw, 220px); }
  }
`;
