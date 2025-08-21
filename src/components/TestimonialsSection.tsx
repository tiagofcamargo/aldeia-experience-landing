import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Arq. Marina Oliveira",
      role: "Arquiteta Renomada",
      content: "A Aldeia Acabamentos é minha parceira de confiança há anos. A curadoria impecável e o atendimento especializado fazem toda a diferença nos meus projetos de alto padrão.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1594736797933-d0e501ba2fe1?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Carlos Mendes",
      role: "Cliente Residencial",
      content: "Transformaram minha casa em um verdadeiro refúgio de luxo. A qualidade dos produtos e a expertise da equipe superaram todas as minhas expectativas. Simplesmente excepcional!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Designer Paula Santos",
      role: "Designer de Interiores",
      content: "A variedade de marcas premium e a qualidade do showroom me permitem especificar com confiança. Meus clientes sempre ficam impressionados com o resultado final.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
            Confiança que se Reflete em
            <span className="luxury-text-gradient block mt-2">
              Cada Detalhe
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            O reconhecimento de quem constrói e vive projetos únicos é nossa maior conquista.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="hover:scale-105 transition-all duration-500 elegant-shadow hover:luxury-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;