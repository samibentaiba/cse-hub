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
import Error from "./pages/Error.jsx";
import Courses from "./pages/Courses.jsx";
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
        path: "signup", // Signup path
        element: <Signup />,
      },
      {
        path: "*", // Catch-all for undefined routes
        element: <Error />, // Show Error page for unknown routes
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
