import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.brandforgeagency.in";

  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/seo-company-coimbatore",
    "/ppc-company-coimbatore",
    "/website-development-company-coimbatore",
    "/web-development-company-coimbatore",
    "/social-media-marketing-company-coimbatore",
    "/social-media-agency-coimbatore",
    "/content-marketing-agency-coimbatore",
    "/content-marketing-company-coimbatore",
    "/email-marketing-company-coimbatore",
    "/email-marketing-agency-coimbatore",
    "/brand-positioning-agency-coimbatore",
    "/brand-positioning-company-coimbatore",
    "/brand-position-agency-coimbatore",
    "/brand-identity-design-agency-coimbatore",
    "/brand-identity-design-company-coimbatore",
    "/influencer-marketing-coimbatore",
    "/brand-reputation-management-coimbatore",
    "/video-production-editing-company-coimbatore",
  ];

  const services = [
    "seo-geo",
    "paid-media",
    "web-foundry",
    "viral-social",
    "influencer-network",
    "content-smithy",
    "inbox-edge",
    "brand-anvil",
    "visual-id",
    "commercial-video",
    "cro-revenue",
    "reputation-shield",
    "ai-automations",
    "b2b-pipeline",
  ];

  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1.0 : 0.8,
    })),
    ...services.map((slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
