import React, { useEffect, useState, useRef } from "react";

const PARTICLE_COLORS = [
  { r: 239, g: 65,  b: 54  }, // Crimson Red
  { r: 255, g: 77,  b: 77  }, // Electric Red
  { r: 255, g: 255, b: 255 }, // White
  { r: 191, g: 52,  b: 43  }, // Deep Crimson
];

function KexsioCanvasBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    let animationFrameId = 0;
    let particles = [];
    let canvasWidth = 0;
    let canvasHeight = 0;
    let pixelRatio = 1;

    const mouse = {
      x: null,
      y: null,
      radius: 190,
    };

    class Particle {
      constructor(x, y, velocityX, velocityY, size, color) {
        this.x = x;
        this.y = y;
        this.velocityX = velocityX;
        this.velocityY = velocityY;
        this.size = size;
        this.color = color;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

        const particleGlow = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.size * 4,
        );

        particleGlow.addColorStop(
          0,
          `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 1)`,
        );

        particleGlow.addColorStop(
          0.35,
          `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0.75)`,
        );

        particleGlow.addColorStop(
          1,
          `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`,
        );

        ctx.fillStyle = particleGlow;
        ctx.fill();
      }

      update() {
        if (this.x >= canvasWidth || this.x <= 0) {
          this.velocityX *= -1;
        }

        if (this.y >= canvasHeight || this.y <= 0) {
          this.velocityY *= -1;
        }

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance > 0 && distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            const forceX = dx / distance;
            const forceY = dy / distance;

            this.x -= forceX * force * 4.5;
            this.y -= forceY * force * 4.5;
          }
        }

        this.x += this.velocityX;
        this.y += this.velocityY;

        this.draw();
      }
    }

    const createParticles = () => {
      particles = [];

      const responsiveDivider = canvasWidth < 768 ? 15000 : 10500;
      const particleCount = Math.min(
        165,
        Math.max(
          45,
          Math.floor((canvasWidth * canvasHeight) / responsiveDivider),
        ),
      );

      for (let index = 0; index < particleCount; index += 1) {
        const size = Math.random() * 1.8 + 0.9;
        const x = Math.random() * canvasWidth;
        const y = Math.random() * canvasHeight;
        const velocityX = Math.random() * 0.42 - 0.21;
        const velocityY = Math.random() * 0.42 - 0.21;

        const color =
          PARTICLE_COLORS[
            Math.floor(Math.random() * PARTICLE_COLORS.length)
          ];

        particles.push(
          new Particle(
            x,
            y,
            velocityX,
            velocityY,
            size,
            color,
          ),
        );
      }
    };

    const resizeCanvas = () => {
      if (!canvas.parentElement) return;
      const parent = canvas.parentElement;
      canvasWidth = parent.offsetWidth;
      canvasHeight = parent.offsetHeight;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = canvasWidth * pixelRatio;
      canvas.height = canvasHeight * pixelRatio;

      canvas.style.width = `${canvasWidth}px`;
      canvas.style.height = `${canvasHeight}px`;

      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      createParticles();
    };

    const connectParticles = () => {
      const maxDistance = canvasWidth < 768 ? 105 : 145;
      const maxDistanceSquared = maxDistance * maxDistance;

      for (let a = 0; a < particles.length; a += 1) {
        for (let b = a + 1; b < particles.length; b += 1) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distanceSquared = dx * dx + dy * dy;

          if (distanceSquared > maxDistanceSquared) continue;

          const opacity =
            0.58 * (1 - distanceSquared / maxDistanceSquared);

          const startColor = particles[a].color;
          const endColor = particles[b].color;

          const lineGradient = ctx.createLinearGradient(
            particles[a].x,
            particles[a].y,
            particles[b].x,
            particles[b].y,
          );

          lineGradient.addColorStop(
            0,
            `rgba(${startColor.r}, ${startColor.g}, ${startColor.b}, ${opacity})`,
          );

          lineGradient.addColorStop(
            1,
            `rgba(${endColor.r}, ${endColor.g}, ${endColor.b}, ${opacity})`,
          );

          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.strokeStyle = lineGradient;
          ctx.lineWidth = 0.85;
          ctx.stroke();
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      particles.forEach((particle) => {
        particle.update();
      });

      connectParticles();

      animationFrameId = window.requestAnimationFrame(animate);
    };

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.cancelAnimationFrame(animationFrameId);

      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="kexsio-canvas"
      aria-hidden="true"
    />
  );
}

