"use client";

import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import LetsTalkForm from './LetsTalkForm';

export default function AuditModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      if (window.__lenis) window.__lenis.stop();
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      if (window.__lenis) window.__lenis.start();
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      if (window.__lenis) window.__lenis.start();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="audit-modal-backdrop active" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <style>{modalStyles}</style>
      <div className="audit-modal-box">
        <button className="audit-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>

        <LetsTalkForm
          title="LET'S TALK"
          subtitle="Fill out the form below to receive your custom performance breakdown & growth blueprint"
          showLogo={true}
          onSuccess={onClose}
        />
      </div>
    </div>
  );
}

const modalStyles = `
  .audit-modal-backdrop {
    position: fixed;
    inset: 0;
    z-index: 99999;
    background: rgba(0, 0, 0, 0.72);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    display: grid;
    place-items: center;
    overflow-y: auto;
    padding: clamp(16px, 3vw, 32px);
    animation: bfFadeIn 0.25s ease-out;
  }

  @keyframes bfFadeIn {
    from { opacity: 0; transform: scale(0.97); }
    to { opacity: 1; transform: scale(1); }
  }

  .audit-modal-box {
    position: relative;
    width: 100%;
    max-width: 480px;
    padding: clamp(24px, 5vw, 36px);
    background: rgba(12, 14, 20, 0.92);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(239, 65, 54, 0.35);
    box-shadow: 0 25px 70px rgba(0, 0, 0, 0.75), 0 0 40px rgba(239, 65, 54, 0.12);
    border-radius: 20px;
    color: #FFFFFF;
    font-family: "Outfit", "Plus Jakarta Sans", sans-serif;
  }

  .audit-close-btn {
    position: absolute;
    top: 18px;
    right: 18px;
    background: rgba(26, 30, 40, 0.8);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: #FFFFFF;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.2s ease, border-color 0.2s ease;
    z-index: 10;
  }

  .audit-close-btn:hover {
    background: #EF4136;
    border-color: #EF4136;
  }
`;
