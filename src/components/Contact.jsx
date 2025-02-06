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
            className="bg-black/80 p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Message Us</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded bg-[#fff3cd] text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded bg-[#fff3cd] text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 rounded bg-[#fff3cd] text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
              <motion.button
                type="submit"
                className="w-full bg-emerald-600 py-3 rounded text-white font-semibold hover:bg-emerald-700 transition-all"
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
              className="flex items-center space-x-4 bg-black/80 p-4 rounded-lg shadow-lg cursor-pointer hover:bg-emerald-600 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <a href="mailto:contact@krushiunnati.in" className="flex items-center space-x-4">
                <FaEnvelope className="text-white text-xl" />
                <p className="text-lg text-white">contact@krushiunnati.in</p>
              </a>
            </motion.div>

            <motion.div
              className="flex items-center space-x-4 bg-black/80 p-4 rounded-lg shadow-lg cursor-pointer hover:bg-emerald-600 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <a href="tel:+917822827875" className="flex items-center space-x-4">
                <FaPhoneAlt className="text-white text-xl" />
                <p className="text-lg text-white">+91 78228 27875</p>
              </a>
            </motion.div>

            <motion.div
              className="flex items-center space-x-4 bg-black/80 p-4 rounded-lg shadow-lg cursor-pointer hover:bg-emerald-600 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              <a
                href="https://wa.me/917822827875"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4"
              >
                <FaWhatsapp className="text-white text-xl" />
                <p className="text-lg text-white">WhatsApp Us (Chat Now)</p>
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Google Map */}
        <motion.div
          className="mt-12 max-w-6xl mx-auto rounded-lg overflow-hidden shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <iframe
            className="w-full h-80"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3784.058850885525!2d74.28736497519068!3d18.48099328260493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDI4JzUxLjYiTiA3NMKwMTcnMjMuOCJF!5e0!3m2!1sen!2sin!4v1738843265868!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
