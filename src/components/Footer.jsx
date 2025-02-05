import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { GiPlantRoots } from "react-icons/gi";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-black/80 text-white py-6 relative overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Logo with Animation */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex items-center space-x-2"
        >
          <GiPlantRoots className="text-emerald-600 text-3xl animate-bounce" />
          <span className="text-2xl font-semibold text-[#fff3cd]">
            Krushi<span className="text-emerald-600">Unnati</span>
          </span>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
          className="flex space-x-5 mt-4 md:mt-0"
        >
          {[
            { icon: <FaFacebook />, url: "https://www.facebook.com/profile.php?id=61570293950663&mibextid=ZbWKwL", label: "Facebook" },
            { icon: <FaTwitter />, url: "https://twitter.com/KrushiUnnatiVilla", label: "Twitter" },
            { icon: <FaInstagram />, url: "https://www.instagram.com/krushi_unnati_farm?igsh=Yjhxb29hdHh2dm5s", label: "Instagram" },
            { icon: <FaLinkedin />, url: "https://www.linkedin.com/company/KrushiUnnatiVilla", label: "LinkedIn" }
          ].map((social, index) => (
            <a
              key={index}
              href={social.url}
              className="text-2xl hover:scale-110 transition-transform duration-300 hover:text-yellow-300"
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
        className="text-center text-sm mt-4"
      >
        <p>&copy; {new Date().getFullYear()} Krushi Unnati Villa. All rights reserved.</p>
        <span>
          Developed by{" "}
          <a
            href="https://musitech.in"
            className="text-yellow-400 hover:text-yellow-500 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            MusiTech
          </a>
        </span>
      </motion.div>
    </footer>
  );
};

export default Footer;
