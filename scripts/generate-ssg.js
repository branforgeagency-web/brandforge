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

function renderServiceBody(serviceKey, canonicalUrl) {
  const service = servicesData[serviceKey];
  if (!service) return "";

  const subtitleHtml = Array.isArray(service.subtitle)
    ? service.subtitle.map((s) => `<p class="ssg-lead">${escapeHtml(s)}</p>`).join("\n")
    : `<p class="ssg-lead">${escapeHtml(service.subtitle || "")}</p>`;

  const metricsHtml = (service.metrics || [])
    .map(
      (m) => `
      <div class="ssg-metric-card" style="padding: 18px; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; margin-bottom: 12px;">
        <div style="font-size: 28px; font-weight: 800; color: #EF4136;">${escapeHtml(m.value)}</div>
        <div style="font-weight: 600; margin: 4px 0;">${escapeHtml(m.label)}</div>
        <div style="font-size: 14px; opacity: 0.8;">${escapeHtml(m.desc || "")}</div>
      </div>
    `
    )
    .join("");

  const whyHtml = service.whyChooseUs
    ? `
      <section class="ssg-section ssg-why-us" style="margin: 36px 0;">
        <span style="color: #EF4136; font-size: 13px; letter-spacing: 2px; text-transform: uppercase;">${escapeHtml(service.whyChooseUs.tag || "WHY CHOOSE US")}</span>
        <h2 style="font-size: 24px; margin-top: 8px;">${escapeHtml(service.whyChooseUs.title || "Why Choose Brand Forge")}</h2>
        <p style="font-size: 16px; line-height: 1.6; opacity: 0.9;">${escapeHtml(service.whyChooseUs.description || "")}</p>
        ${
          service.whyChooseUs.points
            ? `
          <ul style="line-height: 1.8; margin-top: 12px;">
            ${service.whyChooseUs.points.map((p) => `<li>${escapeHtml(p)}</li>`).join("\n")}
          </ul>
        `
            : ""
        }
      </section>
    `
    : "";

  const pillarsHtml = (service.pillars || [])
    .map(
      (p) => `
      <article class="ssg-pillar-card" style="padding: 20px; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; margin-bottom: 16px;">
        <h3 style="font-size: 18px; color: #EF4136;">${escapeHtml(p.title || "")}</h3>
        <p style="margin: 8px 0; opacity: 0.9;">${escapeHtml(p.description || "")}</p>
        ${
          p.deliverables && p.deliverables.length
            ? `
          <ul style="opacity: 0.85; font-size: 14px; line-height: 1.7;">
            ${p.deliverables.map((d) => `<li>${escapeHtml(d)}</li>`).join("\n")}
          </ul>
        `
            : ""
        }
      </article>
    `
    )
    .join("");

  const faqsHtml = (service.faqs || [])
    .map(
      (f) => `
      <div class="ssg-faq-item" style="margin-bottom: 20px;">
        <h3 style="font-size: 18px; margin-bottom: 6px;">${escapeHtml(f.q)}</h3>
        <p style="opacity: 0.9; line-height: 1.6;">${escapeHtml(f.a)}</p>
      </div>
    `
    )
    .join("");

  return `
    <main class="ssg-content-container" style="max-width: 1000px; margin: 0 auto; padding: 40px 20px; font-family: system-ui, -apple-system, sans-serif;">
      <header class="ssg-header" style="margin-bottom: 40px;">
        <nav aria-label="Breadcrumb" style="font-size: 14px; margin-bottom: 16px; opacity: 0.7;">
          <a href="/" style="color: inherit; text-decoration: underline;">Home</a> / 
          <a href="/#stacked-services" style="color: inherit; text-decoration: underline;">Services</a> / 
          <span>${escapeHtml(service.eyebrow || service.title)}</span>
        </nav>
        <span class="ssg-eyebrow" style="color: #EF4136; font-size: 14px; letter-spacing: 2px; text-transform: uppercase; font-weight: bold;">${escapeHtml(service.eyebrow || "BRANDFORGE SERVICE")}</span>
        <h1 style="font-size: 36px; line-height: 1.2; margin: 12px 0 18px 0;">${escapeHtml(service.title)}</h1>
        <div class="ssg-subtitles" style="font-size: 17px; line-height: 1.6; opacity: 0.9;">
          ${subtitleHtml}
        </div>
        <div class="ssg-cta-wrap" style="margin-top: 24px; display: flex; gap: 16px; flex-wrap: wrap;">
          <a href="/contact" style="background: #EF4136; color: #fff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold;">Book Free Strategy Consultation</a>
          <a href="tel:+919384576852" style="border: 1px solid #EF4136; color: #EF4136; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold;">Call Consultation: +91 93845 76852</a>
        </div>
      </header>

      ${
        metricsHtml
          ? `
        <section class="ssg-section ssg-metrics-grid" style="margin: 36px 0;">
          <h2 style="font-size: 22px; margin-bottom: 16px;">Key Performance Benchmarks</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
            ${metricsHtml}
          </div>
        </section>
      `
          : ""
      }

      ${whyHtml}

      ${
        pillarsHtml
          ? `
        <section class="ssg-section ssg-pillars" style="margin: 36px 0;">
          <h2 style="font-size: 24px; margin-bottom: 20px;">Core Capabilities & Deliverables</h2>
          <div class="ssg-pillars-grid">
            ${pillarsHtml}
          </div>
        </section>
      `
          : ""
      }

      ${
        faqsHtml
          ? `
        <section class="ssg-section ssg-faqs" style="margin: 48px 0; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.15);">
          <h2 style="font-size: 26px; margin-bottom: 20px;">Frequently Asked Questions</h2>
          <div class="ssg-faqs-list">
            ${faqsHtml}
          </div>
        </section>
      `
          : ""
      }

      <section class="ssg-section ssg-contact-cta" style="margin: 48px 0; padding: 28px; background: rgba(239,65,54,0.06); border: 1px solid rgba(239,65,54,0.25); border-radius: 12px;">
        <h2 style="font-size: 24px; margin-bottom: 10px;">Ready to Scale With BrandForge?</h2>
        <p style="font-size: 16px; line-height: 1.6; opacity: 0.9;">Partner with BrandForge to build category authority, dominate search, and engineer sub-second web platforms.</p>
        <p style="margin-top: 14px;"><strong>Direct Line:</strong> <a href="tel:+919384576852" style="color: #EF4136; text-decoration: underline;">+91 93845 76852</a> | <strong>Email:</strong> <a href="mailto:brandforgedigitalmarketing@gmail.com" style="color: #EF4136; text-decoration: underline;">brandforgedigitalmarketing@gmail.com</a></p>
        <p><strong>Location:</strong> Coimbatore, Tamil Nadu, India</p>
      </section>
    </main>
  `;
}

