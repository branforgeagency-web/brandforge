"use client";

import React, { useLayoutEffect, useState } from "react";
import {
  Search,
  Sparkles,
  Zap,
  Globe,
  ShieldCheck,
  Users,
  PenTool,
  BarChart3,
  Cpu,
  Layers,
  MessageSquare,
  Video,
} from "lucide-react";
import { servicesData } from "../data/servicesData";
import { getRouteSeo, applySeoMetadata } from "../utils/seoMetadata";
import BrandForgeAnimatedFooter from "../components/BrandForgeAnimatedFooter";
import SerpGeoVisualizer from "../components/SerpGeoVisualizer";
import InteractiveWhoWeHelpSection from "../components/InteractiveWhoWeHelpSection";
import SeoQueryArchiveDeck from "../components/SeoQueryArchiveDeck";
import SeoSajanHero from "../components/SeoSajanHero";
import SeoSajanPhilosophy from "../components/SeoSajanPhilosophy";
import SeoSajanServicesDial from "../components/SeoSajanServicesDial";
import SeoSajanOutcomes from "../components/SeoSajanOutcomes";
import SeoSajanWhyChoose from "../components/SeoSajanWhyChoose";
import SeoMontarvilleDeliverables from "../components/SeoMontarvilleDeliverables";
import SeoMontarvilleStory from "../components/SeoMontarvilleStory";
import SeoMontarvilleEvolution from "../components/SeoMontarvilleEvolution";
import SeoMontarvillePillars from "../components/SeoMontarvillePillars";
import SeoMontarvilleBlueprint from "../components/SeoMontarvilleBlueprint";
import SeoMontarvilleDiff from "../components/SeoMontarvilleDiff";
import SeoMontarvilleFaq from "../components/SeoMontarvilleFaq";
import SeoMontarvilleRelatedServices from "../components/SeoMontarvilleRelatedServices";
import SeoMontarvilleBottomCta from "../components/SeoMontarvilleBottomCta";
import SeoVideoIntroSection from "../components/SeoVideoIntroSection";

/* ───────────────────────────────────────────────────────────────────────────
   DYNAMIC SERVICE LANDING PAGE COMPONENT (CARDLESS & LIQUID METAL SHADER)
   100% Cardless design — Liquid metal wave shader, metallic sheen, embers.
   Unified high-tech split hero banner & story lead section for all 12 services.
   ─────────────────────────────────────────────────────────────────────────── */

