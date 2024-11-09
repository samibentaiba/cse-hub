import React from "react";
import TermsOfService from "../../../../data/TermsOfService.json";
import Paragraph from "../../../cards/text-card/Paragraph";
import { Link } from "react-router-dom";

const TermsIntro = () => {
  const {
    sectionheadline,
    intro,
    continue: continueSection,
  } = TermsOfService[0];

  const renderLink = (link) => (
    <Link
      style={{
        color: "var(--Accent-accent-500, #6679CC)",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: "400",
        lineHeight: "24px",
        textDecoration: "none",
      }}
      target="_blank"
      rel="noopener noreferrer"
    ></Link>
  );

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
      <h1
        style={{
          alignSelf: "stretch",
          color: "var(--Grayscale-gray-900, #0A0A0F)",
          fontFamily: "'Space Grotesk'",
          fontSize: "48px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "56px",
          letterSpacing: "-1px",
        }}
      >
        {sectionheadline}
      </h1>

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
        <Paragraph>
          {intro.text}
          {intro.continuation}
        </Paragraph>

        <Paragraph>
          {continueSection.text}
          {continueSection.continuation}
        </Paragraph>
      </div>
    </div>
  );
};

export default TermsIntro;
