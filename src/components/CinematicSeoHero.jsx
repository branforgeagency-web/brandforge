"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Zap, ArrowRight, Search, Cpu, Globe, CheckCircle2, Sparkles, Check, Star,
  Target, BarChart3, Users, PenTool, MessageSquare, Layers, Video, ShieldCheck
} from "lucide-react";
import KexsioCanvasBackground from "./KexsioCanvasBackground";
import KineticLetterSwap from "./KineticLetterSwap";
import SwapArrow from "./SwapArrow";
import seoBannerVideo from "../assets/seobanner.mp4";

const SERVICE_HERO_CONFIGS = {
  "seo-geo": {
    eyebrow: "NEXT-GEN SEARCH SUPREMACY • DUAL-ENGINE ARCHITECTURE",
    leadTitle: "Own The Search Engine.",
    accentTitle: "Command The AI Answer.",
    sub: "Traditional SEO captures ten blue links. BrandForge GEO synthesizes your brand into ChatGPT, Perplexity, and Google Gemini vector graphs. We deliver category-leading organic market share.",
    cta: "Ignite Your Search Dominance",
    proofs: ["#1 Organic SERP", "Top AI Answer Citations", "100/100 Core Web Vitals"],
    modelImg: "/seo-rocket-3d.png",
    card1: { icon: Search, domain: "brandforge.in", slug: "› seo-geo", badge: "#1 ORGANIC", title: "Top SEO & GEO Engine" },
    card2: { title: "Top AI Answer Source", chips: [{ name: "ChatGPT" }, { name: "Perplexity" }, { name: "Gemini" }] },
    card3: { score: "100", label: "Core Web Vitals", status: "PERFECT" }
  },
  "paid-media": {
    eyebrow: "PERFORMANCE PAID ADVERTISING • ROAS MULTIPLIER",
    leadTitle: "Turn Ad Spend Into",
    accentTitle: "High-Yield Revenue.",
    sub: "Stop burning marketing budget on vanity clicks. BrandForge engineers hyper-targeted Google, Meta, and LinkedIn ad architectures that maximize return on ad spend and lower acquisition costs.",
    cta: "Scale Your Ad Pipeline",
    proofs: ["4.8x Average ROAS", "Zero Ad Spend Waste", "Omnichannel Attribution"],
    modelImg: "/3d-paid-media.png",
    card1: { icon: Target, domain: "brandforge.in", slug: "› ppc-ads", badge: "4.8x ROAS", title: "High-Intent PPC Engine" },
    card2: { title: "Multi-Platform Scaling", chips: [{ name: "Google Ads" }, { name: "Meta Ads" }, { name: "LinkedIn" }] },
    card3: { score: "98", label: "Attribution Score", status: "SCALING" }
  },
  "web-foundry": {
    eyebrow: "SUB-SECOND JAMSTACK • HIGH-CONVERSION FOUNDRY",
    leadTitle: "Build Blazing Fast",
    accentTitle: "Web Architectures.",
    sub: "Slow legacy sites silently kill high-ticket deals before visitors read your headline. BrandForge builds sub-200ms React, Next.js, and Jamstack digital engines engineered for category dominance.",
    cta: "Build Your High-Speed Site",
    proofs: ["100/100 Core Web Vitals", "<300ms DOM Hydration", "Jamstack Edge CDN"],
    modelImg: "/3d-web-foundry.png",
    card1: { icon: Globe, domain: "brandforge.in", slug: "› web-foundry", badge: "SUB-SECOND", title: "100/100 Core Web Vitals" },
    card2: { title: "Next-Gen Tech Stack", chips: [{ name: "React 19" }, { name: "Next.js" }, { name: "Jamstack" }] },
    card3: { score: "100", label: "Lighthouse Speed", status: "OPTIMAL" }
  },
  "viral-social": {
    eyebrow: "ORGANIC VIRAL REACH • HIGH-RETENTION SOCIAL ENGINE",
    leadTitle: "Ignite Algorithmic",
    accentTitle: "Viral Video Reach.",
    sub: "Posting generic flyers produces zero brand equity. We script, produce, and distribute scroll-stopping short-form reels and community engines that turn casual viewers into loyal brand advocates.",
    cta: "Ignite Your Viral Growth",
    proofs: ["10M+ Organic Views", "4.2x Engagement Rate", "High-Retention Reels"],
    modelImg: "/3d-viral-social.png",
    card1: { icon: Users, domain: "brandforge.in", slug: "› viral-social", badge: "10M+ REACH", title: "Algorithmic Viral Feeds" },
    card2: { title: "High-Retention Formats", chips: [{ name: "Reels" }, { name: "Shorts" }, { name: "Community" }] },
    card3: { score: "4.2x", label: "Engagement Lift", status: "VIRAL" }
  },
  "influencer-network": {
    eyebrow: "VERIFIED CREATOR NETWORK • AUDITED INFLUENCER ROI",
    leadTitle: "Turn Creator Influence Into",
    accentTitle: "Direct Sales.",
    sub: "Zero fake followers, zero guesswork. We partner your brand with audited, high-trust regional creators backed by unique tracking codes and verified conversion metrics.",
    cta: "Deploy Creator Network",
    proofs: ["100% Audited Creators", "3.8x Trackable ROAS", "Zero Follower Fraud"],
    modelImg: "/3d-influencer.png",
    card1: { icon: Sparkles, domain: "brandforge.in", slug: "› creators", badge: "VERIFIED", title: "Audited Creator Network" },
    card2: { title: "High-Trust Creators", chips: [{ name: "Macro" }, { name: "Micro" }, { name: "Regional" }] },
    card3: { score: "3.8x", label: "Trackable ROAS", status: "AUDITED" }
  },
  "content-smithy": {
    eyebrow: "EDITORIAL AUTHORITY SMITHY • REVENUE COPYWRITING",
    leadTitle: "Forge Industry-Leading",
    accentTitle: "Content Authority.",
    sub: "Generic AI articles flood the web with zero trust. BrandForge forges authoritative, research-backed editorial frameworks that rank #1 and position your executive team as the obvious market choice.",
    cta: "Commission Authority Content",
    proofs: ["#1 Search Rankings", "3.5x More Backlinks", "Zero AI Hallucinations"],
    modelImg: "/3d-content-smithy.png",
    card1: { icon: PenTool, domain: "brandforge.in", slug: "› content", badge: "#1 RANK", title: "High-Authority Editorial" },
    card2: { title: "Thought Leadership", chips: [{ name: "Research" }, { name: "Whitepapers" }, { name: "Op-Eds" }] },
    card3: { score: "99", label: "Editorial Trust", status: "VERIFIED" }
  },
  "inbox-edge": {
    eyebrow: "AUTOMATED RETENTION FUNNELS • ZERO-SPAM DELIVERABILITY",
    leadTitle: "Command The Inbox.",
    accentTitle: "Multiply Repeat Revenue.",
    sub: "Newsletters are ignored; hyper-personalized lifecycle flows generate consistent pipeline. We engineer automated email sequences that turn single-buyers into lifelong fans.",
    cta: "Automate Your Lifecycle Flows",
    proofs: ["42% Avg Open Rate", "+38% Repeat Revenue", "99.8% Inbox Landing"],
    modelImg: "/3d-inbox-edge.png",
    card1: { icon: MessageSquare, domain: "brandforge.in", slug: "› email-flows", badge: "42% OPENS", title: "Automated Lifecycle Flows" },
    card2: { title: "Segmented Triggers", chips: [{ name: "Welcome" }, { name: "Cart Recovery" }, { name: "Winback" }] },
    card3: { score: "42%", label: "Open Rate Benchmark", status: "DELIVERED" }
  },
  "brand-anvil": {
    eyebrow: "CATEGORY POSITIONING • INSTITUTIONAL BRAND ANVIL",
    leadTitle: "Carve An Uncontested",
    accentTitle: "Market Monopoly.",
    sub: "Stop competing on price. BrandForge re-engineers your strategic category narrative, competitive positioning, and enterprise identity so you are the obvious market choice.",
    cta: "Forge Your Brand Monopoly",
    proofs: ["Category Monopoly", "Zero Price Friction", "Institutional Authority"],
    modelImg: "/3d-brand-anvil.png",
    card1: { icon: Star, domain: "brandforge.in", slug: "› brand-anvil", badge: "#1 CHOICE", title: "Category Monopoly Blueprint" },
    card2: { title: "Strategic Positioning", chips: [{ name: "Narrative" }, { name: "Moat" }, { name: "Identity" }] },
    card3: { score: "100", label: "Category Power", status: "MONOPOLY" }
  },
  "visual-id": {
    eyebrow: "ENTERPRISE DESIGN SYSTEMS • ICONIC VISUAL FOUNDRY",
    leadTitle: "Craft Iconic",
    accentTitle: "Visual Identities.",
    sub: "A logo without an ecosystem is instantly forgotten. We build comprehensive, multi-platform brand design systems that project institutional prestige across every medium.",
    cta: "Design Your Iconic Identity",
    proofs: ["100% Bespoke Identity", "Design Token Library", "Enterprise Style Guide"],
    modelImg: "/3d-visual-id.png",
    card1: { icon: Layers, domain: "brandforge.in", slug: "› design-system", badge: "GOLDEN RATIO", title: "Enterprise Design System" },
    card2: { title: "Tokenized Assets", chips: [{ name: "Typography" }, { name: "Color" }, { name: "Grid" }] },
    card3: { score: "100", label: "Design Consistency", status: "BESPOKE" }
  },
  "commercial-video": {
    eyebrow: "CINEMATIC STUDIO PRODUCTION • HIGH-CONVERTING ADS",
    leadTitle: "Produce Cinematic",
    accentTitle: "Commercial Ads.",
    sub: "Low-budget phone videos damage brand authority. We write, direct, shoot, and grade high-production commercial films designed specifically to multiply conversion rates.",
    cta: "Book Studio Production",
    proofs: ["4K Cinema Production", "Script-to-Screen Studio", "Direct-Response Focus"],
    modelImg: "/3d-commercial-video.png",
    card1: { icon: Video, domain: "brandforge.in", slug: "› studio-film", badge: "4K CINEMA", title: "High-Production Commercials" },
    card2: { title: "Cinematic Formats", chips: [{ name: "TV Spots" }, { name: "Reels" }, { name: "Brand Film" }] },
    card3: { score: "4K", label: "Studio Production", status: "CINEMATIC" }
  },
  "cro-revenue": {
    eyebrow: "SCIENTIFIC A/B TESTING • CONVERSION REVENUE ENGINE",
    leadTitle: "Double Revenue Per Visitor",
    accentTitle: "Without More Ads.",
    sub: "Pouring ad spend into a leaky funnel is financial waste. We deploy heatmaps, user session telemetry, and iterative split testing to systematically unlock trapped pipeline.",
    cta: "Unlock Trapped Revenue",
    proofs: ["+84% Revenue / Visitor", "Zero Guesswork", "Continuous A/B Testing"],
    modelImg: "/3d-cro-revenue.png",
    card1: { icon: BarChart3, domain: "brandforge.in", slug: "› cro-engine", badge: "+84% LIFT", title: "A/B Testing Funnel" },
    card2: { title: "Optimized Vectors", chips: [{ name: "Headlines" }, { name: "Funnels" }, { name: "Friction" }] },
    card3: { score: "84%", label: "Conversion Lift", status: "WINNING" }
  },
  "reputation-shield": {
    eyebrow: "BRAND SENTIMENT DEFENSE • EXECUTIVE REPUTATION SHIELD",
    leadTitle: "Armor Your Brand With",
    accentTitle: "5-Star Authority.",
    sub: "Negative online chatter destroys high-ticket conversions before prospects ever reach out. We actively defend and amplify your Google, Glassdoor, and press reputation 24/7.",
    cta: "Fortify Your Brand Shield",
    proofs: ["4.9★ Average Rating", "24/7 Threat Defense", "Verified Trust Growth"],
    modelImg: "/3d-reputation-shield.png",
    card1: { icon: ShieldCheck, domain: "brandforge.in", slug: "› reputation", badge: "4.9★ RATING", title: "Enterprise Defense Shield" },
    card2: { title: "Monitored Channels", chips: [{ name: "Google Maps" }, { name: "Press" }, { name: "Reviews" }] },
    card3: { score: "4.9★", label: "Trust Score", status: "SHIELDED" }
  }
};

