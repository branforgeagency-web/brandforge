"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import "@/src/config/amplify";
import { ModalProvider, useModal } from "@/src/context/ModalContext";
import SmoothScrollProvider from "@/src/components/SmoothScrollProvider";
import SiteNavbar from "@/src/components/SiteNavbar";
import FloatingContactButtons from "@/src/components/FloatingContactButtons";
import TransformationModal from "@/src/components/TransformationModal";
import GlowCursor from "@/src/components/GlowCursor";

function LayoutInner({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { isModalOpen, openModal, closeModal } = useModal();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    if ((window as any).__lenis) {
      (window as any).__lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return (
    <SmoothScrollProvider>
      <div className="app-main-wrap">
        {/* SITE-WIDE GLOW CURSOR (RED THEME) - Mounted on client to eliminate SSR hydration mismatch */}
        {mounted && (
          <GlowCursor
            color="#FF1801"
            secondaryColor="#FF4D3D"
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
        )}

        {/* SITE-WIDE NAVBAR */}
        <SiteNavbar
          path={pathname}
          navigate={(to: string) => router.push(to)}
          onOpenModal={openModal}
        />

        {/* MAIN PAGE CONTENT */}
        <main>{children}</main>

        {/* FLOATING WHATSAPP, CALL & ROCKET LAUNCHER BUTTONS (LOWER RIGHT) */}
        <FloatingContactButtons onOpenModal={openModal} />

        {/* HIGH-TECH TRANSFORMATION MODAL */}
        <TransformationModal
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </SmoothScrollProvider>
  );
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ModalProvider>
      <LayoutInner>{children}</LayoutInner>
    </ModalProvider>
  );
}
