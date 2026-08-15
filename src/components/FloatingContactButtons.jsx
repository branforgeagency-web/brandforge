"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";

export default function FloatingContactButtons({
  phoneNumber = "+919876543210",
  whatsappNumber = "919876543210",
  whatsappMessage = "Hi BrandForge, I would like to enquire about your branding & marketing services.",
  onOpenModal,
}) {
  const [isLaunching, setIsLaunching] = useState(false);

  const handleCall = () => {
    window.open(`tel:${phoneNumber}`, "_self");
  };

  const handleWhatsApp = () => {
    const encodedMsg = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMsg}`, "_blank");
  };

  const handleRocketLaunch = () => {
    if (isLaunching) return;
    setIsLaunching(true);

    if (onOpenModal) {
      setTimeout(() => onOpenModal(), 800);
    }

    setTimeout(() => {
      setIsLaunching(false);
    }, 3800);
  };

  return (
    <div className="bf-floating-contact-stack" aria-label="Quick contact buttons">
      <style>{styles}</style>

      {/* FLYING ROCKET BUTTON (TOP OF STACK) */}
      <div className="bf-float-btn-group">
        <span className="bf-float-tooltip">Launch and Forge 🚀</span>
        <motion.div
          className="bf-rocket-wrapper"
          animate={
            isLaunching
              ? {
                  scale: [1, 1.35, 1.35, 1],
                  y: [0, 0, -1400, -1400],
                  rotate: [0, -2, 2, 0],
                }
              : {
                  y: [-7, 7],
                  rotate: [-1.8, 1.8],
                }
          }
          transition={
            isLaunching
              ? {
                  duration: 2.8,
                  times: [0, 0.2, 0.85, 1],
                  ease: [0.25, 0.1, 0.25, 1],
                }
              : {
                  duration: 2.6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }
          }
        >
          <motion.button
            type="button"
            className={`bf-float-btn btn-rocket ${isLaunching ? "is-ignited" : ""}`}
            onClick={handleRocketLaunch}
            aria-label="Launch rocket and open contact modal"
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 350, damping: 22 }}
          >
            <img src="/rocket.png" alt="Rocket" className="bf-rocket-img" />

            {/* IDLE SMALL THRUSTER FLAME EFFECT */}
            {!isLaunching && (
              <div className="bf-idle-rocket-flame" aria-hidden="true">
                <span className="idle-flame-core" />
                <span className="idle-flame-glow" />
              </div>
            )}
          </motion.button>

          {/* LAUNCH THRUSTER FLAME & SMOKE PLUME EFFECT */}
          <AnimatePresence>
            {isLaunching && (
              <motion.div
                className="bf-rocket-flame-plume"
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1.8 }}
                exit={{ opacity: 0, scaleY: 0 }}
                transition={{ duration: 0.3 }}
              >
                <span className="flame-core" />
                <span className="flame-outer" />
                <span className="smoke-particles" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* WHATSAPP FLOATING BUTTON */}
      <div className="bf-float-btn-group">
        <span className="bf-float-tooltip">Chat on WhatsApp</span>
        <motion.button
          type="button"
          className="bf-float-btn btn-whatsapp"
          onClick={handleWhatsApp}
          aria-label="Chat on WhatsApp"
          whileHover={{ scale: 1.14, rotate: 4 }}
          whileTap={{ scale: 0.92 }}
        >
          <svg
            className="bf-wa-svg"
            viewBox="0 0 24 24"
            width="26"
            height="26"
            fill="currentColor"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </motion.button>
      </div>

      {/* CALL FLOATING BUTTON */}
      <div className="bf-float-btn-group">
        <span className="bf-float-tooltip">Call BrandForge</span>
        <motion.button
          type="button"
          className="bf-float-btn btn-call"
          onClick={handleCall}
          aria-label="Call BrandForge"
          whileHover={{ scale: 1.14, rotate: -4 }}
          whileTap={{ scale: 0.92 }}
        >
          <Phone size={22} className="bf-call-icon" />
        </motion.button>
      </div>
    </div>
  );
}

const styles = `
  .bf-floating-contact-stack {
    position: fixed;
    bottom: clamp(24px, 4vw, 36px);
    right: clamp(20px, 3.5vw, 32px);
    z-index: 99999;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 14px;
    pointer-events: auto;
  }

  .bf-float-btn-group {
    position: relative;
    display: flex;
    align-items: center;
  }

  .bf-float-tooltip {
    position: absolute;
    right: 100%;
    margin-right: 12px;
    padding: 6px 14px;
    border-radius: 8px;
    background: #0A0A0C;
    border: 1px solid #EF4136;
    color: #FFFFFF;
    font-family: "Outfit", sans-serif;
    font-size: 0.78rem;
    font-weight: 700;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transform: translateX(10px);
    transition: all 0.25s ease;
  }

  .bf-float-btn-group:hover .bf-float-tooltip {
    opacity: 1;
    transform: translateX(0);
  }

  .bf-float-btn {
    position: relative;
    width: clamp(50px, 4.2vw, 56px);
    height: clamp(50px, 4.2vw, 56px);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 2px solid #EF4136;
    background: #0A0A0C;
    color: #FFFFFF;
    transition: border-color 0.25s ease, background 0.25s ease;
    outline: none;
    overflow: hidden;
  }

  .bf-rocket-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    will-change: transform;
  }

  .bf-float-btn.btn-rocket {
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    outline: none !important;
    width: clamp(80px, 6.8vw, 96px);
    height: clamp(80px, 6.8vw, 96px);
    padding: 0;
    overflow: visible;
    position: relative;
    z-index: 2;
    will-change: transform;
  }

  .bf-float-btn.btn-rocket:hover {
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
  }

  .bf-rocket-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transform: rotate(-90deg);
  }

  .bf-float-btn.btn-rocket:hover .bf-rocket-img {
    transform: rotate(-90deg);
  }

  .bf-rocket-flame-plume {
    position: absolute;
    top: calc(100% - 30px);
    left: calc(50% - 10px);
    transform: translateX(-50%);
    width: 24px;
    height: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    pointer-events: none;
    transform-origin: top center;
    z-index: 1;
  }

  .flame-core {
    width: 12px;
    height: 32px;
    background: linear-gradient(180deg, #FFFFFF 0%, #FFB800 40%, #EF4136 100%);
    border-radius: 999px;
    animation: flameFlicker 0.15s ease-in-out infinite alternate;
  }

  .flame-outer {
    position: absolute;
    top: 4px;
    width: 20px;
    height: 42px;
    background: linear-gradient(180deg, rgba(239, 65, 54, 0.9) 0%, rgba(255, 77, 77, 0.4) 70%, transparent 100%);
    border-radius: 999px;
    animation: flamePulse 0.2s ease-in-out infinite alternate;
  }

  .bf-idle-rocket-flame {
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 16px;
    height: 22px;
    display: flex;
    flex-direction: column;
    align-items: center;
    pointer-events: none;
    z-index: 1;
  }

  .idle-flame-core {
    width: 9px;
    height: 18px;
    background: linear-gradient(180deg, #FFFFFF 0%, #FFB800 45%, #EF4136 100%);
    border-radius: 999px;
    box-shadow: 0 0 10px rgba(239, 65, 54, 0.9), 0 0 6px rgba(255, 184, 0, 0.8);
    animation: idleFlameFlicker 0.15s ease-in-out infinite alternate;
  }

  .idle-flame-glow {
    position: absolute;
    top: 2px;
    width: 16px;
    height: 24px;
    background: radial-gradient(circle, rgba(239, 65, 54, 0.7) 0%, rgba(255, 184, 0, 0.35) 60%, transparent 100%);
    border-radius: 50%;
    animation: idleFlameGlowPulse 0.25s ease-in-out infinite alternate;
  }

  @keyframes idleFlameFlicker {
    0% { transform: scaleX(0.85) scaleY(0.9); opacity: 0.85; }
    100% { transform: scaleX(1.2) scaleY(1.2); opacity: 1; }
  }

  @keyframes idleFlameGlowPulse {
    0% { transform: scale(0.85); opacity: 0.6; }
    100% { transform: scale(1.25); opacity: 0.95; }
  }

  @keyframes flameFlicker {
    0% { transform: scaleX(0.9) scaleY(0.95); opacity: 0.95; }
    100% { transform: scaleX(1.1) scaleY(1.1); opacity: 1; }
  }

  @keyframes flamePulse {
    0% { transform: scaleX(0.85); opacity: 0.7; }
    100% { transform: scaleX(1.2); opacity: 0.95; }
  }

  .bf-float-btn.btn-whatsapp {
    background: #0A0A0C;
    color: #FFFFFF;
    border-color: #25D366;
  }

  .bf-float-btn.btn-whatsapp:hover {
    background: #25D366;
    border-color: #25D366;
    color: #FFFFFF;
  }

  .bf-float-btn.btn-call {
    background: #0A0A0C;
    color: #FFFFFF;
    border-color: #EF4136;
  }

  .bf-float-btn.btn-call:hover {
    background: #EF4136;
    border-color: #EF4136;
    color: #FFFFFF;
  }

  .bf-wa-svg {
    transition: transform 0.25s ease;
  }

  .bf-call-icon {
    transition: transform 0.25s ease;
  }

  @media (max-width: 640px) {
    .bf-floating-contact-stack {
      bottom: 20px;
      right: 18px;
      gap: 12px;
    }

    .bf-float-btn {
      width: 48px;
      height: 48px;
    }

    .bf-float-tooltip {
      display: none;
    }
  }
`;
