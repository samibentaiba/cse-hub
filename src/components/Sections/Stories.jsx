import React from "react";
import Story from "../containers/story/Story";
import Abirimg from "../../assets/images/Abirimg.png";
import Ramyimg from "../../assets/images/Ramyimg.png";
import Kareemimg from "../../assets/images/Kareemimg.png";

const renderContent = (items) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)", // 3 columns
        gap: "var(--Units-m, 4rem)", // Space between items
        width: "100%", // Adjust as needed
      }}
    >
      {items.map((item, index) => {
        return (
          <div key={index}>
            <Story
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

function Stories() {
  const Review = [
    {
      name: "Abir Maroun",
      comment:
        "Joining CSE Hub transformed my learning experience. The resources and support are unmatched.",
      image: Abirimg,
    },
    {
      name: "Ramy Nassar",
      comment:
        "The courses are well-structured and easy to follow. I highly recommend CSE Hub.",
      image: Ramyimg,
    },
    {
      name: "Kareem Mazhar",
      comment:
        "Joining CSE Hub was the best decision for my studies. The support and materials provided are top-notch.",
      image: Kareemimg,
    },
  ];

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
        Success stories
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
        Hear from our students who have achieved their goals.
      </p>
      {renderContent(Review.slice(0, 3))} {/* Limit to 3 elements */}
    </div>
  );
}

export default Stories;
