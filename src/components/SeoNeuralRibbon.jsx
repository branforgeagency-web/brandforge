import React, { useRef, useLayoutEffect } from "react";

export default function SeoNeuralRibbon({ containerSelector = ".bf-bento-cards-grid" }) {
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const nodesRef = useRef([]);

  useLayoutEffect(() => {
    const svg = svgRef.current;
    const path = pathRef.current;
    if (!svg || !path) return;

    const parent = svg.parentElement;
    if (!parent) return;

    let totalLength = 0;
    let cardCenters = [];

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const updateSpline = () => {
      const container = parent.querySelector(containerSelector) || parent;
      const cards = Array.from(container.querySelectorAll(".bf-bento-card-root, .bento-card-wrap, [data-bento-card]"));
      const w = parent.clientWidth;
      const h = parent.clientHeight;

      if (!w || !h) return false;

      svg.setAttribute("viewBox", `0 0 ${w} ${h}`);

      if (cards.length < 2) {
        // Fallback organic wave connecting across 4 quadrant sectors
        const p0 = { x: w * 0.1, y: h * 0.15 };
        const p1 = { x: w * 0.35, y: h * 0.35 };
        const p2 = { x: w * 0.8, y: h * 0.4 };
        const p3 = { x: w * 0.25, y: h * 0.75 };
        const p4 = { x: w * 0.85, y: h * 0.85 };

        const d = `M ${p0.x} ${p0.y} C ${w * 0.2} ${h * 0.2}, ${w * 0.5} ${h * 0.15}, ${p2.x} ${p2.y} C ${w * 0.95} ${h * 0.55}, ${w * 0.1} ${h * 0.6}, ${p3.x} ${p3.y} C ${w * 0.4} ${h * 0.9}, ${w * 0.6} ${h * 0.8}, ${p4.x} ${p4.y}`;
        path.setAttribute("d", d);
        totalLength = path.getTotalLength();
        cardCenters = [p0, p2, p3, p4];
      } else {
        const parentRect = parent.getBoundingClientRect();
        cardCenters = cards.map((card) => {
          const r = card.getBoundingClientRect();
          return {
            x: r.left - parentRect.left + r.width / 2,
            y: r.top - parentRect.top + r.height / 2,
          };
        });

        if (cardCenters.length >= 2) {
          // Generate smooth cubic bezier spline linking card centers (Awake spline algorithm)
          let d = `M ${Math.max(0, cardCenters[0].x - 60)} ${cardCenters[0].y}`;
          for (let i = 0; i < cardCenters.length - 1; i++) {
            const pCurrent = cardCenters[i];
            const pNext = cardCenters[i + 1];
            const cp1X = pCurrent.x + (pNext.x - pCurrent.x) * 0.5;
            const cp1Y = pCurrent.y;
            const cp2X = pCurrent.x + (pNext.x - pCurrent.x) * 0.5;
            const cp2Y = pNext.y;
            d += ` C ${cp1X.toFixed(1)} ${cp1Y.toFixed(1)}, ${cp2X.toFixed(1)} ${cp2Y.toFixed(1)}, ${pNext.x.toFixed(1)} ${pNext.y.toFixed(1)}`;
          }
          // Extra trail off
          const last = cardCenters[cardCenters.length - 1];
          d += ` C ${last.x + 40} ${last.y}, ${w - 20} ${last.y + 30}, ${w} ${last.y + 50}`;

          path.setAttribute("d", d);
          totalLength = path.getTotalLength();
        }
      }

      if (totalLength > 0) {
        path.style.strokeDasharray = `${totalLength} ${totalLength + 2}`;
        if (prefersReduced) {
          path.style.strokeDashoffset = "0";
        }
      }
      return true;
    };

    updateSpline();

    const handleScroll = () => {
      if (prefersReduced || !totalLength) return;
      const rect = parent.getBoundingClientRect();
      const viewportH = window.innerHeight;

      // Start drawing when top of parent enters 85% of screen, complete when center leaves
      const start = viewportH * 0.85;
      const end = viewportH * 0.15;
      const progress = Math.min(1, Math.max(0, (start - rect.top) / (rect.height + (start - end))));

      const drawOffset = totalLength * (1 - progress);
      path.style.strokeDashoffset = String(drawOffset);

      // Light up the node circles as the spline reaches them
      nodesRef.current.forEach((dot, idx) => {
        if (!dot) return;
        const targetProgress = (idx + 1) / (cardCenters.length + 0.5);
        if (progress >= targetProgress) {
          dot.style.opacity = "1";
          dot.style.transform = "scale(1.2)";
        } else {
          dot.style.opacity = "0.2";
          dot.style.transform = "scale(1)";
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateSpline);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateSpline);
    };
  }, [containerSelector]);

  return (
    <div
      className="bf-seo-neural-ribbon-stage"
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 1,
        overflow: "visible",
      }}
    >
      <style>{`
        .bf-seo-neural-ribbon-path {
          fill: none;
          stroke: #FF1801;
          stroke-width: 2.2px;
          stroke-linecap: round;
          stroke-linejoin: round;
          opacity: 0.72;
          filter: drop-shadow(0 0 8px rgba(255, 24, 1, 0.45));
          transition: stroke-dashoffset 0.12s linear;
        }
        .bf-seo-neural-node {
          fill: #FF1801;
          transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform-origin: center;
        }
        .bf-seo-neural-halo {
          fill: none;
          stroke: rgba(255, 24, 1, 0.3);
          stroke-width: 1.5px;
          stroke-dasharray: 3 3;
          animation: bf-spin-halo 12s linear infinite;
          transform-origin: center;
        }
        @keyframes bf-spin-halo {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      <svg
        ref={svgRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          overflow: "visible",
        }}
      >
        <defs>
          <linearGradient id="bf-seo-ribbon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF1801" stopOpacity="0.2" />
            <stop offset="40%" stopColor="#FF1801" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#FF7A6E" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#D61400" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <path
          ref={pathRef}
          className="bf-seo-neural-ribbon-path"
          stroke="url(#bf-seo-ribbon-grad)"
        />
      </svg>
    </div>
  );
}
