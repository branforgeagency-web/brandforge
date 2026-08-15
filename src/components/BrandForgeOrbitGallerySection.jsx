"use client";

import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { motion } from "framer-motion";

const FILTERS = [
  "All",
  "Branding",
  "Media & ROAS",
  "3D & Web",
  "Campaigns",
  "Strategy",
];

const GALLERY = [
  {
    title: "Farmer Fresh",
    label: "FMCG / Brand Packaging",
    image: "/farmer_fresh_mockup_1786784237105.jpg",
    categories: ["All", "Branding", "Campaigns"],
    position: "center 42%",
  },
  {
    title: "Jugg Jugg Ply",
    label: "Print & Digital Media",
    image: "/jugg_jugg_mockup_1786784296597.jpg",
    categories: ["All", "Branding", "Media & ROAS"],
    position: "center 48%",
  },
  {
    title: "Apex Cyber Portal",
    label: "3D Web / Lead Engine",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1100&q=86",
    categories: ["All", "3D & Web", "Strategy"],
    position: "center 28%",
  },
  {
    title: "Velocita Motors",
    label: "Luxury Auto / Campaign",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1100&q=86",
    categories: ["All", "Media & ROAS", "Campaigns"],
    position: "center 55%",
  },
  {
    title: "ThoughtSpace",
    label: "Coworking / Brand System",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1100&q=86",
    categories: ["All", "Branding", "3D & Web"],
    position: "center 58%",
  },
  {
    title: "Sonic Prints",
    label: "Print Studio / Rebrand",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1100&q=86",
    categories: ["All", "Branding", "Strategy"],
    position: "center 52%",
  },
  {
    title: "Kinetix Scale",
    label: "ROAS Lift / Ad Engine",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1100&q=86",
    categories: ["All", "Media & ROAS", "Strategy"],
    position: "center 60%",
  },
  {
    title: "Nova Creative Lab",
    label: "3D Digital Experience",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1100&q=86",
    categories: ["All", "Campaigns", "3D & Web"],
    position: "center 48%",
  },
  {
    title: "ThoughtFlows",
    label: "Academy / SEO & Identity",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1100&q=86",
    categories: ["All", "Branding", "Strategy"],
    position: "center 54%",
  },
  {
    title: "TalentEra Platform",
    label: "HR Tech / Digital Rebrand",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1100&q=86",
    categories: ["All", "3D & Web", "Campaigns"],
    position: "center 48%",
  },
  {
    title: "Chronos Watch Co.",
    label: "E-Commerce / ROAS Campaign",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1100&q=86",
    categories: ["All", "Media & ROAS", "Branding"],
    position: "center 52%",
  },
  {
    title: "Aura Sound Engine",
    label: "Audio Hardware / Packaging",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1100&q=86",
    categories: ["All", "Branding", "Campaigns"],
    position: "center 30%",
  },
];

