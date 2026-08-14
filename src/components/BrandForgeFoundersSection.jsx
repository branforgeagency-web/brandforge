import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HEADING_WORDS = ["Who", "We", "Are"];

const FOUNDERS = [
  {
    photo: "/team-balamurali.png",
    role: "Founder & MD",
    name: "Mr. BalaMurali",
    side: "left",
  },
  {
    photo: "/team-banumathy.png",
    role: "Founder & CEO",
    name: "Ms. Banumathy",
    side: "right",
  },
];

export default function BrandForgeFoundersSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 20,
    restDelta: 0.001,
  });

  // Rise up from behind the name tag as the section scrolls into view,
  // then settle into a slow opposite-direction drift for the rest of the scroll.
  const leftPhotoY = useTransform(smoothProgress, [0, 0.45, 1], ["62%", "0%", "-6%"]);
  const rightPhotoY = useTransform(smoothProgress, [0, 0.45, 1], ["62%", "0%", "6%"]);

  const glowScale = useTransform(smoothProgress, [0, 0.5, 1], [0.85, 1.15, 0.85]);

  // Extra scroll-driven motion for the centre content
  const contentY = useTransform(smoothProgress, [0, 1], ["36px", "-36px"]);
  const badgeScale = useTransform(smoothProgress, [0, 0.14], [0.7, 1]);
  const cueOpacity = useTransform(smoothProgress, [0, 0.55, 0.82], [1, 1, 0]);

  return (
    <section ref={containerRef} className="bf-founders-root" id="who-we-are">
      <motion.div className="bf-founders-glow-a" style={{ scale: glowScale }} aria-hidden="true" />
      <div className="bf-founders-glow-b" aria-hidden="true" />

      <div className="bf-founders-stage">
        {/* ── Left founder ── */}
        <div className="bf-founder-col bf-founder-col-left">
          <div className="bf-founder-frame">
            <motion.div
              className="bf-founder-photo"
              style={{ y: leftPhotoY }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <img src={FOUNDERS[0].photo} alt={`${FOUNDERS[0].name} — ${FOUNDERS[0].role} of BrandForge`} />
            </motion.div>
          </div>

          <motion.div
            className="bf-founder-caption"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>{FOUNDERS[0].name}</h3>
            <span className="bf-founder-role">{FOUNDERS[0].role}</span>
          </motion.div>
        </div>

        {/* ── Centre content ── */}
        <motion.div className="bf-founders-content" style={{ y: contentY }}>
          <motion.div
            className="bf-founders-badge"
            style={{ scale: badgeScale }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bf-founders-dot" />
            <span>Our Founders</span>
          </motion.div>

          <h2 className="bf-founders-heading">
            {HEADING_WORDS.map((word, i) => (
              <RevealWord
                key={word}
                progress={smoothProgress}
                range={[0.02 + i * 0.06, 0.12 + i * 0.06]}
              >
                {word}
              </RevealWord>
            ))}
          </h2>

          <div className="bf-founders-rule" aria-hidden="true">
            <motion.div className="bf-founders-rule-fill" style={{ scaleX: smoothProgress }} />
          </div>

          <div className="bf-founders-intro">
            <RevealLine progress={smoothProgress} range={[0.2, 0.34]}>
              BrandForge exists because two operators got tired of agencies that pitch big and deliver slow.
            </RevealLine>
            <RevealLine progress={smoothProgress} range={[0.3, 0.44]}>
              <strong>Mr. BalaMurali</strong>, Founder &amp; MD, leads the strategy and delivery engine —
              turning ambitious growth targets into structured, execution-ready roadmaps and staying
              hands-on with every client engagement.
            </RevealLine>
            <RevealLine progress={smoothProgress} range={[0.4, 0.54]}>
              <strong>Ms. Banumathy</strong>, Founder &amp; CEO, sets the vision and builds the relationships
              that keep BrandForge client-first, making sure every partnership runs on transparency,
              momentum, and measurable outcomes.
            </RevealLine>
            <RevealLine progress={smoothProgress} range={[0.5, 0.62]}>
              Together, they built this agency to pair sharp strategy with execution that actually ships,
              so every brand we touch grows faster than the market around it.
            </RevealLine>
          </div>

          <motion.div className="bf-scroll-cue" style={{ opacity: cueOpacity }}>
            <motion.span
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown size={22} />
            </motion.span>
          </motion.div>
        </motion.div>

        {/* ── Right founder ── */}
        <div className="bf-founder-col bf-founder-col-right">
          <div className="bf-founder-frame">
            <motion.div
              className="bf-founder-photo"
              style={{ y: rightPhotoY }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <img src={FOUNDERS[1].photo} alt={`${FOUNDERS[1].name} — ${FOUNDERS[1].role} of BrandForge`} />
            </motion.div>
          </div>

          <motion.div
            className="bf-founder-caption"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>{FOUNDERS[1].name}</h3>
            <span className="bf-founder-role">{FOUNDERS[1].role}</span>
          </motion.div>
        </div>
      </div>

      <style>{styles}</style>
    </section>
  );
}

/* ─── Scroll-driven word reveal for the heading ─── */
function RevealWord({ progress, range, children }) {
  const opacity = useTransform(progress, range, [0, 1]);
  const y = useTransform(progress, range, [30, 0]);
  const scale = useTransform(progress, range, [0.85, 1]);

  return (
    <motion.span className="bf-heading-word" style={{ opacity, y, scale }}>
      {children}
    </motion.span>
  );
}

/* ─── Scroll-driven sentence reveal for the paragraph ─── */
function RevealLine({ progress, range, children }) {
  const opacity = useTransform(progress, range, [0, 1]);
  const y = useTransform(progress, range, [26, 0]);

  return (
    <motion.p style={{ opacity, y }}>
      {children}
    </motion.p>
  );
}

/* ─── STYLES ────────────────────────────────────────────────────── */
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@700;800;900&family=Inter:wght@400;500;600;700;800&display=swap');

  .bf-founders-root {
    --bg: #060509;
    --red: #EF4136;
    --white: #FFFFFF;
    --muted: rgba(255, 255, 255, 0.55);
    --line: rgba(255, 255, 255, 0.08);

    position: relative;
    width: 100%;
    min-height: 100svh;
    background: var(--bg);
    display: flex;
    align-items: center;
    padding: clamp(70px, 9vw, 120px) 0;
    overflow: hidden;
    isolation: isolate;
  }

  .bf-founders-glow-a {
    position: absolute;
    top: 8%;
    left: 50%;
    transform: translateX(-50%);
    width: 640px;
    height: 640px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(239, 65, 54, 0.14), transparent 70%);
    filter: blur(90px);
    z-index: 0;
    pointer-events: none;
  }

  .bf-founders-glow-b {
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    background:
      radial-gradient(ellipse at 4% 90%, rgba(239, 65, 54, 0.08), transparent 32%),
      radial-gradient(ellipse at 96% 10%, rgba(239, 65, 54, 0.08), transparent 32%);
  }

  .bf-founders-stage {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 clamp(20px, 4vw, 56px);
    display: grid;
    grid-template-columns: minmax(160px, 0.62fr) minmax(360px, 1fr) minmax(160px, 0.62fr);
    align-items: end;
    gap: clamp(16px, 2.5vw, 40px);
  }

  /* ── Founder column (photo + caption) ── */
  .bf-founder-col {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* Clips the rise so the photo appears to emerge upward from behind the tag */
  .bf-founder-frame {
    position: relative;
    z-index: 1;
    width: 100%;
    height: clamp(300px, 44vw, 520px);
    overflow: hidden;
  }

  .bf-founder-photo {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    will-change: transform;
  }

  .bf-founder-photo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: bottom;
    filter: drop-shadow(0 30px 40px rgba(0, 0, 0, 0.55));
  }

  /* Sits in front of and overlaps the frame, so the photo rises from behind it */
  .bf-founder-caption {
    position: relative;
    z-index: 3;
    text-align: center;
    margin-top: -46px;
    padding: 12px 26px 14px;
    background: #0B0B0C;
    border: 1px solid var(--line);
    border-radius: 18px;
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.45);
  }

  .bf-founder-caption h3 {
    font-family: "Outfit", "Inter", sans-serif;
    font-size: clamp(1.05rem, 1.5vw, 1.3rem);
    font-weight: 800;
    color: var(--white);
    letter-spacing: -0.01em;
    margin: 0;
  }

  .bf-founder-role {
    display: inline-block;
    margin-top: 4px;
    font-family: "Inter", sans-serif;
    font-size: 10.5px;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--red);
  }

  /* ── Centre content ── */
  .bf-founders-content {
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: clamp(6px, 1vw, 10px);
  }

  .bf-founders-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 18px;
    background: rgba(239, 65, 54, 0.1);
    border: 1px solid rgba(239, 65, 54, 0.3);
    border-radius: 999px;
    font-family: "Inter", sans-serif;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.16em;
    color: var(--red);
    text-transform: uppercase;
    margin-bottom: clamp(18px, 2.5vw, 26px);
  }

  .bf-founders-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--red);
    box-shadow: 0 0 8px var(--red);
  }

  .bf-founders-heading {
    font-family: "Outfit", "Inter", sans-serif;
    font-size: clamp(2.2rem, 4.4vw, 3.8rem);
    font-weight: 900;
    line-height: 1.05;
    letter-spacing: -0.03em;
    color: var(--white);
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0 0.32em;
  }

  .bf-heading-word {
    display: inline-block;
    will-change: transform, opacity;
  }

  /* Scroll-progress rule under the heading */
  .bf-founders-rule {
    width: min(220px, 60%);
    height: 3px;
    margin: clamp(18px, 2.5vw, 26px) 0 clamp(22px, 3vw, 32px);
    background: rgba(255, 255, 255, 0.1);
    border-radius: 999px;
    overflow: hidden;
  }

  .bf-founders-rule-fill {
    width: 100%;
    height: 100%;
    transform-origin: left center;
    background: linear-gradient(90deg, var(--red), #ffb199);
  }

  .bf-founders-intro {
    max-width: 700px;
    font-family: "Inter", sans-serif;
    font-size: clamp(0.95rem, 1.2vw, 1.1rem);
    line-height: 1.85;
    color: var(--muted);
    margin: 0 0 clamp(24px, 3.5vw, 36px);
  }

  .bf-founders-intro p {
    margin: 0 0 12px;
    will-change: transform, opacity;
  }

  .bf-founders-intro p:last-child {
    margin-bottom: 0;
  }

  .bf-founders-intro strong {
    color: var(--white);
    font-weight: 700;
  }

  /* ── Scroll cue ── */
  .bf-scroll-cue {
    display: flex;
    justify-content: center;
    color: rgba(255, 255, 255, 0.4);
  }

  /* ── Responsive ── */
  @media (max-width: 980px) {
    .bf-founders-stage {
      grid-template-columns: 1fr;
    }

    .bf-founder-frame {
      height: clamp(220px, 62vw, 320px);
    }

    .bf-founders-content {
      order: 3;
      margin-top: clamp(24px, 6vw, 40px);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .bf-founder-photo {
      transform: none !important;
    }
  }
`;
