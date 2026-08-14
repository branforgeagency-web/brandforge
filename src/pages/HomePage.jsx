import React from 'react';
import BrandForgeProcessBoard from '../components/BrandForgeProcessBoard';
import StackedServicesSection from '../components/StackedServicesSection';
import BrandForgeTestimonialsSection from '../components/BrandForgeTestimonialsSection';
import BrandForgeAnimatedFooter from '../components/BrandForgeAnimatedFooter';
import BrandForgeFAQ from '../components/BrandForgeFAQ';
import PlumeFieldSection from '../components/PlumeFieldSection';

export default function HomePage({ onOpenModal }) {
  return (
    <>
      {/* GPU FLUID PLUME FIELD HERO SECTION */}
      <div id="hero">
        <PlumeFieldSection />
      </div>

      {/* HOW WE WORK — PROCESS BOARD */}
      <div id="process-board">
        <BrandForgeProcessBoard />
      </div>

      {/* FULL-SCREEN SCROLL-DRIVEN STACKED EDITORIAL 12 SERVICES CARDS */}
      <div id="stacked-services">
        <StackedServicesSection onSelectService={onOpenModal} />
      </div>

      {/* BRANDFORGE TESTIMONIALS SECTION */}
      <div id="testimonials">
        <BrandForgeTestimonialsSection onOpenModal={onOpenModal} />
      </div>

      {/* BRANDFORGE FAQ SECTION */}
      <div id="faq">
        <BrandForgeFAQ />
      </div>

      {/* BRANDFORGE CREATIVE SCROLL-ANIMATED FOOTER */}
      <BrandForgeAnimatedFooter onOpenModal={onOpenModal} />
    </>
  );
}
