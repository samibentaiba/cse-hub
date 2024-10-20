import HeroSection from "../components/Sections/HeroSection.jsx";
import Show from "../components/Sections/Show.jsx";
import Stories from "../components/Sections/Stories.jsx";
import CallToAction from "../components/Sections/CallToAction.jsx";
const Home = () => {
  return (
    <>
      <HeroSection
        headline={`Learn, Grow, Succeed`} // Multiline string
        description={
          "Explore advanced computer science courses designed for Algerian students. CSE Hub is your partner in education."
        }
        isbutton={true}
        hero_img={true}
      />

      <Show prop="Offer" />
      <Show prop="Courses" />
      <Stories />
      <CallToAction
        headline="Join us today"
        description="Sign up now to access a wealth of resources and start your learning journey."
        hero_img={true}
        isbutton={true}
      />
    </>
  );
};

export default Home;
