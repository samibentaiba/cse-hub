import CSE_HUB from "../../../public/images/logo.svg";
import SecondaryButton from "../ui-elements/SecondaryButton.jsx";
import PrimaryButton from "../ui-elements/PrimaryButton.jsx";
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
        background: "var(--Grayscale-gray-100, #F5F6FA)",
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
              <Link
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
                to={link.href}
              >
                {link.name}
              </Link>
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
        <SecondaryButton txt="Log in" to="login"/>
        <PrimaryButton txt="Sign up" to="signup"/>
      </ul>
    </div>
  );
};

export default Navbar;
