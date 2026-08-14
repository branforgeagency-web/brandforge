"use client";

import React, { useState, useEffect } from "react";

export default function TypewriterHero({
  prefix = "We shape ",
  words = [
    "Generative Search Supremacy",
    "Sub-Second 3D WebGL Foundries",
    "High-Ticket Paid ROAS Funnels",
    "Viral Creator Brand Networks",
    "Enterprise Digital Revenue",
  ],
  typeSpeed = 70,
  deleteSpeed = 100,
  holdTime = 1500,
  pauseTime = 300,
  cursorChar = "_",
  prefixColor = "#FFFFFF",
  wordColor = "#FF4D4D",
  cursorColor = "#FF4D4D",
  hideCursorWhileTyping = false,
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isHolding, setIsHolding] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const targetWord = words[currentWordIndex];
    let timer;

    if (isHolding) {
      // Hold completed word for holdTime ms (1.5s)
      timer = setTimeout(() => {
        setIsHolding(false);
        setIsDeleting(true);
      }, holdTime);
    } else if (isDeleting) {
      // Delete character by character (100ms per char)
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(targetWord.substring(0, currentText.length - 1));
        }, deleteSpeed);
      } else {
        // Word completely erased -> pause very briefly before typing next word
        timer = setTimeout(() => {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, pauseTime);
      }
    } else {
      // Type character by character (70ms per char)
      if (currentText.length < targetWord.length) {
        timer = setTimeout(() => {
          setCurrentText(targetWord.substring(0, currentText.length + 1));
        }, typeSpeed);
      } else {
        // Word completely typed -> hold for 1.5s
        setIsHolding(true);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, isHolding, currentWordIndex, words, typeSpeed, deleteSpeed, holdTime, pauseTime]);

  // Sharp typewriter-style blinking cursor
  useEffect(() => {
    if (hideCursorWhileTyping && !isHolding) {
      setCursorVisible(false);
      return;
    }

    const blinkInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);

    return () => clearInterval(blinkInterval);
  }, [isHolding, hideCursorWhileTyping]);

  return (
    <section className="typewriter-hero-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;700&display=swap');

        .typewriter-hero-container {
          position: relative;
          width: 100%;
          height: 100svh;
          min-height: 540px;
          background-color: #000000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 clamp(20px, 5vw, 60px);
          overflow: hidden;
          font-family: 'Outfit', 'Plus Jakarta Sans', system-ui, sans-serif;
          user-select: none;
        }

        .typewriter-text-wrapper {
          width: 100%;
          max-width: 1400px;
          text-align: center;
          margin: 0 auto;
          line-height: 1.15;
        }

        .typewriter-sentence {
          font-size: clamp(2.2rem, 6.2vw, 6.2rem);
          font-weight: 400;
          letter-spacing: -0.03em;
          margin: 0;
          display: inline;
          text-wrap: balance;
        }

        .typewriter-prefix {
          color: ${prefixColor};
          font-weight: 400;
        }

        .typewriter-typed-word {
          color: ${wordColor};
          font-weight: 900;
          text-shadow: 0 0 35px rgba(255, 77, 77, 0.45);
        }

        .typewriter-cursor {
          display: inline-block;
          color: ${cursorColor};
          font-weight: 400;
          margin-left: 2px;
          opacity: 1;
          transition: opacity 0.1s steps(2, start);
          text-shadow: 0 0 20px ${cursorColor};
        }

        .typewriter-cursor.hidden {
          opacity: 0;
        }
      `}</style>

      <div className="typewriter-text-wrapper">
        <h1 className="typewriter-sentence">
          <span className="typewriter-prefix">{prefix}</span>
          <span className="typewriter-typed-word">{currentText}</span>
          <span className={`typewriter-cursor ${cursorVisible ? "visible" : "hidden"}`}>
            {cursorChar}
          </span>
        </h1>
      </div>
    </section>
  );
}
