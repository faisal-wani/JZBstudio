import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["60%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <motion.div
      ref={ref}
      className="relative flex items-center justify-center min-h-screen overflow-hidden text-white rounded-b-3xl shadow-xl"
      initial="hidden"
      animate="visible"
    >
      {/* Background image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center brightness-75"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero.jpg)`,
          backgroundPositionY: backgroundY,
          backgroundSize: "cover",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

     

      {/* Overlay pattern */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            repeating-linear-gradient(45deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 2px, transparent 2px, transparent 10px),
            repeating-linear-gradient(-45deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 2px, transparent 2px, transparent 10px)
          `,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 0.5, duration: 1 }}
      />

      {/* Center Logo & Subtitle */}
      <motion.div
        className="relative z-20 text-center px-4"
        style={{ y: textY }}
      >
        <motion.img
          src={`${process.env.PUBLIC_URL}/images/JZB-LOGO.svg`}
          alt="JZB Studio Logo"
          className="h-12 md:h-16 lg:h-24 mx-auto drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 2 }}
        />

        <motion.p
          className="mt-4 text-xl md:text-2xl text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
            ARCHITECTURE | INTERIOR | URBANISM
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 animate-bounce z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
