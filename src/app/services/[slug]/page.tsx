import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceLandingPage from "@/src/views/ServiceLandingPage";
import { servicesData } from "@/src/data/servicesData";
import { ROUTE_SEO_MAP } from "@/src/utils/seoMetadata";

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return {};

  const seoKey = `/services/${slug}`;
  const seo = ROUTE_SEO_MAP[seoKey] || {
    title: service.metaTitle || `${service.title} | BrandForge`,
    description: service.metaDescription || (Array.isArray(service.subtitle) ? service.subtitle[0] : service.subtitle),
    canonicalUrl: `https://www.brandforgeagency.in/services/${slug}`,
  };

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: seo.canonicalUrl || `https://www.brandforgeagency.in/services/${slug}`,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.canonicalUrl || `https://www.brandforgeagency.in/services/${slug}`,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  if (!servicesData[slug]) {
    notFound();
  }
  return <ServiceLandingPage slug={slug} />;
}
