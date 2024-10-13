import React from "react";
import ImageCard from "../cards/image-card/ImageCard.jsx";
import abir_avatar from "../../assets/images/abir_avatar.png";
import ramy_avatar from "../../assets/images/ramy_avatar.png";
import kareem_avatar from "../../assets/images/kareem_avatar.png";
//const abir_avatar=images[0]?.img_thumbnail_url;
//const ramy_avatar=images[1]?.img_thumbnail_url;
//const kareem_avatar=images[2]?.img_thumbnail_url;
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
          <div key={index}>
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
function ImageCardList() {
  const Review = [
    {
      name: "Abir Maroun",
      comment:
        "Joining CSE Hub transformed my learning experience. The resources and support are unmatched.",
      image: abir_avatar, //object maymchich fih varibal b abir-avatar
    },
    {
      name: "Ramy Nassar",
      comment:
        "The courses are well-structured and easy to follow. I highly recommend CSE Hub.",
      image: ramy_avatar, //object maymchich fih varibal b ramy-avatar
    },
    {
      name: "Kareem Mazhar",
      comment:
        "Joining CSE Hub was the best decision for my studies. The support and materials provided are top-notch.",
      image: kareem_avatar, //object maymchich fih varibal b kareem-avatar
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

export default ImageCardList;