const REVIEWS = [
  {
    name: "ThoughtSpace",
    source: "ThoughtSpace Team",
    role: "Coworking & Creative Hub",
    rating: "5.0",
    quote:
      "BrandForge helped us translate the ThoughtSpace experience — train, work, create, grow — into a digital presence that finally feels like our space.",
    logo: "/client-thoughtspace.png",
    cardBg: "#EF4136", // Vibrant Crimson Red Card
    accentColor: "#FFFFFF", // Bold White Speech Bubble Border
  },
  {
    name: "Sonic Prints",
    source: "Sonic Prints Studio",
    role: "Premium Print Studio",
    rating: "4.9",
    quote:
      "Our brand finally looks as sharp as our print work. BrandForge gave Sonic Prints an identity that stands out and holds up across every touchpoint.",
    logo: "/client-sonicprints.png",
    cardBg: "#EF4136", // Vibrant Crimson Red Card
    accentColor: "#FFFFFF", // Bold White Speech Bubble Border
  },
  {
    name: "ThoughtFlows",
    source: "ThoughtFlows Academy",
    role: "Medical Coding Academy",
    rating: "5.0",
    quote:
      "BrandForge helped ThoughtFlows reach more students actively searching for medical coding training, with a brand presence that matches our position as a leading academy.",
    logo: "/client-thoughtflows.png",
    cardBg: "#EF4136", // Vibrant Crimson Red Card
    accentColor: "#FFFFFF", // Bold White Speech Bubble Border
  },
  {
    name: "TalentEra",
    source: "TalentEra Platform",
    role: "Talent Acquisition Platform",
    rating: "5.0",
    quote:
      "BrandForge gave TalentEra a brand that feels like what it promises — a new era of hiring. Clean, confident, and built to help us stand out to every candidate.",
    logo: "/client-talentera.png",
    cardBg: "#EF4136", // Vibrant Crimson Red Card
    accentColor: "#FFFFFF", // Bold White Speech Bubble Border
  },
];

