import React from "react";
import PrivacyPolicy from "../../../../data/PrivacyPolicy.json";
import Paragraph from "../../../cards/text-card/Paragraph";
import ListSection from "../../../cards/text-card/ListSection";

const SharingOfInfo = () => {
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
          color: "var(--Neutral-gray-600, #232327)",
          fontFamily: "'Space Grotesk'",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: " 150% ",
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
          {PrivacyPolicy[1].sectionheadline[2]}
        </h2>
      </div>

      <div
        style={{
          color: "var(--Neutral-gray-600, #232327)",
          fontFamily: "'Space Grotesk'",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "150%",
        }}
      >
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
          {PrivacyPolicy[1].sectiontextheadline[2]}
        </p>
        <Paragraph>
          {PrivacyPolicy[1].textundersecondheadlines[2][0][0]}
        </Paragraph>
        <ListSection items={PrivacyPolicy[1].penheads[5]} headline={true} />
        <Paragraph>
          {PrivacyPolicy[1].textundersecondheadlines[2][0][1]}
        </Paragraph>
      </div>
    </div>
  );
};

export default SharingOfInfo;
