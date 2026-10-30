import type { Metadata } from "next";
import ServiceLandingPage from "@/src/views/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Brand Identity Design Agency in Coimbatore | BrandForge",
  description: "Need a brand identity design agency? Identity Forge by BrandForge crafts logos, colours & complete brand kits that make you memorable. Book a free brand call.",
  alternates: {
    canonical: "https://www.brandforgeagency.in/brand-identity-design-agency-coimbatore",
  },
  openGraph: {
    title: "Brand Identity Design Agency in Coimbatore | BrandForge",
    description: "Need a brand identity design agency? Identity Forge by BrandForge crafts logos, colours & complete brand kits that make you memorable. Book a free brand call.",
    url: "https://www.brandforgeagency.in/brand-identity-design-agency-coimbatore",
  },
};

export default function Page() {
  return <ServiceLandingPage slug="visual-id" />;
}
