import { Card, CardContent } from "@/components/ui/card";
import castelatto from "@/assets/brand-castelatto.jpg";
import portobello from "@/assets/brand-portobello.jpg";
import deca from "@/assets/brand-deca.jpg";
import jacuzzi from "@/assets/brand-jacuzzi.jpg";

const BrandsSection = () => {
  const brands = [
    {
      name: "Castelatto",
      description: "Revestimentos cimentícios 3D, paredes escultóricas que transformam ambientes em obras de arte.",
      image: castelatto,
    },
    {
      name: "Portobello",
      description: "Porcelanatos de grande formato que imitam mármores nobres, elegância em cada detalhe.",
      image: portobello,
    },
    {
      name: "Deca",
      description: "Metais e louças de design premiado, funcionalidade e beleza em perfeita harmonia.",
      image: deca,
    },
    {
      name: "Jacuzzi",
      description: "Banheiras e spas de luxo, a experiência definitiva em relaxamento e bem-estar.",
      image: jacuzzi,
    },
  ];

  return (
    <section id="marcas" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
            A Curadoria Definitiva para o 
            <span className="luxury-text-gradient block mt-2">
              Seu Projeto
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Marcas reconhecidas mundialmente, selecionadas criteriosamente para oferecer 
            o que há de mais exclusivo em acabamentos premium.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <Card 
              key={brand.name} 
              className="group hover:scale-105 transition-all duration-500 elegant-shadow hover:luxury-shadow cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={brand.image}
                    alt={`${brand.name} produtos premium`}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {brand.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {brand.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;