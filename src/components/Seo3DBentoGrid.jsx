"use client";

import React from "react";
import {
  Search, Cpu, Target, Award, Sparkles, Globe, Users, PenTool,
  MessageSquare, Layers, Video, ShieldCheck, BarChart3
} from "lucide-react";
import Seo3DBentoCard from "./Seo3DBentoCard";
import KexsioCanvasBackground from "./KexsioCanvasBackground";

const SERVICE_BENTO_CONFIGS = {
  "seo-geo": {
    eyebrow: "What We Deliver",
    heading: "Complete Search & AI",
    headingAccent: "Growth Strategy",
    sub: "We combine proven technical SEO with modern AI search optimization so your business ranks higher and gets recommended first.",
    cards: [
      {
        icon: Search,
        pillarTag: "Technical Foundation",
        title: "Technical SEO & Site Speed",
        description: "We fix crawl errors, speed up page load times, and structure your website so search engines can index every page effortlessly.",
        metricValue: "100/100",
        metricLabel: "Core Web Vitals Score",
        badgeText: "Site Health",
        highlights: [
          { label: "Core Web Vitals & Speed Optimization", tag: "Sub-200ms Load" },
          { label: "Structured Schema & Rich Snippets", tag: "JSON-LD Setup" },
          { label: "XML Sitemaps & Clean Crawl Indexing", tag: "Zero Errors" },
        ],
      },
      {
        icon: Cpu,
        pillarTag: "AI Search Visibility",
        title: "Generative Engine Optimization (GEO)",
        description: "More buyers now ask ChatGPT, Perplexity, and Google AI for recommendations. We structure your brand content so AI tools cite you directly.",
        metricValue: "Top 3",
        metricLabel: "AI Answer Citations",
        badgeText: "ChatGPT & Gemini",
        highlights: [
          { label: "Brand Entity & Knowledge Graph Setup", tag: "Verified Source" },
          { label: "Direct-Answer Content Formatting", tag: "AI Ready" },
          { label: "Citation Tracking Across AI Platforms", tag: "Monthly Reports" },
        ],
      },
      {
        icon: Target,
        pillarTag: "Commercial Keywords",
        title: "High-Intent Keyword & Local SEO",
        description: "Instead of chasing empty traffic, we target the exact search terms and local map queries your ready-to-buy customers are searching for.",
        metricValue: "+340%",
        metricLabel: "Qualified Organic Leads",
        badgeText: "Lead Generation",
        highlights: [
          { label: "Bottom-of-Funnel Buyer Keyword Research", tag: "High Intent" },
          { label: "Google Business Profile & Maps 3-Pack", tag: "Local Rank #1" },
          { label: "Dedicated Service & Location Landing Pages", tag: "Conversion Focused" },
        ],
      },
      {
        icon: Award,
        pillarTag: "Authority & Trust",
        title: "Digital PR & Quality Link Building",
        description: "We earn genuine backlinks and editorial mentions from trusted industry publications to build lasting domain authority.",
        metricValue: "DA 80+",
        metricLabel: "Editorial Publications",
        badgeText: "White-Hat Only",
        highlights: [
          { label: "High-Authority Editorial Outreach", tag: "Real Media" },
          { label: "Competitor Backlink Gap Acquisition", tag: "Market Edge" },
          { label: "Toxic Link Audit & Disavow Protection", tag: "Safe Growth" },
        ],
      },
    ],
  },
  "paid-media": {
    eyebrow: "What We Deliver",
    heading: "Performance Advertising Built For",
    headingAccent: "Profitable ROI",
    sub: "We manage your Google, Meta, and LinkedIn ad campaigns with strict cost controls and clear revenue tracking.",
    cards: [
      {
        icon: Target,
        pillarTag: "Accurate Tracking",
        title: "Conversion Tracking & Attribution",
        description: "Before spending a rupee on ads, we set up server-side tracking so you know exactly which campaign generated each lead and sale.",
        metricValue: "100%",
        metricLabel: "Tracked Lead Attribution",
        badgeText: "Full Clarity",
        highlights: [
          { label: "Meta Conversions API (CAPI) Setup", tag: "Server-Side" },
          { label: "Google Enhanced Conversion Tracking", tag: "Zero Data Loss" },
          { label: "CRM & WhatsApp Lead Source Sync", tag: "Live Dashboard" },
        ],
      },
      {
        icon: Search,
        pillarTag: "Search & Shopping Ads",
        title: "High-Intent Google Ads Management",
        description: "Capture customers the moment they search for your product or service on Google with tightly managed keyword bidding.",
        metricValue: "4.8x",
        metricLabel: "Average Return on Ad Spend",
        badgeText: "Google Partner",
        highlights: [
          { label: "Search & Performance Max Campaigns", tag: "High ROI" },
          { label: "Daily Negative Keyword Pruning", tag: "Zero Wasted Spend" },
          { label: "Custom Ad Extensions & Callout Copy", tag: "Higher CTR" },
        ],
      },
      {
        icon: BarChart3,
        pillarTag: "Social Advertising",
        title: "Meta, Instagram & LinkedIn Ads",
        description: "Reach decision-makers and local buyers with scroll-stopping video and carousel ads tailored to your ideal customer profile.",
        metricValue: "-38%",
        metricLabel: "Lower Cost Per Acquisition",
        badgeText: "Targeted Reach",
        highlights: [
          { label: "Lookalike & Custom Audience Targeting", tag: "Precision Reach" },
          { label: "Multi-Variant Ad Creative Testing", tag: "Weekly Refreshes" },
          { label: "B2B Account-Based LinkedIn Campaigns", tag: "Decision Makers" },
        ],
      },
      {
        icon: Award,
        pillarTag: "Funnel & Retargeting",
        title: "Smart Retargeting & Landing Pages",
        description: "Bring back visitors who didn't convert on their first visit with helpful retargeting offers and fast-loading landing pages.",
        metricValue: "+280%",
        metricLabel: "Conversion Volume Growth",
        badgeText: "Full Funnel",
        highlights: [
          { label: "Multi-Stage Retargeting Sequences", tag: "Warm Prospects" },
          { label: "Dedicated Ad Landing Page Design", tag: "Fast & Clear" },
          { label: "Weekly Budget & Bid Optimization", tag: "Scale Winners" },
        ],
      },
    ],
  },
  "web-foundry": {
    eyebrow: "What We Deliver",
    heading: "Custom Websites Built For",
    headingAccent: "Speed & Sales",
    sub: "We design and code fast, mobile-first websites that represent your brand professionally and turn visitors into inquiries.",
    cards: [
      {
        icon: Globe,
        pillarTag: "Modern Engineering",
        title: "Fast React & Next.js Development",
        description: "No bloated templates or slow plugins. We build clean, custom-coded websites that load almost instantly on any device.",
        metricValue: "< 1 Sec",
        metricLabel: "Average Page Load Time",
        badgeText: "Custom Code",
        highlights: [
          { label: "Modern React & Next.js Architecture", tag: "Future-Proof" },
          { label: "Global CDN & Edge Image Optimization", tag: "Instant Load" },
          { label: "100/100 Google PageSpeed Standards", tag: "SEO Ready" },
        ],
      },
      {
        icon: Layers,
        pillarTag: "UX & Web Design",
        title: "Conversion-Focused UI/UX Design",
        description: "Every page layout, headline, and call-to-action button is thoughtfully designed to guide visitors toward contacting you or buying.",
        metricValue: "+84%",
        metricLabel: "Higher Lead Conversion Rate",
        badgeText: "Bespoke UI",
        highlights: [
          { label: "Custom Wireframes & Figma Prototypes", tag: "Tailored Design" },
          { label: "Mobile-First Responsive Layouts", tag: "All Devices" },
          { label: "Clear Navigation & Frictionless Forms", tag: "More Inquiries" },
        ],
      },
      {
        icon: Cpu,
        pillarTag: "Easy Management",
        title: "Custom CMS & Business Integrations",
        description: "Update text, blogs, and products easily without touching code, while connecting seamlessly with your CRM and payment tools.",
        metricValue: "100%",
        metricLabel: "Easy Team Control",
        badgeText: "Seamless Sync",
        highlights: [
          { label: "Intuitive Content Management Dashboard", tag: "Easy Edits" },
          { label: "CRM, WhatsApp & Payment Gateway Integration", tag: "Connected" },
          { label: "Automated Lead Notification Workflows", tag: "Instant Alerts" },
        ],
      },
      {
        icon: ShieldCheck,
        pillarTag: "Security & Support",
        title: "Enterprise Security & Ongoing Care",
        description: "Your website stays protected around the clock with SSL encryption, automated backups, and dedicated technical support.",
        metricValue: "99.99%",
        metricLabel: "Guaranteed Uptime",
        badgeText: "Protected",
        highlights: [
          { label: "Cloudflare Firewall & DDoS Protection", tag: "Enterprise Safe" },
          { label: "Automated Daily Cloud Backups", tag: "Peace of Mind" },
          { label: "Dedicated Post-Launch Support Team", tag: "Always Available" },
        ],
      },
    ],
  },
  "viral-social": {
    eyebrow: "What We Deliver",
    heading: "Social Media That Builds",
    headingAccent: "Real Community",
    sub: "We handle your strategy, video production, and daily community management so your brand stays top-of-mind.",
    cards: [
      {
        icon: Video,
        pillarTag: "Short-Form Video",
        title: "High-Retention Reels & Shorts",
        description: "We script, shoot, and edit engaging vertical videos designed to capture attention in the first three seconds and grow organic reach.",
        metricValue: "3x",
        metricLabel: "Higher Average Watch Time",
        badgeText: "Reels & Shorts",
        highlights: [
          { label: "Hook Scripting & Storyboard Planning", tag: "Scroll-Stopping" },
          { label: "Professional Editing, Captions & Audio", tag: "Studio Quality" },
          { label: "Platform-Native Formats for IG & YouTube", tag: "Organic Reach" },
        ],
      },
      {
        icon: Layers,
        pillarTag: "Visual Content",
        title: "Branded Carousels & Editorial Posts",
        description: "Educational carousels and clean brand graphics that explain your expertise clearly and encourage saves and shares.",
        metricValue: "4.2x",
        metricLabel: "Engagement Rate Lift",
        badgeText: "On-Brand Design",
        highlights: [
          { label: "Educational & Storytelling Carousels", tag: "High Saves" },
          { label: "Consistent Brand Visual Grid", tag: "Premium Look" },
          { label: "Monthly Content Calendar Approval", tag: "Planned Ahead" },
        ],
      },
      {
        icon: Users,
        pillarTag: "Audience Growth",
        title: "Active Community & DM Management",
        description: "We turn followers into customers by responding promptly to comments, managing DM inquiries, and building genuine conversations.",
        metricValue: "< 15m",
        metricLabel: "Response Turnaround",
        badgeText: "Active Care",
        highlights: [
          { label: "Comment & Direct Message Engagement", tag: "Human Touch" },
          { label: "Automated DM Lead Capture Flows", tag: "Instant Replies" },
          { label: "Profile Bio & Link Funnel Optimization", tag: "More Clicks" },
        ],
      },
      {
        icon: BarChart3,
        pillarTag: "Insights & Growth",
        title: "Social SEO & Performance Analytics",
        description: "We optimize captions and keywords for Instagram and YouTube search while tracking which posts actually bring inquiries.",
        metricValue: "10M+",
        metricLabel: "Client Organic Impressions",
        badgeText: "Data Backed",
        highlights: [
          { label: "Social Search Keyword Optimization", tag: "Discoverable" },
          { label: "Competitor Content & Trend Analysis", tag: "Stay Ahead" },
          { label: "Clear Monthly Growth & Lead Reports", tag: "Transparent ROI" },
        ],
      },
    ],
  },
  "influencer-network": {
    eyebrow: "What We Deliver",
    heading: "Creator Partnerships That Drive",
    headingAccent: "Genuine Trust",
    sub: "We connect your brand with vetted regional and national creators whose audiences actually care about what you offer.",
    cards: [
      {
        icon: Sparkles,
        pillarTag: "Creator Vetting",
        title: "Authentic Creator Selection & Audit",
        description: "We look past vanity follower counts and audit audience demographics and real engagement so you never pay for fake followers.",
        metricValue: "100%",
        metricLabel: "Vetted Real Audiences",
        badgeText: "Zero Fake Bots",
        highlights: [
          { label: "Audience Quality & Authenticity Check", tag: "Verified Data" },
          { label: "Local & Niche Creator Shortlisting", tag: "Right Fit" },
          { label: "Past Campaign Performance Review", tag: "Proven Creators" },
        ],
      },
      {
        icon: PenTool,
        pillarTag: "Creative Direction",
        title: "Campaign Briefing & Story Scripting",
        description: "We write clear creative briefs that let creators speak naturally in their own voice while highlighting your core product benefits.",
        metricValue: "2.8x",
        metricLabel: "Higher Video Completion",
        badgeText: "Natural Stories",
        highlights: [
          { label: "Custom Creator Briefs & Talking Points", tag: "Clear Messaging" },
          { label: "Product Seeding & Unboxing Coordination", tag: "End-to-End" },
          { label: "Content Review & Brand Safety Approval", tag: "Quality Control" },
        ],
      },
      {
        icon: Target,
        pillarTag: "Contracts & Logistics",
        title: "Negotiation, Usage Rights & Management",
        description: "Our team handles all pricing negotiations, legal agreements, posting schedules, and content licensing rights on your behalf.",
        metricValue: "Zero",
        metricLabel: "Management Hassle For You",
        badgeText: "Full Service",
        highlights: [
          { label: "Fair Rate Negotiation & Contracting", tag: "Cost Effective" },
          { label: "Paid Ad Whitelisting & Usage Rights", tag: "Repurpose Ready" },
          { label: "Strict Posting Timeline Coordination", tag: "On Schedule" },
        ],
      },
      {
        icon: BarChart3,
        pillarTag: "Sales Tracking",
        title: "Trackable Links & ROI Reporting",
        description: "Every creator gets custom tracking links and promo codes so you can see exactly how many visits, leads, and sales they generated.",
        metricValue: "3.8x",
        metricLabel: "Average Campaign ROAS",
        badgeText: "Measured ROI",
        highlights: [
          { label: "Custom UTM Links & Discount Codes", tag: "Direct Tracking" },
          { label: "Top-Performing Creator Ad Boosting", tag: "Scale Winners" },
          { label: "Post-Campaign Sales & Reach Summary", tag: "Full Clarity" },
        ],
      },
    ],
  },
  "content-smithy": {
    eyebrow: "What We Deliver",
    heading: "Strategic Content That Builds",
    headingAccent: "Industry Authority",
    sub: "Well-researched articles, landing page copy, and guides written by experienced writers who understand your industry.",
    cards: [
      {
        icon: PenTool,
        pillarTag: "Website & Sales Copy",
        title: "Persuasive Landing Page & Website Copy",
        description: "Clear, compelling copywriting that explains your value in seconds, answers customer objections, and increases inquiries.",
        metricValue: "+65%",
        metricLabel: "Page Conversion Improvement",
        badgeText: "Sales Focused",
        highlights: [
          { label: "Customer Pain-Point & Value Messaging", tag: "Clear & Direct" },
          { label: "Service & Product Page Copywriting", tag: "Action Oriented" },
          { label: "Brand Tone of Voice Guidelines", tag: "Consistent" },
        ],
      },
      {
        icon: Search,
        pillarTag: "Organic Growth",
        title: "SEO Articles & Topic Guides",
        description: "In-depth, genuinely helpful articles that rank on Google and answer the exact questions your potential buyers are researching.",
        metricValue: "#1–3",
        metricLabel: "Target Keyword Rankings",
        badgeText: "Human Written",
        highlights: [
          { label: "Subject-Matter Expert Research", tag: "No Fluff" },
          { label: "Search Intent & Keyword Structuring", tag: "Ranks Long-Term" },
          { label: "Internal Linking & Readability Polish", tag: "Reader Friendly" },
        ],
      },
      {
        icon: Award,
        pillarTag: "B2B & Executive",
        title: "Case Studies, Whitepapers & LinkedIn",
        description: "Turn your client success stories and founder insights into authoritative case studies and executive LinkedIn posts.",
        metricValue: "3.1x",
        metricLabel: "More Inbound B2B Leads",
        badgeText: "Thought Leadership",
        highlights: [
          { label: "Client Success Story Interviews & Writing", tag: "Social Proof" },
          { label: "Downloadable Industry Guides & PDFs", tag: "Lead Magnets" },
          { label: "Founder & Executive LinkedIn Ghostwriting", tag: "Authority" },
        ],
      },
      {
        icon: Cpu,
        pillarTag: "Content Distribution",
        title: "Content Repurposing & AI Formatting",
        description: "We structure every long-form piece so it gets cited by AI search engines and can be easily shared across email and social.",
        metricValue: "5x",
        metricLabel: "More Mileage Per Article",
        badgeText: "Multi-Channel",
        highlights: [
          { label: "Structured Q&A Summaries for AI Search", tag: "GEO Ready" },
          { label: "Blog-to-Newsletter & Social Snippets", tag: "Omnichannel" },
          { label: "Quarterly Content Refresh & Updates", tag: "Always Current" },
        ],
      },
    ],
  },
  "inbox-edge": {
    eyebrow: "What We Deliver",
    heading: "Email Marketing That Drives",
    headingAccent: "Repeat Sales",
    sub: "We build automated email flows and engaging newsletters that land in the primary inbox and turn one-time buyers into loyal customers.",
    cards: [
      {
        icon: ShieldCheck,
        pillarTag: "Inbox Placement",
        title: "Deliverability & Domain Setup",
        description: "We configure your email authentication and clean your subscriber lists so your messages land in the primary inbox—never spam.",
        metricValue: "99.8%",
        metricLabel: "Primary Inbox Delivery Rate",
        badgeText: "Zero Spam Risk",
        highlights: [
          { label: "SPF, DKIM & DMARC Authentication", tag: "Verified Sender" },
          { label: "Subscriber List Hygiene & Bounce Removal", tag: "Clean Lists" },
          { label: "Sender Reputation Warming & Monitoring", tag: "High Trust" },
        ],
      },
      {
        icon: MessageSquare,
        pillarTag: "24/7 Automations",
        title: "Automated Lifecycle & Cart Flows",
        description: "Set up once, earn continuously. We build welcome sequences, abandoned cart reminders, and win-back flows that generate revenue automatically.",
        metricValue: "+38%",
        metricLabel: "Revenue From Automations",
        badgeText: "Always Working",
        highlights: [
          { label: "Multi-Step Welcome & Onboarding Series", tag: "First Impression" },
          { label: "Abandoned Cart & Checkout Recovery", tag: "Recover Sales" },
          { label: "Post-Purchase & Win-Back Sequences", tag: "Higher LTV" },
        ],
      },
      {
        icon: Target,
        pillarTag: "Smart Segmentation",
        title: "Personalized Campaigns & Newsletters",
        description: "Send the right message to the right person based on their past purchases and interests rather than blasting everyone the same email.",
        metricValue: "42%",
        metricLabel: "Average Open Rate",
        badgeText: "Targeted Lists",
        highlights: [
          { label: "VIP, Repeat & Inactive Buyer Segments", tag: "Relevant Offers" },
          { label: "Custom Mobile-Responsive Email Templates", tag: "Clean Design" },
          { label: "Subject Line & Send-Time A/B Testing", tag: "More Opens" },
        ],
      },
      {
        icon: BarChart3,
        pillarTag: "List & Revenue Growth",
        title: "Lead Capture & Revenue Analytics",
        description: "Grow your email list with non-intrusive website sign-up forms and track exact revenue generated from every single email sent.",
        metricValue: "36x",
        metricLabel: "Average Email Marketing ROI",
        badgeText: "Klaviyo & HubSpot",
        highlights: [
          { label: "High-Converting Website Popups & Forms", tag: "List Growth" },
          { label: "Klaviyo, HubSpot & Mailchimp Management", tag: "Expert Setup" },
          { label: "Monthly Revenue-Per-Subscriber Reporting", tag: "Clear ROI" },
        ],
      },
    ],
  },
  "brand-anvil": {
    eyebrow: "What We Deliver",
    heading: "Clear Brand Strategy That Sets You",
    headingAccent: "Apart",
    sub: "We help you define what makes your business different, who you serve best, and how to communicate your value with confidence.",
    cards: [
      {
        icon: Target,
        pillarTag: "Market Positioning",
        title: "Competitive Positioning & Differentiation",
        description: "Stop sounding like every other competitor. We identify your strongest market advantage and position your brand as the clear choice.",
        metricValue: "100%",
        metricLabel: "Market Clarity & Focus",
        badgeText: "Stand Out",
        highlights: [
          { label: "Deep Competitor & Category Audit", tag: "Find Your Edge" },
          { label: "Ideal Customer Profile (ICP) Mapping", tag: "Target Buyers" },
          { label: "Unique Value Proposition Architecture", tag: "Why Choose You" },
        ],
      },
      {
        icon: PenTool,
        pillarTag: "Brand Messaging",
        title: "Brand Story & Messaging Framework",
        description: "We craft your core brand story, elevator pitch, taglines, and key talking points so your entire team communicates with one clear voice.",
        metricValue: "3.5x",
        metricLabel: "Stronger Brand Recall",
        badgeText: "Clear Story",
        highlights: [
          { label: "Core Brand Narrative & Origin Story", tag: "Authentic" },
          { label: "Taglines, Headlines & Elevator Pitch", tag: "Memorable" },
          { label: "Tone of Voice & Communication Playbook", tag: "Team Aligned" },
        ],
      },
      {
        icon: Layers,
        pillarTag: "Offer Structure",
        title: "Product & Service Naming Architecture",
        description: "Organize your services, products, or sub-brands into a simple, logical structure that customers can understand and buy easily.",
        metricValue: "+45%",
        metricLabel: "Higher Average Deal Size",
        badgeText: "Premium Value",
        highlights: [
          { label: "Brand & Product Naming Exploration", tag: "Distinctive" },
          { label: "Service Tier & Packaging Strategy", tag: "Clear Options" },
          { label: "Value-Based Pricing Positioning", tag: "Higher Margins" },
        ],
      },
      {
        icon: Award,
        pillarTag: "Launch Playbook",
        title: "Go-To-Market & Rollout Roadmap",
        description: "A practical, step-by-step guide to rolling out your refreshed brand positioning across your website, sales deck, and marketing channels.",
        metricValue: "Ready",
        metricLabel: "Complete Strategy Playbook",
        badgeText: "Actionable",
        highlights: [
          { label: "Sales Deck & Pitch Narrative Alignment", tag: "Close Deals" },
          { label: "Website & Social Rollout Checklist", tag: "Smooth Launch" },
          { label: "Leadership & Sales Team Workshop", tag: "Full Buy-In" },
        ],
      },
    ],
  },
  "visual-id": {
    eyebrow: "What We Deliver",
    heading: "Timeless Visual Identity &",
    headingAccent: "Design Systems",
    sub: "From your logo and color palette to packaging and digital templates, we craft a cohesive visual identity that looks world-class everywhere.",
    cards: [
      {
        icon: Layers,
        pillarTag: "Core Identity",
        title: "Logo Design & Visual Mark System",
        description: "We design distinctive, versatile logos and brand marks that work effortlessly on everything from a tiny app icon to a highway billboard.",
        metricValue: "100%",
        metricLabel: "Original Custom Artwork",
        badgeText: "Bespoke Craft",
        highlights: [
          { label: "Primary Logo, Wordmark & Icon Variations", tag: "All Formats" },
          { label: "Scalable Vector Master Files (SVG, EPS, PDF)", tag: "Print & Web" },
          { label: "Clear Space & Logo Usage Rules", tag: "Protected" },
        ],
      },
      {
        icon: Sparkles,
        pillarTag: "Color & Type",
        title: "Typography, Color & Graphic Language",
        description: "Carefully paired fonts, accessible color palettes, and custom patterns that give your brand an unmistakable look and feel.",
        metricValue: "Complete",
        metricLabel: "Visual Brand System",
        badgeText: "Cohesive Look",
        highlights: [
          { label: "Print, Web & Pantone Color Palettes", tag: "Exact Codes" },
          { label: "Heading & Body Typography Hierarchy", tag: "Readable" },
          { label: "Custom Iconography & Brand Patterns", tag: "Unique Assets" },
        ],
      },
      {
        icon: Globe,
        pillarTag: "Brand Collateral",
        title: "Pitch Decks, Stationery & Packaging",
        description: "Ready-to-use business cards, letterheads, investor pitch decks, social templates, and product packaging designed to impress.",
        metricValue: "Ready",
        metricLabel: "Day-One Marketing Assets",
        badgeText: "Print & Digital",
        highlights: [
          { label: "Business Cards, Letterheads & Merchandise", tag: "Print Ready" },
          { label: "Editable Sales & Investor Pitch Decks", tag: "Win Clients" },
          { label: "Social Media & Banner Design Templates", tag: "Fast Posting" },
        ],
      },
      {
        icon: Award,
        pillarTag: "Brand Book",
        title: "Comprehensive Brand Style Guide",
        description: "A clear, easy-to-follow brand guideline book and Figma asset library so your internal team and vendors stay 100% consistent.",
        metricValue: "Figma",
        metricLabel: "Organized Asset Library",
        badgeText: "Easy Handoff",
        highlights: [
          { label: "Complete PDF Brand Guidelines Book", tag: "Step-by-Step" },
          { label: "Shared Figma Component & Token Library", tag: "Team Ready" },
          { label: "Do's and Don'ts Visual Examples", tag: "Zero Confusion" },
        ],
      },
    ],
  },
  "commercial-video": {
    eyebrow: "What We Deliver",
    heading: "Studio Video Production That",
    headingAccent: "Captures Attention",
    sub: "From concept and scripting to filming and color grading, we produce polished commercial videos that elevate your brand and drive sales.",
    cards: [
      {
        icon: PenTool,
        pillarTag: "Pre-Production",
        title: "Creative Concept, Scripting & Storyboards",
        description: "Every great video starts with a strong script. We plan every shot, location, and voiceover line before the cameras ever roll.",
        metricValue: "100%",
        metricLabel: "Planned Shot-by-Shot",
        badgeText: "Script to Screen",
        highlights: [
          { label: "Commercial Scriptwriting & Hook Variations", tag: "Story Driven" },
          { label: "Visual Storyboards & Shot Lists", tag: "Clear Vision" },
          { label: "Casting, Location Scouting & Scheduling", tag: "Full Prep" },
        ],
      },
      {
        icon: Video,
        pillarTag: "Production",
        title: "4K Cinema Filming & Studio Lighting",
        description: "Our production crew shoots on cinema-grade 4K cameras with professional lighting and crystal-clear audio at your site or our studio.",
        metricValue: "4K Raw",
        metricLabel: "Cinema Camera Quality",
        badgeText: "Pro Crew",
        highlights: [
          { label: "Cinema Cameras, Gimbals & Drone Footage", tag: "High Production" },
          { label: "Professional Studio & On-Site Lighting", tag: "Crisp Visuals" },
          { label: "Broadcast-Quality Lavalier & Boom Audio", tag: "Clean Sound" },
        ],
      },
      {
        icon: Layers,
        pillarTag: "Post-Production",
        title: "Editing, Motion Graphics & Color Grading",
        description: "We bring your footage to life with tight pacing, custom 2D/3D motion graphics, licensed music, and cinema color grading.",
        metricValue: "+220%",
        metricLabel: "Ad Click-Through Lift",
        badgeText: "Studio Finish",
        highlights: [
          { label: "Dynamic Pacing & Story Editing", tag: "High Retention" },
          { label: "Custom Title Animations & Lower Thirds", tag: "Branded Motion" },
          { label: "DaVinci Resolve Color Grading & Sound Mix", tag: "Cinema Polish" },
        ],
      },
      {
        icon: Globe,
        pillarTag: "Multi-Format Delivery",
        title: "Ad Cutdowns for TV, Web & Social",
        description: "Get maximum value from every shoot with tailored aspect ratios and hook variations ready for YouTube, Instagram, LinkedIn, and TV.",
        metricValue: "All Sizes",
        metricLabel: "16:9, 9:16 & 1:1 Formats",
        badgeText: "Ad Ready",
        highlights: [
          { label: "60s Main Film + 30s & 15s Ad Cutdowns", tag: "More Assets" },
          { label: "Vertical Reels & YouTube Ad Formats", tag: "Every Platform" },
          { label: "Subtitled & Clean Master File Delivery", tag: "Ready to Launch" },
        ],
      },
    ],
  },
  "cro-revenue": {
    eyebrow: "What We Deliver",
    heading: "Turn More Website Visitors Into",
    headingAccent: "Paying Customers",
    sub: "You don't always need more traffic—you need your existing traffic to convert better. We find and fix the leaks in your sales funnel.",
    cards: [
      {
        icon: Search,
        pillarTag: "User Research",
        title: "Heatmaps, Session Replays & Funnel Audit",
        description: "We study how real visitors scroll, click, and drop off on your website to uncover the exact friction points costing you sales.",
        metricValue: "100%",
        metricLabel: "Data-Backed Audit",
        badgeText: "No Guesswork",
        highlights: [
          { label: "Click, Scroll & Attention Heatmap Analysis", tag: "Real Behavior" },
          { label: "Checkout & Lead Form Drop-Off Audit", tag: "Fix Leaks" },
          { label: "Mobile vs. Desktop Usability Review", tag: "Every Device" },
        ],
      },
      {
        icon: Layers,
        pillarTag: "Landing Page UX",
        title: "Page Redesign & Copy Optimization",
        description: "We sharpen your headlines, simplify your forms, and place trust badges and testimonials right where buyers need reassurance.",
        metricValue: "+84%",
        metricLabel: "Average Conversion Rate Lift",
        badgeText: "Higher Clarity",
        highlights: [
          { label: "Above-the-Fold Value Proposition Clarity", tag: "Instant Hook" },
          { label: "Simplified Multi-Step Lead & Checkout Forms", tag: "Less Friction" },
          { label: "Strategic Social Proof & Trust Placement", tag: "Higher Trust" },
        ],
      },
      {
        icon: Target,
        pillarTag: "Split Testing",
        title: "Structured A/B Testing Experiments",
        description: "We test new page layouts, offers, and call-to-action buttons against your current page so you only roll out proven winners.",
        metricValue: "Verified",
        metricLabel: "Measured Revenue Lift",
        badgeText: "A/B Tested",
        highlights: [
          { label: "Headline, CTA & Layout Split Testing", tag: "Head-to-Head" },
          { label: "Pricing Page & Offer Presentation Tests", tag: "Higher AOV" },
          { label: "Clean Test Implementation Without Slowdowns", tag: "Fast Code" },
        ],
      },
      {
        icon: BarChart3,
        pillarTag: "Ongoing Gains",
        title: "Speed Tuning & Revenue Reporting",
        description: "Even a one-second delay reduces conversions. We optimize page speed and provide clear monthly reports showing your extra revenue earned.",
        metricValue: "2.4x",
        metricLabel: "More Leads From Same Traffic",
        badgeText: "Compounding ROI",
        highlights: [
          { label: "Mobile Checkout & Page Speed Tuning", tag: "Zero Lag" },
          { label: "Average Order Value (AOV) Upsell Flows", tag: "More Revenue" },
          { label: "Monthly Experiment & ROI Summary", tag: "Clear Numbers" },
        ],
      },
    ],
  },
  "reputation-shield": {
    eyebrow: "What We Deliver",
    heading: "Protect & Strengthen Your",
    headingAccent: "Brand Reputation",
    sub: "Customers check your reviews and search results before they ever call you. We help you earn more 5-star reviews and maintain a trusted presence.",
    cards: [
      {
        icon: ShieldCheck,
        pillarTag: "24/7 Monitoring",
        title: "Review & Brand Mention Monitoring",
        description: "We keep watch over Google, Glassdoor, social media, and news sites so you know immediately whenever your business is mentioned.",
        metricValue: "24/7",
        metricLabel: "Active Brand Monitoring",
        badgeText: "Always Alert",
        highlights: [
          { label: "Google, Trustpilot & Glassdoor Tracking", tag: "All Platforms" },
          { label: "Instant Alerts for New Reviews & Mentions", tag: "Fast Response" },
          { label: "Professional Review Response Management", tag: "Brand Voice" },
        ],
      },
      {
        icon: Award,
        pillarTag: "Review Growth",
        title: "5-Star Customer Review Generation",
        description: "Most happy customers forget to leave a review unless asked simply. We set up polite, automated WhatsApp and email prompts to grow your ratings.",
        metricValue: "4.9★",
        metricLabel: "Average Client Star Rating",
        badgeText: "Real Customers",
        highlights: [
          { label: "One-Click WhatsApp & SMS Review Requests", tag: "Easy For Buyers" },
          { label: "Private Feedback Filter for Unhappy Experiences", tag: "Resolve Early" },
          { label: "Steady Monthly Growth in Verified Reviews", tag: "Local Trust" },
        ],
      },
      {
        icon: Search,
        pillarTag: "Search Protection",
        title: "Page-One Search Result Management",
        description: "We publish and optimize positive articles, profiles, and press features so the first page of Google reflects your true track record.",
        metricValue: "Page 1",
        metricLabel: "Positive Brand Search Results",
        badgeText: "SERP Control",
        highlights: [
          { label: "Owned Brand Profiles & Directory Authority", tag: "Control Page 1" },
          { label: "Positive PR & Featured Article Publishing", tag: "Strong Proof" },
          { label: "Unfair & Defamatory Content Takedown Requests", tag: "Policy Action" },
        ],
      },
      {
        icon: Cpu,
        pillarTag: "AI & Crisis Readiness",
        title: "Crisis Response & AI Search Accuracy",
        description: "We ensure AI assistants like ChatGPT describe your company accurately and give your team a clear playbook for handling any PR challenges.",
        metricValue: "100%",
        metricLabel: "Prepared & Protected",
        badgeText: "Executive Care",
        highlights: [
          { label: "Accurate Brand Facts for AI Search Tools", tag: "True Info" },
          { label: "Executive & Founder Personal Brand Protection", tag: "Leadership" },
          { label: "Rapid Crisis Communication Support", tag: " Calm & Clear" },
        ],
      },
    ],
  },
};

