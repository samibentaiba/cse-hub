import TextLinksToWebSites from "./TextLinksToWebSites"; // Ensure the correct import path
const Paragraph = ({ children }) => {
  return (
    <p
      style={{
        color: "var(--Grayscale-gray-900, #0A0A0F)",
        fontFamily: "'Space Grotesk'",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "24px",
      }}
    >
      
      {children}
    </p>
  );
};

export default Paragraph;
