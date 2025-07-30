import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project, onSelectProject }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  return (
    <motion.div
      ref={cardRef}
      className="block bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer relative"
      whileHover={{ scale: 1.03 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={() => onSelectProject(project)}
    >
      {/* Image */}
      <div className="relative w-full h-64 overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105"
        />
        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-white text-2xl font-semibold">{project.title}</h3>
        </motion.div>
      </div>

      {/* Text below image */}
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2 text-gray-800">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm">{project.location}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
