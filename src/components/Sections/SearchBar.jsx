import * as React from 'react';
import { FaSearch } from "react-icons/fa";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function SearchBar() {
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
          Use the search bar to quickly find specific courses that match your interests.
        </p>
      </div>
      <div
        style={{
          position: 'relative',
          borderRadius: '4px',
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          width: '300px', // Set width for the search bar
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            padding: '0 16px',
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <FaSearch />
        </div>
        <Autocomplete
          sx={{ width: '100%' }} // Set width to 100% for better responsiveness
          options={[]} // Replace this with an array of options for the courses
          renderInput={(params) => (
            <TextField {...params} label="Search Courses" variant="outlined" />
          )}
        />
      </div>
    </div>
  );
}

export default SearchBar;
