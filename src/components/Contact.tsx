
import React from 'react';
import { MapPin, Instagram, AppWindow } from "lucide-react";

// Contact section component with Google Maps integration
const Contact = () => {
  // COMMENT: Replace with your actual business location and Google Maps URL
  const businessLocation = {
    address: "Av. Paulista, 1000 - Bela Vista, São Paulo - SP",
    googleMapsUrl: "https://maps.google.com/?q=Av.+Paulista,+1000+-+Bela+Vista,+São+Paulo+-+SP"
  };

  // COMMENT: Replace with your actual contact info
  const contactInfo = {
    phone: "(11) 98765-4321",
    email: "contato@elysianjewels.com.br",
    instagram: "elysianjewels",
    appLink: "https://play.google.com/store/apps/details?id=com.elysianjewels.app"
  };

  // Function to open Google Maps
  const openGoogleMaps = () => {
    window.open(businessLocation.googleMapsUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-black relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          {/* COMMENT: Edit contact heading here */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Entre em <span className="text-gold">Contato</span>
          </h2>
          {/* COMMENT: Edit contact description here */}
          <p className="text-white/80 max-w-2xl mx-auto">
            Visite nossa loja ou entre em contato para conhecer nossas coleções exclusivas e receber um atendimento personalizado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Map Section */}
          <div className="w-full rounded-lg overflow-hidden shadow-lg h-[400px] bg-gray-200 relative">
            {/* COMMENT: Replace with your actual Google Maps embed code */}
            <iframe
              title="Store Location"
              className="w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2212907195383!2d-46.654365999999996!3d-23.561496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7e271c04b%3A0x4b67c4d23801a0c6!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1610136800000!5m2!1spt-BR!2sbr"
              allowFullScreen
              loading="lazy"
            ></iframe>
            
            {/* Map Overlay Button */}
            <button 
              onClick={openGoogleMaps}
              className="absolute bottom-4 right-4 bg-gold hover:bg-gold-dark text-black font-semibold px-4 py-2 rounded transition-colors duration-300 flex items-center"
            >
              <MapPin className="mr-1" size={18} />
              Abrir no Google Maps
            </button>
          </div>

          {/* Contact Information */}
          <div className="bg-dark-light rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-semibold text-gold mb-6">Informações de Contato</h3>
            
            {/* Contact Details */}
            <div className="space-y-8">
              {/* Address - COMMENT: Edit address here */}
              <div className="flex items-start">
                <div className="bg-gold/10 p-3 rounded-full mr-4">
                  <MapPin className="text-gold" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Endereço</h4>
                  <p className="text-white/80">{businessLocation.address}</p>
                  <p className="text-white/80 mt-1">Segunda a Sábado: 10h às 20h</p>
                </div>
              </div>
              
              {/* Phone and Email */}
              <div className="flex items-start">
                <div className="bg-gold/10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-gold" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Telefone</h4>
                  {/* COMMENT: Edit phone number here */}
                  <p className="text-white/80">{contactInfo.phone}</p>
                  <p className="text-white/80 mt-1">Atendimento via WhatsApp</p>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex items-start">
                <div className="bg-gold/10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-gold" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  {/* COMMENT: Edit email here */}
                  <p className="text-white/80">{contactInfo.email}</p>
                </div>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="mt-8">
              <h4 className="text-white font-medium mb-3">Conecte-se conosco</h4>
              <div className="flex space-x-4">
                {/* COMMENT: Edit Instagram link here */}
                <a
                  href={`https://instagram.com/${contactInfo.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold/10 hover:bg-gold/20 p-3 rounded-full text-gold transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                
                {/* COMMENT: Edit App link here */}
                <a
                  href={contactInfo.appLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold/10 hover:bg-gold/20 p-3 rounded-full text-gold transition-colors"
                  aria-label="Our App"
                >
                  <AppWindow size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
