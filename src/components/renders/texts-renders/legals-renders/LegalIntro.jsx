import React from "react";
import PrivacyPolicy from "../../../../data/PrivacyPolicy.json";
import Paragraph from "../../../cards/text-card/Paragraph";
import { Link } from "react-router-dom";

const LegalIntro = () => {
  const {
    sectionheadline,
    lastUpdated,
    date,
    intro,
    continue: continueSection,
    contactSection,
  } = PrivacyPolicy[0];

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
      to={link.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {link.text}
    </Link>
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
        <Paragraph>{`${date}${lastUpdated}`}</Paragraph>
        
        <Paragraph>
          {intro.text}
          {renderLink(intro.link)}
          {intro.continuation}
        </Paragraph>

        <Paragraph>
          {continueSection.text}
          {renderLink(continueSection.link)}
          {continueSection.continuation}
        </Paragraph>

        <Paragraph>{contactSection}</Paragraph>
      </div>
    </div>
  );
};

export default LegalIntro;
