import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate, // Import Navigate
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Help from "./pages/Help.jsx";
import About from "./pages/About.jsx";
import Error from "./pages/Error.jsx";
import Courses from "./pages/Courses.jsx";
import Policy from "./pages/Policy.jsx";
import Timetables from "./pages/Timetables.jsx";
import StudentStories from "./pages/StudentStories.jsx";
import Settings from "./pages/Settings.jsx";
import Terms from "./pages/Terms.jsx";
import App from "./App"; // Import App component

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Use App component to include Navbar on all pages
    children: [
      {
        path: "", // Empty path to redirect to Home
        element: <Navigate to="/home" />, // Redirect to the home page
      },
      {
        path: "home", // Home path
        element: <Home />, // Main layout component
        children: [
          {
            path: "courses",
            element: <Courses />,
          },
        ],
      },
      {
        path: "login", // Login path
        element: <Login />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "privacy",
        element: <Policy />,
      },
      {
        path: "terms",
        element: <Terms />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "help",
        element: <Help />,
      },
      {
        path: "timetables",
        element: <Timetables />,
      },
      {
        path: "student-stories",
        element: <StudentStories />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "*", // Catch-all for undefined routes
        element: <Error />, // SectionRenderer Error page for unknown routes
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
