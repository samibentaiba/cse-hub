import React, { useContext } from "react";
import { AppContext } from "../context/AppContext"; // Import context
import Hero from "../components/sections/Hero.jsx";
import CTA from "../components/sections/CTA.jsx";
import ImageCardList from "../components/renders/cards-renders/ImageCardList.jsx";

const About = () => {
  const {
    aboutHeroProps,
    aboutCtaProps1,
    aboutCtaProps2,
    aboutCtaProps3,
    aboutCtaProps4,
    aboutImageCardListProps,
    aboutCtaProps5,
  } = useContext(AppContext);

  return (
    <>
      <Hero {...aboutHeroProps} />
      <CTA {...aboutCtaProps1} />
      <CTA {...aboutCtaProps2} />
      <CTA {...aboutCtaProps3} />
      <CTA {...aboutCtaProps4} />
      <div id="student-stories">
        <ImageCardList {...aboutImageCardListProps} />
      </div>
      <CTA {...aboutCtaProps5} />
    </>
  );
};

export default About;
