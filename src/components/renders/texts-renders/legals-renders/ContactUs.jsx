import React from "react";
import PrivacyPolicy from "../../../../data/PrivacyPolicy.json";
import TextLinksToPages from"../../../cards/text-card/TextLinksToPages.jsx"
import Paragraph from"../../../cards/text-card/Paragraph.jsx"
function ChangesPP() {
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
          {PrivacyPolicy[1].sectionheadline[7]}
        </h2>
        <TextLinksToPages
          textData={PrivacyPolicy[1].textundersecondheadlines[4][10]}
        />

        <Paragraph>
          {PrivacyPolicy[1].textundersecondheadlines[4][10][1]}
        </Paragraph>
        <Paragraph>
          {PrivacyPolicy[1].textundersecondheadlines[4][10][2]}
        </Paragraph>
      </div>
    </div>
  );
}

export default ChangesPP;