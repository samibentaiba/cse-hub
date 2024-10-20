// Cmntr.jsx
import React, { useEffect, useState } from "react";

const Cmntr = ({ name, comment, type }) => {
  const [zoomLevel, setZoomLevel] = useState(window.devicePixelRatio || 1);

  // Effect to detect zoom level changes
  useEffect(() => {
    const updateZoomLevel = () => {
      const zoom = window.devicePixelRatio;
      setZoomLevel(zoom);
    };

    window.addEventListener("resize", updateZoomLevel);
    updateZoomLevel(); // Set initial zoom level

    return () => {
      window.removeEventListener("resize", updateZoomLevel);
    };
  }, []);

  const calculateSize = (baseSize) => baseSize / zoomLevel;

  return (
    <div
      style={{
        height: `${calculateSize(5)}rem`,
        display: "flex",
        padding: "var(--Spacing-M, 24px) var(--Spacing-S, 16px)",
        justifyContent: "center",
        alignItems: "center",
         borderRadius: "0 0 var(--Spacing-S, 16px) var(--Spacing-S, 16px)",
        background: "var(--light-blue-accent, #6679CC)",
        alignSelf: "stretch",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "var(--Spacing-S, 16px)",
          flex: "1 0 0",
        }}
      >
        <h6
          style={{
            color: "var(--light-blue-text, #0A0A0F)",
            alignSelf: "stretch",
            fontFamily: "'Space Grotesk'",
            fontSize: "150%",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "133.333%",
          }}
        >
          {name}
        </h6>
        <p
          style={{
            color: "var(--light-blue-text, #0A0A0F)",
            fontFamily: "var(--Text-font-family, 'Space Grotesk')",
            fontSize: "120%",
            fontWeight: "400",
            lineHeight: "125%",
            fontStyle: "normal",
            width:"100%",
          }}
        >
          {comment}
        </p>
      </div>
    </div>
  );
};

export default Cmntr;
