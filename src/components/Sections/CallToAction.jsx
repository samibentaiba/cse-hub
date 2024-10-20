import BlueButton from "../buttons/BlueButton.jsx";

const CallToAction = ({ headline, description, hero_img, isbutton }) => {
  return (
    <div
      style={{
        display: "flex",
        padding: "var(--Spacing-3XL, 4rem)",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "var(--Spacing-3XL, 4rem)",
        alignSelf: "stretch",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "19.75rem",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "var(--Spacing-3XL, 4rem)",
          flex: "1 0 0",
        }}
      >
        <img
          style={{
            flex: "1 0 0",
            alignSelf: "stretch",
            borderRadius: "var(--Units-m, 16px)",
            background: "var(--light-blue-accent, #6679CC)",
          }}
          src={hero_img}
          alt="Hero_img"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "var(--Spacing-XL, 2rem)",
            flex: "1 0 0",
            alignSelf: "stretch",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "var(--Spacing-M, 1rem)",
              alignSelf: "stretch",
            }}
          >
            <h4
              style={{
                alignSelf: "stretch",
                color: "var(--light-blue-text, #0A0A0F)",
                fontFamily: "'Space Grotesk'",
                fontSize: "1.5rem",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: " 133.333% ",
                letterSpacing: "-0.01563rem",
              }}
            >
              {headline}
            </h4>
            <p
              style={{
                color: "var(--light-blue-text, #0A0A0F)",
                alignSelf: " stretch",
                fontFamily: "'Space Grotesk'",
                fontSize: "1rem;",
                fontStyle: "normal;",
                fontWeight: "400;",
                lineHeight: "150% ",
                alignSelf: "stretch",
              }}
            >
              {description}
            </p>
          </div>

          {isbutton && <BlueButton txt="Sign up" />}
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
