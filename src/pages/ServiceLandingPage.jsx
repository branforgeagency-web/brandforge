"use client";

import React, { useState, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Sparkles,
  Zap,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Globe,
  ShieldCheck,
  Users,
  PenTool,
  BarChart3,
  Cpu,
} from "lucide-react";
import { servicesData } from "../data/servicesData";
import BrandForgeAnimatedFooter from "../components/BrandForgeAnimatedFooter";
import BrandForgeLiquidMetalBackground from "../components/BrandForgeLiquidMetalBackground";

/* ───────────────────────────────────────────────────────────────────────────
   DYNAMIC SERVICE LANDING PAGE COMPONENT (CARDLESS & LIQUID METAL SHADER)
   100% Cardless design — Liquid metal wave shader, metallic sheen, embers.
   Unified high-tech split hero banner & story lead section for all 12 services.
   ─────────────────────────────────────────────────────────────────────────── */

const SERVICE_BANNER_ASSETS = {
  "seo-geo": "/seo-geo-forge-red-3d.png",
  "paid-media": "/paid-media-forge-3d-crop.png",
  "web-foundry": "/banner-web-dev.png",
  "viral-social": "/banner-viral-social.png",
  "influencer-network": "/banner-influencer-network.png",
  "content-smithy": "/banner-content-smithy-3d.jpg",
  "inbox-edge": "/banner-inbox-edge.png",
  "brand-anvil": "/banner-brand-anvil.png",
  "visual-id": "/banner-visual-id.png",
  "commercial-video": "/banner-commercial-video-3d.jpg",
  "cro-revenue": "/banner-cro-revenue-3d.jpg",
  "reputation-shield": "/banner-reputation-shield-3d.jpg",
  "seo-company-coimbatore": "/seo-geo-forge-red-3d.png",
  "ppc-company-coimbatore": "/paid-media-forge-3d-crop.png",
};

const SERVICE_BADGES = {
  "seo-geo": {
    top: { strong: "#1 AI Citation", span: "ChatGPT & Perplexity" },
    bottom: { strong: "+340% Traffic Lift", span: "Coimbatore & Global" }
  },
  "paid-media": {
    top: { strong: "4.8x ROAS Avg", span: "Meta & Google Ads" },
    bottom: { strong: "₹12Cr+ Scaled", span: "Performance Ad Spend" }
  },
  "web-foundry": {
    top: { strong: "100/100 Core Vitals", span: "Sub-200ms Load Speed" },
    bottom: { strong: "+280% Conversion Lift", span: "Modern React Stack" }
  },
  "viral-social": {
    top: { strong: "10M+ Organic Views", span: "Reels & Social Video" },
    bottom: { strong: "4.2x Engagement", span: "Community-Led Growth" }
  },
  "influencer-network": {
    top: { strong: "500+ Top Creators", span: "Vetted Regional & National" },
    bottom: { strong: "100% Brand Safe", span: "Performance Driven" }
  },
  "content-smithy": {
    top: { strong: "High-Authority Copy", span: "Human & AI Synergy" },
    bottom: { strong: "3.5x Organic Backlinks", span: "Ranked & Quotable" }
  },
  "inbox-edge": {
    top: { strong: "42% Open Rate", span: "Hyper-Segmented Flows" },
    bottom: { strong: "+38% Repeat Revenue", span: "Zero Spam Inbox Reach" }
  },
  "brand-anvil": {
    top: { strong: "Category Monopoly", span: "Brand Strategy Blueprint" },
    bottom: { strong: "The Obvious Choice", span: "Coimbatore & Beyond" }
  },
  "visual-id": {
    top: { strong: "Iconic Design System", span: "Logos & Brand Guidelines" },
    bottom: { strong: "100% Unique Identity", span: "Enterprise Grade" }
  },
  "commercial-video": {
    top: { strong: "Cinema 4K / 8K", span: "High-Impact Commercials" },
    bottom: { strong: "Direct Response Sales", span: "Reels, Ads & TV" }
  },
  "cro-revenue": {
    top: { strong: "+45% Conversion Lift", span: "A/B Testing & Funnel Audit" },
    bottom: { strong: "Lower Acquisition Cost", span: "Revenue Optimization" }
  },
  "reputation-shield": {
    top: { strong: "5-Star Brand Armor", span: "Proactive ORM & Review Engine" },
    bottom: { strong: "100% Crisis Defense", span: "Search Knowledge Graph" }
  },
  "seo-company-coimbatore": {
    top: { strong: "#1 AI Citation", span: "ChatGPT & Perplexity" },
    bottom: { strong: "+340% Traffic Lift", span: "Coimbatore & Global" }
  },
  "ppc-company-coimbatore": {
    top: { strong: "4.8x ROAS Avg", span: "Meta & Google Ads" },
    bottom: { strong: "₹12Cr+ Scaled", span: "Performance Ad Spend" }
  }
};

const SERVICE_PILL_TAGS = {
  "seo-geo": "IT SOLUTIONS & SEARCH DOMINANCE",
  "paid-media": "PAID MEDIA & PPC SCALING",
  "web-foundry": "HIGH-PERFORMANCE WEB FOUNDRY",
  "viral-social": "VIRAL SOCIAL & AUDIENCE GROWTH",
  "influencer-network": "INFLUENCER & CREATOR NETWORK",
  "content-smithy": "EDITORIAL & CONTENT SMITHY",
  "inbox-edge": "AUTOMATED EMAIL RETENTION",
  "brand-anvil": "STRATEGIC BRAND POSITIONING",
  "visual-id": "ENTERPRISE BRAND IDENTITY",
  "commercial-video": "COMMERCIAL VIDEO & 3D MOTION",
  "cro-revenue": "CRO & REVENUE ACCELERATION",
  "reputation-shield": "REPUTATION SHIELD & GLOBAL PR",
  "seo-company-coimbatore": "IT SOLUTIONS & SEARCH DOMINANCE",
  "ppc-company-coimbatore": "PAID MEDIA & PPC SCALING",
};

const SERVICE_MICRO_DESCS = {
  "seo-geo": "Providing enterprise SEO, GEO (Generative Engine Optimization), and sub-second performance engineering to scale your brand’s organic revenue.",
  "paid-media": "High-intent Google Ads, Meta scaling, and algorithmic paid media that turns ad spend into verified customer acquisition.",
  "web-foundry": "High-performance websites, ultra-fast custom web applications, and conversion-optimized architectures built on modern Jamstack.",
  "viral-social": "Short-form video production, algorithm-tailored reels, and organic social growth that converts followers into brand loyalists.",
  "influencer-network": "Vetted creator partnerships, performance whitelisting, and viral authority campaigns engineered for maximum ROI.",
  "content-smithy": "Authoritative SEO articles, thought-leadership pillars, and conversion copywriting that rank high on Google and AI LLMs.",
  "inbox-edge": "Automated email sequences, customer retention funnels, and hyper-segmented inbox campaigns that drive recurring revenue.",
  "brand-anvil": "Uncompromising brand positioning, market differentiation, and messaging architectures that make you the obvious choice.",
  "visual-id": "Distinctive visual identity, precision design systems, and unforgettable brand aesthetics crafted for enterprise trust.",
  "commercial-video": "Hollywood-grade video commercials, 3D product animations, and direct-response video ads that compel action.",
  "cro-revenue": "Frictionless checkout optimization, heat-map user analytics, and rigorous A/B testing to maximize revenue per visitor.",
  "reputation-shield": "Proactive review growth engines, top-tier global digital PR, and 24/7 crisis reputation defense across search engines.",
};

const SERVICE_STORY_HEADINGS = {
  "seo-geo": {
    pill: "THE NEW SEARCH PARADIGM",
    lead: "Search Has Split Into Two Paths —",
    accent: "We Help You Win Both"
  },
  "paid-media": {
    pill: "PERFORMANCE AD ENGINE",
    lead: "Stop Burning Ad Budget —",
    accent: "Turn Paid Clicks Into Profit"
  },
  "web-foundry": {
    pill: "ENGINEERED FOR CONVERSION",
    lead: "Slow Websites Lose Customers —",
    accent: "We Build Sites That Sell"
  },
  "viral-social": {
    pill: "ORGANIC & VIRAL SCALE",
    lead: "Stop Chasing Vanity Metrics —",
    accent: "Build an Audience That Buys"
  },
  "influencer-network": {
    pill: "CREATOR AUTHORITY NEXUS",
    lead: "Authentic Creator Endorsements —",
    accent: "Scale Trusted Word-of-Mouth"
  },
  "content-smithy": {
    pill: "EDITORIAL AUTHORITY",
    lead: "Stop Creating Forgettable Content —",
    accent: "Forge Words That Sell"
  },
  "inbox-edge": {
    pill: "HIGH-CONVERTING RETENTION",
    lead: "Your Email List Is Gold —",
    accent: "Turn Contacts Into Repeat Revenue"
  },
  "brand-anvil": {
    pill: "STRATEGIC POSITIONING",
    lead: "Don't Compete on Price —",
    accent: "Become the Obvious Choice"
  },
  "visual-id": {
    pill: "DISTINCTIVE IDENTITY",
    lead: "Look Unmistakable —",
    accent: "Design That Inspires Enterprise Trust"
  },
  "commercial-video": {
    pill: "CINEMATIC CONVERSION",
    lead: "Visual Storytelling That Sells —",
    accent: "Broadcast-Quality Video Commercials"
  },
  "cro-revenue": {
    pill: "CONVERSION ARCHITECTURE",
    lead: "Double Your Revenue —",
    accent: "Without Spending More on Ads"
  },
  "reputation-shield": {
    pill: "REPUTATION FORTRESS",
    lead: "Protect Your Brand Trust —",
    accent: "Proactive Defense & 5-Star Authority"
  }
};

