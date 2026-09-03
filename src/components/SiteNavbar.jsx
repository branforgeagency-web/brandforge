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
  ChevronDown,
} from "lucide-react";

/* ───────────────────────────────────────────────────────────────────────────
   BRANDFORGE SITE NAVBAR (FULLY RESPONSIVE MOBILE DRAWER)
   Sleek glassmorphic floating bar with robust vertical mobile navigation.
   ─────────────────────────────────────────────────────────────────────────── */

const NAVIGATION_ITEMS = [
  { label: "Home", to: "/", icon: Home },
  { label: "Who We Are", to: "/about", icon: Users },
  { label: "Services", to: "/#stacked-services", icon: Layers3, isServices: true },
  { label: "Contact", to: "/contact", icon: Phone },
];

const MOBILE_SERVICES = [
  { label: "SEO & GEO Supremacy", slug: "seo-geo" },
  { label: "Website Development", slug: "web-dev" },
  { label: "Paid Media Scaling", slug: "paid-media" },
  { label: "Performance Marketing", slug: "performance-marketing" },
  { label: "Social Media Dominance", slug: "social-media" },
  { label: "Branding & Identity", slug: "branding-identity" },
];

export default function SiteNavbar({ path, navigate, onOpenModal }) {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

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
    setMobileServicesOpen(false);
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
    setMobileServicesOpen(false);
  };

  return (
    <header className={`liquid-nav__root ${scrolledPastHero && !isLightLandingPage ? "is-hidden" : ""}`}>
      <style>{styles}</style>

      <nav className="liquid-nav__bar" aria-label="Primary navigation">
        {/* BRANDFORGE LOGO */}
        <div className="liquid-nav__brand-logo" onClick={() => go("/")} style={{ cursor: "pointer" }}>
          <img src="/brandforge-logo.png" alt="BrandForge Logo" className="liquid-nav__logo-img" />
        </div>

        {/* DESKTOP NAVIGATION RAIL */}
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

        {/* CTA ACTION & MOBILE HAMBURGER BUTTON */}
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
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY DRAWER */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="liquid-nav__mobile"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {NAVIGATION_ITEMS.map(({ label, to, icon: Icon, isServices }) => (
              <React.Fragment key={label}>
                <div
                  className={`liquid-nav__mobile-link ${path === to ? "is-active" : ""}`}
                  onClick={() => {
                    if (isServices) {
                      setMobileServicesOpen((prev) => !prev);
                    } else {
                      go(to);
                    }
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <Icon size={18} className="mob-icon" />
                    <span>{label}</span>
                  </div>
                  {isServices ? (
                    <ChevronDown
                      size={18}
                      style={{
                        transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.25s ease",
                      }}
                    />
                  ) : (
                    <ArrowUpRight size={15} style={{ opacity: 0.5 }} />
                  )}
                </div>

                {/* NESTED MOBILE SERVICES SUBMENU */}
                {isServices && mobileServicesOpen && (
                  <div className="liquid-nav__mobile-sub">
                    <button
                      type="button"
                      className="sub-item view-all"
                      onClick={() => go("/#stacked-services")}
                    >
                      ⚡ View All 12 Services
                    </button>
                    {MOBILE_SERVICES.map((srv) => (
                      <button
                        key={srv.slug}
                        type="button"
                        className={`sub-item ${path === `/services/${srv.slug}` ? "is-active" : ""}`}
                        onClick={() => go(`/services/${srv.slug}`)}
                      >
                        <span>{srv.label}</span>
                        <ArrowUpRight size={13} />
                      </button>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}

            <div className="liquid-nav__mobile-cta-wrap">
              <button
                type="button"
                className="liquid-nav__mobile-cta"
                onClick={() => {
                  setMenuOpen(false);
                  onOpenModal();
                }}
              >
                <span>LET'S TALK NOW</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
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
    flex-direction: column;
    align-items: center;
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
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 999px;
    background: rgba(10, 10, 14, 0.92);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.45);
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
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    width: 42px;
    height: 42px;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    cursor: pointer;
    transition: background 0.2s ease;
  }

  .liquid-nav__burger:hover {
    background: rgba(239, 65, 54, 0.25);
    border-color: #EF4136;
  }

  /* MOBILE DRAWER STYLES */
  .liquid-nav__mobile {
    margin-top: 10px;
    width: min(980px, calc(100vw - 32px));
    pointer-events: auto;
    overflow: hidden;
    background: rgba(10, 10, 14, 0.96);
    backdrop-filter: blur(28px);
    -webkit-backdrop-filter: blur(28px);
    border: 1.5px solid rgba(239, 65, 54, 0.35);
    border-radius: 24px;
    padding: 10px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);
    box-sizing: border-box;
  }

  .liquid-nav__mobile-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 14px 18px;
    background: transparent;
    border-radius: 14px;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 0.95rem;
    font-weight: 700;
    color: #FFFFFF;
    cursor: pointer;
    transition: background 0.2s ease;
    box-sizing: border-box;
  }

  .liquid-nav__mobile-link:hover, .liquid-nav__mobile-link.is-active {
    background: rgba(239, 65, 54, 0.15);
    color: #EF4136;
  }

  .mob-icon {
    color: #EF4136;
  }

  .liquid-nav__mobile-sub {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 6px 12px 10px 36px;
  }

  .sub-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 14px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: rgba(255, 255, 255, 0.85);
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    text-align: left;
    transition: background 0.2s ease, color 0.2s ease;
  }

  .sub-item.view-all {
    color: #EF4136;
    font-weight: 800;
    background: rgba(239, 65, 54, 0.1);
    border-color: rgba(239, 65, 54, 0.25);
  }

  .sub-item:hover, .sub-item.is-active {
    background: rgba(239, 65, 54, 0.2);
    color: #FFFFFF;
    border-color: rgba(239, 65, 54, 0.4);
  }

  .liquid-nav__mobile-cta-wrap {
    padding: 8px 6px 4px;
  }

  .liquid-nav__mobile-cta {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    height: 48px;
    background: #EF4136;
    color: #FFFFFF;
    border: none;
    border-radius: 14px;
    font-family: "Outfit", sans-serif;
    font-size: 0.9rem;
    font-weight: 800;
    letter-spacing: 0.04em;
    cursor: pointer;
    transition: background 0.2s ease;
  }

  .liquid-nav__mobile-cta:hover {
    background: #d8342a;
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
