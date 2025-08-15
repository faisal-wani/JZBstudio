import React from "react";
import { motion } from "framer-motion";
import "./font.css"; // import the font styles

const AboutSection = () => {
  return (
    <section className="py-20 mt-10"> {/* No background, fully transparent */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          className="core-services-title text-4xl mb-6 font-bold text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          THE STUDIO
        </motion.h2>

        {/* Underline */}
        <motion.div
          className="h-1 w-24 bg-blue-500 mx-auto mb-12 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        {/* Text content */}
        <motion.div
          className="text-lg text-white/90 space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p>
            At <strong>Your Firm Name</strong>, we believe architecture is more
            than just buildings; it's about crafting experiences, fostering
            communities, and shaping the future. With a passion for innovative
            design and sustainable practices, we transform visions into
            realities.
          </p>
          <p>
            Founded in 20XX, our firm has grown into a collaborative hub of
            talented architects, designers, and engineers. We pride ourselves on
            a client-centric approach, ensuring every project reflects the
            unique aspirations and functional needs of its inhabitants.
          </p>
          <p>
            From groundbreaking urban developments to serene private residences,
            our portfolio showcases a commitment to excellence and environmental
            responsibility.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