const SEO_DEFAULT_PILLARS = [
  {
    icon: Search,
    title: "Google Search Dominance",
    description: "First-page organic rankings, technical Core Web Vitals, and Coimbatore local Google Maps pack dominance."
  },
  {
    icon: Cpu,
    title: "Generative AI Citations (GEO)",
    description: "Top entity positioning & knowledge graph authority inside ChatGPT, Perplexity, Gemini, and AI Overviews."
  },
  {
    icon: Zap,
    title: "High-Intent Revenue Lift",
    description: "Zero spam, zero vanity traffic. Engineering search campaigns that convert clicks into paying customers."
  }
];

function renderHeroTitle(data) {
  const title = data.title || "";
  if (data.slug === "seo-geo" || data.slug === "seo-company-coimbatore") {
    return (
      <>
        Best SEO Company in Coimbatore for{" "}
        <span className="sg-tech-h1-accent">
          Google & AI Search Rankings
          <svg className="sg-tech-squiggle" viewBox="0 0 320 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12C30 4 55 18 85 10C115 2 140 17 170 9C200 1 225 16 255 8C280 2 300 15 316 9" stroke="#D2042D" strokeWidth="4.5" strokeLinecap="round" />
          </svg>
        </span>
      </>
    );
  }
  if (data.slug === "paid-media" || data.slug === "ppc-company-coimbatore") {
    return (
      <>
        PPC Company in Coimbatore That Turns{" "}
        <span className="sg-tech-h1-accent">
          Ad Spend Into Real Leads
          <svg className="sg-tech-squiggle" viewBox="0 0 320 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12C30 4 55 18 85 10C115 2 140 17 170 9C200 1 225 16 255 8C280 2 300 15 316 9" stroke="#D2042D" strokeWidth="4.5" strokeLinecap="round" />
          </svg>
        </span>
      </>
    );
  }
  if (data.slug === "web-foundry") {
    return (
      <>
        Website Development Company in Coimbatore That Builds{" "}
        <span className="sg-tech-h1-accent">
          Sites That Sell
          <svg className="sg-tech-squiggle" viewBox="0 0 320 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12C30 4 55 18 85 10C115 2 140 17 170 9C200 1 225 16 255 8C280 2 300 15 316 9" stroke="#D2042D" strokeWidth="4.5" strokeLinecap="round" />
          </svg>
        </span>
      </>
    );
  }
  if (data.slug === "viral-social") {
    return (
      <>
        Social Media Marketing Company in Coimbatore That Grows{" "}
        <span className="sg-tech-h1-accent">
          Real Followers Into Customers
          <svg className="sg-tech-squiggle" viewBox="0 0 320 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12C30 4 55 18 85 10C115 2 140 17 170 9C200 1 225 16 255 8C280 2 300 15 316 9" stroke="#D2042D" strokeWidth="4.5" strokeLinecap="round" />
          </svg>
        </span>
      </>
    );
  }
  if (data.slug === "influencer-network") {
    return (
      <>
        Amplify Brand Authority Through{" "}
        <span className="sg-tech-h1-accent">
          Top-Tier Creator Networks
          <svg className="sg-tech-squiggle" viewBox="0 0 320 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12C30 4 55 18 85 10C115 2 140 17 170 9C200 1 225 16 255 8C280 2 300 15 316 9" stroke="#D2042D" strokeWidth="4.5" strokeLinecap="round" />
          </svg>
        </span>
      </>
    );
  }
  if (data.slug === "content-smithy") {
    return (
      <>
        Content Marketing Agency in Coimbatore That Turns{" "}
        <span className="sg-tech-h1-accent">
          Words Into Customers
          <svg className="sg-tech-squiggle" viewBox="0 0 320 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12C30 4 55 18 85 10C115 2 140 17 170 9C200 1 225 16 255 8C280 2 300 15 316 9" stroke="#D2042D" strokeWidth="4.5" strokeLinecap="round" />
          </svg>
        </span>
      </>
    );
  }
  if (data.slug === "inbox-edge") {
    return (
      <>
        Email Marketing Company in Coimbatore That Turns{" "}
        <span className="sg-tech-h1-accent">
          Your List Into Revenue
          <svg className="sg-tech-squiggle" viewBox="0 0 320 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12C30 4 55 18 85 10C115 2 140 17 170 9C200 1 225 16 255 8C280 2 300 15 316 9" stroke="#D2042D" strokeWidth="4.5" strokeLinecap="round" />
          </svg>
        </span>
      </>
    );
  }
  if (data.slug === "brand-anvil") {
    return (
      <>
        Brand Positioning Agency in Coimbatore That Makes{" "}
        <span className="sg-tech-h1-accent">
          You the Obvious Choice
          <svg className="sg-tech-squiggle" viewBox="0 0 320 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12C30 4 55 18 85 10C115 2 140 17 170 9C200 1 225 16 255 8C280 2 300 15 316 9" stroke="#D2042D" strokeWidth="4.5" strokeLinecap="round" />
          </svg>
        </span>
      </>
    );
  }
  if (data.slug === "visual-id") {
    return (
      <>
        Brand Identity Design Agency in Coimbatore That Makes{" "}
        <span className="sg-tech-h1-accent">
          You Unforgettable
          <svg className="sg-tech-squiggle" viewBox="0 0 320 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12C30 4 55 18 85 10C115 2 140 17 170 9C200 1 225 16 255 8C280 2 300 15 316 9" stroke="#D2042D" strokeWidth="4.5" strokeLinecap="round" />
          </svg>
        </span>
      </>
    );
  }
  if (data.slug === "commercial-video") {
    return (
      <>
        High-Converting Commercial Video Ads &{" "}
        <span className="sg-tech-h1-accent">
          3D Motion Showreels
          <svg className="sg-tech-squiggle" viewBox="0 0 320 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12C30 4 55 18 85 10C115 2 140 17 170 9C200 1 225 16 255 8C280 2 300 15 316 9" stroke="#D2042D" strokeWidth="4.5" strokeLinecap="round" />
          </svg>
        </span>
      </>
    );
  }
  if (data.slug === "cro-revenue") {
    return (
      <>
        Double Your Website Conversion Rates{" "}
        <span className="sg-tech-h1-accent">
          Without Increasing Ad Spend
          <svg className="sg-tech-squiggle" viewBox="0 0 320 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12C30 4 55 18 85 10C115 2 140 17 170 9C200 1 225 16 255 8C280 2 300 15 316 9" stroke="#D2042D" strokeWidth="4.5" strokeLinecap="round" />
          </svg>
        </span>
      </>
    );
  }
  if (data.slug === "reputation-shield") {
    return (
      <>
        Protect & Elevate Brand Trust With{" "}
        <span className="sg-tech-h1-accent">
          Global PR & Review Growth
          <svg className="sg-tech-squiggle" viewBox="0 0 320 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12C30 4 55 18 85 10C115 2 140 17 170 9C200 1 225 16 255 8C280 2 300 15 316 9" stroke="#D2042D" strokeWidth="4.5" strokeLinecap="round" />
          </svg>
        </span>
      </>
    );
  }

  // Fallback split
  const words = title.split(" ");
  const splitIdx = Math.max(1, words.length - 3);
  const leadWords = words.slice(0, splitIdx).join(" ");
  const accentWords = words.slice(splitIdx).join(" ");

  return (
    <>
      {leadWords}{" "}
      <span className="sg-tech-h1-accent">
        {accentWords}
        <svg className="sg-tech-squiggle" viewBox="0 0 320 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 12C30 4 55 18 85 10C115 2 140 17 170 9C200 1 225 16 255 8C280 2 300 15 316 9" stroke="#D2042D" strokeWidth="4.5" strokeLinecap="round" />
        </svg>
      </span>
    </>
  );
}

