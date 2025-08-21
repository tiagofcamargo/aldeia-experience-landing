import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import bathroomImg from "@/assets/gallery-bathroom.jpg";
import kitchenImg from "@/assets/gallery-kitchen.jpg";
import livingImg from "@/assets/gallery-living.jpg";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: bathroomImg,
      alt: "Banheiro de luxo com acabamentos premium",
      title: "Banheiro Premium",
      description: "Mármores nobres e metais de design premiado"
    },
    {
      src: kitchenImg,
      alt: "Cozinha moderna com acabamentos sofisticados",
      title: "Cozinha Gourmet",
      description: "Elegância funcional em cada detalhe"
    },
    {
      src: livingImg,
      alt: "Sala de estar com revestimentos exclusivos",
      title: "Living Sofisticado",
      description: "Ambientes que inspiram e acolhem"
    },
    {
      src: bathroomImg,
      alt: "Spa residencial de luxo",
      title: "Spa Residencial",
      description: "Relaxamento em sua própria casa"
    },
    {
      src: kitchenImg,
      alt: "Área gourmet externa premium",
      title: "Área Gourmet",
      description: "Entretenimento com sofisticação"
    },
    {
      src: livingImg,
      alt: "Home office com acabamentos exclusivos",
      title: "Home Office Premium",
      description: "Produtividade em ambiente inspirador"
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