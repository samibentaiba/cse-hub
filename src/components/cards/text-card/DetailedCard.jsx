import PropTypes from "prop-types"; // Import PropTypes for type checking

const DetailedCard = ({ name, icon, description }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        borderRadius: "var(--Spacing-S, 16px)",
        alignItems: "flex-start",
        gap: "var(--Spacing-S, 8px)",
        flex: "1 0 0",
        alignSelf: "stretch",
        background: "var(--light-blue-accent-2, #EAEAF0)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          borderRadius: "var(--Spacing-S, 16px)",
          padding: "1rem",
          alignItems: "flex-start",
          gap: "var(--Spacing-S, 8px)",
          flex: "1 0 0",
          alignSelf: "stretch",
          background: "var(--light-blue-accent-2, #EAEAF0)",
          width: "50%",
        }}
      >
        <div
          dangerouslySetInnerHTML={{ __html: icon }}
          aria-label={`${name} icon`}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "var(--Spacing-S, 16px)",
            flex: "1 0 0",
            alignSelf: "stretch",
            height: "100%",
            justifyContent: "space-between",
          }}
        >
          <h6
            style={{
              color: "var(--light-blue-text, #0A0A0F)",
              alignSelf: "stretch",
              fontFamily: "'Space Grotesk'",
              fontSize: "150%",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "133.333%",
            }}
          >
            {name}
          </h6>
          <p
            style={{
              color: "var(--light-blue-text, #0A0A0F)",
              fontFamily: "var(--Text-font-family, 'Space Grotesk')",
              fontSize: "120%",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "1.5",
              flex: "1", // Allow this to grow and take available space
              overflow: "hidden", // Hide overflow
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

// PropTypes for type checking
DetailedCard.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired, // Expecting SVG string
  description: PropTypes.string.isRequired,
};

export default DetailedCard;
