import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section className="relative bg-[#fff3cd] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Side - Text Content */}
        <motion.div 
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }} // Slight pop effect on hover
        >
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Welcome to <span className="text-emerald-600">Krushi Unnati</span>  
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Nestled amidst lush greenery, Krushi Unnati is a <strong>premium farmstay</strong>,   
            where modern luxury meets nature’s serenity. Whether you seek a <strong>peaceful getaway, a vibrant celebration, or a corporate retreat</strong>,  
            our farm provides the perfect ambiance for every occasion.  
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Immerse yourself in a tranquil environment, <strong>indulge in premium  
            amenities</strong>, and experience hospitality that resonates with  
            warmth and sophistication.
          </p>

          <motion.button 
            className="mt-6 px-6 py-3 bg-emerald-600 text-white rounded-full shadow-lg 
                       hover:bg-emerald-700 transition-all duration-300 relative overflow-hidden"
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-emerald-800 opacity-20 rounded-full transform scale-0 transition-transform duration-500 hover:scale-150"></span>
            Discover More
          </motion.button>
        </motion.div>

        {/* Right Side - Video */}
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05, rotate: 2 }} // Slight zoom and tilt effect
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full rounded-xl shadow-xl transition-all duration-500 hover:shadow-2xl object-cover"
          >
            <source src="/about.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
