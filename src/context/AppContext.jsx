import React, { createContext, useState } from "react";

// Create the context
export const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  // Hero and CTA Props for the Home page
  const heroProps = {
    headline: "Learn, Grow, Succeed",
    description:
      "Explore advanced computer science courses designed for Algerian students. CSE Hub is your partner in education.",
    isbutton: true,
    page: "signup",
  };
  const ctaProps = {
    headline: "Join us today",
    description:
      "Sign up now to access a wealth of resources and start your learning journey.",
    isbutton: true,
    page: "signup",
    buttoncontent: "Sign up",
  };
  const studentStories = [
    { name: "Student A", comment: "Achieved great success!" },
    { name: "Student B", comment: "Improved my skills drastically!" },
    { name: "Student C", comment: "Reached my goals with CSE Hub." },
  ];
  const ImageCardListProps = {
    headline: "Success stories",
    description: "Hear from our students who have achieved their goals.",
  };
  // Hero and CTA Props for the Courses page
  const coursesHeroProps = {
    headline: "Explore our courses",
    description:
      "Explore advanced computer science courses designed for Algerian students. CSE Hub is your partner in education.",
    isbutton: false,
  };

  const ctaProps1 = {
    headline: "How it works",
    description:
      "Our courses are designed to follow the ministry program, ensuring you receive a structured and comprehensive education. Each course includes translated content, step-by-step tutorials, and student-created resources.",
    isbutton: false,
  };
  const searchProps = {
    title: "Find your course",
    description:
      "Use the search bar to quickly find specific courses that match your interests.",
  };
  const ctaProps2 = {
    headline: "Start learning today",
    description:
      "Join now and take the first step towards mastering computer science.",
    isbutton: false,
  };
  // Timetables Props
  const timetablesHeroProps = {
    headline: "Manage Your Schedule",
    description: "Keep track of your study and exam schedules effortlessly.",
    isbutton: false,
  };
  const timetablesCtaProps = {
    headline: "How to Use the Timetables",
    description:
      "Easily navigate through our organized timetable section. Find study timetables and exam schedules categorized by semesters. Download or subscribe for updates to stay informed.",
    isbutton: false,
  };
  const timetablesSearchProps = [
    {
      title: "Find Your Timetable",
      description:
        "Use the search bar to locate your schedule based on your group and semester.",
    },
    {
      title: "Find Your Exam Schedule",
      description:
        "Use the search bar to locate your exam dates based on your group and semester.",
    },
  ];
  const subscriptionProps = {
    headlines: [
      "Stay updated with timetables",
      "Subscribe for CSE Hub newsletter",
    ],
    secondheadlines: ["Never miss a beat", "Tailored to you"],
    descriptions: [
      "Subscribe to our newsletter and get the latest timetables delivered straight to your inbox. Stay ahead of your schedule with real-time updates on classes and exams.",
      "Receive personalized updates based on your semester and group. Keep your academic life organized with the information that matters most to you.",
      [
        {
          text: "By subscribing, you agree to the CSE Hub ",
          link: {
            text: "Terms of Service",
            url: "/terms",
          },
          text1: " and ",
          link1: {
            text: "Privacy Policy",
            url: "/privacy",
          },
          continuation: ".",
        },
      ],
    ],
    Button: "Subscribe",
  };
  // About Page Props
  const aboutHeroProps = {
    headline: "Discover CSE Hub",
    description:
      "Learn more about who we are, what we stand for, and our journey in supporting students.",
    isbutton: false,
    hero_img: true,
  };
  const aboutCtaProps1 = {
    headline: "Our Mission & Vision",
    description:
      "At CSE Hub, our mission is to provide high-quality educational resources tailored to the Algerian university program in computer science engineering (CSE), empowering students to achieve academic excellence. Our vision is to create a supportive and innovative learning environment that fosters growth and success in the field of CSE.",
    isbutton: false,
    hero_img: true,
    isleft: false,
  };
  const aboutCtaProps2 = {
    headline: "Our Journey",
    description:
      "CSE Hub was founded by students, for students, with the aim of addressing the unique challenges faced by Algerian university students. From humble beginnings to a growing platform, our story is one of passion, dedication, and a commitment to education.",
    isbutton: false,
    hero_img: true,
    isleft: true,
  };
  const aboutCtaProps3 = {
    headline: "How We Work",
    description:
      "We believe in a student-centric approach, combining comprehensive course materials, interactive tutorials, and real-time support. Our methods are designed to enhance learning, encourage collaboration, and provide practical resources to help students succeed.",
    isbutton: false,
    hero_img: true,
    isleft: false,
  };
  const aboutCtaProps4 = {
    headline: "Building a Strong Community",
    description:
      "Our impact goes beyond academics. By fostering a vibrant community through our Discord server and other initiatives, we aim to create a space where students can connect, share knowledge, and support each other in their educational journey.",
    isbutton: false,
    hero_img: true,
    isleft: true,
  };
  const aboutImageCardListProps = {
    headline: "Our Dedicated Team",
    description: "Get to know the passionate individuals behind CSE Hub.",
    data: [
      { name: "Name", comment: "Description" },
      { name: "Name", comment: "Description" },
      { name: "Name", comment: "Description" },
    ],
  };
  const aboutCtaProps5 = {
    headline: "Join Us",
    description:
      "Ready to be a part of our community? Sign up today to access personalized resources and support.",
    isbutton: false,
    hero_img: true,
  };
  // Help Page Props
  const helpHeroProps = {
    headline: "Welcome to Help Center",
    description:
      "Here, you'll find answers to common questions, and ways to get in touch with us.",
    isbutton: false,
    hero_img: true,
  };
  const faqProps = {
    headline: "Frequently Asked Questions",
    data: [
      {
        text: "How do I enroll in a course?",
        description:
          "To enroll in a course, first, visit our course catalog and browse the available options. Once you have found a course that interests you, click on the course name to view more details. You will be prompted to sign in to your account or create a new one if you don't have one already. After signing in, you can proceed to the payment page to complete the enrollment. Once the payment is confirmed, you will receive an email with instructions on how to start your course. Should you encounter any issues during the enrollment process, feel free to reach out to our support team for assistance.",
      },
      {
        text: "What should I do if I forget my password?",
        description:
          "If you've forgotten your password, don't worry, it's easy to reset. Simply go to the login page and click on the 'Forgot Password?' link. You will be prompted to enter the email address associated with your account. After submitting your email, you will receive a password reset link in your inbox. Click on the link, and you will be redirected to a page where you can create a new password. Make sure to choose a secure password that you will remember. If you do not receive the reset email within a few minutes, please check your spam or junk folder, or contact our support team for further assistance.",
      },
      {
        text: "How can I track my course progress?",
        description:
          "To track your progress in a course, simply log in to your account and navigate to the 'My Courses' section. Here, you will see a list of all the courses you are enrolled in. For each course, you can view your progress, including the percentage of the course you've completed, and which lessons or modules you have finished. You can also see your scores on any quizzes or assignments if applicable. If you need additional help understanding your progress, or if you have specific questions about your course, feel free to contact our support team for more details.",
      },
      {
        text: "Where can I find my favorite courses?",
        description:
          "To find your favorite courses, first, ensure you are logged into your account. You can mark a course as a favorite by clicking on the heart icon next to the course title on the course catalog page. Once a course is marked as a favorite, you can easily access it from the 'Favorites' section in your account dashboard. If you've already enrolled in the course, it will also appear in the 'My Courses' section. If you ever forget where you placed your favorite course, use the search bar at the top of the page to search for it by name or topic.",
      },
    ],
  };
  const supportFormProps = {
    headline: "Contact Us",
    description:
      "Have a question or need assistance? Fill out the form below, and we'll get back to you as soon as possible.",
  };
  const ctaHelpProps = {
    headline: "Join our community server",
    description:
      "Connect with other students and get tips and support on our Discord community server. Join us to be a part of the conversation!",
    isbutton: true,
    page: "https://discord.gg/u9UAPnHV5b",
    buttoncontent: "Join server",
    hero_img: true,
    external: true,
  };
  return (
    <AppContext.Provider
      value={{
        heroProps,
        ctaProps,
        studentStories,
        ImageCardListProps,
        coursesHeroProps,
        ctaProps1,
        searchProps,
        ctaProps2,
        timetablesHeroProps,
        timetablesCtaProps,
        timetablesSearchProps,
        subscriptionProps,
        aboutHeroProps,
        aboutCtaProps1,
        aboutCtaProps2,
        aboutCtaProps3,
        aboutCtaProps4,
        aboutImageCardListProps,
        aboutCtaProps5,
        helpHeroProps,
        faqProps,
        supportFormProps,
        ctaHelpProps,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
