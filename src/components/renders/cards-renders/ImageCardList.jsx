import React from "react";
import ImageCard from "../../cards/image-card/ImageCard.jsx";
const renderContent = (items) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "var(--Units-m, 4rem)",
        width: "100%",
        
      }}
    >
      {items.map((item, index) => {
        return (
          <div
          key={index}>
            <ImageCard
              name={item.name}
              comment={item.comment}
              image={item.image}
            />
          </div>
        );
      })}
    </div>
  );
};
function ImageCardList({ headline, description, data }) {
  const Review = data;

  return (
    <div
      style={{
        display: "flex",
        padding: "var(--Units-2xl, 3rem) var(--Units-5xl, 4rem)",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "var(--Units-2xl, 3rem)",
        alignSelf: "stretch",
      }}
    >
      <h3
        style={{
          alignSelf: "stretch",
          color: "var(--light-blue-text, var(--text, #0A0A0F))",
          textAlign: "center",
          fontFamily: "var(--Text-font-family, 'Space Grotesk')",
          fontSize: "250%",
          fontStyle: "normal",
          fontWeight: "700",

          lineHeight: "3rem",
        }}
      >
        {headline}
      </h3>
      <p
        style={{
          alignSelf: "stretch",
          color: "var(--light-blue-text, var(--text, #0A0A0F))",
          textAlign: "center",
          fontFamily: "var(--Text-font-family, 'Space Grotesk')",
          fontSize: "120%",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "24px",
        }}
      >
        {description}
      </p>
      {renderContent(Review.slice(0, 3))} {/* Limit to 3 elements */}
    </div>
  );
}

export default ImageCardList;
