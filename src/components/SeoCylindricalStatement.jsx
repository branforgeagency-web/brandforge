"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function SeoCylindricalStatement() {
  const sectionRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const card1 = card1Ref.current;
    const card2 = card2Ref.current;

    if (!section || !card1 || !card2) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set([card1, card2], { opacity: 1, rotationX: 0, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      // 3D Cylindrical Drum Flip Timeline (Awake-inspired perspective flip)
      gsap.set(card1, {
        transformOrigin: "50% 50% -420px",
        rotationX: 0,
        opacity: 1,
        z: 0,
      });

      gsap.set(card2, {
        transformOrigin: "50% 50% -420px",
        rotationX: 105,
        opacity: 0,
        z: -100,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "center center",
          end: "+=120%",
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });

      // Card 1 rolls backward out of view around the cylinder
      tl.to(card1, {
        rotationX: -105,
        opacity: 0,
        z: -100,
        duration: 1,
        ease: "power2.inOut",
      })
      // Card 2 simultaneously rolls in from bottom-front to face the viewer
      .to(
        card2,
        {
          rotationX: 0,
          opacity: 1,
          z: 0,
          duration: 1,
          ease: "power2.inOut",
        },
        "<0.2"
      )
      // Gentle hold period at the end before unpinning
      .to({}, { duration: 0.4 });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bf-seo-drum-section" id="seo-drum-statement">
      <style>{`
        .bf-seo-drum-section {
          width: calc(100% - 32px);
          max-width: 1240px;
          margin: 40px auto 60px;
          min-height: 80vh;
          background: #0D0D11;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 32px;
          padding: 80px 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          box-shadow: 0 24px 64px rgba(0, 0, 0, 0.6);
        }
        .bf-seo-drum-glow {
          position: absolute;
          width: 500px;
          height: 300px;
          background: radial-gradient(circle, rgba(239, 65, 54, 0.15) 0%, rgba(239, 65, 54, 0) 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 1;
        }
        .bf-seo-drum-stage {
          perspective: 1600px;
          width: 100%;
          max-width: 980px;
          position: relative;
          z-index: 2;
          display: grid;
        }
        .bf-seo-drum-card {
          grid-area: 1 / 1;
          text-align: center;
          will-change: transform, opacity;
          transform-style: preserve-3d;
          backface-visibility: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .bf-seo-drum-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 9999px;
          margin-bottom: 24px;
        }
        .bf-seo-drum-badge.trad {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: rgba(255, 255, 255, 0.7);
        }
        .bf-seo-drum-badge.geo {
          background: rgba(239, 65, 54, 0.12);
          border: 1px solid rgba(239, 65, 54, 0.35);
          color: #FF6B5E;
        }
        .bf-seo-drum-heading {
          font-size: clamp(2.2rem, 5.2vw, 4.2rem);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.03em;
          color: #FAFAFC;
          margin: 0 0 20px;
          text-wrap: balance;
        }
        .bf-seo-drum-heading .highlight-dim {
          color: rgba(255, 255, 255, 0.45);
        }
        .bf-seo-drum-heading .highlight-red {
          color: #EF4136;
          text-shadow: 0 0 30px rgba(239, 65, 54, 0.4);
        }
        .bf-seo-drum-sub {
          font-size: clamp(1rem, 1.8vw, 1.25rem);
          color: rgba(255, 255, 255, 0.65);
          max-width: 680px;
          line-height: 1.55;
          margin: 0;
        }
        @media (max-width: 767px) {
          .bf-seo-drum-section {
            width: calc(100% - 20px);
            padding: 60px 18px;
            border-radius: 20px;
            min-height: 70vh;
          }
          .bf-seo-drum-stage {
            perspective: 800px;
          }
        }
      `}</style>

      <div className="bf-seo-drum-glow" aria-hidden="true" />

      <div className="bf-seo-drum-stage">
        {/* STATEMENT 1: CLASSIC SEARCH */}
        <div ref={card1Ref} className="bf-seo-drum-card">
          <div className="bf-seo-drum-badge trad">
            <span>THE PAST DECADE OF SEARCH</span>
          </div>
          <h3 className="bf-seo-drum-heading">
            Classic SEO fights for <span className="highlight-dim">ten blue links</span> on a crowded Google page.
          </h3>
          <p className="bf-seo-drum-sub">
            Keyword stuffing, generic blog farming, and commoditized backlink packages produce diminishing clicks as Google pushes ads and AI Overviews above organic rankings.
          </p>
        </div>

        {/* STATEMENT 2: THE GEO NEURAL REVOLUTION */}
        <div ref={card2Ref} className="bf-seo-drum-card">
          <div className="bf-seo-drum-badge geo">
            <Sparkles size={13} />
            <span>THE NEXT GENERATION OF DISCOVERY</span>
          </div>
          <h3 className="bf-seo-drum-heading">
            BrandForge GEO commands <span className="highlight-red">neural answer consensus</span> across AI models.
          </h3>
          <p className="bf-seo-drum-sub">
            When high-ticket buyers ask ChatGPT, Perplexity, or Google Gemini for the top recommendation, your brand is synthesized as the authoritative, verified market authority.
          </p>
        </div>
      </div>
    </section>
  );
}
