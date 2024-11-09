import { Link } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types"; // Import PropTypes

const PrimaryButton = ({
  txt,
  full = false,
  to,
  icon = false,
  external = false,
  onClick, // Make sure onClick is passed
}) => {
  const path = "/" + to;

  const handleClick = (event) => {
    if (onClick) {
      event.preventDefault(); // Prevent default behavior if onClick is provided
      onClick(); // Call the custom onClick handler
    }
  };

  const buttonContent = (
    <button
      style={{
        display: "flex",
        padding: "var(--sm, 8px) var(--md, 16px)",
        justifyContent: "center",
        borderRadius: "var(--sm, 8px)",
        background: "var(--Brand-primary, #10183C)",
        alignItems: "flex-start",
        cursor: "pointer",
        gap: "var(--md, 16px)",
        width: full ? "100%" : "auto",
        border: "none",
      }}
      aria-label={txt} // Accessibility improvement
      onClick={handleClick} // Trigger the onClick handler here
    >
      {icon && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM19.6 8.25L12.53 12.67C12.21 12.87 11.79 12.87 11.47 12.67L4.4 8.25C4.29973 8.19371 4.21192 8.11766 4.14189 8.02645C4.07186 7.93525 4.02106 7.83078 3.99258 7.71937C3.96409 7.60796 3.9585 7.49194 3.97616 7.37831C3.99381 7.26468 4.03434 7.15581 4.09528 7.0583C4.15623 6.96079 4.23632 6.87666 4.33073 6.811C4.42513 6.74533 4.53187 6.69951 4.6445 6.6763C4.75712 6.65309 4.87328 6.65297 4.98595 6.67595C5.09863 6.69893 5.20546 6.74453 5.3 6.81L12 11L18.7 6.81C18.7945 6.74453 18.9014 6.69893 19.014 6.67595C19.1267 6.65297 19.2429 6.65309 19.3555 6.6763C19.4681 6.69951 19.5749 6.74533 19.6693 6.811C19.7637 6.87666 19.8438 6.96079 19.9047 7.0583C19.9657 7.15581 20.0062 7.26468 20.0238 7.37831C20.0415 7.49194 20.0359 7.60796 20.0074 7.71937C19.9789 7.83078 19.9281 7.93525 19.8581 8.02645C19.7881 8.11766 19.7003 8.19371 19.6 8.25Z"
            fill="#E7E7E7"
          />
        </svg>
      )}
      <p
        style={{
          color: "var(--light-blue-background, var(--background, #F5F6FA))",
          fontFamily: "var(--Text-font-family, 'Space Grotesk')",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "150%",
        }}
      >
        {txt}
      </p>
    </button>
  );

  return external ? (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", width: full ? "100%" : "auto" }}
      aria-label={txt} // Accessibility improvement for external links
    >
      {buttonContent}
    </a>
  ) : (
    <Link
      to={path}
      style={{ textDecoration: "none", width: full ? "100%" : "auto" }}
      aria-label={txt} // Accessibility improvement for internal links
    >
      {buttonContent}
    </Link>
  );
};

PrimaryButton.propTypes = {
  txt: PropTypes.string.isRequired,
  full: PropTypes.bool,
  to: PropTypes.string.isRequired,
  icon: PropTypes.bool,
  external: PropTypes.bool,
  onClick: PropTypes.func, // Allow custom click handler
};

export default PrimaryButton;