// Aliases for regional routes
SERVICE_HERO_CONFIGS["seo-company-coimbatore"] = SERVICE_HERO_CONFIGS["seo-geo"];
SERVICE_HERO_CONFIGS["ppc-company-coimbatore"] = SERVICE_HERO_CONFIGS["paid-media"];
SERVICE_HERO_CONFIGS["website-development-company-coimbatore"] = SERVICE_HERO_CONFIGS["web-foundry"];
SERVICE_HERO_CONFIGS["web-development-company-coimbatore"] = SERVICE_HERO_CONFIGS["web-foundry"];
SERVICE_HERO_CONFIGS["social-media-marketing-company-coimbatore"] = SERVICE_HERO_CONFIGS["viral-social"];
SERVICE_HERO_CONFIGS["social-media-agency-coimbatore"] = SERVICE_HERO_CONFIGS["viral-social"];
SERVICE_HERO_CONFIGS["influencer-marketing-coimbatore"] = SERVICE_HERO_CONFIGS["influencer-network"];
SERVICE_HERO_CONFIGS["content-marketing-agency-coimbatore"] = SERVICE_HERO_CONFIGS["content-smithy"];
SERVICE_HERO_CONFIGS["content-marketing-company-coimbatore"] = SERVICE_HERO_CONFIGS["content-smithy"];
SERVICE_HERO_CONFIGS["email-marketing-company-coimbatore"] = SERVICE_HERO_CONFIGS["inbox-edge"];
SERVICE_HERO_CONFIGS["email-marketing-agency-coimbatore"] = SERVICE_HERO_CONFIGS["inbox-edge"];
SERVICE_HERO_CONFIGS["brand-positioning-agency-coimbatore"] = SERVICE_HERO_CONFIGS["brand-anvil"];
SERVICE_HERO_CONFIGS["brand-position-agency-coimbatore"] = SERVICE_HERO_CONFIGS["brand-anvil"];
SERVICE_HERO_CONFIGS["brand-positioning-company-coimbatore"] = SERVICE_HERO_CONFIGS["brand-anvil"];
SERVICE_HERO_CONFIGS["brand-identity-design-agency-coimbatore"] = SERVICE_HERO_CONFIGS["visual-id"];
SERVICE_HERO_CONFIGS["brand-identity-design-company-coimbatore"] = SERVICE_HERO_CONFIGS["visual-id"];
SERVICE_HERO_CONFIGS["video-production-editing-company-coimbatore"] = SERVICE_HERO_CONFIGS["commercial-video"];
SERVICE_HERO_CONFIGS["brand-reputation-management-coimbatore"] = SERVICE_HERO_CONFIGS["reputation-shield"];

