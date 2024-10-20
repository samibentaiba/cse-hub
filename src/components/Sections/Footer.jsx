import CSE_HUB from "../../../public/images/cse-hub-logo-1.svg";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
const footerData = [
  {
    title: "Explore",
    links: [
      { label: "Courses", href: "/courses" },
      { label: "Timetables", href: "/timetables" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Discord server", href: "/community/discord" },
      { label: "Student stories", href: "/community/student-stories" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/company/about" },
      { label: "Careers", href: "/Company/careers" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help center", href: "/support/help" },
      { label: "Contact us", href: "/support/contact" },
      { label: "FAQs", href: "/support/faq" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Facebook", href: "/community/facebook" },
      { label: "twitter X", href: "/community/twitter-X" },
    ],
  },
];

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

        {/* Dynamic UL Mapping */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "var(--Units-xl, 32px)",
          }}
        >
          {footerData.map((section, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                width: "71px",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "var(--Units-m, 16px)",
                alignSelf: "stretch",
              }}
            >
              <p
                style={{
                  alignSelf: "stretch",
                  color: "var(--light-blue-text, #0A0A0F)",
                  fontFamily: "var(--Text-font-family, 'Space Grotesk')",
                  fontSize: "13.328px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "16px",
                }}
              >
                {section.title}
              </p>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "var(--Units-s, 8px)",
                  alignSelf: "stretch",
                }}
              >
                {section.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    style={{
                      color: "var(--light-blue-text, #0A0A0F)",
                      fontFamily: "var(--Text-font-family, 'Space Grotesk')",
                      fontSize: "13.328px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      lineHeight: "16px",
                      textDecorationLine: "none",
                    }}
                  >
                    {link.label}
                  </a>
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
        <p
          style={{
            color: "var(--light-blue-text, #0A0A0F)",
            fontFamily: "var(--Text-font-family, 'Space Grotesk')",
            fontSize: "13.328px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "16px",
          }}
        >
          Copyright © 2024 CSE Hub. All rights reserved.
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--Units-m, 16px)",
          }}
        >
          <a href="/privacy"
            style={{
              color: "var(--light-blue-text, #0A0A0F)",
              fontFamily: "var(--Text-font-family, 'Space Grotesk')",
              fontSize: "13.328px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "16px",
              textDecorationLine: "none",
            }}
          >
            Privacy policy
          </a>
          <a href="/terms"
            style={{
              color: "var(--light-blue-text, #0A0A0F)",
              fontFamily: "var(--Text-font-family, 'Space Grotesk')",
              fontSize: "13.328px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "16px",
              textDecorationLine: "none",
            }}
          >
            Terms of service
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