function renderHomeBody() {
  return `
    <main class="ssg-content-container" style="max-width: 1000px; margin: 0 auto; padding: 40px 20px; font-family: system-ui, -apple-system, sans-serif;">
      <header class="ssg-header" style="margin-bottom: 40px;">
        <span style="color: #EF4136; font-size: 14px; letter-spacing: 2px; text-transform: uppercase; font-weight: bold;">BRANDFORGE AGENCY</span>
        <h1 style="font-size: 40px; line-height: 1.2; margin: 12px 0 18px 0;">High-Velocity Digital Growth & 3D Web Engineering Agency in Coimbatore</h1>
        <p style="font-size: 18px; line-height: 1.6; opacity: 0.9;">BrandForge is a premier digital engineering & performance agency specializing in Sub-Second 3D WebGL Web Development, AI Search Optimization (GEO), Paid Media Scaling, and Enterprise Brand Forging.</p>
        <div style="margin-top: 24px; display: flex; gap: 16px; flex-wrap: wrap;">
          <a href="/contact" style="background: #EF4136; color: #fff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold;">Start Your Project</a>
          <a href="/about" style="border: 1px solid #EF4136; color: #EF4136; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold;">Who We Are</a>
        </div>
      </header>

      <section style="margin: 40px 0;">
        <h2 style="font-size: 26px; margin-bottom: 20px;">Our 12 Growth Engineering Services</h2>
        <ul style="line-height: 2; font-size: 16px;">
          <li><a href="/services/seo-geo" style="color: inherit; text-decoration: underline; font-weight: bold;">SEO & GEO Supremacy</a> — Traditional Google SEO and AI Generative Engine Optimization.</li>
          <li><a href="/services/web-foundry" style="color: inherit; text-decoration: underline; font-weight: bold;">3D Web Development (Web Foundry)</a> — Sub-second 3D WebGL websites that convert.</li>
          <li><a href="/services/paid-media" style="color: inherit; text-decoration: underline; font-weight: bold;">Paid Media Scaling</a> — Multi-channel high-ROAS ad campaigns across Meta, Google & LinkedIn.</li>
          <li><a href="/services/viral-social" style="color: inherit; text-decoration: underline; font-weight: bold;">Viral Social Engine</a> — Video-first social growth and community building.</li>
          <li><a href="/services/influencer-network" style="color: inherit; text-decoration: underline; font-weight: bold;">Influencer & Creator Network</a> — Direct creator partnerships that convert.</li>
          <li><a href="/services/content-smithy" style="color: inherit; text-decoration: underline; font-weight: bold;">Content Marketing & Authority</a> — SEO blogs, authority thought leadership, and long-tail traffic.</li>
          <li><a href="/services/inbox-edge" style="color: inherit; text-decoration: underline; font-weight: bold;">Lifecycle Email Marketing</a> — Automated flows, retention loops, and Klaviyo/Omnisend scaling.</li>
          <li><a href="/services/brand-anvil" style="color: inherit; text-decoration: underline; font-weight: bold;">Brand Positioning Studio</a> — Uncopyable category positioning that lets you charge premium rates.</li>
          <li><a href="/services/visual-id" style="color: inherit; text-decoration: underline; font-weight: bold;">Brand Identity Design</a> — Visual identities, logos, 3D tokens, and complete design systems.</li>
          <li><a href="/services/commercial-video" style="color: inherit; text-decoration: underline; font-weight: bold;">Commercial Video Ads</a> — High-production video ads and 3D motion graphics showreels.</li>
          <li><a href="/services/cro-revenue" style="color: inherit; text-decoration: underline; font-weight: bold;">CRO Revenue Engine</a> — Conversion rate optimization and friction removal to double ROI.</li>
          <li><a href="/services/reputation-shield" style="color: inherit; text-decoration: underline; font-weight: bold;">Reputation Shield & PR</a> — 24/7 online reputation management and global PR publication.</li>
        </ul>
      </section>

      <section style="margin: 40px 0; padding: 24px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px;">
        <h2 style="font-size: 22px; margin-bottom: 12px;">Local Search Dominance in Coimbatore</h2>
        <p style="line-height: 1.6; opacity: 0.9;">We serve businesses across Coimbatore, Tirupur, Erode, Salem, and global category leaders. Explore our localized landing hubs:</p>
        <p style="margin-top: 10px; line-height: 1.8;">
          <a href="/seo-company-coimbatore" style="color: #EF4136; text-decoration: underline; margin-right: 14px;">Best SEO Company in Coimbatore</a>
          <a href="/ppc-company-coimbatore" style="color: #EF4136; text-decoration: underline; margin-right: 14px;">Best PPC Agency in Coimbatore</a>
          <a href="/website-development-company-coimbatore" style="color: #EF4136; text-decoration: underline; margin-right: 14px;">Website Development in Coimbatore</a>
          <a href="/social-media-marketing-company-coimbatore" style="color: #EF4136; text-decoration: underline; margin-right: 14px;">Social Media Agency Coimbatore</a>
          <a href="/brand-positioning-agency-coimbatore" style="color: #EF4136; text-decoration: underline; margin-right: 14px;">Brand Positioning Agency</a>
          <a href="/brand-identity-design-agency-coimbatore" style="color: #EF4136; text-decoration: underline;">Brand Identity Design Coimbatore</a>
        </p>
      </section>
    </main>
  `;
}