export default function CinematicSeoHero({ onOpenModal, data, slug }) {
  const heroRef = useRef(null);

  const currentSlug = (data && data.slug) || slug || "seo-geo";
  const currentConfig = SERVICE_HERO_CONFIGS[currentSlug] || SERVICE_HERO_CONFIGS["seo-geo"];

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  // 3D Parallax Tilt for the 3D Artwork Stage
  const rotateTiltX = useTransform(springY, [-1, 1], [10, -10]);
  const rotateTiltY = useTransform(springX, [-1, 1], [-10, 10]);
  const artTranslateX = useTransform(springX, [-1, 1], [-18, 18]);
  const artTranslateY = useTransform(springY, [-1, 1], [-14, 14]);

  // Floating HUD 3D depth parallax
  const hudGoogleX = useTransform(springX, [-1, 1], [-25, 15]);
  const hudGoogleY = useTransform(springY, [-1, 1], [-20, 10]);
  const hudAiX = useTransform(springX, [-1, 1], [15, -25]);
  const hudAiY = useTransform(springY, [-1, 1], [10, -20]);

  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const normY = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    mouseX.set(normX);
    mouseY.set(normY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const Card1Icon = currentConfig.card1.icon;

  return (
    <header
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bf-cine-hero-root"
      id="seo-hero-banner"
    >
      <style>{heroStyles}</style>

      {/* ── BACKGROUND VIDEO FOR SEO & GEO ── */}
      {(currentSlug === "seo-geo" || currentSlug === "seo-company-coimbatore") && (
        <div className="bf-cine-video-wrap" aria-hidden="true">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="bf-cine-video"
          >
            <source src={seoBannerVideo} type="video/mp4" />
            <source src="/seobanner.mp4" type="video/mp4" />
          </video>
        </div>
      )}

      {/* Light Mesh Network Constellation */}
      <KexsioCanvasBackground theme="light" opacity={0.6} />

      {/* Ambient Concentric Brand Radar Rings */}
      <div className="bf-cine-radar-overlay" aria-hidden="true">
        <div className="bf-cine-radar-ring ring-outer" />
        <div className="bf-cine-radar-ring ring-middle" />
        <div className="bf-cine-radar-glow" />
      </div>

      <div className="bf-cine-container">
        <div className="bf-cine-split-grid">

          {/* LEFT COLUMN: HIGH-IMPACT EDITORIAL & ACTIONS */}
          <motion.div
            className="bf-cine-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Category Tag */}
            <div className="bf-cine-eyebrow">
              <span className="bf-cine-pulse-dot">
                <span className="ping-ring" />
                <span className="solid-dot" />
              </span>
              <span>{currentConfig.eyebrow}</span>
            </div>

            {/* Main Headline */}
            <h1 className="bf-cine-h1">
              {currentConfig.leadTitle}{" "}
              {(currentSlug === "seo-geo" || currentSlug === "seo-company-coimbatore") ? (
                <KineticLetterSwap text={currentConfig.accentTitle} className="bf-cine-h1-red" />
              ) : (
                <span className="bf-cine-h1-red">{currentConfig.accentTitle}</span>
              )}
            </h1>

            {/* Subtitle */}
            <p className="bf-cine-sub">
              {currentConfig.sub}
            </p>

            {/* Dual Action Buttons */}
            <div className="bf-cine-cta-wrap">
              <button onClick={onOpenModal} className="bf-cine-btn-black">
                <Zap size={18} />
                <span>{currentConfig.cta}</span>
                {(currentSlug === "seo-geo" || currentSlug === "seo-company-coimbatore") ? (
                  <SwapArrow dir="up-right" size={17} color="#FFFFFF" className="btn-arrow" />
                ) : (
                  <ArrowRight size={18} className="btn-arrow" />
                )}
              </button>

              <button
                onClick={() => {
                  const el = document.querySelector(".sg-seo-story-section");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                  else onOpenModal();
                }}
                className="bf-cine-btn-white"
              >
                <span>See How It Works</span>
              </button>
            </div>

            {/* Trust Proof Badges */}
            <div className="bf-cine-proof-strip">
              {currentConfig.proofs.map((proof, pIdx) => (
                <React.Fragment key={pIdx}>
                  {pIdx > 0 && <span className="proof-sep">•</span>}
                  <div className="proof-item">
                    <CheckCircle2 size={15} className="proof-icon" />
                    <span>{proof}</span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: 3D INTERACTIVE ARTWORK STAGE */}
          <motion.div
            className="bf-cine-right"
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              style={{
                rotateX: rotateTiltX,
                rotateY: rotateTiltY,
                x: artTranslateX,
                y: artTranslateY,
                transformStyle: "preserve-3d",
              }}
              className="bf-3d-stage-viewport"
            >
              {/* Soft Ambient Spotlight Glow */}
              <div className="bf-3d-stage-glow" />

              {/* Main 3D Model Artwork */}
              <motion.div
                className="bf-3d-model-wrap"
                animate={{
                  y: [-8, 8, -8],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ transform: "translateZ(30px)" }}
              >
                <img
                  src={currentConfig.modelImg}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/seo-rocket-3d.png";
                  }}
                  alt={`${currentConfig.accentTitle} 3D Engine`}
                  className="bf-3d-model-img"
                />
              </motion.div>

              {/* LIQUID GLASS CARD 1 */}
              <motion.div
                style={{
                  x: hudGoogleX,
                  y: hudGoogleY,
                  transform: "translateZ(75px)",
                }}
                animate={{
                  y: [-6, 6, -6],
                  rotateZ: [-0.6, 0.6, -0.6],
                }}
                transition={{
                  duration: 4.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="bf-creative-card card-serp-dominant"
              >
                <div className="bf-serp-top">
                  <div className="bf-serp-source">
                    <div className="bf-g-badge">
                      <Card1Icon size={13} />
                    </div>
                    <div className="bf-serp-meta">
                      <span className="bf-serp-brand">{currentConfig.card1.domain}</span>
                      <span className="bf-serp-slug">{currentConfig.card1.slug}</span>
                    </div>
                  </div>
                  <div className="bf-rank-trophy-pill">
                    <Star size={11} className="trophy-star" />
                    <span>{currentConfig.card1.badge}</span>
                  </div>
                </div>

                <div className="bf-serp-headline">
                  {currentConfig.card1.title}
                </div>
              </motion.div>

              {/* LIQUID GLASS CARD 2 */}
              <motion.div
                style={{
                  x: hudAiX,
                  y: hudAiY,
                  transform: "translateZ(75px)",
                }}
                animate={{
                  y: [6, -6, 6],
                  rotateZ: [0.6, -0.6, 0.6],
                }}
                transition={{
                  duration: 5.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="bf-creative-card card-geo-network"
              >
                <div className="bf-geo-heading">
                  {currentConfig.card2.title}
                </div>

                <div className="bf-geo-chips-row">
                  {currentConfig.card2.chips.map((chip, cIdx) => (
                    <div key={cIdx} className="bf-engine-chip">
                      <span className="engine-name">{chip.name}</span>
                      <Check size={10} className="engine-icon-chk" />
                    </div>
                  ))}
                </div>

                <div className="bf-geo-progress-track">
                  <div className="bf-geo-progress-bar" />
                </div>
              </motion.div>

              {/* LIQUID GLASS CARD 3 */}
              <motion.div
                style={{
                  transform: "translateZ(65px)",
                }}
                animate={{
                  y: [-5, 5, -5],
                  rotateZ: [-0.5, 0.5, -0.5],
                }}
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="bf-creative-card card-speed-lighthouse"
              >
                <div className="bf-dial-wrapper">
                  <svg viewBox="0 0 44 44" className="bf-svg-dial">
                    <circle cx="22" cy="22" r="18" className="dial-bg-track" />
                    <circle cx="22" cy="22" r="18" className="dial-fill-stroke" />
                  </svg>
                  <div className="bf-dial-num">{currentConfig.card3.score}</div>
                </div>

                <div className="bf-speed-details">
                  <div className="bf-speed-header">
                    <span className="bf-speed-label">{currentConfig.card3.label}</span>
                    <span className="bf-pass-pill">{currentConfig.card3.status}</span>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </motion.div>

        </div>
      </div>
    </header>
  );
}

const heroStyles = `
  .bf-cine-video-wrap {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
    pointer-events: none;
  }
  .bf-cine-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    opacity: 0.95;
  }

  .bf-cine-hero-root {
    position: relative;
    min-height: 88vh;
    width: 100%;
    overflow: hidden;
    background: #FFFFFF;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #E5E7EB;
  }

  .bf-cine-radar-overlay {
    position: absolute;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
  }

  .bf-cine-radar-ring {
    position: absolute;
    border-radius: 50%;
    border: 1px solid rgba(239, 65, 54, 0.08);
  }

  .ring-outer {
    width: 900px;
    height: 900px;
    top: 50%;
    right: -200px;
    transform: translateY(-50%);
  }

  .ring-middle {
    width: 600px;
    height: 600px;
    top: 50%;
    right: -50px;
    transform: translateY(-50%);
  }

  .bf-cine-radar-glow {
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(239, 65, 54, 0.08) 0%, transparent 70%);
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    filter: blur(40px);
  }

  .bf-cine-container {
    position: relative;
    z-index: 10;
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    padding: 60px 24px 70px;
  }

  .bf-cine-split-grid {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 40px;
    align-items: center;
  }

  .bf-cine-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .bf-cine-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 14px;
    border-radius: 999px;
    background: #FAFAFC;
    border: 1px solid #E5E7EB;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.72rem;
    font-weight: 800;
    color: #EF4136;
    letter-spacing: 0.04em;
    margin-bottom: 22px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
  }

  .bf-cine-pulse-dot {
    position: relative;
    width: 8px;
    height: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ping-ring {
    position: absolute;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: rgba(239, 65, 54, 0.4);
    animation: cinePing 1.8s infinite ease-out;
  }

  .solid-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #EF4136;
  }

  @keyframes cinePing {
    0% { transform: scale(0.6); opacity: 1; }
    100% { transform: scale(1.6); opacity: 0; }
  }

  .bf-cine-h1 {
    font-family: "Outfit", sans-serif;
    font-size: clamp(38px, 4.4vw, 58px);
    font-weight: 900;
    line-height: 1.1;
    letter-spacing: -0.025em;
    color: #0A0A0C;
    margin: 0;
  }

  .bf-cine-h1-red {
    color: #EF4136;
    background: linear-gradient(90deg, #EF4136 0%, #D2042D 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .bf-cine-sub {
    margin: 20px 0 0;
    font-size: clamp(16px, 1.15vw, 17.5px);
    line-height: 1.7;
    color: #4B5563;
    font-family: "Plus Jakarta Sans", sans-serif;
    max-width: 580px;
  }

  .bf-cine-cta-wrap {
    margin-top: 34px;
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
  }

  .bf-cine-btn-black {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 16px 32px;
    border-radius: 14px;
    background: #0A0A0C;
    color: #FFFFFF;
    font-family: "Outfit", sans-serif;
    font-size: 0.95rem;
    font-weight: 800;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    border: 1px solid #0A0A0C;
    cursor: pointer;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .bf-cine-btn-black:hover {
    background: #EF4136;
    border-color: #EF4136;
    transform: translateY(-2px);
    box-shadow: 0 14px 35px rgba(239, 65, 54, 0.35);
  }

  .bf-cine-btn-black .btn-arrow {
    transition: transform 0.25s ease;
  }

  .bf-cine-btn-black:hover .btn-arrow {
    transform: translateX(4px);
  }

  .bf-cine-btn-white {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 16px 28px;
    border-radius: 14px;
    background: #FFFFFF;
    color: #0A0A0C;
    font-family: "Outfit", sans-serif;
    font-size: 0.95rem;
    font-weight: 800;
    letter-spacing: 0.04em;
    border: 1px solid #E5E7EB;
    cursor: pointer;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
    transition: all 0.25s ease;
  }

  .bf-cine-btn-white:hover {
    border-color: #EF4136;
    color: #EF4136;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(239, 65, 54, 0.1);
  }

  .bf-cine-proof-strip {
    margin-top: 30px;
    display: flex;
    align-items: center;
    gap: 12px;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.74rem;
    font-weight: 700;
    color: #4B5563;
    flex-wrap: wrap;
  }

  .proof-item {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .proof-icon {
    color: #EF4136;
  }

  .proof-sep {
    color: #D1D5DB;
  }

  /* 3D ARTWORK STAGE */
  .bf-cine-right {
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 1200px;
  }

  .bf-3d-stage-viewport {
    position: relative;
    width: 100%;
    max-width: 500px;
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    transform-style: preserve-3d;
  }

  .bf-3d-stage-glow {
    position: absolute;
    width: 380px;
    height: 380px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(239, 65, 54, 0.18) 0%, rgba(239, 65, 54, 0.03) 50%, transparent 70%);
    filter: blur(30px);
    pointer-events: none;
  }

  .bf-3d-model-wrap {
    position: relative;
    z-index: 5;
    width: 100%;
    max-width: 440px;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: drop-shadow(0 25px 50px rgba(0, 0, 0, 0.14)) drop-shadow(0 0 35px rgba(239, 65, 54, 0.18));
  }

  .bf-3d-model-img {
    width: 100%;
    height: auto;
    object-fit: contain;
    user-select: none;
    pointer-events: none;
  }

  /* BESPOKE LIQUID GLASS GLASSMORPHISM 3D FLOATING CARDS */
  .bf-creative-card {
    position: absolute;
    z-index: 20;
    border-radius: 20px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.58) 45%, rgba(255, 255, 255, 0.78) 100%);
    border: 1px solid rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(12px) saturate(160%);
    -webkit-backdrop-filter: blur(12px) saturate(160%);
    box-shadow:
      0 18px 40px rgba(0, 0, 0, 0.06),
      0 6px 16px rgba(0, 0, 0, 0.02),
      inset 0 1.5px 1.5px 0 rgba(255, 255, 255, 0.95),
      inset 0 -1px 2px 0 rgba(10, 10, 12, 0.04);
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease;
    transform-style: preserve-3d;
    cursor: default;
    user-select: none;
    overflow: hidden;
    will-change: transform;
  }

  .bf-creative-card::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: radial-gradient(circle at 25% 0%, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.18) 32%, transparent 65%);
    pointer-events: none;
    z-index: 1;
  }

  .bf-creative-card > * {
    position: relative;
    z-index: 2;
  }

  .bf-creative-card:hover {
    transform: scale(1.05) translateZ(95px) !important;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.88) 0%, rgba(255, 255, 255, 0.52) 45%, rgba(255, 255, 255, 0.8) 100%);
    border-color: rgba(255, 255, 255, 0.98);
    box-shadow:
      0 32px 75px rgba(239, 65, 54, 0.14),
      0 12px 30px rgba(0, 0, 0, 0.06),
      inset 0 2px 2px 0 rgba(255, 255, 255, 1),
      inset 0 -1.5px 2px 0 rgba(239, 65, 54, 0.18),
      inset 0 0 24px 0 rgba(255, 255, 255, 0.7);
  }

  /* CARD 1: TOP LEFT */
  .card-serp-dominant {
    top: 6%;
    left: -4%;
    padding: 12px 16px;
    min-width: 230px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .bf-serp-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  .bf-serp-source {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .bf-g-badge {
    width: 24px;
    height: 24px;
    border-radius: 7px;
    background: #0A0A0C;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .bf-serp-meta {
    display: flex;
    align-items: center;
    gap: 4px;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.72rem;
  }

  .bf-serp-brand {
    font-weight: 700;
    color: #0A0A0C;
  }

  .bf-serp-slug {
    color: #9CA3AF;
  }

  .bf-rank-trophy-pill {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    background: #EF4136;
    color: #FFFFFF;
    padding: 3px 8px;
    border-radius: 999px;
    font-family: "Outfit", sans-serif;
    font-size: 0.65rem;
    font-weight: 800;
    letter-spacing: 0.05em;
    box-shadow: 0 4px 12px rgba(239, 65, 54, 0.35);
  }

  .trophy-star {
    fill: #FFD700;
    color: #FFD700;
  }

  .bf-serp-headline {
    font-family: "Outfit", sans-serif;
    font-size: 0.95rem;
    font-weight: 800;
    color: #0A0A0C;
    line-height: 1.25;
  }

  /* CARD 2: BOTTOM RIGHT */
  .card-geo-network {
    bottom: 6%;
    right: -6%;
    padding: 12px 16px;
    min-width: 240px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .bf-geo-heading {
    font-family: "Outfit", sans-serif;
    font-size: 0.92rem;
    font-weight: 800;
    color: #0A0A0C;
    line-height: 1.25;
  }

  .bf-geo-chips-row {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .bf-engine-chip {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 4px 8px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.65);
    border: 1px solid rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03), inset 0 1px 1px rgba(255, 255, 255, 0.9);
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 0.72rem;
    font-weight: 700;
    color: #1F2937;
    transition: all 0.2s ease;
  }

  .bf-engine-chip:hover {
    border-color: #EF4136;
    background: rgba(255, 255, 255, 0.95);
    color: #EF4136;
    transform: translateY(-1px);
  }

  .engine-icon-chk { color: #10B981; }

  .bf-geo-progress-track {
    width: 100%;
    height: 4px;
    border-radius: 999px;
    background: rgba(0, 0, 0, 0.05);
    overflow: hidden;
    margin-top: 2px;
  }

  .bf-geo-progress-bar {
    width: 94%;
    height: 100%;
    border-radius: 999px;
    background: linear-gradient(90deg, #EF4136 0%, #D2042D 100%);
  }

  /* CARD 3: BOTTOM LEFT */
  .card-speed-lighthouse {
    bottom: -4%;
    left: -4%;
    padding: 10px 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 220px;
  }

  .bf-dial-wrapper {
    position: relative;
    width: 44px;
    height: 44px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bf-svg-dial {
    width: 44px;
    height: 44px;
    transform: rotate(-90deg);
  }

  .dial-bg-track {
    fill: none;
    stroke: #E5E7EB;
    stroke-width: 3.5;
  }

  .dial-fill-stroke {
    fill: none;
    stroke: #10B981;
    stroke-width: 3.5;
    stroke-linecap: round;
    stroke-dasharray: 120;
    stroke-dashoffset: 0;
  }

  .bf-dial-num {
    position: absolute;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.85rem;
    font-weight: 900;
    color: #0A0A0C;
  }

  .bf-speed-details {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .bf-speed-header {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .bf-speed-label {
    font-family: "Outfit", sans-serif;
    font-size: 0.88rem;
    font-weight: 800;
    color: #0A0A0C;
  }

  .bf-pass-pill {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.6rem;
    font-weight: 800;
    color: #047857;
    background: rgba(16, 185, 129, 0.12);
    border: 1px solid rgba(16, 185, 129, 0.3);
    padding: 2px 6px;
    border-radius: 999px;
  }

  @media (max-width: 1024px) {
    .bf-cine-split-grid {
      grid-template-columns: 1fr;
      text-align: center;
    }
    .bf-cine-left {
      align-items: center;
      text-align: center;
    }
    .bf-cine-sub {
      margin-left: auto;
      margin-right: auto;
    }
    .bf-cine-cta-wrap {
      justify-content: center;
    }
    .bf-cine-proof-strip {
      justify-content: center;
    }
    .card-serp-dominant {
      top: 0;
      left: 0;
    }
    .card-geo-network {
      bottom: 0;
      right: 0;
    }
    .card-speed-lighthouse {
      bottom: -6%;
      left: 2%;
    }
  }

  @media (max-width: 640px) {
    .bf-cine-btn-black, .bf-cine-btn-white {
      width: 100%;
      justify-content: center;
    }
    .bf-creative-card {
      position: static;
      margin-bottom: 12px;
      width: 100%;
    }
    .card-serp-dominant, .card-geo-network, .card-speed-lighthouse {
      left: auto;
      right: auto;
      top: auto;
      bottom: auto;
    }
  }
`;
