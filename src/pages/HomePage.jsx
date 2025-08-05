import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServiceSection  from "../components/ServicesSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProjectsSection/>
      <ServiceSection/>
      <AboutSection />
      
      <ContactSection />
      <Footer/>
    </>
  );
};

export default HomePage;
