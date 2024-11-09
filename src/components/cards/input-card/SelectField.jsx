import React from "react";
import icons from "../../../data/icons.json"; // Ensure the correct path to your icons.json

// Utility function to find icon by name
// Utility function to find icon by name
function findIndexByName(array, name) {
  return array.findIndex((item) => item.name === name);
}

// SelectInput component to handle select input logic
const SelectInput = ({ options, placeholder, onChange, value }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      style={{
        width: "100%",
        padding: "4px 12px",
        background: "var(--Neutral-gray-200, #CECECF)",
        borderRadius: "30px",
        border: "none",
        outline: "none",
        fontFamily: "'Space Grotesk'",
        fontSize: "16px",
        fontWeight: "700",
        color: "var(--Neutral-gray-400, #0A0A0F)", // Lighter color for placeholder
        appearance: "none",
        WebkitAppearance: "none",
        MozAppearance: "none",
        flex: "1 0 0",
      }}
    >
      {/* Placeholder option with disabled so it can't be selected */}
      {placeholder && (
        <option value="" disabled hidden>
          {placeholder}
        </option>
      )}
      {options.map((option, index) => (
        <option
          key={index}
          value={option}
          style={{
            backgroundColor: "#CECECF ",
            
          }}
        >
          {option}
        </option>
      ))}
    </select>
  );
};

// SelectField component to style and render the dropdown with an icon
function SelectField({ options, placeholder, value, onChange }) {
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
      <SelectInput
        options={options}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <div
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          pointerEvents: "none",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path d={icons[findIndexByName(icons, "Drop")].code} fill="#0A0A0F" />
        </svg>
      </div>
    </div>
  );
}

export default SelectField;
