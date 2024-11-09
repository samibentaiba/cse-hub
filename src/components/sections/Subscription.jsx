import PrimaryButton from "../ui-elements/PrimaryButton.jsx";
import icons from "../../data/icons.json";
import InputField from "../cards/input-card/InputField.jsx";
import SelectField from "../cards/input-card/SelectField.jsx";
import TextLinksToPages from "../cards/text-card/TextLinksToPages.jsx"
const getCodeByName = (name) =>
  icons.find((item) => item.name === name)?.code || null;

const getFullCodeByName = (name, size) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 32 32" fill="none"><path d="${getCodeByName(
    name
  )}" fill="#6679CC"/></svg>`;

const Subscription = ({ headlines, secondheadlines, descriptions, Button }) => (
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
      {[0, 1].map((i) => (
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
            dangerouslySetInnerHTML={{ __html: getFullCodeByName("Check", 32) }}
            aria-label="Check icon"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "var(--md, 16px)",
              flex: "1 0 0",
            }}
          >
            <h3
              style={{
                alignSelf: "stretch",
                color: "var(--Neutral-gray-900, #0A0A0F)",
                fontFamily: "'Space Grotesk'",
                fontSize: "24px",
                fontWeight: "700",
                lineHeight: "32px",
                letterSpacing: "-0.25px",
              }}
            >
              {secondheadlines[i]}
            </h3>
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
          gap: "var(--xl, 32px)",
          flex: "1 0 0",
          alignSelf: "stretch",
        }}
      >
        <InputField placeholder={"Email"}/>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "var(--md, 16px)",
            alignSelf: "stretch",
          }}
        >
          <SelectField options={["Semestre 1", "Semestre 2", "Semestre 3"]} />
          <SelectField options={["Group 1", "Group 2", "Group 3"]} />
        </div>
      </div>
          <PrimaryButton txt={Button} full={true} />
          <TextLinksToPages textData={descriptions[2]} multiplinks={2}/>
          {console.log(descriptions[2])}
    </div>
  </div>
);

export default Subscription;
