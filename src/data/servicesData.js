import {
  Search,
  Sparkles,
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
  Cpu,

  Zap,
  BarChart3,
  Layers,
  TrendingUp,
  Globe,
  Award,
} from "lucide-react";

/* ───────────────────────────────────────────────────────────────────────────
   BRANDFORGE 12 SERVICES MASTER DATA REGISTRY
   Rich Light-Theme Content, Metrics, Pillars, Comparison & FAQs for all 12 Services.
   ─────────────────────────────────────────────────────────────────────────── */

export const servicesData = {
  "seo-geo": {
    slug: "seo-geo",
    urlSlug: "/seo-company-coimbatore",
    metaTitle: "SEO Company in Coimbatore | SEO & GEO Services – Brand Forge",
    metaDescription: "Brand Forge is a trusted SEO company in Coimbatore offering SEO, GEO (Generative Engine Optimization), and local search services to help businesses rank higher on Google and AI search engines.",
    number: "01",
    eyebrow: "SEO Company in Coimbatore | SEO & GEO Services by Brand Forge",
    title: "Best SEO Company in Coimbatore for Google & AI Search Rankings",
    heroButtonText: "Get a Free SEO Audit →",
    subtitle: [
      "If you're searching for an SEO company in Coimbatore that actually understands how people search today, you're in the right place. Search has split into two paths — Google's traditional results and AI-generated answers from tools like ChatGPT, Gemini, and Perplexity. Brand Forge is a Coimbatore-based SEO agency built to win both.",
      "We work with businesses across Coimbatore — from local service providers to education institutions and D2C brands — to improve organic visibility through proven SEO strategy combined with GEO Services (Generative Engine Optimization), so you show up wherever your customers are actually searching."
    ],
    bannerBg: "/banner-seo-geo-bg.jpg",
    icon: Search,
    metrics: [
      { value: "+340%", label: "Organic Revenue Lift", desc: "Average L12M increase across client portfolio" },
      { value: "#1 Rank", label: "AI Answer Citation", desc: "Top recommendation position on ChatGPT & Perplexity" },
      { value: "sub-200ms", label: "Core Web Vitals", desc: "100/100 Lighthouse performance benchmark" },
      { value: "10x", label: "GEO Search Dominance", desc: "Faster indexing across AI LLM Knowledge Graphs" },
    ],
    whyChooseUs: {
      tag: "WHY CHOOSE BRAND FORGE",
      title: "Why Businesses in Coimbatore Choose Brand Forge as Their SEO Company",
      description: "Coimbatore's digital market is growing fast, and so is the competition for search visibility. As a local SEO company in Coimbatore, we combine on-ground market knowledge with data-driven SEO practices to help businesses rank for the keywords that actually bring in customers — not just traffic.",
      leadIn: "Our approach covers the full picture of modern search visibility:",
      points: [
        "Ranking on Google's organic search results",
        "Appearing in Google's Local Pack and Maps for “near me” searches",
        "Getting cited by AI search engines and AI Overviews through GEO Services",
        "Building long-term organic authority, not short-lived ranking spikes"
      ]
    },
    matrixTag: "PARADIGM SHIFT",
    matrixTitle: "THE EVOLUTION FROM SEO TO GEO",
    matrixSubtitle: "Search is no longer just typing keywords into a box. Millions of buyers now ask AI assistants for direct brand recommendations.",
    matrixRows: [
      { feature: "Primary Audience", traditional: "Google & Bing Crawler Bots", brandforge: "LLM AI Assistants (ChatGPT, Perplexity, Gemini, Claude)" },
      { feature: "Ranking Mechanism", traditional: "Keywords, Backlinks, Static Indexing", brandforge: "Semantic Vectors, Knowledge Graphs & Entity Authority" },
      { feature: "Search Output Format", traditional: "10 Blue Links & Ad Banners", brandforge: "Direct Conversational AI Answers & Recommended Citations" },
      { feature: "User Conversion", traditional: "Multi-click browsing loop", brandforge: "Immediate single-prompt purchase decision" },
    ],
    pillarsTag: "OUR SERVICES",
    pillarsTitle: "Our SEO & GEO Services in Coimbatore",
    pillarsSubtitle: "As a full-service SEO company in Coimbatore, we handle every layer of organic search visibility and generative AI answers.",
    pillars: [
      {
        icon: Search,
        tag: "FULL-SERVICE SEO",
        title: "Search Engine Optimization (SEO)",
        description: "As a full-service SEO company in Coimbatore, we handle every layer of organic search visibility:",
        deliverables: [
          "Technical SEO — site speed, crawlability, indexing, Core Web Vitals, mobile optimization",
          "On-page SEO — keyword-optimized titles, meta descriptions, header structure, internal linking",
          "Keyword research — identifying high-intent local and industry keywords your customers actually search",
          "Content strategy & optimization — content built around real search intent, not keyword stuffing",
          "Local SEO — Google Business Profile optimization, NAP consistency, local citations for Coimbatore-based searches",
          "Link building — earning authoritative backlinks that build long-term domain trust",
          "SEO reporting — transparent, monthly ranking and traffic reports"
        ]
      },
      {
        icon: Cpu,
        tag: "GEO SERVICES",
        title: "GEO Services (Generative Engine Optimization)",
        description: "Search isn't limited to Google anymore. Our GEO Services help your brand get discovered and cited inside AI-generated answers:",
        callout: "Think of GEO as the natural evolution of SEO — the goal is still visibility, but the destination has expanded from search result pages to AI-generated answers.",
        deliverables: [
          "Structuring content so AI search engines can accurately extract and cite your information",
          "Building topical authority around your core services and expertise",
          "Implementing structured data and schema markup that helps AI models understand your business",
          "Creating clear, quotable, fact-based content that AI engines prefer to reference",
          "Tracking your brand's visibility across AI Overviews, ChatGPT, and other generative search tools",
          "Aligning GEO Services with traditional SEO so both channels reinforce each other, rather than competing for resources"
        ]
      },
      {
        icon: Globe,
        tag: "LOCAL VISIBILITY",
        title: "Local SEO & Google Business Profile Management",
        description: "For Coimbatore-based businesses, local search visibility is often the fastest path to real customers. We optimize:",
        deliverables: [
          "Google Business Profile listings, categories, and photos",
          "Review generation and management",
          "Local citation consistency across directories",
          "Location-specific landing pages for multi-branch businesses"
        ]
      },
      {
        icon: PenTool,
        tag: "USEFUL CONTENT",
        title: "Content Marketing",
        description: "Search engines and AI engines both reward genuinely useful content. We create content that reads naturally for your audience while satisfying the technical structure search engines and AI models look for — no robotic, keyword-stuffed writing.",
        deliverables: [
          "Audience-first educational articles and guides",
          "Technical schema markup integration",
          "Natural semantic keyword density",
          "High-conversion informational assets"
        ]
      },
      {
        icon: BarChart3,
        tag: "TRANSPARENCY",
        title: "SEO Strategy & Reporting",
        description: "Every engagement includes a clear roadmap and monthly performance reporting, so you always know what's working, what's next, and why.",
        deliverables: [
          "Transparent monthly ranking & traffic dashboards",
          "Competitor gap and opportunity tracking",
          "Clear next-month roadmap deliverables",
          "Conversion and lead attribution metrics"
        ]
      }
    ],
    differentiators: {
      tag: "THE BRAND FORGE DIFFERENCE",
      title: "What Makes Our SEO Company Different",
      subtitle: "Most agencies in Coimbatore are still purely Google-focused; we're already optimizing for the AI search shift.",
      items: [
        {
          title: "SEO and GEO Under One Roof",
          description: "Most agencies in Coimbatore are still purely Google-focused; we're already optimizing for the AI search shift.",
          icon: Zap
        },
        {
          title: "Local Market Understanding",
          description: "We know how Coimbatore audiences search and behave online.",
          icon: Globe
        },
        {
          title: "Transparent Process",
          description: "No black-box reporting, no vague promises.",
          icon: ShieldCheck
        },
        {
          title: "Content Built for Humans First",
          description: "Because that's still what ranks best, on Google and on AI engines.",
          icon: Users
        }
      ]
    },
    faqs: [
      {
        q: "What does an SEO company in Coimbatore do?",
        a: "An SEO company improves your website's visibility on search engines through technical optimization, content strategy, local SEO, and authority building, helping the right customers find your business organically."
      },
      {
        q: "What is GEO (Generative Engine Optimization) and why does it matter now?",
        a: "GEO is the practice of optimizing content so AI search tools like ChatGPT, Gemini, and Google AI Overviews can find, understand, and cite your business in their answers. As more search behavior shifts to AI assistants, GEO is becoming as essential as traditional SEO."
      },
      {
        q: "How is GEO different from traditional SEO?",
        a: "Traditional SEO targets ranking positions on search engine results pages. GEO targets being cited or referenced inside AI-generated answers. The strategies overlap but require different content structuring — we run both together for maximum visibility."
      },
      {
        q: "How long does SEO take to show results in Coimbatore's competitive market?",
        a: "Most businesses see measurable ranking and traffic movement within 3-4 months, with stronger, compounding results over 6-12 months, depending on competition level and starting domain authority."
      },
      {
        q: "Do you only work with Coimbatore-based businesses?",
        a: "We're based in Coimbatore and specialize in local SEO here, but we also work with clients across Tamil Nadu and pan-India."
      },
      {
        q: "Can content alone get my website to rank on page 1?",
        a: "Strong content is essential but works alongside technical SEO health and backlink authority. As your SEO company, we make sure all three are aligned — content doesn't operate in isolation."
      }
    ],
    bottomCta: {
      title: "Get Found on Google and AI Search — Starting Today",
      subtitle: "Get a free audit of where your website currently stands, both on traditional search and emerging AI search engines.",
      buttonText: "Book Your Free Consultation →"
    }
  },
  
  "paid-media": {
    slug: "paid-media",
    urlSlug: "/ppc-company-coimbatore",
    metaTitle: "PPC Company in Coimbatore | Google & Meta Ads | BrandForge",
    metaDescription: "Looking for a PPC company in Coimbatore? BrandForge runs Google, Meta, YouTube & lead-gen ads that convert. Get a free ad account audit this week.",
    number: "02",
    eyebrow: "PPC Company in Coimbatore | Ignition Ads by BrandForge",
    title: "PPC Company in Coimbatore That Turns Ad Spend Into Real Leads",
    heroButtonText: "Get a Free Ad Account Audit This Week →",
    subtitle: [
      "Most businesses in Coimbatore don't have an ads problem — they have a wasted budget problem. If you're paying for clicks that never turn into customers, that's a targeting and tracking issue, not a reason to give up on paid ads.",
      "BrandForge is a PPC company in Coimbatore built for one outcome: turning every rupee of ad spend into measurable leads and sales. Our paid media studio, Ignition Ads, plans and manages campaigns across Google, Meta, YouTube, and more — with proper tracking wired in from day one."
    ],
    bannerBg: "/paid-media-banner-illustration.png",
    icon: Megaphone,
    metrics: [
      { value: "₹420 → ₹95", label: "Cost-Per-Lead Cut", desc: "Average 77% drop in CPL across accounts" },
      { value: "5.8x", label: "Average Blended ROAS", desc: "Direct response media efficiency benchmark" },
      { value: "₹45M+", label: "Ad Spend Managed", desc: "Google Ads & Meta Blueprint certified team" },
      { value: "100%", label: "Conversion Tracking", desc: "GA4, Meta CAPI & call tracking wired before spend" },
    ],
    whyChooseUs: {
      tag: "WHY PPC BRINGS FASTER RESULTS THAN SEO",
      title: "Why PPC Brings Faster Results Than SEO",
      description: "SEO builds long-term authority. Paid ads bring leads this week. For local service businesses, coaching institutes, clinics, and online stores, that speed is the whole point. Done right, PPC is the most accountable marketing you can run — every result is a number you can check.",
      leadIn: "For local service businesses, coaching institutes, clinics, and online stores, that speed is the whole point:",
      points: [
        "You appear at the top of Google the day you launch",
        "You reach exact audiences by location, age, interest, and intent",
        "You see your real cost per lead, not guesswork",
        "You scale what works and cut what doesn't, fast"
      ],
      conclusion: "Done right, PPC is the most accountable marketing you can run — every result is a number you can check."
    },
    matrixTag: "MEDIA REVOLUTION",
    matrixTitle: "OLD TRADITIONAL AGENCIES VS BRANDFORGE AD SCALING",
    matrixSubtitle: "Stop burning budget on generic agency ads. We combine in-house scroll-stopping creative with predictive AI bidding and full tracking.",
    matrixRows: [
      { feature: "Tracking & Setup", traditional: "Ad spend started before proper tracking is verified", brandforge: "GA4, Meta CAPI, offline pixels & call tracking wired before 1 rupee is spent" },
      { feature: "Ad Creatives", traditional: "Generic static templates causing instant ad fatigue", brandforge: "Scroll-stopping custom UGC, reels & motion video built in-house by our Story Smithy studio" },
      { feature: "Post-Click Experience", traditional: "Traffic dumped onto slow homepage or broken form", brandforge: "High-converting bespoke landing pages built by our Web Foundry team" },
      { feature: "Reporting & Accountability", traditional: "Vague monthly PDF full of vanity impression metrics", brandforge: "Transparent weekly reporting: spend, real leads, and cost-per-lead in plain numbers" },
    ],
    pillarsTag: "EVERY TYPE OF AD WE RUN",
    pillarsTitle: "Every Type of Ad We Run",
    pillarsSubtitle: "We don't push one channel. We match the platform to your buyer. Here's what Ignition Ads manages.",
    pillars: [
      {
        icon: Search,
        tag: "HIGH-INTENT LEADS",
        title: "Google Search Ads",
        description: "When someone searches for your service, your ad shows first. High-intent bottom-funnel leads ready to convert.",
        deliverables: [
          "Negative Keyword Shield (Zero Wasted Clicks)",
          "High-Intent Exact Match Strategy",
          "Ad Copy & Dynamic Asset Testing",
          "Bid & Quality Score Optimization"
        ]
      },
      {
        icon: Globe,
        tag: "BRAND RECALL",
        title: "Google Display Ads",
        description: "Banner ads across websites and apps, ideal for retargeting and building wide visual recognition.",
        deliverables: [
          "Custom Intent & Affinity Audiences",
          "Responsive Display Creative Assets",
          "Strict Placement & Fraud Filtering",
          "Cross-Device Frequency Capping"
        ]
      },
      {
        icon: Video,
        tag: "VIDEO IMPACT",
        title: "YouTube Ads",
        description: "Video ads for brand recall, course launches, and product demos that engage viewers before they watch.",
        deliverables: [
          "Skippable In-Stream Video Ads",
          "Non-Skippable 15s Brand Stories",
          "YouTube Bumper Ads (6s High-Impact)",
          "Viewer Retargeting Lists"
        ]
      },
      {
        icon: ShieldCheck,
        tag: "E-COMMERCE",
        title: "Google Shopping Ads",
        description: "Product listings with image and price for e-commerce, showing directly in search results.",
        deliverables: [
          "Google Merchant Center Feed Setup",
          "Smart Shopping Feed Optimization",
          "Negative Keyword Filtering",
          "Dynamic Product Remarketing"
        ]
      },
      {
        icon: Cpu,
        tag: "AI OMNICHANNEL",
        title: "Performance Max",
        description: "Google's AI format running across Search, Display, YouTube, Gmail, and Maps simultaneously.",
        deliverables: [
          "PMax Asset Group & Copy Matrix",
          "Custom First-Party Audience Signals",
          "Search Theme & Negative Keyword Shield",
          "Value-Based Smart Bidding Rules"
        ]
      },
      {
        icon: Zap,
        tag: "LEAD GENERATION",
        title: "Meta Ads (Facebook & Instagram)",
        description: "The best channel for lead-generation and demand. Targeting local Coimbatore buyers where they scroll daily.",
        deliverables: [
          "Advantage+ Audience Modeling",
          "Server-Side Meta CAPI Tracking",
          "Scroll-Stopping UGC & Reel Creatives",
          "Direct WhatsApp & Instant Form Funnels"
        ]
      },
      {
        icon: Video,
        tag: "SHORT-FORM VIDEO",
        title: "Instagram Reels & Story Ads",
        description: "Short-form video where younger buyers spend their time. Native hooks built to stop the scroll.",
        deliverables: [
          "3-Second Hook Video Testing",
          "Vertical 9:16 Creator Video Assets",
          "Trending Audio & Fast Visual Pacing",
          "Interactive Poll & Sticker CTAs"
        ]
      },
      {
        icon: TrendingUp,
        tag: "LOWEST CPL",
        title: "Retargeting Ads",
        description: "Chasing past visitors across Google and Meta; usually the cheapest leads in any account.",
        deliverables: [
          "Past Website Visitor Dynamic Drips",
          "Abandoned Form & Cart Sequences",
          "VIP Repeat Customer Re-engagement",
          "Exclusion Lists to Prevent Wasted Spend"
        ]
      },
      {
        icon: Award,
        tag: "NO SLOW PAGES",
        title: "Lead Generation Campaigns",
        description: "Instant-form ads that capture name and phone without a slow landing page, syncing straight to your CRM.",
        deliverables: [
          "Native Instant Lead Forms",
          "Instant WhatsApp Webhook Routing",
          "Qualifying Questions to Filter Junk",
          "Real-Time Sales Team Notification"
        ]
      },
      {
        icon: Globe,
        tag: "FOOT TRAFFIC & CALLS",
        title: "Local & Google Maps Ads",
        description: "For businesses that need walk-ins and calls nearby. Promoted pins and click-to-call extensions.",
        deliverables: [
          "Google Business Profile Sync",
          "Promoted Pins on Google Maps",
          "Call-Only Ad Mobile Campaigns",
          "Local Radius Geo-Fencing"
        ]
      },
      {
        icon: Target,
        tag: "B2B DECISION MAKERS",
        title: "LinkedIn Ads",
        description: "For B2B and premium services targeting decision-makers, managing directors, and corporate buyers.",
        deliverables: [
          "Job-Title & Company Size ABM Targeting",
          "LinkedIn Native Lead Gen Forms",
          "Sponsored Executive Content",
          "High-Ticket B2B Lead Pipelines"
        ]
      }
    ],
    differentiators: {
      tag: "WHAT MAKES BRANDFORGE DIFFERENT",
      title: "What Makes BrandForge Different",
      subtitle: "Plenty of agencies run ads. Fewer make them profitable. As a PPC company in Coimbatore that also handles branding, web, and content in-house, we connect the ad to the page to the follow-up.",
      items: [
        {
          title: "Tracking First",
          description: "GA4, pixel, and call tracking installed before any spend so every single rupee is accounted for.",
          icon: ShieldCheck
        },
        {
          title: "Scroll-Stopping Creative",
          description: "Built in-house by our Story Smithy studio, not templated — reels, UGC, and custom motion graphics.",
          icon: PenTool
        },
        {
          title: "Landing Pages That Convert",
          description: "Engineered by our Web Foundry team with sub-second speeds so your traffic doesn't hit a dead end.",
          icon: TrendingUp
        },
        {
          title: "Weekly Reporting",
          description: "Spend, leads, and cost-per-lead in plain numbers delivered weekly — zero vanity jargon.",
          icon: BarChart3
        },
        {
          title: "Data-Led Optimization",
          description: "We cut losers and scale winners every week, continually lowering your cost per acquisition.",
          icon: Zap
        }
      ]
    },
    timeline: {
      tag: "HOW WE WORK",
      title: "How We Work",
      subtitle: "Our systematic 6-step framework to maximize your return on ad spend and eliminate budget waste.",
      steps: [
        { num: "01", title: "Free ad account audit", desc: "We find where your budget is leaking" },
        { num: "02", title: "Strategy", desc: "We pick the platforms your buyers actually use" },
        { num: "03", title: "Build", desc: "Targeting, creatives, copy, tracking, landing pages" },
        { num: "04", title: "Launch", desc: "Close watch on the first critical days" },
        { num: "05", title: "Optimize", desc: "Lower your cost per lead week over week" },
        { num: "06", title: "Scale", desc: "Grow what's already working" }
      ]
    },
    whoWeHelp: {
      tag: "WHO WE HELP",
      title: "Who We Help in Coimbatore and Tamil Nadu",
      subtitle: "We run paid ads for coaching institutes, clinics, real estate, e-commerce brands, local service businesses, and B2B companies across Coimbatore and Tamil Nadu. If you have a budget and a product people want, we'll put it in front of the right buyers.",
      ctaText: "Get your free ad account audit this week — we'll show you exactly where your spend is leaking and how much cheaper your leads could be.",
      industries: [
        { title: "Coaching Institutes", desc: "High-intent student enrollment leads for NEET, JEE, IELTS, UPSC, and technical courses across Coimbatore." },
        { title: "Clinics & Healthcare", desc: "Qualified patient appointment bookings for dental, fertility, eye care, and multi-specialty practices." },
        { title: "Real Estate & Builders", desc: "High-ticket buyer site visit inquiries for luxury villas, gated apartments, and commercial plots." },
        { title: "E-Commerce Brands", desc: "High-ROAS Google Shopping and Meta advantage+ shopping campaigns that scale profitable sales." },
        { title: "Local Service Businesses", desc: "Direct phone calls and walk-in leads for interior designers, solar installers, and local service pros." },
        { title: "B2B Companies", desc: "Account-based LinkedIn and Google Search ads targeting founders, CEOs, and purchase managers." }
      ],
      certifications: [
        { label: "Google Ads Help (support.google.com/google-ads) & Meta Business (facebook.com/business/help) Compliant" },
        { label: "Real Client Result: Cost-per-lead cut from ₹420 to ₹95 for Coimbatore education institute & 5.8x ROAS" },
        { label: "Certified Team: Google Ads Search & Display Certified + Meta Blueprint Certified Media Buyers" },
        { label: "Reviewed by BalaMurali, Paid Media Lead, Ignition Ads by BrandForge" }
      ]
    },
    faqs: [
      {
        q: "What does a PPC company in Coimbatore do?",
        a: "A PPC company manages paid advertising campaigns on Google Ads, Meta (Facebook & Instagram), YouTube, and LinkedIn. At BrandForge, we handle keyword research, in-house ad creatives, landing pages, conversion tracking, and weekly bid optimization to turn ad spend into profitable leads."
      },
      {
        q: "How much should my business spend on paid ads monthly?",
        a: "For local Coimbatore businesses, we recommend starting with ₹20,000 to ₹50,000/month. For scaling e-commerce or regional brands, ad spend typically ranges from ₹1,00,000 to ₹10,00,000+/month across Google and Meta."
      },
      {
        q: "Why is tracking installed before spending any budget?",
        a: "Without GA4, Meta CAPI, and call tracking, you cannot know which keyword or creative generated a paying customer. We wire 100% accurate tracking first so every rupee spent is accounted for."
      },
      {
        q: "How quickly can PPC bring leads compared to SEO?",
        a: "Paid ads bring leads the same week you launch. While SEO builds long-term organic authority over 3 to 6 months, PPC gives immediate top-of-Google rankings and instant social media reach."
      },
      {
        q: "Do you design the ad creatives and landing pages in-house?",
        a: "Yes. Our in-house creative studio (Story Smithy) writes scripts and edits scroll-stopping video ads, while our Web Foundry team builds custom, sub-second landing pages optimized for maximum conversion."
      },
      {
        q: "How do you prevent junk leads and wasted clicks?",
        a: "We implement negative keyword shields on Google Ads to block irrelevant searches, use qualifying questions on Meta instant forms, and set up algorithmic bid caps to only bid on high-intent buyers."
      }
    ],
    bottomCta: {
      title: "Get Your Free Ad Account Audit This Week",
      subtitle: "We'll show you exactly where your spend is leaking and how much cheaper your leads could be.",
      buttonText: "Claim Your Free Ad Audit →"
    }
  },
  
  "web-foundry": {
    slug: "web-foundry",
    urlSlug: "/website-development-company-coimbatore",
    metaTitle: "Website Development Company in Coimbatore | BrandForge",
    metaDescription: "Need a website development company in Coimbatore? BrandForge builds fast, SEO-ready websites that convert. Get a free website consultation today.",
    number: "03",
    eyebrow: "Website Development Company in Coimbatore | Web Foundry by BrandForge",
    title: "Website Development Company in Coimbatore That Builds Sites That Sell",
    heroButtonText: "Get a Free Website Consultation →",
    subtitle: [
      "A slow, outdated website quietly costs you customers every single day. If your site loads slowly, looks dated on mobile, or doesn't turn visitors into enquiries, the design is the problem — not your business.",
      "BrandForge is a website development company in Coimbatore that builds fast, mobile-first, SEO-ready websites designed to convert. Our web studio, Web Foundry, handles everything from a simple business site to a full e-commerce store — built to load quickly, rank on Google, and turn clicks into leads."
    ],
    bannerBg: "/web-dev-banner-illustration.png",
    icon: Box,
    metrics: [
      { value: "< 1.8s", label: "Mobile Load Speed", desc: "Tested on live mobile 4G networks" },
      { value: "100/100", label: "Lighthouse Performance", desc: "Google Core Web Vitals benchmark" },
      { value: "+240%", label: "Mobile Enquiries Surge", desc: "Average post-launch conversion lift" },
      { value: "100%", label: "SEO-Ready Code", desc: "Clean semantic markup & schema from Day 1" },
    ],
    whyChooseUs: {
      tag: "THE REAL COST OF A BAD SITE",
      title: "Why Your Website Is Losing You Customers",
      description: "Most business websites in Coimbatore fail for the same few reasons. Fixing them is where growth starts.",
      conclusion: "A good website fixes all five. That's the difference between a site that just exists and one that actually earns.",
      leadIn: "Fixing them is where growth starts:",
      points: [
        "It loads too slowly — visitors leave before it even opens",
        "It breaks on mobile, where most of your traffic comes from",
        "It has no clear call to action, so people browse and leave",
        "It isn't built for SEO, so Google never shows it",
        "It looks dated, which quietly tells buyers you're behind the times"
      ]
    },
    matrixTag: "CRITICAL FUNDAMENTALS",
    matrixTitle: "What Makes the Best Website Development Company in Coimbatore?",
    matrixSubtitle: "If you're comparing agencies, look past the price tag. The best website development company in Coimbatore is the one that gets these fundamentals right:",
    matrixClosing: "Ask any agency to show proof on all five before you sign. Vague answers are a red flag.",
    matrixRows: [
      {
        feature: "Speed",
        brandforge: "Pages that load in under 3 seconds on mobile data",
        traditional: "Bloated templates taking 6–10s to load on mobile data"
      },
      {
        feature: "SEO-ready code",
        brandforge: "Clean structure so Google can rank you",
        traditional: "Messy spaghetti code with missing meta tags and zero schema"
      },
      {
        feature: "Mobile-first design",
        brandforge: "Built for phones first, not desktop",
        traditional: "Desktop layouts shrunken down to mobile screens with broken buttons"
      },
      {
        feature: "Conversion focus",
        brandforge: "Clear CTAs, forms, and WhatsApp/call buttons",
        traditional: "Vague artistic layouts with hidden contact forms and zero CTAs"
      },
      {
        feature: "Ongoing support",
        brandforge: "Someone to call when something breaks",
        traditional: "Agency vanishes after launch; zero help when plugins break"
      }
    ],
    pillarsTag: "FULL-STACK CAPABILITIES",
    pillarsTitle: "Website Development Services We Offer",
    pillarsSubtitle: "We don't do one-size-fits-all. We build the right type of site for your goal.",
    pillars: [
      {
        icon: Globe,
        tag: "TRUST & ENQUIRIES",
        title: "Business Websites",
        description: "Professional company sites that build trust and generate enquiries.",
        deliverables: [
          "Professional company sites that build trust and generate enquiries.",
          "Mobile-optimized service & portfolio pages",
          "Prominent WhatsApp and click-to-call triggers",
          "Instant lead capture & CRM notification sync"
        ]
      },
      {
        icon: ShieldCheck,
        tag: "ONLINE STORES",
        title: "E-Commerce Websites",
        description: "Online stores with secure payments, product pages, and cart.",
        deliverables: [
          "Online stores with secure payments, product pages, and cart.",
          "Frictionless 1-page checkout experience",
          "Automated inventory & order management",
          "Secure payment gateway & UPI integration"
        ]
      },
      {
        icon: Target,
        tag: "HIGH-ROAS FUNNELS",
        title: "Landing Pages",
        description: "Single high-converting pages built for ad campaigns.",
        deliverables: [
          "Single high-converting pages built for ad campaigns.",
          "Above-the-fold lead form architecture",
          "Sub-second mobile loading speed (<1.8s)",
          "Direct conversion tracking for Google Ads & Meta"
        ]
      },
      {
        icon: Cpu,
        tag: "CUSTOM SOFTWARE",
        title: "Custom Web Applications",
        description: "Dashboards, booking systems, and internal tools.",
        deliverables: [
          "Dashboards, booking systems, and internal tools.",
          "Role-based authentication & data security",
          "Automated database synchronizations",
          "Scalable modern web application architecture"
        ]
      },
      {
        icon: Layers,
        tag: "CMS FREEDOM",
        title: "WordPress Development",
        description: "Easy-to-edit sites you can update yourself.",
        deliverables: [
          "Easy-to-edit sites you can update yourself.",
          "Custom lightweight block themes (zero bloated plugins)",
          "Hardened security, SSL & daily backups",
          "Intuitive drag-and-drop page editor"
        ]
      },
      {
        icon: Zap,
        tag: "MODERNIZATION",
        title: "Website Redesign",
        description: "Modernizing slow, outdated sites without losing SEO.",
        deliverables: [
          "Modernizing slow, outdated sites without losing SEO.",
          "Comprehensive 301 SEO redirect mapping",
          "Google Core Web Vitals speed overhaul",
          "Modern responsive mobile-first redesign"
        ]
      },
      {
        icon: Gauge,
        tag: "PERFORMANCE",
        title: "Speed & SEO Optimization",
        description: "Making an existing site faster and search-ready.",
        deliverables: [
          "Making an existing site faster and search-ready.",
          "Lighthouse 95+ performance optimization",
          "Image & JavaScript code minification",
          "Clean code structure so Google can rank you"
        ]
      },
      {
        icon: ShieldCheck,
        tag: "24/7 PEACE OF MIND",
        title: "Maintenance & Support",
        description: "Updates, backups, and security handled for you.",
        deliverables: [
          "Updates, backups, and security handled for you.",
          "Automated daily cloud backups",
          "Malware scanning & firewall protection",
          "Direct developer support line when something breaks"
        ]
      }
    ],
    differentiators: {
      tag: "THE BRANDFORGE ADVANTAGE",
      title: "Why Businesses Choose BrandForge",
      subtitle: "As a website development company in Coimbatore that also runs branding, SEO, and ads in-house, we don't just hand over a site and disappear. Your website is built to work with everything else that drives your growth.",
      items: [
        {
          title: "Built for speed and Google ranking from day one",
          description: "Clean code structure, sub-2s mobile loading, and complete technical SEO foundation built into every page from Day 1.",
          icon: Search
        },
        {
          title: "Mobile-first, so it looks sharp on every phone",
          description: "Built for mobile screens and thumbs first, ensuring razor-sharp typography and effortless navigation on every smartphone.",
          icon: Globe
        },
        {
          title: "Designed to convert visitors into leads, not just look pretty",
          description: "Strategic layout hierarchy, friction-free forms, and prominent call/WhatsApp buttons that turn casual clicks into real enquiries.",
          icon: TrendingUp
        },
        {
          title: "Connected to our SEO and ads teams for real results",
          description: "Seamlessly connected to our SEO (Rank Forge) and ads (Ignition Ads) teams for unified digital growth.",
          icon: Zap
        },
        {
          title: "Clear timelines and honest pricing — no surprises",
          description: "Fixed transparent quotes, milestone-based deliverables, and zero hidden charges.",
          icon: ShieldCheck
        }
      ]
    },
    timeline: {
      tag: "OUR WEB DEVELOPMENT PROCESS",
      title: "Our Web Development Process",
      subtitle: "A transparent, milestone-driven framework that takes your website from initial concept to high-converting launch.",
      steps: [
        { num: "01", step: "01", title: "Discovery", desc: "we learn your business, goals, and audience", description: "we learn your business, goals, and audience" },
        { num: "02", step: "02", title: "Plan & wireframe", desc: "structure and page layout agreed before design", description: "structure and page layout agreed before design" },
        { num: "03", step: "03", title: "Design", desc: "a modern look that matches your brand", description: "a modern look that matches your brand" },
        { num: "04", step: "04", title: "Build", desc: "fast, clean, SEO-ready development", description: "fast, clean, SEO-ready development" },
        { num: "05", step: "05", title: "Test & launch", desc: "checked on every device, then go live", description: "checked on every device, then go live" },
        { num: "06", step: "06", title: "Support", desc: "updates and help whenever you need it", description: "updates and help whenever you need it" }
      ]
    },
    whoWeHelp: {
      tag: "WHO WE BUILD FOR",
      title: "Who We Build For",
      subtitle: "We build websites for coaching institutes, clinics and hospitals, retail and e-commerce brands, real estate, manufacturers, and local service businesses across Coimbatore and Tamil Nadu. If your customers are searching online, you need a site that shows up and closes.",
      ctaText: "Get a free website consultation today — we'll review your current site (or your idea) and show you exactly what a high-converting website would look like for your business.",
      industries: [
        { title: "Coaching Institutes", desc: "High-trust admissions portals, course syllabi, and fast enrollment enquiry funnels for academies in Coimbatore." },
        { title: "Clinics and Hospitals", desc: "Patient-friendly healthcare websites with doctor profiles, treatment details, and instant appointment booking." },
        { title: "Retail and E-Commerce Brands", desc: "Lightning-fast online stores with secure checkout, product catalogues, and mobile shopping experiences." },
        { title: "Real Estate", desc: "Luxury project showcases, floor plans, virtual tours, and high-ticket site visit lead funnels." },
        { title: "Manufacturers", desc: "B2B industrial websites showcasing precision machinery, ISO certifications, and RFQ enquiry forms." },
        { title: "Local Service Businesses", desc: "Direct phone calls and quote requests for service businesses across Coimbatore and Tamil Nadu." }
      ],
      certifications: [
        { label: "Google PageSpeed Insights Verified (<3s Mobile Load)" },
        { label: "Google Search Central SEO-Ready Architecture" },
        { label: "Real Client Metric: Cut load time from 6s to 1.8s" },
        { label: "Reviewed by BalaMurali, Lead Developer, Web Foundry" }
      ]
    },
    faqs: [
      {
        q: "How much does website development cost in Coimbatore?",
        a: "It depends on the type and size of the site. A simple business website costs less than an e-commerce store or custom web app. We give a clear, fixed quote after understanding your needs — no hidden charges."
      },
      {
        q: "How long does it take to build a website?",
        a: "A standard business website usually takes 2 to 4 weeks. E-commerce and custom builds take longer. We share a clear timeline before we start so you always know what to expect."
      },
      {
        q: "Will my website show up on Google?",
        a: "We build every site SEO-ready — with clean code, fast loading, and proper structure. That gives Google the foundation to rank you, though top rankings also need ongoing SEO and time."
      },
      {
        q: "Do you redesign existing websites?",
        a: "Yes. We modernize slow or outdated sites and improve speed, mobile experience, and conversions — carefully, so you don't lose your existing Google rankings."
      },
      {
        q: "Will my website work on mobile phones?",
        a: "Always. We design mobile-first, because most visitors in Coimbatore browse on their phones. Your site will look and work perfectly on every screen size."
      }
    ],
    bottomCta: {
      title: "Get a Free Website Consultation Today",
      subtitle: "We'll review your current site (or your idea) and show you exactly what a high-converting website would look like for your business.",
      buttonText: "Claim Your Free Website Consultation →"
    }
  },

  "viral-social": {
    slug: "viral-social",
    urlSlug: "/social-media-marketing-company-coimbatore",
    metaTitle: "Social Media Marketing Company in Coimbatore | BrandForge",
    metaDescription: "Looking for a social media marketing company in Coimbatore? BrandForge grows your brand with content, reels & ads that convert. Get a free strategy call.",
    number: "04",
    eyebrow: "Social Media Marketing Company in Coimbatore | Story Smithy by BrandForge",
    title: "Social Media Marketing Company in Coimbatore That Grows Real Followers Into Customers",
    heroButtonText: "Get a Free Strategy Call →",
    subtitle: [
      "Posting every day but getting no leads, no sales, and barely any likes? That's not a content problem — it's a strategy problem. Random posts don't grow a business; a plan does.",
      "BrandForge is a social media marketing company in Coimbatore that turns your Instagram, Facebook, and other channels into real business growth. Our content studio, Story Smithy, handles strategy, content, reels, and ads together — so your pages don't just look active, they actually bring in customers."
    ],
    bannerBg: "/viral-social-banner-illustration.png",
    icon: Rocket,
    metrics: [
      { value: "+450%", label: "Follower Growth Rate", desc: "Average 90-day organic audience expansion" },
      { value: "12M+", label: "Monthly Reel Views", desc: "Generated across client viral content campaigns" },
      { value: "14.2%", label: "Engagement Rate Benchmark", desc: "Top-tier interaction share across Reels & Shorts" },
      { value: "₹95", label: "Cost Per Direct Enquiry", desc: "Meta & Instagram DM lead conversion rate" },
    ],
    whyChooseUs: {
      tag: "WHY MOST SOCIAL MEDIA MARKETING FAILS",
      title: "Why Most Social Media Marketing Fails",
      description: "If your social media isn't working, it's usually one of these reasons. We fix all of them. Social media done right builds trust, keeps you top-of-mind, and quietly sends buyers your way. That takes a plan, not just a posting schedule.",
      leadIn: "Here are the 5 critical reasons your current social media isn't generating real business:",
      points: [
        "Posting with no strategy or goal behind it",
        "Boring content that nobody stops to watch",
        "No reels or video — where all the reach is today",
        "No call to action, so followers never become buyers",
        "Posting and forgetting — no engagement, no replies"
      ]
    },
    matrixTag: "WHAT AN AGENCY ACTUALLY DOES",
    matrixTitle: "WHAT DOES A SOCIAL MEDIA MARKETING COMPANY IN COIMBATORE ACTUALLY DO?",
    matrixSubtitle: "Good social media marketing in Coimbatore is more than pretty posts. Here's what a real agency handles for you:",
    matrixRows: [
      {
        feature: "Strategy & Planning",
        traditional: "Random posting whenever there is free time without target goals",
        brandforge: "A clear data-backed plan for what to post, when, and why"
      },
      {
        feature: "Content Creation",
        traditional: "Boring generic Canva templates that viewers scroll past immediately",
        brandforge: "Scroll-stopping posts, reels, and stories with 3-second dopamine hooks"
      },
      {
        feature: "Page Management",
        traditional: "Irregular posting that leaves accounts dead and inactive for weeks",
        brandforge: "Consistent scheduled posting so your brand never goes quiet"
      },
      {
        feature: "Engagement & DMs",
        traditional: "Ignoring user comments and leaving valuable buyer DMs unanswered",
        brandforge: "Active replies to comments and DMs to build authentic community trust"
      },
      {
        feature: "Paid Ads Scaling",
        traditional: "Random boosting button clicks that burn budget with zero return",
        brandforge: "Targeted Meta and Instagram ad campaigns turning reach into actual sales"
      },
      {
        feature: "Reporting & Insights",
        traditional: "Vague vanity metrics and screenshots without actionable insights",
        brandforge: "Clear monthly numbers on follower growth, reach, and real leads"
      }
    ],
    pillarsTag: "OUR SERVICES",
    pillarsTitle: "Our Social Media Marketing Services",
    pillarsSubtitle: "We build the right mix for your business and audience — not the same package for everyone.",
    pillars: [
      {
        icon: Megaphone,
        tag: "INSTAGRAM GROWTH",
        title: "Instagram Marketing",
        description: "Reels, carousel guides, posts, and interactive stories that grow reach and convert followers into customers.",
        deliverables: [
          "3-Second Hook Video Reels",
          "Carousel Value Infographics",
          "Daily Interactive Story Polls",
          "Bio Link Funnel Optimization"
        ]
      },
      {
        icon: Globe,
        tag: "LOCAL REACH",
        title: "Facebook Marketing",
        description: "Pages, posts, and community building engineered for hyper-local reach and customer trust across Coimbatore.",
        deliverables: [
          "Facebook Page Authority Setup",
          "Local Group Engagement Strategy",
          "Event & Promotional Broadcasts",
          "Cross-Platform Social Syndication"
        ]
      },
      {
        icon: Video,
        tag: "VIRAL FORMATS",
        title: "Reels & Short Video",
        description: "The fastest way to get discovered in 2026. High-retention short-form video scripted, shot, and edited in-house.",
        deliverables: [
          "Trending Audio & Sound Design",
          "Kinetic Animated Captions",
          "High-Pacing Video Editing",
          "Visual Curiosity Hook Scripts"
        ]
      },
      {
        icon: PenTool,
        tag: "IN-HOUSE STUDIO",
        title: "Content Creation & Design",
        description: "Scroll-stopping graphics, persuasive copywriting captions, and high-production video handled in-house by Story Smithy.",
        deliverables: [
          "Bespoke Brand Visual Grading",
          "Persuasive Captions & CTAs",
          "Carousel Educational Slides",
          "Custom Motion Graphic Overlays"
        ]
      },
      {
        icon: Target,
        tag: "PAID SOCIAL",
        title: "Social Media Ads",
        description: "Meta and Instagram ad campaigns that convert interest into verified phone calls, WhatsApp messages, and website sales.",
        deliverables: [
          "High-ROAS Meta Ad Campaigns",
          "WhatsApp Click-to-Chat Ads",
          "Meta Instant Lead Forms",
          "Pixel & CAPI Server Tracking"
        ]
      },
      {
        icon: Users,
        tag: "B2B AUTHORITY",
        title: "LinkedIn Marketing",
        description: "Building executive authority and inbound B2B pipeline for company founders, managing directors, and corporate brands.",
        deliverables: [
          "Founder Personal Branding",
          "B2B Thought Leadership Posts",
          "Executive Network Growth",
          "Industry Article Syndication"
        ]
      },
      {
        icon: Award,
        tag: "LOCAL CREATORS",
        title: "Influencer Marketing",
        description: "Local creator collaborations across Coimbatore and Tamil Nadu to amplify social proof and drive word-of-mouth.",
        deliverables: [
          "Vetted Coimbatore Creators",
          "Campaign Briefing & Scripting",
          "Perpetual Ad Usage Rights",
          "Trackable Discount Codes & ROI"
        ]
      },
      {
        icon: ShieldCheck,
        tag: "FULL HANDLING",
        title: "Account Management",
        description: "Full end-to-end handling from scheduling and community moderation to monthly reviews so you can focus on your business.",
        deliverables: [
          "Monthly Content Calendar",
          "DM & Comment Moderation",
          "Brand Reputation Protection",
          "Monthly Performance Strategy Call"
        ]
      }
    ],
    differentiators: {
      tag: "THE BRANDFORGE ADVANTAGE",
      title: "Why Businesses Choose BrandForge",
      subtitle: "As a social media marketing company in Coimbatore that also runs SEO, web, and paid ads in-house, we connect your social content to everything else that drives growth — so it's never just posting for the sake of it.",
      items: [
        {
          title: "Strategy First — Every Post Has a Purpose",
          description: "Every single post, reel, and story is tied to a specific business goal: brand awareness, trust building, or lead capture.",
          icon: Target
        },
        {
          title: "Reels and Video Built to Actually Get Watched",
          description: "Engineered with fast pacing, clear 3-second visual hooks, and trending audio so algorithms push your content to new buyers.",
          icon: Video
        },
        {
          title: "Content Designed to Turn Followers into Enquiries",
          description: "We embed clear, frictionless CTAs and DM automation funnels so profile visitors easily reach out via WhatsApp or call.",
          icon: TrendingUp
        },
        {
          title: "Ads and Organic Working Together, Not Separately",
          description: "We amplify top-performing organic reels with targeted paid ad spend, dramatically lowering your blended cost per lead.",
          icon: Zap
        },
        {
          title: "Clear Monthly Reports — You See Exactly What's Working",
          description: "Plain numbers on follower growth, video reach, click-throughs, and verified inbound leads delivered every month.",
          icon: BarChart3
        }
      ]
    },
    whatWeDo: {
      tag: "WHAT BRANDFORGE WILL DO FOR YOU",
      title: "What BrandForge Will Do For You",
      subtitle: "Here's what actually lands in your account every month — no vague promises, just the work.",
      items: [
        {
          title: "A monthly content calendar",
          description: "You'll always know what's going out and when, planned around festivals, offers, and trends"
        },
        {
          title: "Trend-jacking",
          description: "We jump on trending audios and reel formats fast, while they're still getting reach"
        },
        {
          title: "Competitor watch",
          description: "We track what rival Coimbatore brands are posting and beat it"
        },
        {
          title: "A dedicated account manager",
          description: "One person who knows your brand, not a call centre"
        },
        {
          title: "Festival & local moment content",
          description: "Pongal, Diwali, and city moments turned into posts that connect"
        },
        {
          title: "Reels shot and edited for you",
          description: "Hooks in the first 3 seconds, captions, and trending audio built in"
        },
        {
          title: "WhatsApp & DM funnels",
          description: "We turn comments and DMs into actual enquiries, not dead-end likes"
        },
        {
          title: "A monthly review call",
          description: "We sit with you, show the numbers, and plan the next month together"
        }
      ],
      conclusion: "Most agencies post and vanish. We treat your page like it's our own brand on the line."
    },
    timeline: {
      tag: "HOW WE WORK",
      title: "How We Work",
      subtitle: "Our systematic 6-step roadmap engineered for sustained social growth and high-converting audience engagement.",
      steps: [
        { num: "01", title: "Audit", desc: "We review your current pages and competitors" },
        { num: "02", title: "Strategy", desc: "Content plan, themes, and posting calendar" },
        { num: "03", title: "Create", desc: "Posts, reels, and stories designed to perform" },
        { num: "04", title: "Publish & engage", desc: "Consistent posting plus active replies" },
        { num: "05", title: "Promote", desc: "Paid ads to boost the best-performing content" },
        { num: "06", title: "Report & improve", desc: "Monthly numbers, then we double down on winners" }
      ]
    },
    whoWeHelp: {
      tag: "WHO WE WORK WITH",
      title: "Who We Work With in Coimbatore & Tamil Nadu",
      subtitle: "We manage social media for coaching institutes, clinics, restaurants and cafes, retail and e-commerce brands, real estate, and local service businesses across Coimbatore and Tamil Nadu. If your customers are on Instagram, that's where we get you noticed.",
      industries: [
        { title: "Restaurants, Cafes & Food Brands", desc: "Drool-worthy reel videos, ambiance showcases, and local food creator visits that pack tables on weekends." },
        { title: "Coaching & Education Institutes", desc: "High-intent student enrollment leads, faculty authority reels, and student testimonial videos." },
        { title: "Clinics, Doctors & Healthcare", desc: "Patient educational reels, doctor trust-building video series, and appointment booking funnels." },
        { title: "Retail & E-Commerce Brands", desc: "Trending product showcases, styling reels, customer unboxings, and Instagram Shop catalogue integrations." },
        { title: "Real Estate & Builders", desc: "Luxury walk-through reels, project aerial footage, and high-ticket site visit enquiries." },
        { title: "Local Service Businesses", desc: "Direct phone calls, WhatsApp quote requests, and client transformation case studies." }
      ],
      certifications: [
        { label: "Meta Certified Digital Marketing Agency" },
        { label: "Instagram for Business Best Practices Architecture" },
        { label: "Real Client Result: Grew Coimbatore Cafe from 800 to 12K Followers in 5 Months" },
        { label: "Reviewed by BalaMurali, Social Media Lead & Founder, Story Smithy" }
      ]
    },
    faqs: [
      {
        q: "How much does social media marketing cost in Coimbatore?",
        a: "It depends on the platforms, how many posts and reels you need, and whether ads are included. We offer monthly packages and share a clear price after understanding your goals — no hidden fees."
      },
      {
        q: "Which social media platform is best for my business?",
        a: "It depends on where your customers are. Instagram and Facebook work for most local businesses; LinkedIn suits B2B. We pick the right platforms in your strategy instead of spreading you thin everywhere."
      },
      {
        q: "How long until I see results from social media marketing?",
        a: "Organic growth usually shows over 2 to 3 months of consistent, strategic content. Paid ads can bring leads much faster. We set realistic expectations upfront and report progress monthly."
      },
      {
        q: "Do you create the content or do I have to?",
        a: "We handle everything — graphics, captions, reels, and posting. You just approve the plan. If you have your own photos or videos, we'll use them too."
      },
      {
        q: "Can social media marketing actually bring me sales?",
        a: "Yes, when it's done with strategy and backed by ads. Social builds trust and awareness; ads and clear CTAs turn that attention into enquiries and sales. Random posting alone rarely does."
      }
    ],
    bottomCta: {
      title: "Get a Free Social Media Strategy Call",
      subtitle: "We'll review your pages and show you exactly how to turn followers into paying customers.",
      buttonText: "Claim Your Free Strategy Call →"
    }
  },

  "influencer-network": {
    slug: "influencer-network",
    urlSlug: "/influencer-marketing-coimbatore",
    metaTitle: "Influencer Marketing Agency in Coimbatore | BrandForge",
    metaDescription: "Looking for an influencer marketing agency in Coimbatore? BrandForge connects your brand with the right local creators to drive real sales. Book a free call.",
    number: "05",
    eyebrow: "Influencer Marketing Agency in Coimbatore | Creator Network by BrandForge",
    title: "Influencer Marketing Agency in Coimbatore That Turns Creators Into Customers",
    heroButtonText: "Book a Free Influencer Strategy Call →",
    subtitle: [
      "One reel from the right local creator can do what months of ads can't — put your brand in front of thousands of people who actually trust the recommendation. The hard part is picking the right creator and not wasting money on fake followers.",
      "BrandForge is an influencer marketing agency in Coimbatore that connects your brand with genuine local creators who drive real reach and sales. We handle everything — finding the right influencers, negotiating, briefing, and tracking results — so you get outcomes, not just posts."
    ],
    bannerBg: "/influencer-banner-illustration.png",
    icon: Users,
    metrics: [
      { value: "100%", label: "Real Followers Vetted", desc: "Every creator screened for engagement pods & bots" },
      { value: "90K+", label: "Viral Reel Reach", desc: "Local Coimbatore cafe campaign benchmark" },
      { value: "₹0 Waste", label: "Zero Bot Budget", desc: "Every rupee targeted at real Coimbatore buyers" },
      { value: "Code + UTM", label: "Sales Attribution", desc: "Unique trackable coupon codes for clear ROI" },
    ],
    whyChooseUs: {
      tag: "WHY INFLUENCER MARKETING WORKS SO WELL",
      title: "Why Influencer Marketing Works So Well",
      description: "People trust people, not ads. That's why a creator's recommendation converts far better than a banner. The catch? It only works if you pick creators with real, engaged followers — and that's exactly where most brands go wrong.",
      leadIn: "Done right, influencer marketing gives you:",
      points: [
        "Instant trust — the creator's audience already believes them",
        "Real local reach — followers who live in and around Coimbatore",
        "Authentic content you can reuse on your own pages and ads",
        "Faster results than building an audience from scratch",
        "Better cost-per-view than most paid campaigns"
      ]
    },
    matrixTag: "WHAT AN AGENCY ACTUALLY DOES",
    matrixTitle: "WHAT DOES AN INFLUENCER MARKETING AGENCY IN COIMBATORE DO?",
    matrixSubtitle: "A good influencer marketing agency in Coimbatore takes the guesswork and risk out of the whole process. Here's what we handle for you:",
    matrixRows: [
      {
        feature: "Creator research",
        traditional: "Random searching on Instagram with no audience vetting",
        brandforge: "Finding influencers who match your brand and real target audience"
      },
      {
        feature: "Fake-follower checks",
        traditional: "Relying blindly on inflated follower counts",
        brandforge: "Screening bots and pods so you don't pay for empty reach"
      },
      {
        feature: "Negotiation",
        traditional: "Overpaying inflated creator quotes with no clear scope",
        brandforge: "Fair rates, clear deliverables, and guaranteed terms"
      },
      {
        feature: "Content briefing",
        traditional: "Stiff robotic scripts that ruin creator authenticity",
        brandforge: "Guiding the creator without killing their authentic style"
      },
      {
        feature: "Campaign management",
        traditional: "Missed deadlines, delayed posts, and constant chasing",
        brandforge: "Timelines, approvals, and posting handled end to end"
      },
      {
        feature: "Results tracking",
        traditional: "Vague vanity likes and unverified view screenshots",
        brandforge: "Reach, engagement, clicks, and enquiries in one report"
      }
    ],
    pillarsTag: "OUR SERVICES",
    pillarsTitle: "Our Influencer Marketing Services",
    pillarsSubtitle: "We build the right creator mix for your goal and budget — not the same list for everyone.",
    pillars: [
      {
        icon: Users,
        tag: "HIGH ENGAGEMENT",
        title: "Nano & Micro-Influencers",
        description: "Small, highly-trusted local creators with strong engagement across Coimbatore communities.",
        deliverables: [
          "5K–50K Follower Local Creators",
          "Hyper-Local Community Trust",
          "High Comment-to-View Ratios",
          "Authentic Lifestyle Storytelling"
        ]
      },
      {
        icon: Megaphone,
        tag: "WIDE AWARENESS",
        title: "Macro-Influencers",
        description: "Larger Tamil creators for wide brand awareness and major launch visibility across Tamil Nadu.",
        deliverables: [
          "State-Wide Tamil Creators",
          "High-Impact Brand Amplification",
          "Category Authority Endorsement",
          "Multi-Platform Syndication"
        ]
      },
      {
        icon: Video,
        tag: "HIGHEST REACH",
        title: "Instagram Reels Campaigns",
        description: "The highest-reach format today. High-retention video reels scripted and delivered by top local voices.",
        deliverables: [
          "3-Second Hook Video Reels",
          "Trending Audio Integration",
          "Visual Product Demonstrations",
          "Pinned Collab Tagging"
        ]
      },
      {
        icon: Award,
        tag: "PRODUCT SEEDING",
        title: "Product Seeding & Reviews",
        description: "Getting your product into creators' hands and feeds for organic, authentic unboxings and reviews.",
        deliverables: [
          "Targeted Gifting Coordination",
          "Unboxing Video Waves",
          "Honest First-Impression Reviews",
          "Tag & Mention Monitoring"
        ]
      },
      {
        icon: Sparkles,
        tag: "SMART BUDGET",
        title: "Barter Collaborations",
        description: "Creator posts in exchange for product, ideal for smaller budgets and testing new creator angles.",
        deliverables: [
          "Product-for-Post Agreements",
          "Zero Media Fee Outreach",
          "High-Volume Content Generation",
          "Local Creator Relationship Setup"
        ]
      },
      {
        icon: Globe,
        tag: "LIVE BUZZ",
        title: "Event & Launch Coverage",
        description: "Creators covering your store opening or launch live to create instant local footfall and buzz.",
        deliverables: [
          "Store Opening Creator Visits",
          "Live Instagram Stories & Broadcasts",
          "On-Site Fan Engagements",
          "Launch Day Footfall Spikes"
        ]
      },
      {
        icon: Cpu,
        tag: "DEEP REVIEWS",
        title: "YouTube & Long-Form",
        description: "Deeper reviews and integrations for high-consideration products requiring detailed buyer education.",
        deliverables: [
          "In-Depth YouTube Video Reviews",
          "Dedicated Feature Integrations",
          "Permanent SEO Video Authority",
          "Detailed Buyer Comparison Guides"
        ]
      },
      {
        icon: PenTool,
        tag: "PAID ASSETS",
        title: "UGC Content",
        description: "Creator-style videos you own and run as ads to lower cost-per-click and boost conversions.",
        deliverables: [
          "Raw Authentic Creator Videos",
          "High-Conversion Ad Variations",
          "Full Perpetual Commercial Rights",
          "Platform-Native Video Formats"
        ]
      }
    ],
    differentiators: {
      tag: "THE BRANDFORGE ADVANTAGE",
      title: "Why Businesses Choose BrandForge",
      subtitle: "As an influencer marketing agency in Coimbatore that also manages social media, paid ads, and content in-house, we connect your creator campaigns to everything else that drives growth — so they deliver real business results, not just vanity reach.",
      items: [
        {
          title: "Vetted Creators Only — Zero Fake Reach",
          description: "We audit every creator's engagement rate, audience location, and follower legitimacy before you spend a single rupee.",
          icon: ShieldCheck
        },
        {
          title: "Ground-Level Coimbatore Knowledge",
          description: "We know the local creator scene intimately across Coimbatore, Erode, Tirupur, and Salem — knowing who actually moves products.",
          icon: Users
        },
        {
          title: "Contracts & Commercial Usage Rights Handled",
          description: "We secure full rights upfront so you can repurpose creator photos and reels across your website and paid ad campaigns.",
          icon: PenTool
        },
        {
          title: "Ads & Influencer Combined for Exponential ROAS",
          description: "We whitelist and boost top creator reels with paid ad targeting, dramatically lowering customer acquisition costs.",
          icon: Zap
        },
        {
          title: "Clear Sales Attribution & Reports",
          description: "Every creator is tracked via unique promo codes and custom UTM parameters so you know exactly which collaboration drove sales.",
          icon: BarChart3
        }
      ]
    },
    whatWeDo: {
      tag: "WHAT BRANDFORGE WILL DO FOR YOU",
      title: "What BrandForge Will Do For You",
      subtitle: "No guesswork, no fake reach, no chasing creators yourself. Here's what you actually get:",
      items: [
        {
          title: "A vetted creator shortlist",
          description: "Real, engaged Coimbatore and Tamil Nadu influencers matched to your brand."
        },
        {
          title: "Engagement-rate checks",
          description: "We verify every creator's numbers before you spend a rupee."
        },
        {
          title: "End-to-end handling",
          description: "Outreach, negotiation, briefs, and follow-up all done for you."
        },
        {
          title: "Content you keep",
          description: "We get usage rights so you can reuse reels in your ads and pages."
        },
        {
          title: "A clear results report",
          description: "Reach, saves, shares, clicks, and enquiries, not just likes."
        },
        {
          title: "Ads + influencer combined",
          description: "We boost the best creator content with paid ads for even more reach."
        },
        {
          title: "Trackable coupon codes",
          description: "Each creator gets a unique code, so you see exactly which one drove sales."
        },
        {
          title: "Giveaway & contest campaigns",
          description: "Creator-led giveaways that spike followers and enquiries fast."
        },
        {
          title: "Creator whitelisting",
          description: "Run ads from the creator's own handle for higher trust and better results."
        },
        {
          title: "A growing local creator network",
          description: "We already know Coimbatore creators, so campaigns launch faster."
        },
        {
          title: "Competitor creator intel",
          description: "We see which creators your rivals use and find you better ones."
        }
      ],
      conclusion: "We've run local creator outreach across Coimbatore, Erode, and Vellore — we know which creators actually deliver and which just look big."
    },
    timeline: {
      tag: "HOW WE WORK",
      title: "How We Work",
      subtitle: "A proven, transparent 6-step blueprint engineered to turn local creator influence into measurable business revenue.",
      steps: [
        { num: "01", title: "Goal & brief", desc: "We define what a win looks like: reach, sales, or launch buzz" },
        { num: "02", title: "Creator shortlist", desc: "We find and vet the right influencers for you" },
        { num: "03", title: "Approve & negotiate", desc: "You pick, we handle the deal" },
        { num: "04", title: "Brief & create", desc: "Clear direction, authentic creator content" },
        { num: "05", title: "Go live & amplify", desc: "Posts published, best ones boosted with ads" },
        { num: "06", title: "Report", desc: "Full breakdown of what the campaign delivered" }
      ]
    },
    whoWeHelp: {
      tag: "WHO WE WORK WITH",
      title: "Who We Work With in Coimbatore & Tamil Nadu",
      subtitle: "We run influencer campaigns for restaurants and cafes, fashion and retail brands, clinics and wellness, coaching institutes, and product launches across Coimbatore and Tamil Nadu. If your customers scroll Instagram, the right creator can put you right in front of them.",
      ctaText: "Book a free influencer strategy call — tell us your product and budget, and we'll show you which local creators can actually move sales for you.",
      industries: [
        { title: "Restaurants, Cafes & Food Brands", desc: "Local food vlogger visits, taste-test reels, and viral ambience tours that drive footfall." },
        { title: "Fashion & Retail Brands", desc: "Styling lookbooks, store walkthroughs, and festive collection try-on reels." },
        { title: "Clinics & Wellness", desc: "Doctor trust features, treatment walkthroughs, and patient educational experiences." },
        { title: "Coaching Institutes", desc: "Student journey videos, course reviews, and campus walk-ins that boost enrollments." },
        { title: "Product Launches & D2C", desc: "High-impact unboxings, product seeding waves, and trackable discount codes." },
        { title: "Real Estate & Hospitality", desc: "Property site tours, aerial walk-ins, and weekend destination features." }
      ],
      certifications: [
        { label: "Every creator audited for fake followers and real Coimbatore audience alignment" },
        { label: "Compliant with ASCI influencer advertising disclosure guidelines (ascionline.in)" },
        { label: "Real Campaign Result: A Coimbatore cafe reel hit 90K views & 300+ store visits" },
        { label: "Reviewed by BalaMurali, Influencer & Creator Lead, Story Smithy" }
      ]
    },
    faqs: [
      {
        q: "How much does influencer marketing cost in Coimbatore?",
        a: "It varies widely — nano-creators may post for free products, while larger creators charge per post. We work to your budget and always aim for the best reach and engagement per rupee. You get a clear plan before spending."
      },
      {
        q: "How do you find the right influencers for my brand?",
        a: "We match creators to your audience, not just follower count. We check engagement rates, audience location, and content style, and we screen for fake followers so your money reaches real people."
      },
      {
        q: "Do small businesses benefit from influencer marketing?",
        a: "Yes — often more than big brands. Nano and micro-creators have loyal, local audiences and cost far less, which makes them ideal for small Coimbatore businesses wanting real, trusted reach."
      },
      {
        q: "Can I reuse the influencer's content in my own ads?",
        a: "Yes. We negotiate usage rights upfront so you can run the creator's reels and photos as your own ads and website content, getting far more value from a single collaboration."
      },
      {
        q: "How do I know if the campaign actually worked?",
        a: "We track reach, engagement, saves, shares, link clicks, and enquiries — then give you a clear report. You'll see exactly what the campaign delivered, not just a vanity like count."
      }
    ],
    bottomCta: {
      title: "Book a Free Influencer Strategy Call",
      subtitle: "Tell us your product and budget, and we'll show you which local creators can actually move sales for you.",
      buttonText: "Book Your Free Strategy Call →"
    }
  },
  
  "content-smithy": {
    slug: "content-smithy",
    urlSlug: "/content-marketing-agency-coimbatore",
    metaTitle: "Content Marketing Agency in Coimbatore | BrandForge",
    metaDescription: "Looking for a content marketing agency in Coimbatore? BrandForge creates SEO blogs, videos & content that bring leads for months. Book a free content audit.",
    number: "06",
    eyebrow: "Content Marketing Agency in Coimbatore | Story Smithy by BrandForge",
    title: "Content Marketing Agency in Coimbatore That Turns Words Into Customers",
    heroButtonText: "Book a Free Content Audit →",
    subtitle: [
      "Ads stop working the day you stop paying. Good content keeps bringing you leads for months, even years, after you publish it. That's the difference between renting attention and owning it.",
      "BrandForge is a content marketing agency in Coimbatore that creates blogs, videos, and social content built to rank on Google and turn readers into customers. Our content studio, Story Smithy, plans and produces content that works long after it's posted — not one-off pieces nobody sees."
    ],
    bannerBg: "/content-smithy-banner-illustration.png",
    icon: PenTool,
    metrics: [
      { value: "3.5x", label: "Reader Time-on-Page", desc: "Deep domain storytelling & engaging editorial" },
      { value: "+320%", label: "Organic Search Leads", desc: "Average 6-month compounding inbound traffic" },
      { value: "Page 1", label: "Google Top 3 Rankings", desc: "High-intent keyword dominance across niches" },
      { value: "100%", label: "SEO & Conversion Ready", desc: "Zero generic AI fluff, pure human authority" },
    ],
    whyChooseUs: {
      tag: "WHY CONTENT MARKETING BEATS ONE-OFF ADS",
      title: "Why Content Marketing Beats One-Off Ads",
      description: "A single ad gets a click and disappears. A single blog post can rank on Google and pull in leads every month for years. The catch is consistency. One blog won't move the needle — a steady stream of the right content will. That's what an agency handles for you.",
      leadIn: "Here's why content wins over time:",
      points: [
        "It keeps working after you stop paying",
        "It builds trust — helpful content makes you the expert",
        "It ranks on Google, bringing free traffic every month",
        "It gives your ads and social pages something worth sharing",
        "It answers buyer questions, so they choose you over rivals"
      ],
      conclusion: "The catch is consistency. One blog won't move the needle — a steady stream of the right content will. That's what an agency handles for you."
    },
    matrixTag: "WHAT AN AGENCY ACTUALLY DOES",
    matrixTitle: "WHAT DOES A CONTENT MARKETING AGENCY IN COIMBATORE DO?",
    matrixSubtitle: "A real content marketing agency in Coimbatore does far more than write blogs. Here's what we handle end to end:",
    matrixRows: [
      {
        feature: "Strategy",
        traditional: "Writing random articles with no audience search demand",
        brandforge: "A content plan tied to what your customers actually search"
      },
      {
        feature: "SEO research",
        traditional: "Guessing topics or stuffing useless generic keywords",
        brandforge: "Finding the keywords and questions worth ranking for"
      },
      {
        feature: "Creation",
        traditional: "Shallow text copied from existing search results",
        brandforge: "Blogs, videos, graphics, and social content"
      },
      {
        feature: "Optimization",
        traditional: "Dead-end articles with zero next steps or lead captures",
        brandforge: "Every piece built to rank and convert, not just fill space"
      },
      {
        feature: "Distribution",
        traditional: "Publishing on a hidden blog and letting it sit unread",
        brandforge: "Getting content in front of people, not leaving it to sit"
      },
      {
        feature: "Measurement",
        traditional: "Never checking traffic or letting old articles decay",
        brandforge: "Tracking traffic, rankings, and leads each month"
      }
    ],
    pillarsTag: "OUR SERVICES",
    pillarsTitle: "Our Content Marketing Services",
    pillarsSubtitle: "We build the right content mix for your goals — not the same package for everyone.",
    pillars: [
      {
        icon: Search,
        tag: "ORGANIC TRAFFIC",
        title: "SEO Blog Writing",
        description: "Articles built to rank and pull in Google traffic for months.",
        deliverables: [
          "Target Keyword Intent Mapping",
          "Original Research & Insights",
          "Structured Schema & Meta Tags",
          "Internal Linking Architecture"
        ]
      },
      {
        icon: Globe,
        tag: "HIGH CONVERSION",
        title: "Website Content",
        description: "Homepage, service, and landing page copy that converts.",
        deliverables: [
          "Hero Value Proposition Copy",
          "Service Page Deep Dives",
          "Frictionless Form CTAs",
          "Mobile-First Readability"
        ]
      },
      {
        icon: Video,
        tag: "VIRAL RETENTION",
        title: "Video & Reel Scripts",
        description: "Hooks and scripts for short-form video that gets watched.",
        deliverables: [
          "3-Second Dopamine Hooks",
          "Visual Direction & B-Roll Cues",
          "Kinetic Caption Scripts",
          "Story Arc Retention Framework"
        ]
      },
      {
        icon: Megaphone,
        tag: "BRAND AUTHORITY",
        title: "Social Media Content",
        description: "Captions, carousels, and posts that build your brand.",
        deliverables: [
          "Carousel Educational Guides",
          "Thought Leadership Articles",
          "Engaging Copy & CTAs",
          "Custom Branded Infographics"
        ]
      },
      {
        icon: Mail,
        tag: "RETENTION LOOPS",
        title: "Email & Newsletter Content",
        description: "Sequences that nurture leads into buyers.",
        deliverables: [
          "Welcome Onboarding Sequences",
          "Weekly Editorial Newsletters",
          "Promotional Sales Drips",
          "Re-Engagement Campaigns"
        ]
      },
      {
        icon: Award,
        tag: "PROOF & TRUST",
        title: "Case Studies & Testimonials",
        description: "Trust-building proof content that closes sales.",
        deliverables: [
          "Customer Interview Framework",
          "Before & After Metrics Proof",
          "Executive Quote Formatting",
          "Downloadable PDF Case Decks"
        ]
      },
      {
        icon: Layers,
        tag: "PRODUCT COPY",
        title: "Product & Service Descriptions",
        description: "Clear, persuasive copy for e-commerce and services.",
        deliverables: [
          "Benefit-Driven Feature Bullets",
          "Technical Specification Tables",
          "SEO Micro-Copy & Snippets",
          "Conversion-Focused FAQs"
        ]
      },
      {
        icon: TrendingUp,
        tag: "MULTIPLIER ENGINE",
        title: "Content Repurposing",
        description: "Turning one blog into reels, posts, and emails.",
        deliverables: [
          "1 Pillar into 10+ Micro Assets",
          "Cross-Platform Formatting",
          "Carousel Visual Breakdowns",
          "Email Digest Extracts"
        ]
      }
    ],
    differentiators: {
      tag: "THE BRANDFORGE ADVANTAGE",
      title: "Why Businesses Choose BrandForge",
      subtitle: "Because we run SEO, web, and social in-house too, your content isn't a lonely blog — it's wired into everything that brings you customers.",
      items: [
        {
          title: "Strategy First — Content Mapped to Search",
          description: "Every single blog and video is tied to actual customer search demand on Google, ensuring steady compounding inbound traffic.",
          icon: Target
        },
        {
          title: "SEO Baked In From Day One",
          description: "Structured hierarchy, semantic keywords, schema markup, and internal linking engineered so search engines index and rank you fast.",
          icon: Search
        },
        {
          title: "Human, On-Brand Storytelling",
          description: "Zero generic AI dumps. Authentic, punchy, persuasive writing crafted in-house by our Story Smithy editorial team.",
          icon: PenTool
        },
        {
          title: "One Idea, Many Formats",
          description: "We turn single blogs into reels, carousels, posts, and emails so your brand reaches buyers across search, social, and inbox.",
          icon: Zap
        },
        {
          title: "Proactive Content Refreshes",
          description: "We continuously update past articles with new data and keywords to keep them ranking on page 1 for years, not let them fade.",
          icon: BarChart3
        }
      ]
    },
    whatWeDo: {
      tag: "WHAT BRANDFORGE WILL DO FOR YOU",
      title: "What BrandForge Will Do For You",
      subtitle: "No random posts, no filler articles. Here's what actually lands for you every month:",
      items: [
        {
          title: "A content plan mapped to real searches",
          description: "We build topics around what Coimbatore customers actually type into Google"
        },
        {
          title: "SEO baked in from the start",
          description: "Every blog is keyword-researched, so it works for rankings, not just reading"
        },
        {
          title: "One idea, many formats",
          description: "We turn a single blog into reels, posts, and an email, so nothing goes to waste"
        },
        {
          title: "A monthly content calendar",
          description: "You always know what's coming and why"
        },
        {
          title: "Content that feeds your other channels",
          description: "Blogs support your SEO, ads, and social all at once"
        },
        {
          title: "Human, on-brand writing",
          description: "Content that sounds like you, not a generic AI dump"
        },
        {
          title: "Rankings & traffic reports",
          description: "You see which pieces are actually bringing visitors and leads"
        },
        {
          title: "Refresh of old content",
          description: "We update past blogs to keep them ranking, not let them fade"
        }
      ],
      conclusion: "Because we run SEO, web, and social in-house too, your content isn't a lonely blog — it's wired into everything that brings you customers."
    },
    timeline: {
      tag: "HOW WE WORK",
      title: "How We Work",
      subtitle: "Our systematic 6-step content marketing roadmap from audit to compound growth.",
      steps: [
        { num: "01", title: "Audit", desc: "We review your current content, gaps, and competitors" },
        { num: "02", title: "Strategy", desc: "Keyword and topic plan tied to your business goals" },
        { num: "03", title: "Create", desc: "SEO-ready blogs, scripts, and social content" },
        { num: "04", title: "Optimize & publish", desc: "Formatted, linked, and posted properly" },
        { num: "05", title: "Distribute", desc: "Pushed across social, email, and search" },
        { num: "06", title: "Report & refresh", desc: "Monthly numbers, then we improve what's working" }
      ]
    },
    whoWeHelp: {
      tag: "WHO WE WORK WITH",
      title: "Who We Work With in Coimbatore & Tamil Nadu",
      subtitle: "We create content for coaching institutes, clinics and healthcare, e-commerce and retail, real estate, B2B companies, and local service brands across Coimbatore and Tamil Nadu. If your customers are searching for answers online, we make sure yours is the one they find.",
      ctaText: "Book a free content audit — we'll review your current content, show you the gaps, and map out the topics that could bring you leads for months.",
      industries: [
        { title: "Coaching Institutes", desc: "Course syllabus guides, career roadmaps, and student success stories that rank on page 1 for admissions keywords." },
        { title: "Clinics & Healthcare", desc: "Doctor-reviewed treatment guides, patient FAQ blogs, and educational articles that build deep medical trust." },
        { title: "E-Commerce & Retail", desc: "High-ranking gift guides, product buying comparisons, and lifestyle reels that drive organic checkout sales." },
        { title: "Real Estate & Builders", desc: "Locality guides, luxury villa walkthrough scripts, and property investment articles for serious buyers." },
        { title: "B2B Companies", desc: "Technical whitepapers, manufacturing case studies, and LinkedIn thought leadership for corporate buyers." },
        { title: "Local Service Brands", desc: "Location-specific solution guides and customer transformation stories that dominate local Google searches." }
      ],
      certifications: [
        { label: "Google Search Central (developers.google.com/search) & HubSpot Quality Compliant" },
        { label: "Real Campaign Result: A ThoughtFlows blog ranked page 1 for 'medical coding course' and drove 14K views" },
        { label: "Multi-Format Editorial: Blogs, video scripts, social carousels & email newsletters" },
        { label: "Reviewed by BalaMurali, Content Lead, Story Smithy" }
      ]
    },
    faqs: [
      {
        q: "How much does content marketing cost in Coimbatore?",
        a: "It depends on how much content you need each month — blogs, videos, social, or a mix. We offer monthly packages and share a clear price after understanding your goals. There are no hidden charges."
      },
      {
        q: "How long until content marketing brings results?",
        a: "SEO content usually starts showing results in 3 to 6 months as pages climb Google. Social and email content works faster. Content is a long game, but it keeps paying off long after ads stop."
      },
      {
        q: "Do you write the content or do I have to?",
        a: "We handle everything — strategy, writing, editing, and optimization. You just approve the plan and topics. If you have product knowledge or ideas, we build them in."
      },
      {
        q: "Is content marketing better than paid ads?",
        a: "They do different jobs. Ads bring fast leads but stop when you stop paying; content builds lasting traffic and trust over time. The best results come from using both together, which we do in-house."
      },
      {
        q: "Will your content actually rank on Google?",
        a: "We build every blog SEO-ready with proper keyword research, structure, and internal links. That gives Google the foundation to rank you, though top spots also depend on competition and time."
      }
    ],
    bottomCta: {
      title: "Book a Free Content Audit",
      subtitle: "We'll review your current content, show you the gaps, and map out the topics that could bring you leads for months.",
      buttonText: "Claim Your Free Content Audit →"
    }
  },
  
  "inbox-edge": {
    slug: "inbox-edge",
    urlSlug: "/email-marketing-company-coimbatore",
    metaTitle: "Email Marketing Company in Coimbatore | BrandForge",
    metaDescription: "Looking for an email marketing company in Coimbatore? BrandForge builds automated email flows that turn leads into repeat buyers. Book a free email audit.",
    number: "07",
    eyebrow: "Email Marketing Company in Coimbatore | Story Smithy by BrandForge",
    title: "Email Marketing Company in Coimbatore That Turns Your List Into Revenue",
    heroButtonText: "Book a Free Email Audit →",
    subtitle: [
      "You already have a list of leads and past customers sitting in your phone and inbox — and most businesses never email them again. That's money left on the table, because it costs nothing to reach people who already know you.",
      "BrandForge is an email marketing company in Coimbatore that turns your contacts into repeat sales with smart, automated email campaigns. Our team sets up the flows, writes the emails, and tracks the results — so your list quietly earns for you month after month."
    ],
    bannerBg: "/inbox-edge-banner-illustration.png",
    icon: Mail,
    metrics: [
      { value: "+312%", label: "Email Revenue Lift", desc: "Average L6M client retention ROI surge" },
      { value: "42.8%", label: "Average Open Rate", desc: "2.5x higher vs industry average (17%)" },
      { value: "99.4%", label: "Inbox Deliverability", desc: "SPF, DKIM, DMARC & BIMI verified" },
      { value: "24/7", label: "Automated Revenue Engine", desc: "Flows sell while you sleep on autopilot" },
    ],
    whyChooseUs: {
      tag: "WHY EMAIL MARKETING STILL BEATS EVERYTHING ON ROI",
      title: "Why Email Marketing Still Beats Everything on ROI",
      description: "Social reach comes and goes. Ads stop when the budget runs out. But your email list is yours — no algorithm decides who sees it. That's why email consistently returns more per rupee than almost any other channel. The reason most businesses skip it? Setting it up feels like work. That's exactly the part we handle for you.",
      leadIn: "Why your email list consistently outperforms other channels:",
      points: [
        "You own the list — no platform can take it away",
        "It reaches people who already trust you",
        "It runs on autopilot once set up",
        "It brings repeat sales, not just one-time buyers",
        "It's cheap — no ad spend to reach your own contacts"
      ],
      conclusion: "The reason most businesses skip it? Setting it up feels like work. That's exactly the part we handle for you."
    },
    matrixTag: "WHAT AN AGENCY ACTUALLY DOES",
    matrixTitle: "WHAT DOES AN EMAIL MARKETING COMPANY IN COIMBATORE DO?",
    matrixSubtitle: "A good email marketing company in Coimbatore builds a system that runs itself. Here's what we handle end to end:",
    matrixRows: [
      {
        feature: "Strategy",
        traditional: "Sending random unsegmented newsletters with no clear goal",
        brandforge: "A plan for what to send, to whom, and when"
      },
      {
        feature: "List setup",
        traditional: "Leaving old invalid contacts to degrade domain reputation",
        brandforge: "Cleaning, organizing, and segmenting your contacts"
      },
      {
        feature: "Automation",
        traditional: "Manual one-off email sending with zero ongoing flows",
        brandforge: "Welcome, follow-up, and re-engagement flows that run on their own"
      },
      {
        feature: "Copy & design",
        traditional: "Generic robotic templates that get ignored and deleted",
        brandforge: "Emails people actually open and click"
      },
      {
        feature: "Deliverability",
        traditional: "Landing directly in Spam & Promotions tabs",
        brandforge: "Setup so your emails land in inbox, not spam"
      },
      {
        feature: "Reporting",
        traditional: "Never reviewing open rates or revenue generated per email",
        brandforge: "Open rates, clicks, and sales tracked every campaign"
      }
    ],
    pillarsTag: "OUR SERVICES",
    pillarsTitle: "Our Email Marketing Services",
    pillarsSubtitle: "We build the right email system for your business — not the same template for everyone.",
    pillars: [
      {
        icon: Zap,
        tag: "FIRST IMPRESSIONS",
        title: "Welcome & Onboarding Flows",
        description: "Automatic emails that greet and convert new leads.",
        deliverables: [
          "High-Value Lead Magnet Delivery",
          "Brand Story & Authority Introduction",
          "First-Order Incentive Strategy",
          "Subscriber Preference Profiling"
        ]
      },
      {
        icon: Mail,
        tag: "REGULAR UPDATES",
        title: "Newsletter Campaigns",
        description: "Regular emails that keep your brand top of mind.",
        deliverables: [
          "Curated Industry Insights & Tips",
          "Customer Stories & Highlights",
          "Founder Letters & Product Updates",
          "Engaging Polls & Micro-Surveys"
        ]
      },
      {
        icon: Megaphone,
        tag: "REVENUE SURGE",
        title: "Promotional Campaigns",
        description: "Offer and launch emails that drive quick sales.",
        deliverables: [
          "Diwali & Festival Promo Calendars",
          "Flash Sale Countdown Announcements",
          "Product Launch Hype Sequences",
          "Exclusive Subscriber-Only Perks"
        ]
      },
      {
        icon: Target,
        tag: "REVENUE RECOVERY",
        title: "Abandoned Cart Emails",
        description: "Recovering lost e-commerce sales automatically.",
        deliverables: [
          "Multi-Stage Trigger Timing",
          "Dynamic Product Card Insertion",
          "Objection Buster FAQs & Reviews",
          "Limited-Time Incentive Unlocks"
        ]
      },
      {
        icon: Users,
        tag: "LEAD NURTURING",
        title: "Lead Nurture Sequences",
        description: "Turning cold leads into ready-to-buy customers.",
        deliverables: [
          "Problem-Awareness Educational Guides",
          "Case Study Proof & Transformations",
          "Discovery Call & Consultation Pitches",
          "Automated Drip Scheduling"
        ]
      },
      {
        icon: ShieldCheck,
        tag: "CUSTOMER WIN-BACK",
        title: "Re-Engagement Campaigns",
        description: "Winning back inactive customers and old leads.",
        deliverables: [
          "We Miss You Automated Offers",
          "Feedback & Satisfaction Inquiries",
          "VIP Reactivation Discounts",
          "List Hygiene Auto-Sunset Rules"
        ]
      },
      {
        icon: Award,
        tag: "MULTI-CHANNEL",
        title: "WhatsApp & SMS Campaigns",
        description: "Direct messaging that pairs with email for more reach.",
        deliverables: [
          "WhatsApp Business API Integration",
          "Urgent Flash Sale SMS Alerts",
          "Order Updates & Confirmation Drips",
          "Direct Two-Way Chat Support Links"
        ]
      },
      {
        icon: TrendingUp,
        tag: "AUDIENCE GROWTH",
        title: "List Building & Lead Magnets",
        description: "Growing your list with offers people want.",
        deliverables: [
          "High-Converting Exit-Intent Popups",
          "Custom Downloadable Lead Magnets",
          "Embedded Inline Signup Bars",
          "GDPR & Data Privacy Compliance"
        ]
      }
    ],
    differentiators: {
      tag: "THE BRANDFORGE ADVANTAGE",
      title: "Why Businesses Choose BrandForge",
      subtitle: "Because we run web, ads, and content in-house too, we plug email into your whole funnel — leads from ads and your site flow straight into automated emails that follow up for you.",
      items: [
        {
          title: "Automated Flows That Sell While You Sleep",
          description: "Welcome, follow-up, and cart-recovery emails that run 24/7 without you touching them.",
          icon: Zap
        },
        {
          title: "Inbox, Not Spam — Verified Deliverability",
          description: "We set up your domain properly (SPF, DKIM, DMARC) so your emails actually get delivered to the primary inbox.",
          icon: ShieldCheck
        },
        {
          title: "Subject Lines That Get Opened",
          description: "We A/B test compelling curiosity hooks and preview text to find what makes your audience click.",
          icon: PenTool
        },
        {
          title: "Smart Behavioral Segmentation",
          description: "New leads, repeat buyers, and cold contacts each get the right message, not one generic blast.",
          icon: Users
        },
        {
          title: "Email + WhatsApp Unified Power",
          description: "We hit the same audience on two synchronized channels for far higher engagement and conversion.",
          icon: Target
        }
      ]
    },
    whatWeDo: {
      tag: "WHAT BRANDFORGE WILL DO FOR YOU",
      title: "What BrandForge Will Do For You",
      subtitle: "No spammy blasts, no guesswork. Here's what actually gets set up and running for you:",
      items: [
        {
          title: "Automated flows that sell while you sleep",
          description: "Welcome, follow-up, and cart-recovery emails that run 24/7 without you touching them"
        },
        {
          title: "Smart segmentation",
          description: "New leads, repeat buyers, and cold contacts each get the right message, not one generic email"
        },
        {
          title: "Inbox, not spam",
          description: "We set up your domain properly (SPF, DKIM) so your emails actually get delivered"
        },
        {
          title: "Subject lines that get opened",
          description: "We A/B test to find what makes your audience click"
        },
        {
          title: "Festival & offer campaigns",
          description: "Pongal, Diwali, and sale emails timed for maximum sales"
        },
        {
          title: "Email + WhatsApp combined",
          description: "We hit the same audience on two channels for far better response"
        },
        {
          title: "A clear revenue report",
          description: "You see how much money each campaign actually made, not just opens"
        },
        {
          title: "Ready-to-use templates",
          description: "Branded email designs you can reuse anytime"
        }
      ],
      conclusion: "Because we run web, ads, and content in-house too, we plug email into your whole funnel — leads from ads and your site flow straight into automated emails that follow up for you."
    },
    timeline: {
      tag: "HOW WE WORK",
      title: "How We Work",
      subtitle: "Our systematic 6-step email marketing roadmap from audit to automated revenue generation.",
      steps: [
        { num: "01", title: "Audit", desc: "We review your list, current emails, and setup" },
        { num: "02", title: "Strategy", desc: "We map the flows and campaigns your business needs" },
        { num: "03", title: "Build", desc: "Automations, copy, and designs set up in your tool" },
        { num: "04", title: "Launch", desc: "Flows go live and start running on their own" },
        { num: "05", title: "Optimize", desc: "We test subject lines, timing, and offers" },
        { num: "06", title: "Report", desc: "Monthly numbers on opens, clicks, and sales" }
      ]
    },
    whoWeHelp: {
      tag: "WHO WE WORK WITH",
      title: "Who We Work With in Coimbatore & Tamil Nadu",
      subtitle: "We set up email marketing for coaching institutes, e-commerce and retail brands, clinics, real estate, and B2B companies across Coimbatore and Tamil Nadu. If you have a list of leads or past customers, we'll turn it into a steady source of repeat sales.",
      ctaText: "Book a free email marketing audit — we'll review your list and current emails, then show you exactly how much repeat revenue you're leaving on the table.",
      industries: [
        { title: "Coaching Institutes", desc: "Automated student onboarding drips, batch commencement alerts, and webinar invite sequences that boost admissions." },
        { title: "E-Commerce & Retail Brands", desc: "Abandoned checkout recovery, new product drops, VIP loyalty perks, and festive sale announcements." },
        { title: "Clinics & Healthcare", desc: "Appointment reminder drips, post-consultation care guides, and patient trust newsletters." },
        { title: "Real Estate & Builders", desc: "Project launch teasers, construction progress updates, and site visit invitation sequences." },
        { title: "B2B Companies", desc: "Product catalog updates, case studies, and corporate client relationship nurture drip flows." },
        { title: "Local Service Businesses", desc: "Seasonal service reminders, customer feedback surveys, and referral reward campaigns." }
      ],
      certifications: [
        { label: "Mailchimp Resources (mailchimp.com/resources) & Google Email Sender Guidelines Compliant" },
        { label: "Real Campaign Result: A Coimbatore store's re-engagement flow recovered ₹1.2L in 60 days" },
        { label: "Deliverability Setup: Domain SPF, DKIM, DMARC records & inbox reputation warming" },
        { label: "Reviewed by BalaMurali, Email Lead, Story Smithy" }
      ]
    },
    faqs: [
      {
        q: "How much does email marketing cost in Coimbatore?",
        a: "It depends on how many emails and automations you need each month, plus your email tool's own fee. We offer monthly packages and share a clear price after understanding your list and goals."
      },
      {
        q: "I have a small list. Is email marketing still worth it?",
        a: "Yes. Even a few hundred engaged contacts can bring steady repeat sales. Email works on trust, not size — a small, warm list often beats a large, cold one."
      },
      {
        q: "Will my emails end up in the spam folder?",
        a: "Not if it's set up right. We configure your domain authentication and follow best practices for content and sending, which keeps your emails landing in the inbox."
      },
      {
        q: "What email tool do you use?",
        a: "We work with popular tools like Mailchimp, Brevo, and Klaviyo, and pick the best fit for your budget and needs. You keep full ownership of your account and list."
      },
      {
        q: "Can email marketing really bring repeat sales?",
        a: "Yes — that's its biggest strength. Automated follow-ups, offers, and re-engagement emails bring past customers back to buy again, often at almost no extra cost to you."
      }
    ],
    bottomCta: {
      title: "Book a Free Email Marketing Audit",
      subtitle: "We'll review your list and current emails, then show you exactly how much repeat revenue you're leaving on the table.",
      buttonText: "Claim Your Free Email Audit →"
    }
  },
  
  "brand-anvil": {
    slug: "brand-anvil",
    urlSlug: "/brand-positioning-agency-coimbatore",
    metaTitle: "Brand Positioning Agency in Coimbatore | BrandForge",
    metaDescription: "Looking for a brand positioning agency in Coimbatore? Brand Anvil by BrandForge helps you stand out and charge more. Book a free brand positioning session.",
    number: "08",
    eyebrow: "Brand Positioning Agency in Coimbatore | Brand Anvil by BrandForge",
    title: "Brand Positioning Agency in Coimbatore That Makes You the Obvious Choice",
    heroButtonText: "Book a Free Positioning Session →",
    subtitle: [
      "If customers only pick you when you're the cheapest, you don't have a brand — you have a price tag. Strong positioning is what lets you charge more, get chosen faster, and stop competing on discounts.",
      "Brand Anvil is the brand positioning studio inside BrandForge — a brand positioning agency in Coimbatore that shapes how the market sees you. We define what you stand for, who you're for, and why you're the obvious choice, then make that message consistent everywhere your customers meet you."
    ],
    bannerBg: "/brand-anvil-banner-illustration.png",
    icon: Target,
    metrics: [
      { value: "4.8x", label: "Pricing Power Multiple", desc: "Ability to command premium prices without margin erosion" },
      { value: "+340%", label: "Market Recall & Authority", desc: "Customer consideration surge vs generic rivals" },
      { value: "100%", label: "Strategic Category Moat", desc: "Defensible positioning across web, ads & sales" },
      { value: "14 Days", label: "Blueprint Turnaround", desc: "Complete brand book & cross-channel messaging rollout" },
    ],
    whyChooseUs: {
      tag: "WHAT IS BRAND POSITIONING (AND WHY IT DECIDES YOUR PRICE)",
      title: "What Is Brand Positioning (And Why It Decides Your Price)",
      description: "Positioning is the space your brand owns in a customer's mind. It's the reason someone picks you over the shop next door — even at a higher price. Without positioning, you blend in — and blending in means competing on price. That's a race nobody wins.",
      leadIn: "Get it right and you gain:",
      points: [
        "A clear reason to be chosen over cheaper rivals",
        "The ability to charge premium prices without pushback",
        "Customers who remember and recommend you",
        "Marketing that finally feels consistent, not random",
        "A brand that attracts the right customers, not just any"
      ],
      conclusion: "Without positioning, you blend in — and blending in means competing on price. That's a race nobody wins."
    },
    matrixTag: "WHAT AN AGENCY ACTUALLY DOES",
    matrixTitle: "WHAT DOES A BRAND POSITIONING AGENCY IN COIMBATORE DO?",
    matrixSubtitle: "A real brand positioning agency in Coimbatore digs into your business, market, and customers before writing a single tagline. Here's what Brand Anvil handles:",
    matrixRows: [
      {
        feature: "Market & competitor research",
        traditional: "Copying rival taglines blindly without research",
        brandforge: "Finding the gap you can own"
      },
      {
        feature: "Audience clarity",
        traditional: "Marketing vaguely to everyone and attracting nobody",
        brandforge: "Defining exactly who you're for (and who you're not)"
      },
      {
        feature: "Positioning statement",
        traditional: "Empty corporate buzzwords nobody remembers",
        brandforge: "The core idea your whole brand stands on"
      },
      {
        feature: "Messaging framework",
        traditional: "Inconsistent ad copy and scattered messaging",
        brandforge: "How you talk about yourself, everywhere"
      },
      {
        feature: "Brand story & voice",
        traditional: "Generic corporate bio that fails to evoke emotion",
        brandforge: "The narrative that makes people care"
      },
      {
        feature: "Rollout",
        traditional: "Positioning PDF that sits ignored in a drawer",
        brandforge: "Putting the new positioning across your site, social, and sales"
      }
    ],
    pillarsTag: "OUR SERVICES",
    pillarsTitle: "Our Brand Positioning Services",
    pillarsSubtitle: "We shape the right positioning for your stage — a new launch, a rebrand, or a business stuck competing on price.",
    pillars: [
      {
        icon: Target,
        tag: "CORE IDEA",
        title: "Brand Strategy & Positioning",
        description: "The core idea that sets you apart.",
        deliverables: [
          "Unique Value Proposition Definition",
          "Competitive Category Framing",
          "Long-Term Positioning Roadmap",
          "Market White-Space Opportunity Map"
        ]
      },
      {
        icon: PenTool,
        tag: "STICK & SELL",
        title: "Brand Messaging & Tagline",
        description: "Words that stick and sell.",
        deliverables: [
          "Signature Brand Taglines & Hooks",
          "Core Pitch & Elevator Statements",
          "Hero Value Statements for Web",
          "Objection-Buster Copy Frameworks"
        ]
      },
      {
        icon: Award,
        tag: "NARRATIVE",
        title: "Brand Story Development",
        description: "The narrative behind why you exist.",
        deliverables: [
          "Founder & Heritage Storytelling",
          "Brand Manifesto & Mission Creed",
          "Customer Hero Transformation Arc",
          "Internal Culture & Purpose Deck"
        ]
      },
      {
        icon: ShieldCheck,
        tag: "CHOOSE YOU",
        title: "Competitor Differentiation",
        description: "A clear reason to choose you, not them.",
        deliverables: [
          "Competitor Messaging Audit",
          "Differentiator Battle Cards",
          "Pricing Power Justification Matrix",
          "Category Distinction Moat"
        ]
      },
      {
        icon: Users,
        tag: "IDEAL BUYER",
        title: "Target Audience Definition",
        description: "Knowing exactly who to talk to.",
        deliverables: [
          "Ideal Customer Profiles (ICP)",
          "Buyer Persona Psychographics",
          "Customer Pain & Desire Maps",
          "Disqualification Criteria (Who You're Not For)"
        ]
      },
      {
        icon: Zap,
        tag: "PERSONALITY",
        title: "Brand Voice & Tone Guide",
        description: "A consistent personality across every channel.",
        deliverables: [
          "Brand Personality Archetypes",
          "Tone of Voice Spectrum Rules",
          "Vocabulary & Banned Words List",
          "Channel-Specific Copy Examples"
        ]
      },
      {
        icon: TrendingUp,
        tag: "TRANSFORMATION",
        title: "Rebranding & Repositioning",
        description: "Shifting how an existing brand is seen.",
        deliverables: [
          "Legacy Perception Audit",
          "Repositioning Transition Strategy",
          "Customer Migration Messaging",
          "Market Re-Introduction Campaign"
        ]
      },
      {
        icon: Layers,
        tag: "ONE RULEBOOK",
        title: "Brand Guidelines",
        description: "A single document that keeps everyone on message.",
        deliverables: [
          "Master Positioning Playbook",
          "Sales Pitch Deck & Script Guide",
          "Copywriting & Content Rulebook",
          "Executive Onboarding Handout"
        ]
      }
    ],
    differentiators: {
      tag: "THE BRAND ANVIL ADVANTAGE",
      title: "Why Businesses Choose Brand Anvil",
      subtitle: "And because BrandForge runs web, content, ads, and social in-house, your new positioning doesn't stay on paper — we push it live across every channel that touches your customer.",
      items: [
        {
          title: "A One-Line Positioning Statement",
          description: "The single idea your whole business can rally behind with complete focus and clarity.",
          icon: Target
        },
        {
          title: "A Clear 'Why Choose Us' Moat",
          description: "A sharp answer to why a customer should pick you over the cheaper option every time.",
          icon: ShieldCheck
        },
        {
          title: "Connected Directly to Web, Ads & Content",
          description: "We don't leave positioning in a folder — we deploy it directly across your website, ads, pitches, and campaigns.",
          icon: Zap
        },
        {
          title: "Competitor Gap Analysis",
          description: "We show you the exact space rivals have left wide open for your business to own.",
          icon: PenTool
        },
        {
          title: "The Ability to Command Higher Prices",
          description: "Sharp positioning shifts you from competing on discounts to being the undisputed obvious choice.",
          icon: Award
        }
      ]
    },
    whatWeDo: {
      tag: "WHAT BRAND ANVIL WILL DO FOR YOU",
      title: "What Brand Anvil Will Do For You",
      subtitle: "No vague \"brand vibes\" and mood boards. Here's what you actually walk away with:",
      items: [
        {
          title: "A one-line positioning statement",
          description: "The single idea your whole business can rally behind"
        },
        {
          title: "A clear \"why choose us\"",
          description: "A sharp answer to why a customer should pick you over the cheaper option"
        },
        {
          title: "A defined ideal customer",
          description: "So you stop marketing to everyone and start attracting the right people"
        },
        {
          title: "A messaging cheat-sheet",
          description: "Ready-to-use lines for your website, ads, pitches, and social"
        },
        {
          title: "A brand voice guide",
          description: "So every post and email sounds unmistakably like you"
        },
        {
          title: "Competitor gap analysis",
          description: "We show you the space rivals have left wide open for you to own"
        },
        {
          title: "A full brand guidelines document",
          description: "One file your team and any designer can follow forever"
        },
        {
          title: "A rollout plan",
          description: "Exactly where and how to launch the new positioning, not just a PDF that sits in a drawer"
        }
      ],
      conclusion: "And because BrandForge runs web, content, ads, and social in-house, your new positioning doesn't stay on paper — we push it live across every channel that touches your customer."
    },
    timeline: {
      tag: "HOW WE WORK",
      title: "How We Work",
      subtitle: "Our systematic 6-step brand positioning roadmap from discovery to complete market rollout.",
      steps: [
        { num: "01", title: "Discovery", desc: "Deep dive into your business, goals, and customers" },
        { num: "02", title: "Research", desc: "Market, competitor, and audience analysis" },
        { num: "03", title: "Positioning", desc: "We define the space you'll own" },
        { num: "04", title: "Messaging", desc: "Statement, story, voice, and taglines" },
        { num: "05", title: "Guidelines", desc: "Everything documented in one brand book" },
        { num: "06", title: "Rollout", desc: "Launching the positioning across your channels" }
      ]
    },
    whoWeHelp: {
      tag: "WHO WE WORK WITH",
      title: "Who We Work With in Coimbatore & Tamil Nadu",
      subtitle: "We position new startups, family businesses ready to modernize, coaching institutes, clinics, D2C brands, and service businesses across Coimbatore and Tamil Nadu. If you're tired of competing on price, positioning is where the fix starts.",
      ctaText: "Book a free brand positioning session — in 30 minutes we'll pinpoint what makes you different and the one shift that could let you charge more.",
      industries: [
        { title: "New Startups & Tech Ventures", desc: "Category framing, pitch narrative development, and early-stage launch positioning." },
        { title: "Family Businesses Ready to Modernize", desc: "Preserving heritage trust while elevating market perception to appeal to modern buyers." },
        { title: "Coaching & Education Institutes", desc: "Establishing premier curriculum authority that commands premium admissions fees." },
        { title: "Clinics & Healthcare Practices", desc: "Specialist medical authority positioning and patient trust narratives." },
        { title: "D2C Brands & Retail", desc: "Lifestyle positioning, packaging story copy, and customer loyalty frameworks." },
        { title: "Service Businesses", desc: "High-ticket positioning frameworks that eliminate price-matching wars." }
      ],
      certifications: [
        { label: "Interbrand (interbrand.com) & Harvard Business Review (hbr.org) Strategy Standards Compliant" },
        { label: "Real Repositioning Case Study: Led ThoughtFlows to BrandForge rebrand unlocking 4.8x pricing power" },
        { label: "Sample Deliverables: Master Brand Book, ICP Personas & Battle-Tested Sales Scripts" },
        { label: "Reviewed by BalaMurali, Brand Strategist, Brand Anvil" }
      ]
    },
    faqs: [
      {
        q: "What's the difference between branding and brand positioning?",
        a: "Branding is how you look — logo, colours, design. Positioning is how you're seen — the idea and space you own in a customer's mind. Positioning comes first; good branding then brings it to life."
      },
      {
        q: "How much does brand positioning cost in Coimbatore?",
        a: "It depends on the depth of research and how much rollout you need. We share a clear, fixed quote after a discovery call. Think of it as an investment that lets you charge more, not a one-time expense."
      },
      {
        q: "My business is small. Do I really need positioning?",
        a: "Especially then. Small businesses can't outspend big ones, so standing out on price is a losing game. Sharp positioning is how a small brand wins customers without the biggest budget."
      },
      {
        q: "How long does the brand positioning process take?",
        a: "A focused positioning project usually takes 2 to 4 weeks, depending on research depth and how many rounds of feedback are needed. You get a clear timeline upfront."
      },
      {
        q: "Can you reposition my existing brand?",
        a: "Yes. Repositioning is one of our core services. We shift how the market sees an existing business, carefully, so you gain a sharper identity without losing the customers you already have."
      }
    ],
    bottomCta: {
      title: "Book a Free Brand Positioning Session",
      subtitle: "In 30 minutes we'll pinpoint what makes you different and the one shift that could let you charge more.",
      buttonText: "Book Your Free Positioning Session →"
    }
  },
  
  "visual-id": {
    slug: "visual-id",
    urlSlug: "/brand-identity-design-agency-coimbatore",
    metaTitle: "Brand Identity Design Agency in Coimbatore | BrandForge",
    metaDescription: "Need a brand identity design agency? Identity Forge by BrandForge crafts logos, colours & complete brand kits that make you memorable. Book a free brand call.",
    number: "09",
    eyebrow: "Brand Identity Design Agency in Coimbatore | Identity Forge by BrandForge",
    title: "Brand Identity Design Agency in Coimbatore That Makes You Unforgettable",
    heroButtonText: "Book a Free Brand Call →",
    subtitle: [
      "A cheap logo and mismatched colours quietly tell customers you're a small, unserious business — even when you're not. Your brand identity is the first judgement people make about you, and they make it in seconds.",
      "Identity Forge is the brand identity studio inside BrandForge — a brand identity design agency that builds complete, professional identities, not just logos. As a brand identity design agency in Coimbatore, we craft the logo, colours, fonts, and full brand kit that make you look established and stay memorable everywhere customers see you."
    ],
    bannerBg: "/visual-id-banner-illustration.png",
    icon: Palette,
    metrics: [
      { value: "100%", label: "Iconic Design Originality", desc: "Custom vector geometry, dynamic 3D tokens & bespoke typography" },
      { value: "4.5x", label: "Perceived Value Increase", desc: "Immediate customer trust & premium pricing power" },
      { value: "100+", label: "Brand System Page Manual", desc: "Comprehensive design rulebook covering print, digital & 3D" },
      { value: "7-14 Days", label: "Complete Kit Delivery", desc: "Full multi-format logo files, palette & social asset handover" },
    ],
    whyChooseUs: {
      tag: "WHY YOUR BRAND IDENTITY DECIDES FIRST IMPRESSIONS",
      title: "Why Your Brand Identity Decides First Impressions",
      description: "People judge a business by how it looks before they ever try it. A strong, consistent identity earns trust instantly. Get it right and you gain: instant credibility, recognition, trust, consistency, and the ability to command higher prices. A DIY logo saves a little money now and costs you customers for years. Identity is where looking the part starts.",
      leadIn: "Get it right and you gain:",
      points: [
        "Instant credibility — you look established, not amateur",
        "Recognition — customers remember and spot you everywhere",
        "Trust — a polished look signals a serious business",
        "Consistency — every post, card, and sign feels like one brand",
        "The ability to charge more — professional brands command it"
      ],
      conclusion: "A DIY logo saves a little money now and costs you customers for years. Identity is where looking the part starts."
    },
    matrixTag: "WHAT AN AGENCY ACTUALLY DOES",
    matrixTitle: "WHAT DOES A BRAND IDENTITY DESIGN AGENCY DO?",
    matrixSubtitle: "A real brand identity design agency builds a complete visual system, not a one-off logo. Here's what Identity Forge handles:",
    matrixRows: [
      {
        feature: "Logo design",
        traditional: "Single flat low-res PNG with no variations or vector formats",
        brandforge: "A mark that's simple, unique, and works everywhere across web, print & apps"
      },
      {
        feature: "Colour palette",
        traditional: "Random uncalibrated colours that clash and wash out in print",
        brandforge: "Colours chosen for your industry and audience"
      },
      {
        feature: "Typography",
        traditional: "Mismatched system fonts that dilute your brand credibility",
        brandforge: "Fonts that carry your personality across all text"
      },
      {
        feature: "Visual style",
        traditional: "Inconsistent graphics and mismatched stock photo styles",
        brandforge: "The overall look for graphics, photos, and layouts"
      },
      {
        feature: "Brand assets",
        traditional: "No business templates, leaving staff to improvise designs",
        brandforge: "Cards, letterheads, social kits, and templates"
      },
      {
        feature: "Brand guidelines",
        traditional: "Zero documentation leading to branding chaos over time",
        brandforge: "A rulebook so your brand stays consistent forever"
      }
    ],
    pillarsTag: "OUR SERVICES",
    pillarsTitle: "Our Brand Identity Design Services",
    pillarsSubtitle: "We build the right identity for your stage — a fresh startup, a rebrand, or a business that has simply outgrown its old look.",
    pillars: [
      {
        icon: Palette,
        tag: "CORE MARK",
        title: "Logo Design",
        description: "Primary, secondary, and icon versions for every use.",
        deliverables: [
          "Primary & Secondary Logo Marks",
          "Compact Icon & Favicon Suite",
          "Monochrome & Dark/Light Variants",
          "Full Vector AI, EPS & SVG Master Files"
        ]
      },
      {
        icon: Box,
        tag: "COMPLETE SUITE",
        title: "Complete Brand Identity Kits",
        description: "Logo, colours, fonts, and assets in one package.",
        deliverables: [
          "Full Brand Asset Library",
          "Ready-to-Use Vector Icons",
          "Digital & Print Asset Packaging",
          "Cloud-Accessible Brand Drive"
        ]
      },
      {
        icon: PenTool,
        tag: "VISUAL SYSTEM",
        title: "Colour & Typography Systems",
        description: "A palette and fonts that stay consistent everywhere.",
        deliverables: [
          "Primary & Secondary Color Scales",
          "Accessible Contrast Ratios",
          "Header & Body Type Pairing Specs",
          "Webfont & Desktop Font Licenses"
        ]
      },
      {
        icon: Layers,
        tag: "STATIONERY",
        title: "Business Stationery",
        description: "Cards, letterheads, and invoices that look the part.",
        deliverables: [
          "Luxury Business Card Designs",
          "Official Letterhead & Envelope Templates",
          "Clickable HTML Email Signatures",
          "Branded Invoice & Receipt Layouts"
        ]
      },
      {
        icon: Megaphone,
        tag: "SOCIAL ASSETS",
        title: "Social Media Brand Kits",
        description: "Templates so every post looks unmistakably yours.",
        deliverables: [
          "Instagram Post & Story Templates",
          "YouTube & LinkedIn Banner Covers",
          "Reel & Short-Form Video Intro Frames",
          "Branded Carousel Slide Layouts"
        ]
      },
      {
        icon: Target,
        tag: "PACKAGING",
        title: "Packaging & Label Design",
        description: "Product identity that stands out on the shelf.",
        deliverables: [
          "Product Box & Pouch Dielines",
          "Label Design & Barcode Formatting",
          "Luxury Unboxing Insert Cards",
          "3D Photorealistic Packaging Renders"
        ]
      },
      {
        icon: TrendingUp,
        tag: "EVOLUTION",
        title: "Rebranding & Logo Redesign",
        description: "A modern look without losing what people already know.",
        deliverables: [
          "Legacy Brand Equity Audit",
          "Vector Modernization & Cleanup",
          "Brand Evolution Transition Deck",
          "Announcement Assets & PR Graphics"
        ]
      },
      {
        icon: ShieldCheck,
        tag: "BRAND PLAYBOOK",
        title: "Brand Guidelines Document",
        description: "One file that keeps every designer on brand.",
        deliverables: [
          "Complete Brand Guidelines PDF",
          "Logo Clear Space & Minimum Sizing Rules",
          "Incorrect Usage & Violation Examples",
          "Vendor & Designer Onboarding Sheet"
        ]
      }
    ],
    differentiators: {
      tag: "THE IDENTITY FORGE ADVANTAGE",
      title: "Why Businesses Choose Identity Forge",
      subtitle: "As a brand identity design agency in Coimbatore that also handles brand positioning, web development, and social media in-house, your new identity goes live properly — carried straight onto your website, pages, and campaigns, not left sitting in a folder.",
      items: [
        {
          title: "Complete Visual Systems, Not Just A Logo",
          description: "We craft full brand ecosystems — colours, typography, stationery, and social templates that work together seamlessly.",
          icon: Box
        },
        {
          title: "Every Source File & Format You'll Ever Need",
          description: "PNG, SVG, PDF, and master vector source files delivered so you are never stuck asking a designer later.",
          icon: Palette
        },
        {
          title: "Connected Directly to Web, Ads & Social",
          description: "Because BrandForge runs web, social, and content in-house, your new identity goes live immediately without friction.",
          icon: Zap
        },
        {
          title: "Real Concepts & Collaborative Revisions",
          description: "Multiple distinct artistic directions and structured revision rounds, never a single take-it-or-leave-it mock.",
          icon: PenTool
        },
        {
          title: "Established Credibility That Commands Higher Prices",
          description: "A polished, unforgettable identity signals an industry-leading business, giving you pricing confidence from day one.",
          icon: ShieldCheck
        }
      ]
    },
    whatWeDo: {
      tag: "WHAT IDENTITY FORGE WILL DO FOR YOU",
      title: "What Identity Forge Will Do For You",
      subtitle: "No single flat logo file and goodbye. Here's the complete kit you actually walk away with:",
      items: [
        {
          title: "Multiple logo variations",
          description: "Full, compact, and icon versions for web, print, and app icons"
        },
        {
          title: "Every file format you'll ever need",
          description: "PNG, SVG, PDF, and source files, so you're never stuck asking a designer"
        },
        {
          title: "A defined colour palette",
          description: "Exact HEX, RGB, and CMYK codes for screen and print"
        },
        {
          title: "Chosen brand fonts",
          description: "A clear heading and body font pairing you can use everywhere"
        },
        {
          title: "Ready-to-use social templates",
          description: "So your posts look professional from day one"
        },
        {
          title: "Business card & stationery designs",
          description: "Print-ready, no extra work"
        },
        {
          title: "A complete brand guidelines PDF",
          description: "The rulebook that keeps you consistent as you grow"
        },
        {
          title: "Concepts to choose from",
          description: "Real options and revisions, not a single take-it-or-leave-it design"
        }
      ],
      conclusion: "And because BrandForge runs web, social, and content in-house, your new identity goes live properly — carried straight onto your website, pages, and campaigns, not left sitting in a folder."
    },
    timeline: {
      tag: "HOW WE WORK",
      title: "How We Work",
      subtitle: "Our systematic 6-step brand identity design roadmap from discovery to complete rollout.",
      steps: [
        { num: "01", title: "Discovery", desc: "We learn your business, audience, and personality" },
        { num: "02", title: "Research & moodboard", desc: "Direction agreed before any design starts" },
        { num: "03", title: "Concepts", desc: "Multiple logo and identity directions to choose from" },
        { num: "04", title: "Refine", desc: "We polish your chosen direction with your feedback" },
        { num: "05", title: "Build the kit", desc: "Full assets, files, and guidelines prepared" },
        { num: "06", title: "Handover & rollout", desc: "Everything delivered and put live across your channels" }
      ]
    },
    whoWeHelp: {
      tag: "WHO WE WORK WITH",
      title: "Who We Work With in Coimbatore & Tamil Nadu",
      subtitle: "We design identities for new startups, family businesses ready for a modern look, coaching institutes, clinics, cafes and restaurants, and D2C product brands across Coimbatore and Tamil Nadu. If you want to look established and be remembered, this is where it begins.",
      ctaText: "Book a free brand identity call — show us your business and we'll share exactly how a professional identity would make you look established and unforgettable.",
      industries: [
        { title: "New Startups & Tech Ventures", desc: "Modern, scalable vector marks, app icons, and digital-first design tokens that command investor trust." },
        { title: "Family Businesses Modernizing", desc: "Elevating traditional enterprises with clean, contemporary identities while honoring their trusted heritage." },
        { title: "Coaching & Education Institutes", desc: "Prestigious emblems, prospectus layouts, and campus identity systems that inspire student enrollment." },
        { title: "Clinics, Doctors & Healthcare", desc: "Reassuring, highly professional healthcare identities, prescription stationery, and clinic signage." },
        { title: "Cafes & Restaurants", desc: "Appetizing menus, packaging labels, table collateral, and Instagrammable visual identities that draw diners." },
        { title: "D2C & Retail Product Brands", desc: "Standout box dielines, pouch labels, and shelf-popping packaging systems that convert retail shoppers." }
      ],
      certifications: [
        { label: "Behance (behance.net) & Adobe Design Standards (adobe.com) Compliant Framework" },
        { label: "Real Portfolio: Built BrandForge and Sonic Prints visual identities with complete before/after brand kits" },
        { label: "Delivered Formats: Full vector AI, EPS, SVG, print-ready PDF, and web PNG source suites" },
        { label: "Reviewed by BalaMurali, Lead Designer, Identity Forge" }
      ]
    },
    faqs: [
      {
        q: "What's the difference between a logo and a brand identity?",
        a: "A logo is one mark. A brand identity is the full system — logo, colours, fonts, and style — that makes your business recognisable everywhere. A logo alone isn't enough to look consistent and professional."
      },
      {
        q: "How much does brand identity design cost in Coimbatore?",
        a: "It depends on whether you need just a logo or a complete brand kit with stationery and guidelines. We share a clear, fixed quote after understanding your needs — no hidden charges."
      },
      {
        q: "How long does it take to design a brand identity?",
        a: "A logo alone can take about a week. A complete brand identity with guidelines usually takes 2 to 3 weeks, allowing for concepts and revisions. You get a clear timeline before we begin."
      },
      {
        q: "Will I get all the logo files and formats?",
        a: "Yes. You receive every format you need — PNG, SVG, PDF, and source files — plus colour codes and fonts. You'll never be stuck unable to use your own brand."
      },
      {
        q: "Can you redesign my existing logo and brand?",
        a: "Yes. We modernise existing brands carefully, keeping what customers already recognise while giving you a fresh, professional look that fits where your business is headed."
      }
    ],
    bottomCta: {
      title: "Book a Free Brand Identity Call",
      subtitle: "Show us your business and we'll share exactly how a professional identity would make you look established and unforgettable.",
      buttonText: "Book Your Free Brand Call →"
    }
  },
  
  "commercial-video": {
    slug: "commercial-video",
    urlSlug: "/video-production-editing-company-coimbatore",
    metaTitle: "Video Production & Editing Company in Coimbatore | BrandForge",
    metaDescription: "Looking for a video production and editing company in Coimbatore? BrandForge creates ad films, reels, corporate videos & motion graphics. Get a free quote.",
    number: "10",
    eyebrow: "Video Production & Editing Company in Coimbatore | BrandForge",
    title: "Video Production & Editing Company in Coimbatore That Makes Videos Sell",
    heroButtonText: "Get a Free Video Quote →",
    subtitle: [
      "Video is how people discover brands today — on Instagram Reels, YouTube, WhatsApp, and even your own website. But a video that looks nice isn't enough. It has to grab attention in the first few seconds and give people a reason to act.",
      "BrandForge is a video production and editing company in Coimbatore that handles everything from script to final edit. We shoot ad films, reels, product videos, corporate films, and testimonials, and we edit your existing footage into content built for each platform — so your videos don't just get views, they bring in enquiries."
    ],
    bannerBg: "/commercial-video-banner-illustration.png",
    icon: Video,
    metrics: [
      { value: "Script → Edit", label: "End-to-End Production", desc: "Concept, shoot, editing, and delivery under one roof" },
      { value: "9:16 · 1:1 · 16:9", label: "Every Platform Format", desc: "Reels, feed, YouTube, and website versions" },
      { value: "Tamil + English", label: "Voiceover & Subtitles", desc: "Videos that speak to local and wider audiences" },
      { value: "2–3 Weeks", label: "Typical Turnaround", desc: "From script approval to final delivery" },
    ],
    whyChooseUs: {
      tag: "WHY VIDEO MATTERS",
      title: "Why Your Business Needs Professional Video",
      description: "Customers scroll past plain photos and long text. A well-made video explains your product, shows your space, and builds trust faster than anything else. For Coimbatore businesses competing online, video is often the difference between being noticed and being skipped.",
      leadIn: "Professional video helps your business:",
      points: [
        "Stop the scroll with a strong hook in the first 3 seconds",
        "Explain your product or service quickly and clearly",
        "Build trust with real faces, real places, and real customers",
        "Get better results from Meta and YouTube ads",
        "Keep visitors on your website longer and turn them into enquiries"
      ]
    },
    matrixTag: "WHAT A VIDEO COMPANY ACTUALLY DOES",
    matrixTitle: "WHAT DOES A VIDEO PRODUCTION COMPANY IN COIMBATORE DO?",
    matrixSubtitle: "A good video production partner does far more than point a camera. Here's how a planned BrandForge production compares with a quick, unplanned shoot:",
    matrixRows: [
      { feature: "Planning & Script", traditional: "Shoot first, figure out the story later", brandforge: "Clear script and storyboard built around your goal" },
      { feature: "The Hook", traditional: "Slow intros that viewers skip", brandforge: "Opening seconds designed to stop the scroll" },
      { feature: "Shoot Quality", traditional: "Phone footage with poor light and sound", brandforge: "Professional camera, lighting, and audio setup" },
      { feature: "Editing", traditional: "Basic cuts with generic music", brandforge: "Pacing, colour grading, motion graphics, and licensed music" },
      { feature: "Formats", traditional: "One horizontal video squeezed into Reels", brandforge: "Separate 9:16, 1:1, and 16:9 versions for each platform" },
      { feature: "Purpose", traditional: "Looks nice but has no call to action", brandforge: "Every video ends with a clear next step for the viewer" }
    ],
    pillarsTag: "OUR SERVICES",
    pillarsTitle: "Our Video Production & Editing Services",
    pillarsSubtitle: "From a single reel to a full ad campaign, we produce and edit videos for every stage of your marketing.",
    pillars: [
      { icon: Video, tag: "AD FILMS", title: "Ad Films & Commercial Videos", description: "Short, persuasive ad videos for Meta, YouTube, and OTT, designed to drive enquiries and sales.", deliverables: ["Concept & Script", "Professional Shoot", "15s / 30s / 60s Cuts", "Call-to-Action Endings"] },
      { icon: Zap, tag: "REELS", title: "Instagram Reels & YouTube Shorts", description: "Fast, trend-aware short videos that grow your reach and keep your social media active.", deliverables: ["Monthly Reel Batches", "Hook-First Editing", "Captions & Subtitles", "Trending Audio Guidance"] },
      { icon: PenTool, tag: "EDITING", title: "Professional Video Editing", description: "Send us your raw footage and we turn it into polished, platform-ready videos.", deliverables: ["Cutting & Pacing", "Colour Correction & Grading", "Sound Clean-Up & Music", "Subtitles in Tamil / English"] },
      { icon: Box, tag: "PRODUCT", title: "Product & E-commerce Videos", description: "Clean product videos that show features, sizes, and use cases for your website, Amazon, and ads.", deliverables: ["Studio Product Shoots", "Feature Close-Ups", "How-To-Use Videos", "Marketplace-Ready Formats"] },
      { icon: Globe, tag: "CORPORATE", title: "Corporate & Brand Films", description: "Company profiles, factory and facility tours, and brand story films for your website, investors, and trade shows.", deliverables: ["Brand Story Film", "Facility Walkthrough", "Founder Interviews", "Recruitment Videos"] },
      { icon: Users, tag: "TESTIMONIALS", title: "Customer Testimonial Videos", description: "Real customers sharing real experiences — the most convincing video you can put on your website or ads.", deliverables: ["Interview Planning", "On-Location Shoot", "Short & Long Edits", "Quote Cards for Social"] },
      { icon: Layers, tag: "MOTION", title: "Motion Graphics & Explainer Videos", description: "Animated explainers, logo animations, and 2D/3D motion graphics that make complex ideas simple.", deliverables: ["Explainer Animation", "Logo Reveal", "Animated Infographics", "Text & Title Animation"] },
      { icon: TrendingUp, tag: "TESTING", title: "Ad Creative Variations", description: "Multiple hook and ending versions of your ad so your campaigns can test and find the best performer.", deliverables: ["Multiple Opening Hooks", "Alternate CTAs", "Aspect Ratio Versions", "Quick Iteration Edits"] }
    ],
    differentiators: {
      tag: "THE BRANDFORGE ADVANTAGE",
      title: "Why Businesses Choose BrandForge for Video Production",
      subtitle: "We're a digital marketing agency first, so every video is made with a clear goal — views that turn into enquiries, not just a nice-looking file.",
      items: [
        { title: "Made for Marketing, Not Just Looks", description: "Scripts and edits are planned around hooks, attention, and a clear call to action.", icon: Target },
        { title: "Shoot + Edit Under One Roof", description: "Concept, filming, editing, motion graphics, and subtitles handled by one team.", icon: Video },
        { title: "Every Platform Covered", description: "We deliver vertical, square, and widescreen versions so one shoot works everywhere.", icon: Layers },
        { title: "Local & Multilingual", description: "We shoot across Coimbatore and Tamil Nadu, with Tamil and English voiceovers and subtitles.", icon: Globe },
        { title: "Connected to Your Ads", description: "Our paid media team uses your videos in live campaigns and tells us what's working.", icon: BarChart3 }
      ]
    },
    timeline: {
      tag: "OUR PRODUCTION PROCESS",
      title: "How We Produce Your Video",
      subtitle: "A simple, transparent process so you always know what's happening and what comes next.",
      steps: [
        { num: "01", title: "DISCOVERY CALL", desc: "We learn about your business, audience, goal, and where the video will be used." },
        { num: "02", title: "CONCEPT & SCRIPT", desc: "We write the script and plan the key scenes, hook, and call to action for your approval." },
        { num: "03", title: "PRE-PRODUCTION", desc: "Locations, talent, props, shot list, and shoot schedule are fixed in advance." },
        { num: "04", title: "SHOOT DAY", desc: "Our crew films with professional camera, lighting, and audio equipment." },
        { num: "05", title: "EDITING & GRADING", desc: "We cut, colour grade, add music, graphics, and subtitles." },
        { num: "06", title: "REVIEW & REVISIONS", desc: "You review the draft and we make agreed changes." },
        { num: "07", title: "MULTI-FORMAT EXPORT", desc: "Final videos are delivered in every size you need for each platform." },
        { num: "08", title: "LAUNCH SUPPORT", desc: "We can publish, boost, or run your videos as ads through our in-house teams." }
      ]
    },
    whoWeHelp: {
      tag: "WHO WE WORK WITH",
      title: "Who We Make Videos For in Coimbatore & Tamil Nadu",
      subtitle: "We produce videos for manufacturers, retailers, restaurants, clinics, education institutes, real estate developers, D2C brands, and service businesses across Coimbatore and Tamil Nadu.",
      industries: [
        { title: "Manufacturing & Industrial", desc: "Factory tours, machine demos, and corporate films for Coimbatore's industrial businesses." },
        { title: "Retail, Textiles & Jewellery", desc: "Collection launches, festive ads, and in-store reels that bring customers in." },
        { title: "Restaurants & Food Brands", desc: "Mouth-watering food reels, menu videos, and behind-the-kitchen stories." },
        { title: "Clinics & Healthcare", desc: "Doctor introductions, patient testimonials, and treatment explainers that build trust." },
        { title: "Education & Coaching", desc: "Campus tours, faculty videos, and student success stories for admissions." },
        { title: "Real Estate & Construction", desc: "Project walkthroughs, drone shots, and site-progress videos for buyers." }
      ],
      certifications: [
        { label: "Complete process: concept, script, shoot, edit, motion graphics, and subtitles" },
        { label: "Delivered in 9:16, 1:1, and 16:9 formats for every platform" },
        { label: "Licensed music and royalty-free assets only" },
        { label: "Reviewed by BalaMurali, Founder & MD, BrandForge" }
      ]
    },
    faqs: [
      { q: "How much does video production cost in Coimbatore?", a: "It depends on the type of video, shoot duration, locations, talent, and editing work. A batch of reels costs far less than a full ad film. After a short call, we share a clear, itemised quote." },
      { q: "Do you only edit videos, or do you shoot as well?", a: "Both. We handle complete production — script, shoot, and edit — and we also offer editing-only services if you already have raw footage." },
      { q: "How long does it take to produce a video?", a: "Reels and short edits can be ready within a few days. A full ad film or corporate video usually takes 2 to 3 weeks from script approval to final delivery." },
      { q: "Do you provide Tamil voiceovers and subtitles?", a: "Yes. We offer Tamil and English voiceovers and subtitles, and can arrange other languages if your audience needs them." },
      { q: "Can you shoot at our shop, factory, or office in Coimbatore?", a: "Yes. We shoot on location across Coimbatore and Tamil Nadu, including shops, factories, clinics, campuses, and project sites." },
      { q: "Will I get videos in different sizes for Instagram and YouTube?", a: "Yes. Every project can be delivered in vertical 9:16 for Reels and Shorts, square 1:1 for feeds, and 16:9 widescreen for YouTube and your website." }
    ],
    bottomCta: {
      title: "Get a Free Video Production Quote",
      subtitle: "Tell us what you need and we'll suggest the right video format, a script idea, and a clear price.",
      buttonText: "Request My Free Video Quote →"
    }
  },

  "cro-revenue": {
    slug: "cro-revenue",
    number: "11",
    eyebrow: "INSIGHT FURNACE / CRO REVENUE LIFT",
    title: "DOUBLE YOUR WEBSITE CONVERSION RATES WITHOUT INCREASING AD SPEND",
    subtitle: "We run data-driven A/B testing, user session recording analysis, and checkout friction removal to squeeze maximum profit from existing traffic.",
    bannerBg: "/cro-revenue-banner-illustration.png",
    icon: Gauge,
    metrics: [
      { value: "+118%", label: "Average Conversion Rate Lift", desc: "Direct increase in visitor-to-customer conversion" },
      { value: "$28M+", label: "Client Revenue Lift Generated", desc: "Pure profit added through CRO optimization" },
      { value: "<0.1%", label: "Checkout Friction Rate", desc: "Seamless single-click purchasing funnel" },
      { value: "500+", label: "A/B Tests Executed", desc: "Data-proven statistical win record" },
    ],
    matrixTag: "CONVERSION LIFT",
    matrixTitle: "GUESSWORK WEBDESIGN VS BRANDFORGE CRO FURNACE",
    matrixSubtitle: "Stop guessing what your users want. Use scientific A/B testing to double conversion rates.",
    matrixRows: [
      { feature: "Design Changes", traditional: "Changing button colors based on opinion", brandforge: "Data-driven A/B tests backed by session heatmaps" },
      { feature: "Checkout Flow", traditional: "5-step slow form with required account creation", brandforge: "1-click express checkout & dynamic payment options" },
      { feature: "Mobile Usability", traditional: "Small unclickable buttons on mobile", brandforge: "Thumb-friendly mobile UI & sticky buy bars" },
      { feature: "Value Proposition", traditional: "Vague headlines that confuse buyers", brandforge: "Clarity-first headline testing & trust badges" },
    ],
    pillars: [
      { icon: Gauge, tag: "AUDIT", title: "Friction Point & Heatmap Audit", description: "Analyze user session recordings, click heatmaps, and funnel drop-off points to spot conversion blockers.", deliverables: ["Hotjar/FullStory Audit", "Funnel Drop-Off Matrix", "UX Friction Diagnosis"] },
      { icon: Zap, tag: "A/B TESTING", title: "Statistical A/B Testing Engine", description: "Run high-velocity split tests on headlines, offer stacks, product images, and CTA buttons.", deliverables: ["VWO / Optimizely Setup", "Statistical Significance Check", "Winner Implementation"] },
      { icon: Box, tag: "CHECKOUT UX", title: "1-Click Express Checkout Optimization", description: "Streamline checkout forms to eliminate extra fields, add Apple Pay/Shop Pay, and boost conversion.", deliverables: ["1-Click Checkout Flow", "Apple Pay / Shop Pay Setup", "Address Auto-Complete"] },
      { icon: ShieldCheck, tag: "TRUST BADGES", title: "Social Proof & Trust Architecture", description: "Inject strategically placed customer reviews, security badges, and money-back guarantees.", deliverables: ["Dynamic Review Injection", "Security Badge Stack", "Live Social Proof Popups"] },
      { icon: PenTool, tag: "OFFER STACK", title: "Offer Architecture & Bundle Upsells", description: "Design bundle offers, free shipping thresholds, and post-purchase upsells to increase Average Order Value (AOV).", deliverables: ["Free Shipping Meter", "In-Cart Cross-Sells", "Post-Purchase 1-Click Upsell"] },
      { icon: TrendingUp, tag: "MOBILE CRO", title: "Mobile-First Conversion UX", description: "Optimize mobile navigation, sticky add-to-cart bars, and fast touch interactions.", deliverables: ["Sticky Buy Bar", "Mobile Thumb Zone UX", "Sub-Second Mobile Load"] },
    ],
    faqs: [
      { q: "How much traffic do we need for CRO A/B testing?", a: "To run statistically significant A/B tests, your website should ideally have at least 15,000 to 30,000 monthly visitors." },
      { q: "How quickly will we see an increase in conversion rate?", a: "Immediate friction fixes (like adding sticky buy bars and fixing mobile checkout breaks) show instant results within 7 days." },
      { q: "Will A/B testing break our website or slow it down?", a: "Never. We use asynchronous lightweight testing scripts that do not slow down page load or impact site stability." },
      { q: "What is the typical conversion rate increase you achieve?", a: "Our clients typically see a 30% to 120% relative increase in conversion rate within 90 days." },
    ],
  },

  "reputation-shield": {
    slug: "reputation-shield",
    urlSlug: "/brand-reputation-management-coimbatore",
    metaTitle: "Brand Reputation Management in Coimbatore | BrandForge",
    metaDescription: "Protect and grow your brand's reputation in Coimbatore. BrandForge manages Google reviews, review replies, monitoring & search reputation. Book a free audit.",
    number: "12",
    eyebrow: "Brand Reputation Management in Coimbatore | Reputation Shield by BrandForge",
    title: "Brand Reputation Management in Coimbatore That Builds Trust Before the First Call",
    heroButtonText: "Get a Free Reputation Audit →",
    subtitle: [
      "Before anyone in Coimbatore visits your store, books your clinic, or calls your office, they search your name. What they find — your Google rating, recent reviews, and how you reply — often decides whether they choose you or the business next door.",
      "Reputation Shield is the brand reputation management service by BrandForge. We help you earn more genuine reviews from happy customers, respond to every review professionally, monitor what's said about you online, and make sure the right information shows up when people search for your brand."
    ],
    bannerBg: "/reputation-shield-banner-illustration.png",
    icon: ShieldCheck,
    metrics: [
      { value: "Google + More", label: "Review Platforms Managed", desc: "Google, Justdial, Practo, Facebook & industry sites" },
      { value: "Every Review", label: "Answered Professionally", desc: "Consistent, on-brand replies to good and bad reviews" },
      { value: "0", label: "Fake Reviews. Ever.", desc: "Only genuine reviews from real customers" },
      { value: "Monthly", label: "Reputation Report", desc: "Ratings, review volume, sentiment, and mentions" },
    ],
    whyChooseUs: {
      tag: "WHY REPUTATION MATTERS",
      title: "Why Online Reputation Decides Who Gets the Customer",
      description: "Your reputation is now the first thing people see — often before your website. A 4.7-star business with fresh reviews wins over a 3.9-star business with old ones, even if the service is similar. One unanswered complaint can quietly turn away customers for months.",
      leadIn: "Good reputation management helps you:",
      points: [
        "Win more customers who compare you on Google before calling",
        "Show up stronger in Google Maps and local search results",
        "Turn negative reviews into proof that you care about customers",
        "Catch complaints early, before they spread",
        "Build a steady flow of genuine reviews from happy customers"
      ]
    },
    matrixTag: "WHAT REPUTATION MANAGEMENT ACTUALLY INVOLVES",
    matrixTitle: "WHAT DOES A BRAND REPUTATION MANAGEMENT AGENCY IN COIMBATORE DO?",
    matrixSubtitle: "Reputation isn't managed by hoping for good reviews. Here's how an ignored online presence compares with a managed one:",
    matrixRows: [
      { feature: "Review Collection", traditional: "Waiting for customers to review on their own", brandforge: "Simple SMS, WhatsApp & QR review requests after every sale" },
      { feature: "Review Replies", traditional: "Reviews left unanswered for months", brandforge: "Timely, professional replies to every review" },
      { feature: "Negative Reviews", traditional: "Arguing publicly or ignoring the complaint", brandforge: "Calm response, offline resolution, and follow-up" },
      { feature: "Monitoring", traditional: "Finding out about problems by accident", brandforge: "Regular tracking of reviews and brand mentions" },
      { feature: "Search Results", traditional: "Outdated or wrong information about your brand", brandforge: "Accurate listings and strong owned profiles on page one" },
      { feature: "Fake Reviews", traditional: "Buying reviews and risking penalties", brandforge: "Genuine reviews only, following Google's policies" }
    ],
    pillarsTag: "OUR SERVICES",
    pillarsTitle: "Our Brand Reputation Management Services",
    pillarsSubtitle: "Whether you want more reviews, need to handle negative feedback, or want to clean up what people see when they search for you, we cover it.",
    pillars: [
      { icon: TrendingUp, tag: "REVIEWS", title: "Genuine Review Generation", description: "We set up simple systems that ask happy customers for reviews at the right moment — via SMS, WhatsApp, email, or QR code.", deliverables: ["Review Request Templates", "QR Review Cards", "WhatsApp & SMS Flows", "Staff Review-Ask Training"] },
      { icon: PenTool, tag: "REPLIES", title: "Review Response Management", description: "We write and post professional, on-brand replies to your reviews so every customer feels heard.", deliverables: ["Reply Tone Guide", "Positive Review Replies", "Negative Review Responses", "Escalation to Your Team"] },
      { icon: ShieldCheck, tag: "NEGATIVE", title: "Negative Review Handling", description: "A calm, clear process to respond to complaints, resolve issues offline, and report reviews that break platform rules.", deliverables: ["Response Strategy", "Resolution Follow-Up", "Policy-Violation Flagging", "Recovery Messaging"] },
      { icon: Search, tag: "LISTINGS", title: "Google Business Profile Optimisation", description: "A complete, accurate, and active Google Business Profile that builds trust and ranks better in local search.", deliverables: ["Profile Audit & Clean-Up", "Photos & Services Update", "Regular Google Posts", "Q&A Management"] },
      { icon: BarChart3, tag: "MONITORING", title: "Brand Mention Monitoring", description: "We keep track of reviews, social media mentions, and forum discussions about your brand so nothing catches you off guard.", deliverables: ["Review Alerts", "Social Mention Tracking", "Sentiment Summary", "Monthly Report"] },
      { icon: Globe, tag: "SEARCH", title: "Brand Search Result Management", description: "We strengthen your website, social profiles, and directory listings so accurate, positive information shows first when people search your name.", deliverables: ["Branded Search Audit", "Owned Profile Building", "Directory Consistency", "Positive Content Publishing"] },
      { icon: Megaphone, tag: "PR", title: "Local PR & Media Features", description: "We pitch your genuine stories, milestones, and expertise to relevant local and industry media to build credibility.", deliverables: ["Press Release Writing", "Local Media Outreach", "Founder Profile Stories", "Industry Feature Pitching"] },
      { icon: Zap, tag: "CRISIS", title: "Crisis Response Support", description: "When something goes wrong publicly, we help you respond quickly, clearly, and honestly to limit the damage.", deliverables: ["Response Statement Drafting", "Platform Reply Plan", "Stakeholder Messaging", "Post-Crisis Review"] }
    ],
    differentiators: {
      tag: "THE REPUTATION SHIELD ADVANTAGE",
      title: "Why Businesses Choose BrandForge for Reputation Management",
      subtitle: "We build a strong reputation the honest way — with real customers, real responses, and consistent effort — backed by our in-house SEO, social media, and content teams.",
      items: [
        { title: "Genuine Reviews Only", description: "We never buy or fake reviews. Everything follows Google's policies, so your rating is real and safe.", icon: ShieldCheck },
        { title: "Every Review Answered", description: "Positive or negative, every customer gets a thoughtful, on-brand reply.", icon: PenTool },
        { title: "Local Search Expertise", description: "Our SEO team knows how reviews and Google Business Profiles affect Coimbatore local rankings.", icon: Search },
        { title: "Early Warning", description: "Regular monitoring means you hear about problems early and can respond before they grow.", icon: BarChart3 },
        { title: "Clear Monthly Reports", description: "See your rating, review count, reply rate, and sentiment trends in one simple report.", icon: Award }
      ]
    },
    timeline: {
      tag: "HOW WE PROTECT YOUR REPUTATION",
      title: "How Reputation Shield Works",
      subtitle: "A steady, month-by-month process that strengthens your reputation and protects it over time.",
      steps: [
        { num: "01", title: "REPUTATION AUDIT", desc: "We review your ratings, reviews, listings, and what shows up when people search your brand." },
        { num: "02", title: "PROFILE CLEAN-UP", desc: "We fix incorrect details and optimise your Google Business Profile and key listings." },
        { num: "03", title: "REVIEW SYSTEM SETUP", desc: "We create review request flows, QR cards, and simple steps for your team to follow." },
        { num: "04", title: "REPLY GUIDELINES", desc: "We agree on a reply tone and an escalation process for serious complaints." },
        { num: "05", title: "ONGOING REPLIES", desc: "We respond to new reviews regularly and flag issues that need your attention." },
        { num: "06", title: "MONITORING", desc: "We track reviews and brand mentions across platforms and social media." },
        { num: "07", title: "POSITIVE CONTENT", desc: "We publish helpful content and PR that strengthens your branded search results." },
        { num: "08", title: "MONTHLY REPORT", desc: "You get a clear report on ratings, reviews, sentiment, and next steps." }
      ]
    },
    whoWeHelp: {
      tag: "WHO WE WORK WITH",
      title: "Who We Help in Coimbatore & Tamil Nadu",
      subtitle: "We manage reputation for clinics and hospitals, restaurants, hotels, retail stores, education institutes, real estate developers, and service businesses across Coimbatore and Tamil Nadu — any business where reviews decide who gets chosen.",
      industries: [
        { title: "Clinics, Hospitals & Doctors", desc: "Google and Practo reviews that help patients choose you with confidence." },
        { title: "Restaurants, Cafés & Hotels", desc: "Google, Zomato, and travel reviews that keep tables and rooms full." },
        { title: "Retail & Showrooms", desc: "Strong Google ratings that bring more footfall to your store." },
        { title: "Education & Coaching", desc: "Positive parent and student reviews that build trust during admissions." },
        { title: "Real Estate & Builders", desc: "A trustworthy online presence for buyers researching big decisions." },
        { title: "Home & Local Services", desc: "Justdial and Google reviews that make you the first call in your area." }
      ],
      certifications: [
        { label: "Genuine reviews only — no fake or paid reviews" },
        { label: "Review requests follow Google Business Profile policies" },
        { label: "Monthly reputation report with ratings, reviews, and sentiment" },
        { label: "Reviewed by BalaMurali, Founder & MD, BrandForge" }
      ]
    },
    faqs: [
      { q: "What is brand reputation management?", a: "It's the ongoing work of shaping what people see and say about your business online — mainly reviews, review replies, Google Business Profile, social mentions, and your branded search results." },
      { q: "Can you delete negative Google reviews?", a: "No one can delete genuine reviews just because they're negative. We can report reviews that break Google's policies — such as spam, fake, or abusive reviews — and we help you respond professionally and resolve the issue, which often matters more to future customers." },
      { q: "Do you post fake or paid reviews?", a: "Never. Fake reviews break Google's policies, can get your profile penalised, and damage trust. We only help you collect genuine reviews from real customers." },
      { q: "How quickly will my Google rating improve?", a: "Most businesses see more reviews within the first few weeks of setting up review requests. How fast your average rating rises depends on your current number of reviews and how many happy customers you serve each month." },
      { q: "How much does reputation management cost in Coimbatore?", a: "It depends on the number of locations, platforms, and review volume. We offer monthly plans, and share a clear quote after a free reputation audit." },
      { q: "Does reputation management help local SEO?", a: "Yes. Review count, rating, freshness, and replies are all signals in Google's local results. A well-managed profile helps you show up more often in Google Maps searches around Coimbatore." }
    ],
    bottomCta: {
      title: "Get a Free Brand Reputation Audit",
      subtitle: "We'll review your ratings, reviews, and search results, and show you the quickest ways to build more trust online.",
      buttonText: "Claim My Free Reputation Audit →"
    }
  },

};

servicesData["seo-company-coimbatore"] = servicesData["seo-geo"];
servicesData["ppc-company-coimbatore"] = servicesData["paid-media"];

/* Canonical URL for a service: its Coimbatore landing page when one exists, else /services/<key> */
export const serviceUrl = (key) => servicesData[key]?.urlSlug || `/services/${key}`;
export const isServicePath = (path) =>
  !!path && (path.startsWith("/services/") || Object.values(servicesData).some((s) => s.urlSlug === path));
