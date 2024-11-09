import React from "react";

const TitleCard = ({ name, icon }) => {
  return (
    <div
      style={{
        display: "flex",
        padding: "var(--Spacing-L, 1.5rem)",
        justifyContent: "space-between",
        alignItems: "center",
        flex: "1 0 0",
        alignSelf: "stretch",
        borderRadius: "var(--Spacing-M, 16px)",
        background: "var(--Secondary-secondary-500, #96A1D4)",
      }}
    >
      <h2
        style={{
          color: "var(--Grayscale-gray-900, #0A0A0F)",
          fontFamily: "'Space Grotesk'",
          fontSize: "28px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "117.647% ",
          letterSpacing: "-0.5px",
          padding: "24px",
          width:"100%"
        }}
      >
        {name}
      </h2>
      <div
        dangerouslySetInnerHTML={{ __html: icon }} // Use the SVG markup directly
      />
    </div>
  );
};

export default TitleCard;
