import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { servicesData } from "../src/data/servicesData.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(__dirname, "../dist");
const INDEX_HTML_PATH = path.join(DIST_DIR, "index.html");

const BASE_URL = "https://www.brandforgeagency.in";

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const ROUTES_CONFIG = {
  "/": {
    title: "BrandForge | High-Velocity Growth & 3D Web Engineering Agency",
    description: "BrandForge is a premier digital engineering & performance agency specializing in Sub-Second 3D WebGL Web Development, AI Search Optimization (GEO), Paid Media Scaling, and Enterprise Brand Forging.",
    type: "home"
  },
  "/about": {
    title: "Who We Are | Founders & Leadership – BrandForge Agency",
    description: "Meet Mr. BalaMurali (Founder & MD) and Ms. Banumathy (Founder & CEO) — leading BrandForge's high-velocity digital marketing and 3D web engineering squad.",
    type: "about"
  },
  "/contact": {
    title: "Contact BrandForge | Strategy Consultation & Growth Engineering",
    description: "Connect with senior brand strategists, media buyers, and 3D WebGL engineers at BrandForge. Direct strategy consultation line for category leaders worldwide.",
    type: "contact"
  },
  "/seo-company-coimbatore": {
    serviceKey: "seo-geo",
    title: "Best SEO Company in Coimbatore | SEO & GEO Services – Brand Forge",
    description: "Brand Forge is a trusted SEO company in Coimbatore offering SEO, GEO (Generative Engine Optimization), and local search services to rank higher on Google and AI search engines.",
    type: "service"
  },
  "/ppc-company-coimbatore": {
    serviceKey: "paid-media",
    title: "Best PPC Agency in Coimbatore | Paid Ads & ROAS Scaling – Brand Forge",
    description: "Brand Forge is a top performance marketing & PPC company in Coimbatore managing Google Ads, Meta Ads, and omnichannel paid media for maximum ROAS.",
    type: "service"
  },
  "/website-development-company-coimbatore": {
    serviceKey: "web-foundry",
    title: "Website Development Company in Coimbatore | BrandForge",
    description: "Need a website development company in Coimbatore? BrandForge builds fast, SEO-ready websites that convert. Get a free website consultation today.",
    type: "service"
  },
  "/web-development-company-coimbatore": {
    serviceKey: "web-foundry",
    title: "Website Development Company in Coimbatore | BrandForge",
    description: "Need a website development company in Coimbatore? BrandForge builds fast, SEO-ready websites that convert. Get a free website consultation today.",
    canonicalUrl: `${BASE_URL}/website-development-company-coimbatore`,
    type: "service"
  },
  "/social-media-marketing-company-coimbatore": {
    serviceKey: "viral-social",
    title: "Social Media Marketing Company in Coimbatore | BrandForge",
    description: "Looking for a social media marketing company in Coimbatore? BrandForge grows your brand with content, reels & ads that convert. Get a free strategy call.",
    type: "service"
  },
  "/social-media-agency-coimbatore": {
    serviceKey: "viral-social",
    title: "Social Media Marketing Company in Coimbatore | BrandForge",
    description: "Looking for a social media marketing company in Coimbatore? BrandForge grows your brand with content, reels & ads that convert. Get a free strategy call.",
    canonicalUrl: `${BASE_URL}/social-media-marketing-company-coimbatore`,
    type: "service"
  },
  "/content-marketing-agency-coimbatore": {
    serviceKey: "content-smithy",
    title: "Content Marketing Agency in Coimbatore | BrandForge",
    description: "Looking for a content marketing agency in Coimbatore? BrandForge creates SEO blogs, videos & content that bring leads for months. Book a free content audit.",
    type: "service"
  },
  "/content-marketing-company-coimbatore": {
    serviceKey: "content-smithy",
    title: "Content Marketing Agency in Coimbatore | BrandForge",
    description: "Looking for a content marketing agency in Coimbatore? BrandForge creates SEO blogs, videos & content that bring leads for months. Book a free content audit.",
    canonicalUrl: `${BASE_URL}/content-marketing-agency-coimbatore`,
    type: "service"
  },
  "/email-marketing-company-coimbatore": {
    serviceKey: "inbox-edge",
    title: "Email Marketing Company in Coimbatore | BrandForge",
    description: "Looking for an email marketing company in Coimbatore? BrandForge builds automated email flows that turn leads into repeat buyers. Book a free email audit.",
    type: "service"
  },
  "/email-marketing-agency-coimbatore": {
    serviceKey: "inbox-edge",
    title: "Email Marketing Company in Coimbatore | BrandForge",
    description: "Looking for an email marketing company in Coimbatore? BrandForge builds automated email flows that turn leads into repeat buyers. Book a free email audit.",
    canonicalUrl: `${BASE_URL}/email-marketing-company-coimbatore`,
    type: "service"
  },
  "/brand-positioning-agency-coimbatore": {
    serviceKey: "brand-anvil",
    title: "Brand Positioning Agency in Coimbatore | BrandForge",
    description: "Looking for a brand positioning agency in Coimbatore? Brand Anvil by BrandForge helps you stand out and charge more. Book a free brand positioning session.",
    type: "service"
  },
  "/brand-position-agency-coimbatore": {
    serviceKey: "brand-anvil",
    title: "Brand Positioning Agency in Coimbatore | BrandForge",
    description: "Looking for a brand positioning agency in Coimbatore? Brand Anvil by BrandForge helps you stand out and charge more. Book a free brand positioning session.",
    canonicalUrl: `${BASE_URL}/brand-positioning-agency-coimbatore`,
    type: "service"
  },
  "/brand-positioning-company-coimbatore": {
    serviceKey: "brand-anvil",
    title: "Brand Positioning Agency in Coimbatore | BrandForge",
    description: "Looking for a brand positioning agency in Coimbatore? Brand Anvil by BrandForge helps you stand out and charge more. Book a free brand positioning session.",
    canonicalUrl: `${BASE_URL}/brand-positioning-agency-coimbatore`,
    type: "service"
  },
  "/brand-identity-design-agency-coimbatore": {
    serviceKey: "visual-id",
    title: "Brand Identity Design Agency in Coimbatore | BrandForge",
    description: "Need a brand identity design agency? Identity Forge by BrandForge crafts logos, colours & complete brand kits that make you memorable. Book a free brand call.",
    type: "service"
  },
  "/brand-identity-design-company-coimbatore": {
    serviceKey: "visual-id",
    title: "Brand Identity Design Agency in Coimbatore | BrandForge",
    description: "Need a brand identity design agency? Identity Forge by BrandForge crafts logos, colours & complete brand kits that make you memorable. Book a free brand call.",
    canonicalUrl: `${BASE_URL}/brand-identity-design-agency-coimbatore`,
    type: "service"
  },
  "/services/seo-geo": {
    serviceKey: "seo-geo",
    title: "SEO Company in Coimbatore | SEO & GEO Services – Brand Forge",
    description: "Brand Forge is a trusted SEO company in Coimbatore offering SEO, GEO (Generative Engine Optimization), and local search services to rank higher on Google and AI search engines.",
    type: "service"
  },
  "/services/paid-media": {
    serviceKey: "paid-media",
    title: "Paid Media Scaling & High-ROAS Performance Ads – Brand Forge",
    description: "Scale your revenue across Meta, Google, TikTok, and LinkedIn with algorithmic bidding, dynamic retargeting, and high-converting ad creative.",
    type: "service"
  },
  "/services/web-foundry": {
    serviceKey: "web-foundry",
    title: "Website Development Company in Coimbatore | BrandForge",
    description: "Need a website development company in Coimbatore? BrandForge builds fast, SEO-ready websites that convert. Get a free website consultation today.",
    type: "service"
  },
  "/services/viral-social": {
    serviceKey: "viral-social",
    title: "Social Media Marketing Company in Coimbatore | BrandForge",
    description: "Looking for a social media marketing company in Coimbatore? BrandForge grows your brand with content, reels & ads that convert. Get a free strategy call.",
    type: "service"
  },
  "/services/influencer-network": {
    serviceKey: "influencer-network",
    title: "Key Opinion Leader & Influencer Network Studio – Brand Forge",
    description: "Connect with high-converting creators, key opinion leaders, and viral influencers across Meta, TikTok, and YouTube to drive exponential brand authority.",
    type: "service"
  },
  "/services/content-smithy": {
    serviceKey: "content-smithy",
    title: "Content Marketing Agency in Coimbatore | BrandForge",
    description: "Looking for a content marketing agency in Coimbatore? BrandForge creates SEO blogs, videos & content that bring leads for months. Book a free content audit.",
    type: "service"
  },
  "/services/inbox-edge": {
    serviceKey: "inbox-edge",
    title: "Email Marketing Company in Coimbatore | BrandForge",
    description: "Looking for an email marketing company in Coimbatore? BrandForge builds automated email flows that turn leads into repeat buyers. Book a free email audit.",
    type: "service"
  },
  "/services/brand-anvil": {
    serviceKey: "brand-anvil",
    title: "Brand Positioning Agency in Coimbatore | BrandForge",
    description: "Looking for a brand positioning agency in Coimbatore? Brand Anvil by BrandForge helps you stand out and charge more. Book a free brand positioning session.",
    type: "service"
  },
  "/services/visual-id": {
    serviceKey: "visual-id",
    title: "Brand Identity Design Agency in Coimbatore | BrandForge",
    description: "Need a brand identity design agency? Identity Forge by BrandForge crafts logos, colours & complete brand kits that make you memorable. Book a free brand call.",
    type: "service"
  },
  "/services/commercial-video": {
    serviceKey: "commercial-video",
    title: "Commercial Video Ads & 3D Motion Production – Brand Forge",
    description: "High-production commercial video ads, 3D motion graphics showreels, and UGC creative frameworks engineered for high ad engagement.",
    type: "service"
  },
  "/services/cro-revenue": {
    serviceKey: "cro-revenue",
    title: "CRO & Conversion Rate Optimization Revenue Lift – Brand Forge",
    description: "Scientific A/B testing, friction removal, and checkout funnel optimization to maximize revenue from your existing traffic.",
    type: "service"
  },
  "/services/reputation-shield": {
    serviceKey: "reputation-shield",
    title: "Online Reputation Management & Global PR Engine – Brand Forge",
    description: "Proactive review generation, global press releases, and 24/7 crisis PR defense across digital and news publication channels.",
    type: "service"
  },
};

