import type { Metadata } from "next";
import HomePage from "@/src/views/HomePage";

export const metadata: Metadata = {
  title: "BrandForge | High-Velocity Growth & 3D Web Engineering Agency",
  description:
    "BrandForge is a premier digital engineering & performance agency specializing in Sub-Second 3D WebGL Web Development, AI Search Optimization (GEO), Paid Media Scaling, and Enterprise Brand Forging.",
  alternates: {
    canonical: "https://www.brandforgeagency.in/",
  },
};

export default function Page() {
  return <HomePage />;
}
