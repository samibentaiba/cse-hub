import { Link } from "react-router-dom"; // Import Link from react-router-dom
const BlueButton = ({ txt }) => {
  return (
    <Link to="/signup" style={{textDecorationLine: "none",}}>
      <button
        style={{
          display: "flex",
          padding: "var(--Spacing-S, 0.5rem) var(--Spacing-M, 1rem)",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "var(--Spacing-S, 0.5rem)",
          background: "var(--primary, #10183C)",
          borderStyle: "none",
          cursor: "pointer",
        }}
      >
        <p
          style={{
            color: "var(--light-blue-background, var(--background, #F5F6FA))",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "24px", // 150%
          }}
        >
          {txt}
        </p>
      </button>
    </Link>
  );
};

export default BlueButton;
