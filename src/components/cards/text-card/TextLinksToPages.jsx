// TextLinksToPages Component
import React from "react";
import TextWithLinksRenderer from "./TextWithLinksRenderer";

const TextLinksToPages = ({ textData, multiplinks, inpage }) => {
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
          {multiplinks
            ? renderMultipleLinks(section, inpage)
            : renderSingleLink(section, inpage)}
        </div>
      ))}
    </div>
  );
};

const renderSingleLink = (section, inpage) => {
  return <TextWithLinksRenderer {...section} inpage={inpage} />;
};

const renderMultipleLinks = (section, inpage) => {
  const elements = [];

  // Add the main text
  if (section.text) {
    elements.push(section.text);
  }

  // Add first link using the TextWithLinksRenderer
  if (section.link) {
    elements.push(<TextWithLinksRenderer key="link" link={section.link} inpage={inpage} />);
  }

  // Add additional text
  if (section.text1) {
    elements.push(section.text1);
  }

  // Add second link using the TextWithLinksRenderer
  if (section.link1) {
    elements.push(<TextWithLinksRenderer key="link1" link={section.link1} inpage={inpage} />);
  }

  // Add continuation text
  if (section.continuation) {
    elements.push(section.continuation);
  }

  // Return a fragment to maintain layout
  return (
    <>
      {elements.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </>
  );
};

export default TextLinksToPages;
