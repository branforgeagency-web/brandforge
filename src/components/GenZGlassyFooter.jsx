"use client";

import React from 'react';

const SOCIALS = [
  { name: 'Facebook', href: '#' },
  { name: 'Twitter', href: '#' },
  { name: 'YouTube', href: '#' },
  { name: 'Instagram', href: '#' },
];

const FOOTER_GROUPS = [
  {
    title: 'ABOUT US',
    links: [
      { label: 'Pricing', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'FAQ', href: '#' },
      { label: 'Blog', href: '#' },
    ],
  },
  {
    title: 'SUPPORT',
    links: [
      { label: 'Help Center', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'Privacy', href: '#' },
      { label: 'Security', href: '#' },
    ],
  },
  {
    title: 'COMMUNITY',
    links: [
      { label: 'Forum', href: '#' },
      { label: 'Events', href: '#' },
      { label: 'Partners', href: '#' },
      { label: 'Affiliates', href: '#' },
      { label: 'Career', href: '#' },
    ],
  },
  {
    title: 'PRESS',
    links: [
      { label: 'Investors', href: '#' },
      { label: 'Terms of Use', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Legal', href: '#' },
    ],
  },
];

export default function GenZGlassyFooter() {
  return (
    <footer className="kex-footer">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Inter:wght@700;800;900&display=swap');

        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .kex-footer {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 520px;
          overflow: hidden;
          color: #f4f6fa;
          font-family: 'DM Sans', Arial, sans-serif;
          isolation: isolate;
          margin: 0;
          padding: 0;
          border: none;
          background:
            radial-gradient(
              ellipse 54% 82% at 50% 8%,
              rgba(255, 77, 77, 0.28) 0%,
              rgba(255, 59, 48, 0.18) 28%,
              rgba(180, 40, 30, 0.09) 49%,
              rgba(15, 35, 70, 0.025) 68%,
              transparent 82%
            ),
            radial-gradient(
              ellipse 50% 84% at 50% 74%,
              rgba(255, 77, 77, 0.24) 0%,
              rgba(11, 11, 12, 0.9) 43%,
              transparent 76%
            ),
            linear-gradient(
              108deg,
              #010205 0%,
              #040811 25%,
              #0b0b0d 46%,
              #141416 53%,
              #060810 72%,
              #010205 100%
            );
        }

        /* AMBIENT GLASS LIGHT */
        .kex-footer::before {
          content: "";
          position: absolute;
          top: -54%;
          left: 50%;
          z-index: 0;
          width: 70%;
          height: 132%;
          border-radius: 50%;
          pointer-events: none;
          background: radial-gradient(
            ellipse at center,
            rgba(255, 77, 77, 0.22) 0%,
            rgba(255, 59, 48, 0.14) 27%,
            rgba(47, 100, 181, 0.055) 53%,
            transparent 74%
          );
          filter: blur(42px);
          transform: translateX(-50%) translateZ(0);
          will-change: transform, opacity;
          animation: kex-ambient-breathe 9s ease-in-out infinite alternate;
        }

        @keyframes kex-ambient-breathe {
          0% {
            opacity: 0.7;
            transform: translateX(-50%) scale(0.95) translateZ(0);
          }
          100% {
            opacity: 1;
            transform: translateX(-50%) scale(1.06) translateZ(0);
          }
        }

        /* MOVING GLASS REFLECTION */
        .kex-footer::after {
          content: "";
          position: absolute;
          top: -65%;
          left: -55%;
          z-index: 0;
          width: 72%;
          height: 215%;
          border-radius: 50%;
          pointer-events: none;
          background: linear-gradient(
            102deg,
            transparent 29%,
            rgba(255, 255, 255, 0.015) 41%,
            rgba(255, 255, 255, 0.08) 50%,
            rgba(255, 255, 255, 0.015) 59%,
            transparent 71%
          );
          transform: rotate(8deg) translateZ(0);
          animation: kex-reflection 15s ease-in-out infinite;
        }

        @keyframes kex-reflection {
          0%, 22% {
            left: -60%;
            opacity: 0;
          }
          42% {
            opacity: 0.48;
          }
          68%, 100% {
            left: 90%;
            opacity: 0;
          }
        }

        /* INNER WRAPPER */
        .kex-footer-inner {
          position: relative;
          z-index: 3;
          width: 100%;
          height: 100%;
          overflow: hidden;
          padding: clamp(38px, 3.25vw, 52px) clamp(34px, 3.5vw, 54px) 30px;
        }

        /* TOP SOCIAL NAVIGATION */
        .kex-socials {
          width: 100%;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          column-gap: clamp(42px, 4.5vw, 72px);
        }

        .kex-social {
          min-width: 0;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          color: rgba(249, 250, 253, 0.93);
          font-size: clamp(16px, 1.27vw, 20px);
          font-weight: 400;
          line-height: 1;
          letter-spacing: -0.035em;
          opacity: 0;
          transform: translateY(15px);
          animation: kex-rise 850ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .kex-social:nth-child(1) { animation-delay: 80ms; }
        .kex-social:nth-child(2) { animation-delay: 150ms; }
        .kex-social:nth-child(3) { animation-delay: 220ms; }
        .kex-social:nth-child(4) { animation-delay: 290ms; }

        @keyframes kex-rise {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .kex-social-name {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          transition: color 300ms ease, transform 450ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .kex-social:hover .kex-social-name {
          color: #FF4D4D;
          transform: translateX(4px);
        }

        /* ARROW ANIMATION */
        .kex-arrow {
          position: relative;
          width: 29px;
          height: 20px;
          flex: 0 0 29px;
          overflow: hidden;
        }

        .kex-arrow::before, .kex-arrow::after {
          content: "→";
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 27px;
          font-weight: 300;
          line-height: 1;
          transition: transform 500ms cubic-bezier(0.16, 1, 0.3, 1), color 300ms ease;
        }

        .kex-arrow::before {
          color: rgba(255, 255, 255, 0.92);
          transform: translateX(0);
        }

        .kex-arrow::after {
          color: #FF4D4D;
          transform: translateX(-145%);
        }

        .kex-social:hover .kex-arrow::before {
          transform: translateX(145%);
        }

        .kex-social:hover .kex-arrow::after {
          transform: translateX(0);
        }

        /* FOOTER NAVIGATION COLUMNS */
        .kex-columns {
          position: relative;
          z-index: 4;
          width: 100%;
          margin-top: clamp(72px, 5.7vw, 88px);
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          column-gap: clamp(42px, 4.5vw, 72px);
        }

        .kex-column {
          opacity: 0;
          transform: translateY(20px);
          animation: kex-rise 900ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .kex-column:nth-child(1) { animation-delay: 300ms; }
        .kex-column:nth-child(2) { animation-delay: 390ms; }
        .kex-column:nth-child(3) { animation-delay: 480ms; }
        .kex-column:nth-child(4) { animation-delay: 570ms; }

        .kex-column-title {
          margin: 0 0 clamp(31px, 2.65vw, 40px);
          color: rgba(201, 211, 227, 0.47);
          font-family: "Courier New", Courier, monospace;
          font-size: clamp(11px, 0.9vw, 14px);
          font-weight: 400;
          line-height: 1;
          letter-spacing: 0.1em;
          white-space: nowrap;
        }

        .kex-link-list {
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: clamp(19px, 1.45vw, 24px);
          list-style: none;
        }

        .kex-footer-link {
          position: relative;
          display: inline-flex;
          width: fit-content;
          max-width: 100%;
          color: rgba(246, 248, 252, 0.88);
          font-size: clamp(15px, 1.24vw, 19px);
          font-weight: 400;
          line-height: 1.25;
          letter-spacing: -0.033em;
          white-space: nowrap;
          transition: color 280ms ease, transform 450ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .kex-footer-link::before {
          content: "";
          position: absolute;
          left: -13px;
          top: 50%;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #FF4D4D;
          box-shadow: 0 0 8px rgba(255, 77, 77, 0.8), 0 0 16px rgba(255, 107, 0, 0.5);
          opacity: 0;
          transform: translateY(-50%) scale(0);
          transition: opacity 280ms ease, transform 400ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .kex-footer-link:hover {
          color: #ffffff;
          transform: translateX(13px);
        }

        .kex-footer-link:hover::before {
          opacity: 1;
          transform: translateY(-50%) scale(1);
        }

        /* OVERSIZED BOTTOM BRAND LOGO AREA */
        .kex-brand-zone {
          position: absolute;
          left: 0;
          right: 0;
          bottom: clamp(10px, 2.5vh, 24px);
          z-index: 2;
          height: clamp(100px, 22vw, 300px);
          display: flex;
          align-items: flex-end;
          justify-content: center;
          overflow: hidden;
          pointer-events: none;
        }

        .kex-brand-glow {
          position: absolute;
          left: 50%;
          bottom: -18%;
          width: 68%;
          height: 82%;
          border-radius: 50%;
          background: radial-gradient(
            ellipse at center,
            rgba(255, 77, 77, 0.35) 0%,
            rgba(255, 107, 0, 0.18) 40%,
            transparent 72%
          );
          filter: blur(52px);
          transform: translateX(-50%);
          animation: kex-brand-breathe 7s ease-in-out infinite alternate;
        }

        @keyframes kex-brand-breathe {
          0% {
            opacity: 0.55;
            transform: translateX(-50%) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateX(-50%) scale(1.08);
          }
        }

        .kex-brand-logo-img {
          height: clamp(70px, 14vw, 220px);
          width: auto;
          object-fit: contain;
          filter: drop-shadow(0 0 45px rgba(255, 77, 77, 0.8));
          opacity: 0;
          transform: translateY(105%) scaleY(1.07);
          animation: kex-brand-enter 1.25s 620ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes kex-brand-enter {
          0% {
            opacity: 0;
            transform: translateY(105%) scaleY(1.07);
            filter: blur(8px) drop-shadow(0 0 45px rgba(255, 77, 77, 0.8));
          }
          100% {
            opacity: 1;
            transform: translateY(0) scaleY(1.07);
            filter: blur(0) drop-shadow(0 0 45px rgba(255, 77, 77, 0.8));
          }
        }

        /* SHORT DESKTOP HEIGHT */
        @media (max-height: 720px) and (min-width: 701px) {
          .kex-footer-inner {
            padding-top: 27px;
            padding-bottom: 16px;
          }
          .kex-columns {
            margin-top: 48px;
          }
          .kex-column-title {
            margin-bottom: 22px;
          }
          .kex-link-list {
            gap: 13px;
          }
          .kex-brand-zone {
            height: 160px;
          }
          .kex-brand-logo-img {
            height: clamp(60px, 12vw, 160px);
          }
        }

        /* VERY SHORT DESKTOP HEIGHT */
        @media (max-height: 570px) and (min-width: 701px) {
          .kex-columns {
            margin-top: 34px;
          }
          .kex-column-title {
            margin-bottom: 15px;
          }
          .kex-link-list {
            gap: 9px;
          }
          .kex-footer-link {
            font-size: 13px;
          }
          .kex-brand-zone {
            height: 120px;
          }
          .kex-brand-logo-img {
            height: clamp(50px, 10vw, 120px);
          }
        }

        /* TABLET LAYOUT */
        @media (max-width: 900px) {
          .kex-footer-inner {
            padding: 30px clamp(22px, 4vw, 36px) 20px;
          }
          .kex-socials, .kex-columns {
            column-gap: 30px;
          }
          .kex-columns {
            margin-top: 62px;
          }
          .kex-social {
            font-size: clamp(14px, 1.9vw, 17px);
          }
          .kex-footer-link {
            font-size: clamp(13px, 1.7vw, 16px);
          }
          .kex-brand-logo-img {
            height: clamp(60px, 14vw, 150px);
          }
        }

        /* MOBILE LAYOUT */
        @media (max-width: 700px) {
          .kex-footer {
            min-height: 620px;
          }
          .kex-footer-inner {
            padding: 20px 20px 16px;
          }
          .kex-socials {
            grid-template-columns: repeat(2, 1fr);
            column-gap: 28px;
            row-gap: 12px;
          }
          .kex-social {
            height: 28px;
            font-size: clamp(12px, 3.6vw, 15px);
          }
          .kex-arrow {
            width: 22px;
            height: 17px;
            flex-basis: 22px;
          }
          .kex-arrow::before, .kex-arrow::after {
            font-size: 21px;
          }
          .kex-columns {
            margin-top: clamp(34px, 6vh, 52px);
            grid-template-columns: repeat(2, 1fr);
            column-gap: 30px;
            row-gap: clamp(28px, 4.5vh, 42px);
          }
          .kex-column-title {
            margin-bottom: clamp(15px, 2.3vh, 22px);
            font-size: 9px;
          }
          .kex-link-list {
            gap: clamp(8px, 1.6vh, 13px);
          }
          .kex-footer-link {
            font-size: clamp(11px, 3.3vw, 14px);
          }
          .kex-brand-zone {
            bottom: 10px;
            height: 115px;
          }
          .kex-brand-logo-img {
            height: clamp(50px, 16vw, 110px);
          }
        }

        /* SMALL MOBILE LAYOUT */
        @media (max-width: 390px) {
          .kex-footer-inner {
            padding-left: 16px;
            padding-right: 16px;
          }
          .kex-socials, .kex-columns {
            column-gap: 20px;
          }
          .kex-footer-link {
            font-size: 11px;
          }
          .kex-brand-logo-img {
            height: clamp(40px, 14vw, 85px);
          }
        }

        /* REDUCED MOTION */
        @media (prefers-reduced-motion: reduce) {
          .kex-footer::before,
          .kex-footer::after,
          .kex-social,
          .kex-column,
          .kex-brand-logo-img,
          .kex-brand-glow {
            animation-duration: 1ms !important;
            animation-delay: 0ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>

      {/* INNER CONTENT WRAPPER */}
      <div className="kex-footer-inner">
        
        {/* TOP SOCIAL NAVIGATION */}
        <nav className="kex-socials" aria-label="Social media links">
          {SOCIALS.map((soc) => (
            <a key={soc.name} href={soc.href} className="kex-social">
              <span className="kex-social-name">{soc.name}</span>
              <span className="kex-arrow" aria-hidden="true" />
            </a>
          ))}
        </nav>

        {/* FOOTER NAVIGATION COLUMNS */}
        <div className="kex-columns">
          {FOOTER_GROUPS.map((group) => (
            <section key={group.title} className="kex-column">
              <h2 className="kex-column-title">{group.title}</h2>
              <ul className="kex-link-list">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="kex-footer-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

      </div>

      {/* OVERSIZED BOTTOM BRAND LOGO AREA */}
      <div className="kex-brand-zone" aria-label="BrandForge">
        <div className="kex-brand-glow" />
        <img
          src="/logo.png"
          alt="BrandForge Official Logo"
          className="kex-brand-logo-img"
        />
      </div>

    </footer>
  );
}
