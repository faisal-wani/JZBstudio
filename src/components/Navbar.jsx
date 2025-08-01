import React, { useEffect, useState } from "react";
import MenuBar from "./MenuBar";
import { Link } from "react-scroll";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      } flex justify-between items-center px-6 py-2`}
    >
      {/* Logo wrapped in scroll link */}
      <Link
        to="hero"
        smooth={true}
        duration={500}
        offset={-70} // Adjust for navbar height
        className="cursor-pointer"
      >
        <img
          src={
            scrolled
              ? `${process.env.PUBLIC_URL}/images/Logoo_black.png`
              : `${process.env.PUBLIC_URL}/images/Logoo.png`
          }
          alt="Logo"
          className="h-[10px] sm:h-[10px] md:h-[15px] transition-all duration-300"
        />
      </Link>

      {/* Menu bar */}
      <MenuBar />
    </header>
  );
};

export default Navbar;