function renderAboutBody() {
  return `
    <main class="ssg-content-container" style="max-width: 1000px; margin: 0 auto; padding: 40px 20px; font-family: system-ui, -apple-system, sans-serif;">
      <header class="ssg-header" style="margin-bottom: 40px;">
        <span style="color: #EF4136; font-size: 14px; letter-spacing: 2px; text-transform: uppercase; font-weight: bold;">WHO WE ARE</span>
        <h1 style="font-size: 38px; line-height: 1.2; margin: 12px 0 18px 0;">Meet the Founders & Leadership of BrandForge Agency</h1>
        <p style="font-size: 18px; line-height: 1.6; opacity: 0.9;">BrandForge is engineered by a dedicated squad of media buyers, 3D WebGL developers, creative directors, and conversion scientists in Coimbatore.</p>
      </header>

      <section style="margin: 36px 0;">
        <h2 style="font-size: 24px; margin-bottom: 16px;">Leadership Team</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
          <div style="padding: 20px; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px;">
            <h3 style="font-size: 20px; margin-bottom: 6px;">Mr. BalaMurali</h3>
            <p style="color: #EF4136; font-weight: bold; margin-bottom: 12px;">Founder & Managing Director</p>
            <p style="line-height: 1.6; opacity: 0.85;">Leads growth architecture, technical WebGL engineering direction, and high-velocity digital transformation systems for category-leading brands.</p>
          </div>
          <div style="padding: 20px; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px;">
            <h3 style="font-size: 20px; margin-bottom: 6px;">Ms. Banumathy</h3>
            <p style="color: #EF4136; font-weight: bold; margin-bottom: 12px;">Founder & Chief Executive Officer</p>
            <p style="line-height: 1.6; opacity: 0.85;">Directs strategic brand positioning, creative production, client revenue scaling operations, and global partnership initiatives.</p>
          </div>
        </div>
      </section>

      <section style="margin: 36px 0;">
        <h2 style="font-size: 24px; margin-bottom: 12px;">Our Mission & Principles</h2>
        <p style="line-height: 1.7; opacity: 0.9;">We eliminate the fluff of traditional agencies. No bloated billable hours, no vanity impressions that don't pay bills. We operate as an integrated growth unit, aligning high-performance paid ads, generative search rankings (GEO), and world-class 3D web experiences to drive verified business revenue.</p>
      </section>
    </main>
  `;
}

