import React from "react";
import TitleCard from "../../cards/text-card/TitleCard.jsx";
import titleCardGridData from "../../../data/blueCourses.json"; // Import your JSON file
import icons from "../../../data/icons.json"; // Make sure to import icons data

// Function to get the SVG path data based on the icon name
function getCodeByName(name) {
  const item = icons.find((item) => item.name === name);
  return item ? item.code : null; // Returns the path data or null if not found
}

// Function to wrap the path data in a full SVG element
function getFullCodeByName(name, size) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none"><path d="${getCodeByName(
    name
  )}" fill="#0A0A0F"/></svg>`;
}

// Function to transform the blueCourses data into the desired structure
function translateTitleCardGridData(data, size) {
  // Add size as a parameter
  return data.map((item) => ({
    name: item.name,
    icon: getFullCodeByName(item.name_of_icon, size), // Pass size to getFullCodeByName
  }));
}

function TitleCardGrid({ size }) {
  // Destructure size from props
  const titleCardGridItems = translateTitleCardGridData(
    titleCardGridData,
    size
  ); // Call the function to translate the data

  return (
    <div
      style={{
        display: "flex",
        padding: "var(--Units-5xl, 4rem)",
        
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "var(--Units-xl, 32px)",
        alignSelf: "stretch",
      }}
    >
      <h2
        style={{
          color: "var(--text, #000)",
          fontFamily: "'Space Grotesk'",
          fontSize: "2.125rem",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "2.5rem", // Corrected line height
          letterSpacing: "-0.03125rem",
          alignSelf: "stretch",
        }}
      >
        Browse all
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)", // 3 columns
          gap: "var(--Units-m, 4rem)", // Space between items
          
          width: "100%", // Adjust as needed
        }}
      >
        {titleCardGridItems.map((titleCardGridItem, index) => (
          <TitleCard
            key={index}
            name={titleCardGridItem.name}
            icon={titleCardGridItem.icon} // Pass the full SVG code
          />
        ))}
      </div>
    </div>
  );
}

export default TitleCardGrid;
