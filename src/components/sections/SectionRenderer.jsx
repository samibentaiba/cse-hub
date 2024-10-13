import React from "react";
import DetailedCardGrid from "../renders/DetailedCardGrid.jsx";
import DetailedCardList from "../renders/DetailedCardList.jsx";
import TitleCardGrid from "../renders/TitleCardGrid.jsx";
import BentoBoxGrid from "../renders/BentoBoxGrid.jsx";
import ImageCardList from "../renders/ImageCardList.jsx";
function SectionRenderer({ prop }) {
  if (prop === "Courses") {
    return <DetailedCardGrid size={32} />;
  }
  if (prop === "Offer") {
    return <DetailedCardList size={32} />;
  }
  if (prop === "TitleCardGrid") {
    return <TitleCardGrid size={32} />;
  }
  if (prop === "BentoBoxGrid") {
    return <BentoBoxGrid />;
  }
  if (prop === "ImageCardList") {
    return <ImageCardList />;
  }
  return null;
}
export default SectionRenderer;
