"use client";

import React, { useEffect, useRef, useState } from "react";

export default function VerdelyFooterPage() {
  const pageRef = useRef(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  // Mouse Parallax Interaction Handler
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!pageRef.current) return;
      const rect = pageRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMouseX(x);
      setMouseY(y);
    };

    const pageEl = pageRef.current;
    if (pageEl) {
      pageEl.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (pageEl) {
        pageEl.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div
      ref={pageRef}
      className="verdely-page"
      style={{
        "--mouse-x": mouseX,
        "--mouse-y": mouseY,
      }}
    >
      <style>{styles}</style>

      {/* 1. UPPER LANDSCAPE & SKY BACKGROUND */}
      <div className="verdely-sky-glow" aria-hidden="true" />

      {/* SUN GLOW */}
      <div className="verdely-sun-glow" aria-hidden="true" />

      {/* FLYING BIRDS SVG */}
      <div className="verdely-birds-wrap" aria-hidden="true">
        <svg
          viewBox="0 0 300 80"
          className="verdely-birds-svg"
          fill="none"
          stroke="#3d1e28"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          <path className="bird bird-1" d="M10,40 Q30,15 50,40 Q70,15 90,40" />
          <path className="bird bird-2" d="M110,30 Q125,12 140,30 Q155,12 170,30" />
          <path className="bird bird-3" d="M200,50 Q215,32 230,50 Q245,32 260,50" />
        </svg>
      </div>

      {/* MIST BANDS */}
      <div className="verdely-mist mist-left" aria-hidden="true" />
      <div className="verdely-mist mist-right" aria-hidden="true" />

      {/* LANDSCAPE IMAGE WRAPPER WITH PARALLAX */}
      <div className="verdely-landscape-wrapper" aria-hidden="true">
        <img
          src="https://cdn.pixabay.com/photo/2026/04/28/22/56/22-56-09-389_1280.png"
          alt="BrandForge Summit Landscape Illustration"
          className="verdely-landscape-img"
          draggable={false}
        />
        <div className="verdely-image-overlay-v" />
        <div className="verdely-image-overlay-h" />
      </div>

      {/* 2. PARALLAX FOREGROUND HILLS */}
      <div className="verdely-hill hill-back" aria-hidden="true" />
      <div className="verdely-hill hill-middle" aria-hidden="true" />
      <div className="verdely-hill hill-front" aria-hidden="true" />

      {/* 3. FLOATING LEAVES / DRIFT PARTICLES */}
      <div className="verdely-leaves-container" aria-hidden="true">
        <span className="verdely-leaf leaf-1" />
        <span className="verdely-leaf leaf-2" />
        <span className="verdely-leaf leaf-3" />
        <span className="verdely-leaf leaf-4" />
        <span className="verdely-leaf leaf-5" />
        <span className="verdely-leaf leaf-6" />
      </div>

      {/* 4. MAIN HEADLINE AREA */}
      <div className="verdely-headline-area">
        <div className="verdely-eyebrow">
          <span className="eyebrow-line" />
          <span>BUILT FOR TOMORROW · DIGITAL MARKETING AGENCY</span>
        </div>

        <h1 className="verdely-main-heading">
          <span>We build the digital path,</span>
          <span>you conquer the</span>
          <span className="accent-summit">summit.</span>
        </h1>
      </div>

      {/* 5. FOOTER CONTENT & GRID */}
      <footer className="verdely-footer">
        <div className="verdely-footer-grid">
          
          {/* BRAND & COPYRIGHT COLUMN */}
          <div className="verdely-brand-col">
            <div className="verdely-logo-row">
              <svg className="verdely-logo-icon" viewBox="0 0 44 44" fill="none">
                <rect x="2" y="2" width="40" height="40" rx="10" stroke="#FF4D4D" strokeWidth="3" fill="#075458" />
                <path d="M22 34V10" stroke="#c7e99d" strokeWidth="3" strokeLinecap="round" />
                <path d="M22 20C16 16 12 18 10 22C14 24 18 24 22 20Z" fill="#76cf6a" />
                <path d="M22 26C28 22 32 24 34 28C30 30 26 30 22 26Z" fill="#c7e99d" />
              </svg>
              <span className="verdely-brand-name">BrandForge</span>
            </div>

            <div className="verdely-copyright-box">
              <span className="copyright-year">Copyright © 2026</span>
              <span className="copyright-slogan">Turning ideas into digital power.</span>
            </div>
          </div>

          {/* THREE NAVIGATION COLUMNS */}
          <div className="verdely-nav-cols">
            <div className="verdely-nav-group">
              <a href="#hero" className="verdely-nav-link">
                <span className="nav-bar-indicator" />
                <span>Overview</span>
              </a>
              <a href="#stacked-services" className="verdely-nav-link">
                <span className="nav-bar-indicator" />
                <span>12 Services</span>
              </a>
            </div>

            <div className="verdely-nav-group">
              <a href="#testimonials" className="verdely-nav-link">
                <span className="nav-bar-indicator" />
                <span>Case Stories</span>
              </a>
              <a href="#testimonials" className="verdely-nav-link">
                <span className="nav-bar-indicator" />
                <span>Testimonials</span>
              </a>
            </div>

            <div className="verdely-nav-group">
              <a href="#hero" className="verdely-nav-link">
                <span className="nav-bar-indicator" />
                <span>Growth Audit</span>
              </a>
              <a href="#hero" className="verdely-nav-link">
                <span className="nav-bar-indicator" />
                <span>Contact Us</span>
              </a>
            </div>
          </div>

          {/* CONTACT CTA BUTTON */}
          <div className="verdely-contact-col">
            <button
              className="verdely-contact-btn"
              onClick={() => alert("Initiating BrandForge Transformation Strategy Audit...")}
            >
              <span className="btn-warm-layer" />
              <span className="btn-text">START A PROJECT</span>
              <span className="btn-arrow">↗</span>
            </button>
          </div>

        </div>

        {/* BOTTOM DIVIDER AND SOCIAL LINKS */}
        <div className="verdely-bottom-divider-row">
          <div className="verdely-divider-line">
            <div className="divider-glow-bar" />
          </div>

          <div className="verdely-social-links">
            <a href="#" className="social-link">X</a>
            <a href="#" className="social-link" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="#" className="social-link">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Outfit:wght@800;900&display=swap');

.verdely-page {
  --dark-teal: #075458;
  --deep-teal: #06494d;
  --cream: #f6f1dd;
  --green: #76cf6a;
  --coral: #FF4D4D; /* Matched to BrandForge Official Logo Red */
  --mouse-x: 0;
  --mouse-y: 0;

  position: relative;
  width: 100%;
  min-height: 100svh;
  overflow: hidden;
  isolation: isolate;
  background-color: #fcebd9;
  font-family: 'DM Sans', sans-serif;
  color: var(--cream);
}

.verdely-page * {
  box-sizing: border-box;
}

/* 1. SKY AND SUN GLOW */
.verdely-sky-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 66%;
  z-index: 0;
  pointer-events: none;
  background: 
    radial-gradient(circle at 50% 31%, rgba(255, 235, 170, 0.9) 0%, rgba(255, 185, 150, 0.4) 35%, transparent 70%),
    linear-gradient(180deg, #FFFFFF 0%, #FDE3CE 40%, #FF907D 100%);
}

.verdely-sun-glow {
  position: absolute;
  top: 24%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: clamp(470px, 34vw, 680px);
  height: clamp(470px, 34vw, 680px);
  border-radius: 50%;
  background: rgba(255, 245, 185, 0.45);
  filter: blur(28px);
  mix-blend-mode: screen;
  z-index: 1;
  pointer-events: none;
  animation: sunPulse 6s ease-in-out infinite alternate;
}

@keyframes sunPulse {
  0% { transform: translate(-50%, -50%) scale(0.94); opacity: 0.8; }
  100% { transform: translate(-50%, -50%) scale(1.06); opacity: 1; }
}

/* LANDSCAPE IMAGE WRAPPER WITH PARALLAX & CSS HUE FILTERS */
.verdely-landscape-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 66%;
  overflow: hidden;
  z-index: 2;
  pointer-events: none;
  transform: translate3d(calc(var(--mouse-x) * 20px), calc(var(--mouse-y) * 15px), 0);
  transition: transform 0.9s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.verdely-landscape-img {
  width: 106%;
  height: 112%;
  object-fit: cover;
  object-position: center 55%;
  user-select: none;
  filter: hue-rotate(318deg) saturate(0.72) brightness(1.14) contrast(0.88);
  animation: landscapeBreathing 18s ease-in-out infinite alternate;
}

@keyframes landscapeBreathing {
  0% { transform: scale(1.045) translateY(0); }
  100% { transform: scale(1.09) translateY(-1%); }
}

.verdely-image-overlay-v {
  position: absolute;
  inset: 0;
  z-index: 3;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 144, 125, 0.3) 40%, rgba(118, 207, 106, 0.25) 75%, var(--dark-teal) 100%);
  pointer-events: none;
}

