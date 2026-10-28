import React, { useRef, useLayoutEffect, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const DELIVERABLES_DATA = [
  {
    number: "01",
    total: "04",
    pillar: "Technical Foundation",
    title: "Technical SEO & Site Speed",
    badge: "Site Health",
    badgeDotColor: "#FF1801",
    description:
      "We fix crawl errors, speed up page load times, and structure your website so search engines can index every page effortlessly.",
    metricValue: "100/100",
    metricLabel: "Core Web Vitals Score",
    svgType: "arc-radial",
  },
  {
    number: "02",
    total: "04",
    pillar: "AI Search Visibility",
    title: "Generative Engine Optimization (GEO)",
    badge: "ChatGPT & Gemini",
    badgeDotColor: "#FF1801",
    description:
      "More buyers now ask ChatGPT, Perplexity, and Google AI for recommendations. We structure your brand content so AI tools cite you directly.",
    metricValue: "Top 3",
    metricLabel: "AI Answer Citations",
    svgType: "concentric-diagonal",
  },
  {
    number: "03",
    total: "04",
    pillar: "Commercial Keywords",
    title: "High-Intent Keyword & Local SEO",
    badge: "Lead Generation",
    badgeDotColor: "#FF1801",
    description:
      "Instead of chasing empty traffic, we target the exact search terms and local map queries your ready-to-buy customers are searching for.",
    metricValue: "+340%",
    metricLabel: "Qualified Organic Leads",
    svgType: "elliptical-orbit",
  },
  {
    number: "04",
    total: "04",
    pillar: "Authority & Trust",
    title: "Digital PR & Quality Link Building",
    badge: "White-Hat Only",
    badgeDotColor: "#FF1801",
    description:
      "We earn genuine backlinks and editorial mentions from trusted industry publications to build lasting domain authority.",
    metricValue: "DA 80+",
    metricLabel: "Editorial Publications",
    svgType: "cloverleaf-venn",
  },
];

function MontarvilleGeometricSvg({ type }) {
  if (type === "arc-radial") {
    return (
      <svg
        viewBox="0 0 770 768"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="montarville-blueprint-svg"
        aria-hidden="true"
      >
        <path
          d="M503.878 348.121C480.308 324.551 442.001 324.636 418.318 348.319C394.635 372.002 394.55 410.309 418.12 433.879C441.69 457.449 479.997 457.364 503.68 433.681C527.363 409.998 527.448 371.691 503.878 348.121Z"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path
          d="M769 768C769 555.37 597.077 383 385 383C172.923 383 1 555.37 1 768"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <line
          x1="384.51"
          y1="767.902"
          x2="537.51"
          y2="0.902145"
          stroke="currentColor"
          strokeWidth="1.75"
        />
      </svg>
    );
  }

  if (type === "concentric-diagonal") {
    return (
      <svg
        viewBox="0 0 768 768"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="montarville-blueprint-svg"
        aria-hidden="true"
      >
        <path
          d="M65.9355 384.379C153.466 471.909 295.71 471.584 383.647 383.646C471.585 295.709 471.91 153.465 384.38 65.9346C296.85 -21.5955 154.605 -21.2704 66.668 66.667C-21.2693 154.604 -21.5945 296.849 65.9355 384.379Z"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path
          d="M383.623 702.065C471.153 789.595 613.398 789.27 701.335 701.333C789.272 613.396 789.597 471.151 702.067 383.621C614.537 296.091 472.293 296.416 384.355 384.354C296.418 472.291 296.093 614.535 383.623 702.065Z"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <line
          x1="225.402"
          y1="225.401"
          x2="543.084"
          y2="543.083"
          stroke="currentColor"
          strokeWidth="1.75"
        />
      </svg>
    );
  }

  if (type === "elliptical-orbit") {
    return (
      <svg
        viewBox="0 0 768 768"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="montarville-blueprint-svg"
        aria-hidden="true"
      >
        <line
          x1="78"
          y1="383.5"
          x2="690"
          y2="383.5"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path
          d="M385.047 0.500977C324.49 0.726059 263.794 38.3035 217.373 113.359C170.951 188.416 147.64 286.68 147.5 384.884C147.361 483.088 170.393 581.178 216.601 655.89C262.808 730.599 323.395 767.724 383.951 767.499C444.509 767.274 505.204 729.697 551.625 654.641C598.047 579.584 621.359 481.32 621.498 383.116C621.638 284.912 598.606 186.822 552.398 112.11C506.19 37.4007 445.603 0.275906 385.047 0.500977Z"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path
          d="M655.798 112.201C506.379 -37.2182 263.56 -36.6627 113.448 113.449C-36.6636 263.561 -37.219 506.379 112.2 655.799C261.62 805.218 504.438 804.663 654.55 654.551C804.662 504.439 805.217 261.621 655.798 112.201Z"
          stroke="currentColor"
          strokeWidth="1.75"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 968 768"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="montarville-blueprint-svg"
      aria-hidden="true"
    >
      <circle cx="725.31" cy="383.762" r="241.27" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="483.54" cy="525.754" r="241.27" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="241.77" cy="383.762" r="241.27" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="483.54" cy="241.77" r="241.27" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

function PitchBlackArchitecturalCard({ item, onOpenModal }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5.5;
    const rotateY = ((x - centerX) / centerX) * 5.5;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
    card.style.setProperty("--rotate-x", `${rotateX.toFixed(2)}deg`);
    card.style.setProperty("--rotate-y", `${rotateY.toFixed(2)}deg`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--rotate-x", `0deg`);
    card.style.setProperty("--rotate-y", `0deg`);
    card.style.setProperty("--mouse-x", `-999px`);
    card.style.setProperty("--mouse-y", `-999px`);
  };

  return (
    <div className="montarville-card-container">
      {/* Sequential number counter */}
      <div className="montarville-card-number">
        <span>{item.number}</span> / {item.total}
      </div>

      {/* Dynamic 3D Pitch Black Blueprint Card */}
      <article
        ref={cardRef}
        className="montarville-card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => onOpenModal && onOpenModal(`Deliverable: ${item.title}`)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            if (onOpenModal) onOpenModal(`Deliverable: ${item.title}`);
          }
        }}
        aria-label={`View ${item.title}`}
      >
        {/* Parallax SVG Architectural Drawing */}
        <div className="montarville-svg-layer">
          <MontarvilleGeometricSvg type={item.svgType} />
        </div>

        {/* Card Contents */}
        <div className="montarville-card-inner">
          {/* Topbar: Sub-Pillar and Category Tag */}
          <div className="montarville-card-topbar">
            <div className="montarville-pillar-tag">
              <span className="montarville-pillar-indicator" />
              {item.pillar}
            </div>
            <div className="montarville-badge">
              <span
                className="montarville-badge-dot"
                style={{ background: item.badgeDotColor }}
              />
              {item.badge}
            </div>
          </div>

          {/* Main Card Title */}
          <h3 className="montarville-card-title">{item.title}</h3>

          {/* Clean Architectural Description Paragraph */}
          <p className="montarville-card-desc">{item.description}</p>

          {/* Bottom Row: Stat Metric & Red Corner Action Trigger */}
          <div className="montarville-card-bottom">
            <div className="montarville-metric-pill">
              <span className="montarville-metric-val">{item.metricValue}</span>
              <span className="montarville-metric-label">{item.metricLabel}</span>
            </div>

            {/* Red Action Trigger with Montarville dual-arrow glide */}
            <div
              className="montarville-red-trigger"
              aria-hidden="true"
              onClick={(e) => {
                e.stopPropagation();
                if (onOpenModal) onOpenModal(`Deliverable: ${item.title}`);
              }}
            >
              <ArrowUpRight size={21} className="montarville-arrow-primary" />
              <ArrowUpRight size={21} className="montarville-arrow-secondary" />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default function SeoMontarvilleDeliverables({ data, onOpenModal }) {
  const deliverables = useMemo(() => {
    if (data?.pillars && data.pillars.length >= 3) {
      const svgTypes = ["arc-radial", "concentric-diagonal", "elliptical-orbit", "mesh-quadrant"];
      return data.pillars.slice(0, 4).map((p, idx) => ({
        number: `0${idx + 1}`,
        total: "04",
        pillar: p.tag || `Pillar 0${idx + 1}`,
        title: p.title,
        badge: p.tag || "Enterprise",
        badgeDotColor: "#FF1801",
        description: p.description,
        metricValue: data?.metrics?.[idx]?.value || "100%",
        metricLabel: data?.metrics?.[idx]?.label || "Performance Benchmark",
        svgType: svgTypes[idx % svgTypes.length],
      }));
    }
    return DELIVERABLES_DATA;
  }, [data]);
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      if (!section) return;

      const headerElements = section.querySelectorAll(".montarville-header-anim");
      const cardContainers = section.querySelectorAll(".montarville-card-container");
      const svgs = section.querySelectorAll(".montarville-blueprint-svg");

      // Prepare SVG paths for draw animation
      svgs.forEach((svg) => {
        const strokeElements = svg.querySelectorAll("path, line, circle");
        strokeElements.forEach((el) => {
          let length = 800;
          try {
            if (typeof el.getTotalLength === "function") {
              length = el.getTotalLength() || 800;
            }
          } catch {
            length = 800;
          }
          el.style.strokeDasharray = `${length} ${length}`;
          el.style.strokeDashoffset = `${length}`;
        });
      });

      // Master trigger that resets and replays every time user reaches the section
      const playAnimation = () => {
        const tl = gsap.timeline();

        // 1. Header elements reveal
        tl.fromTo(
          headerElements,
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: "power3.out" },
          0
        );

        // 2. Card containers reveal
        tl.fromTo(
          cardContainers,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.18, ease: "power3.out" },
          0.15
        );

        // 3. Sequential numbers reveal
        const cardNumbers = section.querySelectorAll(".montarville-card-number");
        tl.fromTo(
          cardNumbers,
          { opacity: 0, x: -12 },
          { opacity: 1, x: 0, duration: 0.7, stagger: 0.15, ease: "power2.out" },
          0.3
        );

        // 4. Architectural SVG stroke drawing (DrawSVG effect from Montarville)
        svgs.forEach((svg, sIdx) => {
          const strokes = svg.querySelectorAll("path, line, circle");
          tl.to(
            strokes,
            {
              strokeDashoffset: 0,
              duration: 1.5,
              stagger: 0.1,
              ease: "power2.out",
            },
            0.4 + sIdx * 0.15
          );
        });

        // 5. Red corner triggers pop-in
        const actionBtns = section.querySelectorAll(".montarville-red-trigger");
        tl.fromTo(
          actionBtns,
          { opacity: 0, scale: 0.6 },
          { opacity: 1, scale: 1, duration: 0.6, stagger: 0.12, ease: "back.out(1.7)" },
          0.5
        );
      };

      const resetAnimation = () => {
        gsap.set(headerElements, { opacity: 0, y: 28 });
        gsap.set(cardContainers, { opacity: 0, y: 40 });
        const cardNumbers = section.querySelectorAll(".montarville-card-number");
        gsap.set(cardNumbers, { opacity: 0, x: -12 });
        const actionBtns = section.querySelectorAll(".montarville-red-trigger");
        gsap.set(actionBtns, { opacity: 0, scale: 0.6 });

        svgs.forEach((svg) => {
          const strokeElements = svg.querySelectorAll("path, line, circle");
          strokeElements.forEach((el) => {
            let length = 800;
            try {
              if (typeof el.getTotalLength === "function") {
                length = el.getTotalLength() || 800;
              }
            } catch {
              length = 800;
            }
            el.style.strokeDashoffset = `${length}`;
          });
        });
      };

      // Reset initially
      resetAnimation();

      ScrollTrigger.create({
        trigger: section,
        start: "top 88%",
        once: true,
        onEnter: playAnimation,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="montarville-expertises-section"
      style={{
        position: "relative",
        background: "#000000",
        color: "#FAFAFC",
        padding: "clamp(80px, 9vw, 140px) 24px",
        overflow: "hidden",
      }}
    >
      <style>{`
        /* Pitch Black Architectural Drafting Table Background */
        .montarville-expertises-section {
          background-color: #000000 !important;
          background-image: 
            radial-gradient(circle at 50% 0%, rgba(255, 24, 1, 0.08) 0%, transparent 60%),
            radial-gradient(circle at 10% 40%, rgba(255, 255, 255, 0.015) 1px, transparent 1px),
            radial-gradient(circle at 90% 70%, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
          background-size: 100% 100%, 36px 36px, 36px 36px;
        }

        .montarville-header-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border-radius: 999px;
          background: rgba(255, 24, 1, 0.08);
          border: 1px solid rgba(255, 24, 1, 0.28);
          color: #FAFAFC;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          box-shadow: 0 0 24px rgba(255, 24, 1, 0.16);
        }

        .montarville-title {
          font-family: 'General Sans', sans-serif, -apple-system, BlinkMacSystemFont;
          font-size: clamp(34px, 5.2vw, 68px);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.035em;
          color: #FAFAFC;
          margin-top: 18px;
          margin-bottom: 0;
        }

        .montarville-title-accent {
          color: #FF1801;
          display: block;
        }

        .montarville-subtitle {
          font-size: clamp(15px, 1.3vw, 18px);
          line-height: 1.65;
          color: rgba(250, 250, 252, 0.65);
          max-width: 720px;
          margin: 20px auto 0 auto;
        }

        /* Staggered Asymmetrical Layout */
        .montarville-cards-wrapper {
          display: flex;
          flex-direction: column;
          gap: clamp(40px, 5vw, 64px);
          max-width: 1220px;
          margin: clamp(50px, 6vw, 84px) auto 0 auto;
        }

        .montarville-card-container {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        @media (min-width: 960px) {
          .montarville-card-container:nth-child(odd) {
            width: 82%;
            margin-right: auto;
          }
          .montarville-card-container:nth-child(even) {
            width: 82%;
            margin-left: auto;
          }
        }

        /* Sequential number counter above card */
        .montarville-card-number {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: rgba(250, 250, 252, 0.4);
          margin-bottom: 12px;
          padding-left: 4px;
        }

        .montarville-card-number span {
          color: #FAFAFC;
          font-weight: 800;
          font-size: 16px;
        }

        /* Pure Pitch Black 3D Card Surface */
        .montarville-card {
          position: relative;
          background: #000000 !important;
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 20px;
          overflow: hidden;
          padding: clamp(32px, 4.5vw, 56px);
          transform-style: preserve-3d;
          transform: perspective(1200px) rotateX(var(--rotate-x, 0deg)) rotateY(var(--rotate-y, 0deg));
          transition: transform 0.16s ease-out, border-color 0.4s ease, box-shadow 0.4s ease;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.95), 0 0 1px rgba(255, 255, 255, 0.1);
          cursor: pointer;
        }

        /* Interactive Mouse Spotlight Radial Glow on Pitch Black */
        .montarville-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: radial-gradient(
            620px circle at var(--mouse-x, -999px) var(--mouse-y, -999px),
            rgba(255, 24, 1, 0.14),
            rgba(255, 255, 255, 0.03) 40%,
            transparent 70%
          );
          opacity: 0;
          transition: opacity 0.35s ease;
          pointer-events: none;
          z-index: 1;
        }

        .montarville-card:hover::before {
          opacity: 1;
        }

        /* Interactive Laser Border on Cursor Move */
        .montarville-card::after {
          content: "";
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          padding: 1px;
          background: radial-gradient(
            380px circle at var(--mouse-x, -999px) var(--mouse-y, -999px),
            rgba(255, 24, 1, 0.7),
            rgba(255, 255, 255, 0.2) 35%,
            transparent 70%
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.35s ease;
          z-index: 2;
        }

        .montarville-card:hover::after {
          opacity: 1;
        }

        .montarville-card:hover {
          border-color: rgba(255, 24, 1, 0.4);
          box-shadow: 0 28px 60px rgba(0, 0, 0, 0.95), 0 0 40px rgba(255, 24, 1, 0.14);
        }

        /* Architectural SVG Line Art Parallax Layer */
        .montarville-svg-layer {
          position: absolute;
          right: -24px;
          bottom: -24px;
          width: clamp(280px, 36vw, 460px);
          height: auto;
          pointer-events: none;
          z-index: 1;
          color: rgba(255, 255, 255, 0.16);
          transform: translate3d(calc(var(--rotate-y, 0deg) * 2.5), calc(var(--rotate-x, 0deg) * -2.5), 0);
          transition: color 0.4s ease, opacity 0.4s ease, transform 0.2s ease-out;
        }

        .montarville-card:hover .montarville-svg-layer {
          color: rgba(255, 24, 1, 0.38);
        }

        .montarville-blueprint-svg {
          width: 100%;
          height: auto;
          display: block;
        }

        /* Card Inner Content */
        .montarville-card-inner {
          position: relative;
          z-index: 3;
          display: flex;
          flex-direction: column;
          gap: 26px;
          transform: translateZ(20px);
        }

        .montarville-card-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }

        .montarville-pillar-tag {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #FF1801;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .montarville-pillar-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #FF1801;
          box-shadow: 0 0 10px rgba(255, 24, 1, 0.8);
          animation: pulseGlow 2s infinite ease-in-out;
        }

        @keyframes pulseGlow {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.3); opacity: 1; }
        }

        .montarville-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 5px 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.09);
          font-size: 12px;
          font-weight: 500;
          color: rgba(250, 250, 252, 0.9);
          backdrop-filter: blur(8px);
        }

        .montarville-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          box-shadow: 0 0 8px currentColor;
        }

        .montarville-card-title {
          font-family: 'General Sans', sans-serif, -apple-system, BlinkMacSystemFont;
          font-size: clamp(26px, 3vw, 40px);
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.025em;
          color: #FFFFFF;
          margin: 0;
          max-width: 680px;
        }

        .montarville-card-desc {
          font-size: clamp(15px, 1.2vw, 17px);
          line-height: 1.7;
          color: rgba(250, 250, 252, 0.76);
          max-width: 660px;
          margin: 0;
        }

        /* Bottom Row with Stat Metric & Red Corner Action Button */
        .montarville-card-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          margin-top: 8px;
        }

        .montarville-metric-pill {
          display: flex;
          align-items: baseline;
          gap: 8px;
        }

        .montarville-metric-val {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
          font-size: clamp(22px, 2.2vw, 28px);
          font-weight: 800;
          color: #FFFFFF;
          letter-spacing: -0.02em;
        }

        .montarville-metric-label {
          font-size: 13px;
          color: rgba(250, 250, 252, 0.55);
          font-weight: 500;
        }

        /* Montarville Red Circular Action Button */
        .montarville-red-trigger {
          position: relative;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: #FF1801;
          border: 1px solid #FF1801;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          overflow: hidden;
          transition: background 0.35s cubic-bezier(0.22, 1, 0.36, 1),
                      border-color 0.35s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
                      box-shadow 0.35s ease;
          flex-shrink: 0;
          cursor: pointer;
        }

        .montarville-card:hover .montarville-red-trigger,
        .montarville-red-trigger:hover {
          background: #FAFAFC;
          border-color: #FAFAFC;
          color: #000000;
          transform: scale(1.1);
          box-shadow: 0 0 24px rgba(255, 255, 255, 0.3);
        }

        .montarville-arrow-primary {
          position: absolute;
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .montarville-arrow-secondary {
          position: absolute;
          transform: translate(-120%, 120%);
          opacity: 0;
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .montarville-card:hover .montarville-arrow-primary,
        .montarville-red-trigger:hover .montarville-arrow-primary {
          transform: translate(120%, -120%);
          opacity: 0;
        }

        .montarville-card:hover .montarville-arrow-secondary,
        .montarville-red-trigger:hover .montarville-arrow-secondary {
          transform: translate(0, 0);
          opacity: 1;
        }
      `}</style>

      {/* SECTION HEADER */}
      <div style={{ textAlign: "center", maxWidth: "860px", margin: "0 auto" }}>
        <div className="montarville-header-anim" style={{ display: "inline-block" }}>
          <span className="montarville-header-badge">
            <Sparkles size={13} style={{ color: "#FF1801" }} />
            WHAT WE DELIVER
          </span>
        </div>

        <h2 className="montarville-title montarville-header-anim">
          {data?.title ? (
            <>
              Engineered <span className="montarville-title-accent">{data.eyebrow ? data.eyebrow.split("|")[0].trim() : "Growth Strategy"}</span>
            </>
          ) : (
            <>
              Complete Search & AI{" "}
              <span className="montarville-title-accent">Growth Strategy</span>
            </>
          )}
        </h2>

        <p className="montarville-subtitle montarville-header-anim">
          {data?.pillarsSubtitle || "We combine proven technical infrastructure with modern creative precision so your business scales faster and converts higher."}
        </p>
      </div>

      {/* CARDS LIST IN PITCH BLACK & DYNAMIC ASYMMETRICAL STAGGER */}
      <div ref={cardsContainerRef} className="montarville-cards-wrapper">
        {deliverables.map((item) => (
          <PitchBlackArchitecturalCard
            key={item.number}
            item={item}
            onOpenModal={onOpenModal}
          />
        ))}
      </div>
    </section>
  );
}
