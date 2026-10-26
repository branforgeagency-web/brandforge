"use client";

import React, { useRef, useEffect, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SwapArrow from "./SwapArrow";

if (typeof globalThis !== "undefined" && globalThis.window) {
  gsap.registerPlugin(ScrollTrigger);
}

const DIRECTIONS = ["up", "down", "left", "right"];
const getRandomDirection = () =>
  DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];

const getDirectionOffset = (dir, dist = 110) => {
  switch (dir) {
    case "up":
      return { x: 0, y: -dist };
    case "down":
      return { x: 0, y: dist };
    case "left":
      return { x: -dist, y: 0 };
    case "right":
      return { x: dist, y: 0 };
    default:
      return { x: 0, y: -dist };
  }
};

const getOppositeDirection = (dir) => {
  switch (dir) {
    case "up":
      return "down";
    case "down":
      return "up";
    case "left":
      return "right";
    case "right":
      return "left";
    default:
      return "down";
  }
};

const triggerPortalLoop = (letterEl) => {
  if (!letterEl || gsap.isTweening(letterEl)) return;
  const dir = getRandomDirection();
  const outOffset = getDirectionOffset(dir, 115);
  const inOffset = getDirectionOffset(getOppositeDirection(dir), 115);

  gsap
    .timeline()
    .to(letterEl, {
      x: `${outOffset.x}%`,
      y: `${outOffset.y}%`,
      duration: 0.22,
      ease: "power2.in",
    })
    .set(letterEl, {
      x: `${inOffset.x}%`,
      y: `${inOffset.y}%`,
    })
    .to(letterEl, {
      x: "0%",
      y: "0%",
      duration: 0.38,
      ease: "power2.out",
    });
};

const STATEMENT_TEXT =
  "Search engines are transitioning from 10 blue links to AI synthesized answers. Traditional agencies optimize for obsolete algorithms. BrandForge engineers deep entity schema, high-trust seed sets, and neural vector consensus so your business is cited as the undisputed market authority.";

const HIGHLIGHT_WORDS = [
  "10", "blue", "links", "ai", "synthesized", "answers.",
  "deep", "entity", "schema,", "neural", "vector", "consensus",
  "undisputed", "market", "authority.", "performance", "revenue", "scale"
];