.verdely-image-overlay-h {
  position: absolute;
  inset: 0;
  z-index: 4;
  background: linear-gradient(90deg, rgba(255, 180, 200, 0.2) 0%, rgba(253, 227, 206, 0.15) 50%, rgba(118, 207, 106, 0.2) 100%);
  mix-blend-mode: color;
  pointer-events: none;
}

/* BIRDS SVG ANIMATION */
.verdely-birds-wrap {
  position: absolute;
  top: 17%;
  left: 38%;
  width: clamp(100px, 15vw, 190px);
  z-index: 5;
  pointer-events: none;
  animation: birdsTravel 12s ease-in-out infinite alternate;
}

@keyframes birdsTravel {
  0% { transform: translate(0, 0); }
  100% { transform: translate(25px, -15px); }
}

.bird {
  transform-origin: center;
}
.bird-1 { animation: birdFlap 2.1s ease-in-out infinite alternate; }
.bird-2 { animation: birdFlap 2.6s ease-in-out infinite alternate; }
.bird-3 { animation: birdFlap 2.3s ease-in-out infinite alternate; }

@keyframes birdFlap {
  0% { transform: scaleY(1); }
  100% { transform: scaleY(0.5); }
}

/* MIST BANDS */
.verdely-mist {
  position: absolute;
  height: 64px;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.45);
  filter: blur(20px);
  z-index: 4;
  pointer-events: none;
}

