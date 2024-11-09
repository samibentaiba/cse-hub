import React, { useState, useEffect } from "react";
import SelectField from "../cards/input-card/SelectField.jsx";

// Utility function to calculate the number of days in a month
const getDaysInMonth = (month, year) => {
  const monthNumber = parseInt(month);
<<<<<<< HEAD
  if (monthNumber === 2) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;
  }
=======

  // Handle February (month 2) for leap years
  if (monthNumber === 2) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;
  }

  // Handle months with 30 or 31 days
>>>>>>> 8b990d1fd969a1f71a9b59542848747b78a722fa
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return daysInMonth[monthNumber - 1];
};

<<<<<<< HEAD
const DateSelect = ({ onChange }) => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [daysOptions, setDaysOptions] = useState([...Array(31)].map((_, i) => (i + 1).toString())) // Default to 31 days

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const years = Array.from({ length: 100 }, (_, i) => 2010 - i);

  useEffect(() => {
    if (month && year) {
      const monthIndex = months.indexOf(month) + 1;
      const daysInMonth = getDaysInMonth(monthIndex, year);
      const updatedDays = Array.from({ length: daysInMonth }, (_, index) =>
        (index + 1).toString()
      );
      setDaysOptions(updatedDays);

      // If the current day is more than the number of days in the month, set it to "1"
      if (parseInt(day) > daysInMonth) {
        setDay("1");
      }
    } else {
      // If month or year is not selected, show 31 days by default
      setDaysOptions([...Array(31)].map((_, i) => (i + 1).toString()));
    }

    // Notify the parent component about the change
    onChange({ day, month, year });
  }, [month, year, day]);
=======
const DateSelect = () => {
  const [day, setDay] = useState("");   // Initialize empty day
  const [month, setMonth] = useState(""); // Initialize empty month
  const [year, setYear] = useState("");  // Initialize empty year
  const [daysOptions, setDaysOptions] = useState([]);

  // Month and Year options
  const months = [
    "January", "February", "March", "April", "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];
  const years = Array.from({ length: 100 }, (_, i) => 2024 - i); // Generate years from 2024 to 1924

  // Effect hook to update daysOptions whenever month or year changes
  useEffect(() => {
    if (month && year) {
      const monthIndex = months.indexOf(month) + 1; // Convert month name to its number (1-12)
      const daysInMonth = getDaysInMonth(monthIndex, year); // Get number of days in the selected month
      const updatedDays = Array.from({ length: daysInMonth }, (_, index) =>
        (index + 1).toString() // Create array of day options as strings
      );
      
      // Update the daysOptions state with the new days
      setDaysOptions(updatedDays);

      // Automatically reset day if the selected day is out of range
      if (parseInt(day) > daysInMonth) {
        setDay("1"); // Reset to the first day if the selected day exceeds the new days count
      }
    } else {
      setDaysOptions([]); // Reset days options if either month or year is not selected
    }
  }, [month, year, day]); // Re-run effect when month, year, or day changes
>>>>>>> 8b990d1fd969a1f71a9b59542848747b78a722fa

  const handleDayChange = (e) => setDay(e.target.value);
  const handleMonthChange = (e) => setMonth(e.target.value);
  const handleYearChange = (e) => setYear(e.target.value);

  return (
    <>
      <SelectField
        options={months}
        value={month}
        onChange={handleMonthChange}
        placeholder="Month"
      />
      <SelectField
        options={daysOptions}
        value={day}
        onChange={handleDayChange}
        placeholder="Day"
<<<<<<< HEAD
        disabled={!month || !year}
=======
        disabled={!month || !year} // Disable day dropdown until both month and year are selected
>>>>>>> 8b990d1fd969a1f71a9b59542848747b78a722fa
      />
      <SelectField
        options={years}
        value={year}
        onChange={handleYearChange}
        placeholder="Year"
      />
    </>
  );
};

export default DateSelect;
