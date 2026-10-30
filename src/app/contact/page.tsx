import type { Metadata } from "next";
import ContactPage from "@/src/views/ContactPage";

export const metadata: Metadata = {
  title: "Contact BrandForge | Strategy Consultation & Growth Engineering",
  description:
    "Connect with senior brand strategists, media buyers, and 3D WebGL engineers at BrandForge. Direct strategy consultation line for category leaders worldwide.",
  alternates: {
    canonical: "https://www.brandforgeagency.in/contact",
  },
  openGraph: {
    title: "Contact BrandForge | Strategy Consultation & Growth Engineering",
    description:
      "Connect with senior brand strategists, media buyers, and 3D WebGL engineers at BrandForge. Direct strategy consultation line for category leaders worldwide.",
    url: "https://www.brandforgeagency.in/contact",
  },
};

export default function Page() {
  return <ContactPage />;
}
