import React from "react";

import { motion } from "framer-motion";
import { FaSwimmingPool, FaFireAlt, FaWifi, FaUtensils, FaTree, FaParking } from "react-icons/fa";

const amenities = [
  { Icon: FaSwimmingPool, title: "Swimming Pool", desc: "Relax and unwind in our serene swimming pool surrounded by nature." },
  { Icon: FaFireAlt, title: "Barbecue Area", desc: "Enjoy a delightful barbecue experience with friends and family." },
  { Icon: FaWifi, title: "Free Wi-Fi", desc: "Stay connected with our high-speed Wi-Fi throughout the farm." },
  { Icon: FaUtensils, title: "Fully Equipped Kitchen", desc: "Cook your favorite meals with our fully equipped kitchen amenities." },
  { Icon: FaTree, title: "Beautiful Garden", desc: "Relax in our lush green garden and immerse yourself in nature." },
  { Icon: FaParking, title: "Free Parking", desc: "Ample free parking spaces available for your convenience." }
];

export default function Timeline() {
  return (
    <>
      
      <section className="bg-[#fff3cd] py-20 bg-fff3cd">
        <h2 className="mb-12 text-4xl font-bold text-center text-emerald-600">
          Explore Our Premium Amenities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              className="bg-emerald-600 hover:bg-emerald-700 transition duration-300 rounded-lg shadow-md p-6 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <amenity.Icon className="text-5xl text-fff3cd mb-4" />
              <h3 className="text-2xl font-semibold mb-2 text-fff3cd">{amenity.title}</h3>
              <p className="text-lg text-fff3cd">{amenity.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    
    </>
  );
}