.mist-left {
  top: 22%;
  left: 8%;
  width: 42%;
  animation: mistMove 22s ease-in-out infinite alternate;
}

.mist-right {
  top: 18%;
  right: 6%;
  width: 37%;
  animation: mistMoveReverse 26s ease-in-out infinite alternate;
}

@keyframes mistMove {
  0% { transform: translateX(0); }
  100% { transform: translateX(35px); }
}
@keyframes mistMoveReverse {
  0% { transform: translateX(0); }
  100% { transform: translateX(-40px); }
}

/* 2. FOREGROUND PARALLAX HILLS */
.verdely-hill {
  position: absolute;
  left: -2%;
  width: 104%;
  pointer-events: none;
  transition: transform 0.9s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.hill-back {
  top: 42%;
  height: 30%;
  z-index: 6;
  background: #5ab34e;
  opacity: 0.92;
  clip-path: polygon(0 45%, 15% 30%, 32% 48%, 50% 22%, 68% 40%, 85% 25%, 100% 38%, 100% 100%, 0 100%);
  transform: translate3d(calc(var(--mouse-x) * 15px), calc(var(--mouse-y) * 10px), 0);
}

.hill-middle {
  top: 47%;
  height: 29%;
  z-index: 7;
  background: #257d4a;
  clip-path: polygon(0 38%, 18% 50%, 38% 30%, 58% 46%, 78% 28%, 100% 42%, 100% 100%, 0 100%);
  transform: translate3d(calc(var(--mouse-x) * -12px), calc(var(--mouse-y) * -8px), 0);
}

.hill-front {
  top: 50%;
  height: 60%;
  z-index: 8;
  background: radial-gradient(circle at 50% 0%, #0d686d 0%, var(--dark-teal) 65%);
  clip-path: polygon(0 28%, 25% 42%, 50% 18%, 75% 35%, 100% 22%, 100% 100%, 0 100%);
}

/* 3. FLOATING LEAVES */
.verdely-leaves-container {
  position: absolute;
  inset: 0;
  z-index: 9;
  pointer-events: none;
}

.verdely-leaf {
  position: absolute;
  border-radius: 100% 0 100% 0;
  background: linear-gradient(135deg, #76cf6a 0%, #257d4a 100%);
  box-shadow: inset 1px 1px 3px rgba(255, 255, 255, 0.4), 0 4px 10px rgba(7, 84, 88, 0.3);
  animation: leafFloat 15s ease-in-out infinite;
}

.leaf-1 { top: 43%; left: 24%; width: 26px; height: 26px; animation-duration: 14s; animation-delay: -3s; }
.leaf-2 { top: 57%; left: 39%; width: 34px; height: 34px; animation-duration: 16s; animation-delay: -7s; }
.leaf-3 { top: 45%; left: 51%; width: 22px; height: 22px; animation-duration: 12s; animation-delay: -2s; }
.leaf-4 { top: 56%; left: 64%; width: 40px; height: 40px; animation-duration: 18s; animation-delay: -10s; }
.leaf-5 { top: 47%; left: 75%; width: 28px; height: 28px; animation-duration: 15s; animation-delay: -5s; }
.leaf-6 { top: 60%; left: 85%; width: 36px; height: 36px; animation-duration: 13s; animation-delay: -8s; }

@keyframes leafFloat {
  0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { transform: translate(45px, 80px) rotate(220deg); opacity: 0; }
}

/* 4. MAIN HEADLINE AREA */
.verdely-headline-area {
  position: absolute;
  left: clamp(34px, 4.6vw, 90px);
  bottom: clamp(245px, 27vh, 285px);
  max-width: 780px;
  z-index: 12;
  pointer-events: none;
  transform: translate3d(calc(var(--mouse-x) * 10px), calc(var(--mouse-y) * 8px), 0);
  transition: transform 0.9s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.verdely-eyebrow {
  display: flex;
  align-items: center;
  gap: 13px;
  font-size: clamp(10px, 0.9vw, 14px);
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(246, 241, 221, 0.74);
  margin-bottom: 22px;
}

.eyebrow-line {
  width: 32px;
  height: 2px;
  background: var(--coral);
}

.verdely-main-heading {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: 'Outfit', 'DM Sans', sans-serif;
  font-size: clamp(40px, 3.8vw, 70px);
  font-weight: 800;
  line-height: 0.98;
  letter-spacing: -0.057em;
  color: var(--cream);
  margin: 0;
}

.verdely-main-heading span {
  white-space: nowrap;
}

.accent-summit {
  color: var(--coral);
  text-shadow: 0 0 25px rgba(255, 77, 77, 0.4);
}

/* 5. FOOTER CONTENT & GRID */
.verdely-footer {
  position: absolute;
  left: clamp(34px, 4.6vw, 90px);
  right: clamp(34px, 4.6vw, 90px);
  bottom: clamp(24px, 3vh, 38px);
  z-index: 15;
}

.verdely-footer-grid {
  display: grid;
  grid-template-columns: minmax(220px, 0.8fr) minmax(470px, 2fr) minmax(155px, auto);
  gap: clamp(35px, 4vw, 90px);
  align-items: end;
}

/* BRAND COLUMN */
.verdely-brand-col {
  display: flex;
  flex-direction: column;
}

.verdely-logo-row {
  display: flex;
  align-items: center;
  gap: 13px;
  cursor: pointer;
}

.verdely-logo-icon {
  width: 39px;
  height: 39px;
  transition: transform 0.3s ease;
}

.verdely-logo-row:hover .verdely-logo-icon {
  transform: rotate(-7deg) scale(1.05);
}

.verdely-brand-name {
  font-size: 27px;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: var(--cream);
}

.verdely-copyright-box {
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.copyright-year {
  font-size: 15px;
  font-weight: 500;
  color: var(--cream);
}

.copyright-slogan {
  font-size: 11px;
  color: rgba(246, 241, 221, 0.65);
}

/* THREE NAVIGATION COLUMNS */
.verdely-nav-cols {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.verdely-nav-group {
  display: flex;
  flex-direction: column;
  gap: 17px;
}

.verdely-nav-link {
  display: flex;
  align-items: center;
  gap: 13px;
  font-size: 13px;
  color: var(--cream);
  text-decoration: none;
  white-space: nowrap;
  transition: transform 0.25s ease, color 0.25s ease;
}

.nav-bar-indicator {
  width: 2px;
  height: 19px;
  background: var(--green);
  transition: height 0.25s ease, background-color 0.25s ease;
}

.verdely-nav-link:hover {
  transform: translateX(4px);
  color: #FFFFFF;
}

.verdely-nav-link:hover .nav-bar-indicator {
  height: 25px;
  background: var(--coral);
  box-shadow: 0 0 10px var(--coral);
}

/* CONTACT CTA BUTTON */
.verdely-contact-col {
  display: flex;
  justify-content: flex-end;
}

.verdely-contact-btn {
  position: relative;
  min-width: 168px;
  height: 58px;
  background: var(--coral);
  color: #075458;
  border: none;
  border-radius: 7px;
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(7, 84, 88, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.4);
  transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.3s ease;
}

.btn-warm-layer {
  position: absolute;
  inset: 0;
  background: #ffe3b3;
  transform: translateY(100%);
  transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
  z-index: 1;
}

.btn-text, .btn-arrow {
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease;
}

.verdely-contact-btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 16px 35px rgba(255, 77, 77, 0.5);
}

.verdely-contact-btn:hover .btn-warm-layer {
  transform: translateY(0);
}

.verdely-contact-btn:hover .btn-arrow {
  transform: translate(3px, -4px);
}

/* BOTTOM DIVIDER AND SOCIAL LINKS */
.verdely-bottom-divider-row {
  margin-top: 27px;
  display: flex;
  align-items: center;
  gap: 28px;
}

.verdely-divider-line {
  position: relative;
  flex: 1;
  height: 1px;
  background: rgba(246, 241, 221, 0.65);
  margin-left: clamp(245px, 24vw, 365px);
  overflow: hidden;
}

.divider-glow-bar {
  position: absolute;
  top: 0;
  left: -30%;
  width: 30%;
  height: 100%;
  background: linear-gradient(90deg, transparent 0%, #FFFFFF 50%, var(--coral) 100%);
  animation: lineGlide 5s ease-in-out infinite;
}

@keyframes lineGlide {
  0% { left: -30%; }
  100% { left: 100%; }
}

.verdely-social-links {
  display: flex;
  align-items: center;
  gap: 21px;
}

.social-link {
  color: var(--green);
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: transform 0.25s ease, color 0.25s ease;
}

.social-link:hover {
  transform: translateY(-4px);
  color: var(--coral);
}

/* RESPONSIVE MEDIA QUERIES */
@media (max-width: 1200px) {
  .verdely-headline-area {
    bottom: clamp(220px, 24vh, 260px);
    max-width: 620px;
  }
  .verdely-main-heading {
    font-size: clamp(38px, 3.5vw, 60px);
  }
  .verdely-footer-grid {
    gap: 30px;
  }
}

@media (max-width: 940px) {
  .verdely-page {
    min-height: 1040px;
  }
  .verdely-sky-glow, .verdely-landscape-wrapper {
    height: 53%;
  }
  .hill-back { top: 35%; }
  .hill-middle { top: 40%; }
  .hill-front { top: 44%; }

  .verdely-headline-area {
    top: 48%;
    bottom: auto;
    left: 34px;
    right: 34px;
    max-width: 100%;
  }

  .verdely-main-heading {
    font-size: clamp(36px, 6.5vw, 58px);
  }

  .verdely-main-heading span {
    white-space: normal;
  }

  .verdely-footer-grid {
    grid-template-columns: 1fr auto;
    grid-template-rows: auto auto;
  }

  .verdely-nav-cols {
    grid-column: 1 / -1;
    grid-row: 2;
    margin-top: 20px;
  }

  .verdely-divider-line {
    margin-left: 0;
  }
}

@media (max-width: 600px) {
  .verdely-page {
    min-height: 1220px;
  }
  .verdely-landscape-img {
    object-position: 58% 55%;
  }
  .verdely-headline-area {
    top: 42%;
    left: 24px;
    right: 24px;
  }
  .verdely-main-heading {
    font-size: clamp(34px, 10vw, 52px);
  }

  .leaf-5, .leaf-6 { display: none; }

  .verdely-footer {
    left: 24px;
    right: 24px;
    bottom: 24px;
  }

  .verdely-footer-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .verdely-contact-col {
    justify-content: stretch;
  }

  .verdely-contact-btn {
    width: 100%;
  }

  .verdely-nav-cols {
    grid-template-columns: 1fr 1fr;
  }

  .verdely-bottom-divider-row {
    flex-direction: column;
    align-items: flex-end;
    gap: 16px;
  }

  .verdely-divider-line {
    width: 100%;
  }
}

@media (max-width: 390px) {
  .verdely-page {
    min-height: 1260px;
  }
  .verdely-main-heading {
    font-size: 34px;
  }
  .verdely-nav-cols {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .verdely-landscape-img, .verdely-sun-glow, .verdely-birds-wrap, .bird, .verdely-mist, .verdely-leaf, .divider-glow-bar {
    animation: none !important;
  }
  .verdely-landscape-wrapper, .verdely-hill, .verdely-headline-area {
    transition: none !important;
  }
}
`;
