// Imgcmntr.jsx
import React from "react";

const Imgcmntr = ({ image, name, calculateSize }) => {
  return (
    <img
      src={image}
      alt={name}
      style={{
        width: "100%", // Ensure the image takes full width
        height: "auto", // Maintain aspect ratio
        objectFit: "cover", // Ensure the image covers the entire container without distortion
        borderTopLeftRadius: `${calculateSize(16)}px`,
        borderTopRightRadius: `${calculateSize(16)}px`,
      }}
    />
  );
};

export default Imgcmntr;
