import React from "react";
import CSE_HUB from "../../../public/images/logo.svg";
import { Link } from 'react-router-dom';

const Footer = () => {
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
          <div style={sectionStyle}>
            <p style={titleStyle}>Explore</p>
            <ul style={listStyle}>
              <Link to="/courses" style={linkStyle}>Courses</Link>
              <Link to="/timetables" style={linkStyle}>Timetables</Link>
            </ul>
          </div>

          <div style={sectionStyle}>
            <p style={titleStyle}>Community</p>
            <ul style={listStyle}>
              <a href="https://discord.gg/ep9XCcVX" style={linkStyle}>Discord server</a>
              <Link 
                to="/" 
                state={{ scrollTo: "student-stories" }} // Pass the state here
                style={linkStyle}
              >
                Student stories
              </Link>
            </ul>
          </div>

          <div style={sectionStyle}>
            <p style={titleStyle}>Company</p>
            <ul style={listStyle}>
              <Link to="/company/about" style={linkStyle}>About us</Link>
              <Link to="/company/careers" style={linkStyle}>Careers</Link>
            </ul>
          </div>

          <div style={sectionStyle}>
            <p style={titleStyle}>Support</p>
            <ul style={listStyle}>
              <Link to="/help" style={linkStyle}>Help center</Link>
              <Link to="/contact" style={linkStyle}>Contact us</Link>
              <Link to="/faq" style={linkStyle}>FAQs</Link>
            </ul>
          </div>

          <div style={sectionStyle}>
            <p style={titleStyle}>Connect</p>
            <ul style={listStyle}>
              <a href="https://www.facebook.com/profile.php?id=61555486310014&mibextid=LQQJ4d" style={linkStyle}>Facebook</a>
              <a href="https://x.com/sami_bentaiba?s=21" style={linkStyle}>Twitter</a>
            </ul>
          </div>
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
        <p style={footerTextStyle}>Copyright Â© 2024 CSE Hub. All rights reserved.</p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--Units-m, 16px)",
          }}
        >
          <Link to="/privacy" style={footerLinkStyle}>Privacy policy</Link>
          <Link to="/terms" style={footerLinkStyle}>Terms of service</Link>
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