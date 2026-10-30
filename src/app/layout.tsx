import type { Metadata, Viewport } from "next";
import "@/src/index.css";
import ClientLayout from "@/src/components/ClientLayout";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.brandforgeagency.in"),
  title: {
    default: "BrandForge | High-Velocity Growth & 3D Web Engineering Agency",
    template: "%s | BrandForge",
  },
  description:
    "BrandForge is a premier digital engineering & performance agency specializing in Sub-Second 3D WebGL Web Development, AI Search Optimization (GEO), Paid Media Scaling, and Enterprise Brand Forging.",
  keywords: [
    "website development",
    "3D web development",
    "generative engine optimization",
    "GEO",
    "SEO agency",
    "paid media scaling",
    "digital agency",
    "BrandForge",
  ],
  authors: [{ name: "BrandForge Agency", url: "https://www.brandforgeagency.in" }],
  creator: "BrandForge Agency",
  publisher: "BrandForge Agency",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.brandforgeagency.in/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://www.brandforgeagency.in/",
    siteName: "BrandForge Agency",
    title: "BrandForge | High-Velocity Growth & 3D Web Engineering Agency",
    description:
      "Sub-Second 3D WebGL Web Development, AI Search Dominance (GEO), and High-ROAS Media Scaling for Category Leaders.",
    images: [
      {
        url: "https://www.brandforgeagency.in/brandforge-logo.png",
        width: 1200,
        height: 630,
        alt: "BrandForge Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BrandForge | High-Velocity Growth & 3D Web Engineering Agency",
    description:
      "Sub-Second 3D WebGL Web Development, AI Search Dominance (GEO), and High-ROAS Media Scaling for Category Leaders.",
    images: ["https://www.brandforgeagency.in/brandforge-logo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="bg-black text-white">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
