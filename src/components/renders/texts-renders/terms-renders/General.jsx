// General.jsx
import React from "react";
import Paragraph from "../../../cards/text-card/Paragraph.jsx";
import TermsOfService from "../../../../data/TermsOfService.json";

import TextLinksToPages from "../../../cards/text-card/TextLinksToPages.jsx";
const General = () => {
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
        12. {TermsOfService[1].sectionheadline[11]}
      </h2>

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
        {TermsOfService[1].secondheadlines[3][0]}
      </h3>
      <TextLinksToPages
        textData={TermsOfService[1].textundersecondheadlines[6]}
      />
      <Paragraph>{TermsOfService[1].textundersecondheadlines[7][0]}</Paragraph>
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
        {TermsOfService[1].secondheadlines[3][1]}
      </h3>
      <Paragraph>{TermsOfService[1].textundersecondheadlines[7][1]}</Paragraph>
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
        {TermsOfService[1].secondheadlines[3][2]}
      </h3>
      <Paragraph>{TermsOfService[1].textundersecondheadlines[7][2]}</Paragraph>
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
        {TermsOfService[1].secondheadlines[3][3]}
      </h3>
      <Paragraph>{TermsOfService[1].textundersecondheadlines[7][3]}</Paragraph>
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
        {TermsOfService[1].secondheadlines[3][4]}
      </h3>
      <Paragraph>{TermsOfService[1].textundersecondheadlines[7][4]}</Paragraph>
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
        {TermsOfService[1].secondheadlines[3][5]}
      </h3>
      <TextLinksToPages
        textData={TermsOfService[1].textundersecondheadlines[7][5]}
      />
      <Paragraph>{TermsOfService[1].textundersecondheadlines[7][5][1]}</Paragraph>
    </div>
  );
};
export default General;
