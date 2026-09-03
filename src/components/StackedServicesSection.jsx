"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  CheckCircle2,
  ArrowRight,
  Search,
  Megaphone,
  Box,
  Rocket,
  Users,
  PenTool,
  Mail,
  Target,
  Palette,
  Video,
  Gauge,
  ShieldCheck,
} from "lucide-react";

// 12 BrandForge Digital Marketing Services
const services = [
  {
    slug: "seo-geo",
    eyebrow: "SEO & GEO /",
    title: "SEARCH DOMINANCE",
    description: "Our SEO services help ambitious brands win both Google rankings and the new wave of AI-generated answers.",
    items: ["Technical SEO", "GEO Optimization", "Core Web Vitals"],
    number: "01",
    icon: Search,
    color: "#EF4136",
    textColor: "#FFFFFF",
    accentTag: "rgba(255, 255, 255, 0.2)",
  },
  {
    slug: "paid-media",
    eyebrow: "PAID MEDIA /",
    title: "AD SCALING",
    description: "Our paid advertising campaigns run across Meta, Google, TikTok, and LinkedIn to reach the right audience and scale ROAS.",
    items: ["Programmatic Bidding", "Funnel Retargeting", "ROAS Scaling"],
    number: "02",
    icon: Megaphone,
    color: "#0B0B0C",
    textColor: "#F8F9FA",
    accentTag: "rgba(239, 65, 54, 0.25)",
  },
  {
    slug: "web-foundry",
    eyebrow: "WEB FOUNDRY /",
    title: "3D EXPERIENCE",
    description: "Our web development builds sub-second platforms and 3D visual worlds that turn visitor attention into lasting revenue.",
    items: ["Next-Gen Web Dev", "WebGL 3D Motion", "Sub-Second UX"],
    number: "03",
    icon: Box,
    color: "#FFFFFF",
    textColor: "#0F172A",
    accentTag: "rgba(15, 23, 42, 0.12)",
  },
  {
    slug: "viral-social",
    eyebrow: "VIRAL SOCIAL /",
    title: "BRAND REACH",
    description: "Our social media marketing builds content engines designed to spread fast and grow your brand where your audience already is.",
    items: ["Viral Short-Form", "Community Growth", "Social Listening"],
    number: "04",
    icon: Rocket,
    color: "#060509",
    textColor: "#F8F9FA",
    accentTag: "rgba(239, 65, 54, 0.25)",
  },
  {
    slug: "influencer-network",
    eyebrow: "INFLUENCER /",
    title: "CREATOR NETWORK",
    description: "Our influencer marketing connects your brand with the right creators and key opinion leaders to build real reach and authority.",
    items: ["Creator Network", "Contract Vetting", "ROI Tracking"],
    number: "05",
    icon: Users,
    color: "#EF4136",
    textColor: "#FFFFFF",
    accentTag: "rgba(255, 255, 255, 0.2)",
  },
  {
    slug: "content-smithy",
    eyebrow: "CONTENT /",
    title: "STORY SMITHY",
    description: "Our content marketing crafts authority storytelling and editorial copy designed to turn prospects into clients.",
    items: ["Authority Copywriting", "Whitepapers", "Thought Leadership"],
    number: "06",
    icon: PenTool,
    color: "#FFFFFF",
    textColor: "#0F172A",
    accentTag: "rgba(15, 23, 42, 0.12)",
  },
  {
    slug: "inbox-edge",
    eyebrow: "INBOX EDGE /",
    title: "RETENTION FUNNELS",
    description: "Our email marketing builds automated lifecycle sequences that improve deliverability and grow customer lifetime value (LTV).",
    items: ["Klaviyo Automation", "Dynamic Segmentation", "LTV Maximization"],
    number: "07",
    icon: Mail,
    color: "#0B0B0C",
    textColor: "#F8F9FA",
    accentTag: "rgba(239, 65, 54, 0.25)",
  },
  {
    slug: "brand-anvil",
    eyebrow: "BRAND ANVIL /",
    title: "GROWTH ARCHITECTURE",
    description: "Our growth strategy engineers 360° blueprints and unit-economics optimization built for market leadership.",
    items: ["360° Growth Blueprints", "Market Research", "Unit Economics"],
    number: "08",
    icon: Target,
    color: "#EF4136",
    textColor: "#FFFFFF",
    accentTag: "rgba(255, 255, 255, 0.2)",
  },
  {
    slug: "visual-id",
    eyebrow: "IDENTITY FORGE /",
    title: "VISUAL ID DESIGN",
    description: "Our branding and design build instant market authority through logo design, 3D motion graphics, and cohesive design systems.",
    items: ["Logo Forging", "3D Motion Graphics", "Design Systems"],
    number: "09",
    icon: Palette,
    color: "#FFFFFF",
    textColor: "#0F172A",
    accentTag: "rgba(15, 23, 42, 0.12)",
  },
  {
    slug: "commercial-video",
    eyebrow: "REEL FORGE /",
    title: "COMMERCIAL VIDEO",
    description: "Our video production delivers high-converting commercial ads, 3D motion clips, and product showreels.",
    items: ["Commercial Video Ads", "3D Motion Clips", "Showreels"],
    number: "10",
    icon: Video,
    color: "#060509",
    textColor: "#F8F9FA",
    accentTag: "rgba(239, 65, 54, 0.25)",
  },
  {
    slug: "cro-revenue",
    eyebrow: "INSIGHT FURNACE /",
    title: "CRO REVENUE LIFT",
    description: "Our conversion rate optimization runs data-driven A/B testing and removes checkout friction to lift conversions without extra ad spend.",
    items: ["A/B Testing Engine", "Friction Removal", "Revenue Lift"],
    number: "11",
    icon: Gauge,
    color: "#EF4136",
    textColor: "#FFFFFF",
    accentTag: "rgba(255, 255, 255, 0.2)",
  },
  {
    slug: "reputation-shield",
    eyebrow: "REPUTATION SHIELD /",
    title: "GLOBAL PR ENGINE",
    description: "Our online reputation management runs proactive review growth, press-release networks, and crisis PR defense across global channels.",
    items: ["Global Press Release", "Review Growth Engine", "Brand Defense"],
    number: "12",
    icon: ShieldCheck,
    color: "#FFFFFF",
    textColor: "#0F172A",
    accentTag: "rgba(15, 23, 42, 0.12)",
  },
];

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export default function StackedServicesSection({ onSelectService, navigate }) {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const wordsRef = useRef([]);
  const cardRefs = useRef([]);
  const currentIndexRef = useRef(null);
  const progressLineRef = useRef(null);

  const targetRef = useRef(0);
  const currentRef = useRef(0);
  const animFrameRef = useRef(null);

  const handleCardClick = (service) => {
    if (navigate) {
      navigate(`/services/${service.slug}`);
    } else if (onSelectService) {
      onSelectService();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const distance = sectionRef.current.offsetHeight - window.innerHeight;
      targetRef.current = distance > 0 ? clamp(-rect.top / distance, 0, 1) : 0;
    };

    const render = () => {
      const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
      const lerpSpeed = isMobile ? 0.055 : 0.065;
      currentRef.current += (targetRef.current - currentRef.current) * lerpSpeed;
      if (Math.abs(targetRef.current - currentRef.current) < 0.0001) {
        currentRef.current = targetRef.current;
      }

      const scene = currentRef.current * (services.length - 1);

      if (progressLineRef.current) {
        progressLineRef.current.style.transform = `scaleX(${currentRef.current.toFixed(4)})`;
      }

      if (stageRef.current) {
        stageRef.current.style.setProperty("--progress", currentRef.current.toFixed(4));
      }

      // 3D Card Stack Physics Animation — continuous tight card stacking with crisp cards
      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const delta = index - scene;
        const capped = clamp(delta, -1.4, 1.65);
        const y = capped < 0 ? capped * 120 : capped * 32;
        const rotation = capped < 0 ? capped * 5 : capped * 6;
        const scale = capped < 0 ? 1 - Math.min(Math.abs(capped), 1) * 0.06 : 1 - Math.min(capped, 1) * 0.04;
        const opacity = delta < -0.85 ? clamp((delta + 1.16) / 0.31, 0, 1) : delta > 1.2 ? clamp((1.55 - delta) / 0.35, 0, 1) : 1;

        card.style.transform = `translate3d(-50%, calc(-50% + ${y}%), 0) rotate(${rotation}deg) scale(${scale})`;
        card.style.opacity = opacity.toFixed(3);
        card.style.filter = "none";
        card.style.zIndex = 50 - Math.round(Math.abs(delta) * 10) + index;
      });

      // Background Kinetic Typography Animation matching exact code
      wordsRef.current.forEach((word, index) => {
        if (!word) return;
        const direction = index === 1 ? 1 : -1;
        const travel = scene * (4.5 + index * 1.4) * direction;
        word.style.transform = `translate3d(${travel}px, ${-scene * (5 + index * 3)}px, 0)`;
      });

      const activeNum = String(Math.round(scene) + 1).padStart(2, "0");
      if (currentIndexRef.current && currentIndexRef.current.textContent !== activeNum) {
        currentIndexRef.current.textContent = activeNum;
      }

      animFrameRef.current = requestAnimationFrame(render);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();
    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="scroll-story" aria-label="BrandForge Services">
      <style>{styles}</style>

      <div ref={stageRef} className="stage">
        <div className="showcase">
          
          {/* KINETIC BACKGROUND TYPOGRAPHY */}
          <div className="background-type" aria-hidden="true">
            <span ref={(el) => (wordsRef.current[0] = el)} className="word word-1">BRANDFORGE</span>
            <span ref={(el) => (wordsRef.current[1] = el)} className="word word-2">WHAT WE DO</span>
            <span ref={(el) => (wordsRef.current[2] = el)} className="word word-3">SERVICES</span>
          </div>

          {/* 3D CARDS STACK STAGE */}
          <div className="card-stack">
            {services.map((service, index) => {
              const isRed = service.color === "#EF4136";
              const isDark = service.color === "#0B0B0C" || service.color === "#060509";
              const Icon = service.icon;

              return (
              <article
                key={service.number}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`service-card ${isDark ? "dark-theme-card" : ""} ${isRed ? "red-theme-card" : ""}`}
                style={{
                  backgroundColor: service.color,
                  color: service.textColor,
                }}
                onClick={() => handleCardClick(service)}
              >
                <div className="card-cyber-border" />
                <div className="card-shine" aria-hidden="true" />

                <div className="card-icon-badge">
                  <Icon size={24} strokeWidth={2.2} />
                </div>

                <header className="card-heading">
                  <h2>
                    <span>{service.eyebrow}</span>
                    <span className="accent-title">{service.title}</span>
                  </h2>
                  <p>{service.description}</p>
                </header>

                <footer className="card-footer">
                  <ul className="card-items-list">
                    {service.items.map((item, iIdx) => (
                      <li key={iIdx} style={{ background: service.accentTag }}>
                        <CheckCircle2 size={13} className="item-check-icon" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="card-footer-right">
                    <span className="card-number" style={{ color: service.color === "#EF4136" ? "#FFFFFF" : "#EF4136" }}>
                      {service.number}
                    </span>
                    <button className="card-action-btn" onClick={(e) => { e.stopPropagation(); handleCardClick(service); }}>
                      <span>FORGE</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </footer>
              </article>
              );
            })}
          </div>

          {/* SIDE MARK BADGE */}
          <div className="side-mark" aria-hidden="true">
            <strong>BF.</strong>
            <span>Made for motion</span>
          </div>

          {/* SCROLL INDEX PROGRESS INDICATOR */}
          <div className="scroll-index" aria-hidden="true">
            <span ref={currentIndexRef} className="current-index">01</span>
            <i className="progress-track-bar">
              <span ref={progressLineRef} className="progress-fill-line" style={{ transform: `scaleX(0)` }} />
            </i>
            <span>12</span>
          </div>

        </div>
      </div>
    </section>
  );
}

const styles = `
.scroll-story {
  position: relative;
  height: 680vh;
  background: #030305;
}

.stage {
  --progress: 0;
  position: sticky;
  top: 0;
  display: grid;
  width: 100%;
  height: 100vh;
  place-items: center;
  overflow: hidden;
  background: #030305;
}

.showcase {
  container-type: size;
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  border: 0;
  border-radius: 0;
  background: #060509;
  box-shadow: none;
  isolation: isolate;
}

.background-type {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  font-weight: 950;
  letter-spacing: -.06em;
  line-height: .69;
  pointer-events: none;
  filter: blur(7px);
  opacity: 0.85;
  user-select: none;
  font-family: 'Outfit', sans-serif;
}

.word {
  position: absolute;
  display: block;
  white-space: nowrap;
  will-change: transform;
}

.word-1 { 
  top: 2.5%; 
  left: 1%; 
  font-size: clamp(55px, 14.5cqw, 230px); 
  color: rgba(239, 65, 54, 0.22);
}
.word-2 { 
  top: 40.5%; 
  right: 1%; 
  color: rgba(255, 255, 255, 0.14); 
  font-size: clamp(50px, 13.5cqw, 215px); 
}
.word-3 { 
  top: 73%; 
  left: 25%; 
  color: rgba(239, 65, 54, 0.18); 
  font-size: clamp(65px, 16.5cqw, 260px); 
}

.card-stack {
  position: absolute;
  inset: 0;
  z-index: 2;
  perspective: 1100px;
}

.service-card {
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  width: min(38cqw, 60cqh);
  aspect-ratio: 1.03/1;
  flex-direction: column;
  justify-content: space-between;
  padding: clamp(20px, 2.5cqw, 38px);
  overflow: hidden;
  border-radius: 28px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
  opacity: 0;
  transform: translate3d(-50%, 125%, 0) rotate(8deg) scale(.95);
  transform-origin: 50% 50%;
  will-change: transform, opacity;
  backface-visibility: hidden;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  border-color: #EF4136;
  box-shadow: 0 26px 60px rgba(239, 65, 54, 0.35);
}

.dark-theme-card {
  border: 1px solid rgba(239, 65, 54, 0.35);
  box-shadow: 0 20px 50px rgba(239, 65, 54, 0.15);
}

/* Diagonal light sweep on hover */
.card-shine {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background: linear-gradient(115deg, transparent 32%, rgba(255, 255, 255, 0.35) 46%, transparent 60%);
  transform: translateX(-130%);
  transition: transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
}

.service-card:hover .card-shine {
  transform: translateX(130%);
}

/* Icon badge */
.card-icon-badge {
  position: relative;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: clamp(38px, 4.6cqw, 58px);
  height: clamp(38px, 4.6cqw, 58px);
  margin-bottom: clamp(12px, 1.6cqw, 22px);
  border-radius: 16px;
  background: rgba(239, 65, 54, 0.12);
  border: 1px solid rgba(239, 65, 54, 0.3);
  color: #EF4136;
  animation: bfIconPulse 2.6s ease-in-out infinite;
}

.card-icon-badge svg {
  transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}

.service-card:hover .card-icon-badge svg {
  transform: scale(1.15) rotate(-8deg);
}

.dark-theme-card .card-icon-badge {
  background: rgba(239, 65, 54, 0.16);
  border-color: rgba(239, 65, 54, 0.4);
  color: #EF4136;
}

.red-theme-card .card-icon-badge {
  background: rgba(255, 255, 255, 0.18);
  border-color: rgba(255, 255, 255, 0.4);
  color: #FFFFFF;
  animation-name: bfIconPulseWhite;
}

@keyframes bfIconPulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(239, 65, 54, 0.35); }
  50% { box-shadow: 0 0 0 9px rgba(239, 65, 54, 0); }
}

@keyframes bfIconPulseWhite {
  0%, 100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.35); }
  50% { box-shadow: 0 0 0 9px rgba(255, 255, 255, 0); }
}

.card-heading h2 {
  margin: 0;
  font-size: clamp(24px, 3.8cqw, 54px);
  font-weight: 950;
  letter-spacing: -.065em;
  line-height: .88;
  text-transform: uppercase;
  font-family: 'Outfit', sans-serif;
}

.card-heading h2 span {
  display: block;
}

.accent-title {
  color: #EF4136;
}

.dark-theme-card .accent-title {
  color: #EF4136;
}

.red-theme-card .accent-title {
  color: #FFFFFF;
}

.card-heading p {
  width: 90%;
  margin: clamp(10px, 1.4cqw, 20px) 0 0;
  font-size: clamp(8px, 1cqw, 14px);
  font-weight: 500;
  letter-spacing: -.02em;
  line-height: 1.4;
  opacity: 0.9;
  font-family: 'Plus Jakarta Sans', sans-serif;
}

.card-footer {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
}

.card-items-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.card-items-list li {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: clamp(8px, 1cqw, 13px);
  font-weight: 700;
  letter-spacing: -.03em;
  padding: 4px 10px;
  border-radius: 9999px;
  font-family: 'JetBrains Mono', monospace;
}

.item-check-icon {
  color: #EF4136;
}

.card-footer-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
}

.card-number {
  position: relative;
  display: block;
  font-size: clamp(28px, 4.2cqw, 64px);
  font-weight: 900;
  letter-spacing: -.075em;
  line-height: .75;
  font-family: 'Outfit', sans-serif;
  color: #EF4136;
}

.card-number::before {
  content: "";
  position: absolute;
  inset: -14px -18px;
  border: 1px dashed currentColor;
  border-radius: 50%;
  opacity: 0.28;
  z-index: -1;
  animation: bfNumberSpin 14s linear infinite;
}

@keyframes bfNumberSpin {
  to { transform: rotate(360deg); }
}

.card-action-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #EF4136;
  color: #FFFFFF;
  border: none;
  font-family: 'Outfit', sans-serif;
  font-size: 0.72rem;
  font-weight: 900;
  padding: 6px 14px;
  border-radius: 9999px;
  cursor: pointer;
  letter-spacing: 0.05em;
}

.side-mark {
  position: absolute;
  z-index: 5;
  top: 42%;
  right: 0;
  display: flex;
  width: clamp(19px, 2.6cqw, 38px);
  height: clamp(60px, 10.4cqh, 94px);
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 6px 3px;
  background: #EF4136;
  color: #fff;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}

.side-mark strong {
  font-size: clamp(8px, 1.1cqw, 15px);
  line-height: 1;
  font-family: 'Outfit', sans-serif;
}

.side-mark span {
  font-size: clamp(4px, .45cqw, 7px);
  font-weight: 700;
  line-height: 1;
  white-space: nowrap;
  writing-mode: vertical-rl;
  font-family: 'JetBrains Mono', monospace;
}

.scroll-index {
  position: absolute;
  z-index: 4;
  right: clamp(18px, 2cqw, 31px);
  bottom: clamp(16px, 2.2cqh, 25px);
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: clamp(7px, .72cqw, 11px);
  font-weight: 800;
  letter-spacing: -.04em;
  color: #FFFFFF;
  font-family: 'JetBrains Mono', monospace;
}

.progress-track-bar {
  position: relative;
  display: block;
  width: clamp(20px, 3.6cqw, 52px);
  height: 2px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 9999px;
}

.progress-fill-line {
  position: absolute;
  inset: 0;
  background: #EF4136;
  transform-origin: left;
}

@media (max-width: 1024px) {
  .scroll-story { height: 750vh; }
}

@media (max-width: 768px) {
  .scroll-story { height: 850vh; }
  .showcase { width: 100vw; height: 100vh; }
  .background-type { filter: blur(5px); opacity: 0.65; }
  .word-1 { top: 6%; left: 2%; font-size: clamp(38px, 14cqw, 90px); }
  .word-2 { top: 44%; right: 2%; font-size: clamp(34px, 12.5cqw, 82px); }
  .word-3 { top: 76%; left: 4%; font-size: clamp(42px, 15.5cqw, 100px); }
  
  .service-card { 
    width: min(86cqw, 54cqh); 
    padding: clamp(18px, 4.8cqw, 28px);
    border-radius: 22px;
  }
  .card-heading h2 { font-size: clamp(22px, 7.2cqw, 38px); line-height: 0.95; }
  .card-heading p { 
    width: 96%; 
    font-size: clamp(9px, 2.6cqw, 13px); 
    line-height: 1.45;
    margin-top: 10px;
  }
  .card-items-list li { font-size: clamp(8px, 2.4cqw, 12px); padding: 3px 8px; }
  .card-number { font-size: clamp(28px, 8cqw, 48px); }
  .card-action-btn { font-size: 0.68rem; padding: 5px 12px; }
  .card-icon-badge { width: clamp(34px, 9cqw, 44px); height: clamp(34px, 9cqw, 44px); margin-bottom: 10px; }
  .side-mark { opacity: 0.7; scale: 0.85; right: -2px; }
  .scroll-index { right: 14px; bottom: 14px; }
}

@media (prefers-reduced-motion: reduce) {
  .card-icon-badge,
  .card-number::before {
    animation: none;
  }
  .card-shine {
    display: none;
  }
}
`;
