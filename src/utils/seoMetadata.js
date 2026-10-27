import { servicesData } from "../data/servicesData.js";

export const BASE_URL = "https://www.brandforgeagency.in";

export const ROUTE_SEO_MAP = {
  "/": {
    title: "BrandForge | High-Velocity Growth & 3D Web Engineering Agency",
    description: "BrandForge is a premier digital engineering & performance agency specializing in Sub-Second 3D WebGL Web Development, AI Search Optimization (GEO), Paid Media Scaling, and Enterprise Brand Forging.",
    canonicalUrl: `${BASE_URL}/`,
  },
  "/about": {
    title: "Who We Are | Founders & Leadership – BrandForge Agency",
    description: "Meet Mr. BalaMurali (Founder & MD) and Ms. Banumathy (Founder & CEO) — leading BrandForge's high-velocity digital marketing and 3D web engineering squad.",
    canonicalUrl: `${BASE_URL}/about`,
  },
  "/contact": {
    title: "Contact BrandForge | Strategy Consultation & Growth Engineering",
    description: "Connect with senior brand strategists, media buyers, and 3D WebGL engineers at BrandForge. Direct strategy consultation line for category leaders worldwide.",
    canonicalUrl: `${BASE_URL}/contact`,
  },
  "/seo-company-coimbatore": {
    title: "Best SEO Company in Coimbatore | SEO & GEO Services – Brand Forge",
    description: "Brand Forge is a trusted SEO company in Coimbatore offering SEO, GEO (Generative Engine Optimization), and local search services to rank higher on Google and AI search engines.",
    canonicalUrl: `${BASE_URL}/seo-company-coimbatore`,
  },
  "/ppc-company-coimbatore": {
    title: "Best PPC Agency in Coimbatore | Paid Ads & ROAS Scaling – Brand Forge",
    description: "Brand Forge is a top performance marketing & PPC company in Coimbatore managing Google Ads, Meta Ads, and omnichannel paid media for maximum ROAS.",
    canonicalUrl: `${BASE_URL}/ppc-company-coimbatore`,
  },
  "/website-development-company-coimbatore": {
    title: "Website Development Company in Coimbatore | BrandForge",
    description: "Need a website development company in Coimbatore? BrandForge builds fast, SEO-ready websites that convert. Get a free website consultation today.",
    canonicalUrl: `${BASE_URL}/website-development-company-coimbatore`,
  },
  "/web-development-company-coimbatore": {
    title: "Website Development Company in Coimbatore | BrandForge",
    description: "Need a website development company in Coimbatore? BrandForge builds fast, SEO-ready websites that convert. Get a free website consultation today.",
    canonicalUrl: `${BASE_URL}/website-development-company-coimbatore`,
  },
  "/social-media-marketing-company-coimbatore": {
    title: "Social Media Marketing Company in Coimbatore | BrandForge",
    description: "Looking for a social media marketing company in Coimbatore? BrandForge grows your brand with content, reels & ads that convert. Get a free strategy call.",
    canonicalUrl: `${BASE_URL}/social-media-marketing-company-coimbatore`,
  },
  "/social-media-agency-coimbatore": {
    title: "Social Media Marketing Company in Coimbatore | BrandForge",
    description: "Looking for a social media marketing company in Coimbatore? BrandForge grows your brand with content, reels & ads that convert. Get a free strategy call.",
    canonicalUrl: `${BASE_URL}/social-media-marketing-company-coimbatore`,
  },
  "/content-marketing-agency-coimbatore": {
    title: "Content Marketing Agency in Coimbatore | BrandForge",
    description: "Looking for a content marketing agency in Coimbatore? BrandForge creates SEO blogs, videos & content that bring leads for months. Book a free content audit.",
    canonicalUrl: `${BASE_URL}/content-marketing-agency-coimbatore`,
  },
  "/content-marketing-company-coimbatore": {
    title: "Content Marketing Agency in Coimbatore | BrandForge",
    description: "Looking for a content marketing agency in Coimbatore? BrandForge creates SEO blogs, videos & content that bring leads for months. Book a free content audit.",
    canonicalUrl: `${BASE_URL}/content-marketing-agency-coimbatore`,
  },
  "/email-marketing-company-coimbatore": {
    title: "Email Marketing Company in Coimbatore | BrandForge",
    description: "Looking for an email marketing company in Coimbatore? BrandForge builds automated email flows that turn leads into repeat buyers. Book a free email audit.",
    canonicalUrl: `${BASE_URL}/email-marketing-company-coimbatore`,
  },
  "/email-marketing-agency-coimbatore": {
    title: "Email Marketing Company in Coimbatore | BrandForge",
    description: "Looking for an email marketing company in Coimbatore? BrandForge builds automated email flows that turn leads into repeat buyers. Book a free email audit.",
    canonicalUrl: `${BASE_URL}/email-marketing-company-coimbatore`,
  },
  "/brand-positioning-agency-coimbatore": {
    title: "Brand Positioning Agency in Coimbatore | BrandForge",
    description: "Looking for a brand positioning agency in Coimbatore? Brand Anvil by BrandForge helps you stand out and charge more. Book a free brand positioning session.",
    canonicalUrl: `${BASE_URL}/brand-positioning-agency-coimbatore`,
  },
  "/brand-position-agency-coimbatore": {
    title: "Brand Positioning Agency in Coimbatore | BrandForge",
    description: "Looking for a brand positioning agency in Coimbatore? Brand Anvil by BrandForge helps you stand out and charge more. Book a free brand positioning session.",
    canonicalUrl: `${BASE_URL}/brand-positioning-agency-coimbatore`,
  },
  "/brand-positioning-company-coimbatore": {
    title: "Brand Positioning Agency in Coimbatore | BrandForge",
    description: "Looking for a brand positioning agency in Coimbatore? Brand Anvil by BrandForge helps you stand out and charge more. Book a free brand positioning session.",
    canonicalUrl: `${BASE_URL}/brand-positioning-agency-coimbatore`,
  },
  "/brand-identity-design-agency-coimbatore": {
    title: "Brand Identity Design Agency in Coimbatore | BrandForge",
    description: "Need a brand identity design agency? Identity Forge by BrandForge crafts logos, colours & complete brand kits that make you memorable. Book a free brand call.",
    canonicalUrl: `${BASE_URL}/brand-identity-design-agency-coimbatore`,
  },
  "/brand-identity-design-company-coimbatore": {
    title: "Brand Identity Design Agency in Coimbatore | BrandForge",
    description: "Need a brand identity design agency? Identity Forge by BrandForge crafts logos, colours & complete brand kits that make you memorable. Book a free brand call.",
    canonicalUrl: `${BASE_URL}/brand-identity-design-agency-coimbatore`,
  },
  "/influencer-marketing-coimbatore": {
    title: "Influencer Marketing Agency in Coimbatore | BrandForge",
    description: "Looking for influencer marketing in Coimbatore? BrandForge finds genuine local creators, runs your campaigns end to end, and tracks every sale. Book a free call.",
    canonicalUrl: `${BASE_URL}/influencer-marketing-coimbatore`,
  },
  "/brand-reputation-management-coimbatore": {
    title: "Brand Reputation Management in Coimbatore | BrandForge",
    description: "Protect and grow your brand's reputation in Coimbatore. BrandForge manages Google reviews, review replies, monitoring & search reputation. Book a free audit.",
    canonicalUrl: `${BASE_URL}/brand-reputation-management-coimbatore`,
  },
  "/video-production-editing-company-coimbatore": {
    title: "Video Production & Editing Company in Coimbatore | BrandForge",
    description: "Looking for a video production and editing company in Coimbatore? BrandForge creates ad films, reels, corporate videos & motion graphics. Get a free quote.",
    canonicalUrl: `${BASE_URL}/video-production-editing-company-coimbatore`,
  },
};

