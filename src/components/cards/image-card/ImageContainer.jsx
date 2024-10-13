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
      }}
    />
  );
};

export default ImageContainer;
