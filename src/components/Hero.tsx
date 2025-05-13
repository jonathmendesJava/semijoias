
import React from 'react';

// Hero section component for the jewelry store
const Hero = () => {
  return (
    <section id="home" className="relative bg-dark h-screen flex items-center">
      {/* Background Image - COMMENT: Replace with your own jewelry image URL */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=2070&auto=format&fit=crop')] 
             bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl animate-fade-in">
          {/* COMMENT: Modify headline text here */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Elegância em <span className="text-gold-gradient">Semi<span className="font-light">joias</span></span>
          </h1>

          {/* COMMENT: Modify tagline text here */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            Descubra peças exclusivas que combinam sofisticação, design moderno e acabamento de alta qualidade para momentos inesquecíveis.
          </p>

          {/* COMMENT: Modify button text and link here */}
          <a 
            href="#collections" 
            className="inline-block bg-gold hover:bg-gold-dark text-black font-semibold px-8 py-3 rounded transition-colors duration-300"
          >
            Ver Coleção
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