/**
 * Resolves SEO metadata and Canonical URL for any given path or service data object.
 */
export function getRouteSeo(path, data = null) {
  const cleanPath = (path || "/").replace(/\/$/, "") || "/";

  // 1. Direct match in route map
  if (ROUTE_SEO_MAP[cleanPath]) {
    return ROUTE_SEO_MAP[cleanPath];
  }

  // 2. /services/<slug> routes
  if (cleanPath.startsWith("/services/")) {
    const slugKey = cleanPath.replace("/services/", "");
    const service = data || servicesData[slugKey];
    if (service) {
      const canonicalPath = service.urlSlug || cleanPath;
      return {
        title: service.metaTitle || `${service.title} | BrandForge`,
        description: service.metaDescription || (Array.isArray(service.subtitle) ? service.subtitle[0] : service.subtitle),
        canonicalUrl: `${BASE_URL}${canonicalPath}`,
      };
    }
  }

  // 3. Fallback based on provided service data
  if (data) {
    const canonicalPath = data.urlSlug || cleanPath;
    return {
      title: data.metaTitle || `${data.title} | BrandForge`,
      description: data.metaDescription || (Array.isArray(data.subtitle) ? data.subtitle[0] : data.subtitle),
      canonicalUrl: `${BASE_URL}${canonicalPath}`,
    };
  }

  // 4. Default fallback
  return {
    title: "BrandForge | High-Velocity Growth & 3D Web Engineering Agency",
    description: "BrandForge is a premier digital engineering & performance agency specializing in Sub-Second 3D WebGL Web Development, AI Search Optimization (GEO), Paid Media Scaling, and Enterprise Brand Forging.",
    canonicalUrl: `${BASE_URL}${cleanPath === "/" ? "/" : cleanPath}`,
  };
}

function updateMetaTag(selectorAttr, selectorVal, content) {
  if (typeof document === "undefined" || !content) return;
  let tag = document.querySelector(`meta[${selectorAttr}="${selectorVal}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(selectorAttr, selectorVal);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

/**
 * Synchronizes the client browser DOM document.head with current route SEO metadata.
 * Updates <title>, <meta description>, <link rel="canonical">, Open Graph and Twitter tags.
 */
export function applySeoMetadata({ title, description, canonicalUrl }) {
  if (typeof document === "undefined") return;

  // Title
  if (title) {
    document.title = title;
    updateMetaTag("name", "title", title);
    updateMetaTag("property", "og:title", title);
    updateMetaTag("property", "twitter:title", title);
  }

  // Description
  if (description) {
    updateMetaTag("name", "description", description);
    updateMetaTag("property", "og:description", description);
    updateMetaTag("property", "twitter:description", description);
  }

  // Canonical & URLs
  if (canonicalUrl) {
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl);

    updateMetaTag("property", "og:url", canonicalUrl);
    updateMetaTag("property", "twitter:url", canonicalUrl);
  }
}
