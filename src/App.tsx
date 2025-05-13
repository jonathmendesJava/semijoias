
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Collections from '@/components/Collections';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const App = () => {
  // Scroll to the top when the app loads
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />
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
    </TooltipProvider>
  );
};

export default App;
