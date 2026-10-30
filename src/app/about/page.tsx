import type { Metadata } from "next";
import AboutPage from "@/src/views/AboutPage";

export const metadata: Metadata = {
  title: "Who We Are | Founders & Leadership – BrandForge Agency",
  description:
    "Meet Mr. BalaMurali (Founder & MD) and Ms. Banumathy (Founder & CEO) — leading BrandForge's high-velocity digital marketing and 3D web engineering squad.",
  alternates: {
    canonical: "https://www.brandforgeagency.in/about",
  },
  openGraph: {
    title: "Who We Are | Founders & Leadership – BrandForge Agency",
    description:
      "Meet Mr. BalaMurali (Founder & MD) and Ms. Banumathy (Founder & CEO) — leading BrandForge's high-velocity digital marketing and 3D web engineering squad.",
    url: "https://www.brandforgeagency.in/about",
  },
};

export default function Page() {
  return <AboutPage />;
}
