import {
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
  Cpu,
  Database,
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
    pillarsTag: "OUR FULL SERVICE SPECTRUM",
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
        tag: "GEO SYSTEM",
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
          "Search engines and AI engines both reward genuinely useful content.",
          "We create content that reads naturally for your audience while satisfying the technical structure search engines and AI models look for — no robotic, keyword-stuffed writing."
        ]
      },
      {
        icon: BarChart3,
        tag: "TRANSPARENT ROADMAP",
        title: "SEO Strategy & Reporting",
        description: "Every engagement includes a clear roadmap and monthly performance reporting, so you always know what's working, what's next, and why.",
        deliverables: [
          "Every engagement includes a clear roadmap and monthly performance reporting, so you always know what's working, what's next, and why."
        ]
      }
    ],
    differentiators: {
      tag: "THE BRANDFORGE ADVANTAGE",
      title: "What Makes Our SEO Company Different",
      items: [
        {
          title: "SEO and GEO under one roof",
          description: "most agencies in Coimbatore are still purely Google-focused; we're already optimizing for the AI search shift",
          icon: Zap
        },
        {
          title: "Local market understanding",
          description: "we know how Coimbatore audiences search and behave online",
          icon: Globe
        },
        {
          title: "Transparent process",
          description: "no black-box reporting, no vague promises",
          icon: ShieldCheck
        },
        {
          title: "Content built for humans first",
          description: "because that's still what ranks best, on Google and on AI engines",
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
    eyebrow: "PPC Company in Coimbatore | Google & Meta Ads by BrandForge",
    title: "PPC Company in Coimbatore That Turns Ad Spend Into Real Leads",
    heroButtonText: "Get a Free Ad Account Audit →",
    subtitle: [
      "Most businesses in Coimbatore don't have an ads problem — they have a wasted budget problem. If you're paying for clicks that never turn into customers, that's a targeting and tracking issue, not a reason to give up on paid ads.",
      "BrandForge is a PPC company in Coimbatore built for one outcome: turning every rupee of ad spend into measurable leads and sales. Our paid media studio, Ignition Ads, plans and manages campaigns across Google, Meta, YouTube, and more — with proper tracking wired in from day one."
    ],
    bannerBg: "/banner-paid-media.jpg",
    icon: Megaphone,
    metrics: [
      { value: "₹420 → ₹95", label: "Cost-Per-Lead Cut", desc: "Average 77% drop in CPL across accounts" },
      { value: "4.8x", label: "Average Blended ROAS", desc: "Direct response media efficiency benchmark" },
      { value: "₹45M+", label: "Ad Spend Managed", desc: "Google Ads & Meta Blueprint certified team" },
      { value: "100%", label: "Conversion Tracking", desc: "GA4, Meta CAPI & call tracking wired before spend" },
    ],
    whyChooseUs: {
      tag: "FAST ACCOUNTABLE GROWTH",
      title: "Why PPC Brings Faster Results Than SEO",
      description: "SEO builds long-term authority. Paid ads bring leads this week. For local service businesses, coaching institutes, clinics, and online stores across Coimbatore and Tamil Nadu, that speed is the whole point.",
      leadIn: "Done right, PPC is the most accountable marketing you can run — every result is a number you can check:",
      points: [
        "You appear at the top of Google the day you launch",
        "You reach exact audiences by location, age, interest, and intent",
        "You see your real cost per lead, not guesswork",
        "You scale what works and cut what doesn't, fast"
      ]
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
    pillarsTag: "MULTI-CHANNEL AD ENGINE",
    pillarsTitle: "Every Type of Ad We Run",
    pillarsSubtitle: "We don't push one channel. We match the platform to your buyer. Here's what Ignition Ads manages across Google, Meta, and LinkedIn.",
    pillars: [
      {
        icon: Search,
        tag: "GOOGLE SEARCH",
        title: "Google Search Ads — High-Intent Leads",
        description: "When someone in Coimbatore searches for your service on Google, your ad shows first. We capture bottom-funnel buyers at the exact moment they are ready to call or purchase.",
        deliverables: ["Negative Keyword Shield (Zero Wasted Clicks)", "High-Intent Keyword Match Strategy", "Ad Copy & Extension Optimization", "Bid & Quality Score Management"]
      },
      {
        icon: Zap,
        tag: "META PERFORMANCE",
        title: "Meta Ads (Facebook & Instagram)",
        description: "The best channel for lead-generation and brand demand in Coimbatore. We deploy high-converting UGC reels, carousel stacks, and advantage+ shopping campaigns.",
        deliverables: ["Advantage+ Audience Targeting", "Server-Side Meta CAPI Tracking", "In-House Video & Reel Creative Matrix", "High-Converting Lead Gen Funnels"]
      },
      {
        icon: Video,
        tag: "REELS & SHORTS",
        title: "Instagram Reels & Story Ads",
        description: "Short-form vertical video where younger, mobile-first buyers spend their time. Built with native hooks designed to stop the scroll and trigger immediate DM inquiries.",
        deliverables: ["Hook Testing Engine (15+ variants/mo)", "Native Creator Scripting & UGC", "Fast Creative Refreshes (Zero Ad Fatigue)"]
      },
      {
        icon: Globe,
        tag: "GOOGLE DISPLAY",
        title: "Google Display Ads & Banner Networks",
        description: "Eye-catching visual banner ads across millions of websites and apps, ideal for massive brand recall and keeping your business top-of-mind across Coimbatore.",
        deliverables: ["Custom Intent & Affinity Audiences", "Responsive Display Ad Formats", "Strict Placement & Fraud Filtering"]
      },
      {
        icon: Video,
        tag: "YOUTUBE ADS",
        title: "YouTube Ads — High-Recall Video Campaigns",
        description: "Video ads for brand recall, coaching course launches, clinic walk-throughs, and product demos. Reach targeted viewers before they watch industry videos.",
        deliverables: ["Skippable In-Stream Video Ads", "Non-Skippable 15s Brand Stories", "YouTube Bumper Ads (6s High-Impact)"]
      },
      {
        icon: ShieldCheck,
        tag: "E-COMMERCE",
        title: "Google Shopping Ads",
        description: "Direct product listings with image, customer review ratings, and price for e-commerce brands looking for immediate sales and high blended ROAS.",
        deliverables: ["Google Merchant Center Feed Setup", "Smart Shopping Campaign Optimization", "Dynamic Product Remarketing Feeds"]
      },
      {
        icon: Cpu,
        tag: "GOOGLE AI",
        title: "Performance Max (PMax)",
        description: "Google's unified AI ad format running across Search, Display, YouTube, Gmail, and Google Maps simultaneously with automated machine-learning optimization.",
        deliverables: ["PMax Asset Group & Copy Testing", "Custom First-Party Audience Signals", "Search Theme & Negative Keyword Control"]
      },
      {
        icon: TrendingUp,
        tag: "HIGH ROI",
        title: "Retargeting Ads — Recapture Lost Visitors",
        description: "Chasing past website visitors across Google and Meta. Retargeting ads are usually the cheapest leads in any account because intent is already established.",
        deliverables: ["Cart Abandonment Retargeting Sequences", "Dynamic Carousel Retargeting", "Sequential Storytelling Ad Flows"]
      },
      {
        icon: Award,
        tag: "INSTANT FORMS",
        title: "Lead Generation Campaigns",
        description: "Instant-form ads on Meta and LinkedIn that capture verified name, phone number, and email without forcing users to wait for a slow landing page.",
        deliverables: ["Native Instant Forms with Pre-Fill", "Instant CRM & WhatsApp Webhook Sync", "Lead Qualification Questions to Filter Junk"]
      },
      {
        icon: Globe,
        tag: "LOCAL CALLS",
        title: "Local & Google Maps Ads",
        description: "Engineered specifically for Coimbatore businesses that need direct foot walk-ins and phone calls from nearby customers searching on Google Maps.",
        deliverables: ["Google Business Profile Ad Extensions", "Promoted Pins on Google Maps", "Call-Only Ad Campaigns with Click-to-Call"]
      },
      {
        icon: Target,
        tag: "B2B PIPELINE",
        title: "LinkedIn Ads — B2B Decision-Maker Targeting",
        description: "For B2B companies and premium corporate services in Coimbatore targeting founders, managing directors, purchase managers, and corporate decision-makers.",
        deliverables: ["Job-Title & Company Industry ABM Targeting", "LinkedIn Lead Gen Forms", "Sponsored Thought Leadership Content"]
      }
    ],
    differentiators: {
      tag: "THE BRANDFORGE ADVANTAGE",
      title: "What Makes BrandForge Different as a PPC Company in Coimbatore",
      subtitle: "Plenty of agencies run ads. Fewer make them profitable. As a full-service agency that also handles branding, Web Foundry, and Story Smithy in-house, we connect the ad to the page to the follow-up.",
      items: [
        {
          title: "Tracking First",
          description: "GA4, Meta pixel, CAPI server tracking, and phone call tracking installed and verified before a single rupee of ad spend.",
          icon: ShieldCheck
        },
        {
          title: "Scroll-Stopping Creative",
          description: "Built in-house by our Story Smithy studio with dynamic UGC video, reels, and custom graphics — never generic templates.",
          icon: PenTool
        },
        {
          title: "Landing Pages That Convert",
          description: "Engineered by our Web Foundry team with sub-second speeds so your expensive paid traffic never hits a dead end.",
          icon: TrendingUp
        },
        {
          title: "Weekly Plain-Number Reporting",
          description: "Spend, verified leads, and real cost-per-lead delivered in plain numbers — no vanity metrics or black-box jargon.",
          icon: BarChart3
        },
        {
          title: "Data-Led Weekly Optimization",
          description: "We cut losing ad sets, prune negative search terms, and scale high-ROAS winners every single week.",
          icon: Zap
        }
      ]
    },
    timeline: {
      tag: "6-STEP PPC PROCESS",
      title: "How We Work — From Audit to Profitable Scale",
      subtitle: "A transparent, data-backed 6-step framework to maximize ROAS and eliminate ad budget leaks.",
      steps: [
        { num: "01", title: "FREE AD ACCOUNT AUDIT", desc: "We analyze your past spend, search terms, and landing pages to find where your budget is leaking." },
        { num: "02", title: "PLATFORM STRATEGY", desc: "We pick the platforms your buyers actually use (Google, Meta, YouTube) rather than spreading budget thin." },
        { num: "03", title: "BUILD & ASSETS", desc: "Custom targeting, scroll-stopping creatives by Story Smithy, copy, tracking, and Web Foundry landing pages." },
        { num: "04", title: "LAUNCH & CLOSE MONITORING", desc: "Live launch with close, hands-on monitoring during the critical first 72 hours to calibrate bids." },
        { num: "05", title: "WEEKLY OPTIMIZATION", desc: "A/B testing hooks, pruning negative keywords, and lowering your cost per lead week over week." },
        { num: "06", title: "AGGRESSIVE SCALING", desc: "Confidently scale ad spend into verified winning campaigns to double your revenue." }
      ]
    },
    whoWeHelp: {
      tag: "WHO WE HELP",
      title: "Who We Help in Coimbatore and Tamil Nadu",
      subtitle: "If you have a budget and a product or service people want, we'll put it in front of the right buyers with profitable paid ads.",
      industries: [
        { title: "Coaching & Education Institutes", desc: "High-intent student enrollment leads for NEET, JEE, IELTS, UPSC, and skills academies across Coimbatore." },
        { title: "Clinics & Healthcare Centers", desc: "Qualified patient appointment bookings for dental, fertility, eye care, and multi-specialty hospitals." },
        { title: "Real Estate & Builders", desc: "High-ticket buyer site visit inquiries for luxury villas, gated apartments, and commercial plots." },
        { title: "E-Commerce & D2C Brands", desc: "High-ROAS Google Shopping and Meta advantage+ shopping campaigns that scale profitable sales." },
        { title: "Local Service Businesses", desc: "Direct phone calls and walk-in leads for interior designers, solar installers, modular kitchens, and local pros." },
        { title: "B2B & Enterprise Services", desc: "Account-based LinkedIn and Google Search ads targeting founders, CEOs, and purchase managers." }
      ],
      certifications: [
        { label: "Google Ads Certified Partner" },
        { label: "Meta Blueprint Certified Agency" },
        { label: "Real Client Result: CPL Cut from ₹420 to ₹95" },
        { label: "₹45M+ Lifetime Ad Spend Managed" }
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
      subtitle: "We'll show you exactly where your spend is leaking, how much cheaper your leads could be, and the step-by-step roadmap to scale.",
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
    bannerBg: "/banner-web-dev.png",
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
      description: "Most business websites in Coimbatore fail for the same few reasons. Fixing them is where growth starts. A good website fixes all five — that's the difference between a site that just exists and one that actually earns.",
      leadIn: "Here are the 5 critical reasons your current site is leaking customers every day:",
      points: [
        "It loads too slowly — visitors leave before it even opens (Google data shows over 53% of mobile visits are abandoned if pages take over 3 seconds).",
        "It breaks on mobile, where over 80% of your customer traffic in Coimbatore comes from.",
        "It has no clear call to action, so visitors browse aimlessly and leave without contacting.",
        "It isn't built for SEO, so Google never crawls, indexes, or shows it to high-intent buyers.",
        "It looks dated, which quietly tells premium buyers you're behind the times."
      ]
    },
    matrixTag: "CRITICAL FUNDAMENTALS",
    matrixTitle: "WHAT MAKES THE BEST WEBSITE DEVELOPMENT COMPANY IN COIMBATORE?",
    matrixSubtitle: "If you're comparing agencies, look past the price tag. The best website development company in Coimbatore is the one that gets these fundamentals right:",
    matrixRows: [
      {
        feature: "Speed & Performance",
        traditional: "Bloated templates taking 6–10s to load on mobile data",
        brandforge: "Pages that load in under 3 seconds on mobile data (verified on Google PageSpeed Insights)"
      },
      {
        feature: "SEO-Ready Code",
        traditional: "Messy spaghetti code with missing meta tags and zero schema",
        brandforge: "Clean semantic HTML & schema markup structured so Google can index and rank you"
      },
      {
        feature: "Mobile-First Design",
        traditional: "Desktop layouts shrunken down to mobile screens with broken buttons",
        brandforge: "Engineered for phones first with thumb-friendly navigation and touch responsiveness"
      },
      {
        feature: "Conversion Focus",
        traditional: "Vague artistic layouts with hidden contact forms and zero CTAs",
        brandforge: "Clear CTAs, frictionless enquiry forms, and instant WhatsApp & click-to-call buttons"
      },
      {
        feature: "Ongoing Support",
        traditional: "Agency vanishes after launch; zero help when plugins break",
        brandforge: "Direct developer support line, automated cloud backups, and proactive maintenance"
      }
    ],
    pillarsTag: "FULL-STACK CAPABILITIES",
    pillarsTitle: "Website Development Services We Offer",
    pillarsSubtitle: "We don't do one-size-fits-all. We build the right type of site engineered for your exact business goals.",
    pillars: [
      {
        icon: Globe,
        tag: "TRUST & ENQUIRIES",
        title: "Business Websites",
        description: "Professional company sites that build enterprise trust, explain your capabilities clearly, and generate consistent inbound enquiries from high-intent clients.",
        deliverables: [
          "Brand positioning & high-converting copywriting",
          "Mobile-optimized service & portfolio pages",
          "Prominent WhatsApp and click-to-call triggers",
          "Instant lead capture & CRM notification sync"
        ]
      },
      {
        icon: ShieldCheck,
        tag: "ONLINE STORES",
        title: "E-Commerce Websites",
        description: "Online stores with secure payment gateways (Razorpay, Stripe, UPI), dynamic product catalogues, category filtering, cart systems, and frictionless checkout.",
        deliverables: [
          "Frictionless 1-page checkout experience",
          "Automated inventory & order management",
          "Secure payment gateway & UPI integration",
          "Abandoned cart recovery & retargeting loops"
        ]
      },
      {
        icon: Target,
        tag: "HIGH-ROAS FUNNELS",
        title: "Landing Pages",
        description: "Single high-converting pages purpose-built for Google Ads and Meta ad campaigns to maximize conversion rate and drop your blended cost per lead.",
        deliverables: [
          "A/B hook testing & variant framework",
          "Above-the-fold lead form architecture",
          "Sub-second mobile loading speed (<1.8s)",
          "Direct pixel sync with Meta CAPI & Google Ads"
        ]
      },
      {
        icon: Cpu,
        tag: "CUSTOM SOFTWARE",
        title: "Custom Web Applications",
        description: "Custom dashboards, online booking systems, customer portals, and internal business tools built on modern React, Node.js, and serverless edge databases.",
        deliverables: [
          "Custom React/Vite single-page architecture",
          "Role-based authentication & data security",
          "Automated database synchronizations",
          "Scalable serverless API integrations"
        ]
      },
      {
        icon: Layers,
        tag: "CMS FREEDOM",
        title: "WordPress Development",
        description: "Easy-to-edit WordPress & headless CMS websites with custom Gutenberg blocks that your internal team can update yourself without touching a line of code.",
        deliverables: [
          "Custom lightweight block themes (zero bloated plugins)",
          "Hardened security, SSL & daily backups",
          "Intuitive drag-and-drop page editor",
          "Staff training video walkthroughs"
        ]
      },
      {
        icon: Zap,
        tag: "MODERNIZATION",
        title: "Website Redesign",
        description: "Modernizing slow, outdated sites without losing existing SEO rankings. We overhaul visual aesthetics, mobile responsiveness, and page speed while preserving URL structure.",
        deliverables: [
          "Comprehensive 301 SEO redirect mapping",
          "Google Core Web Vitals speed overhaul",
          "Modern responsive 2026 UI/UX design",
          "Brand authority & conversion rate refresh"
        ]
      },
      {
        icon: Gauge,
        tag: "PERFORMANCE",
        title: "Speed & SEO Optimization",
        description: "Making an existing website significantly faster and search-ready. We eliminate render-blocking code, compress assets, and optimize technical infrastructure for Google ranking.",
        deliverables: [
          "Lighthouse 95+ performance optimization",
          "Image & JavaScript code minification",
          "Cloudflare CDN edge caching setup",
          "Structured schema markup injection"
        ]
      },
      {
        icon: ShieldCheck,
        tag: "24/7 PEACE OF MIND",
        title: "Maintenance & Support",
        description: "Ongoing updates, daily cloud backups, security monitoring, and direct technical help handled for you so your site is always live, fast, and secure.",
        deliverables: [
          "Automated daily cloud backups",
          "Malware scanning & firewall protection",
          "24/7 uptime & server monitoring",
          "Priority developer support line"
        ]
      }
    ],
    differentiators: {
      tag: "THE BRANDFORGE ADVANTAGE",
      title: "Why Businesses Choose BrandForge",
      subtitle: "As a website development company in Coimbatore that also runs branding, SEO, and ads in-house, we don't just hand over a site and disappear. Your website is built to work with everything else that drives your growth.",
      items: [
        {
          title: "Built for Speed and Google Ranking from Day One",
          description: "Clean code structure, sub-2s mobile loading, and complete technical SEO foundation built into every page from Day 1.",
          icon: Search
        },
        {
          title: "Mobile-First, So It Looks Sharp on Every Phone",
          description: "Built for mobile screens and thumbs first, ensuring razor-sharp typography and effortless navigation on every smartphone.",
          icon: Globe
        },
        {
          title: "Designed to Convert Visitors into Leads, Not Just Look Pretty",
          description: "Strategic layout hierarchy, friction-free forms, and prominent call/WhatsApp buttons that turn casual clicks into real enquiries.",
          icon: TrendingUp
        },
        {
          title: "Connected to Our In-House SEO and Ads Teams",
          description: "Seamlessly connected to our SEO services (Rank Forge) and PPC services (Ignition Ads) for unified digital growth.",
          icon: Zap
        },
        {
          title: "Clear Timelines and Honest Pricing — No Surprises",
          description: "Fixed transparent quotes, milestone-based deliverables, and zero hidden charges.",
          icon: ShieldCheck
        }
      ]
    },
    timeline: {
      tag: "OUR WEB DEVELOPMENT PROCESS",
      title: "Our 6-Step Web Development Process",
      subtitle: "A transparent, milestone-driven framework that takes your website from initial concept to high-converting launch.",
      steps: [
        { num: "01", title: "DISCOVERY", desc: "We learn your business, target audience, competitive landscape, and revenue goals." },
        { num: "02", title: "PLAN & WIREFRAME", desc: "Structure and page layout wireframes agreed before visual design begins." },
        { num: "03", title: "DESIGN", desc: "A modern, bespoke look that matches your brand and commands instant authority." },
        { num: "04", title: "BUILD", desc: "Fast, clean, SEO-ready development with sub-second loading speed." },
        { num: "05", title: "TEST & LAUNCH", desc: "Checked on every mobile device, browser, and screen size, then go live." },
        { num: "06", title: "SUPPORT", desc: "Updates, backups, and developer help whenever you need it." }
      ]
    },
    whoWeHelp: {
      tag: "WHO WE BUILD FOR",
      title: "Who We Build For Across Coimbatore & Tamil Nadu",
      subtitle: "We build websites for coaching institutes, clinics and hospitals, retail and e-commerce brands, real estate, manufacturers, and local service businesses across Coimbatore and Tamil Nadu. If your customers are searching online, you need a site that shows up and closes.",
      industries: [
        { title: "Coaching & Education Institutes", desc: "High-trust admissions portals, course syllabi, and fast enrollment enquiry funnels for academies in Coimbatore." },
        { title: "Clinics & Hospitals", desc: "Patient-friendly healthcare websites with doctor profiles, treatment details, and instant appointment booking." },
        { title: "Retail & E-Commerce Brands", desc: "Lightning-fast online stores with secure checkout, product catalogues, and mobile shopping experiences." },
        { title: "Real Estate & Builders", desc: "Luxury project showcases, floor plans, virtual tours, and high-ticket site visit lead funnels." },
        { title: "Manufacturers & Industrialists", desc: "B2B industrial websites showcasing precision machinery, ISO certifications, and RFQ enquiry forms." },
        { title: "Local Service Businesses", desc: "Direct phone calls and quote requests for interior designers, solar companies, modular kitchens, and local pros." }
      ],
      certifications: [
        { label: "Google PageSpeed Insights Certified (<3s Mobile Load)" },
        { label: "Google Search Central SEO-Ready Architecture" },
        { label: "Real Client Metric: Cut Load Time from 6s to 1.8s" },
        { label: "Reviewed by BalaMurali, Lead Developer & Technical Architect, Web Foundry" }
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
    bannerBg: "/banner-viral-social.png",
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
    timeline: {
      tag: "WHAT BRANDFORGE WILL DO FOR YOU",
      title: "What BrandForge Will Do For You",
      subtitle: "Here's what actually lands in your account every month — no vague promises, just the work. Most agencies post and vanish. We treat your page like it's our own brand on the line.",
      steps: [
        { num: "01", title: "MONTHLY CONTENT CALENDAR", desc: "You'll always know what's going out and when, planned around festivals, offers, and trends." },
        { num: "02", title: "TREND-JACKING & AUDIO", desc: "We jump on trending audios and reel formats fast, while they're still getting viral reach." },
        { num: "03", title: "COMPETITOR WATCH", desc: "We track what rival Coimbatore brands are posting and engineer better creative angles to beat them." },
        { num: "04", title: "REELS SHOT & EDITED", desc: "Hooks in the first 3 seconds, kinetic animated captions, and trending audio built in." },
        { num: "05", title: "WHATSAPP & DM FUNNELS", desc: "We turn comments and DMs into actual phone and WhatsApp enquiries, not dead-end likes." },
        { num: "06", title: "MONTHLY REVIEW CALL", desc: "We sit with you, show the plain numbers, and plan the next month of growth together." }
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
    number: "05",
    eyebrow: "INFLUENCER / CREATOR NETWORK",
    title: "AMPLIFY BRAND AUTHORITY THROUGH TOP-TIER CREATOR NETWORKS",
    subtitle: "We connect your brand with high-converting creators, key opinion leaders, and viral influencers to generate massive social proof.",
    bannerBg: "/banner-influencer-network.png",
    icon: Users,
    metrics: [
      { value: "2,500+", label: "Vetted Creator Roster", desc: "Niche influencers across Fashion, Tech, SaaS & Wellness" },
      { value: "6.4x", label: "Average Campaign ROI", desc: "Return on influencer spending across campaigns" },
      { value: "100%", label: "Contract & Usage Safety", desc: "Full perpetual ad usage rights secured" },
      { value: "$12M+", label: "Creator Revenue Generated", desc: "Direct sales generated via creator partnerships" },
    ],
    matrixTag: "CREATOR SCALING",
    matrixTitle: "OLD INFLUENCER MARKETING VS BRANDFORGE CREATOR ENGINE",
    matrixSubtitle: "Eliminate fake follower influencers. We engineer data-backed creator campaigns built for ROAS.",
    matrixRows: [
      { feature: "Influencer Selection", traditional: "Vanity follower counts with bot engagement", brandforge: "Audience authenticity vetting & real buyer overlap" },
      { feature: "Contract Terms", traditional: "Single story post that vanishes in 24h", brandforge: "Whitelisting rights & perpetual paid ad usage" },
      { feature: "Creative Freedom", traditional: "Stiff scripted ads that viewers scroll past", brandforge: "Native organic storytelling that feels real" },
      { feature: "Performance Tracking", traditional: "Vague impressions and guesswork", brandforge: "Unique discount codes, affiliate tracking & MER" },
    ],
    pillars: [
      { icon: Users, tag: "ROSTER", title: "Vetted Creator Selection & Matchmaking", description: "Identify and vet high-performing creators based on real audience demographics and buying power.", deliverables: ["Fake Follower Audit", "Audience Overlap Check", "Niche Creator Matching"] },
      { icon: ShieldCheck, tag: "CONTRACTS", title: "Contract Vetting & Rights Management", description: "Secure full commercial rights, ad whitelisting permissions, and strict deliverable deadlines.", deliverables: ["Ad Whitelisting Lock", "Perpetual Usage Rights", "Performance Tier Bonus"] },
      { icon: Rocket, tag: "WHITELISTING", title: "Meta & TikTok Dark Post Whitelisting", description: "Run paid ads directly through the influencer’s official handle for massive social proof.", deliverables: ["Creator Access Setup", "Spark Ads Integration", "Dynamic Retargeting"] },
      { icon: BarChart3, tag: "TRACKING", title: "Real-Time ROI & Sales Tracking", description: "Track exact revenue generated by each creator via custom promo codes and UTM parameters.", deliverables: ["Custom Discount Codes", "Affiliate Portal Setup", "Live Revenue Dashboard"] },
      { icon: PenTool, tag: "BRIEFS", title: "High-Converting Creative Briefs", description: "Provide creators with winning angle frameworks while preserving their authentic voice.", deliverables: ["Angle Framework Briefs", "Hook Recommendations", "DOs & DON'Ts Guidelines"] },
      { icon: TrendingUp, tag: "SEEDING", title: "Gifting & Micro-Seeding Engine", description: "Scale product gifting to hundreds of micro-influencers to generate exponential organic buzz.", deliverables: ["Automated Gifting Flow", "Unboxing Content Wave", "Micro-Creator Scale"] },
    ],
    faqs: [
      { q: "What types of influencers do you work with?", a: "We work with Nano (5k-20k), Micro (20k-100k), Macro (100k-1M), and Celebrity creators across e-commerce, B2B SaaS, tech, fitness, and lifestyle." },
      { q: "Do you handle influencer negotiations and payments?", a: "Yes. We manage outreach, contract negotiations, product shipping, content approvals, and creator payouts from start to finish." },
      { q: "What is creator whitelisting?", a: "Creator whitelisting allows us to run Meta or TikTok paid ads using the influencer’s handle, giving your ads 5x higher CTR and trust." },
      { q: "How do you protect our brand from fake influencer bots?", a: "We run deep analytics to audit engagement rates, comment quality, follower growth spikes, and real audience location data before signing any creator." },
    ],
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
    bannerBg: "/banner-content-smithy.png",
    icon: PenTool,
    metrics: [
      { value: "3.5x", label: "Reader Time-on-Page", desc: "Deep domain storytelling & engaging editorial" },
      { value: "+320%", label: "Organic Search Leads", desc: "Average 6-month compounding inbound traffic" },
      { value: "Page 1", label: "Google Top 3 Rankings", desc: "High-intent keyword dominance across niches" },
      { value: "100%", label: "SEO & Conversion Ready", desc: "Zero generic AI fluff, pure human authority" },
    ],
    whyChooseUs: {
      tag: "WHY CONTENT MARKETING WINS",
      title: "Why Content Marketing Beats One-Off Ads",
      description: "A single ad gets a click and disappears. A single blog post can rank on Google and pull in leads every month for years. The catch is consistency. One blog won't move the needle — a steady stream of the right content will. That's what an agency handles for you.",
      leadIn: "Here is why strategic content marketing wins over time:",
      points: [
        "It keeps working after you stop paying",
        "It builds trust — helpful content makes you the expert",
        "It ranks on Google, bringing free traffic every month",
        "It gives your ads and social pages something worth sharing",
        "It answers buyer questions, so they choose you over rivals"
      ]
    },
    matrixTag: "WHAT AN AGENCY ACTUALLY DOES",
    matrixTitle: "WHAT DOES A CONTENT MARKETING AGENCY IN COIMBATORE DO?",
    matrixSubtitle: "A real content marketing agency in Coimbatore does far more than write blogs. Here's what we handle end to end:",
    matrixRows: [
      {
        feature: "Content Strategy",
        traditional: "Writing random articles with no audience search demand",
        brandforge: "A clear content plan tied to what your customers actually search"
      },
      {
        feature: "SEO & Keyword Research",
        traditional: "Guessing topics or stuffing useless generic keywords",
        brandforge: "Finding the exact high-intent keywords and questions worth ranking for"
      },
      {
        feature: "Multi-Format Creation",
        traditional: "Shallow 500-word text copied from existing search results",
        brandforge: "Deep blogs, high-hook video scripts, graphics, and social carousels"
      },
      {
        feature: "Conversion Optimization",
        traditional: "Dead-end articles with zero next steps or lead captures",
        brandforge: "Every piece built to rank and convert readers into paying customers"
      },
      {
        feature: "Content Distribution",
        traditional: "Publishing on a hidden blog and letting it sit unread",
        brandforge: "Active syndication across search, email newsletters, and social channels"
      },
      {
        feature: "Measurement & Refresh",
        traditional: "Never checking traffic or letting old articles decay",
        brandforge: "Monthly tracking of traffic, rankings, leads, and proactive content refreshes"
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
        description: "Articles built with deep keyword research and technical structure to rank on Google and pull in high-intent traffic for months and years.",
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
        description: "Homepage, service, and landing page copy that clearly positions your authority, overcomes objections, and turns casual visitors into enquiries.",
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
        description: "High-hook video concepts and scripts for short-form Reels, YouTube Shorts, and brand showreels designed to capture and hold attention.",
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
        description: "Educational carousel slide decks, thought leadership posts, and engaging captions that build an obsessed brand following across platforms.",
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
        description: "High-open-rate newsletter sequences and automated nurture drips that build relationships and convert cold subscribers into repeat buyers.",
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
        description: "Compelling, metrics-driven customer success stories and transformation breakdowns that eliminate buyer skepticism and close high-ticket deals.",
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
        description: "Clear, persuasive, benefit-led product and service descriptions for e-commerce catalogues and premium service brochures.",
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
        description: "Turning one single in-depth pillar blog into 5 short-form reels, 3 LinkedIn carousels, and a weekly newsletter so nothing goes to waste.",
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
      subtitle: "As a content marketing agency in Coimbatore that also runs SEO, web, and paid ads in-house, we connect your content to everything else that drives growth — so it's never just writing for the sake of it.",
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
    timeline: {
      tag: "WHAT BRANDFORGE WILL DO FOR YOU",
      title: "What BrandForge Will Do For You",
      subtitle: "No random posts, no filler articles. Here's what actually lands for you every month. Because we run SEO, web, and social in-house too, your content isn't a lonely blog — it's wired into everything that brings you customers.",
      steps: [
        { num: "01", title: "SEARCH-MAPPED CONTENT PLAN", desc: "We build topics around what Coimbatore and global customers actually type into Google." },
        { num: "02", title: "SEO BAKED IN FROM START", desc: "Every blog is keyword-researched and structured so it works for rankings, not just reading." },
        { num: "03", title: "ONE IDEA, MANY FORMATS", desc: "We turn single blogs into reels, carousels, posts, and emails so nothing goes to waste." },
        { num: "04", title: "HUMAN ON-BRAND WRITING", desc: "Content that sounds like your authentic voice — zero robotic generic AI fluff." },
        { num: "05", title: "RANKINGS & TRAFFIC REPORTS", desc: "You see plain numbers on which pieces are bringing visitors, rankings, and real leads." },
        { num: "06", title: "PROACTIVE CONTENT REFRESH", desc: "We continuously update past blogs to keep them ranking on page 1, never letting them fade." }
      ]
    },
    whoWeHelp: {
      tag: "WHO WE WORK WITH",
      title: "Who We Work With in Coimbatore & Tamil Nadu",
      subtitle: "We create content for coaching institutes, clinics and healthcare, e-commerce and retail, real estate, B2B companies, and local service brands across Coimbatore and Tamil Nadu. If your customers are searching for answers online, we make sure yours is the one they find.",
      industries: [
        { title: "Coaching & Education Institutes", desc: "Course syllabus guides, career roadmaps, and student success stories that rank on page 1 for admissions keywords." },
        { title: "Clinics, Doctors & Healthcare", desc: "Doctor-reviewed treatment guides, patient FAQ blogs, and educational articles that build deep medical trust." },
        { title: "E-Commerce & Retail Brands", desc: "High-ranking gift guides, product buying comparisons, and lifestyle reels that drive organic checkout sales." },
        { title: "Real Estate & Builders", desc: "Locality guides, luxury villa walkthrough scripts, and property investment articles for serious buyers." },
        { title: "B2B & Industrial Companies", desc: "Technical whitepapers, manufacturing case studies, and LinkedIn thought leadership for corporate buyers." },
        { title: "Local Service Brands", desc: "Location-specific solution guides and customer transformation stories that dominate local Google searches." }
      ],
      certifications: [
        { label: "Google Search Central Quality Rater Compliant (E-E-A-T)" },
        { label: "HubSpot Content Marketing Certified Methodology" },
        { label: "Real Client Result: ThoughtFlows Blog Ranked Page 1 for 'Medical Coding Course' & Drove 14K+ Views" },
        { label: "Reviewed by BalaMurali, Content Lead & Founder, Story Smithy" }
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
      title: "Book a Free Content Audit Today",
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
    bannerBg: "/banner-inbox-edge.png",
    icon: Mail,
    metrics: [
      { value: "+312%", label: "Email Revenue Lift", desc: "Average L6M client retention ROI surge" },
      { value: "42.8%", label: "Average Open Rate", desc: "2.5x higher vs industry average (17%)" },
      { value: "99.4%", label: "Inbox Deliverability", desc: "SPF, DKIM, DMARC & BIMI verified" },
      { value: "24/7", label: "Automated Revenue Engine", desc: "Flows sell while you sleep on autopilot" },
    ],
    whyChooseUs: {
      tag: "WHY EMAIL MARKETING WINS",
      title: "Why Email Marketing Still Beats Everything on ROI",
      description: "Social reach comes and goes. Ads stop when the budget runs out. But your email list is yours — no algorithm decides who sees it. That's why email consistently returns more per rupee than almost any other channel. The reason most businesses skip it? Setting it up feels like work. That's exactly the part we handle for you.",
      leadIn: "Here is why email marketing continues to dominate ROI:",
      points: [
        "You own the list — no platform can take it away",
        "It reaches people who already trust you",
        "It runs on autopilot once set up",
        "It brings repeat sales, not just one-time buyers",
        "It's cheap — no ad spend to reach your own contacts"
      ]
    },
    matrixTag: "WHAT AN AGENCY ACTUALLY DOES",
    matrixTitle: "WHAT DOES AN EMAIL MARKETING COMPANY IN COIMBATORE DO?",
    matrixSubtitle: "A good email marketing company in Coimbatore builds a system that runs itself. Here's what we handle end to end:",
    matrixRows: [
      {
        feature: "Strategy & Planning",
        traditional: "Sending random unsegmented newsletters with no clear goal",
        brandforge: "Mapping out who receives what email and when, based on how they entered your list"
      },
      {
        feature: "List Setup & Cleaning",
        traditional: "Leaving old invalid contacts to degrade domain reputation",
        brandforge: "Organizing your existing contacts and removing dead emails so deliverability stays high"
      },
      {
        feature: "Automated Flows",
        traditional: "Manual one-off email sending with zero ongoing automation",
        brandforge: "Setting up welcome sequences, abandoned cart reminders, and re-engagement drips that run 24/7"
      },
      {
        feature: "Copy & Design",
        traditional: "Generic robotic templates that get ignored and deleted",
        brandforge: "Writing punchy, high-open subject lines and clean emails that look great on phones"
      },
      {
        feature: "Technical Deliverability",
        traditional: "Landing directly in Spam & Promotions tabs",
        brandforge: "Configuring SPF, DKIM, DMARC, and sender reputation so emails land in the primary inbox"
      },
      {
        feature: "Tracking & Optimization",
        traditional: "Never reviewing open rates or revenue generated per email",
        brandforge: "Tracking opens, clicks, and sales generated to continually optimize subject lines and send times"
      }
    ],
    pillarsTag: "OUR SERVICES",
    pillarsTitle: "Our Email Marketing Services",
    pillarsSubtitle: "We build the right automated flows and campaign sequences tailored to your customer journey.",
    pillars: [
      {
        icon: Zap,
        tag: "FIRST IMPRESSIONS",
        title: "Welcome & Onboarding Flows",
        description: "First impressions that introduce your brand, deliver lead magnets, and turn new sign-ups into first-time buyers.",
        deliverables: [
          "High-Value Lead Magnet Delivery",
          "Brand Story & Authority Introduction",
          "First-Order Incentive Strategy",
          "Subscriber Preference Profiling"
        ]
      },
      {
        icon: Mail,
        tag: "TOP-OF-MIND",
        title: "Newsletter Campaigns",
        description: "Regular, value-packed updates that keep your brand top-of-mind without being salesy or annoying.",
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
        description: "High-converting emails for festival sales, seasonal discounts, product launches, and limited-time offers.",
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
        description: "Automated reminders that bring back shoppers who added items to cart but left without buying.",
        deliverables: [
          "Multi-Stage Trigger Timing",
          "Dynamic Product Card Insertion",
          "Objection Buster FAQs & Reviews",
          "Limited-Time Incentive Unlocks"
        ]
      },
      {
        icon: Users,
        tag: "PIPELINE CONVERSION",
        title: "Lead Nurture Sequences",
        description: "Educational drips that warm up cold leads from your website, ads, or events into paying clients.",
        deliverables: [
          "Problem-Awareness Educational Guides",
          "Case Study Proof & Transformations",
          "Discovery Call & Consultation Pitches",
          "Automated Drip Scheduling"
        ]
      },
      {
        icon: ShieldCheck,
        tag: "WIN-BACK",
        title: "Re-Engagement Campaigns",
        description: "Win-back campaigns that reactivate dormant subscribers and past customers who haven't bought in months.",
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
        description: "Blending email with instant WhatsApp and SMS messaging for high-urgency notifications and time-sensitive deals.",
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
        description: "Free guides, discount popups, and opt-in forms that constantly capture new visitor emails on your site.",
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
      title: "Why Businesses Choose BrandForge for Email Marketing",
      subtitle: "As an email marketing company in Coimbatore backed by Story Smithy and BrandForge's full-stack growth team, we connect your email campaigns to your website, paid ads, and social funnels for maximum customer lifetime value.",
      items: [
        {
          title: "Automated Flows That Sell While You Sleep",
          description: "Welcome drips, abandoned cart recovery, and post-purchase follow-ups that quietly generate sales 24/7 on autopilot.",
          icon: Zap
        },
        {
          title: "Primary Inbox Placement, Not Spam",
          description: "Full SPF, DKIM, DMARC, and sender domain authentication to ensure your emails reach the main inbox every single time.",
          icon: ShieldCheck
        },
        {
          title: "Subject Lines That Actually Get Opened",
          description: "Curiosity hooks, personalization, and compelling preview text crafted to beat crowded inbox competition.",
          icon: PenTool
        },
        {
          title: "Smart RFM List Segmentation",
          description: "Targeted messaging for VIP spenders, first-time buyers, and at-risk churned customers so every offer hits the mark.",
          icon: Users
        },
        {
          title: "Email + WhatsApp Unified Retention",
          description: "Combining high-ROI email campaigns with instant WhatsApp messaging for unbeatable conversion rates.",
          icon: Target
        }
      ]
    },
    timeline: {
      tag: "WHAT BRANDFORGE WILL DO FOR YOU",
      title: "What BrandForge Will Do For You",
      subtitle: "No spam blasts, no generic templates. Here's what actually gets built and deployed for your business. Because we manage SEO, web, and ads in-house too, your email funnels integrate smoothly with every customer touchpoint.",
      steps: [
        { num: "01", title: "AUTOMATED FLOWS THAT SELL 24/7", desc: "Welcome, cart recovery, post-purchase, and win-back drips running quietly on autopilot." },
        { num: "02", title: "SMART LIST SEGMENTATION", desc: "Segmenting subscribers into VIPs, cold leads, repeat buyers, and interest-based tiers." },
        { num: "03", title: "PRIMARY INBOX DELIVERY, NOT SPAM", desc: "SPF, DKIM, DMARC, and domain warming so your emails never get lost in junk folders." },
        { num: "04", title: "SUBJECT LINES THAT GET OPENED", desc: "Tested hooks, compelling preview text, and persuasive copy crafted by our Story Smithy writers." },
        { num: "05", title: "FESTIVAL & OFFER CAMPAIGNS", desc: "Timely promotional campaigns for Diwali, Pongal, New Year, and seasonal flash sales." },
        { num: "06", title: "EMAIL + WHATSAPP COMBINED", desc: "Multi-channel retention sequences pairing email depth with high-urgency WhatsApp messaging." },
        { num: "07", title: "CLEAR REVENUE & OPEN REPORTS", desc: "Straightforward monthly reports showing opens, clicks, recovered carts, and revenue earned." },
        { num: "08", title: "MOBILE-RESPONSIVE TEMPLATES", desc: "Clean, fast-loading, dark-mode compatible email designs that look flawless on any smartphone." }
      ]
    },
    whoWeHelp: {
      tag: "WHO WE WORK WITH",
      title: "Who We Work With in Coimbatore & Tamil Nadu",
      subtitle: "We run email marketing for coaching institutes, e-commerce and retail brands, clinics and healthcare, real estate, B2B companies, and local service brands across Coimbatore and Tamil Nadu. If you have contacts or past buyers, we turn them into recurring revenue.",
      industries: [
        { title: "Coaching & Education Institutes", desc: "Automated student onboarding drips, batch commencement reminders, and webinar invite sequences." },
        { title: "E-Commerce & Retail Brands", desc: "Abandoned checkout recovery, new arrival drops, VIP loyalty perks, and festive sale announcements." },
        { title: "Clinics, Doctors & Healthcare", desc: "Appointment reminder drips, post-consultation care guides, and preventive health newsletters." },
        { title: "Real Estate & Property Developers", desc: "Project launch teasers, construction progress updates, and site visit invitation sequences." },
        { title: "B2B & Industrial Manufacturers", desc: "Product catalog updates, corporate case studies, and client relationship nurture drip flows." },
        { title: "Local Service Businesses", desc: "Seasonal service reminders, customer feedback surveys, and referral reward campaigns." }
      ],
      certifications: [
        { label: "Klaviyo & HubSpot Email Certified Methodology" },
        { label: "Mailchimp & Brevo Deliverability Optimization Standards" },
        { label: "Real Client Result: A Coimbatore retail store's re-engagement flow recovered ₹1.2L in 60 days" },
        { label: "Reviewed by BalaMurali, Email Lead & Founder, Story Smithy" }
      ]
    },
    faqs: [
      {
        q: "How much does email marketing cost in Coimbatore?",
        a: "It depends on your list size and how many campaigns and flows you need. We offer affordable monthly retainer packages with zero hidden fees after understanding your requirements."
      },
      {
        q: "I have a small list. Is email marketing still worth it?",
        a: "Yes! A targeted list of 500 engaged local customers can generate more repeat sales than 10,000 random social followers because email reaches people directly in their personal inbox."
      },
      {
        q: "Will my emails end up in the spam folder?",
        a: "No. We authenticate your domain with SPF, DKIM, and DMARC records, clean invalid addresses, and use high-reputation sending practices so your emails reach the primary inbox."
      },
      {
        q: "What email tool do you use?",
        a: "We work with top platforms including Klaviyo, Omnisend, Mailchimp, Brevo, and ActiveCampaign, or set up campaigns on your existing email software."
      },
      {
        q: "Can email marketing really bring repeat sales?",
        a: "Absolutely. Automated flows like post-purchase cross-sells, birthday offers, and win-back drips consistently turn one-time shoppers into lifelong loyal repeat customers."
      }
    ],
    bottomCta: {
      title: "Book a Free Email Marketing Audit Today",
      subtitle: "We'll audit your list, check your deliverability, and show you the automated email flows that could add recurring revenue every month.",
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
    bannerBg: "/banner-brand-anvil.png",
    icon: Target,
    metrics: [
      { value: "4.8x", label: "Pricing Power Multiple", desc: "Ability to command premium prices without margin erosion" },
      { value: "+340%", label: "Market Recall & Authority", desc: "Customer consideration surge vs generic rivals" },
      { value: "100%", label: "Strategic Category Moat", desc: "Defensible positioning across web, ads & sales" },
      { value: "14 Days", label: "Blueprint Turnaround", desc: "Complete brand book & cross-channel messaging rollout" },
    ],
    whyChooseUs: {
      tag: "THE POWER OF POSITIONING",
      title: "What Is Brand Positioning (And Why It Decides Your Price)",
      description: "Positioning is the space your brand owns in a customer's mind. It's the reason someone picks you over the shop next door — even at a higher price. Without positioning, you blend in — and blending in means competing on price. That's a race nobody wins.",
      leadIn: "Get your positioning right and you gain measurable business leverage:",
      points: [
        "A clear reason to be chosen over cheaper rivals",
        "The ability to charge premium prices without pushback",
        "Customers who remember and recommend you",
        "Marketing that finally feels consistent, not random",
        "A brand that attracts the right customers, not just any"
      ]
    },
    matrixTag: "WHAT AN AGENCY ACTUALLY DOES",
    matrixTitle: "WHAT DOES A BRAND POSITIONING AGENCY IN COIMBATORE DO?",
    matrixSubtitle: "A real brand positioning agency in Coimbatore digs into your business, market, and customers before writing a single tagline. Here's what Brand Anvil handles end to end:",
    matrixRows: [
      {
        feature: "Market & Competitor Research",
        traditional: "Copying rival taglines blindly without research",
        brandforge: "Finding the unique market gap you can decisively own"
      },
      {
        feature: "Audience Clarity",
        traditional: "Marketing vaguely to everyone and attracting nobody",
        brandforge: "Defining exactly who you're for (and who you're not)"
      },
      {
        feature: "Positioning Statement",
        traditional: "Empty corporate buzzwords nobody remembers",
        brandforge: "The core central idea your entire business and culture rallies behind"
      },
      {
        feature: "Messaging Framework",
        traditional: "Inconsistent ad copy and scattered messaging",
        brandforge: "How you talk about yourself across website, ads, pitches, and social"
      },
      {
        feature: "Brand Story & Voice",
        traditional: "Generic corporate bio that fails to evoke emotion",
        brandforge: "The compelling origin narrative that makes customers truly care"
      },
      {
        feature: "Cross-Channel Rollout",
        traditional: "Positioning PDF that sits ignored in a folder",
        brandforge: "Deploying new positioning across your website, social, ads, and sales team"
      }
    ],
    pillarsTag: "OUR SERVICES",
    pillarsTitle: "Our Brand Positioning Services",
    pillarsSubtitle: "We shape the right positioning for your stage — a new launch, a rebrand, or a business stuck competing on price.",
    pillars: [
      {
        icon: Target,
        tag: "CORE STRATEGY",
        title: "Brand Strategy & Positioning",
        description: "The core strategic idea that sets you apart from competitors and makes you the undisputed leader in your category.",
        deliverables: [
          "Unique Value Proposition Definition",
          "Competitive Category Framing",
          "Long-Term Positioning Roadmap",
          "Market White-Space Opportunity Map"
        ]
      },
      {
        icon: PenTool,
        tag: "HIGH CONVERSION",
        title: "Brand Messaging & Tagline",
        description: "Words that stick in customer minds and sell your value proposition instantly without technical friction.",
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
        description: "The emotional origin narrative behind why your business exists and why discerning clients should trust you.",
        deliverables: [
          "Founder & Heritage Storytelling",
          "Brand Manifesto & Mission Creed",
          "Customer Hero Transformation Arc",
          "Internal Culture & Purpose Deck"
        ]
      },
      {
        icon: ShieldCheck,
        tag: "STRATEGIC MOAT",
        title: "Competitor Differentiation",
        description: "A sharp, defensible reason for buyers to choose you over alternatives, eliminating price-matching wars forever.",
        deliverables: [
          "Competitor Messaging Audit",
          "Differentiator Battle Cards",
          "Pricing Power Justification Matrix",
          "Category Distinction Moat"
        ]
      },
      {
        icon: Users,
        tag: "BUYER CLARITY",
        title: "Target Audience Definition",
        description: "Knowing exactly who to talk to by pinpointing high-value ideal buyer profiles, psychological triggers, and pain points.",
        deliverables: [
          "Ideal Customer Profiles (ICP)",
          "Buyer Persona Psychographics",
          "Customer Pain & Desire Maps",
          "Disqualification Criteria (Who You're Not For)"
        ]
      },
      {
        icon: Zap,
        tag: "CONSISTENT TONE",
        title: "Brand Voice & Tone Guide",
        description: "A consistent, magnetic personality across every website page, ad creative, email sequence, and client proposal.",
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
        description: "Shifting how the market perceives an established business so you attract higher-paying clientele without losing loyal buyers.",
        deliverables: [
          "Legacy Perception Audit",
          "Repositioning Transition Strategy",
          "Customer Migration Messaging",
          "Market Re-Introduction Campaign"
        ]
      },
      {
        icon: Layers,
        tag: "PLAYBOOK",
        title: "Brand Guidelines & Playbook",
        description: "A single comprehensive document that keeps your executive team, sales reps, and external designers aligned forever.",
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
      title: "Why Businesses Choose Brand Anvil for Brand Positioning",
      subtitle: "As the dedicated brand positioning studio inside BrandForge that also runs web development, content marketing, paid ads, and social media in-house, we don't just deliver a PDF — we bring your positioning to life across every customer touchpoint.",
      items: [
        {
          title: "Strategy First — Never Guesswork",
          description: "We uncover the exact market space your competitors have left wide open before writing a single word of copy.",
          icon: Target
        },
        {
          title: "Command Premium Pricing",
          description: "Our positioning models transform your business from a commodity price tag into an authority brand customers pay more for gladly.",
          icon: Award
        },
        {
          title: "End-to-End Cross-Channel Execution",
          description: "We immediately push your new positioning live into your website copy, ad creative, email flows, and sales pitch decks.",
          icon: Zap
        },
        {
          title: "Actionable Messaging Playbooks",
          description: "Zero fluffy mood boards. You get plug-and-play copy, taglines, and elevator pitches your sales team can use today.",
          icon: PenTool
        },
        {
          title: "Proven Category Authority",
          description: "Backed by real-world transformation case studies across startups, clinics, education institutions, and D2C enterprises in Tamil Nadu.",
          icon: ShieldCheck
        }
      ]
    },
    timeline: {
      tag: "WHAT BRAND ANVIL WILL DO FOR YOU",
      title: "What Brand Anvil Will Do For You",
      subtitle: "No vague 'brand vibes' or decorative mood boards. Here is the concrete strategic arsenal you walk away with. And because BrandForge runs web, content, and ads in-house, your new positioning launches live across every channel.",
      steps: [
        { num: "01", title: "ONE-LINE POSITIONING STATEMENT", desc: "The single magnetic idea your entire business, leadership, and sales team can rally behind." },
        { num: "02", title: "CLEAR 'WHY CHOOSE US' MOAT", desc: "A sharp, persuasive answer to why customers should pick you over the cheaper alternatives." },
        { num: "03", title: "DEFINED IDEAL BUYER PROFILE", desc: "Stop marketing vaguely to everyone and start attracting high-ticket, high-retention clients." },
        { num: "04", title: "MESSAGING CHEAT-SHEET", desc: "Ready-to-use hooks and elevator lines for your website, ad creatives, sales pitches, and social." },
        { num: "05", title: "BRAND VOICE & TONE GUIDE", desc: "Ensuring every email, blog post, and ad campaign sounds unmistakably and authoritatively like you." },
        { num: "06", title: "COMPETITOR GAP ANALYSIS", desc: "We uncover the lucrative market space rivals left wide open for you to dominate." },
        { num: "07", title: "FULL BRAND GUIDELINES BOOK", desc: "One master playbook your internal staff and external designers can follow forever." },
        { num: "08", title: "FULL-FUNNEL ROLLOUT PLAN", desc: "A detailed launch roadmap executing your new positioning across web, ads, and sales." }
      ]
    },
    whoWeHelp: {
      tag: "WHO WE WORK WITH",
      title: "Who We Work With in Coimbatore & Tamil Nadu",
      subtitle: "We position new startups, family businesses ready to modernize, coaching institutes, clinics and healthcare, D2C retail brands, real estate developers, and service businesses across Coimbatore and Tamil Nadu. If you're tired of competing on price, positioning is where the fix starts.",
      industries: [
        { title: "Startups & Emerging Tech", desc: "Category creation, investor pitch narrative framing, and launch positioning to secure early market dominance." },
        { title: "Family Businesses Modernizing", desc: "Preserving legacy trust while elevating positioning and messaging to win next-generation buyers." },
        { title: "Coaching & Education Institutes", desc: "Establishing premier curriculum authority and outcome-focused positioning that justifies premium admissions." },
        { title: "Clinics, Doctors & Healthcare", desc: "Specialist medical authority positioning and patient trust narratives that elevate consultation value." },
        { title: "D2C & Retail Consumer Brands", desc: "Lifestyle positioning, packaging narrative copy, and unboxing storytelling that beats discount competition." },
        { title: "B2B & Enterprise Services", desc: "High-ticket positioning frameworks and ROI-focused sales messaging for corporate procurement decision-makers." }
      ],
      certifications: [
        { label: "Harvard Business Review & Interbrand Strategy Framework Alignment" },
        { label: "Real Repositioning Case Study: Rebranded ThoughtFlows into an AI-Powered Healthcare Pioneer with 3.4x Valuation Growth" },
        { label: "Sample Brand Guidelines: 40-Page Master Playbook Covering Tone, Value Proposition & Sales Scripts" },
        { label: "Reviewed by BalaMurali, Brand Strategist & Founder, Brand Anvil by BrandForge" }
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
      title: "Book a Free Brand Positioning Session Today",
      subtitle: "In 30 minutes we'll pinpoint what makes you different and the one shift that could let you charge more.",
      buttonText: "Claim Your Free Positioning Session →"
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
    bannerBg: "/banner-visual-id.png",
    icon: Palette,
    metrics: [
      { value: "100%", label: "Iconic Design Originality", desc: "Custom vector geometry, dynamic 3D tokens & bespoke typography" },
      { value: "4.5x", label: "Perceived Value Increase", desc: "Immediate customer trust & premium pricing power" },
      { value: "100+", label: "Brand System Page Manual", desc: "Comprehensive design rulebook covering print, digital & 3D" },
      { value: "7-14 Days", label: "Complete Kit Delivery", desc: "Full multi-format logo files, palette & social asset handover" },
    ],
    whyChooseUs: {
      tag: "FIRST IMPRESSIONS MATTER",
      title: "Why Your Brand Identity Decides First Impressions",
      description: "People judge a business by how it looks before they ever try it. A strong, consistent identity earns trust instantly. A DIY logo saves a little money now and costs you customers for years. Identity is where looking the part starts.",
      leadIn: "A polished, professional identity gives you an immediate competitive advantage:",
      points: [
        "Instant credibility — you look established, not amateur",
        "Recognition — customers remember and spot you everywhere",
        "Trust — a polished look signals a serious business",
        "Consistency — every post, card, and sign feels like one brand",
        "The ability to charge more — professional brands command it"
      ]
    },
    matrixTag: "WHAT AN AGENCY ACTUALLY DOES",
    matrixTitle: "WHAT DOES A BRAND IDENTITY DESIGN AGENCY DO?",
    matrixSubtitle: "A real brand identity design agency builds a complete visual system, not a one-off logo. Here's what Identity Forge handles end to end:",
    matrixRows: [
      {
        feature: "Logo Design",
        traditional: "Single flat low-res PNG with no variations or icons",
        brandforge: "A primary, secondary, and icon mark that is simple, unique, and works everywhere"
      },
      {
        feature: "Colour Palette",
        traditional: "Random uncalibrated colours that look washed out in print",
        brandforge: "Harmonious HEX, RGB & CMYK palettes chosen specifically for your industry"
      },
      {
        feature: "Typography System",
        traditional: "Clashing default system fonts across different pages",
        brandforge: "Curated heading and body font pairings that express your personality"
      },
      {
        feature: "Visual Style & Assets",
        traditional: "Inconsistent stock images and mismatched templates",
        brandforge: "A cohesive visual aesthetic for graphics, photography, and layout grids"
      },
      {
        feature: "Business Stationery",
        traditional: "DIY business cards with blurry logos and broken margins",
        brandforge: "Print-ready luxury cards, letterheads, invoice templates & packaging"
      },
      {
        feature: "Brand Guidelines",
        traditional: "Zero documentation leading to branding drift over time",
        brandforge: "A comprehensive brand rulebook keeping your team and designers on-brand forever"
      }
    ],
    pillarsTag: "OUR SERVICES",
    pillarsTitle: "Our Brand Identity Design Services",
    pillarsSubtitle: "We build the right identity for your stage — a fresh startup, a rebrand, or a business that has simply outgrown its old look.",
    pillars: [
      {
        icon: Palette,
        tag: "CORE IDENTITY",
        title: "Logo Design",
        description: "Primary, secondary, horizontal, and icon versions crafted with geometric precision for web, print, and mobile apps.",
        deliverables: [
          "Primary & Secondary Logo Marks",
          "Compact Icon & Favicon Suite",
          "Monochrome & Dark/Light Variants",
          "Full Vector AI, EPS & SVG Master Files"
        ]
      },
      {
        icon: Box,
        tag: "FULL PACKAGE",
        title: "Complete Brand Identity Kits",
        description: "Logo, colour palettes, typography, stationery, and social media assets combined in one cohesive, turnkey package.",
        deliverables: [
          "Full Brand Asset Library",
          "Ready-to-Use Vector Icons",
          "Digital & Print Asset Packaging",
          "Cloud-Accessible Brand Drive"
        ]
      },
      {
        icon: PenTool,
        tag: "VISUAL HARMONY",
        title: "Colour & Typography Systems",
        description: "Calibrated HEX, RGB, and CMYK color codes and font pairings that stay unmistakably consistent across every channel.",
        deliverables: [
          "Primary & Secondary Color Scales",
          "Accessible Contrast Ratios",
          "Header & Body Type Pairing Specs",
          "Webfont & Desktop Font Licenses"
        ]
      },
      {
        icon: Layers,
        tag: "PRINT READY",
        title: "Business Stationery",
        description: "Premium business cards, letterheads, corporate envelopes, email signatures, and invoices that look the part.",
        deliverables: [
          "Luxury Business Card Designs",
          "Official Letterhead & Envelope Templates",
          "Clickable HTML Email Signatures",
          "Branded Invoice & Receipt Layouts"
        ]
      },
      {
        icon: Megaphone,
        tag: "DIGITAL READY",
        title: "Social Media Brand Kits",
        description: "Editable Canva and Figma templates so every Instagram post, Reel cover, and LinkedIn graphic looks elite from day one.",
        deliverables: [
          "Instagram Post & Story Templates",
          "YouTube & LinkedIn Banner Covers",
          "Reel & Short-Form Video Intro Frames",
          "Branded Carousel Slide Layouts"
        ]
      },
      {
        icon: Target,
        tag: "RETAIL IMPACT",
        title: "Packaging & Label Design",
        description: "Product boxes, bottle labels, retail hangtags, and unboxing collateral designed to captivate buyers and jump off shelves.",
        deliverables: [
          "Product Box & Pouch Dielines",
          "Label Design & Barcode Formatting",
          "Luxury Unboxing Insert Cards",
          "3D Photorealistic Packaging Renders"
        ]
      },
      {
        icon: TrendingUp,
        tag: "MODERNIZATION",
        title: "Rebranding & Logo Redesign",
        description: "Modernising existing visual identities with care, preserving what loyal customers recognize while elevating your market authority.",
        deliverables: [
          "Legacy Brand Equity Audit",
          "Vector Modernization & Cleanup",
          "Brand Evolution Transition Deck",
          "Announcement Assets & PR Graphics"
        ]
      },
      {
        icon: ShieldCheck,
        tag: "MASTER PLAYBOOK",
        title: "Brand Guidelines Document",
        description: "A single comprehensive rulebook covering clear space, color rules, typography, and do's/don'ts that keeps everyone on brand.",
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
      title: "Why Businesses Choose Identity Forge for Brand Identity Design",
      subtitle: "As the dedicated brand identity design studio inside BrandForge that also builds websites, runs ads, and produces content in-house, we design visual systems built for real-world conversion across digital screens and physical print.",
      items: [
        {
          title: "Complete Visual Systems, Not Just A Logo",
          description: "We give you a complete toolkit of colors, typography, stationery, and social templates that work together seamlessly.",
          icon: Box
        },
        {
          title: "Every Source File & Format Included",
          description: "You receive full vector AI, EPS, SVG, PDF, and high-resolution PNGs so you are never stuck asking a designer later.",
          icon: Palette
        },
        {
          title: "Immediate Cross-Channel Deployment",
          description: "We carry your new visual identity straight onto your website, landing pages, ads, and email templates without delay.",
          icon: Zap
        },
        {
          title: "Collaborative Options & Revisions",
          description: "Multiple distinct artistic directions to choose from with structured feedback loops until your identity is 100% perfect.",
          icon: PenTool
        },
        {
          title: "Proven Category Authority",
          description: "Backed by real client design systems across startups, retail D2C brands, coaching academies, and clinics in Coimbatore.",
          icon: ShieldCheck
        }
      ]
    },
    timeline: {
      tag: "WHAT IDENTITY FORGE WILL DO FOR YOU",
      title: "What Identity Forge Will Do For You",
      subtitle: "No single flat logo file and goodbye. Here is the complete visual design arsenal you actually walk away with. And because BrandForge runs web, social, and content in-house, your new identity goes live properly across every customer touchpoint.",
      steps: [
        { num: "01", title: "MULTIPLE LOGO VARIATIONS", desc: "Full, compact, horizontal, and icon marks optimized for websites, print, and mobile app icons." },
        { num: "02", title: "EVERY FILE FORMAT YOU NEED", desc: "PNG, SVG, PDF, EPS, and vector source files (AI/Figma), so you are never restricted." },
        { num: "03", title: "DEFINED COLOUR PALETTE", desc: "Exact calibrated HEX, RGB, and CMYK codes engineered for high contrast on screens and paper." },
        { num: "04", title: "CHOSEN BRAND FONTS", desc: "Curated heading and body font pairings that carry your personality across all marketing text." },
        { num: "05", title: "READY-TO-USE SOCIAL TEMPLATES", desc: "Editable Canva and Figma post and story templates so your social feed looks elite from day one." },
        { num: "06", title: "BUSINESS CARDS & STATIONERY", desc: "Print-ready luxury business cards, letterheads, invoice templates, and corporate folders." },
        { num: "07", title: "MASTER BRAND GUIDELINES PDF", desc: "The definitive rulebook that keeps your internal team and any external designer consistent forever." },
        { num: "08", title: "REAL CONCEPTS & REVISIONS", desc: "Multiple creative concepts and structured polish rounds, never a single take-it-or-leave-it mock." }
      ]
    },
    whoWeHelp: {
      tag: "WHO WE WORK WITH",
      title: "Who We Work With in Coimbatore & Tamil Nadu",
      subtitle: "We design identities for new startups, family businesses ready for a modern look, coaching institutes, clinics and healthcare, cafes & restaurants, and D2C product brands across Coimbatore and Tamil Nadu. If you want to look established and be remembered, this is where it begins.",
      industries: [
        { title: "Startups & Tech Ventures", desc: "Futuristic, scalable 3D emblems and digital-first design tokens built for investor decks and mobile apps." },
        { title: "Family Businesses Modernizing", desc: "Elevating traditional brands with sleek, contemporary visual identities that resonate with modern consumers." },
        { title: "Coaching & Education Institutes", desc: "Prestigious crests, certificate designs, and student marketing collateral that inspire trust and enrollments." },
        { title: "Clinics, Doctors & Healthcare", desc: "Clean, calming, highly professional medical visual systems, prescription pads, and clinic signage." },
        { title: "Cafes, Restaurants & Hospitality", desc: "Appetizing menu layouts, aesthetic packaging, table collateral, and Instagrammable interior branding." },
        { title: "D2C & Retail Consumer Brands", desc: "Luxury product boxes, pouch dielines, unboxing cards, and retail shelf packaging that converts." }
      ],
      certifications: [
        { label: "Behance Featured Design & Adobe Brand Standard Compliant Framework" },
        { label: "Real Portfolio Proof: Built BrandForge, Sonic Prints & Talentera Visual Identity Systems" },
        { label: "Delivered Assets: Vector Source Files, 3D Mockups, Print Guidelines & Color Proofing Sheets" },
        { label: "Reviewed by BalaMurali, Lead Designer & Founder, Identity Forge by BrandForge" }
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
      title: "Book a Free Brand Identity Call Today",
      subtitle: "Show us your business and we'll share exactly how a professional identity would make you look established and unforgettable.",
      buttonText: "Claim Your Free Brand Call →"
    }
  },

  "commercial-video": {
    slug: "commercial-video",
    number: "10",
    eyebrow: "REEL FORGE / COMMERCIAL VIDEO",
    title: "HIGH-CONVERTING COMMERCIAL VIDEO ADS & 3D MOTION SHOWREELS",
    subtitle: "We produce Hollywood-grade commercial video ads, 3D motion product trailers, and high-converting ad reels that captivate audiences.",
    icon: Video,
    metrics: [
      { value: "4K 60fps", label: "Cinematic Video Quality", desc: "High-end commercial color grading & VFX" },
      { value: "+320%", label: "Ad Click-Through Rate", desc: "CTR lift over standard static ad creatives" },
      { value: "15M+", label: "Total Commercial Views", desc: "Generated across TV, YouTube & Meta campaigns" },
      { value: "100%", label: "Custom 3D VFX & Motion", desc: "CGI product breakdowns & dynamic graphics" },
    ],
    matrixTag: "CINEMATIC IMPACT",
    matrixTitle: "STOCK VIDEO ADS VS BRANDFORGE REEL FORGE",
    matrixSubtitle: "Stop using boring stock footage. Capture attention with Hollywood-grade CGI video commercials.",
    matrixRows: [
      { feature: "Production Quality", traditional: "Cheesy stock footage with bad voiceover", brandforge: "Custom 3D VFX, cinematic lighting & pro voice actors" },
      { feature: "Viewer Retention", traditional: "Viewers skip ad after 2 seconds", brandforge: "Aggressive visual hook that locks attention" },
      { feature: "Product Focus", traditional: "Vague generic visuals", brandforge: "3D CGI product exploding view & feature breakdown" },
      { feature: "Platform Multi-Format", traditional: "Horizontal 16:9 video squeezed into Reels", brandforge: "Native 9:16, 1:1, and 16:9 multi-format renders" },
    ],
    pillars: [
      { icon: Video, tag: "COMMERCIALS", title: "High-Impact Video Ad Commercials", description: "Produce direct-response video ads engineered specifically to drive purchases on Meta, TikTok, and YouTube.", deliverables: ["Hook Variant Scripting", "Professional Voiceover", "Dynamic Motion Editing"] },
      { icon: Box, tag: "3D CGI", title: "3D CGI Product Spotlight Videos", description: "Render photorealistic 3D product animations showing internal components, materials, and features.", deliverables: ["3D Exploded Views", "Realistic Liquid/Lighting VFX", "Product Feature Callouts"] },
      { icon: PenTool, tag: "SCRIPTING", title: "Psychological Ad Scriptwriting", description: "Write persuasive video scripts designed around problem-solution frameworks and urgency triggers.", deliverables: ["3-Second Hook Matrix", "Pain-Point Story Arc", "Strong Urgency Call-to-Action"] },
      { icon: Layers, tag: "SHOWREELS", title: "Brand Anthem & Vision Showreels", description: "Create epic 90-second brand anthem videos for website hero sections, investor meetings, and trade shows.", deliverables: ["Cinematic Sound Design", "4K Color Grading", "Epic Brand Manifesto"] },
      { icon: Zap, tag: "MULTI-RATIO", title: "Multi-Platform Aspect Ratio Render", description: "Deliver every commercial formatted for 9:16 Stories/Reels, 1:1 Feed, and 16:9 YouTube/TV.", deliverables: ["9:16 Vertical Video", "1:1 Square Feed", "16:9 Full Widescreen"] },
      { icon: TrendingUp, tag: "AD TESTING", title: "Ad Creative Variant Testing Pack", description: "Provide 5 different video opening hooks for each commercial to find the highest ROAS winner.", deliverables: ["5 Hook Variations", "3 CTA Ending Swaps", "Fast Iteration Edits"] },
    ],
    faqs: [
      { q: "Do we need to ship physical products for 3D video creation?", a: "If creating 3D CGI product renders, you only need to send us CAD files or product photos! If shooting live-action footage, you can ship products to our studio." },
      { q: "How long is a standard commercial video ad?", a: "Direct-response ad commercials are typically 15, 30, or 60 seconds long. Brand anthem showreels are usually 60 to 120 seconds." },
      { q: "Do you supply professional voiceovers and background music?", a: "Yes. We license high-end commercial music tracks and hire professional voiceover talent across multiple languages and accents." },
      { q: "What is the turnaround time for a commercial video project?", a: "Production typically takes 2 to 3 weeks from script approval to final 4K video rendering." },
    ],
  },

  "cro-revenue": {
    slug: "cro-revenue",
    number: "11",
    eyebrow: "INSIGHT FURNACE / CRO REVENUE LIFT",
    title: "DOUBLE YOUR WEBSITE CONVERSION RATES WITHOUT INCREASING AD SPEND",
    subtitle: "We run data-driven A/B testing, user session recording analysis, and checkout friction removal to squeeze maximum profit from existing traffic.",
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
    number: "12",
    eyebrow: "REPUTATION SHIELD / GLOBAL PR ENGINE",
    title: "PROTECT & ELEVATE BRAND TRUST WITH GLOBAL PR & REVIEW GROWTH",
    subtitle: "We deploy proactive review growth engines, global press release networks, and crisis PR defense across major media channels.",
    icon: ShieldCheck,
    metrics: [
      { value: "4.9★", label: "Average Client Review Score", desc: "Trustpilot & Google review portfolio rating" },
      { value: "300+", label: "Press Publications", desc: "Global PR coverage on Forbes, Bloomberg & TechCrunch" },
      { value: "24/7", label: "Brand Defense Monitoring", desc: "Real-time crisis monitoring & sentiment tracking" },
      { value: "100%", label: "Search Grid Protection", desc: "Page 1 search results dominated by positive PR" },
    ],
    matrixTag: "BRAND TRUST",
    matrixTitle: "UNPROTECTED BRAND VS BRANDFORGE REPUTATION SHIELD",
    matrixSubtitle: "Don’t let a single bad review ruin your reputation. Secure global PR and review dominance.",
    matrixRows: [
      { feature: "Search Reputation", traditional: "Negative review site ranking #2 on Google", brandforge: "Page 1 search grid suppressed & dominated by positive PR" },
      { feature: "Review Volume", traditional: "Only unhappy customers leaving reviews", brandforge: "Automated post-purchase review generation engine" },
      { feature: "Media Coverage", traditional: "Zero press mentions or industry recognition", brandforge: "Tier-1 features on top global news publications" },
      { feature: "Crisis Preparedness", traditional: "Panic when negative press strikes", brandforge: "Proactive crisis response strategy & instant PR push" },
    ],
    pillars: [
      { icon: ShieldCheck, tag: "REVIEWS", title: "Automated Review Growth Engine", description: "Automatically invite happy customers via SMS & email to leave 5-star reviews on Trustpilot, Google, and G2.", deliverables: ["Trustpilot Review Funnel", "Google Business Review Sync", "G2 / Capterra Automation"] },
      { icon: Globe, tag: "GLOBAL PR", title: "Tier-1 Global Press Release Distribution", description: "Publish executive interviews and brand announcements on Forbes, Bloomberg, Yahoo Finance, and Business Insider.", deliverables: ["Tier-1 Press Distribution", "Executive Media Pitching", "Guaranteed Publication Lock"] },
      { icon: Search, tag: "SERP SHIELD", title: "Page 1 Google Search Reputation Shield", description: "Push negative search results off Page 1 by ranking high-authority positive news articles and profiles.", deliverables: ["Negative SERP Suppression", "Positive Article Indexing", "Brand Search Defense"] },
      { icon: BarChart3, tag: "MONITORING", title: "24/7 Sentiment & Mention Radar", description: "Monitor web mentions, forum discussions, and social media chatter in real-time to intercept negative press.", deliverables: ["Real-Time Mention Alerts", "Social Sentiment Radar", "Forum Reputation Defense"] },
      { icon: Layers, tag: "WIKIPEDIA", title: "Executive & Corporate Knowledge Panel", description: "Build and verify Google Knowledge Panels and executive Wikipedia entries to lock in maximum authority.", deliverables: ["Google Knowledge Panel Lock", "Wikidata Entity Graph", "Executive Bio Verification"] },
      { icon: TrendingUp, tag: "CRISIS PR", title: "Crisis PR & Defense Protocol", description: "Deploy rapid crisis PR strategies, press statements, and SEO suppression when unexpected PR challenges arise.", deliverables: ["Crisis Statement Blueprint", "Media Spokesperson Brief", "Rapid Press Counter-Wave"] },
    ],
    faqs: [
      { q: "Can you remove negative search results from Google?", a: "While search engines rarely delete articles directly, our SERP Shield strategy ranks high-authority positive news articles that push negative links down off Page 1 and Page 2 where no one sees them." },
      { q: "How does the automated review growth engine work?", a: "We integrate with your CRM/store so when a customer completes a order, an automated SMS/email asks for feedback. Satisfied customers are directed to Trustpilot/Google to post 5-star reviews." },
      { q: "Which press publications do you guarantee placements on?", a: "We guarantee distribution across major outlets including Yahoo Finance, Business Insider, Digital Journal, AP News, and top industry trade publications." },
      { q: "How long does it take to build a 4.9-star review rating?", a: "Our review growth engine generates fresh 5-star reviews within the first 72 hours of launch and steadily elevates your average rating over 30 to 60 days." },
    ],
  },
};

servicesData["seo-company-coimbatore"] = servicesData["seo-geo"];
servicesData["ppc-company-coimbatore"] = servicesData["paid-media"];
