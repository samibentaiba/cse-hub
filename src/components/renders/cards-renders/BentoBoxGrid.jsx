import BentoBox from "../../ui-elements/BentoBox.jsx";
import bentoBoxData from "../../../data/bentoboxes.json"; // Import your JSON file
function BentoBoxGrid() {
  const getClassName = (index) => {
    switch (index) {
      case 0:
        return "firstBentoBox";
      case 1:
        return "secondBentoBox";
      case 2:
        return "thirdBentoBox";
      case 3:
        return "fourthBentoBox";
      default:
        return "";
    }
  };

  return (
    <div
      style={{
        display: "flex",
        padding: "var(--Units-5xl, 4rem)",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "var(--Units-xl, 2rem)",
        alignSelf: "stretch",
      }}
    >
      <h3
        style={{
          color: "var(--light-blue-text, #0A0A0F)",
          fontFamily: 'var(--Text-font-family, "Space Grotesk")',
          fontSize: "250%",
          fontWeight: 700,
          lineHeight: "40px",
          alignSelf: "stretch",
        }}
      >
        Why choose our courses?
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gridTemplateRows: "repeat(2, auto)",
          gap: "var(--Units-m, 1rem)",
          width: "100%",
        }}
      >
        {bentoBoxData.map((data, index) => {
          // Initialize inline styles
          const inlineStyles = {
            height: "200px", // Set a fixed height for each grid item (adjust as needed)
            ...(index === 0 ? { gridColumn: "span 8" } : {}),
            ...(index === 1 ? { gridColumn: "span 4" } : {}),
            ...(index === 2 ? { gridColumn: "span 7" } : {}),
            ...(index === 3 ? { gridColumn: "span 5" } : {}),
          };

          // Get the class name using the helper function
          const className = `bento-box ${getClassName(index)}`.trim();

          return (
            <div
              key={index}
              style={inlineStyles} // Apply inline styles here
            >
              <BentoBox
                backgroundcolor={data.backgroundcolor}
                headline={data.headline}
                description={data.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BentoBoxGrid;
