import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Sections/Navbar.jsx";
import Footer from "./components/Sections/Footer.jsx";
function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
