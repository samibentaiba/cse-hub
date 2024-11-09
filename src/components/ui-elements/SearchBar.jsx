import InputAdornment from "@mui/material/InputAdornment";
import { FaSearch } from "react-icons/fa";
import { FiFilter } from "react-icons/fi"; // Filter icon for the right side
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: "30px", // Rounded corners for search bar
    paddingRight: "40px", // Space for right-side icon (filter)
    paddingLeft: "40px", // Space for left-side icon (search)
    height: "48px", // Adjust height to match design
    "& fieldset": {
      borderColor: "#d3d3d3", // Light grey border color
    },
    "&:hover fieldset": {
      borderColor: "#999", // Darker border on hover
    },
    "&.Mui-focused fieldset": {
      borderColor: "#555", // Border color when focused
    },
  },
}));

function SearchBar() {
  return (
    <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
      <CustomTextField
        fullWidth
        variant="outlined"
        placeholder="Search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FaSearch style={{ color: "#555" }} /> {/* Styled search icon */}
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <FiFilter style={{ color: "#555" }} /> {/* Styled filter icon */}
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}

export default SearchBar;
