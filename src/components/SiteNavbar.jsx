"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Users,
  Layers3,
  Phone,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

/* ───────────────────────────────────────────────────────────────────────────
   BRANDFORGE SITE NAVBAR (SIMPLE, SLEEK & PROFESSIONAL)
   Clean, minimalist agency navigation bar with glassmorphic pill backdrop.
   ─────────────────────────────────────────────────────────────────────────── */

const NAVIGATION_ITEMS = [
  { label: "Home", to: "/", icon: Home },
  { label: "Who We Are", to: "/about", icon: Users },
  { label: "Services", to: "/#stacked-services", icon: Layers3 },
  { label: "Contact", to: "/contact", icon: Phone },
];

export default function SiteNavbar({ path, navigate, onOpenModal }) {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isLightLandingPage = path?.startsWith("/services/");

  useEffect(() => {
    const onScroll = () => {
      if (isLightLandingPage) {
        setScrolledPastHero(false);
        return;
      }
      const heroThreshold = Math.min(window.innerHeight * 0.75, 650);
      const isPast = window.scrollY > heroThreshold;
      setScrolledPastHero(isPast);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isLightLandingPage]);

  useEffect(() => {
    setMenuOpen(false);
  }, [path]);

  const go = (to) => {
    if (to.startsWith("/#")) {
      const targetId = to.replace("/#", "");
      if (path !== "/") {
        navigate("/");
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 150);
      } else {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(to);
    }
    setMenuOpen(false);
  };

  return (
    <header className={`liquid-nav__root ${scrolledPastHero && !isLightLandingPage ? "is-hidden" : ""}`}>
      <style>{styles}</style>

      <nav className="liquid-nav__bar" aria-label="Primary navigation">
        {/* BRANDFORGE LOGO */}
        <div className="liquid-nav__brand-logo" onClick={() => go("/")} style={{ cursor: "pointer" }}>
          <img src="/brandforge-logo.png" alt="BrandForge Logo" className="liquid-nav__logo-img" />
        </div>

        {/* NAVIGATION ITEMS */}
        <div className="liquid-nav__rail">
          {NAVIGATION_ITEMS.map(({ label, to, icon: Icon }) => {
            const isActive = path === to || (label === "Services" && path.startsWith("/services/"));

            return (
              <button
                key={label}
                type="button"
                className={`liquid-nav__item${isActive ? " is-active" : ""}`}
                aria-current={isActive ? "page" : undefined}
                onClick={() => go(to)}
              >
                <Icon aria-hidden="true" size={15} />
                <span>{label}</span>
              </button>
            );
          })}
        </div>

        {/* CTA ACTION & MOBILE MENU TOGGLE */}
        <div className="liquid-nav__actions">
          <button type="button" className="liquid-nav__cta" onClick={onOpenModal}>
            <span>LET'S TALK</span>
            <ArrowUpRight size={15} />
          </button>

          <button
            type="button"
            className="liquid-nav__burger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY DRAWER */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="liquid-nav__mobile"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {NAVIGATION_ITEMS.map(({ label, to, icon: Icon }) => (
              <button
                key={label}
                type="button"
                className={`liquid-nav__mobile-link ${path === to ? "is-active" : ""}`}
                onClick={() => go(to)}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <Icon size={16} />
                  <span>{label}</span>
                </div>
              </button>
            ))}
            <button
              type="button"
              className="liquid-nav__mobile-cta"
              onClick={() => {
                setMenuOpen(false);
                onOpenModal();
              }}
            >
              <span>LET'S TALK</span>
              <ArrowUpRight size={15} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

const styles = /* css */ `
  @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@700;800;900&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap");

  .liquid-nav__root {
    position: fixed;
    top: 18px;
    left: 0;
    right: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    padding: 0 16px;
    pointer-events: none;
    transition: transform 0.4s ease, opacity 0.3s ease;
  }

  .liquid-nav__root.is-hidden {
    transform: translateY(-120%);
    opacity: 0;
  }

  .liquid-nav__bar {
    position: relative;
    pointer-events: auto;
    display: flex;
    width: min(980px, calc(100vw - 32px));
    height: 64px;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 6px 16px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 999px;
    background: rgba(10, 10, 14, 0.9);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
  }

  .liquid-nav__brand-logo {
    display: flex;
    align-items: center;
    padding-left: 8px;
  }

  .liquid-nav__logo-img {
    height: 34px;
    width: auto;
    object-fit: contain;
    transition: opacity 0.25s ease;
  }

  .liquid-nav__brand-logo:hover .liquid-nav__logo-img {
    opacity: 0.88;
  }

  .liquid-nav__rail {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .liquid-nav__item {
    display: inline-flex;
    height: 38px;
    align-items: center;
    gap: 7px;
    padding: 0 16px;
    border: 1px solid transparent;
    border-radius: 999px;
    outline: none;
    color: rgba(255, 255, 255, 0.75);
    background: transparent;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 0.85rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .liquid-nav__item svg {
    color: rgba(255, 255, 255, 0.5);
    transition: color 0.2s ease;
  }

  .liquid-nav__item:hover {
    color: #FFFFFF;
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.15);
  }

  .liquid-nav__item:hover svg {
    color: #EF4136;
  }

  .liquid-nav__item.is-active {
    color: #FFFFFF;
    background: rgba(239, 65, 54, 0.15);
    border-color: rgba(239, 65, 54, 0.4);
  }

  .liquid-nav__item.is-active svg {
    color: #EF4136;
  }

  .liquid-nav__actions {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .liquid-nav__cta {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 9px 20px;
    background: #EF4136;
    color: #FFFFFF;
    border: none;
    border-radius: 999px;
    font-family: "Outfit", sans-serif;
    font-size: 0.82rem;
    font-weight: 800;
    letter-spacing: 0.04em;
    cursor: pointer;
    transition: background 0.2s ease, transform 0.2s ease;
  }

  .liquid-nav__cta:hover {
    background: #d8342a;
    transform: translateY(-1px);
  }

  .liquid-nav__burger {
    display: none;
    pointer-events: auto;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    cursor: pointer;
  }

  .liquid-nav__mobile {
    margin-top: 8px;
    width: min(980px, calc(100vw - 32px));
    pointer-events: auto;
    overflow: hidden;
    background: #0A0A0C;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 20px;
    padding: 10px 0;
  }

  .liquid-nav__mobile-link,
  .liquid-nav__mobile-cta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 12px 20px;
    background: none;
    border: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 0.9rem;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.8);
    cursor: pointer;
    text-align: left;
  }

  .liquid-nav__mobile-link.is-active {
    color: #EF4136;
  }

  .liquid-nav__mobile-cta {
    color: #EF4136;
    border-bottom: none;
    font-weight: 800;
  }

  @media (max-width: 768px) {
    .liquid-nav__rail {
      display: none;
    }
    .liquid-nav__cta {
      display: none;
    }
    .liquid-nav__burger {
      display: inline-flex;
    }
  }
`;
