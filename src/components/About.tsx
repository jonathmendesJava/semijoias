
import React from 'react';

// About section component for the jewelry store
const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Image Side - COMMENT: Replace with your store or jewelry image */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <div className="relative">
              {/* Main image - COMMENT: Replace with your actual image URL */}
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1974&auto=format&fit=crop"
                  alt="Elysian Jewels Elegância" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Removido o div decorativo que estava causando o problema do quadrado */}
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2 md:pl-8">
            {/* Section title - COMMENT: Edit heading here */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Sobre a <span className="text-gold">Elysian Jewels</span>
            </h2>
            
            {/* Decorative line */}
            <div className="h-1 w-20 bg-gold mb-8"></div>
            
            {/* About text - COMMENT: Replace with your own story */}
            <div className="space-y-4 text-white/80">
              <p>
                Fundada em 2018, a Elysian Jewels nasceu da paixão por criar semijoias que combinam design contemporâneo com técnicas artesanais tradicionais. Nossas peças são cuidadosamente elaboradas para mulheres que valorizam exclusividade e sofisticação.
              </p>
              <p>
                Trabalhamos com os melhores materiais e técnicas de banho em ouro 18k, garantindo peças duráveis e de alto padrão. Cada detalhe é pensado para transmitir elegância e personalidade, transformando momentos comuns em experiências especiais.
              </p>
              <p>
                Nossa missão é oferecer semijoias premium com atendimento personalizado, valorizando a individualidade e o estilo único de cada cliente. Acreditamos que acessórios não são apenas complementos, mas expressões de quem somos.
              </p>
            </div>
            
            {/* Values - COMMENT: Edit or add more values as needed */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-gold rounded-full mr-2"></div>
                <span className="text-white">Qualidade Premium</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-gold rounded-full mr-2"></div>
                <span className="text-white">Design Exclusivo</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-gold rounded-full mr-2"></div>
                <span className="text-white">Atendimento Personalizado</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-gold rounded-full mr-2"></div>
                <span className="text-white">Elegância Atemporal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
