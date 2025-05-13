
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Collections from '@/components/Collections';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// Main page for the jewelry store website
const Index = () => {
  // Scroll to the top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <About />
      
      {/* Collections Section with Carousel */}
      <Collections />
      
      {/* Contact Section with Google Maps */}
      <Contact />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
