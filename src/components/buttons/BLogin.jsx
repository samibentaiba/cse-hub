import { Link } from "react-router-dom"; // Import Link from react-router-dom
const BLogin = () => {
  return (
    <Link to="/login" style={{textDecorationLine: "none",}}>
      <button
        style={{
          display: "flex",
          padding: "var(--Spacing-S, 0.5rem) var(--Spacing-M, 1rem)",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "var(--Spacing-S, 0.5rem)",
          backgroundColor: "white",
          cursor: "pointer",
          
        }}
      >
        <p
          style={{
            color: "var(--light-blue-text, var(--text, #0A0A0F))",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "24px; /* 150% *",
          }}
        >
          Log in
        </p>
      </button>
    </Link>
  );
};

export default BLogin;
