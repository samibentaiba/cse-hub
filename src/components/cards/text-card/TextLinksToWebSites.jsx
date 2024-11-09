import React from "react";
const parseTextWithLinks = (text) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);
  return parts.map((part, index) => {
    if (urlRegex.test(part)) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "var(--Accent-accent-500, #6679CC)",
            textDecoration: "none",
          }}
        >
          {part}
        </a>
      );
    }
    return <span key={index}>{part}</span>;
  });
};
const TextLinksToWebSites = ({ text }) => {
  return (
    <span
      style={{
        color: "var(--Grayscale-gray-900, #0A0A0F)",
        fontFamily: "'Space Grotesk'",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "24px",
      }}
    >
      {parseTextWithLinks(text)}
    </span>
  );
};

export default TextLinksToWebSites;
