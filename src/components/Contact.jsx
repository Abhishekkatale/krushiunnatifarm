import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";



export default function ContactUs() {
  return (
    <section className="bg-[#fff3cd] text-white py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.h2 
          className="text-emerald-600 text-4xl font-bold text-center mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Connect With Us
        </motion.h2>
        
        <motion.p 
          className="text-center text-lg mb-12 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Your luxury experience begins here. Reach out for premium bookings or inquiries.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            className="bg-gray-800 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Message Us</h3>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea 
                placeholder="Your Message" 
                rows="4" 
                className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
              <motion.button 
                type="submit" 
                className="w-full bg-blue-600 py-3 rounded text-white font-semibold hover:bg-blue-700 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="flex flex-col space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold">Our Contact Details</h3>
            
            <motion.div 
              className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg shadow-lg cursor-pointer hover:bg-gray-700 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <FaEnvelope className="text-blue-400 text-xl" />
              <p className="text-lg">contact@krushiunnati.in</p>
            </motion.div>

            <motion.div 
              className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg shadow-lg cursor-pointer hover:bg-gray-700 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <FaPhoneAlt className="text-green-400 text-xl" />
              <p className="text-lg">+91 78228 27875</p>
            </motion.div>

            <motion.div 
              className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg shadow-lg cursor-pointer hover:bg-gray-700 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <FaWhatsapp className="text-green-500 text-xl" />
              <p className="text-lg">WhatsApp Us (Chat Now)</p>
            </motion.div>
          </motion.div>

          
        </div>

        <motion.div 
        className="mt-12 max-w-6xl mx-auto rounded-lg overflow-hidden shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <iframe 
          className="w-full h-80"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.484953207038!2d144.9631!3d-37.8136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577dc533e66e3!2sKrushi%20Unnati!5e0!3m2!1sen!2sin!4v1618318018922!5m2!1sen!2sin" 
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </motion.div>
      </div>
    </section>
  );
}