export default function SeoSajanPhilosophy({ data, onOpenModal }) {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const textRef = useRef(null);
  const wordsRef = useRef([]);
  const lettersRef = useRef([]);
  const hasTriggeredLetters = useRef(false);

  const statementText = useMemo(() => {
    if (data?.whyChooseUs?.description) {
      return data.whyChooseUs.description;
    }
    if (Array.isArray(data?.subtitle)) {
      return data.subtitle.join(" ");
    }
    return data?.subtitle || STATEMENT_TEXT;
  }, [data]);

  const highlightSet = useMemo(() => {
    const set = new Set(HIGHLIGHT_WORDS.map((w) => w.toLowerCase()));
    if (data?.title) {
      data.title.toLowerCase().split(/\s+/).forEach((w) => set.add(w.replace(/[.,!?]/g, "")));
    }
    return set;
  }, [data]);

  const words = useMemo(() => {
    return statementText.split(/\s+/).map((w, idx) => {
      const clean = w.toLowerCase().replace(/[.,!?]/g, "");
      const isHighlight = highlightSet.has(clean) || clean.length > 8 || /^\d+/.test(clean);
      return {
        original: w,
        clean,
        isHighlight,
        index: idx,
      };
    });
  }, [statementText, highlightSet]);

  useEffect(() => {
    if (!sectionRef.current || !triggerRef.current) return;

    const win = typeof globalThis !== "undefined" ? globalThis.window : null;
    const prefersReduced =
      win ? win.matchMedia("(prefers-reduced-motion: reduce)").matches : false;

    const wordEls = wordsRef.current.filter(Boolean);
    const letterEls = lettersRef.current.filter(Boolean);

    if (prefersReduced) {
      wordEls.forEach((w) => gsap.set(w, { opacity: 1 }));
      letterEls.forEach((l) => gsap.set(l, { x: "0%", y: "0%", opacity: 1 }));
      return;
    }

    wordEls.forEach((w) => gsap.set(w, { opacity: 0.15 }));
    letterEls.forEach((l) => {
      const dir = getRandomDirection();
      const offset = getDirectionOffset(dir, 115);
      gsap.set(l, { x: `${offset.x}%`, y: `${offset.y}%`, opacity: 0 });
    });

    const st = ScrollTrigger.create({
      trigger: triggerRef.current,
      start: "top top",
      end: () => `+=${Math.round((win?.innerHeight || 800) * 1.35)}`,
      pin: sectionRef.current,
      pinSpacing: true,
      scrub: 1.8,
      onUpdate: (self) => {
        const p = self.progress;

        const total = wordEls.length;
        wordEls.forEach((el, idx) => {
          const startP = (idx / total) * 0.75;
          const endP = startP + 0.25;
          const wordProgress = Math.max(0, Math.min(1, (p - startP) / (endP - startP)));
          const op = 0.15 + 0.85 * wordProgress;
          el.style.opacity = op.toFixed(3);
        });

        if (p >= 0.78 && !hasTriggeredLetters.current) {
          hasTriggeredLetters.current = true;
          letterEls.forEach((l) => {
            const delay = Math.random() * 0.25;
            gsap.to(l, {
              x: "0%",
              y: "0%",
              opacity: 1,
              duration: 0.45,
              delay,
              ease: "power2.out",
            });
          });
        } else if (p < 0.65 && hasTriggeredLetters.current) {
          hasTriggeredLetters.current = false;
          letterEls.forEach((l) => {
            const dir = getRandomDirection();
            const offset = getDirectionOffset(dir, 115);
            gsap.to(l, {
              x: `${offset.x}%`,
              y: `${offset.y}%`,
              opacity: 0,
              duration: 0.3,
              ease: "power2.in",
            });
          });
        }
      },
    });

    return () => {
      st.kill();
    };
  }, [words]);

  const metalabel = data?.matrixTag || (data?.eyebrow ? data.eyebrow.split("|")[0].trim() : "Strategic Paradigm Shift");
  const auditBtnText = data?.heroButtonText ? data.heroButtonText.replace("→", "").trim() : "Request Strategy Consultation";

  return (
    <div ref={triggerRef} className="bf-philosophy-trigger">
      <style>{`
        .bf-philosophy-trigger {
          position: relative;
          width: 100%;
          background: #000000;
        }

        .bf-philosophy-section {
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding: 80px 8%;
          position: relative;
          overflow: hidden;
          background: #000000;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .bf-phil-metalabel {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #FF1801;
          margin-bottom: clamp(24px, 3.5vw, 40px);
        }

        .bf-phil-statement {
          font-family: "General Sans", "Outfit", -apple-system, sans-serif;
          font-size: clamp(28px, 4vw, 54px);
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.03em;
          color: #FAFAFC;
          max-width: 1180px;
          margin: 0 0 clamp(36px, 4.5vw, 52px) 0;
          display: flex;
          flex-wrap: wrap;
          column-gap: 0.32em;
          row-gap: 0.12em;
        }

        .bf-phil-word {
          display: inline-block;
          will-change: opacity;
        }

        .bf-phil-word.is-highlight {
          color: #FF1801;
        }

        .bf-phil-portal-mask {
          display: inline-block;
          overflow: hidden;
          vertical-align: top;
          cursor: pointer;
        }

        .bf-phil-portal-letter {
          display: inline-block;
          will-change: transform;
          user-select: none;
          transition: color 0.15s ease;
        }

        .bf-phil-portal-mask:hover .bf-phil-portal-letter {
          color: #FFFFFF;
        }

        .bf-phil-footer {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 24px;
        }

        .bf-phil-audit-btn {
          appearance: none;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 24, 1, 0.08);
          border: 1px solid rgba(255, 24, 1, 0.3);
          color: #FF4D3D;
          font-size: 0.85rem;
          font-weight: 700;
          padding: 10px 20px;
          border-radius: 9999px;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .bf-phil-audit-btn:hover {
          background: #FF1801;
          color: #FFFFFF;
          border-color: #FF1801;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(255, 24, 1, 0.35);
        }
      `}</style>

      <section ref={sectionRef} className="bf-philosophy-section" id="philosophy">
        <p className="bf-phil-metalabel">{metalabel}</p>

        <h2 ref={textRef} className="bf-phil-statement">
          {words.map((item, idx) => {
            if (item.isHighlight) {
              return (
                <span
                  key={idx}
                  ref={(el) => (wordsRef.current[idx] = el)}
                  className="bf-phil-word is-highlight"
                >
                  {item.original.split("").map((ch, cIdx) => (
                    <span
                      key={cIdx}
                      className="bf-phil-portal-mask"
                      onMouseEnter={(e) => {
                        const l = e.currentTarget.querySelector(
                          ".bf-phil-portal-letter"
                        );
                        triggerPortalLoop(l);
                      }}
                    >
                      <span
                        ref={(el) => lettersRef.current.push(el)}
                        className="bf-phil-portal-letter"
                      >
                        {ch}
                      </span>
                    </span>
                  ))}
                </span>
              );
            }

            return (
              <span
                key={idx}
                ref={(el) => (wordsRef.current[idx] = el)}
                className="bf-phil-word"
              >
                {item.original}
              </span>
            );
          })}
        </h2>

        <div className="bf-phil-footer">
          <button
            type="button"
            onClick={onOpenModal}
            className="bf-phil-audit-btn"
          >
            <span>{auditBtnText}</span>
            <SwapArrow dir="right" size={13} color="currentColor" />
          </button>
        </div>
      </section>
    </div>
  );
}
