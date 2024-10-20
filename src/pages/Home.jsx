import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/sections/Hero.jsx";
import SectionRenderer from "../components/sections/SectionRenderer.jsx";
import CTA from "../components/sections/CTA.jsx";

const Home = () => {
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
            const offsetPosition = window.pageYOffset + elementPosition - headerOffset;
            // i dont know what the fuck i wrote but it works
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
          } else {
            console.error('Element not found:', location.state.scrollTo);
          }
        }
      }, 500);
    };

    if (location.state && location.state.scrollTo) {
      scrollToSectionWithOffset();
    }
  }, [location]);
  return (
    <>
      <Hero
        headline="Learn, Grow, Succeed"
        description="Explore advanced computer science courses designed for Algerian students. CSE Hub is your partner in education."
        isbutton={true}
      />
      <SectionRenderer prop="Offer" />
      <SectionRenderer prop="Courses" />
      <div id="student-stories"> {/* Ensure this ID matches the state reference */} 
        <SectionRenderer prop="ImageCardList" />
      </div>
      <CTA
        headline="Join us today"
        description="Sign up now to access a wealth of resources and start your learning journey."
        isbutton={true}
      />
    </>
  );
};

export default Home;
