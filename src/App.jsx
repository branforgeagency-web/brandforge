import React, { useState } from 'react';
import CustomCursor from './components/CustomCursor';
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
        {/* CUSTOM MAGNETIC CURSOR */}
        <CustomCursor />

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
