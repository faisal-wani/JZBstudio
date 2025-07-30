import React from "react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      name: "Architectural Design",
      icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    },
    {
      name: "Urban Planning",
      icon: "M17 14v6m-3-3h6m-3 3V8m-3 3h6m-3 3V2",
    },
    { name: "Interior Design", icon: "M5 3l14 9-14 9V3z" },
    {
      name: "Sustainable Solutions",
      icon: "M12 1L3 6v6l9 5 9-5V6l-9-5zm0 14.99V23",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 rounded-xl shadow-inner mt-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          className="text-4xl text-center mb-12 font-bold text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Core Services
        </motion.h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Icon */}
              <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={service.icon}
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.name}
              </h3>
              <p className="text-gray-600 text-sm">
                Comprehensive solutions from concept to completion, tailored to
                your needs.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
