import PrimaryButton from "../components/ui-elements/PrimaryButton.jsx";
import ThirdParty from "../components/ui-elements/ThirdParty.jsx";
import InputField from "../components/cards/input-card/InputField.jsx";
import TextLinksToPages from "../components/cards/text-card/TextLinksToPages.jsx";
import ThirdPartyFacebook from "../components/ui-elements/ThirdPartyFacebook.jsx";
let headlines = ["Reconnect and continue growing", "Log in to CSE Hub"];
let descriptions = [
  "Log in to continue your learning, access favorites, and stay updated with the latest content and exclusive features.",
  [
    {
      link: {
        text: "Forgot password?",
        url: "/forgot-password",
      },
    },
  ],
  [
    {
      text: "Note a member yet?",
      link: {
        text: "Sign up",
        url: "/signup",
      },
    },
  ],
];
const Login = () => (
  <div
    style={{
      display: "flex",
      padding: "var(--3xl, 64px)",
      alignItems: "flex-start",
      gap: "var(--xl, 32px)",
      alignSelf: "stretch",
    }}
  >
    <div
      style={{
        display: "flex",
        padding: "var(--xl, 32px)",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "var(--xl, 32px)",
        flex: "1 0 0",
        alignSelf: "stretch",
      }}
    >
      <h2
        style={{
          color: "var(--Neutral-gray-900, #0A0A0F)",
          fontFamily: "'Space Grotesk'",
          fontSize: "34px",
          fontWeight: "700",
          lineHeight: "40px",
          letterSpacing: "-0.5px",
        }}
      >
        {headlines[0]}
      </h2>
      {[0].map((i) => (
        <div
          key={i}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "var(--sm, 8px)",
            alignSelf: "stretch",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "var(--md, 16px)",
              flex: "1 0 0",
            }}
          >
            <p
              style={{
                alignSelf: "stretch",
                color: "var(--Neutral-gray-600, #232327)",
                fontFamily: "'Space Grotesk'",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "24px",
              }}
            >
              {descriptions[i]}
            </p>
          </div>
        </div>
      ))}
    </div>
    <div
      style={{
        display: "flex",
        padding: "var(--xl, 32px)",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "var(--xl, 32px)",
        flex: "1 0 0",
        alignSelf: "stretch",
        borderRadius: "var(--md, 16px)",
        border: "2px solid var(--Neutral-gray-300, #9D9D9F)",
      }}
    >
      <h2
        style={{
          color: "var(--Neutral-gray-900, #0A0A0F)",
          fontFamily: "'Space Grotesk'",
          fontSize: "34px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "40px",
          letterSpacing: "-0.5px",
        }}
      >
        {headlines[1]}
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "var(--lg, 24px)",
          flex: "1 0 0",
          alignSelf: "stretch",
        }}
      >
        <InputField placeholder={"Email"} />
        <InputField placeholder={"Password"} isPassword={true} />
      </div>
      <TextLinksToPages
        textData={descriptions[1]}
        multiplinks={2}
        inpage={true}
      />
      <PrimaryButton txt={"Log in"} full={true} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "var(--md, 16px)",
          alignSelf: "stretch",
        }}
      >
        <p
          style={{
            alignSelf: "stretch",
            color: "var(--Neutral-gray-900, #0A0A0F)",
            fontFamily: "'Space Grotesk'",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: " 166.667% ",
          }}
        >
          Or login in using
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "var(--md, 16px)",
            alignSelf: "stretch",
          }}
        >
          <ThirdParty />
          <ThirdPartyFacebook />
        </div>
      </div>
      <TextLinksToPages
        textData={descriptions[2]}
        multiplinks={1}
        inpage={true}
      />
      {console.log(descriptions[2])}
    </div>
  </div>
);

export default Login;
