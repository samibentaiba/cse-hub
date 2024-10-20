import CSE_HUB from "../../../public/images/cse-hub-logo-1.svg";
import BLogin from "../buttons/BLogin.jsx";
import BlueButton from "../buttons/BlueButton.jsx";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const navLinks = [
  { name: "Courses", href: "/courses" },
  { name: "Timetables", href: "/timetables" },
  { name: "About", href: "/about" },
  { name: "Help", href: "/help" },
];

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        padding: "var(--Spacing-XL, 2rem) var(--Spacing-3XL, 4rem)",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "stretch",
        position: "sticky",
        top: "0",
        zIndex: "1000",
        backgroundColor: "white",
      }}
    >
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--Spacing-4XL, 64px)",
          listStyleType: "none",
        }}
      >
        <li>
          <Link to="/">
            {" "}
            {/* Wrap the logo with a Link */}
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
        </li>
        <li>
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--Units-2xl, 40px)",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                style={{
                  color: "var(--light-blue-text, #0A0A0F)",
                  fontFamily: "var(--Text-font-family, 'Space Grotesk')",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "120.048% ",
                  textDecorationLine: "none",
                }}
                href={link.href}
              >
                {link.name}
              </a>
            ))}
          </ul>
        </li>
      </ul>
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--Units-l, 2rem)",
        }}
      >
        <BLogin />
        <BlueButton txt="Sign up" />
      </ul>
    </div>
  );
};

export default Navbar;
