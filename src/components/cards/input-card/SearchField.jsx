// SearchInput.jsx
import React, { useState } from "react";

import icons from "../../../data/icons.json";
function findIndexByName(array, name) {
  return array.findIndex((item) => item.name === name);
}
//import SearchInput from "../cards/input-card/SearchInputSearchInput"; // Import the SearchInput component
import { FiX } from "react-icons/fi";
const SearchInput = () => {
  return (
    <>
      <style>
        {`
          input::placeholder {
            color: var(--Grayscale-gray-900, #0A0A0F);
            font-family: "Space Grotesk";
            font-style: normal;
            font-size: 16px;
            font-weight: 700;
            line-height: 24px;
          }
        `}
      </style>
      <input
        type="text"
        placeholder="Search"
        style={{
          width: "100%",
          padding: "8px 40px",
          background: "var(--Neutral-gray-200, #CECECF)",
          borderRadius: "30px",
          border: "none",
          outline: "none",
          fontFamily: "'Space Grotesk'",
          fontSize: "16px",
          fontWeight: "700",
          lineHeight: "24px",
          color: "var(--Neutral-gray-400, #0A0A0F)",
        }}
      />
    </>
  );
};

function SearchField() {
  const [filterOpen, setFilterOpen] = useState(false);

  const toggleFilter = () => {
    setFilterOpen((prev) => !prev);
  };
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        background: "var(--Neutral-gray-200, #CECECF)",
        width: "22.3%",
        alignItems: "center",
        borderRadius: "var(--Spacing-S, 8px)",
        border: "1px solid var(--Grayscale-gray-600, #9f9f9f)",
        transition: "border-color 0.3s ease",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "10px",
          top: "55%",
          transform: "translateY(-50%)",
          color: "black",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path d={icons[findIndexByName(icons, "Search")].code} fill="#0A0A0F" />
        </svg>
      </div>
      <SearchInput />
      {filterOpen ? (
        <FiX
          size={24}
          onClick={toggleFilter}
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "black",
            cursor: "pointer",
          }}
        />
      ) : (
        <div style={{ position: "relative" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            onClick={toggleFilter}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "black",
              cursor: "pointer",
            }}
          >
            <path
              d={icons[findIndexByName(icons, "Tune")].code}
              fill="#0A0A0F"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
export default SearchField;
