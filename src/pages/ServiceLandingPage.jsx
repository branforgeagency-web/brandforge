"use client";

import React, { useState, useLayoutEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
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
  Bot,
  Layers,
  MessageSquare,
  ArrowRightLeft,
  Video,
} from "lucide-react";
import { servicesData, serviceUrl } from "../data/servicesData";
import BrandForgeAnimatedFooter from "../components/BrandForgeAnimatedFooter";
import BrandForgeLiquidMetalBackground from "../components/BrandForgeLiquidMetalBackground";
import LetsTalkForm from "../components/LetsTalkForm";
import KexsioCanvasBackground from "../components/KexsioCanvasBackground";

/* ───────────────────────────────────────────────────────────────────────────
   DYNAMIC SERVICE LANDING PAGE COMPONENT (CARDLESS & LIQUID METAL SHADER)
   100% Cardless design — Liquid metal wave shader, metallic sheen, embers.
   Unified high-tech split hero banner & story lead section for all 12 services.
   ─────────────────────────────────────────────────────────────────────────── */

const SERVICE_BANNER_ASSETS = {
  "seo-geo": "/seo-sketch-diagram.png",
  "paid-media": "/paid-media-banner-illustration.png",
  "web-foundry": "/web-dev-banner-illustration.png",
  "viral-social": "/viral-social-banner-illustration.png",
  "influencer-network": "/influencer-banner-illustration.png",
  "content-smithy": "/content-smithy-banner-illustration.png",
  "inbox-edge": "/inbox-edge-banner-illustration.png",
  "brand-anvil": "/brand-anvil-banner-illustration.png",
  "visual-id": "/visual-id-banner-illustration.png",
  "commercial-video": "/commercial-video-banner-illustration.png",
  "cro-revenue": "/cro-revenue-banner-illustration.png",
  "reputation-shield": "/reputation-shield-banner-illustration.png",
  "seo-company-coimbatore": "/seo-sketch-diagram.png",
  "ppc-company-coimbatore": "/paid-media-banner-illustration.png",
  "website-development-company-coimbatore": "/web-dev-banner-illustration.png",
  "web-development-company-coimbatore": "/web-dev-banner-illustration.png",
  "social-media-marketing-company-coimbatore": "/viral-social-banner-illustration.png",
  "social-media-agency-coimbatore": "/viral-social-banner-illustration.png",
  "influencer-marketing-coimbatore": "/influencer-banner-illustration.png",
  "content-marketing-agency-coimbatore": "/content-smithy-banner-illustration.png",
  "content-marketing-company-coimbatore": "/content-smithy-banner-illustration.png",
  "email-marketing-company-coimbatore": "/inbox-edge-banner-illustration.png",
  "email-marketing-agency-coimbatore": "/inbox-edge-banner-illustration.png",
  "brand-positioning-agency-coimbatore": "/brand-anvil-banner-illustration.png",
  "brand-position-agency-coimbatore": "/brand-anvil-banner-illustration.png",
  "brand-positioning-company-coimbatore": "/brand-anvil-banner-illustration.png",
  "brand-identity-design-agency-coimbatore": "/visual-id-banner-illustration.png",
  "brand-identity-design-company-coimbatore": "/visual-id-banner-illustration.png",
  "video-production-editing-company-coimbatore": "/commercial-video-banner-illustration.png",
  "brand-reputation-management-coimbatore": "/reputation-shield-banner-illustration.png",
};


