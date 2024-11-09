// GovLawAndArbit.jsx
import React from "react";
import Paragraph from "../../../cards/text-card/Paragraph.jsx";
import TermsOfService from "../../../../data/TermsOfService.json";
import ListSection from "../../../cards/text-card/ListSection.jsx";
const GovLawAndArbit = () => {
  return (
    <div
      style={{
        display: "flex",
        padding: "var(--2xl, 48px) var(--3xl, 64px)",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "var(--md, 16px)",
        alignSelf: "stretch",
      }}
    >
      <h2
        style={{
          color: "var(--Neutral-gray-900, #0A0A0F)",
          fontFamily: "'Space Grotesk'",
          fontSize: "34px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "40px; /* 117.647% *",
          letterSpacing: "-0.5px",
        }}
      >
        10. {TermsOfService[1].sectionheadline[9]}
      </h2>

      <div
        style={{
          alignSelf: "stretch",
          color: "var(--Grayscale-gray-900, #0A0A0F)",
          fontFamily: "'Space Grotesk'",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "var(--Spacing-S, 24px)",
        }}
      >
        <Paragraph>{TermsOfService[1].sectiontextheadline[9]}</Paragraph>
      </div>
      <h3
        style={{
          color: "var(--Neutral-gray-900, #0A0A0F)",
          fontFamily: "'Space Grotesk'",
          fontSize: "24px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "32px; /* 133.333% *",
          letterSpacing: "-0.25px",
        }}
      >
        {TermsOfService[1].secondheadlines[1][0]}
      </h3>
      <Paragraph>{TermsOfService[1].textundersecondheadlines[5][0]}</Paragraph>
      <h3
        style={{
          color: "var(--Neutral-gray-900, #0A0A0F)",
          fontFamily: "'Space Grotesk'",
          fontSize: "24px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "32px; /* 133.333% *",
          letterSpacing: "-0.25px",
        }}
      >
        {TermsOfService[1].secondheadlines[1][1]}
      </h3>
      <Paragraph>{TermsOfService[1].textundersecondheadlines[5][1]}</Paragraph>
    </div>
  );
};

export default GovLawAndArbit;