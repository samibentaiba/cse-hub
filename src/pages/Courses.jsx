import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Hero from "../components/sections/Hero.jsx";
import SectionRenderer from "../components/sections/SectionRenderer.jsx";
import CTA from "../components/sections/CTA.jsx";
import Search from "../components/sections/Search.jsx";

const Courses = () => {
  const { coursesHeroProps, ctaProps1, searchProps, ctaProps2 } =
    useContext(AppContext); // Consume the context

  return (
    <>
      <Hero {...coursesHeroProps} />
      <CTA {...ctaProps1} />
      <Search {...searchProps} />
      <SectionRenderer prop="TitleCardGrid" />
      <SectionRenderer prop="BentoBoxGrid" />
      <CTA {...ctaProps2} />
    </>
  );
};

export default Courses;
