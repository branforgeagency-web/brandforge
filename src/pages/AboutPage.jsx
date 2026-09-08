import React from 'react';
import AboutHeroSection from '../components/AboutHeroSection';
import BrandForgeFoundersSection from '../components/BrandForgeFoundersSection';
import BrandForgeRatingsTrustStrip from '../components/BrandForgeRatingsTrustStrip';
import BrandForgeTestimonialsSection from '../components/BrandForgeTestimonialsSection';
import BrandForgeFAQ from '../components/BrandForgeFAQ';
import BrandForgeAnimatedFooter from '../components/BrandForgeAnimatedFooter';

export default function AboutPage({ onOpenModal }) {
  return (
    <>
      {/* FIRST SECTION: EDITORIAL DIGITAL MARKETING AGENCY HERO BANNER */}
      <AboutHeroSection onOpenModal={onOpenModal} />

      {/* WHO WE ARE — FOUNDERS SECTION */}
      <div id="who-we-are">
        <BrandForgeFoundersSection />
      </div>

      {/* RATINGS & TRUST PROOF STRIP (TRUST RADIUS, G2, SOFTWAREREVIEWS, GLASSDOOR) */}
      <BrandForgeRatingsTrustStrip />

      {/* BRANDFORGE TESTIMONIALS SECTION */}
      <div id="testimonials">
        <BrandForgeTestimonialsSection onOpenModal={onOpenModal} />
      </div>

      {/* BRANDFORGE FAQ SECTION FROM HOME PAGE (BLACK THEME) */}
      <div id="faq">
        <BrandForgeFAQ theme="black" />
      </div>

      {/* BRANDFORGE CREATIVE SCROLL-ANIMATED FOOTER */}
      <BrandForgeAnimatedFooter onOpenModal={onOpenModal} />
    </>
  );
}


