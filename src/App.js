import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import HeroSection from "./components/HeroSection";
import ProjectCard from "./components/ProjectCard";
import ProjectDetail from "./components/ProjectDetail";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import Loader from "./components/Loader";

import projects from "./data/projects";
import "./App.css";

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Open project detail
  const handleSelectProject = (project) => {
    setIsLoading(true);
    setTimeout(() => {
      setSelectedProject(project);
      setIsLoading(false);
    }, 300);
  };

  // Back to project list
  const handleBackToProjects = () => {
    setIsLoading(true);
    setTimeout(() => {
      setSelectedProject(null);
      setIsLoading(false);
    }, 300);
  };

  return (
    <>
      {/* Loader when switching views */}
      <AnimatePresence>{isLoading && <Loader />}</AnimatePresence>

      <AnimatePresence mode="wait">
        {selectedProject ? (
          // Project detail view
          <ProjectDetail
            project={selectedProject}
            onBack={handleBackToProjects}
          />
        ) : (
          // Main homepage
          <>
            <HeroSection />

            {/* Project grid */}
            <section className="container-section">
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

            <AboutSection />
            <ServicesSection />
            <ContactSection />

            {/* Footer */}
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
