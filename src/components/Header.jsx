import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaImages, FaPhoneAlt, FaConciergeBell } from 'react-icons/fa';
import { GiPlantRoots } from 'react-icons/gi';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const { scrollY } = useScroll();
  const [prevScroll, setPrevScroll] = useState(0);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > prevScroll && latest > 100) {
      setIsScrollingUp(false);
    } else if (latest < prevScroll && latest > 100) {
      setIsScrollingUp(true);
    }
    setPrevScroll(latest);
  });

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { to: 'home', icon: <FaHome />, text: 'Home' },
    { to: 'gallery', icon: <FaImages />, text: 'Gallery' },
    { to: 'amenities', icon: <FaConciergeBell />, text: 'Amenities' },
    { to: 'about', icon: <FaInfoCircle />, text: 'About Us' },
    { to: 'contact', icon: <FaPhoneAlt />, text: 'Contact' },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.10, ease: "easeOut" }}
      className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10"
      style={{
        borderRadius: isScrollingUp ? 40 : 0,
        margin: isScrollingUp ? 5 : 0,
        padding: isScrollingUp ? 5 : 0
      }}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
           initial={{ opacity: 0, x: -10 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <GiPlantRoots className="text-emerald-600 text-2xl animate-bounce" />
            <span className="text-xl font-semibold text-[#fff3cd]">
              Krushi<span className="text-emerald-600">Unnati</span>
            </span>
          </motion.div>


         

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <ScrollLink
                key={index}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="group flex items-center cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="p-2 rounded-full bg-white/5 hover:bg-emerald-50 transition-colors"
                >
                  <span className="text-yellow-600 group-hover:text-emerald-600">
                    {item.icon}
                  </span>
                </motion.div>
                <motion.span
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="ml-2 text-sm font-medium text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  {item.text}
                </motion.span>
              </ScrollLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-emerald-50 transition-colors"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          className="lg:hidden absolute w-full bg-white/95 backdrop-blur-sm border-b border-white/10"
        >
          <div className="px-4 pb-4 space-y-2">
            {navItems.map((item, index) => (
              <ScrollLink
                key={index}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="flex items-center p-3 rounded-lg hover:bg-emerald-50 transition-colors cursor-pointer"
              >
                <span className="text-emerald-600">{item.icon}</span>
                <span className="ml-3 text-gray-700">{item.text}</span>
              </ScrollLink>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
