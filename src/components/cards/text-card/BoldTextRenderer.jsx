import React from "react";

const BoldTextRenderer = ({ text, bold }) => {
  if (!Array.isArray(bold) || bold.length === 0) {
    return <span>{text}</span>;
  }

  const parts = [];
  let currentIndex = 0;

  bold.forEach((boldText, index) => {
    const trimmedBoldText = boldText.trim();
    const boldIndex = text.indexOf(trimmedBoldText);

    if (boldIndex !== -1) {
      if (boldIndex > currentIndex) {
        parts.push(
          <span key={`text-${currentIndex}`}>
            {text.slice(currentIndex, boldIndex)}
          </span>
        );
      }

      parts.push(
        <span key={`bold-${index}`} style={{ fontWeight: 700 }}>
          {trimmedBoldText}
        </span>
      );

      currentIndex = boldIndex + trimmedBoldText.length;
    }
  });

  if (currentIndex < text.length) {
    parts.push(
      <span key={`text-${currentIndex}`}>{text.slice(currentIndex)}</span>
    );
  }

  return <>{parts}</>;
};

export default BoldTextRenderer;
