import type { Metadata } from "next";
import ServiceLandingPage from "@/src/views/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Influencer Marketing Agency in Coimbatore | BrandForge",
  description: "Looking for influencer marketing in Coimbatore? BrandForge finds genuine local creators, runs your campaigns end to end, and tracks every sale. Book a free call.",
  alternates: {
    canonical: "https://www.brandforgeagency.in/influencer-marketing-coimbatore",
  },
  openGraph: {
    title: "Influencer Marketing Agency in Coimbatore | BrandForge",
    description: "Looking for influencer marketing in Coimbatore? BrandForge finds genuine local creators, runs your campaigns end to end, and tracks every sale. Book a free call.",
    url: "https://www.brandforgeagency.in/influencer-marketing-coimbatore",
  },
};

export default function Page() {
  return <ServiceLandingPage slug="influencer-network" />;
}
