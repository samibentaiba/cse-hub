import React, { useState } from "react";
import icons from "../../../data/icons.json"; // Ensure the correct path to your icons.json

// Utility function to find icon by name
function findIndexByName(array, name) {
  return array.findIndex((item) => item.name === name);
}

const CheckInput = ({ placeholder, checked, onChange }) => {
  return (
    <div
      onClick={onChange} // Trigger onChange when clicked
      style={{
        width: "100%",
        padding: "4px 12px",
        background: "var(--Neutral-gray-200, #CECECF)",
        borderRadius: "30px",
        outline: "none",
        fontFamily: "'Space Grotesk'",
        fontSize: "16px",
        fontWeight: "700",
        color: "var(--Neutral-gray-400, #0A0A0F)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Label text for the checkbox */}
      <span>{checked ? placeholder : placeholder || "Check me"}</span>
      {/* Always show the appropriate checkmark icon based on checked state */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d={checked ? "m10.6 13.8 -2.149 -2.15q-0.275 -0.274 -0.701 -0.274 -0.424 0 -0.7 0.274 -0.274 0.275 -0.275 0.701 0 0.424 0.275 0.7l2.85 2.85q0.3 0.3 0.7 0.3 0.401 0 0.701 -0.3l5.65 -5.65q0.275 -0.275 0.275 -0.701t-0.275 -0.7 -0.7 -0.275 -0.701 0.275zm1.4 8.2q-2.074 0 -3.9 -0.788a10.096 10.096 0 0 1 -3.175 -2.137q-1.35 -1.349 -2.137 -3.175T2 12t0.788 -3.9a10.096 10.096 0 0 1 2.137 -3.175 10.096 10.096 0 0 1 3.175 -2.137q1.827 -0.788 3.9 -0.788t3.9 0.788 3.175 2.137a10.096 10.096 0 0 1 2.139 3.175q0.79 1.826 0.788 3.9t-0.789 3.9a10.096 10.096 0 0 1 -2.137 3.175 10.24 10.24 0 0 1 -3.175 2.139q-1.823 0.789 -3.9 0.788" : icons[findIndexByName(icons, "EmptyCheck")].code}
          fill="#0A0A0F"
        />
      </svg>
    </div>
  );
};

function CheckField({ placeholder, checked, onChange }) {
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        background: "var(--Neutral-gray-200, #CECECF)",
        width: "100%",
        padding: "4px 0px",
        alignItems: "center",
        borderRadius: "var(--Spacing-S, 8px)",
        border: "1px solid var(--Grayscale-gray-600, #9f9f9f)",
        transition: "border-color 0.3s ease",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "var(--sm, 8px)",
        flex: "1 0 0",
      }}
    >
      <CheckInput placeholder={placeholder} checked={checked} onChange={onChange} />
    </div>
  );
}

export default CheckField;
