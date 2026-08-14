import React, { useState } from 'react';
import {
  Search,
  User,
  Menu,
  X,
  Star,
  Clock,
  Calendar,
  Play,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

export default function CinematicHeroSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    'Movies',
    'TV Series',
    "Editor's Pick",
    'Interviews',
    'User Reviews',
  ];

  return (
    <section className="relative w-full h-screen min-h-[650px] overflow-hidden bg-black text-white font-sans flex flex-col select-none">
      {/* ── STYLES FOR LIQUID GLASS & BLUR-FADE-UP ANIMATION ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        .cinematic-root {
          font-family: 'Inter', sans-serif;
        }

        /* LIQUID GLASS EFFECT */
        .liquid-glass {
          background: rgba(255, 255, 255, 0.01);
          background-blend-mode: luminosity;
          -webkit-backdrop-filter: blur(4px);
          backdrop-filter: blur(4px);
          border: none;
          box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .liquid-glass::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1.4px;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.45) 0%,
            rgba(255, 255, 255, 0.15) 20%,
            rgba(255, 255, 255, 0) 40%,
            rgba(255, 255, 255, 0) 60%,
            rgba(255, 255, 255, 0.15) 80%,
            rgba(255, 255, 255, 0.45) 100%
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .liquid-glass:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-1px);
        }

        /* BLUR-FADE-UP KEYFRAME */
        @keyframes blurFadeUp {
          from {
            opacity: 0;
            filter: blur(20px);
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            filter: blur(0);
            transform: translateY(0);
          }
        }

        .animate-blur-fade-up {
          opacity: 0;
          animation: blurFadeUp 1s ease-out forwards;
        }

        /* MASK FOR BOTTOM BLUR OVERLAY */
        .bottom-blur-mask {
          -webkit-mask-image: linear-gradient(to top, black 0%, transparent 45%);
          mask-image: linear-gradient(to top, black 0%, transparent 45%);
        }
      `}</style>

      {/* ── BACKGROUND VIDEO ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4"
          type="video/mp4"
        />
      </video>

      {/* ── BOTTOM BLUR OVERLAY (NO DARK GRADIENT) ── */}
      <div className="absolute inset-0 pointer-events-none z-10 backdrop-blur-xl bottom-blur-mask" />

      {/* ── NAVBAR ── */}
      <header className="relative z-50 px-4 sm:px-6 md:px-12 py-4 md:py-6 flex items-center justify-between cinematic-root">
        {/* LOGO */}
        <div
          className="h-8 md:h-10 flex items-center text-xl md:text-2xl font-bold tracking-wider text-white animate-blur-fade-up"
          style={{ animationDelay: '0ms' }}
        >
          CINEMATIC
        </div>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              className="text-sm text-white/80 hover:text-white transition-colors duration-200 animate-blur-fade-up font-medium"
              style={{ animationDelay: `${100 + idx * 50}ms` }}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* RIGHT BUTTONS */}
        <div className="flex items-center gap-3">
          {/* SEARCH BUTTON */}
          <button
            type="button"
            className="hidden sm:inline-flex items-center gap-2.5 rounded-full liquid-glass px-4 md:px-6 py-2 text-sm text-white font-medium animate-blur-fade-up cursor-pointer"
            style={{ animationDelay: '350ms' }}
          >
            <Search size={18} />
            <span>Search</span>
          </button>

          {/* USER BUTTON */}
          <button
            type="button"
            className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-full liquid-glass text-white animate-blur-fade-up cursor-pointer"
            style={{ animationDelay: '400ms' }}
            aria-label="User profile"
          >
            <User size={18} />
          </button>

          {/* HAMBURGER BUTTON (Mobile / Tablet below LG) */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full liquid-glass text-white animate-blur-fade-up cursor-pointer"
            style={{ animationDelay: '350ms' }}
            aria-label="Toggle menu"
          >
            <div
              className={`transition-all duration-500 ease-out transform ${
                isMobileMenuOpen
                  ? 'rotate-180 scale-100 opacity-100'
                  : 'rotate-0 scale-100 opacity-100'
              }`}
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </div>
          </button>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        <div
          className={`absolute top-[72px] left-4 right-4 sm:left-6 sm:right-6 lg:hidden z-40 transition-all duration-500 ease-out transform ${
            isMobileMenuOpen
              ? 'translate-y-0 opacity-100 pointer-events-auto'
              : '-translate-y-4 opacity-0 pointer-events-none'
          }`}
        >
          <div className="bg-gray-900/95 backdrop-blur-lg border border-gray-800/80 rounded-2xl p-4 shadow-2xl flex flex-col gap-1">
            {navLinks.map((link, idx) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-3 px-4 rounded-xl hover:bg-gray-800/60 text-white font-medium text-sm transition-colors"
                style={{
                  transitionDelay: `${idx * 40}ms`,
                }}
              >
                {link}
              </a>
            ))}

            {/* Mobile search & profile buttons below SM */}
            <div className="sm:hidden border-t border-gray-800 pt-3 mt-1 flex items-center justify-between px-2">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full liquid-glass px-4 py-2 text-xs text-white font-medium"
              >
                <Search size={16} />
                <span>Search</span>
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full liquid-glass text-white"
                aria-label="User profile"
              >
                <User size={16} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── HERO CONTENT (BOTTOM OF VIEWPORT) ── */}
      <div className="relative z-20 flex-1 flex flex-col justify-end px-4 sm:px-6 md:px-12 pb-8 md:pb-16 cinematic-root">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          {/* LEFT SIDE CONTENT */}
          <div className="flex-1 max-w-3xl">
            {/* METADATA ROW */}
            <div
              className="flex flex-wrap items-center gap-3 sm:gap-6 mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm text-white/90 animate-blur-fade-up font-medium"
              style={{ animationDelay: '300ms' }}
            >
              <div className="flex items-center gap-1.5">
                <Star size={16} className="fill-white text-white sm:w-5 sm:h-5" />
                <span className="font-medium">8.7/10 IMDB</span>
              </div>

              <span className="w-1 h-1 rounded-full bg-white/40" />

              <div className="flex items-center gap-1.5">
                <Clock size={16} className="text-white/80" />
                <span>132 min</span>
              </div>

              <span className="w-1 h-1 rounded-full bg-white/40" />

              <div className="flex items-center gap-1.5">
                <Calendar size={16} className="text-white/80" />
                <span>April, 2025</span>
              </div>
            </div>

            {/* TITLE */}
            <h1
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-[-0.04em] text-white mb-4 md:mb-6 animate-blur-fade-up leading-[1.1]"
              style={{ animationDelay: '400ms' }}
            >
              Step Through. Work Smarter.
            </h1>

            {/* DESCRIPTION */}
            <p
              className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 md:mb-12 max-w-2xl animate-blur-fade-up font-normal leading-relaxed"
              style={{ animationDelay: '500ms' }}
            >
              A voyage through forgotten realms, where past and future intertwine.
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {/* WATCH NOW */}
              <button
                type="button"
                className="bg-white text-black rounded-full font-medium px-6 sm:px-8 py-2.5 sm:py-3 flex items-center gap-2.5 hover:bg-gray-200 transition-colors text-sm sm:text-base animate-blur-fade-up cursor-pointer"
                style={{ animationDelay: '600ms' }}
              >
                <Play size={18} className="fill-black text-black" />
                <span>Watch Now</span>
              </button>

              {/* LEARN MORE */}
              <button
                type="button"
                className="rounded-full font-medium liquid-glass px-6 sm:px-8 py-2.5 sm:py-3 text-white text-sm sm:text-base animate-blur-fade-up cursor-pointer"
                style={{ animationDelay: '700ms' }}
              >
                Learn More
              </button>
            </div>
          </div>

          {/* RIGHT SIDE NAVIGATION ARROWS */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <button
              type="button"
              className="rounded-full liquid-glass px-4 sm:px-6 py-2.5 sm:py-3 text-white flex items-center gap-2 animate-blur-fade-up text-sm font-medium cursor-pointer"
              style={{ animationDelay: '800ms' }}
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
              <span className="hidden sm:inline">Previous</span>
            </button>

            <button
              type="button"
              className="rounded-full liquid-glass px-4 sm:px-6 py-2.5 sm:py-3 text-white flex items-center gap-2 animate-blur-fade-up text-sm font-medium cursor-pointer"
              style={{ animationDelay: '900ms' }}
              aria-label="Next"
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
