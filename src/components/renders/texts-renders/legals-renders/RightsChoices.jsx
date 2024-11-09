import React from "react";
import PrivacyPolicy from "../../../../data/PrivacyPolicy.json";
import Paragraph from "../../../cards/text-card/Paragraph";
import TitleSection from "../../../cards/text-card/TitleSection";
import ListSection from "../../../cards/text-card/ListSection";
import TextLinksToPages from "../../../cards/text-card/TextLinksToPages";
import TextLinksToWebSites from "../../../cards/text-card/TextLinksToWebSites";
const RightChoices = () => {
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
          {PrivacyPolicy[1].sectionheadline[4]}
        </h2>
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
          {PrivacyPolicy[1].sectiontextheadline[4]}
        </p>
        <Paragraph>
          {PrivacyPolicy[1].textundersecondheadlines[4][0][0]}
        </Paragraph>
        <TitleSection>1. {PrivacyPolicy[1].secondheadlines[1][0]}</TitleSection>
        <Paragraph>
          {PrivacyPolicy[1].textundersecondheadlines[4][1][0]}
        </Paragraph>
        <TitleSection>2. {PrivacyPolicy[1].secondheadlines[1][1]}</TitleSection>
        <ListSection items={PrivacyPolicy[1].penheads[6]} headline={true} />
        <TextLinksToWebSites
          text={PrivacyPolicy[1].textundersecondheadlines[4][2][0]}
        />
        <TitleSection>3. {PrivacyPolicy[1].secondheadlines[1][2]}</TitleSection>

        <Paragraph>
          {PrivacyPolicy[1].textundersecondheadlines[4][3][0]}
        </Paragraph>

        <Paragraph>
          {PrivacyPolicy[1].textundersecondheadlines[4][4][0]}
          {PrivacyPolicy[1].textundersecondheadlines[4][4][1]}
        </Paragraph>
        <Paragraph>
          {PrivacyPolicy[1].textundersecondheadlines[4][4][2]}
        </Paragraph>
        <TitleSection>4. {PrivacyPolicy[1].secondheadlines[1][3]}</TitleSection>
        <Paragraph>
          {PrivacyPolicy[1].textundersecondheadlines[4][5][0]}
        </Paragraph>
        <TitleSection>5. {PrivacyPolicy[1].secondheadlines[1][4]}</TitleSection>
        <TextLinksToPages
          textData={PrivacyPolicy[1].textundersecondheadlines[4][6]}
        />

        <Paragraph>
          {PrivacyPolicy[1].textundersecondheadlines[4][7][0]}
        </Paragraph>
      </div>
    </div>
  );
};

export default RightChoices;
