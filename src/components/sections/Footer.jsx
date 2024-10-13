import React from "react";
import CSE_HUB from "../../../public/images/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  // Define the footer sections and their links
  const footerSections = [
    {
      title: "Explore",
      links: [
        { name: "Courses", path: "/courses" },
        { name: "Timetables", path: "/timetables" },
      ],
    },
    {
      title: "Community",
      links: [
        { name: "Discord server", path: "https://discord.gg/ep9XCcVX", external: true },
        { name: "Student stories", path: "/home", state: { scrollTo: "student-stories" } },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About us", path: "/company/about" },
        { name: "Careers", path: "/company/careers" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help center", path: "/help" },
        { name: "Contact us", path: "/contact" },
        { name: "FAQs", path: "/faq" },
      ],
    },
    {
      title: "Connect",
      links: [
        { name: "Facebook", path: "https://www.facebook.com/profile.php?id=61555486310014&mibextid=LQQJ4d", external: true },
        { name: "Twitter", path: "https://x.com/sami_bentaiba?s=21", external: true },
      ],
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        padding: "var(--Units-xl, 32px) var(--Units-5xl, 64px)",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "var(--Units-5xl, 64px)",
        alignSelf: "stretch",
        background: "var(--light-blue-accent-2, #EAEAF0)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          alignSelf: "stretch",
        }}
      >
        <Link to="/">
          <img
            src={CSE_HUB}
            style={{
              display: "flex",
              width: "90.879px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            alt="CSE_Hub_logo"
          />
        </Link>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "var(--Units-xl, 32px)",
          }}
        >
          {footerSections.map((section, index) => (
            <div key={index} style={sectionStyle}>
              <p style={titleStyle}>{section.title}</p>
              <ul style={listStyle}>
                {section.links.map((link, linkIndex) => (
                  link.external ? (
                    <a key={linkIndex} href={link.path} style={linkStyle} target="_blank" rel="noopener noreferrer">
                      {link.name}
                    </a>
                  ) : (
                    <Link key={linkIndex} to={link.path} style={linkStyle} state={link.state}>
                      {link.name}
                    </Link>
                  )
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          alignSelf: "stretch",
        }}
      >
        <p style={footerTextStyle}>
          Copyright Â© 2024 CSE Hub. All rights reserved.
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--Units-m, 16px)",
          }}
        >
          <Link to="/privacy" style={footerLinkStyle}>
            Privacy policy
          </Link>
          <Link to="/terms" style={footerLinkStyle}>
            Terms of service
          </Link>
        </div>
      </div>
    </div>
  );
};

// Styles
const sectionStyle = {
  display: "flex",
  width: "71px",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "var(--Units-m, 16px)",
  alignSelf: "stretch",
};

const titleStyle = {
  alignSelf: "stretch",
  color: "var(--light-blue-text, #0A0A0F)",
  fontFamily: "var(--Text-font-family, 'Space Grotesk')",
  fontSize: "13.328px",
  fontWeight: "700",
  lineHeight: "16px",
};

const listStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "var(--Units-s, 8px)",
  alignSelf: "stretch",
};

const linkStyle = {
  color: "var(--light-blue-text, #0A0A0F)",
  fontFamily: "var(--Text-font-family, 'Space Grotesk')",
  fontSize: "13.328px",
  fontWeight: "400",
  lineHeight: "16px",
  textDecoration: "none",
  cursor: "pointer",
};

const footerTextStyle = {
  color: "var(--light-blue-text, #0A0A0F)",
  fontFamily: "var(--Text-font-family, 'Space Grotesk')",
  fontSize: "13.328px",
  fontWeight: "400",
  lineHeight: "16px",
};

const footerLinkStyle = {
  color: "var(--light-blue-text, #0A0A0F)",
  fontFamily: "var(--Text-font-family, 'Space Grotesk')",
  fontSize: "13.328px",
  fontWeight: "400",
  lineHeight: "16px",
  textDecoration: "none",
  cursor: "pointer",
};

export default Footer;
