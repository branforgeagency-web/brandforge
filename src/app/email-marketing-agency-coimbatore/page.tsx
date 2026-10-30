import type { Metadata } from "next";
import ServiceLandingPage from "@/src/views/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Email Marketing Company in Coimbatore | BrandForge",
  description: "Looking for an email marketing company in Coimbatore? BrandForge builds automated email flows that turn leads into repeat buyers. Book a free email audit.",
  alternates: {
    canonical: "https://www.brandforgeagency.in/email-marketing-company-coimbatore",
  },
  openGraph: {
    title: "Email Marketing Company in Coimbatore | BrandForge",
    description: "Looking for an email marketing company in Coimbatore? BrandForge builds automated email flows that turn leads into repeat buyers. Book a free email audit.",
    url: "https://www.brandforgeagency.in/email-marketing-company-coimbatore",
  },
};

export default function Page() {
  return <ServiceLandingPage slug="inbox-edge" />;
}
