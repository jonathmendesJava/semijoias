
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

// Component for the jewelry store's navigation bar
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled 
          ? "py-2 bg-black/90 shadow-lg backdrop-blur-sm" 
          : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo - COMMENT: Replace with your actual logo or text */}
        <a href="#" className="text-2xl md:text-3xl font-playfair font-bold text-gold">
          Elysian Jewels
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          {/* COMMENT: Edit or add more navigation links as needed */}
          <a href="#home" className="nav-link">Início</a>
          <a href="#about" className="nav-link">Sobre</a>
          <a href="#collections" className="nav-link">Coleções</a>
          <a href="#contact" className="nav-link">Contato</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-gold transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md py-4 md:hidden">
            <div className="flex flex-col items-center space-y-4 px-4">
              {/* COMMENT: Edit or add more navigation links as needed */}
              <a href="#home" className="nav-link text-lg w-full text-center py-2" onClick={() => setMobileMenuOpen(false)}>
                Início
              </a>
              <a href="#about" className="nav-link text-lg w-full text-center py-2" onClick={() => setMobileMenuOpen(false)}>
                Sobre
              </a>
              <a href="#collections" className="nav-link text-lg w-full text-center py-2" onClick={() => setMobileMenuOpen(false)}>
                Coleções
              </a>
              <a href="#contact" className="nav-link text-lg w-full text-center py-2" onClick={() => setMobileMenuOpen(false)}>
                Contato
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
