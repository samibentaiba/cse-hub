import React from "react";

const BlueTicket = ({ name, icon: Icon }) => {
  return (
    
    <div
      style={{
        display: "flex",
        padding: "var(--Units-xl, 32px)",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexShrink: "0",
        borderRadius: "var(--Units-m, 16px)",
        background: "var(--light-blue-accent, #6679CC)",
      }}
    >
      <h5
        style={{
          color: "var(--light-blue-text, #0A0A0F)",
          fontFamily: "var(--Text-font-family, 'Space Grotesk')",
          fontSize: "30px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "115.741% ",
        }}
      >
        {name}
      </h5>
      <Icon size={32} />
    </div>
  );
};
export default BlueTicket;
