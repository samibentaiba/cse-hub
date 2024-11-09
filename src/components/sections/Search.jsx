// Search.jsx
import React from "react";
import SearchField from "../cards/input-card/SearchField"; // Import the SearchField component

function Search({ title, description }) {
  return (
    <div
      style={{
        display: "flex",
        padding: "var(--Spacing-3XL, 4rem)",
        justifyContent: "space-between",
        alignItems: "flex-end",
        alignSelf: "stretch",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "var(--Spacing-M, 1rem)",
          flex: "1 0 0",
        }}
      >
        <h3
          style={{
            fontFamily: "'Space Grotesk'",
            fontSize: "1.5rem",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "2rem",
            letterSpacing: "-0.01563rem",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: "'Space Grotesk'",
            fontSize: "1rem",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "1.5rem",
          }}
        >
          {description}
        </p>
      </div>
      <SearchField />
    </div>
  );
}

export default Search;
