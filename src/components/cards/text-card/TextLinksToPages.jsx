import React from "react";
import TextWithLinksRenderer from "./TextWithLinksRenderer";

const TextLinksToPages = ({ textData }) => {
  

  if (!textData || !Array.isArray(textData) || textData.length === 0) {
    return <div>No content available</div>; // Fallback in case of no data
  }

  return (
    <div
      style={{
        color: "var(--Grayscale-gray-900, #0A0A0F)",
        fontFamily: "'Space Grotesk'",
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "24px",
      }}
    >
      {textData.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          {Array.isArray(section)
            ? section.map((subsection, subsectionIndex) => (
                <div key={subsectionIndex}>
                  <TextWithLinksRenderer {...subsection} />
                </div>
              ))
            : <TextWithLinksRenderer {...section} />}
        </div>
      ))}
    </div>
  );
};

export default TextLinksToPages;
