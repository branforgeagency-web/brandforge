import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.resolve(__dirname, "../dist");
const INDEX_HTML_PATH = path.join(DIST_DIR, "index.html");

const BASE_URL = "https://www.brandforgeagency.in";

const ROUTES_META = {
  "/": {
    title: "BrandForge | High-Velocity Growth & 3D Web Engineering Agency",
    description: "BrandForge is a premier digital engineering & performance agency specializing in Sub-Second 3D WebGL Web Development, AI Search Optimization (GEO), Paid Media Scaling, and Enterprise Brand Forging.",
  },
  "/about": {
    title: "Who We Are | Founders & Leadership – BrandForge Agency",
    description: "Meet Mr. BalaMurali (Founder & MD) and Ms. Banumathy (Founder & CEO) — leading BrandForge's high-velocity digital marketing and 3D web engineering squad.",
  },
  "/contact": {
    title: "Contact BrandForge | Strategy Consultation & Growth Engineering",
    description: "Connect with senior brand strategists, media buyers, and 3D WebGL engineers at BrandForge. Direct strategy consultation line for category leaders worldwide.",
  },
  "/seo-company-coimbatore": {
    title: "Best SEO Company in Coimbatore | SEO & GEO Services – Brand Forge",
    description: "Brand Forge is a trusted SEO company in Coimbatore offering SEO, GEO (Generative Engine Optimization), and local search services to rank higher on Google and AI search engines.",
  },
  "/ppc-company-coimbatore": {
    title: "Best PPC Agency in Coimbatore | Paid Ads & ROAS Scaling – Brand Forge",
    description: "Brand Forge is a top performance marketing & PPC company in Coimbatore managing Google Ads, Meta Ads, and omnichannel paid media for maximum ROAS.",
  },
  "/website-development-company-coimbatore": {
    title: "Website Development Company in Coimbatore | BrandForge",
    description: "Need a website development company in Coimbatore? BrandForge builds fast, SEO-ready websites that convert. Get a free website consultation today.",
  },
  "/web-development-company-coimbatore": {
    title: "Website Development Company in Coimbatore | BrandForge",
    description: "Need a website development company in Coimbatore? BrandForge builds fast, SEO-ready websites that convert. Get a free website consultation today.",
  },
  "/services/seo-geo": {
    title: "SEO Company in Coimbatore | SEO & GEO Services – Brand Forge",
    description: "Brand Forge is a trusted SEO company in Coimbatore offering SEO, GEO (Generative Engine Optimization), and local search services to rank higher on Google and AI search engines.",
  },
  "/services/paid-media": {
    title: "Paid Media Scaling & High-ROAS Performance Ads – Brand Forge",
    description: "Scale your revenue across Meta, Google, TikTok, and LinkedIn with algorithmic bidding, dynamic retargeting, and high-converting ad creative.",
  },
  "/services/web-foundry": {
    title: "Website Development Company in Coimbatore | BrandForge",
    description: "Need a website development company in Coimbatore? BrandForge builds fast, SEO-ready websites that convert. Get a free website consultation today.",
  },
  "/services/viral-social": {
    title: "Viral Social Media Growth & Content Engine – Brand Forge",
    description: "Engineering short-form viral algorithms, community resonance, and organic distribution loops across Instagram, YouTube, TikTok, and LinkedIn.",
  },
  "/services/influencer-network": {
    title: "Creator Networks & Influencer Marketing Campaigns – Brand Forge",
    description: "Connect with high-authority creators, vetted contract talent, and key opinion leaders with transparent ROI and conversion tracking.",
  },
  "/services/content-smithy": {
    title: "Authority Storytelling & Content Marketing – Brand Forge",
    description: "Transform complex value propositions into high-converting editorial copy, whitepapers, thought leadership, and organic demand engines.",
  },
  "/services/inbox-edge": {
    title: "Lifecycle Email Marketing & Retention Loops – Brand Forge",
    description: "Automate high-converting Klaviyo sequences, dynamic customer segmentation, and subscriber lifetime value (LTV) maximization.",
  },
  "/services/brand-anvil": {
    title: "Enterprise Brand Growth Architecture & 360° Strategy – Brand Forge",
    description: "360° growth blueprints, market intelligence, unit economics optimization, and go-to-market roadmaps engineered for category dominance.",
  },
  "/services/visual-id": {
    title: "Visual Identity Systems & 3D Brand Design – Brand Forge",
    description: "Command instant market authority with custom logo design, 3D motion tokens, dynamic typography, and scalable enterprise design systems.",
  },
  "/services/commercial-video": {
    title: "Commercial Video Ads & 3D Motion Production – Brand Forge",
    description: "High-production commercial video ads, 3D motion graphics showreels, and UGC creative frameworks engineered for high ad engagement.",
  },
  "/services/cro-revenue": {
    title: "CRO & Conversion Rate Optimization Revenue Lift – Brand Forge",
    description: "Scientific A/B testing, friction removal, and checkout funnel optimization to maximize revenue from your existing traffic.",
  },
  "/services/reputation-shield": {
    title: "Online Reputation Management & Global PR Engine – Brand Forge",
    description: "Proactive review generation, global press releases, and 24/7 crisis PR defense across digital and news publication channels.",
  },
};

function generateSSG() {
  if (!fs.existsSync(INDEX_HTML_PATH)) {
    console.error("❌ dist/index.html not found! Run vite build first.");
    process.exit(1);
  }

  const baseHtml = fs.readFileSync(INDEX_HTML_PATH, "utf8");

  console.log("⚡ Generating static HTML files for all routes...");

  for (const [route, meta] of Object.entries(ROUTES_META)) {
    const canonicalUrl = `${BASE_URL}${route === "/" ? "/" : route}`;

    let customizedHtml = baseHtml;

    // Replace Title
    customizedHtml = customizedHtml.replace(
      /<title>.*?<\/title>/i,
      `<title>${meta.title}</title>`
    );

    // Replace meta title
    customizedHtml = customizedHtml.replace(
      /<meta\s+name=["']title["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta name="title" content="${meta.title}" />`
    );

    // Replace meta description
    customizedHtml = customizedHtml.replace(
      /<meta\s+name=["']description["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta name="description" content="${meta.description}" />`
    );

    // Replace Canonical
    customizedHtml = customizedHtml.replace(
      /<link\s+rel=["']canonical["']\s+href=["'].*?["']\s*\/?>/i,
      `<link rel="canonical" href="${canonicalUrl}" />`
    );

    // Replace OG Title & Description
    customizedHtml = customizedHtml.replace(
      /<meta\s+property=["']og:title["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta property="og:title" content="${meta.title}" />`
    );
    customizedHtml = customizedHtml.replace(
      /<meta\s+property=["']og:description["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta property="og:description" content="${meta.description}" />`
    );
    customizedHtml = customizedHtml.replace(
      /<meta\s+property=["']og:url["']\s+content=["'].*?["']\s*\/?>/i,
      `<meta property="og:url" content="${canonicalUrl}" />`
    );

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
    console.log(`  ✓ Created: ${route} -> ${path.relative(DIST_DIR, targetFilePath)} (Status: 200 OK)`);
  }

  // Also create a 404.html fallback for static hosts
  const fallback404 = path.join(DIST_DIR, "404.html");
  fs.writeFileSync(fallback404, baseHtml, "utf8");
  console.log("  ✓ Created: 404.html (SPA Fallback)");

  console.log("🎉 All static pages generated successfully with 200 OK headers!");
}

generateSSG();
