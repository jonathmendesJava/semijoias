
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Collection section with carousel for the jewelry store
const Collections = () => {
  // Collection items - COMMENT: Replace these with your own jewelry items
  const items = [
    {
      id: 1,
      title: "Coleção Celestial",
      description: "Peças inspiradas em corpos celestes, com designs elegantes e delicados.",
      image: "https://images.unsplash.com/photo-1633810541242-bb67bcc54fba?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Coleção Eternity",
      description: "Linhas clássicas e atemporais para momentos que ficam para sempre.",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Coleção Lumina",
      description: "Brilho e sofisticação em peças que capturam e refletem a luz de maneira única.",
      image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Coleção Royal",
      description: "Inspirada na realeza, com peças imponentes que exalam luxo e exclusividade.",
      image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Coleção Essence",
      description: "Minimalismo e elegância para o dia a dia, sem abrir mão do requinte.",
      image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  // Set up automatic carousel sliding
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        goToNext();
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [currentIndex, isAutoPlaying]);
  
  // Navigate to previous slide
  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    // Pause auto-play for a while when manually changing slides
    pauseAutoPlay();
  };
  
  // Navigate to next slide
  const goToNext = () => {
    const isLastSlide = currentIndex === items.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    // Pause auto-play for a while when manually changing slides
    pauseAutoPlay();
  };
  
  // Navigate to specific slide
  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
    // Pause auto-play for a while when manually changing slides
    pauseAutoPlay();
  };
  
  // Pause auto-play for a few seconds after manual navigation
  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

  // Touch event handlers for mobile swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left (next)
      goToNext();
    }
    
    if (touchStart - touchEnd < -50) {
      // Swipe right (prev)
      goToPrev();
    }
  };

  return (
    <section id="collections" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          {/* COMMENT: Edit collection heading here */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Nossas <span className="text-gold">Coleções</span>
          </h2>
          {/* COMMENT: Edit collections description here */}
          <p className="text-white/80 max-w-2xl mx-auto">
            Descubra nossas coleções exclusivas de semijoias, criadas com dedicação e atenção aos mínimos detalhes para destacar sua beleza natural.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Carousel */}
          <div 
            className="h-[500px] md:h-[600px] w-full relative overflow-hidden rounded-lg"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Carousel Slides - COMMENT: Add or remove slides as needed by modifying the items array above */}
            {items.map((item, index) => (
              <div
                key={item.id}
                className={cn(
                  "absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out transform",
                  index === currentIndex 
                    ? "opacity-100 translate-x-0" 
                    : index < currentIndex 
                      ? "opacity-0 -translate-x-full" 
                      : "opacity-0 translate-x-full"
                )}
              >
                {/* Image background */}
                <div className="absolute inset-0">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-10">
                  <div className={cn(
                    "transform transition-all duration-700 delay-300",
                    index === currentIndex ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  )}>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/80 max-w-xl">{item.description}</p>
                    
                    {/* COMMENT: Edit the button text and link here */}
                    <a 
                      href="#contact" 
                      className="inline-block mt-4 px-5 py-2 border border-gold text-gold hover:bg-gold hover:text-black transition-colors duration-300"
                    >
                      Descubra Mais
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={goToPrev}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 hover:bg-gold/80 text-white p-2 rounded-full transition-colors z-20"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 hover:bg-gold/80 text-white p-2 rounded-full transition-colors z-20"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>

          {/* Indicator Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-6 bg-gold' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
