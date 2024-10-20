import Hero from "../components/sections/Hero.jsx";
import SectionRenderer from "../components/sections/SectionRenderer.jsx";
import CTA from "../components/sections/CTA.jsx";
import Search from "../components/sections/Search.jsx";
const Courses = () => {
  return (
    <>
      <Hero
        headline={"Explore our courses"}
        description={
          "Explore advanced computer science courses designed for algerian students. CSE Hub is your partner in education."
        }
        isbutton={false}
      />
      <CTA
        headline={"How it works"}
        description={
          "Our courses are designed to follow the ministry program, ensuring you receive a structured and comprehensive education. Each course includes translated content, step-by-step tutorials, and student-created resources."
        }
        isbutton={false}
      />
      <Search />
      <SectionRenderer prop="TitleCardGrid" />
      <SectionRenderer prop="BentoBoxGrid" />
      <CTA
        headline={"Start learning today"}
        description={
          "Join now and take the first step towards mastering computer science."
        }
        isbutton={false}
      />
    </>
  );
};

export default Courses;
