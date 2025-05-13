
import React from 'react';

// Footer component for the jewelry store
const Footer = () => {
  // Get current year for copyright
  const currentYear = new Date().getFullYear();
  
  // COMMENT: Replace with your actual business information
  const businessInfo = {
    name: "Elysian Jewels",
    developerName: "YourCompany",
    developerUrl: "https://yourcompany.com"
  };

  return (
    <footer className="bg-dark py-10">
      <div className="container mx-auto px-4">
        {/* Footer content */}
        <div className="flex flex-col items-center">
          {/* Logo - COMMENT: Replace with your actual logo */}
          <a href="#" className="text-2xl font-playfair font-bold text-gold mb-6">
            Elysian Jewels
          </a>
          
          {/* Navigation - COMMENT: Edit or add more navigation links as needed */}
          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              <li>
                <a href="#home" className="text-white hover:text-gold transition-colors">Início</a>
              </li>
              <li>
                <a href="#about" className="text-white hover:text-gold transition-colors">Sobre</a>
              </li>
              <li>
                <a href="#collections" className="text-white hover:text-gold transition-colors">Coleções</a>
              </li>
              <li>
                <a href="#contact" className="text-white hover:text-gold transition-colors">Contato</a>
              </li>
            </ul>
          </nav>
          
          {/* Separator */}
          <div className="h-px w-full max-w-4xl bg-white/20 mb-6"></div>
          
          {/* Copyright and developer information */}
          <div className="text-center text-white/60 text-sm">
            {/* COMMENT: Edit copyright information here */}
            <p className="mb-1">
              © {currentYear} {businessInfo.name}. Todos os direitos reservados.
            </p>
            
            {/* COMMENT: Edit developer information here */}
            <p>
              Desenvolvido por{' '}
              <a 
                href={businessInfo.developerUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light transition-colors"
              >
                {businessInfo.developerName}
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
