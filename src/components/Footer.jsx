import React from "react";

const Footer = () => {
  return (
    <footer className="bg-transparent backdrop-none text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Logo */}
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/images/JZB-LOGO.svg`}
            alt="JZBStudio Logo"
            className="h-10 mb-4"
          />
          <p className="text-sm">
            Crafting digital excellence through design and technology.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Contact</h2>
          <ul className="text-sm space-y-2">
            <li>Email: support@jzbstudio.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Location: Delhi, India</li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Follow Us</h2>
          <div className="flex flex-col space-y-2 text-sm">
            <a
              href="https://instagram.com/jzbstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com/company/jzbstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/jzbstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-10">
        © {new Date().getFullYear()} JZBStudio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
