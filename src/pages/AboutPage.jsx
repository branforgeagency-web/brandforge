import React from 'react';
import BrandForgeFoundersSection from '../components/BrandForgeFoundersSection';
import BrandForgeRatingsTrustStrip from '../components/BrandForgeRatingsTrustStrip';
import BrandForgeAnimatedFooter from '../components/BrandForgeAnimatedFooter';

export default function AboutPage({ onOpenModal }) {
  return (
    <>
      {/* WHO WE ARE — FOUNDERS SECTION */}
      <div id="who-we-are">
        <BrandForgeFoundersSection />
      </div>

      {/* RATINGS & TRUST PROOF STRIP (TRUST RADIUS, G2, SOFTWAREREVIEWS, GLASSDOOR) */}
      <BrandForgeRatingsTrustStrip />

      {/* BRANDFORGE CREATIVE SCROLL-ANIMATED FOOTER */}
      <BrandForgeAnimatedFooter onOpenModal={onOpenModal} />
    </>
  );
}


