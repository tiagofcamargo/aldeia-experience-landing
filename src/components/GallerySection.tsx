import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import foto1 from "@/assets/foto1.jpg";
import foto2 from "@/assets/foto2.jpg";
import foto3 from "@/assets/foto3.jpg";
import foto4 from "@/assets/foto4.jpg";
import foto5 from "@/assets/foto5.jpg";
import foto6 from "@/assets/foto6.jpg";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: foto1,
      alt: "Fachada de casa contemporânea com revestimento em pedra e linhas retas.",
      title: "Fachada moderna com acabamento em pedra natural.",
      description: "Fachada de residência com design minimalista, revestimento em pedra natural e garagem integrada, trazendo sofisticação e elegância ao projeto arquitetônico."
    },
    {
      src: foto2,
      alt: "Sala de estar ampla com grandes aberturas e vista para área verde.",
      title: "Sala integrada com acabamento em concreto aparente.",
      description: "Espaço de convivência integrado com amplo vão livre, acabamento em concreto aparente e móveis de design, que valoriza a iluminação natural e o contato com a natureza."
    },
    {
      src: foto3,
      alt: "Cozinha moderna planejada com armários em cinza e madeira.",
      title: "Cozinha planejada com acabamento em laca cinza.",
      description: "Cozinha sofisticada com bancadas em pedra, armários planejados em laca cinza e detalhes em madeira, que combinam funcionalidade e estética contemporânea."
    },
    {
      src: foto4,
      alt: "Área gourmet integrada à piscina com acabamentos em concreto.",
      title: "Área externa com piscina e espaço gourmet.",
      description: "Área de lazer completa com piscina moderna, deck integrado e espaço gourmet, com revestimentos em concreto que proporcionam estilo e conforto."
    },
    {
      src: foto5,
      alt: "Banheiro elegante com mármore e detalhes em madeira.",
      title: "Banheiro sofisticado em mármore e madeira.",
      description: "Banheiro com revestimento em mármore, bancada dupla e detalhes em madeira natural, criando um ambiente requintado e funcional."
    },
    {
      src: foto6,
      alt: "Exposição de louças brancas com design moderno e iluminação decorativa.",
      title: "Linha de louças modernas Solar – Fabiana Queiroga.",
      description: "Mostruário da coleção Solar, assinado por Fabiana Queiroga, com louças de design contemporâneo, iluminação cenográfica e acabamento sofisticado."
    },
  ];

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="inspiracao" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
            Projetos que
            <span className="luxury-text-gradient block mt-2">
              Ganham Vida
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Descubra como nossos acabamentos premium transformam ambientes 
            comuns em espaços extraordinários.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg elegant-shadow hover:luxury-shadow transition-all duration-500"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/80 via-luxury-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-200">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            variant="luxury" 
            size="xl"
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Quero um Projeto Assim
          </Button>
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="max-w-full max-h-full object-contain"
              />
              
              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              
              {/* Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
              >
                <ArrowLeft className="w-6 h-6 text-white" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
              >
                <ArrowRight className="w-6 h-6 text-white" />
              </button>
              
              {/* Image info */}
              <div className="absolute bottom-4 left-4 right-4 text-center text-white">
                <h3 className="text-xl font-semibold mb-2">{images[selectedImage].title}</h3>
                <p className="text-gray-200">{images[selectedImage].description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;