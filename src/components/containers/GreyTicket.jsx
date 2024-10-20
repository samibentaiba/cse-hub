import React, { useEffect, useState } from "react";
const GreyTicket = ({ name, icon: Icon, description, type }) => {
  // State to handle zoom level
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

  // Adjust size based on zoom level
  const calculateSize = (baseSize) => baseSize / zoomLevel;

  // Logging the type for debugging
  console.log("Ticket Type:", type);

  return (
    <div
      className="grey-ticket"
      style={{
        height: `${calculateSize(type === "Courses" ? 8 : 7)}rem`, // Keep height dynamic based on type
        display: "flex",
        padding: "var(--Spacing-M, 24px) var(--Spacing-S, 16px)",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "var(--Spacing-XS, 8px)",      
        borderRadius: "var(--Spacing-S, 16px)",
        background: "var(--light-blue-accent-2, #EAEAF0)",
      }}
    >
      <Icon
        className="icon"
        size={calculateSize(32)}
        aria-label={`${name} icon`}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "var(--Spacing-S, 16px)",
          flex: "1 0 0",
          alignSelf: "stretch",
        }}
      >
        <h6
          className="name"
          style={{
            color: "var(--light-blue-text, #0A0A0F)",
            alignSelf: "stretch",
            fontFamily: "'Space Grotesk'",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "133.333%",
          }}
        >
          {name}
        </h6>
        <p
          className="description"
          style={{
            color: "var(--light-blue-text, #0A0A0F)",
            fontFamily: "var(--Text-font-family, 'Space Grotesk')",
            fontSize: "19.2px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "24px; /* 125% */</div",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default GreyTicket;
