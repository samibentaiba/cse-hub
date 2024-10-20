import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/sections/Navbar.jsx";
import Footer from "./components/sections/Footer.jsx";
function App() {
  return (//npm i
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
