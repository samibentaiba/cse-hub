import React from "react";
import DetailedCard from "../../cards/image-card/DetailedCard.jsx";
import detailedCardGridData from "../../../data/courses.json";
import icons from "../../../data/icons.json";

function getCodeByName(name) {
  const item = icons.find((item) => item.name === name);
  return item ? item.code : null; // Returns the code or null if not found
}

function getFullCodeByName(name, size) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"><path d="${getCodeByName(
    name
  )}" fill="#0A0A0F"/></svg>`;
}

function DetailedCardGrid({ size }) {
  // Destructure size from props
  // Transform the imported JSON data into the desired structure
  const detailedCardGridItems = detailedCardGridData.map(
    (detailedCardGridItem) => ({
      name: detailedCardGridItem.name,
      description: detailedCardGridItem.description,
      icon: getFullCodeByName(detailedCardGridItem.name_of_icon, size), // Use getFullCodeByName to get the full SVG code
    })
  );

  return (
    <div
      style={{
        display: "flex",
        padding: "var(--Spacing-3XL, 4rem)",
        flexDirection: "column",
        alignItems: "center",
        gap: "var(--Spacing-3XL, 5rem)",
        alignSelf: "stretch",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "var(--Spacing-M, 1rem)",
          alignSelf: "stretch",
        }}
      >
        <h2
          style={{
            color: "var(--text, #000000)",
            textAlign: "center",
            fontFamily: "'Space Grotesk'",
            fontSize: "2.125rem",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "117.647%",
            letterSpacing: "-0.03125rem",
          }}
        >
          Our courses
        </h2>
        <p
          style={{
            color: "var(--text, #000000)",
            textAlign: "center",
            fontFamily: "'Space Grotesk'",
            fontSize: "1rem",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "1.5rem",
          }}
        >
          Browse through our extensive list of modules and start learning today.
        </p>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)", // 3 columns
          gap: "var(--Units-m, 4rem)", // Space between items
          width: "100%", // Adjust as needed
        }}
      >
        {detailedCardGridItems.map((detailedCardGridItem, index) => (
          <DetailedCard
            key={index}
            name={detailedCardGridItem.name}
            icon={detailedCardGridItem.icon} // Pass the full SVG code
            description={detailedCardGridItem.description} // Add the description
          />
        ))}
      </div>
    </div>
  );
}

export default DetailedCardGrid;
