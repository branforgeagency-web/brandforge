import React, { useState, useEffect, useRef } from 'react';

// Custom Hook for Count Up Animation
function useCountUp(end = 20, duration = 2000, startDelay = 1200) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrame = null;

    const timer = setTimeout(() => {
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        // easeOutCubic
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(easeProgress * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(step);
        } else {
          setCount(end);
        }
      };
      animationFrame = requestAnimationFrame(step);
    }, startDelay);

    return () => {
      clearTimeout(timer);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [end, duration, startDelay]);

  return count;
}

// Typewriter Heading Component
function TypewriterHeading({ text, splitIndex = 67, onComplete }) {
  const [displayedLength, setDisplayedLength] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let timeout;
    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayedLength((prev) => {
          if (prev < text.length) {
            return prev + 1;
          } else {
            clearInterval(interval);
            setIsTypingComplete(true);
            if (onComplete) onComplete();
            return prev;
          }
        });
      }, 35);
      return () => clearInterval(interval);
    }, 400);

    return () => clearTimeout(startDelay);
  }, [text, onComplete]);

  const typedText = text.slice(0, displayedLength);
  const blackPart = typedText.slice(0, splitIndex);
  const whitePart = typedText.slice(splitIndex);

  return (
    <h1 className="marketeam-heading">
      <span className="text-black">{blackPart}</span>
      <span className="text-white">{whitePart}</span>
      {!isTypingComplete && <span className="typewriter-cursor">|</span>}
    </h1>
  );
}