function generateJsonLd(config, canonicalUrl) {
  const schemas = [];

  // Organization Schema
  schemas.push({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BrandForge Agency",
    url: BASE_URL,
    logo: `${BASE_URL}/brandforge-logo.png`,
    description: "High-Velocity Digital Growth, 3D Web Development, and AI Search Optimization Agency in Coimbatore.",
    telephone: "+919384576852",
    email: "brandforgedigitalmarketing@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Coimbatore",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
  });

  // BreadcrumbList Schema
  schemas.push({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: config.title,
        item: canonicalUrl,
      },
    ],
  });

  // Service & FAQPage Schema for service pages
  if (config.type === "service" && config.serviceKey) {
    const service = servicesData[config.serviceKey];
    if (service) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.title,
        serviceType: service.eyebrow || "Digital Marketing & Web Development",
        provider: {
          "@type": "Organization",
          name: "BrandForge Agency",
          url: BASE_URL,
        },
        areaServed: {
          "@type": "Place",
          name: "Coimbatore, Tamil Nadu, India",
        },
        description: config.description,
        url: canonicalUrl,
      });

      if (service.faqs && service.faqs.length > 0) {
        schemas.push({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: service.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.a,
            },
          })),
        });
      }
    }
  }

  return schemas
    .map((s) => `<script type="application/ld+json">\n${JSON.stringify(s, null, 2)}\n</script>`)
    .join("\n");
}

