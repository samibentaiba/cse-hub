import HeroSection from "../components/Sections/HeroSection.jsx";
import Show from "../components/Sections/Show.jsx";
import CallToAction from "../components/Sections/CallToAction.jsx";
import SearchBar from "../components/Sections/SearchBar.jsx";
const Courses = () => {
  return (
    <>
      <HeroSection
        headline={"Explore our courses"}
        description={
          "Explore advanced computer science courses designed for algerian students. CSE Hub is your partner in education."
        }
        isbutton={false}
        hero_img={true}
      />
      <CallToAction
        headline={"How it works"}
        description={
          "Our courses are designed to follow the ministry program, ensuring you receive a structured and comprehensive education. Each course includes translated content, step-by-step tutorials, and student-created resources."
        }
        isbutton={false}
        hero_img={true}
      />
      <SearchBar />
      <Show prop="BlueCourses" />
      <Show prop="Bentoboxes" />
      <CallToAction
        headline={"Start learning today"}
        description={
          "Join now and take the first step towards mastering computer science."
        }
        isbutton={false}
        hero_img={true}
      />
    </>
  );
};

export default Courses;
