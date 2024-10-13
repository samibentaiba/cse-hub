import React from "react";
import PrivacyPolicy from "../../data/PrivacyPolicy.json";
const LegalIntro = () => {
  return (
    <div
      style={{
        display: "flex",
        padding: "var(--Spacing-3XL, 64px)",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "var(--Spacing-M, 16px)",
        alignSelf: "stretch",
      }}
    >
      <h1
        style={{
          alignSelf: "stretch",
          color: "var(--Grayscale-gray-900, #0A0A0F)",
          /* Heading/H1/Large */
          fontFamily: "'Space Grotesk'",
          fontSize: "48px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "56px; /* 116.667% *",
          letterSpacing: "-1px",
        }}
      >
        {PrivacyPolicy[0].sectionheadline}
      </h1>
      <div
        style={{
          alignSelf: "stretch",
          color: "var(--Grayscale-gray-900, #0A0A0F)",
          /* Body/Regular/Large */
          fontFamily: "'Space Grotesk'",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "24px; /* 150% *",
          display: "flex",
          flexDirection: "column",
          gap: "var(--Spacing-S, 24px)",
        }}
      >
        <p>
          {PrivacyPolicy[0].date}
          {PrivacyPolicy[0].lastUpdated}
        </p>

        <p>
          {PrivacyPolicy[0].intro.text}
          <a
            style={{
              color: "var(--Accent-accent-500, #6679CC)",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "24px",
              textDecoration: "none",
            }}
            href={PrivacyPolicy[0].intro.link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {PrivacyPolicy[0].intro.link.text}
          </a>
          {PrivacyPolicy[0].intro.continuation}
        </p>

        <p>
          {PrivacyPolicy[0].continue.text}
          <a
            style={{
              color: "var(--Accent-accent-500, #6679CC)",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "24px",
              textDecoration: "none",
            }}
            href={PrivacyPolicy[0].continue.link.url}
          >
            {PrivacyPolicy[0].continue.link.text}
          </a>
          {PrivacyPolicy[0].continue.continuation}
        </p>

        <p>{PrivacyPolicy[0].contactSection}</p>
      </div>
    </div>
  );
};

export default LegalIntro;
