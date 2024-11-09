import React from "react";
import PrivacyPolicy from "../../../../data/PrivacyPolicy.json";
import Paragraph from "../../../cards/text-card/Paragraph";
import TitleSection from "../../../cards/text-card/TitleSection";
import ListSection from "../../../cards/text-card/ListSection";

const LegalInfoCollec = () => {
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
          {PrivacyPolicy[1].sectionheadline[0]}
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
          {PrivacyPolicy[1].sectiontextheadline[0]}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "var(--Spacing-M, 16px)",
          alignSelf: "stretch",
        }}
      >
        <TitleSection>1. {PrivacyPolicy[1].secondheadlines[0][0]}</TitleSection>
        <Paragraph>
          {PrivacyPolicy[1].textundersecondheadlines[0][0][0]}
        </Paragraph>
        <Paragraph>
          {PrivacyPolicy[1].textundersecondheadlines[0][0][1]}
        </Paragraph>
        <ListSection items={PrivacyPolicy[1].penheads[0]} headline={true} />
        <Paragraph>
          {PrivacyPolicy[1].textundersecondheadlines[0][0][2]}
        </Paragraph>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "var(--Spacing-M, 16px)",
          alignSelf: "stretch",
        }}
      >
        <TitleSection>2. {PrivacyPolicy[1].secondheadlines[0][1]}</TitleSection>
        <Paragraph>
          {PrivacyPolicy[1].textundersecondheadlines[0][1][0]}
        </Paragraph>
        <ListSection items={PrivacyPolicy[1].penheads[1]} headline={true} />
        <Paragraph>
          {PrivacyPolicy[1].textundersecondheadlines[0][1][1]}
        </Paragraph>
        <ListSection items={PrivacyPolicy[1].penheads[2]} headline={true} />
        <Paragraph>
          {PrivacyPolicy[1].textundersecondheadlines[0][1][2]}
        </Paragraph>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "var(--Spacing-M, 16px)",
          alignSelf: "stretch",
        }}
      >
        <TitleSection>3. {PrivacyPolicy[1].secondheadlines[0][2]}</TitleSection>
        <Paragraph>
          {PrivacyPolicy[1].textundersecondheadlines[0][1][0]}
        </Paragraph>
        <ListSection items={PrivacyPolicy[1].penheads[3]} headline={false} />
      </div>
    </div>
  );
};

export default LegalInfoCollec;
