import React from "react";
import { useState } from "react";
import { FiX } from "react-icons/fi"; // Import close icon for when filter is open
const SearchInput = () => {
  return (
    <>
      <style>
        {`
            input::placeholder {
              color: var(--Grayscale-gray-900, #0A0A0F);
              font-family: "Space Grotesk";
              font-size: 16px;
              font-weight: 700;
              line-height: 24px;
            }
          `}
      </style>

      {/* Input Field */}
      <input
        type="text"
        placeholder="Search"
        style={{
          width: "100%",
          padding: "12px 40px",
          borderRadius: "30px",
          border: "none",
          outline: "none",
          color: "black",
        }}
      />
    </>
  );
};
function SearchBar() {
  // State to manage filter panel visibility
  const [filterOpen, setFilterOpen] = useState(false);

  // Toggle the filter panel
  const toggleFilter = () => {
    setFilterOpen((prev) => !prev);
  };

  return (
    <div
      style={{
        display: "flex",
        padding: "var(--Spacing-3XL, 4rem)",
        justifyContent: "space-between",
        alignItems: "flex-end",
        alignSelf: "stretch",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "var(--Spacing-M, 1rem)",
          flex: "1 0 0",
        }}
      >
        <h3
          style={{
            fontFamily: "'Space Grotesk'",
            fontSize: "1.5rem",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "2rem",
            letterSpacing: "-0.01563rem",
          }}
        >
          Find your course
        </h3>
        <p
          style={{
            fontFamily: "'Space Grotesk'",
            fontSize: "1rem",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "1.5rem",
          }}
        >
          Use the search bar to quickly find specific courses that match your
          interests.
        </p>
      </div>
      <div
        style={{
          position: "relative",
          borderRadius: "10px",
          backgroundColor: "#fff",
          width: "300px",
          display: "flex",
          alignItems: "center",
          borderRadius: "var(--Spacing-S, 8px)",
          border: "1px solid var(--Grayscale-gray-600, #5A5A5E)",
          transition: "border-color 0.3s ease", // Smooth border transition on focus
        }}
      >
        {/* Search Icon */}
        <div
          style={{
            position: "absolute",
            left: "10px",
            top: "50%",
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
            <path
              d="M9.5 16C7.68333 16 6.146 15.3707 4.888 14.112C3.63 12.8533 3.00067 11.316 3 9.5C2.99933 7.684 3.62867 6.14667 4.888 4.888C6.14733 3.62933 7.68467 3 9.5 3C11.3153 3 12.853 3.62933 14.113 4.888C15.373 6.14667 16.002 7.684 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L20.3 18.9C20.4833 19.0833 20.575 19.3167 20.575 19.6C20.575 19.8833 20.4833 20.1167 20.3 20.3C20.1167 20.4833 19.8833 20.575 19.6 20.575C19.3167 20.575 19.0833 20.4833 18.9 20.3L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16ZM9.5 14C10.75 14 11.8127 13.5627 12.688 12.688C13.5633 11.8133 14.0007 10.7507 14 9.5C13.9993 8.24933 13.562 7.187 12.688 6.313C11.814 5.439 10.7513 5.00133 9.5 5C8.24867 4.99867 7.18633 5.43633 6.313 6.313C5.43967 7.18967 5.002 8.252 5 9.5C4.998 10.748 5.43567 11.8107 6.313 12.688C7.19033 13.5653 8.25267 14.0027 9.5 14Z"
              fill="#0A0A0F"
            />
          </svg>
        </div>
        {/* Input Field */}
        <SearchInput />

        {/* Filter Icon (toggles between filter and close icons) */}
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
              cursor: "pointer", // Make it clickable
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
                cursor: "pointer", // Make it clickable
              }}
            >
              <path
                d="M12 21C11.7167 21 11.4793 20.904 11.288 20.712C11.0967 20.52 11.0007 20.2827 11 20V16C11 15.7167 11.096 15.4793 11.288 15.288C11.48 15.0967 11.7173 15.0007 12 15C12.2827 14.9993 12.5203 15.0953 12.713 15.288C12.9057 15.4807 13.0013 15.718 13 16V17H20C20.2833 17 20.521 17.096 20.713 17.288C20.905 17.48 21.0007 17.7173 21 18C20.9993 18.2827 20.9033 18.5203 20.712 18.713C20.5207 18.9057 20.2833 19.0013 20 19H13V20C13 20.2833 12.904 20.521 12.712 20.713C12.52 20.905 12.2827 21.0007 12 21ZM4 19C3.71667 19 3.47934 18.904 3.288 18.712C3.09667 18.52 3.00067 18.2827 3 18C2.99934 17.7173 3.09534 17.48 3.288 17.288C3.48067 17.096 3.718 17 4 17H8C8.28334 17 8.521 17.096 8.713 17.288C8.905 17.48 9.00067 17.7173 9 18C8.99934 18.2827 8.90334 18.5203 8.712 18.713C8.52067 18.9057 8.28334 19.0013 8 19H4ZM8 15C7.71667 15 7.47934 14.904 7.288 14.712C7.09667 14.52 7.00067 14.2827 7 14V13H4C3.71667 13 3.47934 12.904 3.288 12.712C3.09667 12.52 3.00067 12.2827 3 12C2.99934 11.7173 3.09534 11.48 3.288 11.288C3.48067 11.096 3.718 11 4 11H7V10C7 9.71667 7.096 9.47934 7.288 9.288C7.48 9.09667 7.71734 9.00067 8 9C8.28267 8.99934 8.52034 9.09534 8.713 9.288C8.90567 9.48067 9.00134 9.718 9 10V14C9 14.2833 8.904 14.521 8.712 14.713C8.52 14.905 8.28267 15.0007 8 15ZM12 13C11.7167 13 11.4793 12.904 11.288 12.712C11.0967 12.52 11.0007 12.2827 11 12C10.9993 11.7173 11.0953 11.48 11.288 11.288C11.4807 11.096 11.718 11 12 11H20C20.2833 11 20.521 11.096 20.713 11.288C20.905 11.48 21.0007 11.7173 21 12C20.9993 12.2827 20.9033 12.5203 20.712 12.713C20.5207 12.9057 20.2833 13.0013 20 13H12ZM16 9C15.7167 9 15.4793 8.904 15.288 8.712C15.0967 8.52 15.0007 8.28267 15 8V4C15 3.71667 15.096 3.47934 15.288 3.288C15.48 3.09667 15.7173 3.00067 16 3C16.2827 2.99934 16.5203 3.09534 16.713 3.288C16.9057 3.48067 17.0013 3.718 17 4V5H20C20.2833 5 20.521 5.096 20.713 5.288C20.905 5.48 21.0007 5.71734 21 6C20.9993 6.28267 20.9033 6.52034 20.712 6.713C20.5207 6.90567 20.2833 7.00134 20 7H17V8C17 8.28334 16.904 8.521 16.712 8.713C16.52 8.905 16.2827 9.00067 16 9ZM4 7C3.71667 7 3.47934 6.904 3.288 6.712C3.09667 6.52 3.00067 6.28267 3 6C2.99934 5.71734 3.09534 5.48 3.288 5.288C3.48067 5.096 3.718 5 4 5H12C12.2833 5 12.521 5.096 12.713 5.288C12.905 5.48 13.0007 5.71734 13 6C12.9993 6.28267 12.9033 6.52034 12.712 6.713C12.5207 6.90567 12.2833 7.00134 12 7H4Z"
                fill="#0A0A0F"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Filter Options Panel (displayed when filterOpen is true) */}
      {filterOpen && (
        <div
          style={{
            position: "absolute",
            top: "50px", // Positioned below the search bar
            right: "0",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            padding: "10px",
            zIndex: "1000", // Bring it on top of other elements
          }}
        >
          {/* Example filter options */}
          <p>Filter by:</p>
          <label>
            <input type="checkbox" /> Category 1
          </label>
          <br />
          <label>
            <input type="checkbox" /> Category 2
          </label>
          <br />
          <label>
            <input type="checkbox" /> Category 3
          </label>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
