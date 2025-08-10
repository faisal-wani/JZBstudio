import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const menuVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit: { opacity: 0, x: 50 },
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

const submenuVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: "auto", opacity: 1, transition: { staggerChildren: 0.05 } },
};

const submenuItemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

const MenuBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showProjectsSubmenu, setShowProjectsSubmenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile) setShowMenu(true);
  };

  const handleMouseLeave = () => {
    if (!isMobile) setShowMenu(false);
    if (!isMobile) setShowProjectsSubmenu(false);
  };

  const toggleMenu = () => {
    if (isMobile) setShowMenu((prev) => !prev);
  };

  // Toggle submenu for Projects on mobile
  const toggleProjectsSubmenu = (e) => {
    e.preventDefault();
    if (isMobile) setShowProjectsSubmenu((prev) => !prev);
  };

  // Open submenu on hover for desktop
  const handleProjectsMouseEnter = () => {
    if (!isMobile) setShowProjectsSubmenu(true);
  };

  const handleProjectsMouseLeave = () => {
    if (!isMobile) setShowProjectsSubmenu(false);
  };

  const handleLinkClick = (path) => {
    setShowMenu(false);
    setShowProjectsSubmenu(false);
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const links = [
    { name: "Home", path: "/" },
    {
      name: "Projects",
      path: "/projects",
      submenu: [
        { name: "All", path: "/projects/all" },
        { name: "Interiors", path: "/projects/interiors" },
        { name: "Architecture", path: "/projects/architecture" },
        { name: "Commercial", path: "/projects/commercial" },
        { name: "Product Design", path: "/projects/product-design" },
      ],
    },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Hamburger icon */}
      <Menu className="w-8 h-8 cursor-pointer text-black" onClick={toggleMenu} />

      <AnimatePresence>
        {showMenu && (
          <motion.ul
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute right-0 top-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg py-2 z-50
              w-[40vw] max-w-[180px] sm:max-w-[180px] h-screen"
          >
            {/* Close icon on mobile */}
            {isMobile && (
              <div className="flex justify-end pr-4 pt-2">
                <X
                  className="w-6 h-6 cursor-pointer text-gray-700"
                  onClick={() => setShowMenu(false)}
                />
              </div>
            )}

            {/* Route Links */}
            {links.map((link) => {
              if (link.submenu) {
                // Projects with submenu
                return (
                  <motion.li
                    key={link.path}
                    variants={itemVariants}
                    onMouseEnter={handleProjectsMouseEnter}
                    onMouseLeave={handleProjectsMouseLeave}
                  >
                    <Link
                      to={link.path}
                      className="block px-4 py-2 cursor-pointer hover:text-blue-600 relative group flex justify-between items-center"
                      onClick={toggleProjectsSubmenu}
                    >
                      {link.name}
                      {/* Arrow indicator */}
                      <span className="ml-2 inline-block transform transition-transform duration-300">
                        {showProjectsSubmenu ? "▾" : "▸"}
                      </span>
                    </Link>

                    <AnimatePresence>
                      {showProjectsSubmenu && (
                        <motion.ul
                          variants={submenuVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          className="ml-4 border-l border-gray-300"
                        >
                          {link.submenu.map((sub) => (
                            <motion.li
                              key={sub.path}
                              variants={submenuItemVariants}
                            >
                              <Link
                                to={sub.path}
                                className="block px-4 py-2 cursor-pointer hover:text-blue-600"
                                onClick={() => handleLinkClick(sub.path)}
                              >
                                {sub.name}
                              </Link>
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </motion.li>
                );
              }

              // Normal menu item without submenu
              return (
                <motion.li key={link.path} variants={itemVariants}>
                  <Link
                    to={link.path}
                    className="block px-4 py-2 cursor-pointer hover:text-blue-600 relative group"
                    onClick={() => handleLinkClick(link.path)}
                  >
                    {link.name}
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </motion.li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuBar;
