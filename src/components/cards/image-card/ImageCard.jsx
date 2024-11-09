import React, { useEffect, useState } from "react";
import TextContainer from "./TextContainer";
import ImageContainer from "./ImageContainer";

const ImageCard = ({ name, image, comment }) => {
  // State to handle zoom level
  const [zoomLevel, setZoomLevel] = useState(1);

  // Effect to detect zoom level changes
  useEffect(() => {
    const updateZoomLevel = () => {
      const zoom = window.devicePixelRatio;
      setZoomLevel(zoom);
    };

    window.addEventListener("resize", updateZoomLevel);
    updateZoomLevel(); // Set initial zoom level

    return () => {
      window.removeEventListener("resize", updateZoomLevel);
    };
  }, []);

  // Function to adjust size dynamically based on zoom level
  const calculateSize = (baseSize) => baseSize * zoomLevel;

  return (
    <div
      style={{
        background: "lightgray 50%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: `${calculateSize(16)}px`,
        width: "100%",
        background: "var(--light-blue-accent, #6679CC)",
      }}
    >
      <ImageContainer image={image} calculateSize={calculateSize} />
      <TextContainer name={name} comment={comment} />
    </div>
  );
};

export default ImageCard;
