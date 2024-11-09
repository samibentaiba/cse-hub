import React from "react";
import TextLinksToWebSites from "./TextLinksToWebSites"; // Ensure the correct import path

const ListSection = ({ items, headline }) => {
  const sectionStyles = {
    color: "var(--Grayscale-gray-900, #0A0A0F)",
    fontFamily: "'Space Grotesk'",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "24px",
    paddingLeft: "0.5rem",
  };

  const listStyles = {
    listStyleType: "none",
    color: "var(--Grayscale-gray-900, #0A0A0F)",
    fontFamily: "'Space Grotesk'",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "24px",
  };

  const bulletStyles = {
    fontWeight: "700",
    marginRight: "0.5rem",
    display: "inline-block",
  };

  const headlineStyles = {
    fontWeight: "700",
    marginRight: "0.25rem",
  };

  const textContainerStyles = {
    marginLeft: "0.25rem", // Add some spacing between headline and text
  };

  return (
    <div style={sectionStyles}>
      <ul style={listStyles}>
        {items.map((item, index) => (
          <li key={index} style={{ display: "flex", alignItems: "flex-start", marginBottom: "0.5rem" }}>
            <span style={bulletStyles}>•</span>
            <div style={textContainerStyles}>
              {headline && (
                <span style={headlineStyles}>{item.headline}:</span>
              )}
              {/* Always render text, even if there's no headline */}
              <TextLinksToWebSites text={item.text} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListSection;
