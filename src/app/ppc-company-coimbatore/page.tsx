import type { Metadata } from "next";
import ServiceLandingPage from "@/src/views/ServiceLandingPage";

export const metadata: Metadata = {
  title: "Best PPC Agency in Coimbatore | Paid Ads & ROAS Scaling – Brand Forge",
  description: "Brand Forge is a top performance marketing & PPC company in Coimbatore managing Google Ads, Meta Ads, and omnichannel paid media for maximum ROAS.",
  alternates: {
    canonical: "https://www.brandforgeagency.in/ppc-company-coimbatore",
  },
  openGraph: {
    title: "Best PPC Agency in Coimbatore | Paid Ads & ROAS Scaling – Brand Forge",
    description: "Brand Forge is a top performance marketing & PPC company in Coimbatore managing Google Ads, Meta Ads, and omnichannel paid media for maximum ROAS.",
    url: "https://www.brandforgeagency.in/ppc-company-coimbatore",
  },
};

export default function Page() {
  return <ServiceLandingPage slug="paid-media" />;
}
