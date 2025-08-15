import React from "react";
import { motion } from "framer-motion";
import "./font.css"; // contains Monument Extended font styles

const ContactSection = () => {
  return (
    <section className="py-20 bg-transparent backdrop-blur-sm rounded-xl shadow-inner mt-10 border border-white/10">
      <div className="max-w-2xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          className="core-services-title text-4xl text-center mb-12 font-bold text-white drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          GET IN TOUCH
        </motion.h2>

        {/* Contact Form */}
        <form className="space-y-6">
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <label
              htmlFor="name"
              className="block text-white/90 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-white/20 bg-white/10 text-white rounded-lg px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your Name"
            />
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <label
              htmlFor="email"
              className="block text-white/90 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-white/20 bg-white/10 text-white rounded-lg px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="your@email.com"
            />
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <label
              htmlFor="message"
              className="block text-white/90 text-sm font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="6"
              className="w-full border border-white/20 bg-white/10 text-white rounded-lg px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Tell us about your project..."
            ></textarea>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full bg-blue-600/80 text-white font-bold py-3 rounded-lg hover:bg-blue-700/80 transition-all duration-300"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
