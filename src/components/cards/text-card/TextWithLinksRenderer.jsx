// TextWithLinksRenderer Component
import React from "react";
import BoldTextRenderer from "./BoldTextRenderer";
import { Link } from "react-router-dom";

const TextWithLinksRenderer = ({ text, link, bold, continuation, inpage }) => {
  return (
    <span>
      <BoldTextRenderer text={text} bold={bold} />

      {link && (
        <Link
          to={link.url}
          target={inpage ? "_self" : "_blank"}  // Controlled by the `inpage` prop
          rel="noopener noreferrer"
          style={{
            color: "var(--Accent-accent-500, #6679CC)",
            textDecoration: "none",
            marginLeft: "5px",
          }}
        >
          {link.text}
        </Link>
      )}

      {continuation && <span>{continuation}</span>}
    </span>
  );
};

export default TextWithLinksRenderer;