const _SERVICE_BANNER_ASSETS = {
  "seo-geo": "/seo-geo-banner-bg.png",
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
  "seo-company-coimbatore": "/seo-geo-banner-bg.png",
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

const _SERVICE_BADGES = {
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

const _SERVICE_PILL_TAGS = {
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

const _SERVICE_MICRO_DESCS = {
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

function _renderHeroTitle(data) {
  const title = data.title || "";
  if (data.slug === "seo-geo" || data.slug === "seo-company-coimbatore") {
    return (
      <>
        Best SEO Company in Coimbatore for{" "}
        <span className="sg-tech-h1-accent">
          Google & AI Search Rankings
          <svg className="sg-tech-squiggle" viewBox="0 0 320 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12C30 4 55 18 85 10C115 2 140 17 170 9C200 1 225 16 255 8C280 2 300 15 316 9" stroke="#D61400" strokeWidth="4.5" strokeLinecap="round" />
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
            <path d="M4 12C30 4 55 18 85 10C115 2 140 17 170 9C200 1 225 16 255 8C280 2 300 15 316 9" stroke="#D61400" strokeWidth="4.5" strokeLinecap="round" />
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
            <path d="M4 12C30 4 55 18 85 10C115 2 140 17 170 9C200 1 225 16 255 8C280 2 300 15 316 9" stroke="#D61400" strokeWidth="4.5" strokeLinecap="round" />
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
            <path d="M4 12C30 4 55 18 85 10C115 2 140 17 170 9C200 1 225 16 255 8C280 2 300 15 316 9" stroke="#D61400" strokeWidth="4.5" strokeLinecap="round" />
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
            <path d="M4 12C30 4 55 18 85 10C115 2 140 17 170 9C200 1 225 16 255 8C280 2 300 15 316 9" stroke="#D61400" strokeWidth="4.5" strokeLinecap="round" />
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
            <path d="M4 12C30 4 55 18 85 10C115 2 140 17 170 9C200 1 225 16 255 8C280 2 300 15 316 9" stroke="#D61400" strokeWidth="4.5" strokeLinecap="round" />
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
            <path d="M4 12C30 4 55 18 85 10C115 2 140 17 170 9C200 1 225 16 255 8C280 2 300 15 316 9" stroke="#D61400" strokeWidth="4.5" strokeLinecap="round" />
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
            <path d="M4 12C30 4 55 18 85 10C115 2 140 17 170 9C200 1 225 16 255 8C280 2 300 15 316 9" stroke="#D61400" strokeWidth="4.5" strokeLinecap="round" />
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
            <path d="M4 12C30 4 55 18 85 10C115 2 140 17 170 9C200 1 225 16 255 8C280 2 300 15 316 9" stroke="#D61400" strokeWidth="4.5" strokeLinecap="round" />
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
            <path d="M4 12C30 4 55 18 85 10C115 2 140 17 170 9C200 1 225 16 255 8C280 2 300 15 316 9" stroke="#D61400" strokeWidth="4.5" strokeLinecap="round" />
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
            <path d="M4 12C30 4 55 18 85 10C115 2 140 17 170 9C200 1 225 16 255 8C280 2 300 15 316 9" stroke="#D61400" strokeWidth="4.5" strokeLinecap="round" />
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
            <path d="M4 12C30 4 55 18 85 10C115 2 140 17 170 9C200 1 225 16 255 8C280 2 300 15 316 9" stroke="#D61400" strokeWidth="4.5" strokeLinecap="round" />
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
          <path d="M4 12C30 4 55 18 85 10C115 2 140 17 170 9C200 1 225 16 255 8C280 2 300 15 316 9" stroke="#D61400" strokeWidth="4.5" strokeLinecap="round" />
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
    const currentPath = slug ? (slug.startsWith("/") ? slug : (slug.startsWith("services/") ? `/${slug}` : `/services/${slug}`)) : data?.urlSlug;
    const seo = getRouteSeo(currentPath, data);
    applySeoMetadata(seo);
  }, [slug, data]);

  const evolutionVisual = SERVICE_EVOLUTION_VISUALS[data.slug] || SERVICE_EVOLUTION_VISUALS[slug] || SERVICE_EVOLUTION_VISUALS["seo-geo"];

  const isSeoGeo = data.slug === "seo-geo" || slug === "seo-geo" || slug === "seo-company-coimbatore";
  const isPaidMedia = data.slug === "paid-media" || slug === "paid-media" || slug === "ppc-company-coimbatore";
  const isWebFoundry = data.slug === "web-foundry" || slug === "web-foundry" || slug === "website-development-company-coimbatore" || slug === "web-development-company-coimbatore";
  const isViralSocial = data.slug === "viral-social" || slug === "viral-social" || slug === "social-media-marketing-company-coimbatore" || slug === "social-media-agency-coimbatore";
  const hasIntroVideo = isSeoGeo || isPaidMedia || isWebFoundry || isViralSocial;
  const introVideoSrc = isPaidMedia
    ? "/paidmediabannervideo.mp4"
    : isWebFoundry
    ? "/websitebannervideo.mp4"
    : isViralSocial
    ? "/socialmediabannervideo.mp4"
    : "/seobannerrightvideo.mp4";
  const [introPhase, setIntroPhase] = useState("playing");
  const storyHeading = SERVICE_STORY_HEADINGS[data.slug] || {
    pill: data.whyChooseUs?.tag || "THE STRATEGY",
    lead: (data.whyChooseUs?.title || data.title || "Engineered for").split(" ").slice(0, 4).join(" ") + " —",
    accent: (data.whyChooseUs?.title || data.title || "Market Dominance").split(" ").slice(4).join(" ") || "Market Dominance"
  };

  const topThreePillars = (data.slug === "seo-geo" || data.slug === "seo-company-coimbatore")
    ? SEO_DEFAULT_PILLARS
    : (data.pillars && data.pillars.length >= 3 ? data.pillars.slice(0, 3) : (data.pillars || []));

  return (
    <div className="sg-page-root is-seo-geo-page">
      <style>{styles}</style>

      {/* 1ST SECTION: HERO (SAJAN PORTAL MASK & SPOTLIGHT HERO) */}
      {hasIntroVideo && introPhase !== "done" && (
        <SeoVideoIntroSection
          videoSrc={introVideoSrc}
          onStartFade={() => setIntroPhase("fading")}
          onComplete={() => setIntroPhase("done")}
        />
      )}
      <div
        style={{
          opacity: (hasIntroVideo && introPhase === "playing") ? 0 : 1,
          transition: "opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1)",
          willChange: "opacity",
        }}
      >
        <SeoSajanHero
          data={data}
          slug={slug}
          onOpenModal={onOpenModal}
          isActive={!hasIntroVideo || introPhase !== "playing"}
        />
      </div>

      {/* 2ND SECTION: SAJAN PHILOSOPHY & REVEAL STATEMENT (PINNED SCROLL SCRUB) */}
      <SeoSajanPhilosophy data={data} onOpenModal={onOpenModal} />

      {/* 3RD SECTION: SAJAN FREQUENCY DIAL & TUNER (PINNED HORIZONTAL GAUGE) */}
      <SeoSajanServicesDial data={data} onOpenModal={onOpenModal} />

      {/* 4TH SECTION: CAPABILITIES & DELIVERABLES (MONTARVILLE ARCHITECTURAL BLUEPRINTS) */}
      <SeoMontarvilleDeliverables data={data} onOpenModal={onOpenModal} />

      {/* DUAL-ENGINE SEARCH VISUALIZER (ONLY ON SEO & GEO) */}
      {isSeoGeo && <SerpGeoVisualizer />}

      {/* DEDICATED PARAGRAPH STORY & LEAD FORM SECTION */}
      <SeoMontarvilleStory
        data={data}
        storyHeading={storyHeading}
        topThreePillars={topThreePillars}
        onOpenModal={onOpenModal}
      />

      {/* OUTCOMES / METRICS STRIP (SAJAN LUMINA BRUTALIST GRID) */}
      <SeoSajanOutcomes data={data} metrics={data.metrics} />

      {/* WHY BUSINESSES CHOOSE BRAND FORGE (SAJAN ANGLED MARQUEE RIBBONS) */}
      {data.whyChooseUs && (
        <SeoSajanWhyChoose whyChooseUs={data.whyChooseUs} onOpenModal={onOpenModal} />
      )}

      {/* CREATIVE EDITORIAL COMPARISON MATRIX */}
      {data.matrixRows && data.matrixRows.length > 0 && (
        <SeoMontarvilleEvolution
          matrixRows={data.matrixRows}
          matrixTag={data.matrixTag}
          matrixTitle={data.matrixTitle}
          matrixSubtitle={data.matrixSubtitle}
          evolutionVisual={evolutionVisual}
        />
      )}

      {/* AWAKE-INSPIRED LIVE QUERY ARCHIVE DECK (SEO & GEO ONLY) */}
      {isSeoGeo && <SeoQueryArchiveDeck onOpenModal={onOpenModal} />}

      {/* COMPREHENSIVE ARCHITECTURE PILLARS STREAM */}
      <SeoMontarvillePillars data={data} onOpenModal={onOpenModal} />

      {/* 4-STEP BLUEPRINT ROADMAP TIMELINE */}
      <SeoMontarvilleBlueprint timeline={data.timeline} onOpenModal={onOpenModal} />

      {/* WHAT MAKES OUR COMPANY DIFFERENT SECTION */}
      {data.differentiators && (
        <SeoMontarvilleDiff differentiators={data.differentiators} onOpenModal={onOpenModal} />
      )}

      {/* WHO WE HELP SECTION */}
      {data.whoWeHelp && (
        <InteractiveWhoWeHelpSection whoWeHelp={data.whoWeHelp} />
      )}

      {/* FREQUENTLY ASKED QUESTIONS */}
      <SeoMontarvilleFaq faqs={data.faqs} onOpenModal={onOpenModal} />

      {/* RELATED SERVICES INTERNAL CROSS-LINKING SECTION */}
      <SeoMontarvilleRelatedServices
        currentSlug={slug}
        navigate={navigate}
      />

      {/* BOTTOM BANNER CTA */}
      <SeoMontarvilleBottomCta
        bottomCta={data.bottomCta}
        onOpenModal={onOpenModal}
      />

      {/* SITE FOOTER */}
      <BrandForgeAnimatedFooter onOpenModal={onOpenModal} />
    </div>
  );
}

const styles = `


  .sg-page-root {
    background: #FAFAFC;
    color: #0A0A0C;
    font-family: "Plus Jakarta Sans", sans-serif;
    overflow-x: clip;
    padding-top: 110px;
    position: relative;
    z-index: 1;
  }

  .sg-page-root.is-seo-geo-page {
    padding-top: 0;
    background: #000000 !important;
    color: #FAFAFC !important;
  }

  .sg-page-root.is-seo-geo-page .sg-marquee-bar {
    margin-top: 0;
    padding-top: 90px;
    background: #000000;
    border-top: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  /* COHESIVE ULTRA-LUXURY DARK THEME SCOPED FOR SEO & GEO */
  .sg-page-root.is-seo-geo-page .sg-seo-story-section {
    background: #000000 !important;
    border-top: 1px solid rgba(255, 255, 255, 0.08) !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
  }

  .sg-page-root.is-seo-geo-page .sg-seo-story-heading {
    color: #FAFAFC !important;
  }

  .sg-page-root.is-seo-geo-page .sg-seo-story-para {
    color: #94A3B8 !important;
  }

  .sg-page-root.is-seo-geo-page .sg-seo-story-para.lead-para {
    color: #FAFAFC !important;
  }

  .sg-page-root.is-seo-geo-page .sg-inline-form-wrap {
    background: #0E0E14 !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.7) !important;
  }

  .sg-page-root.is-seo-geo-page .sg-inline-form-wrap h2,
  .sg-page-root.is-seo-geo-page .sg-inline-form-wrap h3,
  .sg-page-root.is-seo-geo-page .sg-inline-form-wrap h4,
  .sg-page-root.is-seo-geo-page .sg-inline-form-wrap .lt-title,
  .sg-page-root.is-seo-geo-page .sg-inline-form-wrap .lt-header-title {
    color: #FAFAFC !important;
  }

  .sg-page-root.is-seo-geo-page .sg-inline-form-wrap p,
  .sg-page-root.is-seo-geo-page .sg-inline-form-wrap .lt-subtitle,
  .sg-page-root.is-seo-geo-page .sg-inline-form-wrap .lt-header-subtitle {
    color: #94A3B8 !important;
  }

  .sg-page-root.is-seo-geo-page .sg-inline-form-wrap input,
  .sg-page-root.is-seo-geo-page .sg-inline-form-wrap select,
  .sg-page-root.is-seo-geo-page .sg-inline-form-wrap textarea {
    background: #14141C !important;
    border: 1px solid rgba(255, 255, 255, 0.12) !important;
    color: #FAFAFC !important;
  }

  .sg-page-root.is-seo-geo-page .sg-inline-form-wrap select option {
    background: #14141C !important;
    color: #FAFAFC !important;
  }

  .sg-page-root.is-seo-geo-page .sg-inline-form-wrap input:focus,
  .sg-page-root.is-seo-geo-page .sg-inline-form-wrap select:focus,
  .sg-page-root.is-seo-geo-page .sg-inline-form-wrap textarea:focus {
    background: #181824 !important;
    border-color: #FF1801 !important;
    box-shadow: 0 0 0 3px rgba(255, 24, 1, 0.25) !important;
    color: #FAFAFC !important;
  }

  .sg-page-root.is-seo-geo-page .sg-inline-form-wrap input::placeholder,
  .sg-page-root.is-seo-geo-page .sg-inline-form-wrap textarea::placeholder {
    color: #64748B !important;
  }

  .sg-page-root.is-seo-geo-page .sg-inline-form-wrap .lt-submit-btn,
  .sg-page-root.is-seo-geo-page .sg-inline-form-wrap button[type="submit"],
  .sg-page-root.is-seo-geo-page .sg-form-btn {
    background: #FF1801 !important;
    color: #FFFFFF !important;
    box-shadow: 0 8px 24px rgba(255, 24, 1, 0.35) !important;
  }

  .sg-page-root.is-seo-geo-page .sg-inline-form-wrap .lt-submit-btn:hover,
  .sg-page-root.is-seo-geo-page .sg-inline-form-wrap button[type="submit"]:hover,
  .sg-page-root.is-seo-geo-page .sg-form-btn:hover {
    background: #D61400 !important;
    box-shadow: 0 12px 30px rgba(255, 24, 1, 0.5) !important;
  }

  .sg-page-root.is-seo-geo-page .sg-inline-form-wrap .lt-footer-note {
    color: #64748B !important;
  }

  .sg-page-root.is-seo-geo-page .sg-story-pillar-item {
    background: #111117 !important;
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
  }

  .sg-page-root.is-seo-geo-page .sg-story-pillar-item:hover {
    background: #15151F !important;
    border-color: #FF1801 !important;
  }

  .sg-page-root.is-seo-geo-page .sg-story-pillar-item h4 {
    color: #FAFAFC !important;
  }

  .sg-page-root.is-seo-geo-page .sg-story-pillar-item p {
    color: #94A3B8 !important;
  }

  /* EVOLUTION MATRIX - DARK THEME OVERRIDES */
  .sg-page-root.is-seo-geo-page .sg-evolution-section {
    background: #000000 !important;
    border-top: 1px solid rgba(255, 255, 255, 0.08) !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
  }

  .sg-page-root.is-seo-geo-page .sg-evolution-section .sg-section-title {
    color: #FAFAFC !important;
  }

  .sg-page-root.is-seo-geo-page .sg-evolution-section .sg-section-subtitle {
    color: #94A3B8 !important;
  }

  .sg-page-root.is-seo-geo-page .sg-pod-chip.chip-trad {
    background: #14141C !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
    color: #94A3B8 !important;
  }

  .sg-page-root.is-seo-geo-page .sg-pod-title {
    color: #FAFAFC !important;
  }

  .sg-page-root.is-seo-geo-page .sg-pod-desc {
    color: #94A3B8 !important;
  }

  .sg-page-root.is-seo-geo-page .sg-evolution-compare-item {
    background: #111117 !important;
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4) !important;
  }

  .sg-page-root.is-seo-geo-page .sg-evolution-compare-item:hover {
    border-color: rgba(255, 24, 1, 0.5) !important;
    box-shadow: 0 8px 30px rgba(255, 24, 1, 0.15) !important;
  }

  .sg-page-root.is-seo-geo-page .sg-compare-header {
    border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
  }

  .sg-page-root.is-seo-geo-page .sg-compare-feature-name {
    color: #FAFAFC !important;
  }

  .sg-page-root.is-seo-geo-page .sg-compare-box.box-trad {
    background: #15151F !important;
    border: 1px solid rgba(255, 255, 255, 0.07) !important;
  }

  .sg-page-root.is-seo-geo-page .box-trad .sg-compare-box-label {
    color: #94A3B8 !important;
  }

  .sg-page-root.is-seo-geo-page .box-trad .sg-compare-box-text {
    color: #94A3B8 !important;
  }

  .sg-page-root.is-seo-geo-page .sg-compare-box.box-geo {
    background: #1B1216 !important;
    border: 1.5px solid rgba(255, 24, 1, 0.45) !important;
    box-shadow: 0 4px 20px rgba(255, 24, 1, 0.12) !important;
  }

  .sg-page-root.is-seo-geo-page .box-geo .sg-compare-box-text {
    color: #FAFAFC !important;
  }

  .sg-page-root.is-seo-geo-page .sg-compare-transfer-arrow {
    background: #14141C !important;
    border: 1px solid rgba(255, 255, 255, 0.12) !important;
    color: #FF1801 !important;
  }

  /* PILLARS SECTION - DARK THEME OVERRIDES */
  .sg-page-root.is-seo-geo-page .sg-pillars-section {
    background: #000000 !important;
    border-top: 1px solid rgba(255, 255, 255, 0.08) !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
  }

  .sg-page-root.is-seo-geo-page .sg-pillars-section .sg-section-title {
    color: #FAFAFC !important;
  }

  .sg-page-root.is-seo-geo-page .sg-pillars-section .sg-section-subtitle {
    color: #94A3B8 !important;
  }

  .sg-page-root.is-seo-geo-page .sg-creative-accordion-card {
    background: #111117 !important;
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3) !important;
  }

  .sg-page-root.is-seo-geo-page .sg-creative-accordion-card:hover {
    border-color: rgba(255, 24, 1, 0.5) !important;
  }

  .sg-page-root.is-seo-geo-page .sg-creative-accordion-card.is-expanded {
    background: #15151F !important;
    border-color: #FF1801 !important;
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6), 0 0 25px rgba(255, 24, 1, 0.15) !important;
  }

  .sg-page-root.is-seo-geo-page .sg-acc-title {
    color: #FAFAFC !important;
  }

  .sg-page-root.is-seo-geo-page .sg-acc-summary {
    color: #94A3B8 !important;
  }

  .sg-page-root.is-seo-geo-page .sg-acc-body-inner p {
    color: #CBD5E1 !important;
  }

  .sg-page-root.is-seo-geo-page .sg-acc-deliv-card {
    background: #111117 !important;
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
  }

  .sg-page-root.is-seo-geo-page .sg-acc-deliv-card h5 {
    color: #FAFAFC !important;
  }

  .sg-page-root.is-seo-geo-page .sg-acc-deliv-card p {
    color: #94A3B8 !important;
  }

  /* PROCESS BLUEPRINT - DARK THEME OVERRIDES */
  .sg-page-root.is-seo-geo-page .sg-process-sec {
    background: #000000 !important;
    border-top: 1px solid rgba(255, 255, 255, 0.08) !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
  }

  .sg-page-root.is-seo-geo-page .sg-process-sec .sg-section-title {
    color: #FAFAFC !important;
  }

  .sg-page-root.is-seo-geo-page .sg-process-sec .sg-section-subtitle {
    color: #94A3B8 !important;
  }

  .sg-page-root.is-seo-geo-page .sg-timeline-line {
    background: rgba(255, 255, 255, 0.12) !important;
  }

  .sg-page-root.is-seo-geo-page .sg-timeline-step {
    background: #111117 !important;
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3) !important;
  }

  .sg-page-root.is-seo-geo-page .sg-timeline-step:hover {
    background: #15151F !important;
    border-color: #FF1801 !important;
    box-shadow: 0 8px 24px rgba(255, 24, 1, 0.15) !important;
  }

  .sg-page-root.is-seo-geo-page .sg-timeline-step h4 {
    color: #FAFAFC !important;
  }

  .sg-page-root.is-seo-geo-page .sg-timeline-step p {
    color: #94A3B8 !important;
  }

  /* DIFFERENTIATORS - DARK THEME OVERRIDES */
  .sg-page-root.is-seo-geo-page .sg-diff-section {
    background: #000000 !important;
    border-top: 1px solid rgba(255, 255, 255, 0.08) !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
  }

  .sg-page-root.is-seo-geo-page .sg-diff-section .sg-section-title {
    color: #FAFAFC !important;
  }

  .sg-page-root.is-seo-geo-page .sg-diff-section .sg-section-subtitle {
    color: #94A3B8 !important;
  }

  .sg-page-root.is-seo-geo-page .sg-diff-card {
    background: #111117 !important;
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3) !important;
  }

  .sg-page-root.is-seo-geo-page .sg-diff-card:hover {
    background: #15151F !important;
    border-color: #FF1801 !important;
    box-shadow: 0 12px 30px rgba(255, 24, 1, 0.2) !important;
  }

  .sg-page-root.is-seo-geo-page .sg-diff-card h3 {
    color: #FAFAFC !important;
  }

  .sg-page-root.is-seo-geo-page .sg-diff-card p {
    color: #94A3B8 !important;
  }

  /* WHO WE HELP - DARK THEME OVERRIDES */
  .sg-page-root.is-seo-geo-page .sg-who-section {
    background: #000000 !important;
    border-top: 1px solid rgba(255, 255, 255, 0.08) !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
  }

  .sg-page-root.is-seo-geo-page .sg-who-section .sg-section-title {
    color: #FAFAFC !important;
  }

  .sg-page-root.is-seo-geo-page .sg-who-section .sg-section-subtitle {
    color: #94A3B8 !important;
  }

  .sg-page-root.is-seo-geo-page .sg-who-card {
    background: #111117 !important;
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3) !important;
  }

  .sg-page-root.is-seo-geo-page .sg-who-card:hover {
    background: #15151F !important;
    border-color: #FF1801 !important;
    box-shadow: 0 8px 24px rgba(255, 24, 1, 0.15) !important;
  }

  .sg-page-root.is-seo-geo-page .sg-who-content h4 {
    color: #FAFAFC !important;
  }

  .sg-page-root.is-seo-geo-page .sg-who-content p {
    color: #94A3B8 !important;
  }

  .sg-page-root.is-seo-geo-page .sg-cert-strip {
    border-top: 1px solid rgba(255, 255, 255, 0.08) !important;
  }

  .sg-page-root.is-seo-geo-page .sg-cert-badge {
    background: #14141C !important;
    border: 1px solid rgba(255, 255, 255, 0.1) !important;
    color: #FAFAFC !important;
  }

  /* FAQ - DARK THEME OVERRIDES */
  .sg-page-root.is-seo-geo-page .sg-faq-section {
    background: #000000 !important;
    border-top: 1px solid rgba(255, 255, 255, 0.08) !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
  }

  .sg-page-root.is-seo-geo-page .sg-faq-section .sg-section-title {
    color: #FAFAFC !important;
  }

  .sg-page-root.is-seo-geo-page .sg-faq-section .sg-section-subtitle {
    color: #94A3B8 !important;
  }

  .sg-page-root.is-seo-geo-page .sg-faq-row {
    background: #111117 !important;
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3) !important;
  }

  .sg-page-root.is-seo-geo-page .sg-faq-row:hover {
    background: #14141C !important;
    border-color: rgba(255, 24, 1, 0.5) !important;
  }

  .sg-page-root.is-seo-geo-page .sg-faq-row.is-open {
    background: #15151F !important;
    border-color: #FF1801 !important;
  }

  .sg-page-root.is-seo-geo-page .sg-faq-q {
    color: #FAFAFC !important;
  }

  .sg-page-root.is-seo-geo-page .sg-faq-a p {
    color: #94A3B8 !important;
    border-top: 1px solid rgba(255, 255, 255, 0.08) !important;
  }

  /* RELATED SERVICES - DARK THEME OVERRIDES */
  .sg-page-root.is-seo-geo-page .sg-related-services-section {
    background: #000000 !important;
    border-top: 1px solid rgba(255, 255, 255, 0.08) !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
  }

  .sg-page-root.is-seo-geo-page .sg-related-services-section .sg-section-title {
    color: #FAFAFC !important;
  }

  .sg-page-root.is-seo-geo-page .sg-related-services-section .sg-section-subtitle {
    color: #94A3B8 !important;
  }

  .sg-page-root.is-seo-geo-page .sg-related-card {
    background: #111117 !important;
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
    color: #FAFAFC !important;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3) !important;
  }

  .sg-page-root.is-seo-geo-page .sg-related-card:hover {
    background: #15151F !important;
    border-color: #FF1801 !important;
    box-shadow: 0 8px 24px rgba(255, 24, 1, 0.15) !important;
  }

  .sg-page-root.is-seo-geo-page .sg-related-card h4 {
    color: #FAFAFC !important;
  }

  .sg-page-root.is-seo-geo-page .sg-related-card p {
    color: #94A3B8 !important;
  }

  .sg-page-root.is-seo-geo-page .sg-related-link-text {
    color: #FAFAFC !important;
  }

  .sg-page-root.is-seo-geo-page .sg-related-card:hover .sg-related-link-text {
    color: #FF1801 !important;
  }

  /* BOTTOM BANNER CTA */
  .sg-page-root.is-seo-geo-page .sg-bottom-cta {
    background: #000000 !important;
    border-top: 1px solid rgba(255, 255, 255, 0.08) !important;
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
    background: #000000;
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

  .sg-marquee-track span { color: #FF1801; }

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
    border: 1px dashed rgba(255, 24, 1, 0.18);
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
    background: #FF1801;
    border-color: #FF1801;
    transform: translateY(-2px);
    box-shadow: 0 4px 14px rgba(255, 24, 1, 0.4);
  }

  .sg-tech-pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 16px;
    border-radius: 999px;
    background: rgba(255, 24, 1, 0.08);
    border: 1px solid rgba(255, 24, 1, 0.3);
    color: #FF1801;
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    font-family: "JetBrains Mono", monospace;
    margin-bottom: 20px;
    text-transform: uppercase;
  }

  .sg-tech-pill-dot {
    color: #FF1801;
    font-size: 1.1rem;
    line-height: 1;
  }

  .sg-tech-pill.inline-pill {
    background: rgba(255, 24, 1, 0.12);
    border-color: rgba(255, 24, 1, 0.35);
    color: #FF1801;
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
    color: #FF1801;
    background: linear-gradient(135deg, #FF1801 0%, #D61400 100%);
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
    background: #FF1801;
    color: #FFFFFF;
    font-family: "Outfit", sans-serif;
    font-size: 0.95rem;
    font-weight: 800;
    letter-spacing: 0.03em;
    border: none;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 8px 24px rgba(255, 24, 1, 0.35);
  }

  .sg-tech-start-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(10, 10, 12, 0.25);
    background: #000000;
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
    background: #000000;
    color: #FFFFFF;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
  }

  .sg-tech-play-btn:hover .sg-tech-play-icon-wrap {
    transform: scale(1.08);
    background: #FF1801;
    box-shadow: 0 0 20px rgba(255, 24, 1, 0.5);
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
    color: #FF1801;
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
    background: radial-gradient(circle, rgba(255, 24, 1, 0.12) 0%, rgba(255, 24, 1, 0.03) 50%, transparent 70%);
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
    color: #FF1801;
  }

  /* ==========================================================================
     SECTION 2: DEDICATED PARAGRAPH STORY & LEAD FORM (BLACK BACKGROUND)
     ========================================================================== */
  .sg-seo-story-section {
    padding: clamp(70px, 9vw, 110px) 0 clamp(50px, 6vw, 80px);
    position: relative;
    z-index: 2;
    background: #000000;
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
    color: #FF1801;
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
    box-shadow: 0 28px 70px rgba(0, 0, 0, 0.65), 0 0 45px rgba(255, 24, 1, 0.08);
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
    color: #FF1801 !important;
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
    border-color: #FF1801 !important;
    background: #FFFFFF !important;
    box-shadow: 0 0 0 3px rgba(255, 24, 1, 0.15) !important;
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
    background: #000000 !important;
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
    background: #FF1801 !important;
    box-shadow: 0 10px 25px rgba(255, 24, 1, 0.4) !important;
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
    border-color: #FF1801;
    background: rgba(255, 255, 255, 0.07);
    transform: translateY(-3px);
    box-shadow: 0 10px 24px rgba(255, 24, 1, 0.2);
  }

  .pillar-icon-box {
    width: 46px;
    height: 46px;
    border-radius: 12px;
    background: rgba(255, 24, 1, 0.15);
    border: 1px solid rgba(255, 24, 1, 0.35);
    color: #FF1801;
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
    color: #FF1801;
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
    color: #FF1801;
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

  .sg-section-title span { color: #FF1801; }

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
    background: #000000;
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
    border-color: #FF1801;
    background: rgba(255, 255, 255, 0.07);
    transform: translateY(-2px);
    box-shadow: 0 8px 22px rgba(255, 24, 1, 0.2);
  }

  .sg-why-point-icon {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background: rgba(255, 24, 1, 0.15);
    border: 1px solid rgba(255, 24, 1, 0.35);
    color: #FF1801;
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
    background: rgba(255, 24, 1, 0.08);
    border: 1px solid rgba(255, 24, 1, 0.3);
    color: #FF1801;
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
    background: #FF1801;
    box-shadow: 0 0 10px #FF1801;
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
    background: #000000;
    border: 1px solid rgba(255, 24, 1, 0.4);
    color: #FFFFFF;
    font-family: "JetBrains Mono", monospace;
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.05em;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
  }

  .badge-icon-cpu {
    color: #FF1801;
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
    background: rgba(255, 24, 1, 0.09);
    border: 1px solid rgba(255, 24, 1, 0.35);
    color: #FF1801;
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
    border-color: rgba(255, 24, 1, 0.4);
    box-shadow: 0 8px 24px rgba(255, 24, 1, 0.08);
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
    background: rgba(255, 24, 1, 0.08);
    border: 1px solid rgba(255, 24, 1, 0.25);
    color: #FF1801;
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
    color: #FF1801;
    background: rgba(255, 24, 1, 0.08);
    padding: 4px 10px;
    border-radius: 6px;
    border: 1px solid rgba(255, 24, 1, 0.2);
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
    border: 1.5px solid rgba(255, 24, 1, 0.35);
    box-shadow: 0 4px 16px rgba(255, 24, 1, 0.06);
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
    color: #FF1801;
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
    background: #FF1801;
    box-shadow: 0 0 8px #FF1801;
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
    color: #FF1801;
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
    background: #000000;
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
    border-color: rgba(255, 24, 1, 0.5);
    box-shadow: 0 8px 24px rgba(255, 24, 1, 0.15);
  }

  .sg-creative-accordion-card.is-expanded {
    background: #141419;
    border-color: #FF1801;
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6), 0 0 25px rgba(255, 24, 1, 0.15);
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
    color: #FF1801;
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
    background: #FF1801;
    border-color: #FF1801;
    color: #FFFFFF;
    box-shadow: 0 0 18px rgba(255, 24, 1, 0.5);
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
    color: #FF1801;
    background: rgba(255, 24, 1, 0.15);
    padding: 3px 10px;
    border-radius: 6px;
    border: 1px solid rgba(255, 24, 1, 0.35);
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
    background: #FF1801;
    border-color: #FF1801;
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
    background: rgba(255, 24, 1, 0.12);
    border-left: 3px solid #FF1801;
    color: #FFFFFF;
    font-size: 0.88rem;
    margin-bottom: 22px;
  }

  .sg-acc-callout p { margin: 0; line-height: 1.55; }
  .sg-acc-callout-icon { color: #FF1801; flex-shrink: 0; margin-top: 2px; }

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
    color: #FF1801;
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
    border-color: #FF1801;
    background: #FFFFFF;
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(255, 24, 1, 0.08);
  }

  .sg-node-dot {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: #000000;
    color: #FFFFFF;
    border: 2px solid #FF1801;
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
    background: #000000;
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
    border-color: #FF1801;
    background: rgba(255, 255, 255, 0.07);
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(255, 24, 1, 0.2);
  }

  .sg-diff-icon-wrap {
    width: 48px;
    height: 48px;
    border-radius: 14px;
    background: rgba(255, 24, 1, 0.15);
    border: 1px solid rgba(255, 24, 1, 0.35);
    color: #FF1801;
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
    border-color: #FF1801;
    background: #FFFFFF;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  }

  .sg-who-icon {
    width: 34px;
    height: 34px;
    border-radius: 10px;
    background: rgba(255, 24, 1, 0.08);
    border: 1px solid rgba(255, 24, 1, 0.2);
    color: #FF1801;
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

  .cert-icon { color: #FF1801; }

  /* ==========================================================================
     SECTION 10: FREQUENTLY ASKED QUESTIONS (BLACK BACKGROUND)
     ========================================================================== */
  .sg-faq-section {
    background: #000000;
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
    border-color: rgba(255, 24, 1, 0.5);
    background: rgba(255, 255, 255, 0.05);
  }

  .sg-faq-row.is-open {
    border-color: #FF1801;
    background: #141419;
    box-shadow: 0 8px 24px rgba(255, 24, 1, 0.2);
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
    color: #FF1801;
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
    color: #FF1801;
    background: rgba(255, 24, 1, 0.08);
    padding: 3px 8px;
    border-radius: 6px;
    display: inline-block;
    width: fit-content;
    margin-bottom: 14px;
    border: 1px solid rgba(255, 24, 1, 0.2);
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
    color: #FF1801;
  }

  /* ==========================================================================
     SECTION 12: BOTTOM BANNER CTA (BLACK BACKGROUND)
     ========================================================================== */
  .sg-bottom-cta {
    background: #000000;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding: clamp(60px, 8vw, 100px) 0;
    position: relative;
    z-index: 2;
  }

  .sg-cta-box-cardless {
    background: #000000;
    border: 1px solid rgba(255, 24, 1, 0.35);
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
    color: #FF1801;
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
    background: #FF1801;
    color: #FFFFFF;
    font-family: "Outfit", sans-serif;
    font-size: 0.95rem;
    font-weight: 800;
    letter-spacing: 0.04em;
    border: none;
    cursor: pointer;
    box-shadow: 0 10px 25px rgba(255, 24, 1, 0.4);
    transition: all 0.3s ease;
  }

  .sg-btn.primary:hover {
    background: #D61400;
    transform: translateY(-2px);
    box-shadow: 0 14px 35px rgba(255, 24, 1, 0.6);
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

