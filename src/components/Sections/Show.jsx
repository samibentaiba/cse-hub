import React from "react";
import GreyTicket from "../containers/GreyTicket.jsx";
import BlueTicket from "../containers/BlueTicket.jsx";
import BentoBox from "../containers/BentoBox.jsx";

import {
  MdOutlineMenuBook,
  MdOutlineSupportAgent,
  MdOutlineAccessTimeFilled,
} from "react-icons/md";
import { HiMiniCodeBracketSquare } from "react-icons/hi2";
import { PiSigmaBold } from "react-icons/pi";
import { MdBarChart } from "react-icons/md";
import { IoMdSettings } from "react-icons/io"
import { BiSolidMicrochip } from "react-icons/bi";
import { PiBagSimpleFill } from "react-icons/pi";
import { FaPen } from "react-icons/fa";
import { MdOutlineShowChart } from "react-icons/md";
import { MdCalculate } from "react-icons/md";
function Show({ prop }) {
  const courses = [
    {
      name: "Algorithms",
      description:
        "Understand the foundations of algorithm design and data management.",
      icon: HiMiniCodeBracketSquare,
    },
    {
      name: "Algebra",
      description:
        "Master the principles of algebra essential for computer science.",
      icon: PiSigmaBold,
    },
    {
      name: "Math Analysis",
      description: "Dive into the core concepts of mathematical analysis.",
      icon: MdBarChart,
    },
    {
      name: "Operating Systems",
      description:
        "Learn about the essential functions and components of operating systems.",
      icon: MdOutlineMenuBook,
    },
    {
      name: "Computer Architecture",
      description: "Explore the structure and behavior of computer systems.",
      icon: BiSolidMicrochip ,
    },
    {
      name: "Office & Web",
      description:
        "Learn essential office software and web technologies to enhance your productivity and web skills.",
      icon: PiBagSimpleFill,
    },
    {
      name: "Written Expression",
      description:
        "Develop your written communication skills, focusing on techniques for clear and effective expression.",
      icon: FaPen,
    },
    {
      name: "Probability & Stats",
      description:
        "Understand the fundamentals of probability and statistics, and how to apply them in various contexts.",
      icon: MdOutlineShowChart ,
    },
    {
      name: "Math Logic",
      description:
        "Explore the principles of mathematical logic, including reasoning, proof techniques, and logical structures.",
      icon: MdCalculate,
    },
  ];

  const offer = [
    {
      name: "Courses",
      description:
        "Access step-by-step tutorials and computer science courses aligned with the ministry program to enhance your learning.",
      icon: MdOutlineMenuBook,
    },
    {
      name: "TimeTables",
      description: "Stay organized with our complete study and exam schedules.",
      icon: MdOutlineAccessTimeFilled,
    },
    {
      name: "Help",
      description:
        "Get assistance with FAQs, contact forms, and live chat support to find the help you need.",
      icon: MdOutlineSupportAgent,
    },
  ];

  const blueCourses = [
    {
      name: "Algorithms",
      icon: HiMiniCodeBracketSquare,
    },
    {
      name: "Algebra",
      icon: PiSigmaBold,
    },
    {
      name: "Math Analysis",
      icon: MdBarChart,
    },
    {
      name: "Operating Systems",
      icon: IoMdSettings,
    },
    {
      name: "Computer Architecture",
      icon: BiSolidMicrochip,
    },
    {
      name: "Office & Web",
      icon: PiBagSimpleFill,
    },
    {
      name: "Written Expression",
      icon: FaPen,
    },
    {
      name: "Probability & Stats",
      icon: MdOutlineShowChart,
    },
    {
      name: "Math Logic",
      icon: MdCalculate ,
    },
  ];

  if (prop === "Courses") {
    return (
      <div
        style={{
          display: "flex",
          padding: "var(--Spacing-3XL, 4rem)",
          flexDirection: "column",
          alignItems: "center",
          gap: "var(--Spacing-3XL, 4rem)",
          alignSelf: "stretch",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "var(--Spacing-M, 1rem)",
            alignSelf: "stretch",
          }}
        >
          <h2
            style={{ 
              color: "var(--text, #000000)",
              textAlign: "center",
              fontFamily: "'Space Grotesk'",
              fontSize: "2.125rem",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "117.647%",
              letterSpacing: "-0.03125rem", }}
          >
            Our courses
          </h2>
          <p
            style={{
              color: "var(--text, #000000)",
              textAlign: "center",
              fontFamily: "'Space Grotesk'",
              fontSize: "1rem",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "1.5rem; /* 150% *",
            }}
          >
            Browse through our extensive list of modules and start learning
            today.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)", // 3 columns
            gap: "var(--Units-m, 4rem)", // Space between items
            width: "100%", // Adjust as needed
          }}
        >
          {courses.map((course, index) => (
            <GreyTicket
              key={index}
              name={course.name}
              icon={course.icon}
              description={course.description} // Add the description
              type={prop} // Add the type
            />
          ))}
        </div>
      </div>
    );
  }

  if (prop === "Offer") {
    return (
      <div
        style={{
          display: "flex",
          padding: "3rem 4rem",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "3rem",
          width: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "var(--Spacing-M, 1rem)",
            alignSelf: "stretch",
          }}
        >
          <h2
            style={{ 
              color: "var(--text, #000)",
              textAlign: "center",
              fontFamily: "'Space Grotesk'",
              fontSize: "2.125rem",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "117.647%",
              letterSpacing: "-0.03125rem", }}
          >
            What we offer
          </h2>
          <p
            style={{
              color: "var(--text, #000000)",
              textAlign: "center",
              fontFamily: "'Space Grotesk'",
              fontSize: "1rem",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "1.5rem; /* 150% *",
            }}
          >
            Discover the benefits of joining our learning community.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)", // 3 columns
            gap: "var(--Units-m, 4rem)", // Space between items
            width: "100%", // Adjust as needed
          }}
        >
          {offer.slice(0, 3).map((item, index) => (
            <GreyTicket
              key={index}
              name={item.name}
              icon={item.icon}
              description={item.description} // Add the description
              type={prop} // Add the type
            />
          ))}
        </div>
      </div>
    );
  }

  if (prop === "BlueCourses") {
    return (
      <div
        style={{
          display: "flex",
          padding: "var(--Units-5xl, 4rem)",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "var(--Units-xl, 32px)",
          alignSelf: "stretch",
        }}
      >
          <h2
            style={{ 
              color: "var(--text, #000)",
              fontFamily: "'Space Grotesk'",
              fontSize: "2.125rem",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "2.5rem; /* 117.647% *",
              letterSpacing: "-0.03125rem",
              alignSelf: "stretch", }}
          >
          Browse all
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)", // 3 columns
            gap: "var(--Units-m, 1rem)", // Space between items
            width: "100%", // Adjust as needed
          }}
        >
          {blueCourses.map((course, index) => (
            <BlueTicket key={index} name={course.name} icon={course.icon} />
          ))}
        </div>
      </div>
    );
  }
  const bentoboxs = [
    //dont put wrong # even if its readed but the algorithm of color picker doesnt work in bentobox.jsx
    //there is problem of #FFF & #000 and others
    //it should be #FFFFFF or #000000
    //it should be 6 degits
    {
      headline: "Organized curriculum",
      description:
        "Each course is structured to align with the ministry program, ensuring comprehensive coverage of the subject matter.",
      backgroundcolor: "#10183C",
    },
    {
      headline: "Access to previous exams",
      description:
        "Practice with previous local and international exams to better prepare for your tests.",
      backgroundcolor: "#96A1D4",
    },
    {
      headline: "Teacher tutorials included",
      description:
        "Benefit from detailed tutorials provided by experienced instructors, making complex topics easier to understand.",
      backgroundcolor: "#000000",
    },
    {
      headline: "Real-time discussions",
      description:
        "Engage with other students through comments under course materials for a collaborative learning experience.",
      backgroundcolor: "#6679CC",
    },
  ];

  const getClassName = (index) => {
    switch (index) {
      case 0:
        return "first_one";
      case 1:
        return "second_one";
      case 2:
        return "third_one";
      case 3:
        return "forth_one";
      case 4:
        return "fifth_one";
      default:
        return "";
    }
  };

  if (prop === "Bentoboxes") {
    return (
      <div
        className="bentoboxes-container"
        style={{
          display: "flex",
          padding: "var(--Units-5xl, 4rem)",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "var(--Units-xl, 2rem)",
          alignSelf: "stretch",
        }}
      >
        <h3
          className="bentoboxes-heading"
          style={{
            color: "var(--light-blue-text, #0A0A0F)",
            fontFamily: 'var(--Text-font-family, "Space Grotesk")',
            fontSize: "250%",
            fontWeight: 700,
            lineHeight: "40px",
            alignSelf: "stretch",
          }}
        >
          Why choose our courses?
        </h3>
        <div
          className="bentoboxes-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gridTemplateRows: "repeat(2, auto)", // Adjust to auto height for rows
            gap: "var(--Units-m, 1rem)",
            width: "100%",
          }}
        >
          {bentoboxs.map((data, index) => {
            // Initialize inline styles
            const inlineStyles = {
              height: "200px", // Set a fixed height for each grid item (adjust as needed)
              ...(index === 0
                ? {
                    gridColumn: "span 8",
                  }
                : {}),
              ...(index === 1
                ? {
                    gridColumn: "span 4",
                  }
                : {}),
              ...(index === 2
                ? {
                    gridColumn: "span 7",
                  }
                : {}),
              ...(index === 3
                ? {
                    gridColumn: "span 5",
                  }
                : {}),
            };

            // Get the class name using the helper function
            const className = `bento-box ${getClassName(index)}`.trim();

            return (
              <div
                key={index}
                className={className} // Use the defined className
                style={inlineStyles} // Apply inline styles here
              >
                <BentoBox
                  backgroundcolor={data.backgroundcolor}
                  headline={data.headline}
                  description={data.description}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return null;
}

export default Show;
