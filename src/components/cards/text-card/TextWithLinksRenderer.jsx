import React from "react";
import BoldTextRenderer from "./BoldTextRenderer";

const TextWithLinksRenderer = ({ text, link, bold, continuation }) => {
  return (
    <span>
      <BoldTextRenderer text={text} bold={bold} />

      {link && (
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "var(--Accent-accent-500, #6679CC)",
            textDecoration: "none",
            marginLeft: "5px",
          }}
        >
          {link.text}
        </a>
      )}

      {continuation && <span>{continuation}</span>}
    </span>
  );
};

export default TextWithLinksRenderer;
