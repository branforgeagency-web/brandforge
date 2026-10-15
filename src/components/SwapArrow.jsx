import React from "react";

export default function SwapArrow({
  dir = "up-right",
  size = 15,
  strokeWidth = 2,
  className = "",
  color = "currentColor",
}) {
  const getTransform = () => {
    switch (dir) {
      case "right":
        return "rotate(45 12 12)";
      case "up":
        return "rotate(-45 12 12)";
      case "left":
        return "rotate(225 12 12)";
      case "up-right":
      default:
        return undefined;
    }
  };

  const getTransitions = () => {
    switch (dir) {
      case "right":
        return {
          out: "translate(100%, 0)",
          in: "translate(-100%, 0)",
        };
      case "up":
        return {
          out: "translate(0, -100%)",
          in: "translate(0, 100%)",
        };
      case "up-right":
      default:
        return {
          out: "translate(100%, -100%)",
          in: "translate(-100%, 100%)",
        };
    }
  };

  const transitions = getTransitions();
  const rotation = getTransform();

  const iconSvg = (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      style={{ width: "100%", height: "100%", display: "block" }}
    >
      <g
        transform={rotation}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 17 17 7" />
        <path d="M8 7h9v9" />
      </g>
    </svg>
  );

  return (
    <span
      className={`bf-swap-arrow-root ${className}`}
      style={{
        display: "inline-grid",
        placeItems: "center",
        position: "relative",
        overflow: "hidden",
        width: `${size}px`,
        height: `${size}px`,
        verticalAlign: "middle",
        flexShrink: 0,
      }}
    >
      <style>{`
        .bf-swap-arrow-icon-a,
        .bf-swap-arrow-icon-b {
          grid-area: 1 / 1;
          width: 100%;
          height: 100%;
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
          line-height: 0;
          display: block;
        }
        .bf-swap-arrow-icon-b {
          transform: ${transitions.in};
        }
        *:hover > * > .bf-swap-arrow-root .bf-swap-arrow-icon-a,
        *:hover > .bf-swap-arrow-root .bf-swap-arrow-icon-a,
        button:hover .bf-swap-arrow-icon-a,
        a:hover .bf-swap-arrow-icon-a {
          transform: ${transitions.out};
        }
        *:hover > * > .bf-swap-arrow-root .bf-swap-arrow-icon-b,
        *:hover > .bf-swap-arrow-root .bf-swap-arrow-icon-b,
        button:hover .bf-swap-arrow-icon-b,
        a:hover .bf-swap-arrow-icon-b {
          transform: translate(0, 0);
        }
      `}</style>
      <span className="bf-swap-arrow-icon-a">{iconSvg}</span>
      <span className="bf-swap-arrow-icon-b">{iconSvg}</span>
    </span>
  );
}