export default function MarketeamHeroSection() {
  const count = useCountUp(20, 2000, 1200);
  const [typingDone, setTypingDone] = useState(false);

  const navLinks = [
    { name: 'Your Team', href: '#team' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Blog', href: '#blog' },
    { name: 'Pricing', href: '#pricing' },
  ];

  const avatars = [
    {
      url: 'https://polo-pecan-73837341.figma.site/_assets/v11/aa51718fb3af3637e6d666b6543fc27a175fada6.png',
      orbit: 1,
      angle: 270,
      radius: 177,
      size: 58,
      rounded: '20px',
      glow: '0 0 25px rgba(255, 77, 77, 0.6)',
      delay: '0.6s',
    },
    {
      url: 'https://polo-pecan-73837341.figma.site/_assets/v11/ca755f7f93c1126fb8bdbf99ab364a33aa9ab272.png',
      orbit: 2,
      angle: 60,
      radius: 251,
      size: 58,
      rounded: '50%',
      glow: '0 0 25px rgba(255, 184, 0, 0.6)',
      delay: '0.8s',
    },
    {
      url: 'https://polo-pecan-73837341.figma.site/_assets/v11/dc01064c7093dcc32674876ee3cf5e41c4a485c6.png',
      orbit: 2,
      angle: 180,
      radius: 251,
      size: 78,
      rounded: '50%',
      glow: '0 0 25px rgba(255, 77, 77, 0.6)',
      delay: '1.0s',
    },
    {
      url: 'https://polo-pecan-73837341.figma.site/_assets/v11/d5470a58b02388336141575048720f19a50de832.png',
      orbit: 2,
      angle: 300,
      radius: 251,
      size: 58,
      rounded: '20px',
      glow: '0 0 25px rgba(64, 169, 255, 0.6)',
      delay: '1.2s',
    },
    {
      url: 'https://polo-pecan-73837341.figma.site/_assets/v11/018736aa5d0275c4ce56cfebaf2ae3007d81ca1e.png',
      orbit: 3,
      angle: 130,
      radius: 325,
      size: 88,
      rounded: '50%',
      glow: '0 0 25px rgba(255, 77, 77, 0.6)',
      delay: '1.4s',
    },
    {
      url: 'https://polo-pecan-73837341.figma.site/_assets/v11/c76d8a0b99676de31c014344bfaf75bad090758d.png',
      orbit: 4,
      angle: 30,
      radius: 399,
      size: 58,
      rounded: '50%',
      glow: '0 0 25px rgba(160, 104, 255, 0.6)',
      delay: '1.7s',
    },
    {
      url: 'https://polo-pecan-73837341.figma.site/_assets/v11/7b1b5f039de7b54cc9913e96c1923c3b15a157fa.png',
      orbit: 4,
      angle: 95,
      radius: 399,
      size: 88,
      rounded: '24px',
      glow: '0 0 25px rgba(255, 120, 48, 0.6)',
      delay: '1.9s',
    },
    {
      url: 'https://polo-pecan-73837341.figma.site/_assets/v11/9ae171d8895199349755c43fbff00e122221a027.png',
      orbit: 4,
      angle: 220,
      radius: 399,
      size: 88,
      rounded: '24px',
      glow: '0 0 25px rgba(255, 77, 77, 0.6)',
      delay: '2.1s',
    },
    {
      url: 'https://polo-pecan-73837341.figma.site/_assets/v11/926c9eb7b4bc1df846fa0e39f0b0dc3fefd80671.png',
      orbit: 4,
      angle: 320,
      radius: 399,
      size: 58,
      rounded: '50%',
      glow: '0 0 25px rgba(160, 104, 255, 0.6)',
      delay: '2.3s',
    },
  ];

  const logoTickerItems = [
    'https://polo-pecan-73837341.figma.site/_assets/v11/1e7b0e6fcc016cd28aec5c68990118b8c54c35a5.svg',
    'https://polo-pecan-73837341.figma.site/_assets/v11/3eac03c183db2ae080d910159211c14843398b61.svg',
    'https://polo-pecan-73837341.figma.site/_assets/v11/17705a4c0023a0e5a99154dfb10582adbbf4260b.svg',
    'https://polo-pecan-73837341.figma.site/_assets/v11/0e5f442b09dc5c248e3e60d40a65505fb1887228.svg',
    'https://polo-pecan-73837341.figma.site/_assets/v11/63f99030ceb459e3c9ab9e429cfa2353491d3816.svg',
  ];
  // Repeat 4x for smooth infinite loop
  const tickerLogos = [
    ...logoTickerItems,
    ...logoTickerItems,
    ...logoTickerItems,
    ...logoTickerItems,
  ];

  return (
    <div className="marketeam-app relative w-full min-h-screen overflow-hidden flex flex-col justify-between select-none">
      {/* ── STYLES & ANIMATIONS ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Urbanist:wght@500;600;700&display=swap');

        @property --border-angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }

        .marketeam-app {
          font-family: 'Inter', sans-serif;
          background: url('https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260624_111401_56af5012-2263-45d3-849a-8688084d7c2a.png&w=1280&q=85') center center / cover no-repeat;
          background-color: #060218;
          color: #ffffff;
        }

        /* Nav links hover underline */
        .nav-link-item {
          position: relative;
          color: #000000;
          font-size: 15px;
          font-weight: 400;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .nav-link-item::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 100%;
          height: 2px;
          background: #FF4D4D;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .nav-link-item:hover::after {
          transform: scaleX(1);
        }

        .login-link {
          position: relative;
          color: #ffffff;
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .login-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 100%;
          height: 2px;
          background: #ffffff;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .login-link:hover::after {
          transform: scaleX(1);
        }

        /* ROTATING CONIC-GRADIENT BORDER BUTTON WRAPPER */
        .btn-border-wrap {
          position: relative;
          display: inline-block;
          border-radius: 50px;
          padding: 3px;
          background: transparent;
        }
        .btn-border-wrap::before {
          content: "";
          position: absolute;
          inset: -2px;
          border-radius: 50px;
          padding: 2px;
          background: conic-gradient(from var(--border-angle), #FF4D4D, #070319, #A068FF, #070319, #FF4D4D);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: spinBorder 3s linear infinite;
          pointer-events: none;
        }

        @keyframes spinBorder {
          to {
            --border-angle: 360deg;
          }
        }

        /* SLIDING HOVER FILL BUTTONS */
        .btn-join {
          position: relative;
          border-radius: 50px;
          background: #000000;
          color: #ffffff;
          padding: 12px 26px;
          font-size: 15px;
          font-weight: 500;
          border: none;
          overflow: hidden;
          cursor: pointer;
          z-index: 1;
        }
        .btn-join::after {
          content: "";
          position: absolute;
          inset: 0;
          background: #FF4D4D;
          transform: translateX(-100%);
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          z-index: -1;
        }
        .btn-join:hover::after {
          transform: translateX(0);
        }

        .btn-start {
          position: relative;
          border-radius: 50px;
          background: #060218;
          color: #ffffff;
          padding: 14px 28px;
          font-size: 16px;
          font-weight: 500;
          border: none;
          overflow: hidden;
          cursor: pointer;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }
        .btn-start::after {
          content: "";
          position: absolute;
          inset: 0;
          background: #FF4D4D;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          z-index: -1;
        }
        .btn-start:hover::after {
          transform: translateX(0);
        }

        /* TYPEWRITER HEADING STYLES */
        .marketeam-heading {
          font-family: 'Urbanist', sans-serif;
          font-size: 64px;
          font-weight: 600;
          line-height: 64px;
          letter-spacing: -1.5px;
          margin: 0 0 32px 0;
        }

        .typewriter-cursor {
          display: inline-block;
          color: #FF4D4D;
          font-weight: 400;
          margin-left: 2px;
          animation: blinkCursor 0.8s step-start infinite;
        }

        @keyframes blinkCursor {
          50% { opacity: 0; }
        }

        /* HERO ENTRANCE ANIMATIONS */
        .animate-fade-down {
          animation: fadeDown 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-up {
          animation: fadeUp 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-scale-in {
          animation: scaleIn 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.3s forwards;
          opacity: 0;
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.85); }
          to { opacity: 1; transform: scale(1); }
        }

        /* ORBIT ROTATIONS */
        @keyframes spinRight {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spinLeft {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }

        .orbit-spin-ccw-30 { animation: spinLeft 30s linear infinite; }
        .orbit-spin-cw-40 { animation: spinRight 40s linear infinite; }
        .orbit-spin-cw-50 { animation: spinRight 50s linear infinite; }
        .orbit-spin-ccw-60 { animation: spinLeft 60s linear infinite; }

        /* GRADIENT BORDER FOR CONCENTRIC CIRCLES */
        .orbit-border {
          position: absolute;
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border: 1px solid rgba(255, 77, 77, 0.4);
          pointer-events: none;
        }

        /* FLY-IN ANIMATION FOR AVATARS */
        @keyframes avatarFlyIn {
          0% {
            opacity: 0;
            filter: blur(10px);
            transform: translate(-50%, -50%) rotate(var(--angle)) translate(var(--radius)) rotate(calc(-1 * var(--angle))) scale(0.3);
          }
          100% {
            opacity: 1;
            filter: blur(0);
            transform: translate(-50%, -50%) rotate(var(--angle)) translate(var(--radius)) rotate(calc(-1 * var(--angle))) scale(1);
          }
        }

        .avatar-node {
          position: absolute;
          top: 50%;
          left: 50%;
          transform-origin: center center;
          animation: avatarFlyIn 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          opacity: 0;
        }

        /* TICKER SCROLL ANIMATION */
        @keyframes tickerScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .ticker-track {
          display: flex;
          gap: 64px;
          width: max-content;
          animation: tickerScroll 20s linear infinite;
        }

        .ticker-mask {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }

        /* RESPONSIVE SCALING & BREAKPOINTS */
        @media (max-width: 1280px) {
          .circles-container {
            transform: scale(0.85);
          }
        }

        @media (max-width: 1024px) {
          .hero-content-wrap {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .hero-left {
            flex: 1 1 auto;
            max-width: 100%;
            padding-top: 0;
          }
          .marketeam-heading {
            font-size: 48px;
            line-height: 50px;
          }
          .circles-container {
            transform: scale(0.7);
            margin-top: -60px;
          }
          .cursor-badge-wrap {
            margin-left: 0 !important;
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .header-nav-desktop {
            display: none;
          }
          .marketeam-heading {
            font-size: 36px;
            line-height: 40px;
            letter-spacing: -1px;
          }
          .circles-container {
            transform: scale(0.52);
            margin-top: -100px;
          }
          .header-container {
            padding: 16px 24px !important;
          }
        }

        @media (max-width: 480px) {
          .marketeam-heading {
            font-size: 28px;
            line-height: 32px;
          }
          .circles-container {
            transform: scale(0.40);
            margin-top: -140px;
          }
        }
      `}</style>

      {/* ── HEADER ── */}
      <header className="header-container w-full max-w-[1920px] mx-auto flex items-center justify-between px-16 py-6 z-20 animate-fade-down">
        {/* LEFT LOGO & NAV */}
        <div className="flex items-center gap-12">
          <a href="#" className="flex items-center gap-3 text-white text-xl font-bold tracking-tight text-decoration-none">
            <img
              src="https://polo-pecan-73837341.figma.site/_assets/v11/17ae538989a509947a8de3892c644664895e69b1.png"
              alt="Marketeam / BrandForge Logo"
              className="h-8 object-contain"
            />
          </a>

          <nav className="header-nav-desktop flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link-item">
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* RIGHT LOGIN & JOIN NOW */}
        <div className="flex items-center gap-6">
          <a href="#login" className="login-link">
            Log In
          </a>

          <div className="btn-border-wrap">
            <button className="btn-join" type="button">
              Join Now
            </button>
          </div>
        </div>
      </header>

      {/* ── HERO MAIN SECTION ── */}
      <main className="hero-content-wrap max-w-[1920px] mx-auto w-full px-6 lg:px-16 flex items-center justify-between flex-1 relative z-10 py-6">
        {/* HERO LEFT */}
        <div className="hero-left max-w-[600px] pt-10 animate-fade-up">
          <TypewriterHeading
            text="Unlock Top Marketing Talent You Thought Was Out of Reach -- Now Just One Click Away!"
            splitIndex={67}
            onComplete={() => setTypingDone(true)}
          />

          {/* START PROJECT BUTTON */}
          <div className="mb-8">
            <div className="btn-border-wrap">
              <button className="btn-start" type="button">
                <span>Start Project</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* FLOATING CURSOR BADGE */}
          <div
            className="cursor-badge-wrap flex items-center gap-2 mt-10 ml-[290px] animate-fade-up"
            style={{ animationDelay: '3.6s' }}
          >
            {/* PURPLE/RED SVG POINTER ARROW */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#FF4D4D"
              className="drop-shadow-lg"
            >
              <path d="M3 3l7 18 3-7 7-3L3 3z" />
            </svg>
            <span className="bg-[#FF4D4D] text-white text-base font-medium px-4 py-2 rounded-[20px] shadow-xl">
              David · Growth Lead
            </span>
          </div>
        </div>

        {/* HERO RIGHT -- CIRCLES VISUALIZATION */}
        <div className="hero-right flex-1 flex justify-center items-center relative animate-scale-in">
          <div className="circles-container relative w-[720px] h-[720px] flex items-center justify-center">

            {/* ORBIT 1 (INNERMOST - 353px) */}
            <div className="orbit-border w-[353px] h-[353px] orbit-spin-ccw-30" />

            {/* ORBIT 2 (501px) */}
            <div className="orbit-border w-[501px] h-[501px] orbit-spin-cw-40" />

            {/* ORBIT 3 (649px) */}
            <div className="orbit-border w-[649px] h-[649px] orbit-spin-cw-50" />

            {/* ORBIT 4 (OUTERMOST - 797px) */}
            <div className="orbit-border w-[797px] h-[797px] orbit-spin-ccw-60" />

            {/* CENTER CIRCLE (COUNT-UP 20k+ / SPECIALISTS) */}
            <div className="absolute w-[180px] h-[180px] rounded-full bg-[#070319]/90 border border-[#FF4D4D]/40 backdrop-blur-md flex flex-col items-center justify-center text-center shadow-2xl z-20">
              <span className="font-['Urbanist'] text-[56px] font-medium leading-none text-white tracking-tight">
                {count}k+
              </span>
              <span className="font-['Urbanist'] text-[15px] font-semibold text-[#FF4D4D] tracking-wide uppercase mt-1">
                Specialists
              </span>
            </div>

            {/* AVATAR NODES ON ORBITS */}
            {avatars.map((av, idx) => (
              <div
                key={idx}
                className="avatar-node z-30"
                style={{
                  '--angle': `${av.angle}deg`,
                  '--radius': `${av.radius}px`,
                  animationDelay: av.delay,
                  transform: `translate(-50%, -50%) rotate(${av.angle}deg) translate(${av.radius}px) rotate(-${av.angle}deg)`,
                }}
              >
                <div
                  className="relative overflow-hidden transition-transform duration-300 hover:scale-110 cursor-pointer"
                  style={{
                    width: `${av.size}px`,
                    height: `${av.size}px`,
                    borderRadius: av.rounded,
                    boxShadow: av.glow,
                    border: '2px solid rgba(255, 255, 255, 0.8)',
                  }}
                >
                  <img
                    src={av.url}
                    alt="Talent Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* ── LOGO TICKER (BOTTOM) ── */}
      <footer className="w-full py-6 z-20 border-t border-white/10 overflow-hidden ticker-mask animate-fade-up" style={{ animationDelay: '0.6s' }}>
        <div className="max-w-[1920px] mx-auto px-6">
          <div className="overflow-hidden">
            <div className="ticker-track items-center">
              {tickerLogos.map((logoUrl, i) => (
                <img
                  key={i}
                  src={logoUrl}
                  alt="Partner Logo"
                  className="w-[137px] h-[40px] object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