// Aliases for regional routes
SERVICE_BENTO_CONFIGS["seo-company-coimbatore"] = SERVICE_BENTO_CONFIGS["seo-geo"];
SERVICE_BENTO_CONFIGS["ppc-company-coimbatore"] = SERVICE_BENTO_CONFIGS["paid-media"];
SERVICE_BENTO_CONFIGS["website-development-company-coimbatore"] = SERVICE_BENTO_CONFIGS["web-foundry"];
SERVICE_BENTO_CONFIGS["web-development-company-coimbatore"] = SERVICE_BENTO_CONFIGS["web-foundry"];
SERVICE_BENTO_CONFIGS["social-media-marketing-company-coimbatore"] = SERVICE_BENTO_CONFIGS["viral-social"];
SERVICE_BENTO_CONFIGS["social-media-agency-coimbatore"] = SERVICE_BENTO_CONFIGS["viral-social"];
SERVICE_BENTO_CONFIGS["influencer-marketing-coimbatore"] = SERVICE_BENTO_CONFIGS["influencer-network"];
SERVICE_BENTO_CONFIGS["content-marketing-agency-coimbatore"] = SERVICE_BENTO_CONFIGS["content-smithy"];
SERVICE_BENTO_CONFIGS["content-marketing-company-coimbatore"] = SERVICE_BENTO_CONFIGS["content-smithy"];
SERVICE_BENTO_CONFIGS["email-marketing-company-coimbatore"] = SERVICE_BENTO_CONFIGS["inbox-edge"];
SERVICE_BENTO_CONFIGS["email-marketing-agency-coimbatore"] = SERVICE_BENTO_CONFIGS["inbox-edge"];
SERVICE_BENTO_CONFIGS["brand-positioning-agency-coimbatore"] = SERVICE_BENTO_CONFIGS["brand-anvil"];
SERVICE_BENTO_CONFIGS["brand-position-agency-coimbatore"] = SERVICE_BENTO_CONFIGS["brand-anvil"];
SERVICE_BENTO_CONFIGS["brand-positioning-company-coimbatore"] = SERVICE_BENTO_CONFIGS["brand-anvil"];
SERVICE_BENTO_CONFIGS["brand-identity-design-agency-coimbatore"] = SERVICE_BENTO_CONFIGS["visual-id"];
SERVICE_BENTO_CONFIGS["brand-identity-design-company-coimbatore"] = SERVICE_BENTO_CONFIGS["visual-id"];
SERVICE_BENTO_CONFIGS["video-production-editing-company-coimbatore"] = SERVICE_BENTO_CONFIGS["commercial-video"];
SERVICE_BENTO_CONFIGS["brand-reputation-management-coimbatore"] = SERVICE_BENTO_CONFIGS["reputation-shield"];

