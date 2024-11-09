// ImageContainer.jsx
import React from "react";

const ImageContainer = ({ image, name, calculateSize }) => {
  return (
    <img
      src={image}
      alt={name}
      style={{
        width: "100%",
        borderTopLeftRadius: `${calculateSize(16)}px`,
        borderTopRightRadius: `${calculateSize(16)}px`,
        background: "var(--light-blue-accent, #6679CC)",
        background: "var(--light-blue-accent, #6679CC)",
        height: "576px",
        flexShrink: "0",
        alignSelf: "stretch",
        borderRadius: "var(--md, 16px) var(--md, 16px) 0px 0px"
      }}
    />
  );
};

export default ImageContainer;