function generateSSG() {
  if (!fs.existsSync(INDEX_HTML_PATH)) {
    console.error("❌ dist/index.html not found! Run vite build first.");
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(INDEX_HTML_PATH, "utf8");

  console.log("⚡ Generating static HTML files with clean root and full SEO metadata in head...");

  for (const [route, config] of Object.entries(ROUTES_CONFIG)) {
    const canonicalUrl = config.canonicalUrl || `${BASE_URL}${route === "/" ? "/" : route}`;

    let customizedHtml = baseHtml;

    // Replace Title
    customizedHtml = customizedHtml.replace(
      /<title>.*?<\/title>/i,
      `<title>${escapeHtml(config.title)}</title>`
    );

    // Replace meta title
    customizedHtml = customizedHtml.replace(
      /<meta\s+name=["']title["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta name="title" content="${escapeHtml(config.title)}" />`
    );

    // Replace meta description
    customizedHtml = customizedHtml.replace(
      /<meta\s+name=["']description["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta name="description" content="${escapeHtml(config.description)}" />`
    );

    // Replace Canonical
    customizedHtml = customizedHtml.replace(
      /<link\s+rel=["']canonical["']\s+href=["'].*?["']\s*\/?>/i,
      `<link rel="canonical" href="${canonicalUrl}" />`
    );

    // Replace OG Title & Description & URL
    customizedHtml = customizedHtml.replace(
      /<meta\s+property=["']og:title["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta property="og:title" content="${escapeHtml(config.title)}" />`
    );
    customizedHtml = customizedHtml.replace(
      /<meta\s+property=["']og:description["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta property="og:description" content="${escapeHtml(config.description)}" />`
    );
    customizedHtml = customizedHtml.replace(
      /<meta\s+property=["']og:url["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta property="og:url" content="${canonicalUrl}" />`
    );

    // Inject JSON-LD Schema before </head>
    const jsonLdHtml = generateJsonLd(config, canonicalUrl);
    customizedHtml = customizedHtml.replace("</head>", `${jsonLdHtml}\n</head>`);

    // Keep <div id="root"></div> clean so that on reload the user never sees unstyled plain text!

    // Determine target file path
    let targetFilePath;
    if (route === "/") {
      targetFilePath = INDEX_HTML_PATH;
    } else {
      const targetDir = path.join(DIST_DIR, route);
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }
      targetFilePath = path.join(targetDir, "index.html");
    }

    fs.writeFileSync(targetFilePath, customizedHtml, "utf8");
    console.log(`  ✓ Created: ${route} -> ${path.relative(DIST_DIR, targetFilePath)} (Clean Root & Full Head SEO)`);
  }

  // Also create a 404.html fallback for static hosts
  const fallback404 = path.join(DIST_DIR, "404.html");
  fs.writeFileSync(fallback404, baseHtml, "utf8");
  console.log("  ✓ Created: 404.html (SPA Fallback)");

  // Copy verified public/sitemap.xml to dist/sitemap.xml
  const publicSitemap = path.resolve(__dirname, "../public/sitemap.xml");
  const distSitemap = path.join(DIST_DIR, "sitemap.xml");
  if (fs.existsSync(publicSitemap)) {
    fs.copyFileSync(publicSitemap, distSitemap);
    console.log("  ✓ Verified sitemap.xml copied to dist/sitemap.xml");
  }

  // Copy verified public/robots.txt to dist/robots.txt
  const publicRobots = path.resolve(__dirname, "../public/robots.txt");
  const distRobots = path.join(DIST_DIR, "robots.txt");
  if (fs.existsSync(publicRobots)) {
    fs.copyFileSync(publicRobots, distRobots);
    console.log("  ✓ Verified robots.txt copied to dist/robots.txt");
  }

  console.log("🎉 All static pages generated successfully with clean root and full SEO metadata!");
}

generateSSG();
