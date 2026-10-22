"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import { Zap, Sparkles, CheckCircle2 } from "lucide-react";
import LetsTalkForm from "./LetsTalkForm";
import KexsioCanvasBackground from "./KexsioCanvasBackground";

function StoryPillarCard({ pillar, index }) {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const pxX = useMotionValue(150);
  const pxY = useMotionValue(150);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);
  const translateX = useTransform(mouseXSpring, [-0.5, 0.5], [-8, 8]);
  const translateY = useTransform(mouseYSpring, [-0.5, 0.5], [-8, 8]);

  const glareBg = useMotionTemplate`radial-gradient(280px circle at ${pxX}px ${pxY}px, rgba(239, 65, 54, 0.14), transparent 75%)`;

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    pxX.set(mouseX);
    pxY.set(mouseY);
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  const PillarIcon = pillar.icon || Zap;
  const pillarDesc = pillar.description
    ? (pillar.description.length > 130 ? pillar.description.slice(0, 127) + "..." : pillar.description)
    : (pillar.deliverables?.[0] || "");

  return (
    <motion.div
      animate={{
        y: index % 2 === 0 ? [-6, 6, -6] : [6, -6, 6],
      }}
      transition={{
        duration: 4.5 + index * 0.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="sg-story-pillar-3d"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          x: translateX,
          y: translateY,
          transformStyle: "preserve-3d",
        }}
        className={`sg-story-pillar-inner ${hovered ? "is-hovered" : ""}`}
      >
        {/* Cursor-Tracking Radial Spotlight Glare */}
        <motion.div
          className="sg-pillar-glare"
          style={{
            background: glareBg,
            opacity: hovered ? 1 : 0,
          }}
        />

        {/* Top pillar row */}
        <div className="sg-pillar-top-meta" style={{ transform: "translateZ(28px)" }}>
          <span className="sg-pillar-node-id">Core Pillar 0{index + 1}</span>
        </div>

        {/* Center content */}
        <div className="sg-pillar-main" style={{ transform: "translateZ(36px)" }}>
          <motion.div
            className="sg-pillar-icon-wrap"
            animate={{
              rotateZ: hovered ? [0, -8, 8, 0] : 0,
              scale: hovered ? 1.08 : 1,
            }}
            transition={{ duration: 0.45 }}
          >
            <PillarIcon size={22} className="sg-pillar-icon" />
            <span className="sg-pillar-icon-pulse" />
          </motion.div>

          <h4 className="sg-pillar-title">{pillar.title}</h4>
          <p className="sg-pillar-desc">{pillarDesc}</p>
        </div>

        {/* Bottom Conduit Indicator */}
        <div className="sg-pillar-conduit" style={{ transform: "translateZ(24px)" }}>
          <div className="sg-pillar-conduit-bar" />
          <span className="sg-pillar-status-text">
            <span className="status-ping" />
            VERIFIED DELIVERY
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

const SERVICE_STORY_CONFIGS = {
  "seo-geo": {
    blueprintTag: "TECHNICAL CRAWL & GEO VECTOR ARCHITECTURE",
    keywords: [
      { key: "Google Maps 3-Pack", tooltip: "High-intent localized pack dominance in Coimbatore & surrounding commercial hubs." },
      { key: "ChatGPT Neural Answers", tooltip: "Direct knowledge-base entity indexing so LLMs cite your brand as the #1 answer." },
      { key: "Zero-Click Citations", tooltip: "Capturing answer overviews without relying on disappearing organic blue clicks." },
      { key: "Core Web Vitals 100/100", tooltip: "Sub-200ms DOM hydration built on modern high-speed Jamstack code." }
    ]
  },
  "paid-media": {
    blueprintTag: "SERVER-SIDE CAPI & ROAS CONVERSION ARCHITECTURE",
    keywords: [
      { key: "Server-Side CAPI", tooltip: "100% loss-less attribution via direct Meta and Google Server APIs." },
      { key: "Smart Bidding AI", tooltip: "Target ROAS and CPA bid optimization powered by in-market predictive signals." },
      { key: "High-Intent Keywords", tooltip: "Capturing active commercial searchers ready to convert immediately." },
      { key: "Omnichannel Attribution", tooltip: "Real-time blended ROAS measurement across Google, Meta, and LinkedIn." }
    ]
  },
  "web-foundry": {
    blueprintTag: "SUB-SECOND JAMSTACK & REACT DOM ARCHITECTURE",
    keywords: [
      { key: "Sub-200ms Hydration", tooltip: "Ultra-fast Next.js edge caching and optimized React bundle sizes." },
      { key: "100/100 Core Web Vitals", tooltip: "Perfect Lighthouse benchmarks for optimal search ranking and user retention." },
      { key: "Conversion UI Ergonomics", tooltip: "High-velocity checkout flows and frictionless mobile form architectures." },
      { key: "Enterprise Security", tooltip: "Zero-day vulnerability shielding, automated SSL, and SOC2 compliance." }
    ]
  },
  "viral-social": {
    blueprintTag: "ALGORITHMIC RETENTION & VIRAL AUDIENCE ARCHITECTURE",
    keywords: [
      { key: "85% Video Retention", tooltip: "High-retention editing, sound design, and pacing calibrated for algorithm feeds." },
      { key: "Social Search SEO", tooltip: "Optimizing captions and audio keywords for Instagram and TikTok search." },
      { key: "Link-in-Bio Pipelines", tooltip: "Direct conversion funnels routing casual viewers into qualified buyer leads." },
      { key: "Omnichannel Syndication", tooltip: "Systematic multi-platform distribution across Reels, Shorts, and TikTok." }
    ]
  },
  "influencer-network": {
    blueprintTag: "AUDITED CREATOR ROI & ATTRIBUTION ARCHITECTURE",
    keywords: [
      { key: "Zero-Fraud Auditing", tooltip: "Algorithmic scanning for ghost followers and artificial engagement pods." },
      { key: "Audience Demographics", tooltip: "Matching creator followers with verified high-LTV customer personas." },
      { key: "Trackable ROAS", tooltip: "Dedicated UTM parameters and promo codes for deterministic attribution." },
      { key: "Tier-1 Ambassador Moat", tooltip: "Long-term creator partnerships that build compounding brand equity." }
    ]
  },
  "content-smithy": {
    blueprintTag: "TOPICAL AUTHORITY & EDITORIAL GRAPH ARCHITECTURE",
    keywords: [
      { key: "Semantic Topic Clusters", tooltip: "Exhaustive knowledge hubs demonstrating topical mastery to search engines." },
      { key: "Perplexity Citations", tooltip: "Research-grounded copy engineered to be extracted as primary AI citations." },
      { key: "High-Ticket B2B Copy", tooltip: "Technical whitepapers and articles that educate and convince executive buyers." },
      { key: "Tier-1 Press Placements", tooltip: "Authoritative bylines and editorial features in leading industry publications." }
    ]
  },
  "inbox-edge": {
    blueprintTag: "DELIVERABILITY & AUTOMATED LIFECYCLE ARCHITECTURE",
    keywords: [
      { key: "99.8% Inbox Landing", tooltip: "Rigorous SPF, DKIM, and DMARC enforcement with automated list hygiene." },
      { key: "Behavioral Send-Time AI", tooltip: "Individualized delivery timing when recipients are most likely to open." },
      { key: "Cart Recovery Flows", tooltip: "Multi-touch abandoned checkout sequences recovering high-margin sales." },
      { key: "Zero-Spam Whitelist", tooltip: "Top-tier sender reputation across Google Workspace and Microsoft 365." }
    ]
  },
  "brand-anvil": {
    blueprintTag: "CATEGORY MONOPOLY & STRATEGIC POSITIONING BLUEPRINT",
    keywords: [
      { key: "Category Monopoly", tooltip: "Carving an uncontested market niche where price sensitivity disappears." },
      { key: "Knowledge Panel Moat", tooltip: "Institutional entity authority verified across Google and commercial graphs." },
      { key: "Value Pricing Power", tooltip: "Packaging capabilities to justify premium enterprise contract sizes." },
      { key: "Industry Analyst Renown", tooltip: "Positioning leadership as the definitive category standard and authority." }
    ]
  },
  "visual-id": {
    blueprintTag: "ENTERPRISE DESIGN SYSTEM & TOKEN ARCHITECTURE",
    keywords: [
      { key: "Figma Token Library", tooltip: "Unified multi-platform design tokens for rapid and flawless brand execution." },
      { key: "Golden Ratio Hierarchy", tooltip: "Mathematical layout structures that guide user attention effortlessly." },
      { key: "Multi-Platform Cohesion", tooltip: "Pixel-perfect visual consistency across web, apps, pitch decks, and print." },
      { key: "Awwwards-Caliber Finish", tooltip: "World-class aesthetic distinction that elevates brand perception immediately." }
    ]
  },
  "commercial-video": {
    blueprintTag: "CINEMA-GRADE PRODUCTION & CONVERSION ARCHITECTURE",
    keywords: [
      { key: "4K Raw Cinema", tooltip: "High-end cinema cameras, custom lighting rigs, and professional audio capture." },
      { key: "3-Second Hook Testing", tooltip: "Optimizing opening frames for maximum thumb-stop rate on social feeds." },
      { key: "Direct-Response Direction", tooltip: "Visual and narrative pacing engineered to maximize viewer action." },
      { key: "DaVinci Color Mastering", tooltip: "Hollywood-grade color grading and sound design for premium prestige." }
    ]
  },
  "cro-revenue": {
    blueprintTag: "SCIENTIFIC A/B SPLIT TESTING & TELEMETRY ARCHITECTURE",
    keywords: [
      { key: "Sub-Pixel Heatmaps", tooltip: "Detailed cursor telemetry and scroll tracking revealing UX friction." },
      { key: "Bayesian Significance", tooltip: "Rigorous statistical validation ensuring wins translate to real revenue." },
      { key: "Checkout Friction Audit", tooltip: "Systematic elimination of form fields and hurdles that cause drop-off." },
      { key: "+84% Revenue / Visitor", tooltip: "Proven optimization framework generating more profit from existing traffic." }
    ]
  },
  "reputation-shield": {
    blueprintTag: "24/7 BRAND SENTIMENT & SERP DEFENSE ARCHITECTURE",
    keywords: [
      { key: "24/7 Sentiment Radar", tooltip: "Automated real-time monitoring across Google Reviews, forums, and press." },
      { key: "LLM De-biasing", tooltip: "Feeding positive entity signals to prevent AI chat tools from repeating rumors." },
      { key: "5-Star Review Funnels", tooltip: "Automated post-purchase prompts turning happy buyers into public advocates." },
      { key: "Page 1 Fortification", tooltip: "Flooding top search results with owned high-authority positive brand assets." }
    ]
  }
};

// Regional aliases for story configs
SERVICE_STORY_CONFIGS["seo-company-coimbatore"] = SERVICE_STORY_CONFIGS["seo-geo"];
SERVICE_STORY_CONFIGS["ppc-company-coimbatore"] = SERVICE_STORY_CONFIGS["paid-media"];
SERVICE_STORY_CONFIGS["website-development-company-coimbatore"] = SERVICE_STORY_CONFIGS["web-foundry"];
SERVICE_STORY_CONFIGS["web-development-company-coimbatore"] = SERVICE_STORY_CONFIGS["web-foundry"];
SERVICE_STORY_CONFIGS["social-media-marketing-company-coimbatore"] = SERVICE_STORY_CONFIGS["viral-social"];
SERVICE_STORY_CONFIGS["social-media-agency-coimbatore"] = SERVICE_STORY_CONFIGS["viral-social"];
SERVICE_STORY_CONFIGS["influencer-marketing-coimbatore"] = SERVICE_STORY_CONFIGS["influencer-network"];
SERVICE_STORY_CONFIGS["content-marketing-agency-coimbatore"] = SERVICE_STORY_CONFIGS["content-smithy"];
SERVICE_STORY_CONFIGS["content-marketing-company-coimbatore"] = SERVICE_STORY_CONFIGS["content-smithy"];
SERVICE_STORY_CONFIGS["email-marketing-company-coimbatore"] = SERVICE_STORY_CONFIGS["inbox-edge"];
SERVICE_STORY_CONFIGS["email-marketing-agency-coimbatore"] = SERVICE_STORY_CONFIGS["inbox-edge"];
SERVICE_STORY_CONFIGS["brand-positioning-agency-coimbatore"] = SERVICE_STORY_CONFIGS["brand-anvil"];
SERVICE_STORY_CONFIGS["brand-position-agency-coimbatore"] = SERVICE_STORY_CONFIGS["brand-anvil"];
SERVICE_STORY_CONFIGS["brand-positioning-company-coimbatore"] = SERVICE_STORY_CONFIGS["brand-anvil"];
SERVICE_STORY_CONFIGS["brand-identity-design-agency-coimbatore"] = SERVICE_STORY_CONFIGS["visual-id"];
SERVICE_STORY_CONFIGS["brand-identity-design-company-coimbatore"] = SERVICE_STORY_CONFIGS["visual-id"];
SERVICE_STORY_CONFIGS["video-production-editing-company-coimbatore"] = SERVICE_STORY_CONFIGS["commercial-video"];
SERVICE_STORY_CONFIGS["brand-reputation-management-coimbatore"] = SERVICE_STORY_CONFIGS["reputation-shield"];

const SERVICE_SKETCH_ASSETS = {
  "seo-geo": "/seo-sketch-diagram-transparent.png",
  "paid-media": "/sketch-paid-media-transparent.png",
  "web-foundry": "/sketch-web-foundry-transparent.png",
  "viral-social": "/sketch-viral-social-transparent.png",
  "influencer-network": "/sketch-influencer-network-transparent.png",
  "content-smithy": "/sketch-content-smithy-transparent.png",
  "inbox-edge": "/sketch-inbox-edge-transparent.png",
  "brand-anvil": "/sketch-brand-anvil-transparent.png",
  "visual-id": "/sketch-visual-id-transparent.png",
  "commercial-video": "/sketch-commercial-video-transparent.png",
  "cro-revenue": "/sketch-cro-revenue-transparent.png",
  "reputation-shield": "/sketch-reputation-shield-transparent.png",
};

SERVICE_SKETCH_ASSETS["seo-company-coimbatore"] = SERVICE_SKETCH_ASSETS["seo-geo"];
SERVICE_SKETCH_ASSETS["ppc-company-coimbatore"] = SERVICE_SKETCH_ASSETS["paid-media"];
SERVICE_SKETCH_ASSETS["website-development-company-coimbatore"] = SERVICE_SKETCH_ASSETS["web-foundry"];
SERVICE_SKETCH_ASSETS["web-development-company-coimbatore"] = SERVICE_SKETCH_ASSETS["web-foundry"];
SERVICE_SKETCH_ASSETS["social-media-marketing-company-coimbatore"] = SERVICE_SKETCH_ASSETS["viral-social"];
SERVICE_SKETCH_ASSETS["social-media-agency-coimbatore"] = SERVICE_SKETCH_ASSETS["viral-social"];
SERVICE_SKETCH_ASSETS["influencer-marketing-coimbatore"] = SERVICE_SKETCH_ASSETS["influencer-network"];
SERVICE_SKETCH_ASSETS["content-marketing-agency-coimbatore"] = SERVICE_SKETCH_ASSETS["content-smithy"];
SERVICE_SKETCH_ASSETS["content-marketing-company-coimbatore"] = SERVICE_SKETCH_ASSETS["content-smithy"];
SERVICE_SKETCH_ASSETS["email-marketing-company-coimbatore"] = SERVICE_SKETCH_ASSETS["inbox-edge"];
SERVICE_SKETCH_ASSETS["email-marketing-agency-coimbatore"] = SERVICE_SKETCH_ASSETS["inbox-edge"];
SERVICE_SKETCH_ASSETS["brand-positioning-agency-coimbatore"] = SERVICE_SKETCH_ASSETS["brand-anvil"];
SERVICE_SKETCH_ASSETS["brand-position-agency-coimbatore"] = SERVICE_SKETCH_ASSETS["brand-anvil"];
SERVICE_SKETCH_ASSETS["brand-positioning-company-coimbatore"] = SERVICE_SKETCH_ASSETS["brand-anvil"];
SERVICE_SKETCH_ASSETS["brand-identity-design-agency-coimbatore"] = SERVICE_SKETCH_ASSETS["visual-id"];
SERVICE_SKETCH_ASSETS["brand-identity-design-company-coimbatore"] = SERVICE_SKETCH_ASSETS["visual-id"];
SERVICE_SKETCH_ASSETS["video-production-editing-company-coimbatore"] = SERVICE_SKETCH_ASSETS["commercial-video"];
SERVICE_SKETCH_ASSETS["brand-reputation-management-coimbatore"] = SERVICE_SKETCH_ASSETS["reputation-shield"];

export default function InteractiveStorySection({
  data,
  storyHeading,
  topThreePillars,
}) {
  const [activeHighlight, setActiveHighlight] = useState(null);
  const blueprintStageRef = useRef(null);

  const bpMouseX = useMotionValue(0);
  const bpMouseY = useMotionValue(0);

  const bpSpringX = useSpring(bpMouseX, { stiffness: 120, damping: 20 });
  const bpSpringY = useSpring(bpMouseY, { stiffness: 120, damping: 20 });

  const bpRotateX = useTransform(bpSpringY, [-1, 1], [11, -11]);
  const bpRotateY = useTransform(bpSpringX, [-1, 1], [-11, 11]);
  const bpTranslateX = useTransform(bpSpringX, [-1, 1], [-16, 16]);
  const bpTranslateY = useTransform(bpSpringY, [-1, 1], [-12, 12]);

  const bpBadge1X = useTransform(bpSpringX, [-1, 1], [-22, 16]);
  const bpBadge1Y = useTransform(bpSpringY, [-1, 1], [-16, 12]);
  const bpBadge2X = useTransform(bpSpringX, [-1, 1], [16, -22]);
  const bpBadge2Y = useTransform(bpSpringY, [-1, 1], [12, -16]);

  const handleBlueprintMouseMove = (e) => {
    if (!blueprintStageRef.current) return;
    const rect = blueprintStageRef.current.getBoundingClientRect();
    const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const normY = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    bpMouseX.set(normX);
    bpMouseY.set(normY);
  };

  const handleBlueprintMouseLeave = () => {
    bpMouseX.set(0);
    bpMouseY.set(0);
  };

  const currentSlug = data?.slug || "seo-geo";
  const storyConfig = SERVICE_STORY_CONFIGS[currentSlug] || SERVICE_STORY_CONFIGS["seo-geo"];
  const keywords = storyConfig.keywords;
  const blueprintTag = storyConfig.blueprintTag;
  const sketchImg = SERVICE_SKETCH_ASSETS[currentSlug] || SERVICE_SKETCH_ASSETS["seo-geo"];

  return (
    <section className="sg-seo-story-section">
      <style>{storyStyles}</style>
      <KexsioCanvasBackground theme="light" opacity={0.4} />

      <div className="sg-container">
        {/* SPLIT GRID: STORY & LEAD FORM */}
        <div className="sg-seo-split-grid">
          {/* LEFT COLUMN: THE EDITORIAL STORY */}
          <motion.div
            className="sg-seo-story-left"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="sg-tech-pill inline-pill">
              <span className="sg-tech-pill-dot">•</span>
              <span>{storyHeading.pill}</span>
              <span className="sg-tech-pill-dot">•</span>
            </div>

            <h2 className="sg-seo-story-heading">
              {storyHeading.lead} <span>{storyHeading.accent}</span>
            </h2>

            {/* Interactive Keyword Pills */}
            <div className="sg-story-interactive-pills">
              <span className="pills-label">CORE VECTORS:</span>
              {keywords.map((kw, i) => (
                <div
                  key={i}
                  className={`sg-interactive-kw-pill ${activeHighlight === i ? "is-active" : ""}`}
                  onMouseEnter={() => setActiveHighlight(i)}
                  onMouseLeave={() => setActiveHighlight(null)}
                >
                  <Sparkles size={11} className="kw-icon" />
                  <span>{kw.key}</span>
                  {activeHighlight === i && (
                    <motion.div
                      className="sg-kw-tooltip"
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {kw.tooltip}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            <div className="sg-seo-story-body">
              {Array.isArray(data.subtitle) ? (
                data.subtitle.map((para, i) => (
                  <p key={i} className={`sg-seo-story-para ${i === 0 ? "lead-para" : ""}`}>
                    {para}
                  </p>
                ))
              ) : typeof data.subtitle === "string" && data.subtitle.includes("\n\n") ? (
                data.subtitle.split("\n\n").map((para, i) => (
                  <p key={i} className={`sg-seo-story-para ${i === 0 ? "lead-para" : ""}`}>
                    {para}
                  </p>
                ))
              ) : (
                <p className="sg-seo-story-para lead-para">{data.subtitle}</p>
              )}
            </div>

            {/* Interactive 3D Levitating Architecture Blueprint Stage */}
            <div
              ref={blueprintStageRef}
              onMouseMove={handleBlueprintMouseMove}
              onMouseLeave={handleBlueprintMouseLeave}
              className="sg-story-blueprint-card"
            >
              <div className="blueprint-top-bar">
                <span className="blueprint-tag">{blueprintTag}</span>
                <span className="blueprint-indicator">PROPRIETARY BLUEPRINT</span>
              </div>

              <motion.div
                style={{
                  rotateX: bpRotateX,
                  rotateY: bpRotateY,
                  x: bpTranslateX,
                  y: bpTranslateY,
                  transformStyle: "preserve-3d",
                }}
                className="blueprint-img-wrap"
              >
                <div className="blueprint-ambient-glow" />

                <motion.div
                  animate={{
                    y: [-8, 8, -8],
                    rotateZ: [-0.8, 0.8, -0.8],
                  }}
                  transition={{
                    duration: 5.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{ transform: "translateZ(35px)", width: "100%" }}
                >
                  <img
                    src={sketchImg}
                    alt={`BrandForge ${data.title || "Enterprise"} Architecture Schematic`}
                    className="sg-story-blueprint-img"
                  />
                </motion.div>

                {/* Floating Liquid Glass Badge 1 */}
                {keywords[0] && (
                  <motion.div
                    style={{
                      x: bpBadge1X,
                      y: bpBadge1Y,
                      transform: "translateZ(65px)",
                    }}
                    animate={{
                      y: [-5, 5, -5],
                    }}
                    transition={{
                      duration: 4.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="sg-blueprint-glass-badge badge-top-left"
                  >
                    <span className="glass-badge-dot" />
                    <span>{keywords[0].key}</span>
                  </motion.div>
                )}

                {/* Floating Liquid Glass Badge 2 */}
                {keywords[1] && (
                  <motion.div
                    style={{
                      x: bpBadge2X,
                      y: bpBadge2Y,
                      transform: "translateZ(65px)",
                    }}
                    animate={{
                      y: [5, -5, 5],
                    }}
                    transition={{
                      duration: 4.9,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="sg-blueprint-glass-badge badge-bottom-right"
                  >
                    <CheckCircle2 size={13} className="glass-badge-chk" />
                    <span>{keywords[1].key}</span>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: LEAD CAPTURE FORM */}
          <motion.div
            className="sg-seo-story-right"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="sg-cyber-form-container">
              <div className="sg-inline-form-wrap">
                <LetsTalkForm
                  title="LET'S TALK"
                  subtitle={`Get in touch with our strategy team for ${data.eyebrow} & expect a response within 4 hours`}
                  defaultService={data.eyebrow}
                  compact={true}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3 3D INTERACTIVE PILLAR CARDS */}
        <motion.div
          className="sg-seo-story-pillars"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {topThreePillars.map((pillar, idx) => (
            <StoryPillarCard key={idx} pillar={pillar} index={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const storyStyles = `
  .sg-seo-story-section {
    background: #FFFFFF;
    position: relative;
    padding: clamp(70px, 9vw, 110px) 0;
  }

  .sg-story-telemetry-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #FFFFFF;
    border: 1px solid #E5E7EB;
    border-radius: 14px;
    padding: 12px 20px;
    margin-bottom: 34px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
    font-family: "JetBrains Mono", monospace;
    font-size: 0.75rem;
    color: #4B5563;
  }

  .sg-telemetry-left {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .telemetry-beacon {
    position: relative;
    width: 8px;
    height: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .beacon-dot {
    width: 8px;
    height: 8px;
    background: #059669;
    border-radius: 50%;
    box-shadow: 0 0 10px #059669;
  }

  .beacon-ring {
    position: absolute;
    width: 18px;
    height: 18px;
    border: 1px solid rgba(5, 150, 105, 0.5);
    border-radius: 50%;
    animation: beaconPulse 2s ease-out infinite;
  }

  @keyframes beaconPulse {
    0% { transform: scale(0.6); opacity: 1; }
    100% { transform: scale(1.8); opacity: 0; }
  }

  .telemetry-label {
    color: #6B7280;
    font-weight: 700;
  }

  .telemetry-val {
    color: #0A0A0C;
    font-weight: 800;
  }

  .sg-telemetry-right {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .telemetry-metric strong {
    color: #EF4136;
  }

  .telemetry-sep {
    color: #D1D5DB;
  }

  .sg-seo-story-heading {
    font-family: "Outfit", sans-serif;
    font-size: clamp(28px, 3.6vw, 44px);
    font-weight: 900;
    color: #0A0A0C;
    line-height: 1.18;
    margin: 16px 0 20px;
    letter-spacing: -0.02em;
  }

  .sg-seo-story-heading span {
    color: #EF4136;
  }

  .sg-story-interactive-pills {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
    margin-bottom: 24px;
  }

  .pills-label {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.72rem;
    font-weight: 800;
    color: #EF4136;
    letter-spacing: 0.08em;
    margin-right: 4px;
  }

  .sg-interactive-kw-pill {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    border-radius: 999px;
    background: #F3F4F6;
    border: 1px solid #E5E7EB;
    color: #1F2937;
    font-size: 0.76rem;
    font-family: "JetBrains Mono", monospace;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.25s ease;
  }

  .sg-interactive-kw-pill:hover,
  .sg-interactive-kw-pill.is-active {
    background: rgba(239, 65, 54, 0.08);
    border-color: #EF4136;
    color: #EF4136;
    box-shadow: 0 4px 12px rgba(239, 65, 54, 0.15);
  }

  .kw-icon {
    color: #EF4136;
  }

  .sg-kw-tooltip {
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    width: 240px;
    padding: 10px 14px;
    background: #0A0A0C;
    border: 1px solid #EF4136;
    border-radius: 10px;
    color: #FFFFFF;
    font-size: 0.75rem;
    line-height: 1.45;
    font-family: "Plus Jakarta Sans", sans-serif;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(239, 65, 54, 0.2);
    pointer-events: none;
    z-index: 50;
  }

  .sg-seo-story-para {
    font-size: 16px;
    line-height: 1.7;
    color: #4B5563;
    margin: 0 0 16px;
  }

  .sg-seo-story-para.lead-para {
    font-size: 17.5px;
    font-weight: 600;
    color: #1F2937;
  }

  /* BLUEPRINT SCHEMATIC CARD - 3D LEVITATING STAGE WITH TRANSPARENT IMAGE */
  .sg-story-blueprint-card {
    margin-top: 28px;
    background: transparent;
    border: none;
    border-radius: 0;
    padding: 0;
    box-shadow: none;
    perspective: 1200px;
    cursor: pointer;
  }

  .blueprint-top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    margin-bottom: 18px;
    border-bottom: 1px solid #E5E7EB;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.68rem;
    font-weight: 800;
  }

  .blueprint-tag {
    color: #6B7280;
  }

  .blueprint-indicator {
    color: #EF4136;
    background: rgba(239, 65, 54, 0.08);
    padding: 3px 8px;
    border-radius: 6px;
    border: 1px solid rgba(239, 65, 54, 0.2);
  }

  .blueprint-img-wrap {
    position: relative;
    width: 100%;
    overflow: visible;
    background: transparent;
    border: none;
    box-shadow: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 0;
    transform-style: preserve-3d;
  }

  .blueprint-ambient-glow {
    position: absolute;
    width: 65%;
    height: 65%;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(239, 65, 54, 0.12) 0%, transparent 70%);
    filter: blur(28px);
    pointer-events: none;
    z-index: 0;
    transition: transform 0.5s ease, opacity 0.5s ease;
    opacity: 0.6;
  }

  .sg-story-blueprint-card:hover .blueprint-ambient-glow {
    transform: scale(1.25);
    opacity: 1;
  }

  .sg-story-blueprint-img {
    position: relative;
    z-index: 2;
    width: 100%;
    height: auto;
    object-fit: contain;
    background: transparent;
    filter: drop-shadow(0 18px 28px rgba(10, 10, 12, 0.08));
    transition: transform 0.4s ease, filter 0.4s ease;
  }

  .sg-story-blueprint-card:hover .sg-story-blueprint-img {
    transform: scale(1.03);
    filter: drop-shadow(0 24px 36px rgba(239, 65, 54, 0.14));
  }

  .sg-blueprint-glass-badge {
    position: absolute;
    z-index: 10;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 14px;
    border-radius: 999px;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.85) 0%,
      rgba(255, 255, 255, 0.65) 100%
    );
    backdrop-filter: blur(10px) saturate(180%);
    -webkit-backdrop-filter: blur(10px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.95);
    box-shadow:
      0 10px 24px rgba(10, 10, 12, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 1);
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 0.76rem;
    font-weight: 800;
    color: #0A0A0C;
    pointer-events: none;
    white-space: nowrap;
    will-change: transform;
  }

  .sg-blueprint-glass-badge.badge-top-left {
    top: 8px;
    left: 6px;
  }

  .sg-blueprint-glass-badge.badge-bottom-right {
    bottom: 10px;
    right: 6px;
  }

  .glass-badge-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #EF4136;
    box-shadow: 0 0 8px rgba(239, 65, 54, 0.6);
  }

  .glass-badge-chk {
    color: #EF4136;
  }

  /* 3D PILLAR CARDS */
  .sg-story-pillar-3d {
    perspective: 1200px;
    transform-style: preserve-3d;
    will-change: transform;
  }

  .sg-story-pillar-inner {
    position: relative;
    background: #FFFFFF;
    border: 1px solid #E5E7EB;
    border-radius: 20px;
    padding: 26px 24px;
    overflow: hidden;
    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
    min-height: 220px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .sg-story-pillar-inner.is-hovered {
    border-color: #EF4136;
    background: #FFFFFF;
    box-shadow: 0 16px 36px rgba(239, 65, 54, 0.12);
    transform: translateZ(10px);
  }

  .sg-pillar-glare {
    position: absolute;
    inset: -50%;
    background: radial-gradient(circle at 50% 50%, rgba(239, 65, 54, 0.08) 0%, transparent 60%);
    pointer-events: none;
    transition: opacity 0.3s ease;
  }

  .sg-pillar-top-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.7rem;
    font-weight: 800;
  }

  .sg-pillar-node-id {
    color: #9CA3AF;
    letter-spacing: 0.06em;
  }

  .sg-pillar-proof-tag {
    color: #EF4136;
    background: rgba(239, 65, 54, 0.08);
    padding: 3px 8px;
    border-radius: 6px;
    border: 1px solid rgba(239, 65, 54, 0.25);
  }

  .sg-pillar-main {
    flex: 1;
  }

  .sg-pillar-icon-wrap {
    position: relative;
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: rgba(239, 65, 54, 0.1);
    border: 1px solid rgba(239, 65, 54, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #EF4136;
    margin-bottom: 16px;
  }

  .sg-pillar-icon-pulse {
    position: absolute;
    inset: -3px;
    border-radius: 14px;
    border: 1px dashed rgba(239, 65, 54, 0.3);
    animation: spinSlow 20s linear infinite;
  }

  @keyframes spinSlow {
    to { transform: rotate(360deg); }
  }

  .sg-pillar-title {
    font-family: "Outfit", sans-serif;
    font-size: 1.15rem;
    font-weight: 800;
    color: #0A0A0C;
    margin: 0 0 8px;
    letter-spacing: -0.01em;
  }

  .sg-pillar-desc {
    font-size: 0.88rem;
    line-height: 1.55;
    color: #4B5563;
    margin: 0 0 18px;
  }

  .sg-pillar-conduit {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 14px;
    border-top: 1px solid #F3F4F6;
  }

  .sg-pillar-conduit-bar {
    width: 32px;
    height: 2px;
    background: linear-gradient(90deg, #EF4136, transparent);
  }

  .sg-pillar-status-text {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.68rem;
    font-weight: 800;
    color: #6B7280;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .status-ping {
    width: 5px;
    height: 5px;
    background: #059669;
    border-radius: 50%;
    box-shadow: 0 0 6px #059669;
  }

  @media (max-width: 1024px) {
    .sg-story-telemetry-bar { flex-direction: column; gap: 8px; align-items: flex-start; }
    .sg-story-pillar-3d { margin-bottom: 16px; }
  }
`;
