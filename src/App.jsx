import React, { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import SiteNavbar from './components/SiteNavbar';
import TransformationModal from './components/TransformationModal';
import FloatingContactButtons from './components/FloatingContactButtons';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import useRoute from './useRoute';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const { path, navigate } = useRoute();
  const openModal = () => setModalOpen(true);

  return (
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
  );
}
