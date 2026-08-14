import React from 'react';
import BrandForgeFoundersSection from '../components/BrandForgeFoundersSection';
import BrandForgeAnimatedFooter from '../components/BrandForgeAnimatedFooter';

export default function AboutPage({ onOpenModal }) {
  return (
    <>
      {/* WHO WE ARE — FOUNDERS SECTION */}
      <div id="who-we-are">
        <BrandForgeFoundersSection />
      </div>

      {/* BRANDFORGE CREATIVE SCROLL-ANIMATED FOOTER */}
      <BrandForgeAnimatedFooter onOpenModal={onOpenModal} />
    </>
  );
}
