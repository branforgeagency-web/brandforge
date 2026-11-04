import type { Metadata } from "next";
import ServiceLandingPage from "@/src/views/ServiceLandingPage";

export const metadata: Metadata = {
  title: "PPC Company in Coimbatore | Google & Meta Ads | BrandForge",
  description: "Looking for a PPC company in Coimbatore? BrandForge runs Google, Meta, YouTube & lead-gen ads that convert. Get a free ad account audit this week.",
  alternates: {
    canonical: "https://www.brandforgeagency.in/ppc-company-coimbatore",
  },
  openGraph: {
    title: "PPC Company in Coimbatore | Google & Meta Ads | BrandForge",
    description: "Looking for a PPC company in Coimbatore? BrandForge runs Google, Meta, YouTube & lead-gen ads that convert. Get a free ad account audit this week.",
    url: "https://www.brandforgeagency.in/ppc-company-coimbatore",
  },
};

export default function Page() {
  return <ServiceLandingPage slug="paid-media" />;
}
