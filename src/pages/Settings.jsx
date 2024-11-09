import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/sections/Hero.jsx";
import SectionRenderer from "../components/sections/SectionRenderer.jsx";
import CTA from "../components/sections/CTA.jsx";
import ImageCardList from "../components/renders/cards-renders/ImageCardList.jsx";
import { AppContext } from "../context/AppContext.jsx";
const Settings = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToSectionWithOffset = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        if (location.state && location.state.scrollTo) {
          const element = document.getElementById(location.state.scrollTo);
          if (element) {
            const headerOffset = 50;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
              window.pageYOffset + elementPosition - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          } else {
            console.error("Element not found:", location.state.scrollTo);
          }
        }
      }, 500);
    };

    if (location.state && location.state.scrollTo) {
      scrollToSectionWithOffset();
    }
  }, [location]);
  const { heroProps, ctaProps, studentStories, ImageCardListProps } =
    useContext(AppContext);
  return (
    <>
      <Hero {...heroProps} />
      <SectionRenderer prop="Offer" />
      <SectionRenderer prop="Courses" />
      <div id="student-stories">
        <ImageCardList {...ImageCardListProps} data={studentStories} />
      </div>
      <CTA {...ctaProps} />
    </>
  );
};

export default Settings;
