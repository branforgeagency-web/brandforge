import React, { useLayoutEffect, useRef } from "react";

const splitChars = (text, markFirst = false) =>
  Array.from(text).map((char, index) => (
    <span
      className={`sf-char${markFirst && index === 0 ? " sf-first" : ""}`}
      key={`${char}-${index}`}
    >
      <span>{char === " " ? "\u00A0" : char}</span>
    </span>
  ));

const splitWords = (text) => {
  const words = text.split(" ");

  return words.map((word, index) => (
    <span className="sf-word" key={`${word}-${index}`}>
      {word}
      {index < words.length - 1 ? "\u00A0" : ""}
    </span>
  ));
};

export default function SplitRevealHero({
  studio = "Brandforge Engine",
  numeral = "01",
  logo = "BRANDFORGE",
  cardTitle = "BRANDFORGE",
  tags = [
    "Generative GEO Search",
    "Lethal Paid Media Lift",
    "Sub-Second 3D WebGL",
  ],
  heroImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2200&q=90",
  menuLabel = "Menu",
  footerLeft = "Scroll To Explore",
  footerRight = "High-Octane Digital Marketing Agency",
  className = "",
  onOpenModal,
}) {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const animations = [];
    const timers = [];
    let frame = 0;
    let cancelled = false;

    const mobile = root.clientWidth <= 1000;
    const ease = "cubic-bezier(.8,0,.3,1)";

    const select = (selector) =>
      Array.from(root.querySelectorAll(selector));

    const animate = (targets, frames, options) => {
      const elements = Array.isArray(targets) ? targets : [targets];

      elements.forEach((element) => {
        const animation = element.animate(frames, {
          fill: "forwards",
          ...options,
        });

        animations.push(animation);
      });
    };

    const later = (delay, callback) => {
      timers.push(
        window.setTimeout(() => {
          if (!cancelled) callback();
        }, delay)
      );
    };

    const covers = select(".sf-cover");
    const tagsLayer = root.querySelector(".sf-tags");
    const scene = root.querySelector(".sf-scene");
    const card = root.querySelector(".sf-card");

    if (reducedMotion) {
      covers.forEach((cover) => {
        cover.style.display = "none";
      });

      if (tagsLayer) tagsLayer.style.display = "none";
      if (scene) scene.style.clipPath = "inset(0)";
      if (card) card.style.clipPath = "inset(0)";

      select(".sf-card .sf-char > span").forEach((character) => {
        character.style.transform = "translate3d(0,0,0)";
      });

      return;
    }

    const startTimeline = () => {
      if (cancelled) return;

      const introCharacters = select(".sf-cover .sf-intro .sf-char > span");
      const remainingIntroCharacters = select(
        ".sf-cover .sf-intro .sf-char:not(.sf-first) > span"
      );
      const firstCharacters = select(".sf-cover .sf-intro .sf-first");
      const numeralCharacters = select(".sf-cover .sf-number .sf-char");
      const numeralInnerCharacters = select(
        ".sf-cover .sf-number .sf-char > span"
      );
      const tagWords = select(".sf-tag .sf-word");
      const cardCharacters = select(".sf-card .sf-char > span");
      const topCover = root.querySelector(".sf-top");
      const bottomCover = root.querySelector(".sf-bottom");

      tagWords.forEach((word, index) => {
        animate(
          word,
          [
            { transform: "translate3d(0,-110%,0)" },
            { transform: "translate3d(0,0,0)" },
          ],
          {
            duration: 720,
            delay: 420 + index * 85,
            easing: ease,
          }
        );
      });

      introCharacters.forEach((character, index) => {
        animate(
          character,
          [
            { transform: "translate3d(0,-110%,0)" },
            { transform: "translate3d(0,0,0)" },
          ],
          {
            duration: 720,
            delay: 420 + index * 45,
            easing: ease,
          }
        );
      });

      remainingIntroCharacters.forEach((character, index) => {
        animate(
          character,
          [
            { transform: "translate3d(0,0,0)" },
            { transform: "translate3d(0,110%,0)" },
          ],
          {
            duration: 720,
            delay: 1920 + index * 45,
            easing: ease,
          }
        );
      });

      numeralInnerCharacters.forEach((character, index) => {
        animate(
          character,
          [
            { transform: "translate3d(0,-110%,0)" },
            { transform: "translate3d(0,0,0)" },
          ],
          {
            duration: 720,
            delay: 2420 + index * 70,
            easing: ease,
          }
        );
      });

      firstCharacters.forEach((character) => {
        animate(
          character,
          [
            {
              transform: "translate3d(0,0,0) scale(1)",
              fontWeight: 600,
              offset: 0,
            },
            {
              transform: `translate3d(${mobile ? "6rem" : "16rem"},0,0) scale(1)`,
              fontWeight: 600,
              offset: 0.57,
            },
            {
              transform: `translate3d(${mobile ? "5.5rem" : "15rem"},${
                mobile ? "-0.15rem" : "-0.35rem"
              },0) scale(.75)`,
              fontWeight: 900,
              offset: 1,
            },
          ],
          {
            duration: 1700,
            delay: 3420,
            easing: ease,
          }
        );
      });

      numeralCharacters.forEach((character) => {
        animate(
          character,
          [
            {
              transform: "translate3d(0,0,0)",
              fontSize: "inherit",
              fontWeight: 600,
              offset: 0,
            },
            {
              transform: `translate3d(${mobile ? "-3rem" : "-8rem"},0,0)`,
              fontSize: "inherit",
              fontWeight: 600,
              offset: 0.57,
            },
            {
              transform: `translate3d(${mobile ? "-3rem" : "-8rem"},0,0)`,
              fontSize: mobile ? "6rem" : "14rem",
              fontWeight: 500,
              offset: 1,
            },
          ],
          {
            duration: 1700,
            delay: 3420,
            easing: ease,
          }
        );
      });

      later(4920, () => {
        if (topCover) topCover.style.clipPath = "inset(0 0 50% 0)";
        if (bottomCover) bottomCover.style.clipPath = "inset(50% 0 0 0)";

        if (scene) {
          animate(
            scene,
            [
              { clipPath: "polygon(0 48%,0 48%,0 52%,0 52%)" },
              { clipPath: "polygon(0 48%,100% 48%,100% 52%,0 52%)" },
            ],
            { duration: 980, easing: ease }
          );
        }
      });

      tagWords.forEach((word, index) => {
        animate(
          word,
          [
            { transform: "translate3d(0,0,0)" },
            { transform: "translate3d(0,110%,0)" },
          ],
          {
            duration: 720,
            delay: 5420 + index * 85,
            easing: ease,
          }
        );
      });

      later(5920, () => {
        if (topCover) {
          animate(
            topCover,
            [
              { transform: "translate3d(0,0,0)" },
              { transform: "translate3d(0,-50%,0)" },
            ],
            { duration: 980, easing: ease }
          );
        }

        if (bottomCover) {
          animate(
            bottomCover,
            [
              { transform: "translate3d(0,0,0)" },
              { transform: "translate3d(0,50%,0)" },
            ],
            { duration: 980, easing: ease }
          );
        }

        if (scene) {
          animate(
            scene,
            [
              { clipPath: "inset(48% 0)" },
              { clipPath: "inset(0)" },
            ],
            { duration: 980, easing: ease }
          );
        }
      });

      later(6170, () => {
        if (card) {
          animate(
            card,
            [
              { clipPath: "inset(50% 0)" },
              { clipPath: "inset(0)" },
            ],
            { duration: 720, easing: ease }
          );
        }
      });

      cardCharacters.forEach((character, index) => {
        animate(
          character,
          [
            { transform: "translate3d(0,110%,0)" },
            { transform: "translate3d(0,0,0)" },
          ],
          {
            duration: 720,
            delay: 6420 + index * 45,
            easing: ease,
          }
        );
      });
    };

    frame = window.requestAnimationFrame(() => {
      frame = window.requestAnimationFrame(startTimeline);
    });

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
      animations.forEach((animation) => animation.cancel());
      timers.forEach(window.clearTimeout);
    };
  }, []);

  const Cover = ({ position }) => (
    <div className={`sf-cover sf-${position}`} aria-hidden="true">
      <div className="sf-intro">
        <h1>{splitChars(studio, true)}</h1>
      </div>

      <div className="sf-number">
        <h1>{splitChars(numeral)}</h1>
      </div>
    </div>
  );

  return (
    <section ref={rootRef} className={`sf-root ${className}`}>
      <style>{styles}</style>

      <Cover position="bottom" />
      <Cover position="top" />

      <div className="sf-tags" aria-hidden="true">
        {tags.map((tag, index) => (
          <p className={`sf-tag sf-tag-${index + 1}`} key={tag}>
            {splitWords(tag)}
          </p>
        ))}
      </div>

      <div className="sf-scene">
        <img
          className="sf-image"
          src={heroImage}
          alt="BrandForge High-Octane Digital Marketing Intelligence"
          draggable={false}
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />

        <div className="sf-shade" />

        <nav className="sf-nav">
          <div className="sf-logo-brand flex items-center gap-2">
            <span className="sf-brand-zap text-[#FF4D4D] font-extrabold text-xl">✦</span>
            <strong>{logo}</strong>
          </div>
          <button
            type="button"
            className="sf-menu-btn text-xs uppercase font-bold tracking-widest px-4 py-2 bg-white/10 hover:bg-[#FF4D4D] rounded-full transition-all cursor-pointer"
            onClick={onOpenModal}
          >
            {menuLabel}
          </button>
        </nav>

        <div className="sf-card cursor-pointer" onClick={onOpenModal}>
          <div className="sf-card-inner">
            <span className="sf-card-tag">SYSTEM v4.8</span>
            <h1>{splitChars(cardTitle)}</h1>
            <p className="sf-card-sub">MARKET DOMINANCE ENGINE</p>
          </div>
        </div>

        <footer className="sf-footer">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF4D4D] animate-ping" />
            {footerLeft}
          </span>
          <span>{footerRight}</span>
        </footer>
      </div>
    </section>
  );
}

