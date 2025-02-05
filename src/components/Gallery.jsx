


// Array of images
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

// Import images
import hero1 from '../assets/H1.jpeg';
import hero2 from '../assets/H2.jpeg';
import hero3 from '../assets/H3.jpeg';
import hero4 from '../assets/H4.jpeg';
import hero5 from '../assets/H5.jpeg';
import hero6 from '../assets/H6.jpeg';
import hero7 from '../assets/H7.jpeg';
import hero8 from '../assets/H8.jpeg';
import hero9 from '../assets/A1.jpeg';
import hero10 from '../assets/A2.jpeg';
import hero11 from '../assets/A3.jpeg';
import hero12 from '../assets/A4.jpeg';
import hero13 from '../assets/A5.jpeg';
import hero14 from '../assets/S1.JPG';
import hero15 from '../assets/S2.JPG';
import hero16 from '../assets/S3.JPG';
import hero17 from '../assets/S4.JPG';
import hero18 from '../assets/S5.JPG';
import hero19 from '../assets/S6.JPG';



// Array of images
const images = [hero1, hero2, hero3, hero4, hero5, hero6, hero7, hero8, hero9, hero10, hero11, hero12, hero13,hero14,hero15,hero16,hero17,hero18,hero19];

const PhotoGallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 3 seconds
    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <section className="bg-[#fff3cd] text-black py-16 overflow-x-hidden">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-emerald-600">Our Photo Gallery</h2>
          <p className="text-lg text-gray-600 mt-4">Explore the elegance of Krushi Unnati Farm through these photos</p>
        </div>

        {/* Scrollable Gallery (Carousel) */}
        <div className="overflow-hidden relative w-full">
          <div
            className="flex transition-transform duration-700 ease-in-out space-x-4"
            style={{ transform: `translateX(-${currentImageIndex * 320}px)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="relative group w-80 h-80 flex-shrink-0">
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-lg transition duration-500 transform group-hover:scale-110"
                  onClick={() => openModal(image)}
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black opacity-0 group-hover:opacity-60 transition duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Image Lightbox"
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center p-4"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        >
          <div className="relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl hover:text-yellow-400 transition duration-300"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Enlarged"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default PhotoGallery;