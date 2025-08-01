import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import HeroSection from "./components/HeroSection";
import ProjectCard from "./components/ProjectCard";
import ProjectDetail from "./components/ProjectDetail";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar"; // ✅ Correct import

import projects from "./data/projects";
import "./App.css";

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectProject = (project) => {
    setIsLoading(true);
    setTimeout(() => {
      setSelectedProject(project);
      setIsLoading(false);
    }, 300);
  };

  const handleBackToProjects = () => {
    setIsLoading(true);
    setTimeout(() => {
      setSelectedProject(null);
      setIsLoading(false);
    }, 300);
  };

  return (
    <>
      {/* ✅ Navbar with logo + hover menu */}
      <Navbar />

      {/* Loader when switching views */}
      <AnimatePresence>{isLoading && <Loader />}</AnimatePresence>

      <AnimatePresence mode="wait">
        {selectedProject ? (
          <ProjectDetail project={selectedProject} onBack={handleBackToProjects} />
        ) : (
          <>
            <div id="hero">
              <HeroSection />
            </div>

            <section id="projects" className="container-section">
              <div className="container mx-auto px-6">
                <h2 className="section-title">Our Featured Projects</h2>
                <div className="projects-grid">
                  {projects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onSelectProject={handleSelectProject}
                    />
                  ))}
                </div>
              </div>
            </section>

            <div id="about">
              <AboutSection />
            </div>

            <div id="services">
              <ServicesSection />
            </div>

            <div id="contact">
              <ContactSection />
            </div>

            <footer className="footer-style">
              &copy; 2025 Your Architecture Firm. All rights reserved.
            </footer>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default App;
