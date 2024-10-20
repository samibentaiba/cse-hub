const mixColors = (color1, color2, weight) => {
  //dont put wrong # even if its readed but the algorithm of color picker doesnt work in bentobox.jsx
  //there is problem of #FFF & #000 and others
  //it should be #FFFFFF or #000000
  //it should be 6 degits
  const r1 = parseInt(color1.substring(1, 3), 16);
  const g1 = parseInt(color1.substring(3, 5), 16);
  const b1 = parseInt(color1.substring(5, 7), 16);

  const r2 = parseInt(color2.substring(1, 3), 16);
  const g2 = parseInt(color2.substring(3, 5), 16);
  const b2 = parseInt(color2.substring(5, 7), 16);

  const r = Math.round(r1 * weight + r2 * (1 - weight));
  const g = Math.round(g1 * weight + g2 * (1 - weight));
  const b = Math.round(b1 * weight + b2 * (1 - weight));

  return `#${((1 << 24) + (r << 16) + (g << 8) + b)
    .toString(16)
    .slice(1)
    .toUpperCase()}`;
};

const getMixWeight = (luminance) => {
  // Adjust the mixing weight based on luminance
  const maxWeight = 0.4; // Maximum weight for mixing
  const minWeight = 0; // Minimum weight for mixing
  const weightRange = maxWeight - minWeight;

  // Scale weight inversely to luminance (closer to 0 for white/black)
  if (luminance < 0.5) {
    return Math.min(maxWeight, weightRange * luminance); // For dark backgrounds
  } else {
    return Math.min(maxWeight, weightRange * (1 - luminance)); // For light backgrounds
  }
};

const getContrastingColor = (backgroundColor) => {
  const r = parseInt(backgroundColor.substring(1, 3), 16);
  const g = parseInt(backgroundColor.substring(3, 5), 16);
  const b = parseInt(backgroundColor.substring(5, 7), 16);

  // Calculate luminance
  const luminance =
    0.2126 * (r / 255) + 0.7152 * (g / 255) + 0.0722 * (b / 255);

  // Get mixing weights
  const whiteMixWeight = getMixWeight(luminance);
  const blackMixWeight = getMixWeight(luminance);

  // Blend colors based on luminance
  if (luminance < 0.4) {
    // Blend with white if the background is dark
    return mixColors(backgroundColor, "#FFFFFF", whiteMixWeight);
  } else {
    // Blend with black if the background is light
    return mixColors(backgroundColor, "#000000", blackMixWeight);
  }
};

const BentoBox = ({ className,headline, description, backgroundcolor = "#g" }) => {
  // Determine the contrasting text color based on the background color
  const textColor = getContrastingColor(backgroundcolor);

  return (
    <div
      style={{
        display: "flex",
        padding: "var(--Units-xl, 32px)",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "var(--Units-m, 16px)",
        height:"70%",
        borderRadius: "var(--Units-m, 16px)",
        background: backgroundcolor,
        overflow: "hidden", // Prevent overflow
      }}
      className={`bento-box ${className}`}
    >
      <h6
        style={{
          display: "flex",
          alignItems: "center",
          alignSelf: "stretch",
          color: textColor,
          fontFamily: "var(--Text-font-family, 'Space Grotesk')",
          fontSize: "28px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "138.889%",
        }}
      >
        {headline}
      </h6>
      <p
        style={{
          alignSelf: "stretch",
          color: textColor,
          fontFamily: "var(--Text-font-family, 'Space Grotesk')",
          fontSize: "25px",
          fontStyle: "normal",
          fontWeight: "300",
          lineHeight: "125%",
          width: "91%",
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default BentoBox;
