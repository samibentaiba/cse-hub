// UseOfService.jsx
import React from "react";
import Paragraph from "../../../cards/text-card/Paragraph.jsx";
import TermsOfService from "../../../../data/TermsOfService.json";
import ListSection from "../../../cards/text-card/ListSection.jsx";
const UseOfService = () => {
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
        1. {TermsOfService[1].sectionheadline[0]}
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
        <Paragraph>{TermsOfService[1].sectiontextheadline[0]}</Paragraph>
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
        {TermsOfService[1].secondheadlines[0][0]}
      </h3>
      <Paragraph>{TermsOfService[1].textundersecondheadlines[0][0]}</Paragraph>
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
        {TermsOfService[1].secondheadlines[0][1]}
      </h3>
      <Paragraph>{TermsOfService[1].textundersecondheadlines[0][1]}</Paragraph>
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
        {TermsOfService[1].secondheadlines[0][2]}
      </h3>
      <Paragraph>{TermsOfService[1].textundersecondheadlines[0][2][0]}</Paragraph>
      <Paragraph>{TermsOfService[1].textundersecondheadlines[0][2][1]}</Paragraph>
      <Paragraph>{TermsOfService[1].textundersecondheadlines[0][2][2]}</Paragraph>
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
        {TermsOfService[1].secondheadlines[0][3]}
      </h3>
      <Paragraph>{TermsOfService[1].textundersecondheadlines[0][3][0]}</Paragraph>
      <ListSection items={TermsOfService[1].penheads[0]} headline={false} />
      <Paragraph>{TermsOfService[1].textundersecondheadlines[0][3][1]}</Paragraph>
      <Paragraph>{TermsOfService[1].textundersecondheadlines[0][3][2]}</Paragraph>
    </div>
  );
};

export default UseOfService;