const styles = `
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700;800&display=swap");

.sf-root,
.sf-root * {
  box-sizing: border-box;
}

.sf-root {
  position: relative;
  width: 100%;
  height: 100svh;
  min-height: 560px;
  overflow: hidden;
  isolation: isolate;
  background: #060509;
  color: #fff;
  font-family: "Outfit", "Inter", sans-serif;
}

.sf-root h1,
.sf-root p {
  margin: 0;
  text-transform: uppercase;
}

.sf-cover,
.sf-tags,
.sf-scene {
  position: absolute;
  inset: 0;
}

.sf-cover {
  z-index: 4;
  overflow: hidden;
  background: #060509;
  backface-visibility: hidden;
  transform: translate3d(0,0,0);
  will-change: transform, clip-path;
  contain: layout paint;
}

.sf-bottom {
  z-index: 3;
}

.sf-top {
  z-index: 4;
}

.sf-tags {
  z-index: 5;
  pointer-events: none;
}

.sf-intro,
.sf-number {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%,-50%,0);
}

.sf-intro {
  width: 100%;
  text-align: center;
}

.sf-number {
  left: calc(50% + 10rem);
}

.sf-intro h1,
.sf-number h1 {
  font-size: clamp(2.5rem, 6.3vw, 6.5rem);
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.03em;
}

.sf-char {
  display: inline-block;
  overflow: hidden;
  vertical-align: top;
  backface-visibility: hidden;
  will-change: transform, font-size;
}

.sf-char > span {
  display: inline-block;
  backface-visibility: hidden;
  will-change: transform;
}

.sf-first > span {
  color: #FF4D4D;
}

/* Critical first-frame states: prevents the title and number from flashing. */
.sf-cover .sf-intro .sf-char > span,
.sf-cover .sf-number .sf-char > span {
  transform: translate3d(0,-110%,0);
}

.sf-first {
  transform-origin: top left;
}

.sf-tag {
  position: absolute;
  width: max-content;
  overflow: hidden;
  color: #FF4D4D;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.14em;
}

.sf-word {
  display: inline-block;
  transform: translate3d(0,-110%,0);
  backface-visibility: hidden;
  will-change: transform;
}

.sf-tag-1 {
  top: 15%;
  left: 15%;
}

.sf-tag-2 {
  bottom: 15%;
  left: 25%;
}

.sf-tag-3 {
  right: 15%;
  bottom: 30%;
}

.sf-scene {
  z-index: 2;
  overflow: hidden;
  clip-path: polygon(0 48%,0 48%,0 52%,0 52%);
  backface-visibility: hidden;
  transform: translate3d(0,0,0);
  will-change: clip-path;
  contain: layout paint;
}

.sf-image,
.sf-shade {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.sf-image {
  object-fit: cover;
  transform: translate3d(0,0,0) scale(1.001);
  backface-visibility: hidden;
}

.sf-shade {
  background: linear-gradient(
    180deg,
    rgba(6, 5, 9, 0.65),
    rgba(6, 5, 9, 0.2) 45%,
    rgba(6, 5, 9, 0.85)
  );
}

.sf-nav,
.sf-footer {
  position: absolute;
  left: 0;
  z-index: 2;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 2rem clamp(1.5rem, 5vw, 4rem);
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
}

.sf-nav {
  top: 0;
}

.sf-nav strong {
  font-size: 22px;
  font-weight: 900;
  letter-spacing: 0.04em;
  color: #ffffff;
}

.sf-footer {
  bottom: 0;
  color: rgba(255, 255, 255, 0.7);
}

.sf-card {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  display: flex;
  width: min(32%, 520px);
  height: 68%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transform: translate3d(-50%,-50%,0);
  background: #0e0b12;
  border: 1px solid rgba(255, 77, 77, 0.35);
  box-shadow: 0 20px 80px rgba(0, 0, 0, 0.8);
  clip-path: inset(50% 0);
  backface-visibility: hidden;
  will-change: clip-path;
  contain: layout paint;
  border-radius: 24px;
  padding: 2rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.sf-card:hover {
  border-color: #FF4D4D;
  box-shadow: 0 0 50px rgba(255, 77, 77, 0.3);
}

.sf-card-inner {
  text-align: center;
}

.sf-card-tag {
  display: inline-block;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.18em;
  color: #FF4D4D;
  margin-bottom: 12px;
}

.sf-card h1 {
  width: 100%;
  text-align: center;
  color: #ffffff;
  font-size: clamp(2.2rem, 3.2vw, 3.4rem);
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.02em;
}

.sf-card-sub {
  margin-top: 14px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: rgba(255, 255, 255, 0.5);
}

.sf-card .sf-char > span {
  transform: translate3d(0,110%,0);
}

@media (max-width: 1000px) {
  .sf-number {
    left: calc(50% + 4rem);
  }

  .sf-card {
    width: 78%;
  }

  .sf-nav,
  .sf-footer {
    padding: 1.4rem;
  }

  .sf-tag-1 {
    left: 8%;
  }

  .sf-tag-2 {
    left: 12%;
  }

  .sf-tag-3 {
    right: 8%;
  }
}

@media (max-width: 560px) {
  .sf-root {
    min-height: 540px;
  }

  .sf-card {
    width: 82%;
    height: 64%;
  }

  .sf-nav,
  .sf-footer {
    padding: 1rem;
    font-size: 11px;
  }

  .sf-nav strong {
    font-size: 18px;
  }

  .sf-tag {
    font-size: 10px;
  }

  .sf-tag-1 {
    top: 18%;
    left: 7%;
  }

  .sf-tag-2 {
    bottom: 18%;
    left: 10%;
  }

  .sf-tag-3 {
    right: 7%;
    bottom: 26%;
  }
}
`;
