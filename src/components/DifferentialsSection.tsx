import { CheckCircle, Users, Palette, MapPin } from "lucide-react";

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: CheckCircle,
      title: "Portfólio Completo de Alto Padrão",
      description: "Curadoria exclusiva das marcas mais prestigiadas do mercado mundial de acabamentos.",
    },
    {
      icon: Users,
      title: "Atendimento Consultivo Especializado",
      description: "Consultores especializados para orientar cada detalhe do seu projeto com excelência.",
    },
    {
      icon: Palette,
      title: "Parcerias com Profissionais Renomados",
      description: "Rede exclusiva de arquitetos e designers de prestígio para projetos únicos.",
    },
    {
      icon: MapPin,
      title: "Showroom em Localização Privilegiada",
      description: "Espaço exclusivo em Goiânia para você experienciar nossos produtos premium.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
            Uma Experiência Exclusiva,
            <span className="luxury-text-gradient block mt-2">
              do Início ao Fim
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Há 29 anos transformando sonhos em realidade através de acabamentos 
            excepcionais e atendimento incomparável.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((differential, index) => (
            <div 
              key={differential.title}
              className="text-center group hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full luxury-gradient group-hover:animate-luxury-glow transition-all duration-300">
                <differential.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                {differential.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {differential.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;