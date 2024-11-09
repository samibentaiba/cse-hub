import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/sections/Hero.jsx";
import FAQ from "../components/sections/FAQ.jsx";
import CTA from "../components/sections/CTA.jsx";
import SupportForm from "../components/sections/SupportForm.jsx";
import { AppContext } from "../context/AppContext.jsx";

const Help = () => {
  const { helpHeroProps, faqProps, supportFormProps, ctaHelpProps } =
    useContext(AppContext);
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

  return (
    <>
      <Hero {...helpHeroProps} />
      <div id="faq">
        <FAQ {...faqProps} />
      </div>
      <div id="supportform">
        <SupportForm {...supportFormProps} />
      </div>

      <CTA {...ctaHelpProps} />
    </>
  );
};

export default Help;
