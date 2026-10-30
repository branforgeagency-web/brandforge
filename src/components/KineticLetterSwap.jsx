"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";

export default function KineticLetterSwap({
  text = "",
  className = "",
  as = "span",
  style = {},
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const chars = Array.from(el.querySelectorAll(".kinetic-char"));
    if (!chars.length) return;

    let prevX = null;
    let dir = 1;
    let activeChar = null;

    const handlePointerMove = (e) => {
      if (e.pointerType === "touch") return;

      if (prevX !== null && e.clientX !== prevX) {
        dir = e.clientX > prevX ? 1 : -1;
      }
      prevX = e.clientX;

      const hit = document.elementFromPoint(e.clientX, e.clientY);
      const charEl = hit?.closest(".kinetic-char");

      if (!charEl || charEl === activeChar || !el.contains(charEl)) {
        activeChar = charEl;
        return;
      }

      activeChar = charEl;
      gsap.killTweensOf(charEl);

      // Signature Awake kinetic letter flick: shoots out in cursor dir, wraps, and springs back
      gsap
        .timeline()
        .to(charEl, {
          xPercent: 100 * dir,
          duration: 0.16,
          ease: "power2.in",
        })
        .set(charEl, {
          xPercent: -100 * dir,
        })
        .to(charEl, {
          xPercent: 0,
          duration: 0.45,
          ease: "back.out(1.8)",
        });
    };

    const handlePointerLeave = () => {
      activeChar = null;
      prevX = null;
    };

    el.addEventListener("pointermove", handlePointerMove, { passive: true });
    el.addEventListener("pointerleave", handlePointerLeave, { passive: true });

    return () => {
      el.removeEventListener("pointermove", handlePointerMove);
      el.removeEventListener("pointerleave", handlePointerLeave);
      gsap.killTweensOf(chars);
    };
  }, [text]);

  const Component = as;

  return (
    <Component
      ref={containerRef}
      className={`kinetic-text-wrap ${className}`}
      style={{
        display: "inline-flex",
        flexWrap: "wrap",
        cursor: "default",
        ...style,
      }}
    >
      <style>{`
        .kinetic-text-wrap {
          user-select: none;
        }
        .kinetic-word {
          display: inline-flex;
          white-space: nowrap;
          margin-right: 0.28em;
        }
        .kinetic-char-slot {
          display: inline-block;
          overflow: hidden;
          position: relative;
          line-height: 1.1;
        }
        .kinetic-char {
          display: inline-block;
          will-change: transform;
          transform: translateZ(0);
        }
      `}</style>
      {text.split(" ").map((word, wIdx) => (
        <span key={wIdx} className="kinetic-word">
          {word.split("").map((char, cIdx) => (
            <span key={cIdx} className="kinetic-char-slot">
              <span className="kinetic-char">{char}</span>
            </span>
          ))}
        </span>
      ))}
    </Component>
  );
}
