import PrimaryButton from "../ui-elements/PrimaryButton.jsx";
import SecondaryButton from "../ui-elements/SecondaryButton.jsx";
import icons from "../../data/icons.json";
import InputField from "../cards/input-card/InputField.jsx";
import SelectField from "../cards/input-card/SelectField.jsx";
import TextLinksToPages from "../cards/text-card/TextLinksToPages.jsx";
import React, { useState } from "react";
const SupportForm = () => {
  const [dragging, setDragging] = useState(false);
  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const files = Array.from(e.dataTransfer.files);
    console.log("Dropped files:", files);
    // Additional file handling logic here
  };

  const handleFileInputChange = (e) => {
    const files = Array.from(e.target.files);
    console.log("Selected files:", files);
    // Additional file handling logic here
  };
  return (
    <div
      style={{
        display: "flex",
        padding: "var(--3xl, 64px)",
        flexDirection: "column",
        alignItems: "center",
        gap: "var(--3xl, 64px)",
        alignSelf: "stretch",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "var(--md, 16px)",
          alignSelf: "stretch",
        }}
      >
        <h2
          style={{
            alignSelf: "stretch",
            color: "var(--Neutral-gray-900, #0A0A0F)",
            fontFamily: "'Space Grotesk'",
            fontSize: "34px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: " 117.647% *",
            letterSpacing: "-0.5px",
          }}
        >
          Need more help?
        </h2>
        <p
          style={{
            alignSelf: "stretch",
            color: "var(--Neutral-gray-600, #232327)",
            fontFamily: "'Space Grotesk'",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: " 150%",
          }}
        >
          Fill out the form below, and our support team will get back to you as
          soon as possible.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "var(--xl, 32px)",
          alignSelf: "stretch",
        }}
      >
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "var(--xl, 32px)",
            flex: "1 0 0",
            alignSelf: "stretch",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "var(--lg, 24px)",
              alignSelf: "stretch",
            }}
          >
            <InputField placeholder={"Full name"} />

            {/* Email Input */}
            <InputField placeholder={"Email"} />

            {/* Platform Dropdown (Optional) */}
            <SelectField
              options={["...", "...", "..."]}
              placeholder={"Platform (optional)"}
            />

            {/* Contact Reason Dropdown */}
            <SelectField
              options={["...", "...", "..."]}
              placeholder={"Contact reason"}
            />

            {/* Message Textarea */}
            <InputField
              placeholder={"Message"}
              isLarge={true}
              isPassword={false}
            />

            {/* File Upload */}
            <div
              style={{
                display: "flex",

                flexDirection: "column",
                alignItems: "center",
                gap: "var(--3xl, 64px)",
                alignSelf: "stretch",
              }}
            >
              {/* Other form fields here */}

              {/* File Upload */}
              <div
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
                onClick={() => document.getElementById("fileInput").click()}
                style={{
                  display: "flex",
                  padding: "var(--sm, 8px)",
                  flexDirection: "column",
                  alignItems: "center",
                  alignSelf: "stretch",
                  borderRadius: "var(--sm, 8px)",
                  border: dragging
                    ? "2px dashed var(--Neutral-gray-500, #7D7D7F)"
                    : "1px solid var(--Neutral-gray-300, #9D9D9F)",
                  background: dragging
                    ? "var(--Neutral-gray-100, #ECECEC)"
                    : "var(--Neutral-gray-200, #CECECF)",
                  cursor: "pointer",
                }}
              >
                <p
                  style={{
                    color: "var(--Neutral-gray-900, #0A0A0F)",
                    textAlign: "center",
                    fontFamily: "'Space Grotesk'",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "150%",
                  }}
                >
                  Select file or drag it here
                </p>
                <p
                  style={{
                    color: "var(--Neutral-gray-400, #545457)",
                    textAlign: "center",
                    fontFamily: "'Space Grotesk'",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "150%",
                  }}
                >
                  JPG, JPEG, PNG, BMP, PDF, NFO, TXT, XML, MP4, MPEG, LOG, DMP,
                  HEIC, max 5 files,
                  <br />
                  9.5 MB upload limit in total
                </p>
                <input
                  type="file"
                  id="fileInput"
                  multiple
                  onChange={handleFileInputChange}
                  style={{ display: "none" }}
                />
              </div>
            </div>
          </div>
          {/* Submit and Chat Buttons */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "var(--lg, 24px)",
              alignSelf: "stretch",
            }}
          >
            <PrimaryButton
              txt="Submit an email request"
              icon={true}
              full={true}
            />
            <SecondaryButton
              txt="Start a live chat"
              to="live-chat"
              icon={true}
              full={true}
            />
          </div>
        </form>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            alignSelf: "stretch",
            flex: "1 0 0",
            borderRadius: "var(--md, 16px)",
            border: "1px solid var(--Neutral-gray-300, #9D9D9F)",
            background: "var(--Neutral-gray-200, #CECECF)",
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "var(--lg, 24px) var(--md, 16px)",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "var(--md, 16px)",
              alignSelf: "stretch",
              bordeBottom: "1px solid var(--Neutrals-gray-300, #9D9D9F)",
            }}
          >
            <h3
              style={{
                alignSelf: "stretch",
                color: "var(--Neutral-gray-900, #0A0A0F)",
                fontFamily: "'Space Grotesk'",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "133.333%",
                letterSpacing: "-0.25px",
              }}
            >
              Recent email requests
            </h3>
            <p
              style={{
                color: "var(--Neutral-gray-600, #232327)",
                fontFamily: "'Space Grotesk'",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "150%",
              }}
            >
              View and manage your recent email activity related to your
              account.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              padding: "var(--lg, 24px) var(--md, 16px)",
              flexDirection: "column",
              alignItems: "flex-start",
              alignSelf: "stretch",
              borderTop: "1px solid var(--Neutrals-gray-300, #9D9D9F)",
            }}
          >
            <p
              style={{
                color: "var(--Neutral-gray-600, #232327)",
                fontFamily: "'Space Grotesk'",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "166.667%",
              }}
            >
              No recent email requests available.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportForm;
