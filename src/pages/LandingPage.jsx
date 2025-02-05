// App.js
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutHero from '../components/AboutHero';
import Amenities from '../components/Amenities';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


function LandingPage() {
  return (
    <div className="font-sans bg-[#D8DBD5]">
      <Header />
      <Hero />
      <AboutHero />
      <Gallery />
      <Amenities />
 
      <Contact />
      <Footer />
    </div>
  );
}

export default LandingPage;