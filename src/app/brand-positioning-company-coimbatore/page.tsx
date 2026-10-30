import type { Metadata } from "next";
import ServiceLandingPage from "@/src/views/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Brand Positioning Agency in Coimbatore | BrandForge",
  description: "Looking for a brand positioning agency in Coimbatore? Brand Anvil by BrandForge helps you stand out and charge more. Book a free brand positioning session.",
  alternates: {
    canonical: "https://www.brandforgeagency.in/brand-positioning-agency-coimbatore",
  },
  openGraph: {
    title: "Brand Positioning Agency in Coimbatore | BrandForge",
    description: "Looking for a brand positioning agency in Coimbatore? Brand Anvil by BrandForge helps you stand out and charge more. Book a free brand positioning session.",
    url: "https://www.brandforgeagency.in/brand-positioning-agency-coimbatore",
  },
};

export default function Page() {
  return <ServiceLandingPage slug="brand-anvil" />;
}
