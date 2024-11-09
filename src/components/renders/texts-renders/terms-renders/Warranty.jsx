// Warranty.jsx
import React from "react";
import TermsOfService from "../../../../data/TermsOfService.json";
import Paragraph from "../../../cards/text-card/Paragraph.jsx";
const Warranty = () => {
  return (
    <div
      style={{
        display: "flex",
        padding: "var(--2xl, 48px) var(--3xl, 64px)",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "var(--xl, 32px)",
        alignSelf: "stretch",
      }}
    >
      <div
        style={{
          display: "flex",
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
            lineHeight: "117.647%",
            letterSpacing: "-0.5px;}",
          }}
        >
          8. {TermsOfService[1].sectionheadline[7]}
        </h2>
        <p
          style={{
            color: "var(--Neutral-gray-600, #232327) ",
            fontFamily: "'Space Grotesk'",
            fontSize: "16px ",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "150% ",
          }}
        >
          {TermsOfService[1].sectiontextheadline[7]}
        </p>
        <Paragraph>{TermsOfService[1].textundersecondheadlines[3][0]}</Paragraph>
        <Paragraph>{TermsOfService[1].textundersecondheadlines[3][1]}</Paragraph>
      </div>
    </div>
  );
};

export default Warranty;
