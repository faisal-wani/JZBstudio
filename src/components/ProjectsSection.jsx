import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";
import Loader from "./Loader";
import projects from "../data/projects";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectProject = (project) => {
    setIsLoading(true);
    setTimeout(() => {
      setSelectedProject(project);
      setIsLoading(false);
      // Scroll to top after selection
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 300);
  };

  const handleBackToProjects = () => {
    setIsLoading(true);
    setTimeout(() => {
      setSelectedProject(null);
      setIsLoading(false);
      // Scroll to top after going back
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      <AnimatePresence>{isLoading && <Loader />}</AnimatePresence>

      <AnimatePresence mode="wait">
        {selectedProject ? (
          <ProjectDetail project={selectedProject} onBack={handleBackToProjects} />
        ) : (
          <motion.section
            id="projects"
            className="py-16 bg-gray-50"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-12">
                🌟 Our Featured Projects
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {projects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onSelectProject={handleSelectProject}
                  />
                ))}
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectsSection;
