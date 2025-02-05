import React from 'react';
import { motion } from 'framer-motion';
import heroVideo from '../assets/hero.mp4';

const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover brightness-[0.85]"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Minimal Overlay Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-medium mb-4 tracking-tight"
        >
          Krushi Unnati
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <div className="h-[2px] w-24 bg-white/70 mb-4 mx-auto" />
          <p className="text-lg md:text-xl text-white/90 font-light max-w-2xl">
            Where nature meets modern elegance
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex gap-4 mt-4"
        >
          <a
            href="#about"
            className="px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 transition-all duration-300 rounded-lg text-lg font-medium"
          >
            Discover More
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 rounded-lg text-lg font-medium"
          >
            Book Experience
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;