export default function BrandForgeTestimonialsSection({ onOpenModal }) {
  const [active, setActive] = useState(0);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevSlide = () => {
    setActive((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % REVIEWS.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const current = REVIEWS[active];

  return (
    <section className="bf-paperclip-testimonials">
      <style>{styles}</style>
      <KexsioCanvasBackground />
      <div className="kexsio-overlay" />

      {/* Header */}
      <div className="bf-test-header">
        <div className="bf-test-eyebrow">
          <span className="bf-test-dot" /> Client Success Stories
        </div>
        <h2>BRANDS THAT FORGED MARKET DOMINANCE</h2>
        <p>Real quotes from market-leading enterprise clients.</p>
      </div>

      {/* Testimonial Card Stage */}
      <div className="bf-test-stage">
        <div
          className="testimonial"
          style={{
            "--card-bg": current.cardBg,
            "--card-accent": current.accentColor,
          }}
          key={current.name}
        >
          <span className="open quote">“</span>

          <div className="quote-text-wrapper">
            <p>{current.quote}</p>
          </div>

          <div className="image">
            <div className="clip" />
            <div className="polaroid-frame">
              <img src={current.logo} alt={`${current.name} logo`} />
            </div>
          </div>

          <div className="source">
            <div className="rating-stars">
              ★★★★★ <strong>{current.rating}</strong>
            </div>
            <span>{current.source}</span>
          </div>

          <span className="close quote">”</span>
        </div>

        {/* Carousel Navigation Controls */}
        <div className="bf-test-controls">
          <button type="button" className="bf-test-arrow" onClick={prevSlide} aria-label="Previous story">
            ←
          </button>

          <div className="bf-test-dots">
            {REVIEWS.map((rev, idx) => (
              <button
                key={rev.name}
                type="button"
                className={`bf-test-dot-btn ${idx === active ? "is-active" : ""}`}
                style={{ "--dot-accent": rev.accentColor }}
                onClick={() => setActive(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button type="button" className="bf-test-arrow" onClick={nextSlide} aria-label="Next story">
            →
          </button>
        </div>
      </div>

      {/* Footer Call to Action */}
      <div className="bf-test-cta">
        <button type="button" className="bf-cta-primary" onClick={onOpenModal}>
          Start your transformation <span>→</span>
        </button>
      </div>
    </section>
  );
}

const styles = `
  @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@600;700;800;900&family=Inter:wght@400;500;600;700&display=swap");

  .bf-paperclip-testimonials {
    position: relative;
    width: 100%;
    padding: clamp(50px, 6vw, 90px) 20px;
    background: #000000;
    font-family: "Outfit", "Inter", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    color: #FFFFFF;
    isolation: isolate;
  }

  .kexsio-canvas {
    position: absolute;
    inset: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .kexsio-overlay {
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    background:
      radial-gradient(
        circle at center,
        transparent 10%,
        rgba(0, 0, 0, 0.18) 56%,
        rgba(0, 0, 0, 0.72) 100%
      );
  }

  .bf-test-header {
    position: relative;
    z-index: 5;
    text-align: center;
    max-width: 760px;
    margin-bottom: clamp(45px, 6vh, 65px);
  }

  .bf-test-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #EF4136;
    margin-bottom: 12px;
  }

  .bf-test-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #EF4136;
  }

  .bf-test-header h2 {
    margin: 0;
    font-family: "Outfit", sans-serif;
    font-size: clamp(28px, 4vw, 52px);
    font-weight: 900;
    line-height: 0.98;
    letter-spacing: -0.04em;
    color: #FFFFFF;
    text-transform: uppercase;
  }

  .bf-test-header p {
    margin-top: 14px;
    font-size: clamp(14px, 1.2vw, 17px);
    color: rgba(255, 255, 255, 0.6);
    font-weight: 500;
  }

  .bf-test-stage {
    position: relative;
    z-index: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 540px;
  }

  /* ── VIBRANT RED SPEECH BUBBLE POLAROID CARD WITH BOLD WHITE BORDER ── */
  .testimonial {
    width: 490px;
    max-width: 100%;
    min-height: 310px;
    background: #EF4136;
    padding: 2.8em 2.4em 1.8em 2.4em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    box-shadow: 0 20px 45px rgba(0, 0, 0, 0.5);
    border-radius: 16px;
    border: none;
    transition: background 0.5s ease, border-color 0.5s ease;
    animation: cardAppear 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  }

  @keyframes cardAppear {
    from { opacity: 0; transform: translateY(12px) scale(0.98); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }

  .testimonial:after {
    content: "";
    border: 7px solid #FFFFFF;
    border-radius: 44px;
    width: 90%;
    height: 124%;
    position: absolute;
    z-index: 0;
    left: 1.1em;
    top: -1.8em;
    pointer-events: none;
    transition: border-color 0.5s ease;
  }

  .testimonial:before {
    content: "";
    position: absolute;
    bottom: -5.4em;
    left: 4.5em;
    z-index: 1;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 60px 85px 0 0;
    border-color: #FFFFFF transparent transparent transparent;
    transition: border-color 0.5s ease;
  }

  .quote {
    position: absolute;
    font-size: 2.5em;
    width: 38px;
    height: 38px;
    background: #FFFFFF;
    color: #EF4136;
    text-align: center;
    line-height: 1.2;
    z-index: 5;
    transition: background 0.5s ease;
  }

  .quote.open {
    top: 0;
    left: 0;
    border-top-left-radius: 10px;
  }

  .quote.close {
    bottom: 0;
    right: 0;
    border-bottom-right-radius: 10px;
  }

  .quote-text-wrapper {
    position: relative;
    z-index: 2;
    width: 62%;
    min-height: 140px;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  .testimonial p {
    margin: 0;
    font-weight: 600;
    font-size: 0.98rem;
    line-height: 1.55;
    color: rgba(255, 255, 255, 0.95);
    font-family: "Inter", sans-serif;
  }

  .source {
    position: relative;
    z-index: 2;
    width: 100%;
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  /* RATING STARS MATCHING BOLD WHITE THEME */
  .rating-stars {
    color: #FFFFFF;
    font-weight: 900;
    font-size: 1rem;
    letter-spacing: 0.08em;
  }

  .rating-stars strong {
    color: #FFFFFF;
    font-size: 0.95rem;
    margin-left: 5px;
  }

  .source span {
    display: inline-block;
    font-weight: 800;
    font-size: 0.98em;
    color: #FFFFFF;
  }

  .source span:before {
    content: "\\2014 ";
    display: inline;
    margin-right: 4px;
    color: #FFFFFF;
  }

  /* POLAROID FRAME WITH LIGHT BG FOR CLIENT LOGO */
  .image {
    transform: rotate(-5deg);
    position: absolute;
    top: 0.6em;
    right: 1.2em;
    z-index: 4;
    animation: logoCardPopIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
  }

  @keyframes logoCardPopIn {
    0% {
      transform: rotate(-5deg) translateY(35px) scale(1.2);
      opacity: 0;
    }
    100% {
      transform: rotate(-5deg) translateY(0) scale(1);
      opacity: 1;
    }
  }

  .polaroid-frame {
    border: 9px solid #FFFFFF;
    width: 130px;
    height: 130px;
    background: #FFFFFF;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .polaroid-frame img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  /* STRICT CRIMSON RED PAPER CLIP FOR ALL CARDS */
  .clip {
    border: 3px solid #EF4136 !important;
    border-right: none !important;
    height: 72px;
    width: 18px;
    position: absolute;
    right: 32%;
    top: -16%;
    border-radius: 22px;
    z-index: 10;
    filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.4));
    animation: paperClipSnapDown 0.55s cubic-bezier(0.2, 0.8, 0.2, 1.25) 0.22s both;
  }

  @keyframes paperClipSnapDown {
    0% {
      transform: translateY(-48px);
      opacity: 0;
    }
    75% {
      transform: translateY(5px);
      opacity: 1;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .clip:before {
    content: "";
    position: absolute;
    top: -1px;
    right: 0;
    height: 9px;
    width: 14px;
    border: 3px solid #EF4136 !important;
    border-bottom: none !important;
    border-top-left-radius: 22px;
    border-top-right-radius: 22px;
    z-index: 99;
  }

  .clip:after {
    content: "";
    position: absolute;
    bottom: -1px;
    right: 0;
    height: 38px;
    width: 14px;
    border: 3px solid #EF4136 !important;
    border-top: none !important;
    border-bottom-left-radius: 22px;
    border-bottom-right-radius: 22px;
    z-index: 99;
  }

  /* Carousel Controls */
  .bf-test-controls {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 80px;
    z-index: 10;
  }

  .bf-test-arrow {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.08);
    color: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0.15);
    font-size: 18px;
    font-weight: 800;
    cursor: pointer;
    display: grid;
    place-items: center;
    backdrop-filter: blur(12px);
    transition: transform 0.2s, background 0.2s, border-color 0.2s;
  }

  .bf-test-arrow:hover {
    background: #EF4136;
    border-color: #EF4136;
    transform: scale(1.08);
  }

  .bf-test-dots {
    display: flex;
    gap: 8px;
  }

  .bf-test-dot-btn {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    cursor: pointer;
    transition: all 0.3s;
  }

  .bf-test-dot-btn.is-active {
    background: var(--dot-accent, #EF4136);
    transform: scale(1.3);
    box-shadow: 0 0 10px var(--dot-accent, #EF4136);
  }

  .bf-test-cta {
    margin-top: 35px;
  }

  .bf-cta-primary {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 14px 34px;
    border-radius: 999px;
    background: #EF4136;
    color: #ffffff;
    font-weight: 800;
    font-size: 14px;
    border: none;
    cursor: pointer;
    box-shadow: 0 10px 30px rgba(239, 65, 54, 0.4);
    transition: all 0.3s;
  }

  .bf-cta-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 40px rgba(239, 65, 54, 0.6);
  }

  @media (max-width: 640px) {
    .testimonial {
      height: 380px;
      padding: 2.4em 1.5em 1.8em 1.5em;
    }
    .quote-text-wrapper {
      width: 100%;
      height: 150px;
      margin-top: 40px;
    }
    .testimonial p {
      font-size: 0.95rem;
    }
    .source {
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
    }
    .image {
      top: -0.6em;
      right: 0.8em;
    }
    .polaroid-frame {
      width: 95px;
      height: 95px;
    }
    .bf-test-controls {
      margin-top: 65px;
    }
  }
`;