const SERVICE_EVOLUTION_VISUALS = {
  "seo-geo": {
    image: "/seo-to-geo-evolution-icon.png",
    badge: "NEXT-GEN AI SEARCH ARCHITECTURE",
    badgeIcon: Cpu,
    chipFrom: "Classic Search (SEO)",
    chipTo: "Generative AI (GEO)",
    title: "From Query Matching to Neural Answer Recommendation",
    desc: "Search is no longer about blue links. AI knowledge models synthesize information directly. BrandForge structures your digital authority so ChatGPT, Perplexity, and Google Gemini recommend you by name."
  },
  "seo-company-coimbatore": {
    image: "/seo-to-geo-evolution-icon.png",
    badge: "NEXT-GEN AI SEARCH ARCHITECTURE",
    badgeIcon: Cpu,
    chipFrom: "Classic Search (SEO)",
    chipTo: "Generative AI (GEO)",
    title: "From Query Matching to Neural Answer Recommendation",
    desc: "Search is no longer about blue links. AI knowledge models synthesize information directly. BrandForge structures your digital authority so ChatGPT, Perplexity, and Google Gemini recommend you by name."
  },
  "paid-media": {
    image: "/paid-media-evolution-icon.png",
    badge: "ALGORITHMIC ROAS SCALING ENGINE",
    badgeIcon: Zap,
    chipFrom: "Generic Ad Spend",
    chipTo: "BrandForge ROAS Engine",
    title: "From Budget Wastage to Predictable Customer Acquisition",
    desc: "Stop burning ad budget on unverified vanity clicks. We deploy AI-bid tracking, high-converting creative hooks, and full CAPI attribution to scale real revenue on Google & Meta."
  },
  "ppc-company-coimbatore": {
    image: "/paid-media-evolution-icon.png",
    badge: "ALGORITHMIC ROAS SCALING ENGINE",
    badgeIcon: Zap,
    chipFrom: "Generic Ad Spend",
    chipTo: "BrandForge ROAS Engine",
    title: "From Budget Wastage to Predictable Customer Acquisition",
    desc: "Stop burning ad budget on unverified vanity clicks. We deploy AI-bid tracking, high-converting creative hooks, and full CAPI attribution to scale real revenue on Google & Meta."
  },
  "web-foundry": {
    image: "/web-dev-evolution-icon.png",
    badge: "SUB-SECOND JAMSTACK ARCHITECTURE",
    badgeIcon: Globe,
    chipFrom: "Bloated WordPress",
    chipTo: "Sub-Second React/Jamstack",
    title: "From Slow Legacy Sites to 100/100 Core Web Vitals",
    desc: "Bloated page templates destroy conversion rates before the customer even reads your headline. BrandForge engineers sub-200ms ultra-fast web architectures engineered for maximum pipeline scale."
  },
  "website-development-company-coimbatore": {
    image: "/web-dev-evolution-icon.png",
    badge: "SUB-SECOND JAMSTACK ARCHITECTURE",
    badgeIcon: Globe,
    chipFrom: "Bloated WordPress",
    chipTo: "Sub-Second React/Jamstack",
    title: "From Slow Legacy Sites to 100/100 Core Web Vitals",
    desc: "Bloated page templates destroy conversion rates before the customer even reads your headline. BrandForge engineers sub-200ms ultra-fast web architectures engineered for maximum pipeline scale."
  },
  "web-development-company-coimbatore": {
    image: "/web-dev-evolution-icon.png",
    badge: "SUB-SECOND JAMSTACK ARCHITECTURE",
    badgeIcon: Globe,
    chipFrom: "Bloated WordPress",
    chipTo: "Sub-Second React/Jamstack",
    title: "From Slow Legacy Sites to 100/100 Core Web Vitals",
    desc: "Bloated page templates destroy conversion rates before the customer even reads your headline. BrandForge engineers sub-200ms ultra-fast web architectures engineered for maximum pipeline scale."
  },
  "viral-social": {
    image: "/viral-social-evolution-icon.png",
    badge: "ALGORITHMIC VIRAL RETENTION ENGINE",
    badgeIcon: Users,
    chipFrom: "Static Image Posts",
    chipTo: "High-Retention Video Reels",
    title: "From Ignored Social Feeds to 10M+ Organic Reach",
    desc: "Posting generic flyers produces zero brand equity. We engineer scroll-stopping short-form reels and community-driven social engines that turn followers into paying brand advocates."
  },
  "social-media-marketing-company-coimbatore": {
    image: "/viral-social-evolution-icon.png",
    badge: "ALGORITHMIC VIRAL RETENTION ENGINE",
    badgeIcon: Users,
    chipFrom: "Static Image Posts",
    chipTo: "High-Retention Video Reels",
    title: "From Ignored Social Feeds to 10M+ Organic Reach",
    desc: "Posting generic flyers produces zero brand equity. We engineer scroll-stopping short-form reels and community-driven social engines that turn followers into paying brand advocates."
  },
  "social-media-agency-coimbatore": {
    image: "/viral-social-evolution-icon.png",
    badge: "ALGORITHMIC VIRAL RETENTION ENGINE",
    badgeIcon: Users,
    chipFrom: "Static Image Posts",
    chipTo: "High-Retention Video Reels",
    title: "From Ignored Social Feeds to 10M+ Organic Reach",
    desc: "Posting generic flyers produces zero brand equity. We engineer scroll-stopping short-form reels and community-driven social engines that turn followers into paying brand advocates."
  },
  "influencer-network": {
    image: "/influencer-evolution-icon.png",
    badge: "VERIFIED CREATOR NETWORK",
    badgeIcon: Sparkles,
    chipFrom: "Random Influencer Barters",
    chipTo: "Audited ROI Partnerships",
    title: "From Fake Follower Barters to Trackable Revenue Campaigns",
    desc: "Sending free products to random creators yields no verifiable returns. We audit creator engagement, negotiate exclusive rates, and implement UTM tracking to guarantee measurable ROAS."
  },
  "influencer-marketing-coimbatore": {
    image: "/influencer-evolution-icon.png",
    badge: "VERIFIED CREATOR NETWORK",
    badgeIcon: Sparkles,
    chipFrom: "Random Influencer Barters",
    chipTo: "Audited ROI Partnerships",
    title: "From Fake Follower Barters to Trackable Revenue Campaigns",
    desc: "Sending free products to random creators yields no verifiable returns. We audit creator engagement, negotiate exclusive rates, and implement UTM tracking to guarantee measurable ROAS."
  },
  "content-smithy": {
    image: "/content-smithy-evolution-icon.png",
    badge: "EDITORIAL AUTHORITY SMITHY",
    badgeIcon: PenTool,
    chipFrom: "Generic Keyword Stuffing",
    chipTo: "Thought Leadership & AI Synergy",
    title: "From Cheap Content Mill to Industry Thought Leadership",
    desc: "Generic AI articles flood the web with zero trust. BrandForge forges authoritative, research-backed editorial frameworks that rank #1 and position your executive team as the obvious market choice."
  },
  "content-marketing-agency-coimbatore": {
    image: "/content-smithy-evolution-icon.png",
    badge: "EDITORIAL AUTHORITY SMITHY",
    badgeIcon: PenTool,
    chipFrom: "Generic Keyword Stuffing",
    chipTo: "Thought Leadership & AI Synergy",
    title: "From Cheap Content Mill to Industry Thought Leadership",
    desc: "Generic AI articles flood the web with zero trust. BrandForge forges authoritative, research-backed editorial frameworks that rank #1 and position your executive team as the obvious market choice."
  },
  "content-marketing-company-coimbatore": {
    image: "/content-smithy-evolution-icon.png",
    badge: "EDITORIAL AUTHORITY SMITHY",
    badgeIcon: PenTool,
    chipFrom: "Generic Keyword Stuffing",
    chipTo: "Thought Leadership & AI Synergy",
    title: "From Cheap Content Mill to Industry Thought Leadership",
    desc: "Generic AI articles flood the web with zero trust. BrandForge forges authoritative, research-backed editorial frameworks that rank #1 and position your executive team as the obvious market choice."
  },
  "inbox-edge": {
    image: "/email-marketing-evolution-icon.png",
    badge: "AUTOMATED RETENTION FUNNELS",
    badgeIcon: MessageSquare,
    chipFrom: "Spammy Batch Blasts",
    chipTo: "Hyper-Segmented Lifecycle Flows",
    title: "From Unopened Newsletters to 42% Average Open Rates",
    desc: "Blasting your list with generic promotions burns deliverability. We engineer automated behavior-triggered lifecycle flows that nurture subscribers and drive predictable repeat revenue on autopilot."
  },
  "email-marketing-company-coimbatore": {
    image: "/email-marketing-evolution-icon.png",
    badge: "AUTOMATED RETENTION FUNNELS",
    badgeIcon: MessageSquare,
    chipFrom: "Spammy Batch Blasts",
    chipTo: "Hyper-Segmented Lifecycle Flows",
    title: "From Unopened Newsletters to 42% Average Open Rates",
    desc: "Blasting your list with generic promotions burns deliverability. We engineer automated behavior-triggered lifecycle flows that nurture subscribers and drive predictable repeat revenue on autopilot."
  },
  "email-marketing-agency-coimbatore": {
    image: "/email-marketing-evolution-icon.png",
    badge: "AUTOMATED RETENTION FUNNELS",
    badgeIcon: MessageSquare,
    chipFrom: "Spammy Batch Blasts",
    chipTo: "Hyper-Segmented Lifecycle Flows",
    title: "From Unopened Newsletters to 42% Average Open Rates",
    desc: "Blasting your list with generic promotions burns deliverability. We engineer automated behavior-triggered lifecycle flows that nurture subscribers and drive predictable repeat revenue on autopilot."
  },
  "brand-anvil": {
    image: "/brand-anvil-evolution-icon.png",
    badge: "STRATEGIC BRAND POSITIONING",
    badgeIcon: ShieldCheck,
    chipFrom: "Me-Too Brand Identity",
    chipTo: "Uncontested Category Monopoly",
    title: "From Commodity Pricing to Category Dominance",
    desc: "Competing on price is a race to the bottom. BrandForge hammers your core market positioning on the strategy anvil so your company stands out as the single obvious premium authority in your space."
  },
  "brand-positioning-agency-coimbatore": {
    image: "/brand-anvil-evolution-icon.png",
    badge: "STRATEGIC BRAND POSITIONING",
    badgeIcon: ShieldCheck,
    chipFrom: "Me-Too Brand Identity",
    chipTo: "Uncontested Category Monopoly",
    title: "From Commodity Pricing to Category Dominance",
    desc: "Competing on price is a race to the bottom. BrandForge hammers your core market positioning on the strategy anvil so your company stands out as the single obvious premium authority in your space."
  },
  "brand-position-agency-coimbatore": {
    image: "/brand-anvil-evolution-icon.png",
    badge: "STRATEGIC BRAND POSITIONING",
    badgeIcon: ShieldCheck,
    chipFrom: "Me-Too Brand Identity",
    chipTo: "Uncontested Category Monopoly",
    title: "From Commodity Pricing to Category Dominance",
    desc: "Competing on price is a race to the bottom. BrandForge hammers your core market positioning on the strategy anvil so your company stands out as the single obvious premium authority in your space."
  },
  "brand-positioning-company-coimbatore": {
    image: "/brand-anvil-evolution-icon.png",
    badge: "STRATEGIC BRAND POSITIONING",
    badgeIcon: ShieldCheck,
    chipFrom: "Me-Too Brand Identity",
    chipTo: "Uncontested Category Monopoly",
    title: "From Commodity Pricing to Category Dominance",
    desc: "Competing on price is a race to the bottom. BrandForge hammers your core market positioning on the strategy anvil so your company stands out as the single obvious premium authority in your space."
  },
  "visual-id": {
    image: "/visual-id-evolution-icon.png",
    badge: "ENTERPRISE DESIGN SYSTEMS",
    badgeIcon: Layers,
    chipFrom: "Stock Template Logos",
    chipTo: "Custom Iconic Brand System",
    title: "From Random Canva Logos to Enterprise Identity Systems",
    desc: "A logo without a system is an afterthought. We build comprehensive design tokens, custom typography hierarchies, and cohesive brand guidelines that communicate institutional authority across every touchpoint."
  },
  "brand-identity-design-agency-coimbatore": {
    image: "/visual-id-evolution-icon.png",
    badge: "ENTERPRISE DESIGN SYSTEMS",
    badgeIcon: Layers,
    chipFrom: "Stock Template Logos",
    chipTo: "Custom Iconic Brand System",
    title: "From Random Canva Logos to Enterprise Identity Systems",
    desc: "A logo without a system is an afterthought. We build comprehensive design tokens, custom typography hierarchies, and cohesive brand guidelines that communicate institutional authority across every touchpoint."
  },
  "brand-identity-design-company-coimbatore": {
    image: "/visual-id-evolution-icon.png",
    badge: "ENTERPRISE DESIGN SYSTEMS",
    badgeIcon: Layers,
    chipFrom: "Stock Template Logos",
    chipTo: "Custom Iconic Brand System",
    title: "From Random Canva Logos to Enterprise Identity Systems",
    desc: "A logo without a system is an afterthought. We build comprehensive design tokens, custom typography hierarchies, and cohesive brand guidelines that communicate institutional authority across every touchpoint."
  },
  "commercial-video": {
    image: "/commercial-video-evolution-icon.png",
    badge: "HIGH-CONVERTING CINEMATIC PRODUCTION",
    badgeIcon: Video,
    chipFrom: "Unplanned Phone Shoots",
    chipTo: "Scripted Cinema Production",
    title: "From Amateur Clips to High-Production Commercial Ads",
    desc: "Shaky phone videos lower perceived brand value. BrandForge executes scripted studio video production, commercial color grading, and dynamic editing designed specifically to maximize conversion rates."
  },
  "video-production-editing-company-coimbatore": {
    image: "/commercial-video-evolution-icon.png",
    badge: "HIGH-CONVERTING CINEMATIC PRODUCTION",
    badgeIcon: Video,
    chipFrom: "Unplanned Phone Shoots",
    chipTo: "Scripted Cinema Production",
    title: "From Amateur Clips to High-Production Commercial Ads",
    desc: "Shaky phone videos lower perceived brand value. BrandForge executes scripted studio video production, commercial color grading, and dynamic editing designed specifically to maximize conversion rates."
  },
  "cro-revenue": {
    image: "/cro-revenue-evolution-icon.png",
    badge: "A/B TESTING CONVERSION ENGINE",
    badgeIcon: BarChart3,
    chipFrom: "Subjective Guesswork",
    chipTo: "Data-Driven A/B Testing",
    title: "From Lost Website Visitors to Multiplied Conversion Rates",
    desc: "Driving traffic to a leaky bucket is expensive. BrandForge deploys heatmaps, session replay telemetry, and multi-variant split tests to double your site's revenue per visitor without increasing ad spend."
  },
  "reputation-shield": {
    image: "/reputation-shield-evolution-icon.png",
    badge: "ENTERPRISE REPUTATION SHIELD",
    badgeIcon: ShieldCheck,
    chipFrom: "Unmanaged Negative Reviews",
    chipTo: "Active 5-Star Reputation Engine",
    title: "From Ignored Review Profiles to Market-Leading Trust",
    desc: "A few unanswered negative reviews can sink high-ticket deals before calls are even booked. BrandForge deploys automated review generation, sentiment shielding, and Google Business Profile defense."
  },
  "brand-reputation-management-coimbatore": {
    image: "/reputation-shield-evolution-icon.png",
    badge: "ENTERPRISE REPUTATION SHIELD",
    badgeIcon: ShieldCheck,
    chipFrom: "Unmanaged Negative Reviews",
    chipTo: "Active 5-Star Reputation Engine",
    title: "From Ignored Review Profiles to Market-Leading Trust",
    desc: "A few unanswered negative reviews can sink high-ticket deals before calls are even booked. BrandForge deploys automated review generation, sentiment shielding, and Google Business Profile defense."
  }
};

