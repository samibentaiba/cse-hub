// UseOfService.jsx
import React from "react";
import Paragraph from "../../../cards/text-card/Paragraph.jsx";
import TermsOfService from "../../../../data/TermsOfService.json";
import ListSection from "../../../cards/text-card/ListSection.jsx";
const UserContent = () => {
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
        2. {TermsOfService[1].sectionheadline[1]}
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
        <Paragraph>{TermsOfService[1].sectiontextheadline[1]}</Paragraph>
      </div>
      <Paragraph>{TermsOfService[1].textundersecondheadlines[1][0]}</Paragraph>
      <Paragraph>{TermsOfService[1].textundersecondheadlines[1][1]}</Paragraph>
      <Paragraph>{TermsOfService[1].textundersecondheadlines[1][2]}</Paragraph>
      <Paragraph>{TermsOfService[1].textundersecondheadlines[1][3]}</Paragraph>
      <ListSection items={TermsOfService[1].penheads[1]} headline={false} />
      <Paragraph>{TermsOfService[1].textundersecondheadlines[1][4]}</Paragraph>
    </div>
  );
};

export default UserContent;
