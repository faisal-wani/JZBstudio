import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <motion.div
      ref={ref}
      className="relative flex items-center justify-center min-h-screen overflow-hidden rounded-b-3xl shadow-xl bg-transparent"
      initial="hidden"
      animate="visible"
    >
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

      {/* Center Logo */}
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
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