const SERVICE_BADGES = {
  "seo-geo": {
    top: { strong: "#1 AI Citation", span: "ChatGPT & Perplexity" },
    bottom: { strong: "+340% Traffic Lift", span: "Coimbatore & Global" }
  },
  "paid-media": {
    top: { strong: "4.8x ROAS Avg", span: "Meta & Google Ads" },
    bottom: null
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
    top: { strong: "Real Followers Only", span: "Every Creator Audited" },
    bottom: { strong: "Tracked Results", span: "Promo Codes & UTM Links" }
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
    top: { strong: "Script → Shoot → Edit", span: "End-to-End Production" },
    bottom: { strong: "Every Format", span: "Reels, Shorts, YouTube & Web" }
  },
  "cro-revenue": {
    top: { strong: "+45% Conversion Lift", span: "A/B Testing & Funnel Audit" },
    bottom: { strong: "Lower Acquisition Cost", span: "Revenue Optimization" }
  },
  "reputation-shield": {
    top: { strong: "Genuine Reviews Only", span: "Google Policy Safe" },
    bottom: { strong: "Every Review Answered", span: "Coimbatore & Tamil Nadu" }
  },
  "seo-company-coimbatore": {
    top: { strong: "#1 AI Citation", span: "ChatGPT & Perplexity" },
    bottom: { strong: "+340% Traffic Lift", span: "Coimbatore & Global" }
  },
  "ppc-company-coimbatore": {
    top: { strong: "4.8x ROAS Avg", span: "Meta & Google Ads" },
    bottom: null
  }
};

const SERVICE_PILL_TAGS = {
  "seo-geo": "IT SOLUTIONS & SEARCH DOMINANCE",
  "paid-media": "PAID MEDIA & PPC SCALING",
  "web-foundry": "HIGH-PERFORMANCE WEB FOUNDRY",
  "viral-social": "VIRAL SOCIAL & AUDIENCE GROWTH",
  "influencer-network": "INFLUENCER MARKETING COIMBATORE",
  "content-smithy": "EDITORIAL & CONTENT SMITHY",
  "inbox-edge": "AUTOMATED EMAIL RETENTION",
  "brand-anvil": "STRATEGIC BRAND POSITIONING",
  "visual-id": "ENTERPRISE BRAND IDENTITY",
  "commercial-video": "VIDEO PRODUCTION & EDITING",
  "cro-revenue": "CRO & REVENUE ACCELERATION",
  "reputation-shield": "BRAND REPUTATION MANAGEMENT",
  "seo-company-coimbatore": "IT SOLUTIONS & SEARCH DOMINANCE",
  "ppc-company-coimbatore": "PAID MEDIA & PPC SCALING",
};

