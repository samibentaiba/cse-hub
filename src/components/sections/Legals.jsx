import React from "react";
import LegalIntro from "../renders/texts-renders/LegalIntro.jsx";
import LegalInfoCollec from "../renders/texts-renders/InfoCollec.jsx";
import UseOfInfo from "../renders/texts-renders/UseOfInfo.jsx";
import SharingOfInfo from "../renders/texts-renders/SharingOfInfo.jsx";
import AnalyAdver from "../renders/texts-renders/AnalyAdver.jsx";
import RightsChoices from "../renders/texts-renders/RightsChoices.jsx"
const Legalrendering = ({ prop }) => {
  if (prop === "LegalIntro") {
    return <LegalIntro />;
  }
  if (prop === "LegalInfoCollec") {
    return <LegalInfoCollec />;
  }
  if (prop === "UseOfInfo") {
    return <UseOfInfo />;
  }
  if (prop === "SharingOfInfo") {
    return <SharingOfInfo />;
  }
  if (prop === "AnalyAdver") {
    return <AnalyAdver />;
  }
  if (prop === "RightsChoices") {
    return <RightsChoices />;
  }
  return null;
};

export default Legalrendering;
