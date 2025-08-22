import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contato em breve para agendar sua visita exclusiva.",
    });
    
    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: ""
    });
  };

  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-luxury-dark to-luxury-dark/90 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Seu projeto merece o melhor.
              <span className="luxury-text-gradient block mt-2">
                Vamos conversar?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Agende uma visita ao nosso showroom exclusivo e descubra como podemos 
              transformar seus sonhos em realidade.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                  />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="WhatsApp"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                  />
                </div>
                
                <Input
                  type="email"
                  name="email"
                  placeholder="Seu e-mail"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                />
                
                <Textarea
                  name="message"
                  placeholder="Conte-nos sobre seu projeto..."
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                />

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    type="submit"
                    variant="luxury" 
                    size="xl"
                    className="flex-1"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Agendar Minha Visita Exclusiva
                  </Button>
                  
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-serif font-bold mb-4 luxury-text-gradient">
                  Nosso Showroom
                </h3>
                <div className="space-y-3 text-gray-300">
                  <p className="flex flex-col">
                    <span className="font-semibold text-white">Endereço:</span>
                    Av. Premium, 1234 - Setor Exclusivo<br />
                    Goiânia - GO, CEP 74000-000
                  </p>
                  
                  <p className="flex flex-col">
                    <span className="font-semibold text-white">Horário de Funcionamento:</span>
                    Segunda a Sexta: 8h às 18h<br />
                    Sábado: 8h às 16h
                  </p>
                  
                  <p className="flex flex-col">
                    <span className="font-semibold text-white">Contato:</span>
                    (62) 9999-9999<br />
                    contato@aldeiaacabamentos.com.br
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold mb-4 luxury-text-gradient">
                  Por que nos escolher?
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    29 anos de excelência no mercado
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Marcas premium mundialmente reconhecidas
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Atendimento personalizado e consultivo
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Showroom exclusivo para experiência completa
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;