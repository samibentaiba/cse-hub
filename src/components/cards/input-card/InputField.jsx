import React, { useState } from "react";

const Inputbar = ({ placeholder, isPassword, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <style>
        {`
          input::placeholder {
            color: var(--Grayscale-gray-900, #0A0A0F);
            font-family: "Space Grotesk";
            font-style: normal;
            font-size: 16px;
            font-weight: 700;
            line-height: 24px;
          }
        `}
      </style>
      <input
        type={isPassword && !showPassword ? "password" : "text"}
        placeholder={placeholder}
        value={value} // Pass the value prop here
        onChange={onChange} // Pass the onChange prop here
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
          color: "var(--Neutral-gray-400, #0A0A0F)",
        }}
      />
      {isPassword && (
        <button
          onClick={togglePasswordVisibility}
          style={{
            position: "absolute",
            right: "12px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? "🙈" : "👁️"}
        </button>
      )}
    </>
  );
};

const InputField = ({ placeholder, isLarge, isPassword, value, onChange }) => {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "var(--sm, 8px)",
        alignSelf: "stretch",
        padding: isLarge ? "var(--sm, 8px)" : "4px 0px",
        height: isLarge ? "160px" : "auto",
        borderRadius: "var(--sm, 8px)",
        border: "1px solid var(--Neutral-gray-300, #9D9D9F)",
        background: "var(--Neutral-gray-200, #CECECF)",
        transition: "border-color 0.3s ease",
      }}
    >
      <Inputbar
        placeholder={placeholder}
        isPassword={isPassword}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
