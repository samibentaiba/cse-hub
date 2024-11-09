import React, { useContext } from "react";
import { AppContext } from "../context/AppContext"; // Import the context
import Hero from "../components/sections/Hero.jsx";
import CTA from "../components/sections/CTA.jsx";
import Search from "../components/sections/Search.jsx";
import Subscription from "../components/sections/Subscription.jsx";

const Timetables = () => {
  const {
    timetablesHeroProps,
    timetablesCtaProps,
    timetablesSearchProps,
    subscriptionProps,
  } = useContext(AppContext); // Access the props from context

  return (
    <>
      <Hero {...timetablesHeroProps} />
      <CTA {...timetablesCtaProps} />
      {timetablesSearchProps.map((searchProps, index) => (
        <Search key={index} {...searchProps} />
      ))}
      <Subscription {...subscriptionProps} />
    </>
  );
};

export default Timetables;