const SERVICE_MICRO_DESCS = {
  "seo-geo": "Providing enterprise SEO, GEO (Generative Engine Optimization), and sub-second performance engineering to scale your brand’s organic revenue.",
  "paid-media": "High-intent Google Ads, Meta scaling, and algorithmic paid media that turns ad spend into verified customer acquisition.",
  "web-foundry": "High-performance websites, ultra-fast custom web applications, and conversion-optimized architectures built on modern Jamstack.",
  "viral-social": "Short-form video production, algorithm-tailored reels, and organic social growth that converts followers into brand loyalists.",
  "influencer-network": "Genuine Coimbatore and Tamil Nadu creators, fully managed campaigns, and tracked results that show what every influencer delivers.",
  "content-smithy": "Authoritative SEO articles, thought-leadership pillars, and conversion copywriting that rank high on Google and AI LLMs.",
  "inbox-edge": "Automated email sequences, customer retention funnels, and hyper-segmented inbox campaigns that drive recurring revenue.",
  "brand-anvil": "Uncompromising brand positioning, market differentiation, and messaging architectures that make you the obvious choice.",
  "visual-id": "Distinctive visual identity, precision design systems, and unforgettable brand aesthetics crafted for enterprise trust.",
  "commercial-video": "Ad films, reels, corporate videos, and professional editing — scripted, shot, and cut to turn viewers into enquiries.",
  "cro-revenue": "Frictionless checkout optimization, heat-map user analytics, and rigorous A/B testing to maximize revenue per visitor.",
  "reputation-shield": "Genuine review growth, professional review replies, brand monitoring, and cleaner search results for your business.",
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
    pill: "TRUSTED WORD-OF-MOUTH",
    lead: "People Trust People —",
    accent: "Let Local Creators Vouch for You"
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
    pill: "VIDEO THAT CONVERTS",
    lead: "Stop the Scroll —",
    accent: "Videos Built to Bring Enquiries"
  },
  "cro-revenue": {
    pill: "CONVERSION ARCHITECTURE",
    lead: "Double Your Revenue —",
    accent: "Without Spending More on Ads"
  },
  "reputation-shield": {
    pill: "TRUST BEFORE THE FIRST CALL",
    lead: "Customers Search You First —",
    accent: "Make Sure They Like What They Find"
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
        Influencer Marketing Agency in Coimbatore That Turns{" "}
        <span className="sg-tech-h1-accent">
          Creators Into Customers
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
        Video Production & Editing Company in Coimbatore That{" "}
        <span className="sg-tech-h1-accent">
          Makes Videos Sell
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
        Brand Reputation Management in Coimbatore That Builds{" "}
        <span className="sg-tech-h1-accent">
          Trust Before the First Call
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

  const evolutionVisual = SERVICE_EVOLUTION_VISUALS[data.slug] || SERVICE_EVOLUTION_VISUALS[slug] || SERVICE_EVOLUTION_VISUALS["seo-geo"];
  const EvolutionBadgeIcon = evolutionVisual.badgeIcon || Cpu;

  const isSeoGeo = data.slug === "seo-geo" || slug === "seo-geo" || slug === "seo-company-coimbatore";
  const heroBannerRef = useRef(null);

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroBannerRef,
    offset: ["start start", "end start"],
  });

  // Scroll animations: move from left to right on top layer when scrolling into next section
  const bannerArtworkX = useTransform(heroScroll, [0, 1], [-25, 175]);
  const bannerArtworkY = useTransform(heroScroll, [0, 1], [0, 160]);
  const bannerArtworkScale = useTransform(heroScroll, [0, 1], [1, 1.08]);
  const bannerArtworkRotate = useTransform(heroScroll, [0, 1], [0, 3]);

  const bannerAsset = isSeoGeo
    ? "/seo-sketch-diagram.png"
    : (SERVICE_BANNER_ASSETS[data.slug] || data.bannerBg || "/seo-sketch-diagram.png");
  const badges = SERVICE_BADGES[data.slug] || SERVICE_BADGES[slug] || {
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
      <header ref={heroBannerRef} className="sg-hero sg-hero-banner-tech has-banner-bg">
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

            {/* RIGHT COLUMN: BRANDFORGE THEME 3D ARTWORK (SEO & GEO SCROLL PARALLAX) */}
            <motion.div
              className={`sg-tech-banner-right ${isSeoGeo ? "is-seo-geo-artwork-col" : ""}`}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              style={{
                zIndex: isSeoGeo ? 40 : 2,
                position: "relative",
              }}
            >
              <motion.div
                className={`sg-tech-floating-container ${isSeoGeo ? "is-seo-geo-floating-box" : ""}`}
                style={
                  isSeoGeo
                    ? {
                        x: bannerArtworkX,
                        y: bannerArtworkY,
                        scale: bannerArtworkScale,
                        rotate: bannerArtworkRotate,
                        zIndex: 40,
                      }
                    : {}
                }
              >
                <div className="sg-tech-art-ambient-glow" />
                <img
                  src={bannerAsset}
                  alt={`${data.title} BrandForge 3D Ecosystem`}
                  className={`sg-tech-floating-img ${isSeoGeo ? "is-seo-geo-img" : ""}`}
                  style={{ borderRadius: (isSeoGeo || (bannerAsset.endsWith('.png') && !bannerAsset.includes('commercial-video') && !bannerAsset.includes('visual-id'))) ? "0px" : "20px" }}
                />
              </motion.div>
            </motion.div>

          </div>
        </div>
      </header>

      {/* DEDICATED PARAGRAPH STORY & LEAD FORM SECTION (APPLIED TO ALL SERVICES) */}
      <section className="sg-seo-story-section">
        <KexsioCanvasBackground />
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
                <LetsTalkForm
                  title="LET'S TALK"
                  subtitle={`Get in touch with our strategy team for ${data.eyebrow} & expect a response within 4 hours`}
                  defaultService={data.eyebrow}
                  compact={true}
                />
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
          <KexsioCanvasBackground />
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

      {/* CREATIVE EDITORIAL COMPARISON MATRIX: THE EVOLUTION FROM SEO TO GEO */}
      {data.matrixRows && data.matrixRows.length > 0 && (
        <section className="sg-section sg-evolution-section">
          <div className="sg-container">
            <motion.div
              className="sg-section-header text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <div className="sg-evolution-badge">
                <span className="badge-pulse-dot" />
                <span>{data.matrixTag || "PARADIGM SHIFT"}</span>
              </div>
              <h2 className="sg-section-title">{data.matrixTitle}</h2>
              <p className="sg-section-subtitle">{data.matrixSubtitle}</p>
            </motion.div>

            <div className="sg-evolution-grid">
              
              {/* LEFT COLUMN: 3D ICON EMBLEM SHOWCASE WITH CYBER HUD */}
              <motion.div
                className="sg-evolution-visual-col"
                initial={{ opacity: 0, scale: 0.96, x: -30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.7 }}
              >
                                <div className="sg-evolution-card-pod">
                  <div className="sg-evolution-img-wrap">
                    <img
                      src={evolutionVisual.image}
                      alt={data.matrixTitle || "Service Capability Matrix"}
                      className="sg-evolution-3d-img"
                    />
                    <div className="sg-evolution-img-badge">
                      <EvolutionBadgeIcon size={14} className="badge-icon-cpu" />
                      <span>{evolutionVisual.badge}</span>
                    </div>
                  </div>

                  <div className="sg-evolution-pod-caption">
                    <div className="sg-pod-badge-row">
                      <span className="sg-pod-chip chip-trad">{evolutionVisual.chipFrom}</span>
                      <ArrowRightLeft size={14} className="sg-pod-arrow" />
                      <span className="sg-pod-chip chip-geo">{evolutionVisual.chipTo}</span>
                    </div>
                    <h4 className="sg-pod-title">{evolutionVisual.title}</h4>
                    <p className="sg-pod-desc">
                      {evolutionVisual.desc}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* RIGHT COLUMN: INTERACTIVE COMPARISON MATRIX MODULES */}
              <div className="sg-evolution-cards-col">
                {data.matrixRows.map((row, idx) => {
                  const RowIcon = idx === 0 ? Bot : idx === 1 ? Layers : idx === 2 ? MessageSquare : Zap;

                  return (
                    <motion.div
                      key={row.feature}
                      className="sg-evolution-compare-item"
                      initial={{ opacity: 0, y: 22 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, amount: 0.15 }}
                      transition={{ duration: 0.5, delay: idx * 0.08 }}
                    >
                      {/* Feature Title Row */}
                      <div className="sg-compare-header">
                        <div className="sg-compare-icon-wrap">
                          <RowIcon size={18} />
                        </div>
                        <span className="sg-compare-feature-name">{row.feature}</span>
                        <span className="sg-compare-step-num">STAGE 0{idx + 1}</span>
                      </div>

                      {/* Dual Cards Comparison */}
                      <div className="sg-compare-dual-grid">
                        {/* Left: Traditional Agency */}
                        <div className="sg-compare-box box-trad">
                          <div className="sg-compare-box-label">
                            <span className="status-dot dot-gray" />
                            <span>TRADITIONAL SEO</span>
                          </div>
                          <p className="sg-compare-box-text">{row.traditional}</p>
                        </div>

                        {/* Center transfer glyph */}
                        <div className="sg-compare-transfer-arrow">
                          <ArrowRight size={16} />
                        </div>

                        {/* Right: BrandForge GEO Engine */}
                        <div className="sg-compare-box box-geo">
                          <div className="sg-compare-box-label">
                            <span className="status-dot dot-red" />
                            <span>BRANDFORGE GEO ENGINE</span>
                          </div>
                          <p className="sg-compare-box-text">{row.brandforge}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

            </div>
          </div>
        </section>
      )}

      {/* CARDLESS INTERACTIVE 6-PILLAR LIST STREAM */}
      <section className="sg-section sg-pillars-section">
        <KexsioCanvasBackground />
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

          <div className="sg-creative-accordion-list">
            {data.pillars.map((p, idx) => {
              const PillarIcon = p.icon || Zap;
              const isOpen = activePillar === idx;

              return (
                <motion.div
                  key={p.title}
                  className={`sg-creative-accordion-card ${isOpen ? "is-expanded" : ""}`}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: idx * 0.07 }}
                >
                  <button
                    type="button"
                    className="sg-creative-accordion-btn"
                    onClick={() => setActivePillar(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <div className="sg-acc-left-meta">
                      <span className="sg-acc-index">0{idx + 1}</span>
                      <div className={`sg-acc-icon-box ${isOpen ? "is-active" : ""}`}>
                        <PillarIcon size={22} />
                      </div>
                    </div>

                    <div className="sg-acc-content-header">
                      <div className="sg-acc-tag-row">
                        <span className="sg-acc-tag">{p.tag}</span>
                        {p.deliverables && (
                          <span className="sg-acc-count-badge">
                            {p.deliverables.length} {p.deliverables.length === 1 ? "Capability" : "Capabilities"}
                          </span>
                        )}
                      </div>
                      <h3 className="sg-acc-title">{p.title}</h3>
                    </div>

                    <div className={`sg-acc-toggle-bubble ${isOpen ? "is-open" : ""}`}>
                      <ChevronDown size={18} className="sg-acc-chevron" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className="sg-acc-collapse-body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="sg-acc-body-inner">
                          <p className="sg-acc-desc">{p.description}</p>

                          {p.callout && (
                            <div className="sg-acc-callout">
                              <Sparkles size={16} className="sg-acc-callout-icon" />
                              <p>{p.callout}</p>
                            </div>
                          )}

                          {p.deliverables && p.deliverables.length > 0 && (
                            <div className="sg-acc-deliverables-grid">
                              {p.deliverables.map((deliv, dIdx) => {
                                const parts = deliv.includes(" — ")
                                  ? deliv.split(" — ")
                                  : deliv.includes(" - ")
                                  ? deliv.split(" - ")
                                  : null;

                                return (
                                  <motion.div
                                    key={dIdx}
                                    className="sg-acc-deliv-item"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.25, delay: dIdx * 0.03 }}
                                  >
                                    <div className="sg-acc-deliv-bullet">
                                      <CheckCircle2 size={15} />
                                    </div>
                                    <div className="sg-acc-deliv-text">
                                      {parts ? (
                                        <>
                                          <strong>{parts[0]}</strong> — {parts.slice(1).join(" — ")}
                                        </>
                                      ) : (
                                        deliv
                                      )}
                                    </div>
                                  </motion.div>
                                );
                              })}
                            </div>
                          )}
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
          <KexsioCanvasBackground />
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
                  href={serviceUrl(k)}
                  className="sg-related-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: rIdx * 0.08 }}
                  onClick={(e) => {
                    if (!e.ctrlKey && !e.metaKey && navigate) {
                      e.preventDefault();
                      navigate(serviceUrl(k));
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
    background: #FAFAFC;
    color: #0A0A0C;
    font-family: "Plus Jakarta Sans", sans-serif;
    overflow-x: hidden;
    padding-top: 110px;
    position: relative;
    z-index: 1;
  }

  .sg-bg-overlay {
    display: none;
  }

  .sg-container {
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 clamp(20px, 4vw, 40px);
    position: relative;
    z-index: 2;
  }

  .text-center { text-align: center; }

  /* ==========================================================================
     SECTION 1: TICKER & HERO BANNER (LIGHT THEME)
     ========================================================================== */
  .sg-marquee-bar {
    background: #0A0A0C;
    border-top: 1px solid #1F2937;
    border-bottom: 1px solid #1F2937;
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

  .sg-hero {
    position: relative;
    padding: clamp(40px, 6vw, 80px) 0 clamp(60px, 8vw, 100px);
    background: #FFFFFF;
    border-bottom: 1px solid #E5E7EB;
  }

  .sg-hero-banner-tech {
    background: #FFFFFF;
    overflow: visible;
    position: relative;
    z-index: 25;
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
    border: 1px dashed rgba(10, 10, 12, 0.07);
    border-radius: 50%;
    animation: sgSpinHUD 60s linear infinite;
  }

  .tech-hud-circle-2 {
    top: 40%;
    right: -10%;
    width: 540px;
    height: 540px;
    border: 1px dashed rgba(239, 65, 54, 0.18);
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
    background-image: radial-gradient(rgba(10, 10, 12, 0.08) 1px, transparent 1px);
    background-size: 32px 32px;
    opacity: 0.6;
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
    background: #F3F4F6;
    border: 1px solid #E5E7EB;
    color: #4B5563;
    text-decoration: none;
    transition: all 0.25s ease;
  }

  .sg-tech-social-link:hover {
    color: #FFFFFF;
    background: #EF4136;
    border-color: #EF4136;
    transform: translateY(-2px);
    box-shadow: 0 4px 14px rgba(239, 65, 54, 0.4);
  }

  .sg-tech-pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 16px;
    border-radius: 999px;
    background: rgba(239, 65, 54, 0.08);
    border: 1px solid rgba(239, 65, 54, 0.3);
    color: #EF4136;
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    font-family: "JetBrains Mono", monospace;
    margin-bottom: 20px;
    text-transform: uppercase;
  }

  .sg-tech-pill-dot {
    color: #EF4136;
    font-size: 1.1rem;
    line-height: 1;
  }

  .sg-tech-pill.inline-pill {
    background: rgba(239, 65, 54, 0.12);
    border-color: rgba(239, 65, 54, 0.35);
    color: #EF4136;
  }

  .sg-tech-h1 {
    font-family: "Outfit", sans-serif;
    font-size: clamp(34px, 4.5vw, 62px);
    font-weight: 900;
    line-height: 1.08;
    color: #0A0A0C;
    margin: 0 0 20px;
    letter-spacing: -0.02em;
  }

  .sg-tech-h1 span,
  .sg-tech-h1 .accent-text {
    color: #EF4136;
    background: linear-gradient(135deg, #EF4136 0%, #D2042D 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .sg-tech-micro-desc {
    font-size: clamp(16px, 1.4vw, 19px);
    line-height: 1.6;
    color: #4B5563;
    max-width: 580px;
    margin: 0 0 32px;
    font-weight: 500;
  }

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
    padding: 15px 32px;
    border-radius: 14px;
    background: #EF4136;
    color: #FFFFFF;
    font-family: "Outfit", sans-serif;
    font-size: 0.95rem;
    font-weight: 800;
    letter-spacing: 0.03em;
    border: none;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 8px 24px rgba(239, 65, 54, 0.35);
  }

  .sg-tech-start-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(10, 10, 12, 0.25);
    background: #0A0A0C;
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
    background: #0A0A0C;
    color: #FFFFFF;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
  }

  .sg-tech-play-btn:hover .sg-tech-play-icon-wrap {
    transform: scale(1.08);
    background: #EF4136;
    box-shadow: 0 0 20px rgba(239, 65, 54, 0.5);
  }

  .sg-tech-play-label {
    font-family: "Outfit", sans-serif;
    font-size: 0.88rem;
    font-weight: 800;
    letter-spacing: 0.04em;
    color: #0A0A0C;
    transition: color 0.2s ease;
  }

  .sg-tech-play-btn:hover .sg-tech-play-label {
    color: #EF4136;
  }

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
    filter: drop-shadow(0 15px 35px rgba(0, 0, 0, 0.12));
  }

  .is-seo-geo-artwork-col {
    z-index: 40 !important;
    position: relative;
  }

  .is-seo-geo-floating-box {
    z-index: 40 !important;
    will-change: transform;
  }

  .is-seo-geo-img {
    width: 100% !important;
    max-width: 530px !important;
    height: auto !important;
    object-fit: contain;
    filter: drop-shadow(0 15px 35px rgba(0, 0, 0, 0.12)) !important;
    border-radius: 0 !important;
  }

  .sg-tech-art-ambient-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 480px;
    height: 480px;
    transform: translate(-50%, -50%);
    background: radial-gradient(circle, rgba(239, 65, 54, 0.12) 0%, rgba(239, 65, 54, 0.03) 50%, transparent 70%);
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
    background: #FFFFFF;
    border: 1px solid #E5E7EB;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
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
    color: #0A0A0C;
    font-family: "Outfit", sans-serif;
  }

  .sg-tech-floating-badge span {
    display: block;
    font-size: 0.72rem;
    font-weight: 700;
    color: #6B7280;
    font-family: "JetBrains Mono", monospace;
  }

  .badge-icon-sparkle, .badge-icon-check {
    color: #EF4136;
  }

  /* ==========================================================================
     SECTION 2: DEDICATED PARAGRAPH STORY & LEAD FORM (BLACK BACKGROUND)
     ========================================================================== */
  .sg-seo-story-section {
    padding: clamp(70px, 9vw, 110px) 0 clamp(50px, 6vw, 80px);
    position: relative;
    z-index: 2;
    background: #0A0A0C;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .sg-seo-split-grid {
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: clamp(36px, 5vw, 68px);
    align-items: flex-start;
    margin-bottom: clamp(50px, 6vw, 75px);
  }

  .sg-seo-story-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .sg-seo-story-heading {
    font-family: "Outfit", sans-serif;
    font-size: clamp(30px, 4vw, 50px);
    font-weight: 900;
    line-height: 1.15;
    color: #FFFFFF;
    margin: 0 0 28px;
    letter-spacing: -0.02em;
  }

  .sg-seo-story-heading span {
    color: #EF4136;
  }

  .sg-seo-story-body {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .sg-seo-story-para {
    font-size: 16.5px;
    line-height: 1.8;
    color: rgba(255, 255, 255, 0.82);
    margin: 0;
  }

  .sg-seo-story-para.lead-para {
    font-size: clamp(17px, 1.35vw, 19.5px);
    font-weight: 600;
    color: #FFFFFF;
    line-height: 1.75;
  }

  .sg-seo-story-right {
    position: sticky;
    top: 100px;
  }

  /* HIGH CONTRAST FORM CARD WITH GENEROUS PADDING */
  .sg-inline-form-wrap {
    position: relative;
    background: #FFFFFF;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 28px;
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.5), 0 0 35px rgba(255, 255, 255, 0.04);
    overflow: hidden;
    padding: clamp(34px, 4vw, 46px) clamp(28px, 3.5vw, 40px);
    transition: box-shadow 0.3s ease;
  }

  .sg-inline-form-wrap:hover {
    box-shadow: 0 28px 70px rgba(0, 0, 0, 0.65), 0 0 45px rgba(239, 65, 54, 0.08);
  }

  .sg-inline-form-wrap .lt-header {
    margin-bottom: 24px !important;
  }

  .sg-inline-form-wrap h2,
  .sg-inline-form-wrap h3,
  .sg-inline-form-wrap h4,
  .sg-inline-form-wrap .lt-title,
  .sg-inline-form-wrap .lt-header-title {
    color: #0A0A0C !important;
    font-size: clamp(1.35rem, 2.5vw, 1.65rem) !important;
    font-weight: 900 !important;
    letter-spacing: -0.02em !important;
    margin-bottom: 8px !important;
  }

  .sg-inline-form-wrap p,
  .sg-inline-form-wrap .lt-subtitle,
  .sg-inline-form-wrap .lt-header-subtitle {
    color: #4B5563 !important;
    font-size: 0.88rem !important;
    line-height: 1.55 !important;
    max-width: 400px !important;
  }

  .sg-inline-form-wrap .lt-form {
    gap: 14px !important;
  }

  .sg-inline-form-wrap .lt-field-icon {
    left: 16px !important;
    color: #EF4136 !important;
  }

  .sg-inline-form-wrap input,
  .sg-inline-form-wrap select,
  .sg-inline-form-wrap textarea {
    background: #F9FAFB !important;
    border: 1px solid #D1D5DB !important;
    color: #111827 !important;
    border-radius: 12px !important;
    font-size: 0.92rem !important;
    font-weight: 500 !important;
    padding-left: 48px !important;
    padding-right: 16px !important;
    transition: all 0.2s ease !important;
  }

  .sg-inline-form-wrap input,
  .sg-inline-form-wrap select {
    height: 48px !important;
  }

  .sg-inline-form-wrap textarea {
    padding-top: 14px !important;
    padding-bottom: 14px !important;
  }

  .sg-inline-form-wrap select {
    color: #111827 !important;
  }

  .sg-inline-form-wrap select option {
    background: #FFFFFF !important;
    color: #111827 !important;
  }

  .sg-inline-form-wrap input:focus,
  .sg-inline-form-wrap select:focus,
  .sg-inline-form-wrap textarea:focus {
    border-color: #EF4136 !important;
    background: #FFFFFF !important;
    box-shadow: 0 0 0 3px rgba(239, 65, 54, 0.15) !important;
    outline: none !important;
  }

  .sg-inline-form-wrap input::placeholder,
  .sg-inline-form-wrap textarea::placeholder {
    color: #9CA3AF !important;
  }

  .sg-inline-form-wrap .lt-submit-btn,
  .sg-inline-form-wrap button[type="submit"],
  .sg-form-btn {
    height: 52px !important;
    background: #0A0A0C !important;
    color: #FFFFFF !important;
    border: none !important;
    border-radius: 12px !important;
    font-size: 0.95rem !important;
    font-weight: 800 !important;
    letter-spacing: 0.05em !important;
    margin-top: 10px !important;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25) !important;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .sg-inline-form-wrap .lt-submit-btn:hover,
  .sg-inline-form-wrap button[type="submit"]:hover,
  .sg-form-btn:hover {
    background: #EF4136 !important;
    box-shadow: 0 10px 25px rgba(239, 65, 54, 0.4) !important;
    transform: translateY(-2px);
  }

  .sg-inline-form-wrap .lt-footer-note {
    color: #6B7280 !important;
    font-size: 0.8rem !important;
    margin-top: 16px !important;
  }

  /* 3 Story Pillar Cards on Black Background */
  .sg-seo-story-pillars {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    padding-top: 40px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  .sg-story-pillar-item {
    display: flex;
    gap: 18px;
    align-items: flex-start;
    padding: 24px 22px;
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .sg-story-pillar-item:hover {
    border-color: #EF4136;
    background: rgba(255, 255, 255, 0.07);
    transform: translateY(-3px);
    box-shadow: 0 10px 24px rgba(239, 65, 54, 0.2);
  }

  .pillar-icon-box {
    width: 46px;
    height: 46px;
    border-radius: 12px;
    background: rgba(239, 65, 54, 0.15);
    border: 1px solid rgba(239, 65, 54, 0.35);
    color: #EF4136;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .sg-story-pillar-item h4 {
    font-family: "Outfit", sans-serif;
    font-size: 1.05rem;
    font-weight: 800;
    color: #FFFFFF;
    margin: 0 0 6px;
  }

  .sg-story-pillar-item p {
    font-size: 0.88rem;
    line-height: 1.55;
    color: rgba(255, 255, 255, 0.75);
    margin: 0;
  }

  /* ==========================================================================
     SECTION 3: METRICS & CLIENT LOGOS (LIGHT THEME)
     ========================================================================== */
  .sg-metrics-section {
    background: #FFFFFF;
    border-bottom: 1px solid #E5E7EB;
    padding: 60px 0;
  }

  .sg-metrics-strip {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-bottom: 48px;
  }

  .sg-metric-item {
    text-align: center;
    padding: 0 20px;
    border-right: 1px solid #E5E7EB;
  }

  .sg-metric-item:last-child {
    border-right: none;
  }

  .sg-metric-val {
    font-family: "Outfit", sans-serif;
    font-size: clamp(34px, 4vw, 52px);
    font-weight: 900;
    color: #0A0A0C;
    line-height: 1;
    display: block;
    margin-bottom: 8px;
    letter-spacing: -0.02em;
  }

  .sg-metric-lbl {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.82rem;
    font-weight: 800;
    letter-spacing: 0.06em;
    color: #EF4136;
    text-transform: uppercase;
    margin-bottom: 6px;
  }

  .sg-metric-sub {
    font-size: 0.85rem;
    color: #6B7280;
    line-height: 1.4;
  }

  .sg-client-png-strip {
    text-align: center;
    padding-top: 24px;
    border-top: 1px solid #F3F4F6;
  }

  .strip-title {
    display: block;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    color: #9CA3AF;
    text-transform: uppercase;
    margin-bottom: 24px;
  }

  .strip-logos {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: clamp(24px, 5vw, 60px);
    flex-wrap: wrap;
  }

  .png-client-logo {
    max-height: 38px;
    object-fit: contain;
    filter: grayscale(100%) opacity(0.7) contrast(1.2);
    transition: all 0.3s ease;
  }

  .png-client-logo:hover {
    filter: grayscale(0%) opacity(1) contrast(1);
    transform: scale(1.05);
  }

  /* GENERAL SECTION COMMONS */
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
    color: #0A0A0C;
    margin: 0 0 12px;
  }

  .sg-section-title span { color: #EF4136; }

  .sg-section-subtitle {
    font-size: 16px;
    color: #4B5563;
    max-width: 620px;
    margin: 0 auto 50px;
  }

  /* ==========================================================================
     SECTION 4: WHY BUSINESSES CHOOSE BRAND FORGE (BLACK BACKGROUND)
     ========================================================================== */
  .sg-why-section {
    position: relative;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    background: #0A0A0C;
  }

  .sg-why-grid {
    display: grid;
    grid-template-columns: 1fr 1.15fr;
    gap: clamp(36px, 5vw, 60px);
    align-items: center;
  }

  .sg-why-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .sg-why-title {
    font-family: "Outfit", sans-serif;
    font-size: clamp(30px, 4vw, 46px);
    font-weight: 900;
    color: #FFFFFF;
    line-height: 1.15;
    margin: 0 0 20px;
  }

  .sg-why-desc {
    font-size: 16px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.8);
    margin: 0 0 16px;
  }

  .sg-why-leadin {
    font-size: 17px;
    font-weight: 700;
    color: #FFFFFF;
    margin: 0;
  }

  .sg-why-points-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .sg-why-point-card {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 18px 22px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
  }

  .sg-why-point-card:hover {
    border-color: #EF4136;
    background: rgba(255, 255, 255, 0.07);
    transform: translateY(-2px);
    box-shadow: 0 8px 22px rgba(239, 65, 54, 0.2);
  }

  .sg-why-point-icon {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background: rgba(239, 65, 54, 0.15);
    border: 1px solid rgba(239, 65, 54, 0.35);
    color: #EF4136;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .sg-why-point-content p {
    font-size: 15px;
    line-height: 1.5;
    color: #FFFFFF;
    margin: 0;
    font-weight: 600;
  }

  /* ==========================================================================
     SECTION 5: THE EVOLUTION FROM SEO TO GEO (LIGHT THEME WITH TRANSPARENT PNG)
     ========================================================================== */
  .sg-evolution-section {
    position: relative;
    border-top: 1px solid #E5E7EB;
    border-bottom: 1px solid #E5E7EB;
    background: #FFFFFF;
  }

  .sg-evolution-section .sg-section-title {
    color: #0A0A0C;
  }

  .sg-evolution-section .sg-section-subtitle {
    color: #4B5563;
  }

  .sg-evolution-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 16px;
    border-radius: 999px;
    background: rgba(239, 65, 54, 0.08);
    border: 1px solid rgba(239, 65, 54, 0.3);
    color: #EF4136;
    font-size: 0.82rem;
    font-weight: 800;
    margin-bottom: 16px;
    text-transform: uppercase;
    font-family: "JetBrains Mono", monospace;
  }

  .badge-pulse-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #EF4136;
    box-shadow: 0 0 10px #EF4136;
  }

  .sg-evolution-grid {
    display: grid;
    grid-template-columns: 0.95fr 1.05fr;
    gap: clamp(32px, 4vw, 54px);
    align-items: flex-start;
  }

  .sg-evolution-visual-col {
    position: sticky;
    top: 100px;
  }

  .sg-evolution-card-pod {
    background: transparent;
    border: none;
    border-radius: 0;
    overflow: visible;
    box-shadow: none;
  }

  .sg-evolution-card-pod:hover {
    border-color: transparent;
    box-shadow: none;
  }

  .sg-evolution-img-wrap {
    position: relative;
    width: 100%;
    background: transparent;
    padding: 0 0 16px;
    overflow: visible;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sg-evolution-3d-img {
    width: 100%;
    height: auto;
    object-fit: contain;
    filter: drop-shadow(0 15px 30px rgba(0, 0, 0, 0.08));
    display: block;
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .sg-evolution-card-pod:hover .sg-evolution-3d-img {
    transform: scale(1.03);
  }

  .sg-evolution-img-badge {
    position: absolute;
    bottom: 0px;
    left: 8px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 14px;
    border-radius: 12px;
    background: #0A0A0C;
    border: 1px solid rgba(239, 65, 54, 0.4);
    color: #FFFFFF;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.05em;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
  }

  .badge-icon-cpu {
    color: #EF4136;
  }

  .sg-evolution-pod-caption {
    padding: 20px 0 0;
  }

  .sg-pod-badge-row {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 14px;
  }

  .sg-pod-chip {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.75rem;
    font-weight: 800;
    padding: 4px 12px;
    border-radius: 8px;
    letter-spacing: 0.04em;
  }

  .sg-pod-chip.chip-trad {
    background: #F3F4F6;
    border: 1px solid #E5E7EB;
    color: #4B5563;
  }

  .sg-pod-chip.chip-geo {
    background: rgba(239, 65, 54, 0.09);
    border: 1px solid rgba(239, 65, 54, 0.35);
    color: #EF4136;
  }

  .sg-pod-arrow {
    color: #9CA3AF;
  }

  .sg-pod-title {
    font-family: "Outfit", sans-serif;
    font-size: 1.22rem;
    font-weight: 800;
    color: #0A0A0C;
    line-height: 1.3;
    margin: 0 0 10px;
    letter-spacing: -0.01em;
  }

  .sg-pod-desc {
    font-size: 0.88rem;
    line-height: 1.65;
    color: #4B5563;
    margin: 0;
  }

  .sg-evolution-cards-col {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .sg-evolution-compare-item {
    background: #FFFFFF;
    border: 1px solid #E5E7EB;
    border-radius: 20px;
    padding: 24px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .sg-evolution-compare-item:hover {
    border-color: rgba(239, 65, 54, 0.4);
    box-shadow: 0 8px 24px rgba(239, 65, 54, 0.08);
    transform: translateY(-2px);
  }

  .sg-compare-header {
    display: flex;
    align-items: center;
    gap: 12px;
    padding-bottom: 16px;
    margin-bottom: 18px;
    border-bottom: 1px solid #F3F4F6;
  }

  .sg-compare-icon-wrap {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background: rgba(239, 65, 54, 0.08);
    border: 1px solid rgba(239, 65, 54, 0.25);
    color: #EF4136;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sg-compare-feature-name {
    font-family: "Outfit", sans-serif;
    font-size: 1.05rem;
    font-weight: 800;
    color: #0A0A0C;
    flex: 1;
    letter-spacing: -0.01em;
  }

  .sg-compare-step-num {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.72rem;
    font-weight: 800;
    color: #EF4136;
    background: rgba(239, 65, 54, 0.08);
    padding: 4px 10px;
    border-radius: 6px;
    border: 1px solid rgba(239, 65, 54, 0.2);
  }

  .sg-compare-dual-grid {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    gap: 14px;
    align-items: center;
  }

  .sg-compare-box {
    border-radius: 14px;
    padding: 16px 18px;
    min-height: 96px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .sg-compare-box.box-trad {
    background: #F9FAFB;
    border: 1px solid #E5E7EB;
  }

  .sg-compare-box.box-geo {
    background: #FFF8F8;
    border: 1.5px solid rgba(239, 65, 54, 0.35);
    box-shadow: 0 4px 16px rgba(239, 65, 54, 0.06);
  }

  .sg-compare-box-label {
    display: flex;
    align-items: center;
    gap: 7px;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.7rem;
    font-weight: 800;
    letter-spacing: 0.06em;
    margin-bottom: 8px;
  }

  .box-trad .sg-compare-box-label {
    color: #6B7280;
  }

  .box-geo .sg-compare-box-label {
    color: #EF4136;
  }

  .status-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }

  .status-dot.dot-gray {
    background: #9CA3AF;
  }

  .status-dot.dot-red {
    background: #EF4136;
    box-shadow: 0 0 8px #EF4136;
  }

  .sg-compare-box-text {
    font-size: 0.88rem;
    line-height: 1.5;
    margin: 0;
  }

  .box-trad .sg-compare-box-text {
    color: #4B5563;
  }

  .box-geo .sg-compare-box-text {
    color: #0A0A0C;
    font-weight: 600;
  }

  .sg-compare-transfer-arrow {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #FFFFFF;
    border: 1px solid #E5E7EB;
    color: #EF4136;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }

  /* ==========================================================================
     SECTION 6: OUR SEO & GEO SERVICES ACCORDION (BLACK BACKGROUND)
     ========================================================================== */
  .sg-pillars-section {
    background: #0A0A0C;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .sg-pillars-section .sg-section-title {
    color: #FFFFFF;
  }

  .sg-pillars-section .sg-section-subtitle {
    color: rgba(255, 255, 255, 0.78);
  }

  .sg-creative-accordion-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-width: 1040px;
    margin: 0 auto;
  }

  .sg-creative-accordion-card {
    background: rgba(255, 255, 255, 0.035);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    overflow: hidden;
  }

  .sg-creative-accordion-card:hover {
    border-color: rgba(239, 65, 54, 0.5);
    box-shadow: 0 8px 24px rgba(239, 65, 54, 0.15);
  }

  .sg-creative-accordion-card.is-expanded {
    background: #141419;
    border-color: #EF4136;
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6), 0 0 25px rgba(239, 65, 54, 0.15);
  }

  .sg-creative-accordion-btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 24px 28px;
    background: transparent;
    border: none;
    text-align: left;
    cursor: pointer;
    color: inherit;
    transition: background 0.25s ease;
  }

  .sg-acc-left-meta {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-shrink: 0;
  }

  .sg-acc-index {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.95rem;
    font-weight: 800;
    color: rgba(255, 255, 255, 0.45);
  }

  .sg-creative-accordion-card.is-expanded .sg-acc-index {
    color: #EF4136;
  }

  .sg-acc-icon-box {
    width: 48px;
    height: 48px;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.12);
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }

  .sg-acc-icon-box.is-active,
  .sg-creative-accordion-card.is-expanded .sg-acc-icon-box {
    background: #EF4136;
    border-color: #EF4136;
    color: #FFFFFF;
    box-shadow: 0 0 18px rgba(239, 65, 54, 0.5);
  }

  .sg-acc-content-header {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .sg-acc-tag-row {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .sg-acc-tag {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.72rem;
    font-weight: 800;
    color: #EF4136;
    background: rgba(239, 65, 54, 0.15);
    padding: 3px 10px;
    border-radius: 6px;
    border: 1px solid rgba(239, 65, 54, 0.35);
    text-transform: uppercase;
  }

  .sg-acc-count-badge {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.72rem;
    color: rgba(255, 255, 255, 0.7);
    background: rgba(255, 255, 255, 0.08);
    padding: 3px 8px;
    border-radius: 6px;
  }

  .sg-acc-title {
    font-family: "Outfit", sans-serif;
    font-size: clamp(1.15rem, 1.6vw, 1.45rem);
    font-weight: 800;
    color: #FFFFFF;
    margin: 0;
    letter-spacing: -0.01em;
  }

  .sg-acc-toggle-bubble {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.12);
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .sg-acc-toggle-bubble.is-open {
    background: #EF4136;
    border-color: #EF4136;
    color: #FFFFFF;
    transform: rotate(180deg);
  }

  .sg-acc-collapse-body {
    overflow: hidden;
  }

  .sg-acc-body-inner {
    padding: 0 28px 28px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    padding-top: 22px;
  }

  .sg-acc-desc {
    font-size: 0.98rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.85);
    margin: 0 0 20px;
  }

  .sg-acc-callout {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 14px 18px;
    border-radius: 12px;
    background: rgba(239, 65, 54, 0.12);
    border-left: 3px solid #EF4136;
    color: #FFFFFF;
    font-size: 0.88rem;
    margin-bottom: 22px;
  }

  .sg-acc-callout p { margin: 0; line-height: 1.55; }
  .sg-acc-callout-icon { color: #EF4136; flex-shrink: 0; margin-top: 2px; }

  .sg-acc-deliverables-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .sg-acc-deliv-item {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 12px 16px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 0.88rem;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.88);
  }

  .sg-acc-deliv-bullet {
    color: #EF4136;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .sg-acc-deliv-text strong {
    color: #FFFFFF;
  }

  /* ==========================================================================
     SECTION 7: 4-STEP BLUEPRINT ROADMAP (LIGHT THEME)
     ========================================================================== */
  .sg-process-sec {
    background: #FFFFFF;
    border-top: 1px solid #E5E7EB;
    border-bottom: 1px solid #E5E7EB;
  }

  .sg-process-sec .sg-section-title {
    color: #0A0A0C;
  }

  .sg-process-sec .sg-section-subtitle {
    color: #4B5563;
  }

  .sg-timeline-stream {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    position: relative;
    padding-top: 30px;
  }

  .sg-timeline-stream.has-6-steps {
    grid-template-columns: repeat(3, 1fr);
  }

  .sg-timeline-line {
    position: absolute;
    top: 52px;
    left: 40px;
    right: 40px;
    height: 2px;
    background: #E5E7EB;
    z-index: 1;
  }

  .sg-timeline-step {
    position: relative;
    z-index: 2;
    background: #F9FAFB;
    border: 1px solid #E5E7EB;
    border-radius: 18px;
    padding: 24px 20px;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.03);
    transition: all 0.3s ease;
  }

  .sg-timeline-step:hover {
    border-color: #EF4136;
    background: #FFFFFF;
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(239, 65, 54, 0.08);
  }

  .sg-node-dot {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: #0A0A0C;
    color: #FFFFFF;
    border: 2px solid #EF4136;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.85rem;
    font-weight: 800;
    margin-bottom: 18px;
  }

  .sg-timeline-step h4 {
    font-family: "Outfit", sans-serif;
    font-size: 1.05rem;
    font-weight: 800;
    color: #0A0A0C;
    margin: 0 0 8px;
  }

  .sg-timeline-step p {
    font-size: 0.88rem;
    line-height: 1.6;
    color: #4B5563;
    margin: 0;
  }

  /* ==========================================================================
     SECTION 8: WHAT MAKES US DIFFERENT (BLACK BACKGROUND)
     ========================================================================== */
  .sg-diff-section {
    background: #0A0A0C;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .sg-diff-section .sg-section-title {
    color: #FFFFFF;
  }

  .sg-diff-section .sg-section-subtitle {
    color: rgba(255, 255, 255, 0.78);
  }

  .sg-diff-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .sg-diff-card {
    padding: 32px 28px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .sg-diff-card:hover {
    border-color: #EF4136;
    background: rgba(255, 255, 255, 0.07);
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(239, 65, 54, 0.2);
  }

  .sg-diff-icon-wrap {
    width: 48px;
    height: 48px;
    border-radius: 14px;
    background: rgba(239, 65, 54, 0.15);
    border: 1px solid rgba(239, 65, 54, 0.35);
    color: #EF4136;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }

  .sg-diff-card h3 {
    font-family: "Outfit", sans-serif;
    font-size: 1.25rem;
    font-weight: 800;
    color: #FFFFFF;
    margin: 0 0 10px;
  }

  .sg-diff-card p {
    font-size: 14.5px;
    line-height: 1.65;
    color: rgba(255, 255, 255, 0.78);
    margin: 0;
  }

  /* ==========================================================================
     SECTION 9: WHO WE HELP (LIGHT THEME)
     ========================================================================== */
  .sg-who-section {
    background: #FFFFFF;
    border-top: 1px solid #E5E7EB;
  }

  .sg-who-section .sg-section-title {
    color: #0A0A0C;
  }

  .sg-who-section .sg-section-subtitle {
    color: #4B5563;
  }

  .sg-who-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 36px;
  }

  .sg-who-card {
    padding: 24px;
    border-radius: 16px;
    background: #F9FAFB;
    border: 1px solid #E5E7EB;
    display: flex;
    gap: 16px;
    align-items: flex-start;
    transition: all 0.3s ease;
  }

  .sg-who-card:hover {
    border-color: #EF4136;
    background: #FFFFFF;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  }

  .sg-who-icon {
    width: 34px;
    height: 34px;
    border-radius: 10px;
    background: rgba(239, 65, 54, 0.08);
    border: 1px solid rgba(239, 65, 54, 0.2);
    color: #EF4136;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .sg-who-content h4 {
    font-family: "Outfit", sans-serif;
    font-size: 1.05rem;
    font-weight: 800;
    color: #0A0A0C;
    margin: 0 0 6px;
  }

  .sg-who-content p {
    font-size: 0.88rem;
    line-height: 1.55;
    color: #4B5563;
    margin: 0;
  }

  .sg-cert-strip {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
    padding-top: 24px;
    border-top: 1px solid #E5E7EB;
  }

  .sg-cert-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 18px;
    border-radius: 999px;
    background: #FFFFFF;
    border: 1px solid #E5E7EB;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.78rem;
    font-weight: 700;
    color: #0A0A0C;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  }

  .cert-icon { color: #EF4136; }

  /* ==========================================================================
     SECTION 10: FREQUENTLY ASKED QUESTIONS (BLACK BACKGROUND)
     ========================================================================== */
  .sg-faq-section {
    background: #0A0A0C;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .sg-faq-section .sg-section-title {
    color: #FFFFFF;
  }

  .sg-faq-stream {
    max-width: 860px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .sg-faq-row {
    background: rgba(255, 255, 255, 0.035);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 20px 24px;
    cursor: pointer;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
    transition: all 0.25s ease;
  }

  .sg-faq-row:hover {
    border-color: rgba(239, 65, 54, 0.5);
    background: rgba(255, 255, 255, 0.05);
  }

  .sg-faq-row.is-open {
    border-color: #EF4136;
    background: #141419;
    box-shadow: 0 8px 24px rgba(239, 65, 54, 0.2);
  }

  .sg-faq-q {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 17px;
    font-weight: 800;
    color: #FFFFFF;
    font-family: "Outfit", sans-serif;
  }

  .sg-faq-arrow {
    color: #EF4136;
    transition: transform 0.3s ease;
  }

  .sg-faq-row.is-open .sg-faq-arrow {
    transform: rotate(180deg);
  }

  .sg-faq-a {
    overflow: hidden;
  }

  .sg-faq-a p {
    font-size: 15px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.82);
    margin: 16px 0 0;
    padding-top: 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }

  /* ==========================================================================
     SECTION 11: RELATED SERVICES (LIGHT THEME)
     ========================================================================== */
  .sg-related-services-section {
    background: #FFFFFF;
    border-top: 1px solid #E5E7EB;
  }

  .sg-related-services-section .sg-section-title {
    color: #0A0A0C;
  }

  .sg-related-services-section .sg-section-subtitle {
    color: #4B5563;
  }

  .sg-related-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  .sg-related-card {
    background: #F9FAFB;
    border: 1px solid #E5E7EB;
    border-radius: 18px;
    padding: 24px 20px;
    text-decoration: none;
    color: #0A0A0C;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .sg-related-card:hover {
    border-color: #0A0A0C;
    background: #FFFFFF;
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  }

  .sg-related-num-badge {
    font-family: "JetBrains Mono", monospace;
    font-size: 0.72rem;
    font-weight: 800;
    color: #EF4136;
    background: rgba(239, 65, 54, 0.08);
    padding: 3px 8px;
    border-radius: 6px;
    display: inline-block;
    width: fit-content;
    margin-bottom: 14px;
    border: 1px solid rgba(239, 65, 54, 0.2);
  }

  .sg-related-card h4 {
    font-family: "Outfit", sans-serif;
    font-size: 1.15rem;
    font-weight: 800;
    color: #0A0A0C;
    margin: 0 0 8px;
  }

  .sg-related-card p {
    font-size: 0.86rem;
    line-height: 1.55;
    color: #4B5563;
    margin: 0 0 20px;
  }

  .sg-related-link-text {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: "Outfit", sans-serif;
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.05em;
    color: #0A0A0C;
    transition: color 0.2s ease;
  }

  .sg-related-card:hover .sg-related-link-text {
    color: #EF4136;
  }

  /* ==========================================================================
     SECTION 12: BOTTOM BANNER CTA (BLACK BACKGROUND)
     ========================================================================== */
  .sg-bottom-cta {
    background: #0A0A0C;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding: clamp(60px, 8vw, 100px) 0;
    position: relative;
    z-index: 2;
  }

  .sg-cta-box-cardless {
    background: linear-gradient(135deg, #111116 0%, #1A0508 50%, #111116 100%);
    border: 1px solid rgba(239, 65, 54, 0.35);
    border-radius: 28px;
    padding: clamp(48px, 6vw, 76px) clamp(24px, 5vw, 56px);
    text-align: center;
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.8);
  }

  .sg-cta-box-cardless h2 {
    font-family: "Outfit", sans-serif;
    font-size: clamp(30px, 4vw, 52px);
    font-weight: 900;
    color: #FFFFFF;
    margin: 0 0 16px;
    letter-spacing: -0.02em;
  }

  .sg-cta-box-cardless h2 span {
    color: #EF4136;
  }

  .sg-cta-box-cardless p {
    font-size: clamp(16px, 1.4vw, 19px);
    color: rgba(255, 255, 255, 0.85);
    max-width: 620px;
    margin: 0 auto 36px;
    line-height: 1.6;
  }

  .sg-cta-actions {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }

  .sg-btn.primary {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 16px 36px;
    border-radius: 14px;
    background: #EF4136;
    color: #FFFFFF;
    font-family: "Outfit", sans-serif;
    font-size: 0.95rem;
    font-weight: 800;
    letter-spacing: 0.04em;
    border: none;
    cursor: pointer;
    box-shadow: 0 10px 25px rgba(239, 65, 54, 0.4);
    transition: all 0.3s ease;
  }

  .sg-btn.primary:hover {
    background: #D2042D;
    transform: translateY(-2px);
    box-shadow: 0 14px 35px rgba(239, 65, 54, 0.6);
  }

  /* RESPONSIVE BREAKPOINTS */
  @media (max-width: 1024px) {
    .sg-tech-banner-grid { grid-template-columns: 1fr; gap: 40px; }
    .sg-seo-split-grid { grid-template-columns: 1fr; }
    .sg-seo-story-right { position: static; }
    .sg-seo-story-pillars { grid-template-columns: 1fr; }
    .sg-evolution-grid { grid-template-columns: 1fr; }
    .sg-evolution-visual-col { position: static; }
    .sg-metrics-strip { grid-template-columns: repeat(2, 1fr); gap: 30px; }
    .sg-metric-item { border-right: none; }
    .sg-why-grid { grid-template-columns: 1fr; }
    .sg-diff-grid { grid-template-columns: 1fr; }
    .sg-who-grid { grid-template-columns: repeat(2, 1fr); }
    .sg-related-grid { grid-template-columns: repeat(2, 1fr); }
    .sg-acc-deliverables-grid { grid-template-columns: 1fr; }
  }

  @media (max-width: 768px) {
    .sg-compare-dual-grid { grid-template-columns: 1fr; }
    .sg-compare-transfer-arrow { transform: rotate(90deg); margin: 0 auto; }
    .sg-creative-accordion-btn { padding: 20px; }
    .sg-acc-body-inner { padding: 0 20px 20px; }
    .sg-acc-tag-row { flex-wrap: wrap; }
    .sg-who-grid { grid-template-columns: 1fr; }
    .sg-related-grid { grid-template-columns: 1fr; }
  }

  @media (max-width: 640px) {
    .sg-tech-action-row { flex-direction: column; align-items: flex-start; gap: 14px; }
    .sg-tech-start-btn { width: 100%; justify-content: center; }
    .sg-tech-floating-badge.badge-top { top: 12px; right: 12px; padding: 8px 12px; }
    .sg-tech-floating-badge.badge-bottom { bottom: 12px; left: 12px; padding: 8px 12px; }
    .sg-metrics-strip { grid-template-columns: 1fr; }
    .sg-timeline-stream { grid-template-columns: 1fr; }
    .sg-timeline-stream.has-6-steps { grid-template-columns: 1fr; }
  }
`;

