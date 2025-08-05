import React from "react";
import { Routes, Route } from "react-router-dom";
//import ScrollToTop from "./ScrollToTop";
import ScrollToTop from "./ScrollToTop";

import Homepage from "./pages/HomePage";
import Project from "./pages/ProjectsPage";
import Aboutpage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import ContactPage from "./pages/ContactPage";
// import other pages as needed

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
