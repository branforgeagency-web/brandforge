import type { Metadata } from "next";
import ServiceLandingPage from "@/src/views/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Website Development Company in Coimbatore | BrandForge",
  description: "Need a website development company in Coimbatore? BrandForge builds fast, SEO-ready websites that convert. Get a free website consultation today.",
  alternates: {
    canonical: "https://www.brandforgeagency.in/website-development-company-coimbatore",
  },
  openGraph: {
    title: "Website Development Company in Coimbatore | BrandForge",
    description: "Need a website development company in Coimbatore? BrandForge builds fast, SEO-ready websites that convert. Get a free website consultation today.",
    url: "https://www.brandforgeagency.in/website-development-company-coimbatore",
  },
};

export default function Page() {
  return <ServiceLandingPage slug="web-foundry" />;
}
