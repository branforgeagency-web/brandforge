import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "Who We Are", to: "/about" },
];

export default function SiteNavbar({ path, navigate, onOpenModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [path]);

  const go = (to) => {
    navigate(to);
    setMenuOpen(false);
  };

  return (
    <header className={`bf-nav-root ${scrolled ? "is-scrolled" : ""}`}>
      <div className="bf-nav-inner">
        <button type="button" className="bf-nav-logo" onClick={() => go("/")} aria-label="BrandForge home">
          <img src="/brandforge-logo.png" alt="" />
          <span>BrandForge</span>
        </button>

        <nav className="bf-nav-links" aria-label="Primary">
          {LINKS.map((link) => (
            <button
              key={link.to}
              type="button"
              className={`bf-nav-link ${path === link.to ? "is-active" : ""}`}
              onClick={() => go(link.to)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="bf-nav-actions">
          <button type="button" className="bf-nav-cta" onClick={onOpenModal}>
            <span>Let's Talk</span>
            <ArrowUpRight size={15} />
          </button>

          <button
            type="button"
            className="bf-nav-burger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="bf-nav-mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {LINKS.map((link) => (
              <button
                key={link.to}
                type="button"
                className={`bf-nav-mobile-link ${path === link.to ? "is-active" : ""}`}
                onClick={() => go(link.to)}
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              className="bf-nav-mobile-cta"
              onClick={() => {
                setMenuOpen(false);
                onOpenModal();
              }}
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={15} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{styles}</style>
    </header>
  );
}

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@700;800;900&family=Inter:wght@500;600;700;800&display=swap');

  .bf-nav-root {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background: transparent;
    border-bottom: 1px solid transparent;
    transition: background 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s ease;
  }

  .bf-nav-root.is-scrolled {
    background: rgba(6, 5, 9, 0.82);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(14px);
  }

  .bf-nav-inner {
    max-width: 1400px;
    margin: 0 auto;
    padding: 16px clamp(20px, 4vw, 56px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  .bf-nav-logo {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: none;
    border: 0;
    padding: 0;
    cursor: pointer;
  }

  .bf-nav-logo img {
    width: 30px;
    height: 30px;
    object-fit: contain;
  }

  .bf-nav-logo span {
    font-family: "Outfit", "Inter", sans-serif;
    font-size: 1.05rem;
    font-weight: 800;
    letter-spacing: -0.01em;
    color: #FFFFFF;
  }

  .bf-nav-links {
    display: flex;
    align-items: center;
    gap: clamp(20px, 2.5vw, 36px);
  }

  .bf-nav-link {
    position: relative;
    background: none;
    border: 0;
    padding: 6px 0;
    font-family: "Inter", sans-serif;
    font-size: 0.9rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.65);
    cursor: pointer;
    transition: color 0.25s ease;
  }

  .bf-nav-link::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    border-radius: 999px;
    background: #EF4136;
    transform: scaleX(0);
    transform-origin: left center;
    transition: transform 0.3s ease;
  }

  .bf-nav-link:hover {
    color: #FFFFFF;
  }

  .bf-nav-link.is-active {
    color: #FFFFFF;
  }

  .bf-nav-link.is-active::after {
    transform: scaleX(1);
  }

  .bf-nav-actions {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .bf-nav-cta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 18px;
    background: #EF4136;
    color: #FFFFFF;
    border: 0;
    border-radius: 999px;
    font-family: "Inter", sans-serif;
    font-size: 0.82rem;
    font-weight: 800;
    letter-spacing: 0.02em;
    cursor: pointer;
    transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
  }

  .bf-nav-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(239, 65, 54, 0.35);
  }

  .bf-nav-burger {
    display: none;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 12px;
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    cursor: pointer;
  }

  .bf-nav-mobile {
    overflow: hidden;
    background: rgba(6, 5, 9, 0.97);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(14px);
  }

  .bf-nav-mobile-link,
  .bf-nav-mobile-cta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 16px clamp(20px, 6vw, 40px);
    background: none;
    border: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.06);
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.75);
    cursor: pointer;
    text-align: left;
  }

  .bf-nav-mobile-link.is-active {
    color: #EF4136;
  }

  .bf-nav-mobile-cta {
    color: #EF4136;
    gap: 8px;
  }

  @media (max-width: 760px) {
    .bf-nav-links {
      display: none;
    }

    .bf-nav-cta {
      display: none;
    }

    .bf-nav-burger {
      display: inline-flex;
    }
  }
`;
