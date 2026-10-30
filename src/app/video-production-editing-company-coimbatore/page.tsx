import type { Metadata } from "next";
import ServiceLandingPage from "@/src/views/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Video Production & Editing Company in Coimbatore | BrandForge",
  description: "Looking for a video production and editing company in Coimbatore? BrandForge creates ad films, reels, corporate videos & motion graphics. Get a free quote.",
  alternates: {
    canonical: "https://www.brandforgeagency.in/video-production-editing-company-coimbatore",
  },
  openGraph: {
    title: "Video Production & Editing Company in Coimbatore | BrandForge",
    description: "Looking for a video production and editing company in Coimbatore? BrandForge creates ad films, reels, corporate videos & motion graphics. Get a free quote.",
    url: "https://www.brandforgeagency.in/video-production-editing-company-coimbatore",
  },
};

export default function Page() {
  return <ServiceLandingPage slug="commercial-video" />;
}
