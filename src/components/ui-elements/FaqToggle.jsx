import React, { useState } from "react";

function FaqToggle({ text, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{
        padding: "var(--md, 16px)",
        borderRadius: "var(--md, 16px)",
        background: "var(--Brand-accent, #6679CC)",
        marginBottom: "8px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3
          style={{
            color: "var(--Neutral-gray-900, #0A0A0F)",
            fontFamily: "'Space Grotesk'",
            fontSize: "24px",
            fontWeight: "700",
            lineHeight: "133.333%",
            letterSpacing: "-0.25px",
            flex: "1",
          }}
        >
          {text}
        </h3>
        <svg
          onClick={toggleOpen}
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          style={{ cursor: "pointer" }}
        >
          <path
            d={
              isOpen
                ? "M7 15.9973H25C25.3536 15.9973 25.6927 16.1378 25.9428 16.3879C26.1928 16.6379 26.3333 16.977 26.3333 17.3307C26.3333 17.6843 26.1928 18.0235 25.9428 18.2735C25.6927 18.5236 25.3536 18.664 25 18.664H7C6.64634 18.664 6.3072 18.5236 6.05715 18.2735C5.8071 18.0235 5.66663 17.6843 5.66663 17.3307C5.66663 16.977 5.8071 16.6379 6.05715 16.3879C6.3072 16.1378 6.64634 15.9973 7 15.9973Z"
                : "M24 17.3307H17.3333V23.9973C17.3333 24.351 17.1928 24.6901 16.9428 24.9401C16.6927 25.1902 16.3536 25.3307 16 25.3307C15.6463 25.3307 15.3072 25.1902 15.0572 24.9401C14.8071 24.6901 14.6666 24.351 14.6666 23.9973V17.3307H7.99996C7.64634 17.3307 7.3072 17.1902 7.05715 16.9401C6.8071 16.6901 6.66663 16.351 6.66663 15.9973C6.66663 15.6437 6.8071 15.3046 7.05715 15.0545C7.3072 14.8045 7.64634 14.664 7.99996 14.664H14.6666V7.99733C14.6666 7.64371 14.8071 7.30457 15.0572 7.05453C15.3072 6.80448 15.6463 6.664 16 6.664C16.3536 6.664 16.6927 6.80448 16.9428 7.05453C17.1928 7.30457 17.3333 7.64371 17.3333 7.99733V14.664H24C24.3536 14.664 24.6927 14.8045 24.9428 15.0545C25.1928 15.3046 25.3333 15.6437 25.3333 15.9973C25.3333 16.351 25.1928 16.6901 24.9428 16.9401C24.6927 17.1902 24.3536 17.3307 24 17.3307Z"
            }
            fill="#0A0A0F"
          />
        </svg>
      </div>
      {isOpen && (
        <p
          style={{
            color: "#0A0A0F",
            fontSize: "16px",
            fontFamily: "'Space Grotesk'",
            marginTop: "12px",
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default FaqToggle;
