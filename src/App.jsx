import React, { useState } from 'react';
import GlowCursor from './components/GlowCursor';
import SiteNavbar from './components/SiteNavbar';
import TransformationModal from './components/TransformationModal';
import FloatingContactButtons from './components/FloatingContactButtons';
import SmoothScrollProvider from './components/SmoothScrollProvider';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServiceLandingPage from './pages/ServiceLandingPage';
import useRoute from './useRoute';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const { path, navigate } = useRoute();
  const openModal = () => setModalOpen(true);

  const serviceSlug = path.startsWith('/services/') ? path.replace('/services/', '') : null;

  return (
    <SmoothScrollProvider>
      <div className="app-main-wrap">
        {/* SITE-WIDE GLOW CURSOR (RED THEME) */}
        <GlowCursor
          color="#EF4136"
          secondaryColor="#FF6B5E"
          trailLength={15}
          trailWidth={2}
          trailTaper={1}
          followSpeed={0.06}
          glowIntensity={0.8}
          glowSpread={1.8}
          hotspot={1}
          brightness={1.65}
          opacity={0.9}
          pulseSpeed={1.1}
          noiseStrength={0.17}
          idleFade
          idleTimeout={1600}
          fadeDuration={2350}
          blendMode="screen"
        />

        {/* SITE-WIDE NAVBAR */}
        <SiteNavbar path={path} navigate={navigate} onOpenModal={openModal} />

        {/* ROUTES */}
        {path === '/about' ? (
          <AboutPage onOpenModal={openModal} />
        ) : path === '/contact' ? (
          <ContactPage onOpenModal={openModal} />
        ) : path === '/seo-company-coimbatore' ? (
          <ServiceLandingPage slug="seo-geo" onOpenModal={openModal} navigate={navigate} />
        ) : path === '/ppc-company-coimbatore' ? (
          <ServiceLandingPage slug="paid-media" onOpenModal={openModal} navigate={navigate} />
        ) : path === '/website-development-company-coimbatore' || path === '/web-development-company-coimbatore' ? (
          <ServiceLandingPage slug="web-foundry" onOpenModal={openModal} navigate={navigate} />
        ) : path === '/social-media-marketing-company-coimbatore' || path === '/social-media-agency-coimbatore' ? (
          <ServiceLandingPage slug="viral-social" onOpenModal={openModal} navigate={navigate} />
        ) : path === '/content-marketing-agency-coimbatore' || path === '/content-marketing-company-coimbatore' ? (
          <ServiceLandingPage slug="content-smithy" onOpenModal={openModal} navigate={navigate} />
        ) : path === '/email-marketing-company-coimbatore' || path === '/email-marketing-agency-coimbatore' ? (
          <ServiceLandingPage slug="inbox-edge" onOpenModal={openModal} navigate={navigate} />
        ) : path === '/brand-positioning-agency-coimbatore' || path === '/brand-positioning-company-coimbatore' ? (
          <ServiceLandingPage slug="brand-anvil" onOpenModal={openModal} navigate={navigate} />
        ) : path === '/brand-identity-design-agency-coimbatore' || path === '/brand-identity-design-company-coimbatore' ? (
          <ServiceLandingPage slug="visual-id" onOpenModal={openModal} navigate={navigate} />
        ) : path === '/influencer-marketing-coimbatore' ? (
          <ServiceLandingPage slug="influencer-network" onOpenModal={openModal} navigate={navigate} />
        ) : path === '/brand-reputation-management-coimbatore' ? (
          <ServiceLandingPage slug="reputation-shield" onOpenModal={openModal} navigate={navigate} />
        ) : path === '/video-production-editing-company-coimbatore' ? (
          <ServiceLandingPage slug="commercial-video" onOpenModal={openModal} navigate={navigate} />
        ) : serviceSlug ? (
          <ServiceLandingPage slug={serviceSlug} onOpenModal={openModal} navigate={navigate} />
        ) : (
          <HomePage onOpenModal={openModal} navigate={navigate} />
        )}

        {/* FLOATING WHATSAPP, CALL & ROCKET LAUNCHER BUTTONS (LOWER RIGHT) */}
        <FloatingContactButtons onOpenModal={openModal} />

        {/* HIGH-TECH TRANSFORMATION MODAL */}
        <TransformationModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      </div>
    </SmoothScrollProvider>
  );
}
