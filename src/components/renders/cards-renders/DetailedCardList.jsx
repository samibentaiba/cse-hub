import React from "react";
import DetailedCard from "../../cards/image-card/DetailedCard.jsx";
import detailedCardListData from "../../../data/Offer.json";
import icons from "../../../data/icons.json";

// Function to get the icon code based on the name from the icons.json
function getCodeByName(name) {
  const item = icons.find((item) => item.name === name);
  return item ? item.code : null; // Returns the path data or null if not found
}

function getFullCodeByName(name, size) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"><path d="${getCodeByName(
    name
  )}" fill="#0A0A0F"/></svg>`;
}

function DetailedCardList({ size }) {
  // Destructure size from props
  // Map the offers data to include name, description, and full SVG icon
  const detailedCardListItems = detailedCardListData.map(
    (detailedCardListItem) => ({
      name: detailedCardListItem.name,
      description: detailedCardListItem.description,
      icon: getFullCodeByName(detailedCardListItem.name_of_icon, size), // Retrieve the full SVG code for the icon
    })
  );

  return (
    <div
      style={{
        display: "flex",
        padding: "3rem 4rem",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "3rem",
        width: "auto",
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
            color: "var(--text, #000)",
            textAlign: "center",
            fontFamily: "'Space Grotesk'",
            fontSize: "2.125rem",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "117.647%",
            letterSpacing: "-0.03125rem",
          }}
        >
          What we offer
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
          Discover the benefits of joining our learning community.
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
        {detailedCardListItems.map((detailedCardListItem, index) => (
          <DetailedCard
            key={index}
            name={detailedCardListItem.name}
            icon={detailedCardListItem.icon} // Pass the full SVG code
            description={detailedCardListItem.description} // Pass the description
          />
        ))}
      </div>
    </div>
  );
}

export default DetailedCardList;
