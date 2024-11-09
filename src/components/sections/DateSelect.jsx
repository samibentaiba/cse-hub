import React, { useState, useEffect } from "react";
import SelectField from "../cards/input-card/SelectField.jsx";

// Utility function to calculate the number of days in a month
const getDaysInMonth = (month, year) => {
  const monthNumber = parseInt(month);
  if (monthNumber === 2) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;
  }
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return daysInMonth[monthNumber - 1];
};

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
        disabled={!month || !year}
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
