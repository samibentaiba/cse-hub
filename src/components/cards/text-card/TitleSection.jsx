const TitleSection = ({ children }) => {
  return (
    <h3
      style={{
        color: "var(--Neutral-gray-900, #0A0A0F)",
        fontFamily: "'Space Grotesk'",
        fontSize: "24px",
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: "133.333%",
        letterSpacing: "-0.25px",
      }}
    >
      {children}
    </h3>
  );
};

export default TitleSection;