export default function ServiceLandingPage({ slug = "seo-geo", onOpenModal, navigate }) {
  const data = servicesData[slug] || servicesData["seo-geo"];

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    }
    if (data.metaTitle) {
      document.title = data.metaTitle;
    }
    if (data.metaDescription) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', data.metaDescription);
    }
  }, [slug, data]);

  const [activeFaq, setActiveFaq] = useState(null);
  const [activePillar, setActivePillar] = useState(0);

  const Icon = data.icon || Search;

  const bannerAsset = SERVICE_BANNER_ASSETS[data.slug] || data.bannerBg || "/seo-geo-forge-red-3d.png";
  const badges = SERVICE_BADGES[data.slug] || {
    top: { strong: data.metrics?.[1]?.value || "100/100", span: data.metrics?.[1]?.label || "Performance" },
    bottom: { strong: data.metrics?.[0]?.value || "+300%", span: data.metrics?.[0]?.label || "Growth" }
  };
  const pillTag = SERVICE_PILL_TAGS[data.slug] || data.eyebrow?.split("|")?.[0]?.toUpperCase() || "ENTERPRISE GROWTH";
  const microDesc = SERVICE_MICRO_DESCS[data.slug] || data.metaDescription || (Array.isArray(data.subtitle) ? data.subtitle[0] : data.subtitle);
  const storyHeading = SERVICE_STORY_HEADINGS[data.slug] || {
    pill: data.whyChooseUs?.tag || "THE STRATEGY",
    lead: (data.whyChooseUs?.title || data.title || "Engineered for").split(" ").slice(0, 4).join(" ") + " —",
    accent: (data.whyChooseUs?.title || data.title || "Market Dominance").split(" ").slice(4).join(" ") || "Market Dominance"
  };

  const topThreePillars = (data.slug === "seo-geo" || data.slug === "seo-company-coimbatore")
    ? SEO_DEFAULT_PILLARS
    : (data.pillars && data.pillars.length >= 3 ? data.pillars.slice(0, 3) : (data.pillars || []));

  return (
    <div className="sg-page-root">
      <style>{styles}</style>

      {/* THREE.JS LIQUID METAL SHADER & SPARKS BACKGROUND */}
      <BrandForgeLiquidMetalBackground />

      {/* SEMI-TRANSPARENT BLACK OVERLAY IN BETWEEN BACKGROUND & CONTENT */}
      <div className="sg-bg-overlay" aria-hidden="true" />

      {/* ANIMATED MARQUEE TICKER STRIP */}
      <div className="sg-marquee-bar">
        <div className="sg-marquee-track">
          <span>⚡ {data.eyebrow}</span>
          <span>• 100/100 PERFORMANCE BENCHMARK</span>
          <span>• ENTERPRISE BRAND FORGING</span>
          <span>• REAL-TIME ROI ESTIMATION</span>
          <span>• 24/7 DEDICATED STRATEGY TEAM</span>
          <span>⚡ {data.eyebrow}</span>
          <span>• 100/100 PERFORMANCE BENCHMARK</span>
          <span>• ENTERPRISE BRAND FORGING</span>
          <span>• REAL-TIME ROI ESTIMATION</span>
          <span>• 24/7 DEDICATED STRATEGY TEAM</span>
        </div>
      </div>

      {/* HIGH-TECH SPLIT HERO BANNER SECTION (APPLIED TO ALL SERVICES) */}
      <header className="sg-hero sg-hero-banner-tech has-banner-bg">
        {/* High-Tech HUD Background Accents */}
        <div className="tech-hud-overlay" aria-hidden="true">
          <div className="tech-hud-circle" />
          <div className="tech-hud-circle tech-hud-circle-2" />
          <div className="tech-hud-dots" />
        </div>

        <div className="sg-container">
          <div className="sg-tech-banner-grid">
            
            {/* LEFT COLUMN: SOCIALS, PILL TAG, H1, MICRO-HOOK, DUAL BUTTONS */}
            <motion.div
              className="sg-tech-banner-left"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              {/* Social icons row */}
              <div className="sg-tech-socials">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="sg-tech-social-link">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="sg-tech-social-link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="sg-tech-social-link">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="sg-tech-social-link">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>

              {/* Category Pill Tag */}
              <div className="sg-tech-pill">
                <span className="sg-tech-pill-dot">•</span>
                <span>{pillTag}</span>
                <span className="sg-tech-pill-dot">•</span>
              </div>

              {/* H1 Heading with styled accent & wave underline */}
              <h1 className="sg-tech-h1">
                {renderHeroTitle(data)}
              </h1>

              {/* Micro Tagline */}
              <p className="sg-tech-micro-desc">
                {microDesc}
              </p>

              {/* Dual Action Buttons */}
              <div className="sg-tech-action-row">
                <button className="sg-tech-start-btn" onClick={onOpenModal}>
                  <Zap size={16} />
                  <span>{data.heroButtonText ? data.heroButtonText.replace("→", "").trim() : "Start Free Audit"}</span>
                  <ArrowRight size={16} />
                </button>

                <button
                  className="sg-tech-play-btn"
                  onClick={() => {
                    const el = document.querySelector('.sg-seo-story-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else onOpenModal();
                  }}
                  title="View Strategy & Methodology"
                >
                  <div className="sg-tech-play-icon-wrap">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="6 3 20 12 6 21 6 3" />
                    </svg>
                  </div>
                  <span className="sg-tech-play-label">See How It Works</span>
                </button>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: BRANDFORGE THEME 3D ARTWORK (GROUNDED, NO HOVER FLOAT) */}
            <motion.div
              className="sg-tech-banner-right"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <div className="sg-tech-floating-container">
                <div className="sg-tech-art-ambient-glow" />
                <img
                  src={bannerAsset}
                  alt={`${data.title} BrandForge 3D Ecosystem`}
                  className="sg-tech-floating-img"
                  style={{ borderRadius: "24px" }}
                />

                {/* Badges in BrandForge Theme */}
                <div className="sg-tech-floating-badge badge-top">
                  <Sparkles size={14} className="badge-icon-sparkle" />
                  <div>
                    <strong>{badges.top.strong}</strong>
                    <span>{badges.top.span}</span>
                  </div>
                </div>

                <div className="sg-tech-floating-badge badge-bottom">
                  <CheckCircle2 size={14} className="badge-icon-check" />
                  <div>
                    <strong>{badges.bottom.strong}</strong>
                    <span>{badges.bottom.span}</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </header>

      {/* DEDICATED PARAGRAPH STORY & LEAD FORM SECTION (APPLIED TO ALL SERVICES) */}
      <section className="sg-seo-story-section">
        <div className="sg-container">
          <div className="sg-seo-split-grid">
            
            {/* LEFT COLUMN: THE PARAGRAPHS & CAPABILITIES */}
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
            </motion.div>

            {/* RIGHT COLUMN: LEAD CAPTURE FORM */}
            <motion.div
              className="sg-seo-story-right"
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="sg-inline-form-wrap">
                <div className="sg-form-header">
                  <Sparkles size={18} className="sg-form-sparkle" />
                  <h3>Drop Us a Message</h3>
                  <p>Get a response within 4 hours & free audit strategy</p>
                </div>

                <form className="sg-lead-form" onSubmit={async (e) => {
                  e.preventDefault();
                  const formEl = e.target;
                  const formData = new FormData(formEl);
                  const dataObj = Object.fromEntries(formData.entries());

                  try {
                    await fetch("https://formsubmit.co/ajax/brandforgedigitalmarketing@gmail.com", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                      },
                      body: JSON.stringify({
                        ...dataObj,
                        _subject: `⚡ New Landing Page Enquiry for ${data.eyebrow}`
                      })
                    });
                  } catch (err) {
                    console.error(err);
                  }
                  alert(`Thank you! Your ${data.eyebrow} enquiry has been received. Our strategy team will contact you within 4 hours.`);
                  formEl.reset();
                }}>
                  <div className="sg-field-row">
                    <input type="text" name="name" required placeholder="Your Full Name *" className="sg-input-line" />
                  </div>

                  <div className="sg-field-grid">
                    <select name="country_code" className="sg-select-line country-code" defaultValue="+91">
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+971">🇦🇪 +971</option>
                      <option value="+65">🇸🇬 +65</option>
                    </select>
                    <input type="tel" name="phone" required placeholder="Phone / WhatsApp *" className="sg-input-line" />
                  </div>

                  <div className="sg-field-grid">
                    <input type="email" name="email" required placeholder="Work Email *" className="sg-input-line" />
                    <select name="service" className="sg-select-line" defaultValue={data.eyebrow}>
                      <option value={data.eyebrow}>{data.eyebrow}</option>
                      <option value="SEO & GEO Supremacy">SEO & GEO Supremacy</option>
                      <option value="Paid Media Scaling">Paid Media Scaling</option>
                      <option value="Website Development">Website Development</option>
                      <option value="Social Media & Viral Reels">Social Media & Viral Reels</option>
                      <option value="Content & Brand Positioning">Content & Brand Positioning</option>
                      <option value="Full Agency Forge">Full Agency Forge</option>
                    </select>
                  </div>

                  <div className="sg-field-grid">
                    <input type="text" name="business" required placeholder="Business Name *" className="sg-input-line" />
                    <input type="text" name="location" required placeholder="City / Country *" className="sg-input-line" />
                  </div>

                  <div className="sg-field-row">
                    <textarea name="message" rows="3" placeholder="Tell us about your brand growth goals..." className="sg-textarea-line" />
                  </div>

                  <button type="submit" className="sg-form-btn">
                    <Zap size={16} />
                    <span>SEND ENQUIRY NOW</span>
                    <ArrowRight size={16} />
                  </button>
                </form>
              </div>
            </motion.div>

          </div>

          {/* 3 CARDS IN A ROW */}
          <motion.div
            className="sg-seo-story-pillars"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {topThreePillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon || Zap;
              const pillarDesc = pillar.description
                ? (pillar.description.length > 130 ? pillar.description.slice(0, 127) + "..." : pillar.description)
                : (pillar.deliverables?.[0] || "");
              return (
                <div key={idx} className="sg-story-pillar-item">
                  <div className="pillar-icon-box">
                    <PillarIcon size={22} />
                  </div>
                  <div>
                    <h4>{pillar.title}</h4>
                    <p>{pillarDesc}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>



          {/* CARDLESS TYPOGRAPHIC METRICS STRIP & CLIENT LOGOS PROOF */}
      <section className="sg-metrics-section">
        <div className="sg-container">
          <div className="sg-metrics-strip">
            {data.metrics.map((m, idx) => (
              <motion.div
                key={m.label}
                className="sg-metric-item"
                initial={{ opacity: 0, y: 35, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <span className="sg-metric-val">{m.value}</span>
                <div className="sg-metric-lbl">{m.label}</div>
                <div className="sg-metric-sub">{m.desc}</div>
              </motion.div>
            ))}
          </div>

          {/* TRANSPARENT PNG CLIENT LOGOS PROOF STREAM */}
          <motion.div
            className="sg-client-png-strip"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <span className="strip-title">TRUSTED BY CATEGORY LEADERS</span>
            <div className="strip-logos">
              <img src="/client-sonicprints.png" alt="Sonic Prints" className="png-client-logo" style={{ transform: "scale(1.4)" }} />
              <img src="/client-thoughtflows.png" alt="ThoughtFlows" className="png-client-logo" style={{ transform: "scale(1.35)" }} />
              <img src="/client-talentera.png" alt="Talentera" className="png-client-logo" style={{ transform: "scale(1.0)" }} />
              <img src="/client-thoughtspace.png" alt="ThoughtSpace" className="png-client-logo" style={{ transform: "scale(1.4)" }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY BUSINESSES CHOOSE BRAND FORGE SECTION */}
      {data.whyChooseUs && (
        <section className="sg-section sg-why-section">
          <div className="sg-container">
            <div className="sg-why-grid">
              
              {/* LEFT: HEADING, DESCRIPTION & LEAD-IN */}
              <motion.div
                className="sg-why-left"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.7 }}
              >
                <span className="sg-section-tag">{data.whyChooseUs.tag || "LOCAL SEO AUTHORITY"}</span>
                <h2 className="sg-why-title">{data.whyChooseUs.title}</h2>
                <p className="sg-why-desc">{data.whyChooseUs.description}</p>
                <p className="sg-why-leadin">{data.whyChooseUs.leadIn}</p>
              </motion.div>

              {/* RIGHT: FEATURE CARDS / POINTS */}
              <div className="sg-why-points-grid">
                {data.whyChooseUs.points.map((point, idx) => (
                  <motion.div
                    key={idx}
                    className="sg-why-point-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <div className="sg-why-point-icon">
                      <CheckCircle2 size={18} className="check-icon" />
                    </div>
                    <div className="sg-why-point-content">
                      <p>{typeof point === "string" ? point : point.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </section>
      )}

      {/* CARDLESS EDITORIAL COMPARISON MATRIX */}
      <section className="sg-section sg-comparison-section">
        <div className="sg-container">
          <motion.div
            className="sg-section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <span className="sg-section-tag">{data.matrixTag}</span>
            <h2 className="sg-section-title">{data.matrixTitle}</h2>
            <p className="sg-section-subtitle">{data.matrixSubtitle}</p>
          </motion.div>

          <div className="sg-matrix-stream">
            {data.matrixRows.map((row, idx) => (
              <motion.div
                key={row.feature}
                className="sg-matrix-row"
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
              >
                <div className="sg-row-feature">
                  <Sparkles size={16} className="feat-icon" />
                  <span>{row.feature}</span>
                </div>
                
                <div className="sg-row-compare">
                  <div className="sg-col-trad">
                    <span className="sg-col-lbl">OLD TRADITIONAL AGENCY</span>
                    <p>{row.traditional}</p>
                  </div>
                  <div className="sg-col-geo">
                    <span className="sg-col-lbl">BRANDFORGE ENGINE</span>
                    <p>{row.brandforge}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CARDLESS INTERACTIVE 6-PILLAR LIST STREAM */}
      <section className="sg-section sg-pillars-section">
        <div className="sg-container">
          <motion.div
            className="sg-section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <span className="sg-section-tag">{data.pillarsTag || "6-PILLAR SYSTEM"}</span>
            <h2 className="sg-section-title">
              {data.pillarsTitle ? (
                data.pillarsTitle
              ) : (
                <>THE <span>BRANDFORGE {data.number} FORGE</span></>
              )}
            </h2>
            <p className="sg-section-subtitle">
              {data.pillarsSubtitle || "Every system is engineered to capture market intent, build category authority, and scale pipeline."}
            </p>
          </motion.div>

          <div className="sg-pillars-list">
            {data.pillars.map((p, idx) => {
              const PillarIcon = p.icon || Zap;
              const isOpen = activePillar === idx;

              return (
                <motion.div
                  key={p.title}
                  className={`sg-pillar-row ${isOpen ? "is-active" : ""}`}
                  initial={{ opacity: 0, x: -35, y: 15 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  onClick={() => setActivePillar(isOpen ? null : idx)}
                >
                  <div className="sg-pillar-head">
                    <div className="sg-pillar-num">0{idx + 1}</div>
                    <div className="sg-big-pillar-icon">
                      <PillarIcon size={24} className="pillar-lucide-icon" />
                    </div>
                    <div className="sg-pillar-title-group">
                      <div className="sg-pillar-tag-inline">{p.tag}</div>
                      <h3>{p.title}</h3>
                    </div>
                    <div className="sg-pillar-toggle">
                      <ChevronDown size={20} className={`toggle-icon ${isOpen ? "open" : ""}`} />
                    </div>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        className="sg-pillar-body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        <p>{p.description}</p>
                        {p.callout && (
                          <div className="sg-pillar-callout" style={{ margin: "14px 0 16px", padding: "12px 16px", borderRadius: "12px", background: "rgba(239, 65, 54, 0.08)", borderLeft: "3px solid #EF4136", color: "rgba(255, 255, 255, 0.9)", fontSize: "14px", fontStyle: "italic", lineHeight: 1.6 }}>
                            {p.callout}
                          </div>
                        )}
                        <div className="sg-pillar-deliv-wrap">
                          {p.deliverables.map((d) => (
                            <span key={d} className="sg-deliv-tag">
                              <CheckCircle2 size={13} />
                              {d}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CARDLESS HORIZONTAL TIMELINE PROCESS THREAD */}
      <section className="sg-section sg-process-sec">
        <div className="sg-container">
          <motion.div
            className="sg-section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <span className="sg-section-tag">{data.timeline?.tag || "EXECUTION ROADMAP"}</span>
            <h2 className="sg-section-title">
              {data.timeline?.title ? (
                data.timeline.title
              ) : (
                <>4-STEP <span>ENGINEERING BLUEPRINT</span></>
              )}
            </h2>
            <p className="sg-section-subtitle">
              {data.timeline?.subtitle || "How we take your project from initial strategy blueprint to live market dominance."}
            </p>
          </motion.div>

          <div className={`sg-timeline-stream ${data.timeline?.steps?.length === 6 ? "has-6-steps" : ""}`}>
            <div className="sg-timeline-line" />
            {(data.timeline?.steps || [
              { num: "01", title: "STRATEGY ARCHITECTURE", desc: "120-point diagnostic audit, competitor teardowns & roadmap alignment." },
              { num: "02", title: "UI/UX & PROTOTYPING", desc: "Custom 3D visual design tokens, glassmorphic UX & conversion triggers." },
              { num: "03", title: "SUB-SECOND ENGINEERING", desc: "Next.js/React front-end code, WebGL shaders & Core Web Vitals optimization." },
              { num: "04", title: "DEPLOYS & ROAS SCALE", desc: "Live production launch, CAPI tracking, GEO schemas & LTV scaling loops." },
            ]).map((step, sIdx) => (
              <motion.div
                key={step.num}
                className="sg-timeline-step"
                initial={{ opacity: 0, y: 35, scale: 0.88 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: sIdx * 0.12 }}
              >
                <div className="sg-node-dot">{step.num}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT MAKES OUR COMPANY DIFFERENT SECTION */}
      {data.differentiators && (
        <section className="sg-section sg-diff-section">
          <div className="sg-container">
            <motion.div
              className="sg-section-header text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <span className="sg-section-tag">{data.differentiators.tag || "THE BRANDFORGE ADVANTAGE"}</span>
              <h2 className="sg-section-title">{data.differentiators.title}</h2>
              {data.differentiators.subtitle && (
                <p className="sg-section-subtitle">{data.differentiators.subtitle}</p>
              )}
            </motion.div>

            <div className="sg-diff-grid">
              {data.differentiators.items.map((item, idx) => {
                const DiffIcon = item.icon || Sparkles;
                return (
                  <motion.div
                    key={item.title}
                    className="sg-diff-card"
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                  >
                    <div className="sg-diff-icon-wrap">
                      <DiffIcon size={24} className="diff-lucide-icon" />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* WHO WE HELP SECTION */}
      {data.whoWeHelp && (
        <section className="sg-section sg-who-section">
          <div className="sg-container">
            <motion.div
              className="sg-section-header text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <span className="sg-section-tag">{data.whoWeHelp.tag || "WHO WE HELP"}</span>
              <h2 className="sg-section-title">{data.whoWeHelp.title}</h2>
              {data.whoWeHelp.subtitle && (
                <p className="sg-section-subtitle">{data.whoWeHelp.subtitle}</p>
              )}
            </motion.div>

            {data.whoWeHelp.industries && (
              <div className="sg-who-grid">
                {data.whoWeHelp.industries.map((ind, idx) => (
                  <motion.div
                    key={ind.title}
                    className="sg-who-card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                  >
                    <div className="sg-who-icon">
                      <CheckCircle2 size={18} className="check-icon" />
                    </div>
                    <div className="sg-who-content">
                      <h4>{ind.title}</h4>
                      <p>{ind.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {data.whoWeHelp.certifications && (
              <div className="sg-cert-strip">
                {data.whoWeHelp.certifications.map((cert, idx) => (
                  <motion.div
                    key={cert.label}
                    className="sg-cert-badge"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                  >
                    <ShieldCheck size={16} className="cert-icon" />
                    <span>{cert.label}</span>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* CARDLESS FAQ ACCORDION LIST */}
      <section className="sg-section sg-faq-section">
        <div className="sg-container">
          <motion.div
            className="sg-section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <span className="sg-section-tag">ANSWERS & CLARITY</span>
            <h2 className="sg-section-title">FREQUENTLY ASKED <span>QUESTIONS</span></h2>
          </motion.div>

          <div className="sg-faq-stream">
            {data.faqs.map((faq, idx) => (
              <motion.div
                key={faq.q}
                className={`sg-faq-row ${activeFaq === idx ? "is-open" : ""}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
              >
                <div className="sg-faq-q">
                  <span>{faq.q}</span>
                  <ChevronDown size={18} className="sg-faq-arrow" />
                </div>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      className="sg-faq-a"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES INTERNAL CROSS-LINKING SECTION */}
      <section className="sg-section sg-related-services-section">
        <div className="sg-container">
          <motion.div
            className="sg-section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <span className="sg-section-tag">COMPLEMENTARY FORGES</span>
            <h2 className="sg-section-title">RELATED <span>GROWTH SYSTEMS</span></h2>
            <p className="sg-section-subtitle">
              Scale your brand faster by connecting {data.eyebrow} with our specialized revenue engines.
            </p>
          </motion.div>

          <div className="sg-related-grid">
            {Object.entries(servicesData)
              .filter(([k]) => k !== slug)
              .slice(0, 4)
              .map(([k, srv], rIdx) => (
                <motion.a
                  key={k}
                  href={`/services/${k}`}
                  className="sg-related-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: rIdx * 0.08 }}
                  onClick={(e) => {
                    if (!e.ctrlKey && !e.metaKey && navigate) {
                      e.preventDefault();
                      navigate(`/services/${k}`);
                    }
                  }}
                >
                  <div className="sg-related-num-badge">{srv.number}</div>
                  <h4>{srv.eyebrow}</h4>
                  <p>
                    {typeof srv.subtitle === "string"
                      ? srv.subtitle.slice(0, 85) + "..."
                      : srv.subtitle[0]?.slice(0, 85) + "..."}
                  </p>
                  <div className="sg-related-link-text">
                    <span>EXPLORE FORGE</span>
                    <ArrowRight size={14} />
                  </div>
                </motion.a>
              ))}
          </div>
        </div>
      </section>

      {/* BOTTOM BANNER CTA */}
      <section className="sg-bottom-cta">
        <div className="sg-container">
          <motion.div
            className="sg-cta-box-cardless"
            initial={{ opacity: 0, y: 45, scale: 0.93 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h2>
              {data.bottomCta?.title ? (
                <>
                  {data.bottomCta.title.includes("—") ? (
                    <>{data.bottomCta.title.split("—")[0]} — <span>{data.bottomCta.title.split("—")[1]}</span></>
                  ) : (
                    data.bottomCta.title
                  )}
                </>
              ) : (
                <>READY TO FORGE <span>{data.eyebrow}?</span></>
              )}
            </h2>
            <p>
              {data.bottomCta?.subtitle || "Get a comprehensive strategy audit delivered to your inbox within 24 hours."}
            </p>
            <div className="sg-cta-actions">
              <button className="sg-btn primary" onClick={onOpenModal}>
                <Zap size={16} />
                <span>{data.bottomCta?.buttonText || "REQUEST FREE STRATEGY AUDIT"}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SITE FOOTER */}
      <BrandForgeAnimatedFooter onOpenModal={onOpenModal} />
    </div>
  );
}

const styles = `
  @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@700;800;900&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=JetBrains+Mono:wght@700;800&display=swap");

  .sg-page-root {
    background: #000000;
    color: #FFFFFF;
    font-family: "Plus Jakarta Sans", sans-serif;
    overflow-x: hidden;
    padding-top: 110px;
    position: relative;
    z-index: 1;
  }

  /* BLACK TRANSPARENT OVERLAY IN BETWEEN BACKGROUND & CONTENT */
  .sg-bg-overlay {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.68);
    pointer-events: none;
    z-index: 1;
  }

  .sg-container {
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 clamp(20px, 4vw, 40px);
    position: relative;
    z-index: 2;
  }

  .text-center { text-align: center; }

  /* TICKER STRIP */
  .sg-marquee-bar {
    background: rgba(10, 10, 12, 0.85);
    backdrop-filter: blur(12px);
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    color: #FFFFFF;
    padding: 12px 0;
    margin-top: 8px;
    overflow: hidden;
    white-space: nowrap;
    font-family: "Outfit", sans-serif;
    font-size: 0.82rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    position: relative;
    z-index: 5;
  }

  .sg-marquee-track {
    display: inline-flex;
    gap: 30px;
    animation: sgMarquee 35s linear infinite;
  }

  .sg-marquee-track span { color: #EF4136; }

  @keyframes sgMarquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  /* HERO BANNER — CARDLESS */
  .sg-hero {
    position: relative;
    padding: clamp(40px, 6vw, 80px) 0 clamp(60px, 8vw, 100px);
    background: transparent;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  /* HIGH-TECH BANNER SECTION (SEO & GEO) */
  .sg-hero-banner-tech {
    background: transparent;
    overflow: hidden;
  }

  .tech-hud-overlay {
    position: absolute;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
    z-index: 1;
  }

  .tech-hud-circle {
    position: absolute;
    top: 8%;
    left: -8%;
    width: 440px;
    height: 440px;
    border: 1px dashed rgba(255, 255, 255, 0.08);
    border-radius: 50%;
    animation: sgSpinHUD 60s linear infinite;
  }

  .tech-hud-circle-2 {
    top: 40%;
    right: -10%;
    width: 540px;
    height: 540px;
    border: 1px dashed rgba(210, 4, 45, 0.22);
    animation: sgSpinHUDRev 75s linear infinite;
  }

  @keyframes sgSpinHUD {
    to { transform: rotate(360deg); }
  }
  @keyframes sgSpinHUDRev {
    to { transform: rotate(-360deg); }
  }

  .tech-hud-dots {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px);
    background-size: 32px 32px;
    opacity: 0.18;
    mask-image: radial-gradient(circle at center, black 40%, transparent 80%);
    -webkit-mask-image: radial-gradient(circle at center, black 40%, transparent 80%);
  }

  .sg-tech-banner-grid {
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: clamp(32px, 5vw, 64px);
    align-items: center;
    position: relative;
    z-index: 2;
  }

  .sg-tech-banner-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  /* Social Icons Row */
  .sg-tech-socials {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 24px;
  }

  .sg-tech-social-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.12);
    color: rgba(255, 255, 255, 0.75);
    text-decoration: none;
    transition: all 0.25s ease;
  }

  .sg-tech-social-link:hover {
    color: #FFFFFF;
    background: #D2042D;
    border-color: #D2042D;
    transform: translateY(-2px);
    box-shadow: 0 0 18px rgba(210, 4, 45, 0.55);
  }

  /* Cyber Pill Tag */
  .sg-tech-pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 16px;
    border-radius: 999px;
    background: rgba(210, 4, 45, 0.1);
    border: 1px solid rgba(210, 4, 45, 0.4);
    color: #D2042D;
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    font-family: "JetBrains Mono", monospace;
    margin-bottom: 20px;
    text-transform: uppercase;
  }

  .sg-tech-pill-dot {
    color: #D2042D;
    font-size: 1.1rem;
    line-height: 1;
  }

  .sg-tech-pill.inline-pill {
    background: rgba(210, 4, 45, 0.12);
    border-color: rgba(210, 4, 45, 0.4);
    color: #D2042D;
  }

  /* H1 Heading with Gradient Accent & Squiggly Wave */
  .sg-tech-h1 {
    font-family: "Outfit", sans-serif;
    font-size: clamp(34px, 4.5vw, 62px);
    font-weight: 900;
    line-height: 1.08;
    letter-spacing: -0.025em;
    color: #FFFFFF;
    margin: 0 0 22px;
  }

  .sg-tech-h1-accent {
    position: relative;
    display: inline-block;
    color: #D2042D;
    background: linear-gradient(135deg, #FF2E55 0%, #D2042D 50%, #900018 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .sg-tech-squiggle {
    position: absolute;
    left: 0;
    bottom: -12px;
    width: 100%;
    height: 16px;
    pointer-events: none;
  }

  .sg-tech-micro-desc {
    font-size: clamp(15px, 1.4vw, 18px);
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.82);
    margin: 0 0 32px;
    max-width: 580px;
  }

  /* Dual Action Buttons (Start Free Audit + Circular Play Button) */
  .sg-tech-action-row {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  .sg-tech-start-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 14px 30px;
    border-radius: 999px;
    background: #D2042D;
    color: #FFFFFF;
    font-family: "Outfit", sans-serif;
    font-size: 0.92rem;
    font-weight: 800;
    letter-spacing: 0.03em;
    border: none;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 10px 28px rgba(210, 4, 45, 0.45);
  }

  .sg-tech-start-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 14px 38px rgba(210, 4, 45, 0.7);
    background: #B80324;
  }

  .sg-tech-play-btn {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 4px 8px;
    transition: all 0.25s ease;
  }

  .sg-tech-play-icon-wrap {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: #D2042D;
    color: #FFFFFF;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 24px rgba(210, 4, 45, 0.6);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .sg-tech-play-btn:hover .sg-tech-play-icon-wrap {
    transform: scale(1.08);
    box-shadow: 0 0 35px rgba(210, 4, 45, 0.9);
  }

  .sg-tech-play-label {
    font-family: "Outfit", sans-serif;
    font-size: 0.88rem;
    font-weight: 800;
    letter-spacing: 0.04em;
    color: rgba(255, 255, 255, 0.88);
    transition: color 0.2s ease;
  }

  .sg-tech-play-btn:hover .sg-tech-play-label {
    color: #D2042D;
  }

  /* Right-Side BrandForge Theme 3D Artwork (Grounded, No Hover Float) */
  .sg-tech-banner-right {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sg-tech-floating-container {
    position: relative;
    width: 100%;
    max-width: 540px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sg-tech-floating-img {
    width: 100%;
    max-width: 520px;
    height: auto;
    object-fit: contain;
    display: block;
    position: relative;
    z-index: 1;
    filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.95)) drop-shadow(0 0 45px rgba(210, 4, 45, 0.38));
  }

  .sg-tech-art-ambient-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 480px;
    height: 480px;
    transform: translate(-50%, -50%);
    background: radial-gradient(circle, rgba(210, 4, 45, 0.32) 0%, rgba(130, 8, 25, 0.12) 48%, transparent 70%);
    filter: blur(55px);
    pointer-events: none;
    z-index: 0;
  }

  .sg-tech-floating-badge {
    position: absolute;
    z-index: 2;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 10px 16px;
    border-radius: 16px;
    background: rgba(14, 2, 4, 0.92);
    border: 1px solid rgba(210, 4, 45, 0.4);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.8), 0 0 25px rgba(210, 4, 45, 0.25);
  }

  .sg-tech-floating-badge.badge-top {
    top: 24px;
    right: 20px;
  }

  .sg-tech-floating-badge.badge-bottom {
    bottom: 24px;
    left: 20px;
  }

  .sg-tech-floating-badge strong {
    display: block;
    font-size: 0.86rem;
    font-weight: 900;
    color: #FFFFFF;
    font-family: "Outfit", sans-serif;
  }

  .sg-tech-floating-badge span {
    display: block;
    font-size: 0.72rem;
    color: rgba(255, 255, 255, 0.65);
  }

  .badge-icon-sparkle { color: #D2042D; }
  .badge-icon-check { color: #D2042D; }

  /* DEDICATED PARAGRAPH STORY & LEAD FORM SECTION (SEO & GEO) */
  .sg-seo-story-section {
    padding: clamp(60px, 8vw, 100px) 0 clamp(40px, 5vw, 60px);
    position: relative;
    z-index: 2;
    background: transparent;
    border-top: 1px solid rgba(210, 4, 45, 0.2);
    border-bottom: 1px solid rgba(210, 4, 45, 0.15);
  }

  .sg-seo-split-grid {
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: clamp(32px, 5vw, 64px);
    align-items: flex-start;
  }

  .sg-seo-story-left {
    display: flex;
    flex-direction: column;
  }

  .sg-seo-story-heading {
    font-family: "Outfit", sans-serif;
    font-size: clamp(26px, 3.4vw, 46px);
    font-weight: 900;
    line-height: 1.15;
    color: #FFFFFF;
    margin: 14px 0 22px;
    letter-spacing: -0.02em;
  }

  .sg-seo-story-heading span {
    color: #D2042D;
  }

  .sg-seo-story-body {
    margin-bottom: 28px;
  }

  .sg-seo-story-para {
    font-size: clamp(15px, 1.4vw, 17px);
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.78);
    margin: 0 0 16px;
  }

  .sg-seo-story-para.lead-para {
    font-size: clamp(17px, 1.6vw, 20px);
    font-weight: 600;
    line-height: 1.65;
    color: #FFFFFF;
    border-left: 3px solid #D2042D;
    padding-left: 18px;
    margin-bottom: 20px;
    background: rgba(210, 4, 45, 0.06);
    padding-top: 6px;
    padding-bottom: 6px;
    border-radius: 0 12px 12px 0;
  }

  .sg-seo-story-pillars {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: clamp(16px, 2vw, 24px);
    margin-top: clamp(36px, 4vw, 48px);
    padding-top: clamp(28px, 3.5vw, 40px);
    border-top: 1px solid rgba(210, 4, 45, 0.2);
  }

  .sg-story-pillar-item {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    background: rgba(210, 4, 45, 0.03);
    border: 1px solid rgba(210, 4, 45, 0.16);
    border-radius: 20px;
    padding: 22px 20px;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    height: 100%;
  }

  .sg-story-pillar-item:hover {
    border-color: rgba(210, 4, 45, 0.55);
    background: rgba(210, 4, 45, 0.08);
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5), 0 0 25px rgba(210, 4, 45, 0.2);
  }

  .pillar-icon-box {
    flex-shrink: 0;
    width: 44px;
    height: 44px;
    border-radius: 14px;
    background: rgba(210, 4, 45, 0.15);
    border: 1px solid rgba(210, 4, 45, 0.4);
    color: #D2042D;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sg-story-pillar-item h4 {
    font-family: "Outfit", sans-serif;
    font-size: 1.05rem;
    font-weight: 800;
    color: #FFFFFF;
    margin: 0 0 6px;
    line-height: 1.3;
  }

  .sg-story-pillar-item p {
    font-size: 0.86rem;
    line-height: 1.55;
    color: rgba(255, 255, 255, 0.65);
    margin: 0;
  }

  .sg-seo-story-right {
    position: sticky;
    top: 90px;
  }

  .sg-hero-glow {
    display: none;
  }

  .sg-hero-grid {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: clamp(32px, 5vw, 64px);
    align-items: center;
  }

  .sg-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 16px;
    border-radius: 999px;
    background: rgba(239, 65, 54, 0.12);
    border: 1px solid rgba(239, 65, 54, 0.35);
    color: #EF4136;
    font-size: 0.82rem;
    font-weight: 800;
    margin-bottom: 20px;
    text-transform: uppercase;
  }

  .sg-hero-title {
    font-family: "Outfit", sans-serif;
    font-size: clamp(34px, 5vw, 68px);
    font-weight: 900;
    line-height: 1.05;
    letter-spacing: -0.02em;
    color: #FFFFFF;
    margin: 0 0 20px;
  }

  .sg-hero-title span { color: #EF4136; }

  .sg-hero-desc {
    font-size: clamp(15px, 1.6vw, 18px);
    line-height: 1.65;
    color: rgba(255, 255, 255, 0.82);
    margin: 0 0 32px;
  }

  .sg-hero-desc-para {
    margin: 0 0 16px;
  }

  .sg-hero-desc-para:last-child {
    margin-bottom: 0;
  }

  .sg-hero-actions { display: flex; gap: 14px; }

  /* HIGH-TECH GLOWING GLASS FORM BACKGROUND EFFECT (BORDERLESS) */
  .sg-inline-form-wrap {
    position: relative;
    padding: clamp(24px, 3vw, 36px) clamp(20px, 2.5vw, 32px);
    background: rgba(14, 2, 5, 0.45);
    border-radius: 24px;
    border: 1px solid rgba(210, 4, 45, 0.35);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    box-shadow: 
      0 20px 60px rgba(0, 0, 0, 0.7),
      0 0 35px rgba(210, 4, 45, 0.12);
    overflow: hidden;
    transition: all 0.35s ease;
  }

  .sg-inline-form-wrap:hover {
    box-shadow: 
      0 25px 60px rgba(0, 0, 0, 0.85),
      0 0 50px rgba(210, 4, 45, 0.22);
    border-color: rgba(210, 4, 45, 0.5);
  }

  .sg-inline-form-wrap::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 160px;
    height: 160px;
    background: radial-gradient(circle, rgba(210, 4, 45, 0.25) 0%, transparent 70%);
    filter: blur(30px);
    pointer-events: none;
  }

  .sg-inline-form-wrap::after {
    content: "";
    position: absolute;
    bottom: -40px;
    left: -40px;
    width: 140px;
    height: 140px;
    background: radial-gradient(circle, rgba(210, 4, 45, 0.16) 0%, transparent 70%);
    filter: blur(35px);
    pointer-events: none;
  }

  .sg-form-header {
    position: relative;
    z-index: 2;
  }

  .sg-form-sparkle {
    color: #D2042D;
    margin-bottom: 8px;
    filter: drop-shadow(0 0 8px rgba(210, 4, 45, 0.8));
  }

  .sg-form-header h3 {
    font-size: clamp(20px, 2.2vw, 24px);
    font-weight: 900;
    margin: 0 0 6px;
    color: #FFFFFF;
    letter-spacing: -0.01em;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
  }

  .sg-form-header p {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.7);
    margin: 0 0 24px;
    font-weight: 500;
  }

  .sg-lead-form {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .sg-field-row { width: 100%; }

  .sg-field-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }

  .sg-input-line, .sg-select-line, .sg-textarea-line {
    width: 100%;
    padding: 12px 14px;
    background: rgba(6, 5, 9, 0.5);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 10px;
    color: #FFFFFF;
    font-size: 13.5px;
    font-weight: 600;
    outline: none;
    transition: all 0.25s ease;
    font-family: inherit;
    box-sizing: border-box;
  }

  .sg-input-line::placeholder, .sg-textarea-line::placeholder {
    color: rgba(255, 255, 255, 0.45);
    font-weight: 500;
  }

  .sg-select-line option {
    background: #0A0A0C;
    color: #FFFFFF;
  }

  .sg-input-line:focus, .sg-select-line:focus, .sg-textarea-line:focus {
    background: rgba(6, 5, 9, 0.75);
    border-color: #D2042D;
    box-shadow: 0 0 16px rgba(210, 4, 45, 0.35), inset 0 0 8px rgba(210, 4, 45, 0.1);
  }

  .sg-form-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 52px;
    width: 100%;
    margin-top: 8px;
    background: linear-gradient(135deg, #D2042D 0%, #A80324 100%);
    color: #FFFFFF;
    border: none;
    border-radius: 12px;
    font-size: 0.92rem;
    font-weight: 800;
    letter-spacing: 0.05em;
    cursor: pointer;
    box-shadow: 0 10px 25px rgba(210, 4, 45, 0.45);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .sg-form-btn:hover {
    background: linear-gradient(135deg, #E61940 0%, #D2042D 100%);
    transform: translateY(-2px);
    box-shadow: 0 14px 35px rgba(210, 4, 45, 0.65);
  }

  /* BIG WIDESCREEN HERO VISUAL SHOWCASE FRAME STYLES */
  .sg-big-visual-frame {
    position: relative;
    width: 100%;
    height: clamp(280px, 35vw, 440px);
    margin-top: 50px;
    border-radius: 28px;
    overflow: hidden;
    border: 1.5px solid rgba(239, 65, 54, 0.4);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.7), 0 0 40px rgba(239, 65, 54, 0.2);
  }

  .big-visual-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.9) contrast(1.1);
  }

  .visual-glass-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 40%, rgba(10, 10, 12, 0.85) 100%);
    pointer-events: none;
  }

  .floating-badge {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 12px 20px;
    border-radius: 20px;
    background: rgba(10, 10, 14, 0.85);
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(16px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    z-index: 5;
  }

  .floating-badge.top-left {
    top: 24px;
    left: 24px;
  }

  .floating-badge.bottom-right {
    bottom: 24px;
    right: 24px;
  }

  .big-floating-png {
    width: 36px;
    height: 36px;
    object-fit: contain;
    filter: drop-shadow(0 0 8px rgba(239, 65, 54, 0.8));
  }

  .floating-badge strong {
    display: block;
    font-size: 13px;
    font-weight: 900;
    color: #FFFFFF;
    font-family: "Outfit", sans-serif;
  }

  .floating-badge span {
    font-size: 11px;
    color: rgba(255, 255, 255, 0.65);
  }

  /* LARGE PILLAR ICON BADGES */
  .sg-big-pillar-icon {
    position: relative;
    width: 52px;
    height: 52px;
    border-radius: 16px;
    background: rgba(239, 65, 54, 0.12);
    border: 1.5px solid rgba(239, 65, 54, 0.35);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    flex-shrink: 0;
    box-shadow: 0 0 20px rgba(239, 65, 54, 0.2);
  }

  .pillar-lucide-icon {
    color: #EF4136;
  }

  .pillar-png-icon {
    position: absolute;
    bottom: -6px;
    right: -6px;
    width: 22px;
    height: 22px;
    object-fit: contain;
    filter: drop-shadow(0 0 4px rgba(239, 65, 54, 0.8));
  }

  /* CARDLESS METRICS STRIP */
  .sg-metrics-strip {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: 60px;
    padding-top: 40px;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
  }

  .sg-metric-val {
    font-family: "Outfit", sans-serif;
    font-size: clamp(28px, 3.5vw, 46px);
    font-weight: 900;
    color: #EF4136;
    line-height: 1;
    display: block;
    margin-bottom: 6px;
  }

  .sg-metric-lbl {
    font-size: 14px;
    font-weight: 800;
    color: #FFFFFF;
  }

  .sg-badge-png-icon {
    height: 18px;
    width: 18px;
    object-fit: contain;
    filter: drop-shadow(0 0 6px rgba(239, 65, 54, 0.6));
  }

  .png-deliv-icon {
    height: 14px;
    width: 14px;
    object-fit: contain;
    margin-right: 2px;
  }

  /* TRANSPARENT PNG CLIENT LOGOS PROOF STREAM */
  .sg-client-png-strip {
    margin-top: 40px;
    padding-top: 28px;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .strip-title {
    font-family: "Outfit", sans-serif;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.18em;
    color: rgba(255, 255, 255, 0.65);
    text-transform: uppercase;
  }

  .strip-logos {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: clamp(16px, 4vw, 48px);
    flex-wrap: nowrap;
    width: 100%;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    padding: 10px 0;
  }

  .strip-logos::-webkit-scrollbar {
    display: none;
  }

  .png-client-logo {
    height: clamp(38px, 4.5vw, 56px);
    max-width: 180px;
    width: auto;
    object-fit: contain;
    flex-shrink: 0;
    filter: brightness(0) invert(1) opacity(0.9) drop-shadow(0 2px 10px rgba(255, 255, 255, 0.25));
    transition: opacity 0.25s ease, filter 0.25s ease, transform 0.25s ease;
  }

  .png-client-logo:hover {
    filter: brightness(0) invert(1) opacity(1) drop-shadow(0 6px 20px rgba(239, 65, 54, 0.7));
  }

  .sg-metric-sub {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.65);
  }

  /* WHY BUSINESSES CHOOSE BRAND FORGE SECTION */
  .sg-why-section {
    position: relative;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    background: linear-gradient(180deg, rgba(239, 65, 54, 0.03) 0%, rgba(10, 10, 14, 0.4) 100%);
  }

  .sg-why-grid {
    display: grid;
    grid-template-columns: 1.15fr 1fr;
    gap: clamp(36px, 5vw, 64px);
    align-items: center;
  }

  .sg-why-title {
    font-family: "Outfit", sans-serif;
    font-size: clamp(26px, 3.5vw, 42px);
    font-weight: 900;
    line-height: 1.15;
    color: #FFFFFF;
    margin: 0 0 18px;
    letter-spacing: -0.01em;
  }

  .sg-why-desc {
    font-size: clamp(15px, 1.5vw, 17px);
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.8);
    margin: 0 0 20px;
  }

  .sg-why-leadin {
    font-size: 15px;
    font-weight: 700;
    color: #FFFFFF;
    letter-spacing: 0.01em;
    margin: 0;
  }

  .sg-why-points-grid {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .sg-why-point-card {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 18px 22px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(12px);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .sg-why-point-card:hover {
    border-color: rgba(239, 65, 54, 0.5);
    background: rgba(239, 65, 54, 0.08);
    transform: translateX(6px);
  }

  .sg-why-point-icon {
    width: 38px;
    height: 38px;
    border-radius: 10px;
    background: rgba(239, 65, 54, 0.15);
    border: 1px solid rgba(239, 65, 54, 0.35);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .sg-why-point-icon .check-icon {
    color: #EF4136;
  }

  .sg-why-point-content p {
    font-size: clamp(14px, 1.3vw, 16px);
    font-weight: 600;
    line-height: 1.5;
    color: #FFFFFF;
    margin: 0;
  }

  @media (max-width: 920px) {
    .sg-why-grid {
      grid-template-columns: 1fr;
      gap: 32px;
    }
  }

  /* WHAT MAKES US DIFFERENT SECTION */
  .sg-diff-section {
    position: relative;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    background: linear-gradient(180deg, rgba(239, 65, 54, 0.02) 0%, rgba(10, 10, 14, 0.5) 100%);
  }

  .sg-diff-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  .sg-diff-card {
    padding: 32px 28px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.09);
    backdrop-filter: blur(14px);
    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .sg-diff-card:hover {
    border-color: rgba(239, 65, 54, 0.45);
    background: rgba(239, 65, 54, 0.06);
    transform: translateY(-5px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6), 0 0 30px rgba(239, 65, 54, 0.15);
  }

  .sg-diff-icon-wrap {
    width: 48px;
    height: 48px;
    border-radius: 14px;
    background: rgba(239, 65, 54, 0.15);
    border: 1px solid rgba(239, 65, 54, 0.35);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 4px;
  }

  .sg-diff-icon-wrap .diff-lucide-icon {
    color: #EF4136;
  }

  .sg-diff-card h3 {
    font-family: "Outfit", sans-serif;
    font-size: 20px;
    font-weight: 800;
    color: #FFFFFF;
    margin: 0;
  }

  .sg-diff-card p {
    font-size: 14.5px;
    line-height: 1.65;
    color: rgba(255, 255, 255, 0.75);
    margin: 0;
  }

  @media (max-width: 768px) {
    .sg-diff-grid {
      grid-template-columns: 1fr;
    }
  }

  /* CARDLESS COMPARISON STREAM */
  .sg-section {
    padding: clamp(60px, 8vw, 100px) 0;
    position: relative;
    z-index: 2;
  }

  .sg-section-tag {
    font-family: "JetBrains Mono", monospace;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.12em;
    color: #EF4136;
    text-transform: uppercase;
    display: block;
    margin-bottom: 8px;
  }

  .sg-section-title {
    font-family: "Outfit", sans-serif;
    font-size: clamp(28px, 4vw, 48px);
    font-weight: 900;
    color: #FFFFFF;
    margin: 0 0 12px;
  }

  .sg-section-title span { color: #EF4136; }

  .sg-section-subtitle {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.72);
    max-width: 620px;
    margin: 0 auto 50px;
  }

  .sg-matrix-stream {
    display: flex;
    flex-direction: column;
  }

  .sg-matrix-row {
    padding: 24px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    display: grid;
    grid-template-columns: 240px 1fr;
    gap: 30px;
    align-items: center;
  }

  .sg-row-feature {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 800;
    color: #FFFFFF;
  }

  .sg-row-feature .feat-icon { color: #EF4136; }

  .sg-row-compare {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }

  .sg-col-lbl {
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 0.1em;
    color: rgba(255, 255, 255, 0.45);
    display: block;
    margin-bottom: 4px;
  }

  .sg-col-trad p { color: rgba(255, 255, 255, 0.6); margin: 0; font-size: 14px; }

  .sg-col-geo p { color: #EF4136; margin: 0; font-size: 14px; font-weight: 700; }

  /* CARDLESS PILLARS ACCORDION STREAM */
  .sg-pillars-list {
    display: flex;
    flex-direction: column;
  }

  .sg-pillar-row {
    border-bottom: 1.5px solid rgba(255, 255, 255, 0.15);
    padding: 24px 0;
    cursor: pointer;
    transition: border-bottom-color 0.25s ease;
  }

  .sg-pillar-row.is-active, .sg-pillar-row:hover {
    border-bottom-color: #EF4136;
  }

  .sg-pillar-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .sg-pillar-num {
    font-family: "Outfit", sans-serif;
    font-size: 28px;
    font-weight: 900;
    color: #EF4136;
    width: 60px;
  }

  .sg-pillar-title-group {
    flex: 1;
  }

  .sg-pillar-tag-inline {
    font-size: 11px;
    font-weight: 800;
    color: rgba(255, 255, 255, 0.5);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .sg-pillar-title-group h3 {
    font-size: 22px;
    font-weight: 800;
    margin: 2px 0 0;
    color: #FFFFFF;
  }

  .toggle-icon {
    color: #FFFFFF;
    transition: transform 0.3s ease;
  }

  .toggle-icon.open { transform: rotate(180deg); color: #EF4136; }

  .sg-pillar-body {
    padding-left: 60px;
    padding-top: 16px;
  }

  .sg-pillar-body p {
    font-size: 15px;
    color: rgba(255, 255, 255, 0.75);
    max-width: 700px;
    margin: 0 0 16px;
  }

  .sg-pillar-deliv-wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  .sg-deliv-tag {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    font-weight: 700;
    color: #FFFFFF;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.15);
    padding: 6px 14px;
    border-radius: 999px;
  }

  /* CARDLESS HORIZONTAL TIMELINE */
  .sg-timeline-stream {
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    margin-top: 40px;
  }

  .sg-timeline-stream.has-6-steps {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px 30px;
  }

  .sg-timeline-stream.has-6-steps .sg-timeline-line {
    display: none;
  }

  .sg-timeline-line {
    position: absolute;
    top: 24px;
    left: 0;
    right: 0;
    height: 2px;
    background: rgba(255, 255, 255, 0.15);
    z-index: 1;
  }

  .sg-timeline-step {
    position: relative;
    z-index: 2;
  }

  .sg-node-dot {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #EF4136;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Outfit", sans-serif;
    font-weight: 900;
    font-size: 16px;
    margin-bottom: 20px;
    box-shadow: 0 0 0 6px #000000;
  }

  .sg-timeline-step h4 {
    font-size: 16px;
    font-weight: 800;
    margin: 0 0 8px;
    color: #FFFFFF;
  }

  .sg-timeline-step p {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.65);
    line-height: 1.5;
    margin: 0;
  }

  /* WHO WE HELP SECTION */
  .sg-who-section {
    position: relative;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    background: linear-gradient(180deg, rgba(10, 10, 14, 0.4) 0%, rgba(239, 65, 54, 0.03) 100%);
  }

  .sg-who-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-bottom: 48px;
  }

  .sg-who-card {
    padding: 24px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.09);
    backdrop-filter: blur(12px);
    display: flex;
    gap: 16px;
    align-items: flex-start;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .sg-who-card:hover {
    border-color: rgba(239, 65, 54, 0.4);
    background: rgba(239, 65, 54, 0.05);
    transform: translateY(-4px);
  }

  .sg-who-icon {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background: rgba(239, 65, 54, 0.15);
    border: 1px solid rgba(239, 65, 54, 0.35);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: #EF4136;
    margin-top: 2px;
  }

  .sg-who-content h4 {
    font-family: "Outfit", sans-serif;
    font-size: 17px;
    font-weight: 800;
    color: #FFFFFF;
    margin: 0 0 6px;
  }

  .sg-who-content p {
    font-size: 13.5px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.7);
    margin: 0;
  }

  .sg-cert-strip {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
    padding-top: 24px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }

  .sg-cert-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    border-radius: 999px;
    background: rgba(239, 65, 54, 0.1);
    border: 1px solid rgba(239, 65, 54, 0.3);
    color: #FFFFFF;
    font-size: 13.5px;
    font-weight: 700;
    letter-spacing: 0.02em;
  }

  .sg-cert-badge .cert-icon {
    color: #EF4136;
  }


  /* CARDLESS FAQ */
  .sg-faq-stream {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .sg-faq-row {
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    padding: 20px 0;
    cursor: pointer;
  }

  .sg-faq-q {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 17px;
    font-weight: 800;
    color: #FFFFFF;
  }

  .sg-faq-a p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
    line-height: 1.6;
    margin: 12px 0 0;
  }

  /* CARDLESS CTA */
  .sg-bottom-cta {
    background: rgba(10, 10, 12, 0.85);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    color: #FFFFFF;
    padding: clamp(60px, 8vw, 100px) 0;
    text-align: center;
    position: relative;
    z-index: 2;
  }

  .sg-cta-box-cardless h2 {
    font-family: "Outfit", sans-serif;
    font-size: clamp(32px, 5vw, 64px);
    font-weight: 900;
    margin: 0 0 16px;
  }

  .sg-cta-box-cardless h2 span { color: #EF4136; }

  .sg-cta-box-cardless p {
    font-size: 17px;
    color: rgba(255, 255, 255, 0.7);
    margin: 0 auto 36px;
    max-width: 600px;
  }

  .sg-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 16px 36px;
    border-radius: 999px;
    font-size: 0.95rem;
    font-weight: 800;
    cursor: pointer;
    border: none;
    transition: transform 0.25s ease, background 0.25s ease;
  }

  .sg-btn.primary {
    background: #EF4136;
    color: #FFFFFF;
  }

  .sg-btn.primary:hover {
    background: #d8342a;
    transform: translateY(-2px);
  }

  /* BREADCRUMB NAVIGATION */
  .sg-breadcrumb-nav {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 0.82rem;
    font-weight: 700;
    margin-bottom: 20px;
    font-family: "JetBrains Mono", monospace;
  }

  .sg-breadcrumb-nav a {
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .sg-breadcrumb-nav a:hover {
    color: #EF4136;
  }

  .sg-crumb-sep {
    color: rgba(255, 255, 255, 0.3);
  }

  .sg-crumb-current {
    color: #EF4136;
    text-transform: uppercase;
  }

  /* RELATED SERVICES CROSS-LINKING GRID */
  .sg-related-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: 40px;
  }

  .sg-related-card {
    background: rgba(15, 15, 20, 0.65);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 18px;
    padding: 24px 20px;
    text-decoration: none;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    backdrop-filter: blur(12px);
  }

  .sg-related-card:hover {
    transform: translateY(-5px);
    border-color: rgba(239, 65, 54, 0.5);
    background: rgba(239, 65, 54, 0.08);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6), 0 0 25px rgba(239, 65, 54, 0.15);
  }

  .sg-related-num-badge {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.78rem;
    font-weight: 800;
    color: #EF4136;
    margin-bottom: 12px;
  }

  .sg-related-card h4 {
    font-family: "Outfit", sans-serif;
    font-size: 1.15rem;
    font-weight: 800;
    margin: 0 0 8px;
    color: #FFFFFF;
    letter-spacing: -0.01em;
  }

  .sg-related-card p {
    font-size: 0.82rem;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.65);
    margin: 0 0 16px;
    flex-grow: 1;
  }

  .sg-related-link-text {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: "Outfit", sans-serif;
    font-size: 0.75rem;
    font-weight: 800;
    color: #EF4136;
    letter-spacing: 0.05em;
  }

  @media (max-width: 992px) {
    .sg-hero-grid { grid-template-columns: 1fr; }
    .sg-tech-banner-grid { grid-template-columns: 1fr; gap: 40px; }
    .sg-tech-floating-container { max-width: 440px; margin: 0 auto; }
    .sg-seo-split-grid { grid-template-columns: 1fr; gap: 40px; }
    .sg-seo-story-right { position: static; }
    .sg-seo-story-pillars { grid-template-columns: 1fr; }
    .sg-metrics-strip { grid-template-columns: repeat(2, 1fr); }
    .sg-timeline-stream { grid-template-columns: repeat(2, 1fr); gap: 40px 20px; }
    .sg-timeline-stream.has-6-steps { grid-template-columns: repeat(2, 1fr); gap: 30px 20px; }
    .sg-timeline-line { display: none; }
    .sg-matrix-row { grid-template-columns: 1fr; gap: 10px; }
    .sg-who-grid { grid-template-columns: repeat(2, 1fr); }
    .sg-related-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 640px) {
    .sg-tech-action-row { flex-direction: column; align-items: flex-start; gap: 14px; }
    .sg-tech-start-btn { width: 100%; justify-content: center; }
    .sg-tech-floating-badge.badge-top { top: 12px; right: 12px; padding: 8px 12px; }
    .sg-tech-floating-badge.badge-bottom { bottom: 12px; left: 12px; padding: 8px 12px; }
    .sg-metrics-strip { grid-template-columns: 1fr; }
    .sg-timeline-stream { grid-template-columns: 1fr; }
    .sg-timeline-stream.has-6-steps { grid-template-columns: 1fr; }
    .sg-field-grid { grid-template-columns: 1fr; }
    .sg-col-compare { grid-template-columns: 1fr; }
    .sg-who-grid { grid-template-columns: 1fr; }
    .sg-related-grid { grid-template-columns: 1fr; }
  }
`;