export default function BrandForgeOrbitGallerySection({ onOpenModal }) {
  const rootRef = useRef(null);
  const stageRef = useRef(null);
  const trackRef = useRef(null);
  const resetRef = useRef(() => undefined);

  const [active, setActive] = useState("All");

  const visibleCount = useMemo(
    () =>
      GALLERY.filter((item) =>
        item.categories.includes(active),
      ).length,
    [active],
  );

  useEffect(() => {
    const root = rootRef.current;
    const stage = stageRef.current;
    const track = trackRef.current;

    if (!root || !stage || !track) return;

    let currentX = 0;
    let targetX = 0;
    let frame = 0;

    let dragging = false;
    let dragStartX = 0;
    let dragStartTarget = 0;

    const maxTravel = () =>
      Math.max(0, track.scrollWidth - root.clientWidth);

    const clamp = (value) =>
      Math.min(0, Math.max(-maxTravel(), value));

    const mapPointer = (clientX) => {
      const bounds = root.getBoundingClientRect();
      const ratio = Math.min(
        1,
        Math.max(0, (clientX - bounds.left) / bounds.width),
      );
      targetX = -maxTravel() * ratio;
    };

    const onPointerMove = (event) => {
      if (dragging) {
        targetX = clamp(dragStartTarget + event.clientX - dragStartX);
        return;
      }
      if (event.pointerType === "mouse") {
        mapPointer(event.clientX);
      }
    };

    const onPointerDown = (event) => {
      dragging = true;
      dragStartX = event.clientX;
      dragStartTarget = targetX;
      stage.dataset.dragging = "true";
      stage.setPointerCapture(event.pointerId);
    };

    const stopDrag = (event) => {
      dragging = false;
      stage.dataset.dragging = "false";
      if (stage.hasPointerCapture(event.pointerId)) {
        stage.releasePointerCapture(event.pointerId);
      }
    };

    resetRef.current = () => {
      currentX = 0;
      targetX = 0;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.07;
      track.style.transform = `translate3d(${currentX}px, -50%, 0)`;
      frame = requestAnimationFrame(animate);
    };

    const resizeObserver = new ResizeObserver(() => {
      targetX = clamp(targetX);
      currentX = clamp(currentX);
    });

    resizeObserver.observe(root);
    resizeObserver.observe(track);

    stage.addEventListener("pointermove", onPointerMove);
    stage.addEventListener("pointerdown", onPointerDown);
    stage.addEventListener("pointerup", stopDrag);
    stage.addEventListener("pointercancel", stopDrag);
    stage.addEventListener("pointerleave", stopDrag);

    animate();

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      resetRef.current = () => undefined;
      stage.removeEventListener("pointermove", onPointerMove);
      stage.removeEventListener("pointerdown", onPointerDown);
      stage.removeEventListener("pointerup", stopDrag);
      stage.removeEventListener("pointercancel", stopDrag);
      stage.removeEventListener("pointerleave", stopDrag);
    };
  }, []);

  useEffect(() => {
    resetRef.current();
  }, [active]);

  return (
    <section
      ref={rootRef}
      className="zsg-root"
      aria-label="BrandForge creative showcase gallery"
    >
      <style>{styles}</style>

      {/* NAV BAR ANIMATED ENTRANCE */}
      <motion.nav
        className="zsg-nav"
        aria-label="Gallery header"
        initial={{ opacity: 0, y: -25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <a className="zsg-brand" href="#top">
          BRANDFORGE AGENCY
        </a>

        <div className="zsg-links">
          <span>CREATIVE EXCELLENCE</span>
        </div>

        <span className="zsg-drag-label">MOVE / DRAG CURSOR</span>
      </motion.nav>

      {/* HEADING SCROLL REVEAL ANIMATION */}
      <motion.header
        className="zsg-heading"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          BRANDFORGE CREATIVE ARCHIVE · 2026
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          A GLIMPSE OF
          <br />
          CREATIVE EXCELLENCE.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {GALLERY.length.toString().padStart(2, "0")} VISUAL WORKS LOADED
        </motion.p>
      </motion.header>

      {/* GALLERY STAGE STAGGERED SCROLL ENTRANCE */}
      <motion.div
        ref={stageRef}
        className="zsg-stage"
        data-dragging="false"
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div ref={trackRef} className="zsg-track">
          {GALLERY.map((item, index) => {
            return (
              <motion.article
                key={`${item.title}-${index}`}
                className="zsg-card is-visible"
                onClick={onOpenModal}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + Math.min(index, 6) * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  "--height": `${190 + ((index * 43) % 120)}px`,
                  "--delay": `${Math.min(index, 8) * 18}ms`,
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  draggable={false}
                  loading={index < 6 ? "eager" : "lazy"}
                  style={{
                    objectPosition: item.position ?? "center",
                  }}
                />

                <span className="zsg-noise" aria-hidden="true" />
                <span className="zsg-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="zsg-card-copy">
                  <h2>{item.title}</h2>
                  <p>{item.label}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </motion.div>

      {/* FOOTER NOTE ANIMATED ENTRANCE */}
      <motion.div
        className="zsg-footer-note"
        aria-hidden="true"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 0.6, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <span>Scroll / drag with your cursor to explore works</span>
        <span className="zsg-line" />
      </motion.div>
    </section>
  );
}

const styles = `
.zsg-root {
  --pad: clamp(18px, 2.5vw, 40px);

  position: relative;
  width: 100%;
  height: 100vh;
  height: 100svh;
  min-height: 620px;
  overflow: hidden;
  isolation: isolate;

  background:
    radial-gradient(
      circle at 14% 15%,
      rgba(239, 65, 54, 0.15),
      transparent 30%
    ),
    radial-gradient(
      circle at 85% 78%,
      rgba(255, 77, 77, 0.12),
      transparent 32%
    ),
    #060509;

  color: #FFFFFF;
  font-family: "Outfit", "Plus Jakarta Sans", sans-serif;
}

.zsg-root *,
.zsg-root *::before,
.zsg-root *::after {
  box-sizing: border-box;
}

.zsg-root a {
  color: inherit;
  text-decoration: none;
}

.zsg-root::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  opacity: .14;
  pointer-events: none;

  background-image:
    linear-gradient(
      rgba(239, 65, 54, .12) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(239, 65, 54, .12) 1px,
      transparent 1px
    );

  background-size: 40px 40px;

  mask-image:
    linear-gradient(
      to bottom,
      black,
      transparent 85%
    );
}

.zsg-nav {
  position: absolute;
  inset: 0 0 auto;
  z-index: 10;

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;

  padding: var(--pad);

  font-size: 10px;
  font-weight: 800;
  letter-spacing: .15em;
  text-transform: uppercase;
}

.zsg-brand {
  justify-self: start;
  font-size: 12px;
  font-weight: 900;
  color: #EF4136;
  letter-spacing: .02em;
}

.zsg-links {
  display: flex;
  gap: clamp(20px, 3.2vw, 48px);
}

.zsg-links span {
  opacity: .65;
  font-size: 10px;
  letter-spacing: .15em;
}

.zsg-drag-label {
  justify-self: end;
  opacity: .5;
  color: rgba(255, 255, 255, 0.7);
}

.zsg-heading {
  position: absolute;
  top: clamp(86px, 13vh, 138px);
  left: var(--pad);
  z-index: 4;

  width:
    min(
      560px,
      calc(100% - var(--pad) * 2)
    );

  pointer-events: none;
}

.zsg-heading > span,
.zsg-heading > p {
  margin: 0;

  font-size: 9.5px;
  font-weight: 800;
  letter-spacing: .16em;
  text-transform: uppercase;

  color: #EF4136;
}

.zsg-heading h1 {
  margin: 12px 0 13px;
  max-width: 560px;

  font-size:
    clamp(40px, 5.5vw, 82px);

  line-height: .86;
  font-weight: 900;
  letter-spacing: -.05em;
  text-transform: uppercase;
  color: #FFFFFF;
}

.zsg-filters {
  position: absolute;
  top: clamp(112px, 17vh, 176px);
  right: var(--pad);
  z-index: 12;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 7px;
}

.zsg-filters button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  min-width: 124px;

  border:
    1px solid rgba(255,255,255,.14);

  border-radius: 999px;

  padding: 9px 12px 9px 15px;

  background:
    rgba(255,255,255,.05);

  color: #FFFFFF;

  font: inherit;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: .12em;
  text-transform: uppercase;

  cursor: pointer;
  backdrop-filter: blur(14px);

  transition:
    transform .25s ease,
    background .25s ease,
    border-color .25s ease,
    color .25s ease;
}

.zsg-filters button i {
  display: grid;
  place-items: center;

  min-width: 24px;
  height: 18px;

  border-radius: 999px;

  background:
    rgba(255,255,255,.12);

  font-style: normal;
  font-size: 8px;

  opacity: .75;
}

.zsg-filters button:hover {
  transform: translateX(-5px);
  border-color: rgba(239, 65, 54, 0.5);
}

.zsg-filters button.active {
  border-color: #EF4136;
  background: #EF4136;
  color: #FFFFFF;
  box-shadow: 0 4px 18px rgba(239, 65, 54, 0.4);
}

.zsg-filters button.active i {
  background: rgba(0,0,0,.25);
  color: #FFFFFF;
  opacity: 1;
}

.zsg-stage {
  position: absolute;
  inset: 0;
  z-index: 3;

  touch-action: pan-y;
  cursor: ew-resize;
}

.zsg-stage[data-dragging="true"] {
  cursor: grabbing;
}

.zsg-track {
  position: absolute;
  top: 69%;
  left: 0;

  display: flex;
  align-items: flex-start;

  padding: 0 var(--pad);

  transform:
    translate3d(0, -50%, 0);

  will-change: transform;
}

.zsg-card {
  --width:
    clamp(200px, 19vw, 290px);

  position: relative;
  flex: 0 0 auto;

  height: var(--height);
  min-height: 195px;
  max-height: 320px;

  overflow: hidden;

  border-radius: 12px;
  border: 1px solid rgba(239, 65, 54, 0.3);
  background: #0D0C12;

  box-shadow:
    0 25px 70px rgba(0,0,0,.6);

  transform-origin: left center;
  cursor: pointer;

  transition:
    width
      .78s
      cubic-bezier(.2,.84,.25,1)
      var(--delay),
    margin-right
      .78s
      cubic-bezier(.2,.84,.25,1)
      var(--delay),
    opacity
      .35s
      ease
      var(--delay),
    transform
      .65s
      cubic-bezier(.2,.84,.25,1),
    border-color
      .35s
      ease;

  will-change:
    width,
    margin-right,
    opacity;
}

.zsg-card.is-visible {
  width: var(--width);
  margin-right: 12px;
  opacity: 1;
}

.zsg-card.is-hidden {
  width: 0;
  margin-right: 0;
  opacity: 0;
  pointer-events: none;
}

.zsg-card img {
  width: 100%;
  height: 100%;
  display: block;

  object-fit: cover;

  filter:
    saturate(.98)
    contrast(1.04);

  transform: scale(1.02);

  transition:
    transform
      .65s
      cubic-bezier(.2,.84,.25,1),
    filter
      .65s
      ease;

  user-select: none;
}

.zsg-card::after {
  content: "";
  position: absolute;
  inset: 0;

  background:
    linear-gradient(
      to bottom,
      rgba(6,5,9,.05) 25%,
      rgba(6,5,9,.9) 100%
    );

  pointer-events: none;
}

.zsg-card:hover {
  transform: translateY(-10px);
  border-color: #EF4136;
}

.zsg-card:hover img {
  transform: scale(1.085);
  filter: saturate(1.15) contrast(1.05);
}

.zsg-index {
  position: absolute;
  top: 13px;
  left: 14px;
  z-index: 4;

  display: grid;
  place-items: center;

  width: 30px;
  height: 22px;

  border:
    1px solid rgba(239, 65, 54, 0.4);

  border-radius: 999px;

  background:
    rgba(6,5,9,.65);

  backdrop-filter: blur(8px);

  font-size: 8.5px;
  font-weight: 900;
  letter-spacing: .08em;
  color: #EF4136;
}

.zsg-card-copy {
  position: absolute;
  inset: auto 0 0;
  z-index: 4;

  padding: 18px;
}

.zsg-card-copy h2 {
  margin: 0;

  font-size:
    clamp(17px, 1.4vw, 22px);

  line-height: .95;
  letter-spacing: -.03em;
  font-weight: 900;
  text-transform: uppercase;
  color: #FFFFFF;
}

.zsg-card-copy p {
  margin: 7px 0 0;

  font-size: 8px;
  font-weight: 800;
  letter-spacing: .12em;
  text-transform: uppercase;

  color: #EF4136;
}

.zsg-footer-note {
  position: absolute;
  left: var(--pad);
  bottom: var(--pad);
  z-index: 4;

  display: flex;
  align-items: center;
  gap: 12px;

  font-size: 8.5px;
  font-weight: 800;
  letter-spacing: .13em;
  text-transform: uppercase;

  color: rgba(255, 255, 255, 0.6);
}

.zsg-line {
  width: 54px;
  height: 2px;

  background: #EF4136;
  transform-origin: left;

  animation:
    zsg-pulse
    1.8s
    ease-in-out
    infinite;
}

@keyframes zsg-pulse {
  0%,
  100% {
    transform: scaleX(.35);
    opacity: .4;
  }

  50% {
    transform: scaleX(1);
    opacity: 1;
  }
}

@media (max-width: 760px) {
  .zsg-root {
    min-height: 580px;
  }

  .zsg-nav {
    grid-template-columns: 1fr auto;
  }

  .zsg-links {
    display: none;
  }

  .zsg-heading {
    top: 82px;
  }

  .zsg-heading h1 {
    font-size:
      clamp(38px, 12vw, 58px);
  }

  .zsg-filters {
    top: 225px;
    right: auto;
    left: var(--pad);

    width:
      calc(100% - var(--pad) * 2);

    flex-direction: row;
    align-items: center;

    overflow-x: auto;
    scrollbar-width: none;

    padding-bottom: 4px;
  }

  .zsg-filters::-webkit-scrollbar {
    display: none;
  }

  .zsg-filters button {
    min-width: max-content;
    flex: 0 0 auto;
  }

  .zsg-filters button:hover {
    transform: none;
  }

  .zsg-track {
    top: 71%;
  }

  .zsg-card {
    --width: min(72vw, 270px);
  }

  .zsg-footer-note {
    display: none;
  }
}
`;
