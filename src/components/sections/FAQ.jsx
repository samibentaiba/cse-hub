import React from "react";
import FaqToggle from "../ui-elements/FaqToggle.jsx";

const FAQ = ({ headline, data }) => {
  return (
    <div
      style={{
        display: "flex",
        padding: "var(--3xl, 64px)",
        flexDirection: "column",
        alignItems: "center",
        gap: "var(--3xl, 64px)",
        alignSelf: "stretch",
      }}
    >
      <h2
        style={{
          color: "var(--Neutral-gray-900, #0A0A0F)",
          textAlign: "center",
          fontFamily: "'Space Grotesk'",
          fontSize: "34px",
          fontWeight: "700",
          lineHeight: "117.647%",
          letterSpacing: "-0.5px",
        }}
      >
        {headline}
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--1g, 24px)",
          alignSelf: "stretch",
        }}
      >
        {data.map((item, index) => (
          <FaqToggle key={index} text={item.text} description={item.description} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
