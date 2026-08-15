import React from 'react';
import RiftStageHero from '../components/RiftStageHero';
import BrandForgeAboutUsSection from '../components/BrandForgeAboutUsSection';
import BrandForgeProcessBoard from '../components/BrandForgeProcessBoard';
import StackedServicesSection from '../components/StackedServicesSection';
import BrandForgeOrbitGallerySection from '../components/BrandForgeOrbitGallerySection';
import BrandForgeClientMarqueeStrip from '../components/BrandForgeClientMarqueeStrip';
import BrandForgeTestimonialsSection from '../components/BrandForgeTestimonialsSection';
import BrandForgeAnimatedFooter from '../components/BrandForgeAnimatedFooter';
import BrandForgeFAQ from '../components/BrandForgeFAQ';

export default function HomePage({ onOpenModal, navigate }) {
  return (
    <>
      {/* RIFT STAGE HERO SECTION WITH REVEALED GPU FLUID SIMULATION */}
      <div id="hero">
        <RiftStageHero onOpenModal={onOpenModal} />
      </div>

      {/* ABOUT US SECTION WITH DYNAMIC FLUID ORGANIC BLOB & PARALLAX SCROLL */}
      <div id="about-us">
        <BrandForgeAboutUsSection onOpenModal={onOpenModal} navigate={navigate} />
      </div>

      {/* HOW WE WORK — PROCESS BOARD */}
      <div id="process-board">
        <BrandForgeProcessBoard />
      </div>

      {/* FULL-SCREEN SCROLL-DRIVEN STACKED EDITORIAL 12 SERVICES CARDS */}
      <div id="stacked-services">
        <StackedServicesSection onSelectService={onOpenModal} />
      </div>

      {/* INTERACTIVE ORBIT SCRUB GALLERY — GLIMPSE OF CREATIVE EXCELLENCE */}
      <div id="gallery">
        <BrandForgeOrbitGallerySection onOpenModal={onOpenModal} />
      </div>

      {/* FULL-WIDTH WHITE MARQUEE STRIP WITH LOOPING CLIENT & MEDIA LOGOS */}
      <div id="client-marquee">
        <BrandForgeClientMarqueeStrip onOpenModal={onOpenModal} />
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
