import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BrandForgeBannerSection from "./BrandForgeBannerSection";

export default function RiftStageHero({
  onOpenModal,
  panels = [
    {
      eyebrow: "BRAND INSTINCT",
      text: "BrandForge shapes bold brand identity into market dominance — a digital marketing agency in Coimbatore built to make you unignorable.",
    },
    {
      eyebrow: "ROAS LIFT",
      text: "Hyper-scale ad campaigns and sub-second 3D web experiences, engineered in Coimbatore for maximum revenue and ROAS.",
    },
  ],
}) {
  const rootRef = useRef(null);
  const stageRef = useRef(null);
  const underlayRef = useRef(null);
  const leadRef = useRef(null);
  const shadeRef = useRef(null);
  const flashRef = useRef(null);
  const leftCopyRef = useRef(null);
  const rightCopyRef = useRef(null);
  const scrollCueRef = useRef(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const stage = stageRef.current;
    const lead = leadRef.current;
    const shade = shadeRef.current;
    const flash = flashRef.current;
    const leftCopy = leftCopyRef.current;
    const rightCopy = rightCopyRef.current;

    if (
      !root ||
      !stage ||
      !lead ||
      !shade ||
      !flash ||
      !leftCopy ||
      !rightCopy
    ) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.set(leftCopy, { xPercent: -18, opacity: 0 });
      gsap.set(rightCopy, { xPercent: 18, opacity: 0 });

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(lead, { display: "none" });
        return;
      }

      const sequence = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: stage,
          start: "top top",
          end: "+=320%",
          scrub: 0.9,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      sequence
        .to(
          lead,
          {
            clipPath: "inset(0% 48.5% 0% 48.5%)",
            duration: 1,
          },
          0
        )
        .to(shade, { opacity: 0.88, duration: 1 }, 0)
        .to(
          leftCopy,
          { xPercent: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          0.18
        )
        .to(
          rightCopy,
          { xPercent: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          0.18
        )
        .to(lead, { rotation: 68, duration: 0.8 }, 1)
        .to(
          lead,
          {
            scale: 0,
            rotation: 105,
            duration: 0.9,
            ease: "power2.in",
          },
          1.8
        )
        .to(flash, { opacity: 1, duration: 0.18 }, 1.8)
        /* TEXT PANELS SLIDE OUT AND VANISH */
        .to(
          leftCopy,
          { xPercent: 120, opacity: 0, duration: 0.85, ease: "power2.in" },
          2.15
        )
        .to(
          rightCopy,
          { xPercent: -120, opacity: 0, duration: 0.85, ease: "power2.in" },
          2.15
        );
    }, root);

    return () => context.revert();
  }, []);

  return (
    <div ref={rootRef} className="rr-root">
      <style>{styles}</style>

      <div className="rr-content">
        <section ref={stageRef} className="rr-stage">
          {/* UNDERLAY PANELS FOR BRAND STATEMENTS */}
          <div ref={underlayRef} className="rr-underlay">
            <article className="rr-panel rr-panel-left">
              <div ref={leftCopyRef} className="rr-panel-copy">
                <span>{panels[0].eyebrow}</span>
                <p>{panels[0].text}</p>
              </div>
            </article>

            <article className="rr-panel rr-panel-right">
              <div ref={rightCopyRef} className="rr-panel-copy">
                <span>{panels[1].eyebrow}</span>
                <p>{panels[1].text}</p>
              </div>
            </article>
          </div>

          {/* FIRST SECTION: BRANDFORGE 3D HYPERSPEED BANNER OVERLAY */}
          <div ref={leadRef} className="rr-lead">
            <BrandForgeBannerSection onOpenModal={onOpenModal} />
            <div ref={shadeRef} className="rr-shade" />
            <div ref={flashRef} className="rr-flash" />
          </div>

          <div ref={scrollCueRef} className="rr-scroll-cue" aria-hidden="true">
            <span>Scroll to reveal</span>
            <i />
          </div>
        </section>
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

.rr-root * {
  box-sizing: border-box;
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
.rr-lead {
  position: absolute;
  inset: 0;
}

.rr-finale {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.rr-underlay {
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  background:
    radial-gradient(circle at 50% 50%, rgba(239, 65, 54, 0.08), transparent 34%),
    var(--ink);
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
  font-size: 0.75rem;
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
  color: rgba(255, 255, 255, 0.82);
  text-transform: uppercase;
}

.rr-finale {
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  background: var(--ink);
}

.rr-finale::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(90deg, rgba(6, 5, 9, 0.34), rgba(6, 5, 9, 0.08), rgba(6, 5, 9, 0.42));
  pointer-events: none;
}

.rr-finale-image {
  min-width: 0;
  overflow: hidden;
  will-change: clip-path;
}

.rr-finale-top {
  clip-path: inset(0% 0% 100% 0%);
}

.rr-finale-bottom {
  clip-path: inset(100% 0% 0% 0%);
}

.rr-root img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  user-select: none;
}

.rr-finale-top img {
  object-position: center 35%;
}

.rr-finale-bottom img {
  object-position: center 58%;
}

.rr-final-title {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  width: min(92%, 1050px);
  margin: 0;
  transform: translate(-50%, -50%);
  text-align: center;
  font-family: "Outfit", sans-serif;
  font-size: clamp(3.0rem, 8.5vw, 9.5rem);
  font-weight: 900;
  line-height: 0.86;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  text-wrap: balance;
  color: var(--paper);
  text-shadow: 0 10px 40px rgba(0, 0, 0, 0.9);
}

.rr-line-mask {
  display: block;
  overflow: hidden;
}

.rr-line {
  display: block;
  will-change: transform, opacity;
}

.rr-lead {
  z-index: 3;
  overflow: hidden;
  transform-origin: center;
  clip-path: inset(0% 0% 0% 0%);
  background: var(--ink);
  will-change: clip-path, transform;
}

.rr-image-vignette,
.rr-shade,
.rr-flash {
  position: absolute;
  inset: 0;
  pointer-events: none;
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

  .rr-finale {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }

  .rr-final-title {
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
