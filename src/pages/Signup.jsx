import PrimaryButton from "../components/ui-elements/PrimaryButton.jsx";
import ThirdParty from "../components/ui-elements/ThirdParty.jsx";
import CheckField from "../components/cards/input-card/CheckField.jsx";
import icons from "../data/icons.json";
import InputField from "../components/cards/input-card/InputField.jsx";
import TextLinksToPages from "../components/cards/text-card/TextLinksToPages.jsx";
import ThirdPartyFacebook from "../components/ui-elements/ThirdPartyFacebook.jsx";
import DateSelect from "../components/sections/DateSelect.jsx";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFullName, setEmail, setPassword, setDateOfBirth, setGender } from "../../Redux/Signup/action.js"


let headlines = ["Unlock exclusive member features", "Sign up for CSE Hub"];
let secondheadlines = [
  "Express yourself",
  "Progress tracking",
  "Favorite courses",
  "Exclusive updates & offers",
];
let descriptions = [
  "Engage with the community by sharing your thoughts, asking questions, and providing feedback in the course comment sections.",
  "Keep track of your learning journey, and save your progress across all courses.",
  "Save and organize your favorite courses for easy access anytime.",
  "Be the first to know about new courses, special promotions, and events.",
  [
    {
      text: "By signing up, you agree to the CSE Hub",
      link: {
        text: "Terms of Service",
        url: "/terms",
      },
      text1: " and",
      link1: {
        text: "Privacy Policy",
        url: "/privacy",
      },
      continuation: ".",
    },
  ],
  [
    {
      text: "Already have an account?",
      link: {
        text: "Log in",
        url: "/login",
      },
    },
  ],
];
const getCodeByName = (name) =>
  icons.find((item) => item.name === name)?.code || null;

const getFullCodeByName = (name, size) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 32 32" fill="none"><path d="${getCodeByName(
    name
  )}" fill="#6679CC"/></svg>`;

const GenderSelection = ({ selectedGender, handleGenderChange }) => {
  return (
    <>
      <CheckField
        placeholder="Female"
        checked={selectedGender === "Female"}
        onChange={() => handleGenderChange("Female")}
      />
      <CheckField
        placeholder="Male"
        checked={selectedGender === "Male"}
        onChange={() => handleGenderChange("Male")}
      />
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    padding: "var(--3xl, 64px)",
    alignItems: "flex-start",
    gap: "var(--xl, 32px)",
    alignSelf: "stretch",
  },
  leftColumn: {
    display: "flex",
    padding: "var(--xl, 32px)",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "var(--xl, 32px)",
    flex: "1 0 0",
    alignSelf: "stretch",
  },
  rightColumn: {
    display: "flex",
    padding: "var(--xl, 32px)",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "var(--xl, 32px)",
    flex: "1 0 0",
    alignSelf: "stretch",
    borderRadius: "var(--md, 16px)",
    border: "2px solid var(--Neutral-gray-300, #9D9D9F)",
  },
  heading: {
    color: "var(--Neutral-gray-900, #0A0A0F)",
    fontFamily: "'Space Grotesk'",
    fontSize: "34px",
    fontWeight: "700",
    lineHeight: "40px",
    letterSpacing: "-0.5px",
  },
  subheading: {
    color: "var(--Neutral-gray-900, #0A0A0F)",
    fontFamily: "'Space Grotesk'",
    fontSize: "24px",
    fontWeight: "700",
    lineHeight: "32px",
    letterSpacing: "-0.25px",
  },
  paragraph: {
    color: "var(--Neutral-gray-600, #232327)",
    fontFamily: "'Space Grotesk'",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "24px",
  },
  smallText: {
    color: "var(--Neutral-gray-900, #0A0A0F)",
    fontFamily: "'Space Grotesk'",
    fontSize: "12px",
    fontWeight: "700",
    lineHeight: "166.667%",
  },
  section: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "var(--md, 16px)",
    alignSelf: "stretch",
  },
  iconRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: "var(--sm, 8px)",
    alignSelf: "stretch",
  },
  formColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "var(--lg, 24px)",
    flex: "1 0 0",
    alignSelf: "stretch",
  },
  flexRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: "var(--md, 16px)",
    alignSelf: "stretch",
  },
};

const Signup = () => {
  const dispatch = useDispatch();
  
  const { fullName, email, password, dateOfBirth, gender } = useSelector((state) => state.signup);

  const handleGenderChange = (selectedGender) => {
    dispatch(setGender(selectedGender === gender ? null : selectedGender));
  };

  const handleDateChange = (date) => {
    dispatch(setDateOfBirth(date));
  };

  const handleSubmit = () => {
    // You can replace the console.log with a real API call for signup
    const userData = {
      fullName,
      email,
      password,
      dateOfBirth,
      gender,
    };
    console.log("User Data Submitted:", userData);
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftColumn}>
        <h2 style={styles.heading}>{headlines[0]}</h2>
        {[0, 1, 2, 3].map((i) => (
          <div key={i} style={styles.iconRow}>
            <div
              dangerouslySetInnerHTML={{
                __html: getFullCodeByName("Check", 32),
              }}
              aria-label="Check icon"
            />
            <div style={styles.formColumn}>
              <h3 style={styles.subheading}>{secondheadlines[i]}</h3>
              <p style={styles.paragraph}>{descriptions[i]}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={styles.rightColumn}>
        <h2 style={styles.heading}>{headlines[1]}</h2>
        <div style={styles.section}>
          <InputField
            placeholder={"Full name"}
            value={fullName}
            onChange={(e) => dispatch(setFullName(e.target.value))}
          />
          <InputField
            placeholder={"Email"}
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
          />
          <InputField
            placeholder={"Password"}
            isPassword={true}
            value={password}
            onChange={(e) => dispatch(setPassword(e.target.value))}
          />
          <div style={styles.section}>
            <p style={styles.smallText}>Birthday</p>
            <div style={styles.flexRow}>
              <DateSelect onChange={handleDateChange} />
            </div>
          </div>
          <div style={styles.section}>
            <p style={styles.smallText}>Gender</p>
            <div style={styles.flexRow}>
              <GenderSelection
                selectedGender={gender}
                handleGenderChange={handleGenderChange}
              />
            </div>
          </div>
          <PrimaryButton
            txt={"Sign up"}
            full={true}
            onClick={handleSubmit}
            to={"/signup"}
          />
          <TextLinksToPages textData={descriptions[4]} multiplinks={2} />
        </div>
        <div style={styles.section}>
          <p style={styles.smallText}>Or sign up using</p>
          <div style={styles.flexRow}>
            <ThirdParty />
            <ThirdPartyFacebook />
          </div>
          <TextLinksToPages
            textData={descriptions[5]}
            multiplinks={1}
            inpage={true}
          />
        </div>
      </div>
    </div>
  );
};
export default Signup;