export default function Seo3DBentoGrid({ data, slug }) {
  const currentSlug = (data && data.slug) || slug || "seo-geo";
  const config = SERVICE_BENTO_CONFIGS[currentSlug] || SERVICE_BENTO_CONFIGS["seo-geo"];

  return (
    <section className="bf-bento-section-root" id="seo-bento-grid">
      <style>{gridStyles}</style>
      <KexsioCanvasBackground theme="light" opacity={0.45} />

      <div className="bf-bento-container">
        <div className="bf-bento-header text-center">
          <div className="bf-bento-eyebrow">
            <Sparkles size={13} className="eyebrow-icon" />
            <span>{config.eyebrow}</span>
          </div>
          <h2 className="bf-bento-heading">
            {config.heading} <span className="bf-bento-heading-glow">{config.headingAccent}</span>
          </h2>
          <p className="bf-bento-sub">
            {config.sub}
          </p>
        </div>

        {/* 2x2 Capability Grid */}
        <div className="bf-bento-cards-grid">
          {config.cards.map((card, idx) => (
            <Seo3DBentoCard
              key={idx}
              index={idx}
              icon={card.icon}
              pillarTag={card.pillarTag}
              title={card.title}
              description={card.description}
              metricValue={card.metricValue}
              metricLabel={card.metricLabel}
              badgeText={card.badgeText}
              highlights={card.highlights}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const gridStyles = `
  .bf-bento-section-root {
    position: relative;
    overflow: hidden;
    background: #FAFAFC;
    padding: 96px 20px 104px;
    color: #0A0A0C;
    border-bottom: 1px solid #E5E7EB;
  }

  .bf-bento-container {
    position: relative;
    z-index: 2;
    max-width: 1200px;
    margin: 0 auto;
  }

  .bf-bento-header {
    max-width: 700px;
    margin: 0 auto 56px;
    text-align: center;
  }

  .bf-bento-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 16px;
    border-radius: 999px;
    background: #FFFFFF;
    border: 1px solid #E5E7EB;
    color: #0A0A0C;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    margin-bottom: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  }

  .eyebrow-icon {
    color: #EF4136;
  }

  .bf-bento-heading {
    font-family: "Outfit", sans-serif;
    font-size: clamp(30px, 4.2vw, 48px);
    font-weight: 900;
    line-height: 1.15;
    letter-spacing: -0.02em;
    color: #0A0A0C;
    margin-bottom: 16px;
  }

  .bf-bento-heading-glow {
    color: #EF4136;
  }

  .bf-bento-sub {
    font-size: 1.05rem;
    line-height: 1.65;
    color: #4B5563;
    font-family: "Plus Jakarta Sans", sans-serif;
    margin: 0;
  }

  .bf-bento-cards-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 28px;
  }

  @media (max-width: 900px) {
    .bf-bento-cards-grid {
      grid-template-columns: 1fr;
    }
  }
`;
