import BlueButton from "../buttons/BlueButton.jsx";
const HeroSection = ({ headline, description, hero_img, isbutton }) => {
  return (
    <div
      style={{
        display: "flex",
        padding: "var(--Spacing-3XL, 4rem)",
        flexDirection: "column",
        alignItems: "center",
        gap: "var(--Spacing-3XL, 4rem)",
        alignSelf: "stretch",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "var(--Spacing-XL, 2rem)",
          alignSelf: "stretch",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "var(--Spacing-M, 1rem)",
            alignSelf: "stretch",
          }}
        >
          <h1
            style={{
              color: "var(--light-blue-text, #0A0A0F)",
              textAlign: "center",
              fontFamily: "'Space Grotesk'",
              fontSize: "3rem",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "3.5rem; /* 116.667% *",
              letterSpacing: "-0.0625rem",
              width: "15%",
            }}
          >
            {headline}
          </h1>
          <p
            style={{
              color: "var(--light-blue-text, var(--text, #0A0A0F))",
              fontFamily: "var(--Text-font-family, 'Space Grotesk')",
              fontSize: "19.2px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "24px /* 125% */",
            }}
          >
            {description}
          </p>
        </div>
        {isbutton && <BlueButton txt="Get started now" />}
      </div>
      <div
        style={{
          display: "flex",
          height: "19.75rem",
          alignItems: "center",
          gap: "var(--Spacing-3XL, 4rem)",
          alignSelf: "stretch",
        }}
      >
        <img
          style={{
            flex: "1 0 0",
            alignSelf: "stretch",
            borderRadius: "var(--Spacing-M, 1rem)",
            background: "var(--light-blue-accent, #6679CC)",
          }}
          src={hero_img}
          alt="Hero_img"
        />
        <img
          style={{
            flex: "1 0 0",
            alignSelf: "stretch",
            borderRadius: "var(--Spacing-M, 1rem)",
            background: "var(--light-blue-accent, #6679CC)",
          }}
          src={hero_img}
          alt="Hero_img"
        />
      </div>
    </div>
  );
};

export default HeroSection;
