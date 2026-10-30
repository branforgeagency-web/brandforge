import type { Metadata } from "next";
import ServiceLandingPage from "@/src/views/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Social Media Marketing Company in Coimbatore | BrandForge",
  description: "Looking for a social media marketing company in Coimbatore? BrandForge grows your brand with content, reels & ads that convert. Get a free strategy call.",
  alternates: {
    canonical: "https://www.brandforgeagency.in/social-media-marketing-company-coimbatore",
  },
  openGraph: {
    title: "Social Media Marketing Company in Coimbatore | BrandForge",
    description: "Looking for a social media marketing company in Coimbatore? BrandForge grows your brand with content, reels & ads that convert. Get a free strategy call.",
    url: "https://www.brandforgeagency.in/social-media-marketing-company-coimbatore",
  },
};

export default function Page() {
  return <ServiceLandingPage slug="viral-social" />;
}
