import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-showroom.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-dark/70 via-luxury-dark/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center md:text-left">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-white animate-fade-in-up">
            Acabamentos Premium para
            <span className="luxury-text-gradient block mt-2">
              Projetos que Inspiram
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            As marcas mais desejadas do mundo, agora em Goiânia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button 
              variant="hero"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Agende sua Visita Exclusiva
            </Button>
            
            <Button 
              variant="luxuryOutline" 
              size="xl"
              className="text-white border-white hover:bg-white hover:text-luxury-dark"
              onClick={() => document.getElementById('marcas')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Conheça as Marcas
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white/70" />
      </div>
    </section>
  );
};

export default HeroSection;