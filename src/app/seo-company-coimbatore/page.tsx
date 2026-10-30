import type { Metadata } from "next";
import ServiceLandingPage from "@/src/views/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Best SEO Company in Coimbatore | SEO & GEO Services – Brand Forge",
  description: "Brand Forge is a trusted SEO company in Coimbatore offering SEO, GEO (Generative Engine Optimization), and local search services to rank higher on Google and AI search engines.",
  alternates: {
    canonical: "https://www.brandforgeagency.in/seo-company-coimbatore",
  },
  openGraph: {
    title: "Best SEO Company in Coimbatore | SEO & GEO Services – Brand Forge",
    description: "Brand Forge is a trusted SEO company in Coimbatore offering SEO, GEO (Generative Engine Optimization), and local search services to rank higher on Google and AI search engines.",
    url: "https://www.brandforgeagency.in/seo-company-coimbatore",
  },
};

export default function Page() {
  return <ServiceLandingPage slug="seo-geo" />;
}
