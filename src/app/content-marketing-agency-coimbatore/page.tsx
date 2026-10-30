import type { Metadata } from "next";
import ServiceLandingPage from "@/src/views/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Content Marketing Agency in Coimbatore | BrandForge",
  description: "Looking for a content marketing agency in Coimbatore? BrandForge creates SEO blogs, videos & content that bring leads for months. Book a free content audit.",
  alternates: {
    canonical: "https://www.brandforgeagency.in/content-marketing-agency-coimbatore",
  },
  openGraph: {
    title: "Content Marketing Agency in Coimbatore | BrandForge",
    description: "Looking for a content marketing agency in Coimbatore? BrandForge creates SEO blogs, videos & content that bring leads for months. Book a free content audit.",
    url: "https://www.brandforgeagency.in/content-marketing-agency-coimbatore",
  },
};

export default function Page() {
  return <ServiceLandingPage slug="content-smithy" />;
}
