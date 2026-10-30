import type { Metadata } from "next";
import ServiceLandingPage from "@/src/views/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Brand Reputation Management in Coimbatore | BrandForge",
  description: "Protect and grow your brand's reputation in Coimbatore. BrandForge manages Google reviews, review replies, monitoring & search reputation. Book a free audit.",
  alternates: {
    canonical: "https://www.brandforgeagency.in/brand-reputation-management-coimbatore",
  },
  openGraph: {
    title: "Brand Reputation Management in Coimbatore | BrandForge",
    description: "Protect and grow your brand's reputation in Coimbatore. BrandForge manages Google reviews, review replies, monitoring & search reputation. Book a free audit.",
    url: "https://www.brandforgeagency.in/brand-reputation-management-coimbatore",
  },
};

export default function Page() {
  return <ServiceLandingPage slug="reputation-shield" />;
}