function renderContactBody() {
  return `
    <main class="ssg-content-container" style="max-width: 1000px; margin: 0 auto; padding: 40px 20px; font-family: system-ui, -apple-system, sans-serif;">
      <header class="ssg-header" style="margin-bottom: 40px;">
        <span style="color: #EF4136; font-size: 14px; letter-spacing: 2px; text-transform: uppercase; font-weight: bold;">CONNECT WITH US</span>
        <h1 style="font-size: 38px; line-height: 1.2; margin: 12px 0 18px 0;">Contact BrandForge | Strategy Consultation & Growth Engineering</h1>
        <p style="font-size: 18px; line-height: 1.6; opacity: 0.9;">Direct line to our senior brand strategists, paid media buyers, and 3D WebGL engineers. We respond within 2 hours during business operations.</p>
      </header>

      <section style="margin: 36px 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px;">
        <div style="padding: 20px; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px;">
          <h3 style="font-size: 18px; color: #EF4136; margin-bottom: 8px;">Call Direct</h3>
          <p style="font-size: 18px; font-weight: bold;"><a href="tel:+919384576852" style="color: inherit; text-decoration: underline;">+91 93845 76852</a></p>
          <p style="font-size: 13px; opacity: 0.7; margin-top: 6px;">Monday to Saturday, 9am - 8pm IST</p>
        </div>
        <div style="padding: 20px; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px;">
          <h3 style="font-size: 18px; color: #EF4136; margin-bottom: 8px;">WhatsApp</h3>
          <p style="font-size: 18px; font-weight: bold;"><a href="https://wa.me/919384576852" target="_blank" rel="noreferrer" style="color: inherit; text-decoration: underline;">Chat on WhatsApp</a></p>
          <p style="font-size: 13px; opacity: 0.7; margin-top: 6px;">Instant response for strategy audits</p>
        </div>
        <div style="padding: 20px; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px;">
          <h3 style="font-size: 18px; color: #EF4136; margin-bottom: 8px;">Email Consultation</h3>
          <p style="font-size: 15px; font-weight: bold;"><a href="mailto:brandforgedigitalmarketing@gmail.com" style="color: inherit; text-decoration: underline;">brandforgedigitalmarketing@gmail.com</a></p>
          <p style="font-size: 13px; opacity: 0.7; margin-top: 6px;">Send RFPs, pitch decks & project briefs</p>
        </div>
        <div style="padding: 20px; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px;">
          <h3 style="font-size: 18px; color: #EF4136; margin-bottom: 8px;">Headquarters</h3>
          <p style="font-size: 16px; font-weight: bold;">Coimbatore, Tamil Nadu, India</p>
          <p style="font-size: 13px; opacity: 0.7; margin-top: 6px;">Serving clients across India & globally</p>
        </div>
      </section>
    </main>
  `;
}

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

  console.log("⚡ Generating static HTML files with pre-rendered content for search crawlers...");

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

    // Render semantic HTML body for Googlebot / search crawlers
    let bodyHtml = "";
    if (config.type === "service" && config.serviceKey) {
      bodyHtml = renderServiceBody(config.serviceKey, canonicalUrl);
    } else if (config.type === "home") {
      bodyHtml = renderHomeBody();
    } else if (config.type === "about") {
      bodyHtml = renderAboutBody();
    } else if (config.type === "contact") {
      bodyHtml = renderContactBody();
    }

    // Inject bodyHtml inside <div id="root"></div>
    // When React mounts client-side, createRoot will seamlessly take over.
    customizedHtml = customizedHtml.replace(
      /<div id="root"><\/div>/i,
      `<div id="root">${bodyHtml}</div>`
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
    console.log(`  ✓ Created: ${route} -> ${path.relative(DIST_DIR, targetFilePath)} (200 OK + Semantic Content)`);
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

  console.log("🎉 All static pages generated successfully with 200 OK headers & full Googlebot crawlable content!");
}

generateSSG();
